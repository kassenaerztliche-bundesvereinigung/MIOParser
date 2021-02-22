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

import { KBVBundleResource } from "./Definitions/ProfileMap";
import { MIOEntry, MIOError, Reference } from "./Interfaces/AppInternals";
import { CompositionStructures, Composition } from "./Interfaces/CompositionDefinition";
import * as Util from "./Interfaces/Util";
import Messages from "./Interfaces/Messages";

/**
 * Validator class that provides static methods to validate MIO Bundles
 */
export default class Validator {
    /**
     * Looks up a field with a reference in a composition (e.g. "subject", "author" or "section")
     * and checks whether this reference is resolved within the bundle.
     *
     * @param bundle {KBVBundleResource} The bundle with it's entries to be evaluated
     * @param composition {any} The composition io-ts element
     * @param fieldName {string} The name of the field to be evaluated
     * @param errors {MIOError[]} Array of errors to be expanded
     * @returns {MIOError[]} The concatenation of input errors and new found errors
     */
    protected static lookUpField(
        bundle: KBVBundleResource,
        composition: MIOEntry<Composition>,
        fieldName: string,
        errors: MIOError[]
    ): MIOError[] {
        const resource = composition.resource;
        const field = (resource as any)[fieldName];

        if (Array.isArray(field)) {
            field.forEach((value) => {
                if (value.entry) {
                    value.entry.forEach((e: { reference: string }) => {
                        const ref = Util.getUuid(e.reference);
                        const found = Validator.findReference(bundle.entry, ref);
                        if (!found) {
                            errors.push({
                                message: Messages.ReferenceNotFound("Entry", ref),
                                resource: Util.getUuidFromEntry(composition),
                                path: `Composition.${fieldName}`,
                                value: ""
                            });
                        }
                    });
                } else if (value.reference) {
                    const found = Validator.findReference(bundle.entry, value.reference);
                    if (!found) {
                        const ref = Util.getUuid(value.reference);
                        errors.push({
                            message: Messages.ReferenceNotFound(fieldName, ref),
                            resource: Util.getUuidFromEntry(composition),
                            path: `Composition.${fieldName}`,
                            value: ""
                        });
                    }
                }
            });
        } else {
            const valueRef = Util.getUuid(field.reference);
            const found = Validator.findReference(bundle.entry, valueRef);
            if (!found) {
                errors.push({
                    message: Messages.ReferenceNotFound(fieldName, valueRef),
                    resource: Util.getUuidFromEntry(composition),
                    path: `Composition.${fieldName}`,
                    value: ""
                });
            }
        }

        return errors;
    }

    /**
     * Checks whether the entries of a bundle correspond to its composition.
     * The structure of the compositions is defined in CompositionStructures.
     * It defines the required and prohibited entries of bundle.
     * Every violation is returned as a MIOError.
     *
     * @param bundle {KBVBundleResource} The bundle to be evaluated
     * @returns {MIOError[]} Array of MIOErrors containing the violations
     */
    public static validateComposition(bundle: KBVBundleResource): MIOError[] {
        const errors: MIOError[] = [];

        CompositionStructures.forEach((compositionStructure) => {
            const bundleType = compositionStructure.bundle;
            if (bundleType.is(bundle)) {
                let numCompositions = 0;
                compositionStructure.compositions.forEach((structure) => {
                    const compositionProfile = structure.profile;
                    const composition = Util.getEntries<typeof compositionProfile>(
                        bundle,
                        [compositionProfile]
                    );

                    numCompositions += composition.length;
                    if (composition.length === 1) {
                        structure.requiredFields.forEach((field) => {
                            Validator.lookUpField(bundle, composition[0], field, errors);
                        });

                        let numEntries = 0;
                        const names: string[] = [];
                        structure.required.forEach((entry: { name: string }) => {
                            const result = Util.getEntries(bundle, [entry]);
                            names.push(entry.name);
                            numEntries += result.length;
                        });

                        if (numEntries === 0) {
                            errors.push({
                                message: Messages.CompositionRequire(
                                    bundleType.name,
                                    compositionProfile.name,
                                    names
                                ),
                                resource: bundle.identifier.value,
                                path: "bundle.entry",
                                value: ""
                            });
                        }

                        const numExcludeEntries = structure.exclude.filter(
                            (entry: { name: string }) =>
                                Util.getEntry<typeof entry>(bundle, [entry])
                        ).length;

                        if (numExcludeEntries > 0) {
                            errors.push({
                                message: Messages.CompositionExclude(
                                    bundleType.name,
                                    compositionProfile.name,
                                    names
                                ),
                                resource: bundle.identifier.value,
                                path: "bundle.entry",
                                value: ""
                            });
                        }
                    }
                });

                if (numCompositions === 0) {
                    errors.push({
                        message: Messages.NoComposition(bundleType.name),
                        resource: bundle.identifier.value,
                        path: "bundle.entry",
                        value: ""
                    });
                } else if (numCompositions > 1) {
                    errors.push({
                        message: Messages.OnlyOneComposition(bundleType.name),
                        resource: bundle.identifier.value,
                        path: "bundle.entry",
                        value: ""
                    });
                }
            }
        });

        return errors;
    }

    /**
     * Evaluates whether references in bundle are resolved or not.
     * Every unresolved reference is returned as a MIOError.
     *
     * @param bundle {KBVBundleResource} The bundle to be evaluated
     * @returns {MIOError[]} Array of MIOErrors containing the unresolved references
     */
    public static getUnresolvedReferences(bundle: KBVBundleResource): MIOError[] {
        const unresolvedReferences = this.listReferences(bundle).filter(
            (reference) => !this.findReference(bundle, reference.id)
        );

        return unresolvedReferences.map((reference) => {
            return {
                message: Messages.Reference(reference.id),
                resource: "",
                path: reference.path,
                value: ""
            };
        });
    }

    /**
     * Walks a object and lists its references (fields called "reference" and "fullUrl").
     *
     * @param obj {any} The object to be evaluated
     * @param references {Reference[]} Array of references containing a value and the path of the reference
     * @param path {string} Current path within the object
     */
    public static listReferences = (
        obj: any,
        references: Reference[] = [],
        path = ""
    ): Reference[] => {
        if (obj) {
            Object.keys(obj).forEach((key) => {
                const currentPath = (path ? path + "." : "") + key;
                const value = obj[key];
                if (value instanceof Array) {
                    value.forEach((e) => {
                        Validator.listReferences(e, references, currentPath);
                    });
                } else if (typeof value === "object") {
                    Validator.listReferences(value, references, currentPath);
                } else if (key === "reference") {
                    references.push({ id: value, path: currentPath });
                }
            });
            return references;
        }

        return [];
    };

    /**
     * Walks through a objecThe object to be evaluatedt and tries to find a uuid within the fields "reference" and "fullUrl".
     *
     * @param obj {any} The object to be evaluated
     * @param reference {string} The uuid to be found
     * @param found {boolean} Whether the uuid was found or not
     */
    public static findReference = (
        obj: any,
        reference: string,
        found = false
    ): boolean => {
        reference = Util.getUuid(reference);
        if (!found && obj) {
            Object.keys(obj).forEach((key) => {
                const value = obj[key];

                if (value instanceof Array) {
                    value.forEach((e) => {
                        found = found || Validator.findReference(e, reference, found);
                    });
                } else if (typeof value === "object") {
                    found = found || Validator.findReference(value, reference, found);
                } else if (key === "id") {
                    found = found || Util.getUuid(value as string) === reference;
                } else if (key === "fullUrl") {
                    found = found || Util.getUuid(value as string) === reference;
                }
            });
        }

        return found;
    };
}
