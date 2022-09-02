/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import {
    KBVEntry,
    MIOError,
    MIOParserResult,
    Resource,
    ResourceMeta,
    HasMeta,
    Constraint,
    MIOParserError
} from "./Interfaces/AppInternals";
import ErrorMessage from "./Definitions/ErrorMessage";
import {
    MIOTypes,
    MIOType,
    MIOTypeList,
    KBVResource,
    BundleTypes,
    KBVBundleResource
} from "./Definitions/ProfileMaps/ProfileMap";

import { Validation, ValidationError } from "io-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { fold } from "fp-ts/lib/Either";
import { Meta } from "./Definitions/FHIR/4.0.1/Profile";

import fhirpath from "fhirpath";
import fhirpathR4Model from "fhirpath/fhir-context/r4";

import * as t from "io-ts";
import { errorToString } from "./Interfaces/Util";

/**
 * Returns the profile from the given resource
 * @param resource {Resource | KBVResource | HasMeta} The MIO resource to be evaluated
 * @return Profile {string} from resource as string
 */
function getProfile(resource: Resource | KBVResource | HasMeta): string {
    const profile = resource.meta?.profile;
    return profile && profile.length ? profile[0] ?? "" : "";
}

/**
 * Evaluated the resource type of a MIO by its meta profile.
 *
 * @param resource {HasMeta} The MIO resource to be evaluated
 * @returns {ResourceMeta} The source type of the MIO
 */
export function defineResourceMeta(fileName: string, resource: HasMeta): ResourceMeta {
    const meta = resource.meta;

    if (meta && meta.profile) {
        if (meta.profile.length >= 1) {
            const profile = getProfile(resource);
            const profileParts = profile.split("|");
            const profileType = profileParts[0];

            const known = MIOTypes.some((mioType) => mioType.profile === profileType);

            if (!profileType || !known) {
                throw new MIOParserError(
                    fileName,
                    ErrorMessage.UnknownProfile(profileType),
                    ""
                );
            } else {
                let profileVersion;

                if (profileParts.length > 1) {
                    profileVersion = profileParts[1];
                }
                // This fix accounts for the lack of Version number in Observation Weight Child in MR 1.0.0
                else if (
                    profileParts.length === 1 &&
                    profileParts[0] ===
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child"
                ) {
                    profileVersion = "1.0.0";
                }

                return new ResourceMeta(profileType, profileVersion);
            }
        }

        throw new MIOParserError(fileName, ErrorMessage.NoProfile(), "");
    }

    throw new MIOParserError(fileName, ErrorMessage.NoMeta(), "");
}

/**
 * Returns the value for the given error as string
 *
 * @param error {ValidationError} Validation Error from io-ts validation
 * @returns {string} Value from the Error as string
 */
const getErrorValue = (error: ValidationError): string => {
    const value = error.value;
    if (typeof value === "string") {
        return value;
    } else {
        return JSON.stringify(value);
    }
};

/**
 * This helper function generates error messages from the io-ts decoder error.
 *
 * @param validation {Validation} Validation Error from io-ts validation
 * @param resourceIdentifier {string} Value from the Error as string
 */
export const getPaths = <A>(
    validation: Validation<A>,
    resourceIdentifier: string
): MIOError[] => {
    return pipe(
        validation,
        fold(
            (errors: ValidationError[]) => {
                const mioErrors: MIOError[] = [];
                errors.forEach((error: ValidationError) => {
                    const errorValue = getErrorValue(error);
                    const errorPath = error.context
                        .map(({ key, type }, index) => {
                            if (key !== "" && !key.match(/^\d+$/)) {
                                return key;
                            } else if (index === 0) {
                                return type.name;
                            } else {
                                return undefined;
                            }
                        })
                        .filter((s) => s !== undefined)
                        .join(".");

                    let errorMessage: string;
                    if (!error.message) {
                        const end = error.context[error.context.length - 1];
                        errorMessage = ErrorMessage.ContextEntry(end);
                    } else {
                        errorMessage = error.message;
                    }

                    const mioError: MIOError = {
                        message: errorMessage,
                        resource: resourceIdentifier,
                        path: errorPath.replace("bundleForReferenceValidation.", ""),
                        value: errorValue
                    };
                    if (
                        !mioErrors.find(
                            (e) =>
                                e.resource === mioError.resource &&
                                e.path === mioError.path &&
                                e.value === mioError.value
                        )
                    ) {
                        mioErrors.push(mioError);
                    }
                });
                return mioErrors;
            },
            () => []
        )
    );
};

