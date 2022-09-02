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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Mother"

/**
 * Content in other Language.
 */
export interface MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                                t.Type<MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationWeightMotherCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationWeightMotherCodeCodeSnomedDisplay: t.Type<MRObservationWeightMotherCodeCodeSnomedDisplay> =
    t.recursion("MRObservationWeightMotherCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationWeightMotherCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationWeightMotherCodeCodeLoincDisplay: t.Type<MRObservationWeightMotherCodeCodeLoincDisplay> =
    t.recursion("MRObservationWeightMotherCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationWeightMotherCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyWeightSnomedVS;
    id?: string;
    _display?: MRObservationWeightMotherCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationWeightMotherCodeCodeSnomed: t.Type<MRObservationWeightMotherCodeCodeSnomed> =
    t.recursion("MRObservationWeightMotherCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: BodyWeightSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationWeightMotherCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationWeightMotherCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: BodyWeightLoincVS;
    id?: string;
    _display?: MRObservationWeightMotherCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationWeightMotherCodeCodeLoinc: t.Type<MRObservationWeightMotherCodeCodeLoinc> =
    t.recursion("MRObservationWeightMotherCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: BodyWeightLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationWeightMotherCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationWeightMotherValueQuantity {
    value: number;
    unit: "kg";
    system: "http://unitsofmeasure.org";
    code: "kg";
    id?: string;
}

export const MRObservationWeightMotherValueQuantity: t.Type<MRObservationWeightMotherValueQuantity> =
    t.recursion("MRObservationWeightMotherValueQuantity", () =>
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
export interface MRObservationWeightMotherMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Mother|1.0.0">;
    id?: string;
}

export const MRObservationWeightMotherMeta: t.Type<MRObservationWeightMotherMeta> =
    t.recursion("MRObservationWeightMotherMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Mother|1.0.0"
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
export interface MRObservationWeightMotherCode {
    coding: Array<
        MRObservationWeightMotherCodeCodeSnomed | MRObservationWeightMotherCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationWeightMotherCode: t.Type<MRObservationWeightMotherCode> =
    t.recursion("MRObservationWeightMotherCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationWeightMotherCodeCodeSnomed>,
                                t.Type<MRObservationWeightMotherCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationWeightMotherCodeCodeSnomed,
                            MRObservationWeightMotherCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationWeightMotherCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationWeightMotherCodeCodeLoinc,
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
export interface MRObservationWeightMotherSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationWeightMotherSubjectReference: t.Type<MRObservationWeightMotherSubjectReference> =
    t.recursion("MRObservationWeightMotherSubjectReference", () =>
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
export interface MRObservationWeightMotherEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationWeightMotherEncounterReference: t.Type<MRObservationWeightMotherEncounterReference> =
    t.recursion("MRObservationWeightMotherEncounterReference", () =>
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
export interface MRObservationWeightMotherPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationWeightMotherPerformerReference: t.Type<MRObservationWeightMotherPerformerReference> =
    t.recursion("MRObservationWeightMotherPerformerReference", () =>
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

interface MRObservationWeightMother {
    resourceType: "Observation";
    meta: MRObservationWeightMotherMeta;
    status: "final";
    code: MRObservationWeightMotherCode;
    subject: MRObservationWeightMotherSubjectReference;
    encounter: MRObservationWeightMotherEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationWeightMotherValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationWeightMotherPerformerReference>;
}

const MRObservationWeightMother: t.Type<MRObservationWeightMother> = t.recursion(
    "MRObservationWeightMother",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationWeightMotherMeta,
                    status: Literal("final"),
                    code: MRObservationWeightMotherCode,
                    subject: MRObservationWeightMotherSubjectReference,
                    encounter: MRObservationWeightMotherEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationWeightMotherValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationWeightMotherPerformerReference)
                })
            ])
        )
);

export default MRObservationWeightMother;
