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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import BodyWeightLoincVS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/BodyWeightLoinc";
import BodyWeightSnomedVS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/BodyWeightSnomed";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother"

/**
 * Content in other Language.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeSnomedDisplay: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplay> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeLoincDisplay: t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplay> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyWeightSnomedVS;
    id?: string;
    _display?: MRObservationBaselineWeightMotherCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeSnomed: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomed> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: BodyWeightSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBaselineWeightMotherCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: BodyWeightLoincVS;
    id?: string;
    _display?: MRObservationBaselineWeightMotherCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeLoinc: t.Type<MRObservationBaselineWeightMotherCodeCodeLoinc> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: BodyWeightLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBaselineWeightMotherCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBaselineWeightMotherValueQuantity {
    value: number;
    unit: "kg";
    system: "http://unitsofmeasure.org";
    code: "kg";
    id?: string;
}

export const MRObservationBaselineWeightMotherValueQuantity: t.Type<MRObservationBaselineWeightMotherValueQuantity> =
    t.recursion("MRObservationBaselineWeightMotherValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("kg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("kg")
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
export interface MRObservationBaselineWeightMotherMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother|1.0.0">;
    id?: string;
}

export const MRObservationBaselineWeightMotherMeta: t.Type<MRObservationBaselineWeightMotherMeta> =
    t.recursion("MRObservationBaselineWeightMotherMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother|1.0.0"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface MRObservationBaselineWeightMotherCode {
    coding: Array<
        | MRObservationBaselineWeightMotherCodeCodeSnomed
        | MRObservationBaselineWeightMotherCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationBaselineWeightMotherCode: t.Type<MRObservationBaselineWeightMotherCode> =
    t.recursion("MRObservationBaselineWeightMotherCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBaselineWeightMotherCodeCodeSnomed>,
                                t.Type<MRObservationBaselineWeightMotherCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBaselineWeightMotherCodeCodeSnomed,
                            MRObservationBaselineWeightMotherCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBaselineWeightMotherCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBaselineWeightMotherCodeCodeLoinc,
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
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface MRObservationBaselineWeightMotherSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherSubjectReference: t.Type<MRObservationBaselineWeightMotherSubjectReference> =
    t.recursion("MRObservationBaselineWeightMotherSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface MRObservationBaselineWeightMotherEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherEncounterReference: t.Type<MRObservationBaselineWeightMotherEncounterReference> =
    t.recursion("MRObservationBaselineWeightMotherEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface MRObservationBaselineWeightMotherPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherPerformerReference: t.Type<MRObservationBaselineWeightMotherPerformerReference> =
    t.recursion("MRObservationBaselineWeightMotherPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationBaselineWeightMother {
    resourceType: "Observation";
    meta: MRObservationBaselineWeightMotherMeta;
    status: "final";
    code: MRObservationBaselineWeightMotherCode;
    subject: MRObservationBaselineWeightMotherSubjectReference;
    encounter: MRObservationBaselineWeightMotherEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationBaselineWeightMotherValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBaselineWeightMotherPerformerReference>;
}

const MRObservationBaselineWeightMother: t.Type<MRObservationBaselineWeightMother> =
    t.recursion("MRObservationBaselineWeightMother", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBaselineWeightMotherMeta,
                    status: Literal("final"),
                    code: MRObservationBaselineWeightMotherCode,
                    subject: MRObservationBaselineWeightMotherSubjectReference,
                    encounter: MRObservationBaselineWeightMotherEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationBaselineWeightMotherValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationBaselineWeightMotherPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationBaselineWeightMother;