/**
 * Checks whether a MIO is a KBVBundleResource or not by its meta profile string.
 *
 * @param resource {HasMeta} The MIO resource to be evaluated
 * @returns {boolean} Whether the resource is a bundle or not
 */
export function isBundle(fileName: string, resource: HasMeta): boolean {
    const type = defineResourceMeta(fileName, resource);
    return BundleTypes.some((T: MIOType) => type.isEqual(T.profile, T.version, true));
}

/**
 * The following Profiles contain errors in their constraints. Therefore they are being excluded from Constraint checks
 */
const excludingBundlesForUUIDConstraint = [
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Bundle|1.0.1",
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Bundle|1.0.1"
];

/**
 * Applies the constraints to a resource and adds the results to the parserResult
 * @param resource {Resource} The MIO resource to be evaluated
 * @param resourceIdentifier {string} The resource identifier
 * @param constraints {Constraint} The constraints to be checked
 * @param parserResult {MIOParserResult} The result with possibly new containing constraint warning/errors
 */
function checkConstraints(
    resource: Resource,
    resourceIdentifier: string,
    constraints: Constraint[],
    parserResult: MIOParserResult
): void {
    constraints.forEach((constraint) => {
        // key dom-3 wirft einen merkwuerdigen fehler... ist aber auch kein kritischer constraint, daher wird der ausgelassen
        if (resource && constraint.expression && constraint.key !== "dom-3") {
            let constraintResult: boolean[] = [];
            try {
                // Einige constraints haben einen typo, dieser wird hier ersetzt
                let expression = constraint.expression.replace("identifer", "identifier");
                expression = expression.replace("is string", "is String");
                // ZAEB 1.00.000 hat einen constraint der aufgrund eines fixen values nicht gelöst werden kann... daher ueberspringen
                if (
                    constraint.key === "UUID" &&
                    excludingBundlesForUUIDConstraint.includes(getProfile(resource))
                ) {
                    return;
                }
                // Bug in FhirPath implementation
                if (
                    expression ===
                    "dosage.text.empty().not() xor (dosage.route.empty().not() and dosage.doseAndRate.dose.empty().not())"
                ) {
                    expression =
                        "dosage.text.empty().not() xor (dosage.route.empty().not() and dosage.doseAndRate.doseQuantity.empty().not())";
                }
                constraintResult = fhirpath.evaluate(
                    resource,
                    expression,
                    {
                        resource: resource
                    },
                    fhirpathR4Model
                );
            } catch (error) {
                // hasValue is not implemented in fhirpath by now
                if (constraint.expression.includes(".hasValue()")) {
                    return;
                }
                parserResult.warnings.push({
                    message: ErrorMessage.NotResolveConstraint(
                        constraint.expression,
                        constraint.key,
                        errorToString(error)
                    ),
                    resource: getProfile(resource),
                    path: constraint.key,
                    value: resource.id
                });
            }

            if (constraintResult.includes(false)) {
                const parserError = {
                    message: ErrorMessage.Constraint(constraint.human, constraint.key),
                    resource: resource.id ?? resourceIdentifier,
                    path: constraint.expression,
                    value: constraint.key
                };

                if (constraint.severity === "error") {
                    parserResult.errors.push(parserError);
                } else if (constraint.severity === "warning") {
                    parserResult.warnings.push(parserError);
                }
            }
        }
    });
}

/**
 * Evaluates an object and tries to return a MIO instance according to its profile.
 *
 * @param fileName {string} Name of the File
 * @param resource {HasMetaAndId} The MIO resource to be evaluated which needs a meta and an id field
 * @param fullUrl {string} The resource identifier
 * @param list {MIOTypeList} List of MioTypes to be tested with
 * @param bundle {KBVBundleResource | undefined} original bundle in which the resource was contained
 * @param versioned {boolean} boolean to indicate if resource should be found with or without version number
 * @returns {MIOParserResult} a Result for the finding of the resource in the given MioTypeList
 */
