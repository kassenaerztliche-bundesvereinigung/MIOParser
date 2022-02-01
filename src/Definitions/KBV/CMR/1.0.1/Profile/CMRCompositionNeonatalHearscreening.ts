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
import {
    Literal,
    Excess,
    MinArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Neonatal_Hearscreening"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionNeonatalHearscreeningTypeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "417491009";
    display: "Neonatal hearing test (procedure)";
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningTypeCodeSnomed: t.Type<CMRCompositionNeonatalHearscreeningTypeCodeSnomed> =
    t.recursion("CMRCompositionNeonatalHearscreeningTypeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("417491009"),
                    display: Literal("Neonatal hearing test (procedure)")
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
export interface CMRCompositionNeonatalHearscreeningTypeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "54111-0";
    display: "Newborn hearing screening panel";
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningTypeCodeLoinc: t.Type<CMRCompositionNeonatalHearscreeningTypeCodeLoinc> =
    t.recursion("CMRCompositionNeonatalHearscreeningTypeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("54111-0"),
                    display: Literal("Newborn hearing screening panel")
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
export interface CMRCompositionNeonatalHearscreeningCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningCategoryCoding: t.Type<CMRCompositionNeonatalHearscreeningCategoryCoding> =
    t.recursion("CMRCompositionNeonatalHearscreeningCategoryCoding", () =>
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
export interface CMRCompositionNeonatalHearscreeningSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningSectionEntry: t.Type<CMRCompositionNeonatalHearscreeningSectionEntry> =
    t.recursion("CMRCompositionNeonatalHearscreeningSectionEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.1"
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
export interface CMRCompositionNeonatalHearscreeningMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Neonatal_Hearscreening|1.0.1">;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningMeta: t.Type<CMRCompositionNeonatalHearscreeningMeta> =
    t.recursion("CMRCompositionNeonatalHearscreeningMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Neonatal_Hearscreening|1.0.1"
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
export interface CMRCompositionNeonatalHearscreeningType {
    coding: Array<
        | CMRCompositionNeonatalHearscreeningTypeCodeSnomed
        | CMRCompositionNeonatalHearscreeningTypeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningType: t.Type<CMRCompositionNeonatalHearscreeningType> =
    t.recursion("CMRCompositionNeonatalHearscreeningType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionNeonatalHearscreeningTypeCodeSnomed>,
                                t.Type<CMRCompositionNeonatalHearscreeningTypeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionNeonatalHearscreeningTypeCodeSnomed,
                            CMRCompositionNeonatalHearscreeningTypeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionNeonatalHearscreeningTypeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionNeonatalHearscreeningTypeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
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
export interface CMRCompositionNeonatalHearscreeningCategory {
    coding: Array<CMRCompositionNeonatalHearscreeningCategoryCoding>;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningCategory: t.Type<CMRCompositionNeonatalHearscreeningCategory> =
    t.recursion("CMRCompositionNeonatalHearscreeningCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionNeonatalHearscreeningCategoryCoding
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
export interface CMRCompositionNeonatalHearscreeningSubject {
    reference: string;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningSubject: t.Type<CMRCompositionNeonatalHearscreeningSubject> =
    t.recursion("CMRCompositionNeonatalHearscreeningSubject", () =>
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
export interface CMRCompositionNeonatalHearscreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningEncounter: t.Type<CMRCompositionNeonatalHearscreeningEncounter> =
    t.recursion("CMRCompositionNeonatalHearscreeningEncounter", () =>
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
export interface CMRCompositionNeonatalHearscreeningAuthor {
    reference: string;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningAuthor: t.Type<CMRCompositionNeonatalHearscreeningAuthor> =
    t.recursion("CMRCompositionNeonatalHearscreeningAuthor", () =>
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
export interface CMRCompositionNeonatalHearscreeningSection {
    title: "Neugeborenen-Hörscreening";
    entry: Array<CMRCompositionNeonatalHearscreeningSectionEntry>;
    id?: string;
}

export const CMRCompositionNeonatalHearscreeningSection: t.Type<CMRCompositionNeonatalHearscreeningSection> =
    t.recursion("CMRCompositionNeonatalHearscreeningSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Neugeborenen-Hörscreening"),
                    entry: MinArray(1, CMRCompositionNeonatalHearscreeningSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRCompositionNeonatalHearscreening {
    resourceType: "Composition";
    meta: CMRCompositionNeonatalHearscreeningMeta;
    status: "final";
    type: CMRCompositionNeonatalHearscreeningType;
    category: Array<CMRCompositionNeonatalHearscreeningCategory>;
    subject: CMRCompositionNeonatalHearscreeningSubject;
    encounter: CMRCompositionNeonatalHearscreeningEncounter;
    date: string;
    author: Array<CMRCompositionNeonatalHearscreeningAuthor>;
    title: "Spezielle Früherkennungsuntersuchungen";
    section: Array<CMRCompositionNeonatalHearscreeningSection>;
    id?: string;
    text?: Narrative;
}

const CMRCompositionNeonatalHearscreening: t.Type<CMRCompositionNeonatalHearscreening> =
    t.recursion("CMRCompositionNeonatalHearscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionNeonatalHearscreeningMeta,
                    status: Literal("final"),
                    type: CMRCompositionNeonatalHearscreeningType,
                    category: MinMaxArray(
                        1,
                        1,
                        CMRCompositionNeonatalHearscreeningCategory
                    ),
                    subject: CMRCompositionNeonatalHearscreeningSubject,
                    encounter: CMRCompositionNeonatalHearscreeningEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 2, CMRCompositionNeonatalHearscreeningAuthor),
                    title: Literal("Spezielle Früherkennungsuntersuchungen"),
                    section: MinMaxArray(1, 1, CMRCompositionNeonatalHearscreeningSection)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
    );

export default CMRCompositionNeonatalHearscreening;
