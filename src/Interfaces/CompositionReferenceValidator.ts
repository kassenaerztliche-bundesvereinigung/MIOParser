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

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    CompositionReference,
    CompositionReferenceMap,
    CompositionReferenceSection
} from "../Definitions/CompositionReferenceMap";
import { MIOParserResult } from "./AppInternals";
import ErrorMessage from "../Definitions/ErrorMessage";
import { getUuid } from "./Util";

function getSliceByValue(section: any, sliceBy: string): any {
    if (!sliceBy) return sliceBy;

    const sliceByPath = sliceBy.split(".");
    let sliceByValueForCurrentSection = section;
    sliceByPath.forEach((pathComponent: string) => {
        if (
            Object.prototype.hasOwnProperty.call(
                sliceByValueForCurrentSection,
                pathComponent
            )
        )
            sliceByValueForCurrentSection = sliceByValueForCurrentSection[pathComponent];
        else return undefined;
        if (pathComponent === "coding")
            sliceByValueForCurrentSection = sliceByValueForCurrentSection[0];
    });
    return sliceByValueForCurrentSection;
}

const getEntryWithIdFromBundle = (id: string, bundle: any): any | undefined => {
    const hits = bundle.entry.filter(
        (entry: any) => getUuid(entry.fullUrl) === getUuid(id)
    );
    if (hits.length === 1) return hits[0].resource;
    else return undefined;
};

const getTargetProfileFromBundle = (id: string, bundle: any): string | undefined => {
    const entry = getEntryWithIdFromBundle(id, bundle);
    if (entry) return entry.meta.profile[0];
    else return undefined;
};

const testReferences = (targetProfile: string | undefined) => (
    referenceToTest: string
): boolean => {
    const percentileValueWithVersion =
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0";
    const correctPercentileValue =
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values";
    if (referenceToTest === percentileValueWithVersion)
        referenceToTest = correctPercentileValue;
    if (targetProfile === percentileValueWithVersion)
        targetProfile = correctPercentileValue;
    if (targetProfile)
        return referenceToTest.toLowerCase() === targetProfile.toLowerCase();
    else return false;
};

function checkSectionForEntries(
    entry: any,
    bundle: any,
    section: any,
    sliceBy: string,
    referenceDefinition: any,
    parserResult: MIOParserResult
): void {
    const targetProfile = getTargetProfileFromBundle(entry.reference, bundle);
    if (!targetProfile) {
        parserResult.errors.push({
            message: ErrorMessage.NoTargetWithinBundle(entry.reference),
            resource: bundle.identifier.value ?? bundle.id,
            path: "Composition",
            value: entry.reference
        });
    }
    const sliceByValueForCurrentSection = getSliceByValue(section, sliceBy);
    let sliceToCheck;
    if (sliceByValueForCurrentSection) {
        if (referenceDefinition.sections) {
            sliceToCheck = referenceDefinition.sections.filter(
                (x: any) => x.sliceByValue === sliceByValueForCurrentSection
            );
        } else if (referenceDefinition.length && referenceDefinition.length > 1) {
            sliceToCheck = referenceDefinition.filter(
                (x: any) => x.sliceByValue === sliceByValueForCurrentSection
            );
        } else {
            sliceToCheck = referenceDefinition;
        }
    } else {
        sliceToCheck = referenceDefinition.sections;
    }
    if (sliceToCheck.length === 1 && targetProfile) {
        if (!sliceToCheck[0].entry.some(testReferences(targetProfile)))
            parserResult.errors.push({
                message: ErrorMessage.WrongTarget(
                    entry.reference,
                    sliceToCheck[0].entry,
                    targetProfile ?? ""
                ),
                resource: bundle.identifier.value ?? bundle.id,
                path: "Composition",
                value: entry.reference
            });
    } else if (sliceToCheck.entry && sliceToCheck.entry.length && targetProfile) {
        if (!sliceToCheck.entry.some(testReferences(targetProfile)))
            parserResult.errors.push({
                message: ErrorMessage.WrongTarget(
                    entry.reference,
                    sliceToCheck.entry,
                    targetProfile ?? ""
                ),
                resource: bundle.identifier.value ?? bundle.id,
                path: "Composition",
                value: entry.reference
            });
    } else {
        // Error?
    }
}

function determineIfCompositionReference(
    toBeDetermined: CompositionReference | CompositionReferenceSection[]
): toBeDetermined is CompositionReference {
    return !Array.isArray(toBeDetermined);
}

function determineIfCompositionReferenceSectionArray(
    toBeDetermined: CompositionReference | CompositionReferenceSection[]
): toBeDetermined is CompositionReferenceSection[] {
    return !!Array.isArray(toBeDetermined);
}

