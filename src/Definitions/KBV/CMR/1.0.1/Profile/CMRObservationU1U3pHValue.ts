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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "pH-Wert (Nabelarterie)";
    id?: string;
}

export const CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("pH-Wert (Nabelarterie)")
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
export interface CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "pH-Wert (Nabelarterie)";
    id?: string;
}

export const CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("pH-Wert (Nabelarterie)")
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
export interface CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3pHValueCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3pHValueCodeCodeLoincDisplay: t.Type<CMRObservationU1U3pHValueCodeCodeLoincDisplay> =
    t.recursion("CMRObservationU1U3pHValueCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3pHValueCodeCodeLoincDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3pHValueCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3pHValueCodeCodeSnomedDisplay: t.Type<CMRObservationU1U3pHValueCodeCodeSnomedDisplay> =
    t.recursion("CMRObservationU1U3pHValueCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3pHValueCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3pHValueCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "28646-8";
    id?: string;
    _display?: CMRObservationU1U3pHValueCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU1U3pHValueCodeCodeLoinc: t.Type<CMRObservationU1U3pHValueCodeCodeLoinc> =
    t.recursion("CMRObservationU1U3pHValueCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("28646-8")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3pHValueCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3pHValueCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008";
    id?: string;
    _display?: CMRObservationU1U3pHValueCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU1U3pHValueCodeCodeSnomed: t.Type<CMRObservationU1U3pHValueCodeCodeSnomed> =
    t.recursion("CMRObservationU1U3pHValueCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal(
                        "363787002:370134009=123029007,704319004=12499000,246093002=89177007,704318007=702700007,370132008=30766002,704327008=703430008"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3pHValueCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U3pHValueValueQuantity {
    value: number;
    unit: "(pH)";
    system: "http://unitsofmeasure.org";
    code: "[pH]";
    id?: string;
}

export const CMRObservationU1U3pHValueValueQuantity: t.Type<CMRObservationU1U3pHValueValueQuantity> =
    t.recursion("CMRObservationU1U3pHValueValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("(pH)"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("[pH]")
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
export interface CMRObservationU1U3pHValueMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value|1.0.1">;
    id?: string;
}

export const CMRObservationU1U3pHValueMeta: t.Type<CMRObservationU1U3pHValueMeta> =
    t.recursion("CMRObservationU1U3pHValueMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_pH_Value|1.0.1"
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
export interface CMRObservationU1U3pHValueCode {
    coding: Array<
        CMRObservationU1U3pHValueCodeCodeLoinc | CMRObservationU1U3pHValueCodeCodeSnomed
    >;
    id?: string;
}

export const CMRObservationU1U3pHValueCode: t.Type<CMRObservationU1U3pHValueCode> =
    t.recursion("CMRObservationU1U3pHValueCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU1U3pHValueCodeCodeLoinc>,
                                t.Type<CMRObservationU1U3pHValueCodeCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU1U3pHValueCodeCodeLoinc,
                            CMRObservationU1U3pHValueCodeCodeSnomed
                        ]),
                        [
                            {
                                codec: CMRObservationU1U3pHValueCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            },
                            {
                                codec: CMRObservationU1U3pHValueCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
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
export interface CMRObservationU1U3pHValueSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3pHValueSubjectReference: t.Type<CMRObservationU1U3pHValueSubjectReference> =
    t.recursion("CMRObservationU1U3pHValueSubjectReference", () =>
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
export interface CMRObservationU1U3pHValueEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3pHValueEncounterReference: t.Type<CMRObservationU1U3pHValueEncounterReference> =
    t.recursion("CMRObservationU1U3pHValueEncounterReference", () =>
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
export interface CMRObservationU1U3pHValuePerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3pHValuePerformerReference: t.Type<CMRObservationU1U3pHValuePerformerReference> =
    t.recursion("CMRObservationU1U3pHValuePerformerReference", () =>
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

interface CMRObservationU1U3pHValue {
    resourceType: "Observation";
    meta: CMRObservationU1U3pHValueMeta;
    status: "final";
    code: CMRObservationU1U3pHValueCode;
    subject: CMRObservationU1U3pHValueSubjectReference;
    encounter: CMRObservationU1U3pHValueEncounterReference;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU1U3pHValueValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3pHValuePerformerReference>;
}

const CMRObservationU1U3pHValue: t.Type<CMRObservationU1U3pHValue> = t.recursion(
    "CMRObservationU1U3pHValue",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3pHValueMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3pHValueCode,
                    subject: CMRObservationU1U3pHValueSubjectReference,
                    encounter: CMRObservationU1U3pHValueEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU1U3pHValueValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1U3pHValuePerformerReference)
                })
            ])
        )
);

export default CMRObservationU1U3pHValue;
