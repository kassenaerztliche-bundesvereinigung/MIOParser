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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child"

/**
 * Content in other Language.
 */
export interface MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                                t.Type<MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationWeightChildCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationWeightChildCodeCodeSnomedDisplay: t.Type<MRObservationWeightChildCodeCodeSnomedDisplay> =
    t.recursion("MRObservationWeightChildCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationWeightChildCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationWeightChildCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationWeightChildCodeCodeLoincDisplay: t.Type<MRObservationWeightChildCodeCodeLoincDisplay> =
    t.recursion("MRObservationWeightChildCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationWeightChildCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationWeightChildCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyWeightSnomedVS;
    id?: string;
    _display?: MRObservationWeightChildCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationWeightChildCodeCodeSnomed: t.Type<MRObservationWeightChildCodeCodeSnomed> =
    t.recursion("MRObservationWeightChildCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: BodyWeightSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationWeightChildCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationWeightChildCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: BodyWeightLoincVS;
    id?: string;
    _display?: MRObservationWeightChildCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationWeightChildCodeCodeLoinc: t.Type<MRObservationWeightChildCodeCodeLoinc> =
    t.recursion("MRObservationWeightChildCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: BodyWeightLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationWeightChildCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationWeightChildValueQuantity {
    value: number;
    unit: "g";
    system: "http://unitsofmeasure.org";
    code: "g";
    id?: string;
}

export const MRObservationWeightChildValueQuantity: t.Type<MRObservationWeightChildValueQuantity> =
    t.recursion("MRObservationWeightChildValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("g"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("g")
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
export interface MRObservationWeightChildMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child">;
    id?: string;
}

export const MRObservationWeightChildMeta: t.Type<MRObservationWeightChildMeta> =
    t.recursion("MRObservationWeightChildMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child"
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
export interface MRObservationWeightChildCode {
    coding: Array<
        MRObservationWeightChildCodeCodeSnomed | MRObservationWeightChildCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationWeightChildCode: t.Type<MRObservationWeightChildCode> =
    t.recursion("MRObservationWeightChildCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationWeightChildCodeCodeSnomed>,
                                t.Type<MRObservationWeightChildCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationWeightChildCodeCodeSnomed,
                            MRObservationWeightChildCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationWeightChildCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationWeightChildCodeCodeLoinc,
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
export interface MRObservationWeightChildSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationWeightChildSubjectReference: t.Type<MRObservationWeightChildSubjectReference> =
    t.recursion("MRObservationWeightChildSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
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
export interface MRObservationWeightChildEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationWeightChildEncounterReference: t.Type<MRObservationWeightChildEncounterReference> =
    t.recursion("MRObservationWeightChildEncounterReference", () =>
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
export interface MRObservationWeightChildPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationWeightChildPerformerReference: t.Type<MRObservationWeightChildPerformerReference> =
    t.recursion("MRObservationWeightChildPerformerReference", () =>
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

interface MRObservationWeightChild {
    resourceType: "Observation";
    meta: MRObservationWeightChildMeta;
    status: "final";
    code: MRObservationWeightChildCode;
    subject: MRObservationWeightChildSubjectReference;
    encounter: MRObservationWeightChildEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationWeightChildValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationWeightChildPerformerReference>;
}

const MRObservationWeightChild: t.Type<MRObservationWeightChild> = t.recursion(
    "MRObservationWeightChild",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationWeightChildMeta,
                    status: Literal("final"),
                    code: MRObservationWeightChildCode,
                    subject: MRObservationWeightChildSubjectReference,
                    encounter: MRObservationWeightChildEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationWeightChildValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationWeightChildPerformerReference)
                })
            ])
        )
);

export default MRObservationWeightChild;
