/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
    HasMeta
} from "./Interfaces/AppInternals";
import ErrorMessage from "./Definitions/ErrorMessage";
import Messages from "./Interfaces/Messages";
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

/**
 * Returns the profile from the given resource
 * @param resource
 * @return Profile from resource as string
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
export function defineResourceMeta(resource: HasMeta): ResourceMeta {
    const meta = resource.meta;

    if (meta && meta.profile) {
        if (meta.profile.length >= 1) {
            const profile = getProfile(resource);
            const profileParts = profile.split("|");
            const profileType = profileParts[0];

            const known = MIOTypes.some((mioType) => mioType.profile === profileType);

            if (!profileType || !known) {
                throw new Error(Messages.UnknownProfile(profileType));
            } else {
                let profileVersion;

                if (profileParts.length > 1) {
                    profileVersion = profileParts[1];
                }

                return new ResourceMeta(profileType, profileVersion);
            }
        }

        throw new Error(Messages.NoProfile());
    }

    throw new Error(Messages.NoMeta());
}

/**
 * Returns the value for the given error as string
 *
 * @param error {ValidationError} Validation Error from io-ts validation
 * @returns {string} Value from the Error as string
 */
const getErrorValue = (error: ValidationError): string => {
    const value = error.value;
    if (typeof value === "string") return value;
    else return JSON.stringify(value);
};

/**
 * This helper function generates error messages from the io-ts decoder error.
 *
 * @param validation {Validation} Validation Error from io-ts validation
 * @param resourceId {string} Value from the Error as string
 */
