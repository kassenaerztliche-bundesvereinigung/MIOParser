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

import * as t from "io-ts";
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Cystic_Fibrosis_Screening"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionCysticFibrosisScreeningTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=171191008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)";
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningTypeCoding: t.Type<CMRCompositionCysticFibrosisScreeningTypeCoding> =
    t.recursion("CMRCompositionCysticFibrosisScreeningTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("738796001:363702006=171191008"),
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionCysticFibrosisScreeningCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningCategoryCoding: t.Type<CMRCompositionCysticFibrosisScreeningCategoryCoding> =
    t.recursion("CMRCompositionCysticFibrosisScreeningCategoryCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("243788004"),
                    display: Literal("Child examination (procedure)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface CMRCompositionCysticFibrosisScreeningSectionEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningSectionEntryReference: t.Type<CMRCompositionCysticFibrosisScreeningSectionEntryReference> =
    t.recursion("CMRCompositionCysticFibrosisScreeningSectionEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionCysticFibrosisScreeningMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Cystic_Fibrosis_Screening|1.0.1">;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningMeta: t.Type<CMRCompositionCysticFibrosisScreeningMeta> =
    t.recursion("CMRCompositionCysticFibrosisScreeningMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Cystic_Fibrosis_Screening|1.0.1"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
 */
export interface CMRCompositionCysticFibrosisScreeningType {
    coding: Array<CMRCompositionCysticFibrosisScreeningTypeCoding>;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningType: t.Type<CMRCompositionCysticFibrosisScreeningType> =
    t.recursion("CMRCompositionCysticFibrosisScreeningType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionCysticFibrosisScreeningTypeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
 */
export interface CMRCompositionCysticFibrosisScreeningCategory {
    coding: Array<CMRCompositionCysticFibrosisScreeningCategoryCoding>;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningCategory: t.Type<CMRCompositionCysticFibrosisScreeningCategory> =
    t.recursion("CMRCompositionCysticFibrosisScreeningCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionCysticFibrosisScreeningCategoryCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
 */
export interface CMRCompositionCysticFibrosisScreeningSubjectReference {
    reference: string;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningSubjectReference: t.Type<CMRCompositionCysticFibrosisScreeningSubjectReference> =
    t.recursion("CMRCompositionCysticFibrosisScreeningSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Describes the clinical encounter or type of care this documentation is associated with.
 */
export interface CMRCompositionCysticFibrosisScreeningEncounterReference {
    reference: string;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningEncounterReference: t.Type<CMRCompositionCysticFibrosisScreeningEncounterReference> =
    t.recursion("CMRCompositionCysticFibrosisScreeningEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface CMRCompositionCysticFibrosisScreeningAuthorReference {
    reference: string;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningAuthorReference: t.Type<CMRCompositionCysticFibrosisScreeningAuthorReference> =
    t.recursion("CMRCompositionCysticFibrosisScreeningAuthorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionCysticFibrosisScreeningSection {
    title: "Screening auf Mukoviszidose";
    entry: Array<CMRCompositionCysticFibrosisScreeningSectionEntryReference>;
    id?: string;
}

export const CMRCompositionCysticFibrosisScreeningSection: t.Type<CMRCompositionCysticFibrosisScreeningSection> =
    t.recursion("CMRCompositionCysticFibrosisScreeningSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Mukoviszidose"),
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionCysticFibrosisScreeningSectionEntryReference
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRCompositionCysticFibrosisScreening {
    resourceType: "Composition";
    meta: CMRCompositionCysticFibrosisScreeningMeta;
    status: "final";
    type: CMRCompositionCysticFibrosisScreeningType;
    category: Array<CMRCompositionCysticFibrosisScreeningCategory>;
    subject: CMRCompositionCysticFibrosisScreeningSubjectReference;
    encounter: CMRCompositionCysticFibrosisScreeningEncounterReference;
    date: string;
    author: Array<CMRCompositionCysticFibrosisScreeningAuthorReference>;
    title: "Spezielle Früherkennungsuntersuchungen";
    section: Array<CMRCompositionCysticFibrosisScreeningSection>;
    id?: string;
    text?: Narrative;
}

const CMRCompositionCysticFibrosisScreening: t.Type<CMRCompositionCysticFibrosisScreening> =
    t.recursion("CMRCompositionCysticFibrosisScreening", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionCysticFibrosisScreeningMeta,
                    status: Literal("final"),
                    type: CMRCompositionCysticFibrosisScreeningType,
                    category: MinMaxArray(
                        1,
                        1,
                        CMRCompositionCysticFibrosisScreeningCategory
                    ),
                    subject: CMRCompositionCysticFibrosisScreeningSubjectReference,
                    encounter: CMRCompositionCysticFibrosisScreeningEncounterReference,
                    date: SCALARDateTime,
                    author: MinMaxArray(
                        1,
                        2,
                        CMRCompositionCysticFibrosisScreeningAuthorReference
                    ),
                    title: Literal("Spezielle Früherkennungsuntersuchungen"),
                    section: MinMaxArray(
                        1,
                        1,
                        CMRCompositionCysticFibrosisScreeningSection
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
    );

export default CMRCompositionCysticFibrosisScreening;
