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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Weight"

/**
 * Content in other Language.
 */
export interface CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpergewicht in g";
    id?: string;
}

export const CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergewicht in g")
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
export interface CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpergewicht in g";
    id?: string;
}

export const CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergewicht in g")
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
export interface CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationU1BirthWeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1BirthWeightCodeCodeSnomedDisplay: t.Type<CMRObservationU1BirthWeightCodeCodeSnomedDisplay> =
    t.recursion("CMRObservationU1BirthWeightCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1BirthWeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationU1BirthWeightCodeCodeLoincDisplay: t.Type<CMRObservationU1BirthWeightCodeCodeLoincDisplay> =
    t.recursion("CMRObservationU1BirthWeightCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRObservationU1BirthWeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364589006";
    id?: string;
    _display?: CMRObservationU1BirthWeightCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU1BirthWeightCodeCodeSnomed: t.Type<CMRObservationU1BirthWeightCodeCodeSnomed> =
    t.recursion("CMRObservationU1BirthWeightCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364589006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1BirthWeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1BirthWeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8339-4";
    id?: string;
    _display?: CMRObservationU1BirthWeightCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU1BirthWeightCodeCodeLoinc: t.Type<CMRObservationU1BirthWeightCodeCodeLoinc> =
    t.recursion("CMRObservationU1BirthWeightCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("8339-4")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1BirthWeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1BirthWeightValueQuantity {
    value: number;
    unit: "g";
    system: "http://unitsofmeasure.org";
    code: "g";
    id?: string;
}

export const CMRObservationU1BirthWeightValueQuantity: t.Type<CMRObservationU1BirthWeightValueQuantity> =
    t.recursion("CMRObservationU1BirthWeightValueQuantity", () =>
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
export interface CMRObservationU1BirthWeightMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Weight|1.0.1">;
    id?: string;
}

export const CMRObservationU1BirthWeightMeta: t.Type<CMRObservationU1BirthWeightMeta> =
    t.recursion("CMRObservationU1BirthWeightMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Weight|1.0.1"
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
export interface CMRObservationU1BirthWeightCode {
    coding: Array<
        | CMRObservationU1BirthWeightCodeCodeSnomed
        | CMRObservationU1BirthWeightCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU1BirthWeightCode: t.Type<CMRObservationU1BirthWeightCode> =
    t.recursion("CMRObservationU1BirthWeightCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU1BirthWeightCodeCodeSnomed>,
                                t.Type<CMRObservationU1BirthWeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU1BirthWeightCodeCodeSnomed,
                            CMRObservationU1BirthWeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU1BirthWeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU1BirthWeightCodeCodeLoinc,
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
export interface CMRObservationU1BirthWeightSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1BirthWeightSubject: t.Type<CMRObservationU1BirthWeightSubject> =
    t.recursion("CMRObservationU1BirthWeightSubject", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU1BirthWeightEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1BirthWeightEncounter: t.Type<CMRObservationU1BirthWeightEncounter> =
    t.recursion("CMRObservationU1BirthWeightEncounter", () =>
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU1BirthWeightPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1BirthWeightPerformer: t.Type<CMRObservationU1BirthWeightPerformer> =
    t.recursion("CMRObservationU1BirthWeightPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU1BirthWeight {
    resourceType: "Observation";
    meta: CMRObservationU1BirthWeightMeta;
    status: "final";
    code: CMRObservationU1BirthWeightCode;
    subject: CMRObservationU1BirthWeightSubject;
    encounter: CMRObservationU1BirthWeightEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU1BirthWeightValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1BirthWeightPerformer>;
}

const CMRObservationU1BirthWeight: t.Type<CMRObservationU1BirthWeight> = t.recursion(
    "CMRObservationU1BirthWeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1BirthWeightMeta,
                    status: Literal("final"),
                    code: CMRObservationU1BirthWeightCode,
                    subject: CMRObservationU1BirthWeightSubject,
                    encounter: CMRObservationU1BirthWeightEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU1BirthWeightValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1BirthWeightPerformer)
                })
            ])
        )
);

export default CMRObservationU1BirthWeight;