export default function getResource(
    fileName: string,
    resource: Resource,
    fullUrl: string,
    list: MIOTypeList,
    bundle: KBVBundleResource | undefined = undefined,
    versioned = true
): MIOParserResult {
    const type = defineResourceMeta(fileName, resource);

    // Unknown resource..
    const parserResult: MIOParserResult = {
        fileName,
        value: resource as KBVResource,
        errors: [],
        warnings: []
    };

    let entryUrlMap: string[] = [];

    if (resource.resourceType === "Bundle") {
        entryUrlMap =
            resource.entry?.map(
                (entry: KBVEntry) => defineResourceMeta(fileName, entry.resource).profile
            ) ?? [];
    }

    let foundResource = false;

    // Try to match profiles an create instance of matching class
    list.forEach((T: MIOType) => {
        if (type.equals(new ResourceMeta(T.profile, T.version), versioned)) {
            foundResource = true;
            const context: t.ContextEntry[] = [];

            const type = resource.resourceType;

            context.push({
                key: "bundleForReferenceValidation" + (type ? `.${type}` : ""),
                actual: bundle,
                type: t.type({})
            });

            context.push({
                key: "entryFullURL",
                actual: fullUrl,
                type: t.string
            });

            const resourceResult = bundle
                ? T.type.validate(resource, context)
                : T.type.decode(resource);

            // Callback for decoding failure
            const onLeft = (): string => {
                /*
                errors.forEach((error) => {
                    if (error.message) parserLogging.warn(error.message);
                });
                 */
                return "";
            };

            // Callback for decoding success
            const onRight = (mio: KBVResource): string => {
                parserResult.value = mio;
                return "";
            };

            parserResult.errors.push(...getPaths(resourceResult, fullUrl));
            checkConstraints(resource, fullUrl, T.constraints, parserResult);

            pipe(resourceResult, fold(onLeft, onRight));
        } else if (entryUrlMap.includes(T.profile)) {
            const checkResource = resource.entry?.filter((entry: KBVEntry) => {
                const entryType = defineResourceMeta(fileName, entry.resource);
                return entryType.equals(
                    new ResourceMeta(T.profile, T.version),
                    versioned
                );
            });

            checkResource?.forEach((entry: KBVEntry) => {
                checkConstraints(
                    entry.resource as Resource,
                    fullUrl,
                    T.constraints,
                    parserResult
                );
            });
        }
    });

    if (!foundResource) {
        if (!versioned) {
            throw new MIOParserError(
                fileName,
                ErrorMessage.UnknownProfile(type.toString()),
                ""
            );
        } else {
            // TODO: should be removed when MR is fixed
            return getResource(fileName, resource, fullUrl, list, bundle, false);
        }
    }

    if (!versioned) {
        parserResult.warnings.push({
            message: ErrorMessage.ProfileWithoutVersion(type.profile),
            resource: resource.id,
            path: "",
            value: JSON.stringify(resource)
        });
    }

    return parserResult;
}

/**
 * Maps the entries in a bundle to Typescript objects
 *
 * @param fileName {string} TODO
 * @param entryArray {KBVEntry} An array of entries contained by a bundle
 * @param bundle {KBVBundleResource} original bundle in which the resource was contained
 * @return valueErrorArray {values: KBVEntry[]; errors: MIOError[];} values and errors contained in the bundle
 */
export function getAllEntries(
    fileName: string,
    entryArray: KBVEntry[],
    bundle: KBVBundleResource
): {
    values: KBVEntry[];
    errors: MIOError[];
} {
    const kbvResources: KBVEntry[] = [];
    let errors: MIOError[] = [];
    entryArray.forEach((e: KBVEntry) => {
        const result = getResource(
            fileName,
            e.resource as {
                meta: Meta;
                id: string;
            },
            e.fullUrl,
            MIOTypes,
            bundle
        );

        kbvResources.push({
            fullUrl: e.fullUrl,
            resource: result.value
        });

        errors = errors.concat(result.errors);

        // Sometimes duplicates appear
        const isErrorEqual = (a: MIOError, b: MIOError): boolean => {
            return (
                a.message === b.message &&
                a.resource == b.resource &&
                a.path === b.path &&
                a.value === b.value
            );
        };

        errors = errors.filter(
            (item, index, list) => list.findIndex((x) => isErrorEqual(x, item)) === index
        );
    });

    return { values: kbvResources, errors };
}
