/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { MIOEntry } from "./AppInternals";
import { KBVBundleResource, KBVResource } from "..";
import { Concept, ConceptMap } from "../Definitions/Interfaces";

export type { Concept, ConceptMap };

function getEntryBase<T>(
    mio: KBVBundleResource,
    types: any[],
    ref: string | undefined,
    useRef: boolean
): MIOEntry<T>[] | undefined {
    // const typesStr = types.map((type) => (type as any).name).join(" | ");

    const results = mio.entry.filter(
        (entry: any) =>
            types.filter((type) => {
                // https://hl7.org/FHIR/bundle.html#references
                const regex = /[.:/ ]/;
                const isRef =
                    entry.fullUrl.split(regex).pop() === ref?.split(regex).pop();
                const isRes = type.is(entry.resource);
                return isRes && (useRef ? isRef : true);
            }).length
    );

    if (results.length > 0) {
        /*
        if (results.length > 1) {
            const msg = `${results.length} results for "${typesStr}" ${
                useRef ? `with ref: "${ref}"` : ""
            }`;
            console.log(msg);
            console.log(results);
        }
         */
        return results.map((r) => {
            return {
                fullUrl: r.fullUrl,
                resource: r.resource as T
            };
        });
    } else {
        /*
        const msg = `Can not find "${typesStr}" ${useRef ? `with ref: "${ref}"` : ""}`;
        console.log(msg);
         */
        return undefined;
    }
}

/**
 * Extracts a Resource of type T from the given bundle
 *
 * @param mio {KBVBundleResource} The Mio-Bundle to be examined
 * @param types {any[]} the type(s) that is being searched for
 */
export function getEntry<T>(
    mio: KBVBundleResource,
    types: any[]
): MIOEntry<T> | undefined {
    const result = getEntryBase<T>(mio, types, undefined, false);
    if (result && result.length === 1) {
        return result[0];
    } else {
        return undefined;
    }
}

/**
 * Extracts multiple entries for a given bundle
 *
 * @param mio {KBVBundleResource} The Mio-Bundle to be examined
 * @param types {any[]} the type(s) that is being searched for
 */
export function getEntries<T>(mio: KBVBundleResource, types: any[]): MIOEntry<T>[] {
    const result = getEntryBase<T>(mio, types, undefined, false);
    return result ? result : [];
}

/**
 * Gets an entry from a bundle with a given reference
 *
 * @param mio {KBVBundleResource} The Mio-Bundle to be examined
 * @param types {any[]} the type(s) that is being searched for
 * @param ref {string} reference of the entry
 */
export function getEntryWithRef<T>(
    mio: KBVBundleResource,
    types: any[],
    ref: string
): MIOEntry<T> | undefined {
    const result = getEntryBase<T>(mio, types, ref, true);
    if (result && result.length === 1) {
        return result[0];
    } else {
        return undefined;
    }
}

/**
 * Extracts a given slice of type T from an object
 *
 * @param type {any} type to that is being searched for
 * @param value {any[]} the slices that are being searched for
 */
export function getSlice<T>(type: any, value: any[] | undefined): T | undefined {
    if (value) {
        const result = value.filter((e) => type.is(e));
        if (result.length) {
            return (result[0] as unknown) as T;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

/**
 * Extracts a number of slices of type T from an object
 *
 * @param type {any[]} types to that is being searched for
 * @param value {any[]} the slices that are being searched for
 */
export function getSlices<T>(type: any[], value: any[] | undefined): T[] {
    if (value) {
        return value.filter((e) => type.some((t) => t.is(e)));
    } else {
        return [];
    }
}

export const uuidSplitRegex = /[.:/ ]/;

/**
 * Extracts only the uuid from a given identifier
 * @param value{string} the full identifier of a resource
 */
export function getUuid(
    value: string,
    separator: string | RegExp = uuidSplitRegex
): string {
    return value.split(separator).pop() ?? value;
}

export function getUuidFromBundle(bundle: KBVBundleResource): string {
    return getUuid(bundle.identifier.value);
}

export function getUuidFromEntry(entry: { fullUrl: string }): string {
    return getUuid(entry.fullUrl);
}

/**
 * This function looks for and returns a MioEntry for a given reference in a given bundle
 *
 * @param bundle {KBVBundleResource | undefined} the bundle that is to be examined
 * @param reference {string} the reference for the entry to be searched for
 */
export function findEntryByFullUrl(
    bundle: KBVBundleResource | undefined,
    reference: string
): MIOEntry<KBVResource> | undefined {
    if (bundle) {
        const results = bundle.entry.filter(
            (e) => getUuid(e.fullUrl) === getUuid(reference)
        );
        if (results.length > 0) {
            const result = results[0];
            return {
                fullUrl: result.fullUrl,
                resource: result.resource as KBVResource
            };
        }
    }
    return undefined;
}

/**
 * This function looks for and returns a MioEntry for a given profile in a given bundle
 *
 * @param bundle {KBVBundleResource | undefined} the bundle that is to be examined
 * @param profile {string} the profile for the entry to be searched for
 */
export function findEntryByProfile(
    bundle: KBVBundleResource | undefined,
    profile: string
): KBVResource | undefined {
    if (bundle) {
        const result = bundle.entry.filter((e) =>
            e.resource.meta &&
            e.resource.meta.profile &&
            e.resource.meta.profile.length > 0
                ? e.resource.meta.profile[0] === profile
                : false
        );
        if (result.length > 0) return result[0].resource as KBVResource;
    }
    return undefined;
}

/**
 * This function looks for and returns a MioEntry for given profiles in a given bundle
 * Returns the first best finding
 *
 * @param bundle {KBVBundleResource | undefined} the bundle that is to be examined
 * @param profiles {string[]} the profiles for the entry to be searched for
 */
export function findEntryByProfiles(
    bundle: KBVBundleResource | undefined,
    profiles: string[]
): KBVResource | undefined {
    if (bundle) {
        const result = bundle.entry.filter((e) => {
            if (
                e.resource.meta &&
                e.resource.meta.profile &&
                e.resource.meta.profile.length > 0
            ) {
                const profile = e.resource.meta.profile[0];
                return profiles.some((p) => p === profile);
            }
            return false;
        });

        if (result.length > 0) {
            return result[0].resource as KBVResource;
        }
    }
    return undefined;
}

export function translateCode(
    code: string,
    translation: ConceptMap,
    target = "http://snomed.info/sct"
): string[] {
    const results: string[] = [];
    translation.forEach((value: Concept) => {
        if (value.target !== target) {
            value.element.forEach((element) => {
                if (code === element.code) {
                    element.target.forEach((elementTarget) => {
                        results.push(elementTarget.display);
                    });
                }
            });
        }
    });

    return results.length ? results : [code];
}
