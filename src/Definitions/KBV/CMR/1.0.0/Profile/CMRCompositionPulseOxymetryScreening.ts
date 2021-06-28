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

import * as t from "io-ts";
import {
    Literal,
    Excess,
    MinArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Pulse_Oxymetry_Screening"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionPulseOxymetryScreeningTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "252465000:405813007=56459004";
    display: "Pulse oximetry (procedure) : Procedure site - Direct (attribute) = Foot structure (body structure)";
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningTypeCoding: t.Type<CMRCompositionPulseOxymetryScreeningTypeCoding> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("252465000:405813007=56459004"),
                    display: Literal(
                        "Pulse oximetry (procedure) : Procedure site - Direct (attribute) = Foot structure (body structure)"
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
export interface CMRCompositionPulseOxymetryScreeningCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningCategoryCoding: t.Type<CMRCompositionPulseOxymetryScreeningCategoryCoding> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningCategoryCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionPulseOxymetryScreeningSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningSectionEntry: t.Type<CMRCompositionPulseOxymetryScreeningSectionEntry> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningSectionEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.0"
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
export interface CMRCompositionPulseOxymetryScreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Pulse_Oxymetry_Screening|1.0.0"
    >;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningMeta: t.Type<CMRCompositionPulseOxymetryScreeningMeta> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Pulse_Oxymetry_Screening|1.0.0"
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
export interface CMRCompositionPulseOxymetryScreeningType {
    coding: Array<CMRCompositionPulseOxymetryScreeningTypeCoding>;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningType: t.Type<CMRCompositionPulseOxymetryScreeningType> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionPulseOxymetryScreeningTypeCoding
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
export interface CMRCompositionPulseOxymetryScreeningCategory {
    coding: Array<CMRCompositionPulseOxymetryScreeningCategoryCoding>;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningCategory: t.Type<CMRCompositionPulseOxymetryScreeningCategory> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningCategory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionPulseOxymetryScreeningCategoryCoding
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
export interface CMRCompositionPulseOxymetryScreeningSubject {
    reference: string;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningSubject: t.Type<CMRCompositionPulseOxymetryScreeningSubject> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
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
export interface CMRCompositionPulseOxymetryScreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningEncounter: t.Type<CMRCompositionPulseOxymetryScreeningEncounter> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMRCompositionPulseOxymetryScreeningAuthor {
    reference: string;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningAuthor: t.Type<CMRCompositionPulseOxymetryScreeningAuthor> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningAuthor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.0"
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
export interface CMRCompositionPulseOxymetryScreeningSection {
    title: "Pulsoxymetrie-Screening";
    entry: Array<CMRCompositionPulseOxymetryScreeningSectionEntry>;
    id?: string;
}

export const CMRCompositionPulseOxymetryScreeningSection: t.Type<CMRCompositionPulseOxymetryScreeningSection> = t.recursion(
    "CMRCompositionPulseOxymetryScreeningSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Pulsoxymetrie-Screening"),
                    entry: MinArray(1, CMRCompositionPulseOxymetryScreeningSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCompositionPulseOxymetryScreening {
    resourceType: "Composition";
    meta: CMRCompositionPulseOxymetryScreeningMeta;
    status: "final";
    type: CMRCompositionPulseOxymetryScreeningType;
    category: Array<CMRCompositionPulseOxymetryScreeningCategory>;
    subject: CMRCompositionPulseOxymetryScreeningSubject;
    encounter: CMRCompositionPulseOxymetryScreeningEncounter;
    date: string;
    author: Array<CMRCompositionPulseOxymetryScreeningAuthor>;
    title: "Spezielle Früherkennungsuntersuchungen";
    section: Array<CMRCompositionPulseOxymetryScreeningSection>;
    id?: string;
    text?: Narrative;
}

const CMRCompositionPulseOxymetryScreening: t.Type<CMRCompositionPulseOxymetryScreening> = t.recursion(
    "CMRCompositionPulseOxymetryScreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionPulseOxymetryScreeningMeta,
                    status: Literal("final"),
                    type: CMRCompositionPulseOxymetryScreeningType,
                    category: MinMaxArray(
                        1,
                        1,
                        CMRCompositionPulseOxymetryScreeningCategory
                    ),
                    subject: CMRCompositionPulseOxymetryScreeningSubject,
                    encounter: CMRCompositionPulseOxymetryScreeningEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 2, CMRCompositionPulseOxymetryScreeningAuthor),
                    title: Literal("Spezielle Früherkennungsuntersuchungen"),
                    section: MinMaxArray(
                        1,
                        1,
                        CMRCompositionPulseOxymetryScreeningSection
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default CMRCompositionPulseOxymetryScreening;