export const getPaths = <A>(
    validation: Validation<A>,
    resourceId: string
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
                            if (key !== "" && !key.match(/^\d+$/)) return key;
                            else if (index === 0) return type.name;
                            else return undefined;
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

                    const mioError = {
                        message: errorMessage,
                        resource: resourceId,
                        path: errorPath,
                        value: errorValue
                    };
                    if (
                        !mioErrors.find(
                            (e) =>
                                e.path === mioError.path &&
                                e.value === mioError.value &&
                                e.resource === mioError.resource
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
export function isBundle(resource: HasMeta): boolean {
    const type = defineResourceMeta(resource);
    return BundleTypes.some((T: MIOType) => type.isEqual(T.profile, T.version, true));
}

/**
 * The following Profiles contain errors in their constraints. Therefore they are being excluded from Constraint checks
 */
const excludingBundlesForUUIDConstraint = [
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle|1.00.000",
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.00.000",
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.1.0",
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Bundle|1.0.0",
    "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Bundle|1.0.0"
];

/**
 * Applies the constraints to a resource and adds the results to the parserResult
 * @param resource
 * @param constraints
 * @param parserResult
 */
function checkConstraints(
    resource: Resource,
    constraints: { severity: string; expression: string; human: string; key: string }[],
    parserResult: MIOParserResult
): void {
    constraints.forEach((constraint) => {
        // key dom-3 wirft einen merkwuerdigen fehler... ist aber auch kein kritischer constraint, daher wird der ausgelassen
        if (resource && constraint.expression && constraint.key !== "dom-3") {
            let constraintResult: boolean[] = [];
            try {
                // einige constraints haben einen typo, dieser wird hier ersetzt
                let expression = constraint.expression.replace("identifer", "identifier");
                expression = expression.replace("is string", "is String");
                // ZAEB 1.00.000 hat einen constraint der aufgrund eines fixen values nicht gelöst werden kann... daher ueberspringen
                if (
                    constraint.key === "UUID" &&
                    excludingBundlesForUUIDConstraint.includes(getProfile(resource))
                ) {
                    return;
                }
                //bug in FhirPath implementation
                if (
                    expression ===
                    "dosage.text.empty().not() xor (dosage.route.empty().not() and dosage.doseAndRate.dose.empty().not())"
                )
                    expression =
                        "dosage.text.empty().not() xor (dosage.route.empty().not() and dosage.doseAndRate.doseQuantity.empty().not())";
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
                if (constraint.expression.includes(".hasValue()")) return;
                parserResult.warnings.push({
                    resource: getProfile(resource),
                    value: resource.id,
                    path: constraint.key,
                    message: ErrorMessage.NotResolveConstraint(
                        constraint.expression,
                        constraint.key,
                        error
                    )
                });
            }

            if (constraintResult.includes(false)) {
                const parserError = {
                    resource: getProfile(resource) + " -> " + resource.id,
                    value: constraint.key,
                    path: constraint.expression,
                    message: ErrorMessage.Constraint(constraint.human, constraint.key)
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
 * @param resource {HasMetaAndId} The MIO resource to be evaluated which needs a meta and an id field
 * @param list {MIOTypeList} List of MioTypes to be tested with
 * @param bundle {KBVBundleResource | undefined} original bundle in which the resource was contained
 * @param versioned {boolean} boolean to indicate if resource should be found with or without version number
 * @returns {MIOParserResult} a Result for the finding of the resource in the given MioTypeList
 */
export default function getResource(
    resource: Resource,
    list: MIOTypeList,
    bundle: KBVBundleResource | undefined = undefined,
    versioned = true
): MIOParserResult {
    const type = defineResourceMeta(resource);

    // Unknown resource..
    const parserResult: MIOParserResult = {
        value: resource as KBVResource,
        errors: [],
        warnings: []
    };

    let entryUrlMap: string[] = [];

    if (resource.resourceType === "Bundle") {
        entryUrlMap =
            resource.entry?.map(
                (entry: KBVEntry) => defineResourceMeta(entry.resource).profile
            ) ?? [];
    }

    let foundResource = false;

    // Try to match profiles an create instance of matching class
    list.forEach((T: MIOType) => {
        if (type.equals(new ResourceMeta(T.profile, T.version), versioned)) {
            foundResource = true;
            const resourceId = resource.id;
            const context: t.ContextEntry[] = [];
            context.push({
                key: "bundleForReferenceValidation",
                actual: bundle,
                type: t.type({})
            });
            const resourceResult = bundle
                ? T.type.validate(resource, context)
                : T.type.decode(resource);

            // Callback for decoding failure
            // eslint-disable-next-line
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

            parserResult.errors.push(...getPaths(resourceResult, resourceId));
            checkConstraints(resource, T.constraints, parserResult);

            pipe(resourceResult, fold(onLeft, onRight));
        } else if (entryUrlMap.includes(T.profile)) {
            const checkResource = resource.entry?.filter((entry: KBVEntry) => {
                const entryType = defineResourceMeta(entry.resource);
                return entryType.equals(
                    new ResourceMeta(T.profile, T.version),
                    versioned
                );
            });

            checkResource?.forEach((entry: KBVEntry) => {
                checkConstraints(entry.resource as Resource, T.constraints, parserResult);
            });
        }
    });

    if (!foundResource) {
        if (!versioned) {
            throw new Error(Messages.UnknownProfile(type.toString()));
        } else {
            // TODO: should be removed when MR is fixed
            return getResource(resource, list, bundle, false);
        }
    }

    if (!versioned) {
        parserResult.warnings.push({
            message: Messages.ProfileWithoutVersion(type.profile),
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
 * @param entryArray {KBVEntry} An array of entries contained by a bundle
 * @param bundle {KBVBundleResource} original bundle in which the resource was contained
 * @return valueErrorArray {values: KBVEntry[]; errors: MIOError[];} values and errors contained in the bundle
 */
export function getAllEntries(
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
            e.resource as {
                meta: Meta;
                id: string;
            },
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
                a.path === b.path &&
                a.resource == b.resource &&
                a.value === b.value
            );
        };

        errors = errors.filter(
            (item, index, list) => list.findIndex((x) => isErrorEqual(x, item)) === index
        );
    });

    return { values: kbvResources, errors };
}