const validate = (
    referenceDefinition: CompositionReference | CompositionReferenceSection[],
    composition: any,
    sliceBy: string,
    bundle: any,
    parserResult: MIOParserResult
): void => {
    if (
        determineIfCompositionReference(referenceDefinition) &&
        referenceDefinition.sections
    ) {
        for (const referenceSection of referenceDefinition.sections) {
            if (referenceSection.sections)
                validate(
                    referenceSection.sections,
                    composition.section?.filter((x: any) => x.section),
                    sliceBy,
                    bundle,
                    parserResult
                );
            if (composition && composition.section) {
                const sectionToCheck = composition.section.filter((x: any) => {
                    const sliceByValue = getSliceByValue(x, sliceBy);
                    return referenceSection.sliceByValue === sliceByValue;
                });
                if (sectionToCheck.length === 1) {
                    const section = sectionToCheck[0];
                    if (section.entry) {
                        section.entry.forEach((entry: any) => {
                            const targetProfile = getTargetProfileFromBundle(
                                entry.reference,
                                bundle
                            );
                            if (!targetProfile) {
                                parserResult.errors.push({
                                    message: ErrorMessage.NoTargetWithinBundle(
                                        entry.reference
                                    ),
                                    resource: bundle.identifier.value ?? bundle.id,
                                    path: "Composition",
                                    value: entry.reference
                                });
                            }
                            const sliceByValueForCurrentSection = getSliceByValue(
                                section,
                                sliceBy
                            );
                            const sliceToCheck = sliceByValueForCurrentSection
                                ? referenceDefinition.sections.filter(
                                      (x: any) =>
                                          x.sliceByValue === sliceByValueForCurrentSection
                                  )
                                : referenceDefinition.sections;
                            if (sliceToCheck.length) {
                                if (
                                    !sliceToCheck[0].entry.some(
                                        testReferences(targetProfile)
                                    ) &&
                                    targetProfile
                                ) {
                                    parserResult.errors.push({
                                        message: ErrorMessage.WrongTarget(
                                            entry.reference,
                                            sliceToCheck[0].entry,
                                            targetProfile ?? ""
                                        ),
                                        resource: bundle.identifier.value ?? bundle.id,
                                        path: "Composition",
                                        value: entry.reference
                                    });
                                }
                            }
                        });
                    }
                } else {
                    // A referencesection has no corresponding section in the composition of the bundle
                    // console.error(
                    //     "Could not find the right slice to check: " +
                    //         referenceSection.sliceByValue
                    // );
                }
            } else if (composition.length) {
                composition.forEach((c: any) => {
                    c.section.forEach((section: any) => {
                        section.entry.forEach((entry: any) => {
                            checkSectionForEntries(
                                entry,
                                bundle,
                                section,
                                sliceBy,
                                referenceDefinition,
                                parserResult
                            );
                        });
                    });
                });
            }
        }
    }
    // No further referenceDefinition sections just entries
    else if (
        composition &&
        determineIfCompositionReferenceSectionArray(referenceDefinition)
    ) {
        referenceDefinition.forEach((rd: any) => {
            if (rd.sections) {
                const sectionOfComposition = composition.filter((x: any) => {
                    if (x.section) {
                        return x.section.some((y: any) => {
                            const sectionValue = getSliceByValue(y, sliceBy);
                            return sectionValue === rd.sliceByValue;
                        });
                    } else {
                        return false;
                    }
                });
                if (sectionOfComposition.length === 1) {
                    validate(
                        rd.sections,
                        sectionOfComposition[0].section.filter((x: any) => {
                            const sectionValue = getSliceByValue(x, sliceBy);
                            return sectionValue === rd.sliceByValue;
                        }),
                        sliceBy,
                        bundle,
                        parserResult
                    );
                }
            }
            const compositionWithTheRightSection = composition.filter((c: any) =>
                c.section?.some((s: any) => {
                    const sliceValue = getSliceByValue(s, sliceBy);
                    return sliceValue === rd.sliceByValue;
                })
            );
            if (compositionWithTheRightSection.length === 1) {
                const sectionToCheck = compositionWithTheRightSection[0].section.filter(
                    (s: any) => {
                        const sliceValue = getSliceByValue(s, sliceBy);
                        return sliceValue === rd.sliceByValue;
                    }
                );
                if (sectionToCheck.length === 1 && sectionToCheck[0].entry) {
                    sectionToCheck[0].entry.forEach((entry: any) => {
                        checkSectionForEntries(
                            entry,
                            bundle,
                            sectionToCheck[0],
                            sliceBy,
                            rd,
                            parserResult
                        );
                    });
                } else {
                    //console.error("SectionToCheck to right");
                }
            } else {
                //console.error("no compositions found...");
            }
        });
    } else {
        // console.error("Could not continue");
    }
};

function getBundleForUrl(url: string): CompositionReference | undefined {
    const hit = CompositionReferenceMap.find((e: any) => e.profile === url);
    if (hit) return hit.compositionReference;
    else return undefined;
}

export function validateCompositionReferences(
    bundle: any,
    parserResult: MIOParserResult
): void {
    const composition = bundle.entry.filter(
        (e: any) => e.resource.resourceType === "Composition"
    );

    if (composition.length === 1) {
        const compositionUrl = composition[0].resource.meta.profile[0];
        const referenceDefinition = getBundleForUrl(compositionUrl);

        if (referenceDefinition)
            return validate(
                referenceDefinition,
                composition[0].resource,
                referenceDefinition.sliceBy,
                bundle,
                parserResult
            );
        else {
            parserResult.warnings.push({
                message: ErrorMessage.NoCompositionForUrl(compositionUrl),
                resource: bundle.identifier.value ?? bundle.id,
                path: "",
                value: ""
            });
        }
    } else
        parserResult.errors.push({
            message: ErrorMessage.NoCompositionInBundle(),
            resource: bundle.identifier.value ?? bundle.id,
            path: "",
            value: ""
        });
}
