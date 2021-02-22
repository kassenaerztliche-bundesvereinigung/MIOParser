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
    ResourceType
} from "./Interfaces/AppInternals";
import ErrorMessage from "./Definitions/ErrorMessage";
import Messages from "./Interfaces/Messages";
import {
    MIOTypes,
    MIOType,
    MIOTypeList,
    KBVResource,
    BundleTypes
} from "./Definitions/ProfileMap";

import { Validation, ValidationError, Errors } from "io-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { fold } from "fp-ts/lib/Either";
import { Meta } from "./Definitions/FHIR/4.0.1/Profile";

export type HasMeta = { meta: Meta };

/**
 * Evaluated the resource type of a MIO by its meta profile.
 *
 * @param resource {HasMeta} The MIO resource to be evaluated
 * @retuns {ResourceType} The source type of the MIO
 */
export function defineResourceType(resource: HasMeta): ResourceType {
    const meta = resource.meta;

    if (meta && meta.profile) {
        if (meta.profile.length >= 1) {
            const profile = meta.profile[0].toString();
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

                return {
                    profile: profileType,
                    version: profileVersion
                };
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
 * This helperfunction generates errormessages from the io-ts decoder error.
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
    const type = defineResourceType(resource);
    return BundleTypes.some((T: MIOType) => T.profile === type.profile);
}

export type HasMetaAndId = {
    id: string;
} & HasMeta;

/**
 * Evaluates an object and tries to return a MIO instance according to its profile.
 *
 * @param resource {HasMetaAndId} The MIO resource to be evaluated which needs a meta and an id field
 * @param list {MIOTypeList} List of MioTypes to be tested with
 * @returns {MIOParserResult} a Result for the finding of the resource in the given MioTypeList
 */
export default function getResource(
    resource: HasMetaAndId,
    list: MIOTypeList
): MIOParserResult {
    const type = defineResourceType(resource);

    // Unknown resource..
    const parserResult: MIOParserResult = {
        value: resource as KBVResource,
        errors: [
            {
                message: "Unknown MIO",
                resource: type.profile,
                path: "",
                value: "Undefined"
            }
        ],
        warnings: []
    };

    // Try to match profiles an create instance of matching class
    list.forEach((T: MIOType) => {
        if (T.profile === type.profile) {
            const resourceId = resource.id;
            const resourceResult = T.type.decode(resource);

            // Callback for decoding failure
            const onLeft = (errors: Errors): string => {
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

            parserResult.errors = getPaths(resourceResult, resourceId);

            pipe(resourceResult, fold(onLeft, onRight));
        }
    });

    return parserResult;
}

/**
 * Maps the entries in a bundle to Typescript objects
 *
 * @param entryArray {KBVEntry} An array of entries contained by a bundle
 * @return valueErrorArray {values: KBVEntry[]; errors: MIOError[];} values and errors contained in the bundle
 */
export function getAllEntries(
    entryArray: KBVEntry[]
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
            MIOTypes
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
