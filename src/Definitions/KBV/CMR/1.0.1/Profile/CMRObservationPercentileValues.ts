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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CMRPercentileBodyMeasureLoincVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRPercentileBodyMeasureLoinc";
import CMRPercentileBodyMeasureSnomedVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRPercentileBodyMeasureSnomed";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Percentile_Values"

/**
 * Content in other Language.
 */
export interface CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationPercentileValuesCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationPercentileValuesCodeCodeSnomedDisplay: t.Type<CMRObservationPercentileValuesCodeCodeSnomedDisplay> =
    t.recursion("CMRObservationPercentileValuesCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationPercentileValuesCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationPercentileValuesCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationPercentileValuesCodeCodeLoincDisplay: t.Type<CMRObservationPercentileValuesCodeCodeLoincDisplay> =
    t.recursion("CMRObservationPercentileValuesCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationPercentileValuesCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRObservationPercentileValuesCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: CMRPercentileBodyMeasureSnomedVS;
    id?: string;
    _display?: CMRObservationPercentileValuesCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationPercentileValuesCodeCodeSnomed: t.Type<CMRObservationPercentileValuesCodeCodeSnomed> =
    t.recursion("CMRObservationPercentileValuesCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: CMRPercentileBodyMeasureSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationPercentileValuesCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationPercentileValuesCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: CMRPercentileBodyMeasureLoincVS;
    id?: string;
    _display?: CMRObservationPercentileValuesCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationPercentileValuesCodeCodeLoinc: t.Type<CMRObservationPercentileValuesCodeCodeLoinc> =
    t.recursion("CMRObservationPercentileValuesCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: CMRPercentileBodyMeasureLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationPercentileValuesCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationPercentileValuesValueQuantity {
    value: number;
    unit: "%";
    system: "http://unitsofmeasure.org";
    code: "%";
    id?: string;
}

export const CMRObservationPercentileValuesValueQuantity: t.Type<CMRObservationPercentileValuesValueQuantity> =
    t.recursion("CMRObservationPercentileValuesValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("%"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("%")
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
export interface CMRObservationPercentileValuesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Percentile_Values|1.0.1">;
    id?: string;
}

export const CMRObservationPercentileValuesMeta: t.Type<CMRObservationPercentileValuesMeta> =
    t.recursion("CMRObservationPercentileValuesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Percentile_Values|1.0.1"
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
export interface CMRObservationPercentileValuesCode {
    coding: Array<
        | CMRObservationPercentileValuesCodeCodeSnomed
        | CMRObservationPercentileValuesCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationPercentileValuesCode: t.Type<CMRObservationPercentileValuesCode> =
    t.recursion("CMRObservationPercentileValuesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationPercentileValuesCodeCodeSnomed>,
                                t.Type<CMRObservationPercentileValuesCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationPercentileValuesCodeCodeSnomed,
                            CMRObservationPercentileValuesCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationPercentileValuesCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationPercentileValuesCodeCodeLoinc,
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
export interface CMRObservationPercentileValuesSubject {
    reference: string;
    id?: string;
}

export const CMRObservationPercentileValuesSubject: t.Type<CMRObservationPercentileValuesSubject> =
    t.recursion("CMRObservationPercentileValuesSubject", () =>
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
export interface CMRObservationPercentileValuesEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationPercentileValuesEncounter: t.Type<CMRObservationPercentileValuesEncounter> =
    t.recursion("CMRObservationPercentileValuesEncounter", () =>
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
export interface CMRObservationPercentileValuesPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationPercentileValuesPerformer: t.Type<CMRObservationPercentileValuesPerformer> =
    t.recursion("CMRObservationPercentileValuesPerformer", () =>
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

/**
 * The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image.
 */
export interface CMRObservationPercentileValuesDerivedFrom {
    reference: string;
    id?: string;
}

export const CMRObservationPercentileValuesDerivedFrom: t.Type<CMRObservationPercentileValuesDerivedFrom> =
    t.recursion("CMRObservationPercentileValuesDerivedFrom", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Weight|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Body_Weight|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Body_Weight|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Head_Circumference|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Length|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_BMI|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationPercentileValues {
    resourceType: "Observation";
    meta: CMRObservationPercentileValuesMeta;
    status: "final";
    code: CMRObservationPercentileValuesCode;
    subject: CMRObservationPercentileValuesSubject;
    encounter: CMRObservationPercentileValuesEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationPercentileValuesValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationPercentileValuesPerformer>;
    note?: Array<Annotation>;
    derivedFrom?: Array<CMRObservationPercentileValuesDerivedFrom>;
}

const CMRObservationPercentileValues: t.Type<CMRObservationPercentileValues> =
    t.recursion("CMRObservationPercentileValues", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationPercentileValuesMeta,
                    status: Literal("final"),
                    code: CMRObservationPercentileValuesCode,
                    subject: CMRObservationPercentileValuesSubject,
                    encounter: CMRObservationPercentileValuesEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationPercentileValuesValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationPercentileValuesPerformer),
                    note: MaxArray(1, Annotation),
                    derivedFrom: MaxArray(1, CMRObservationPercentileValuesDerivedFrom)
                })
            ])
        )
    );

export default CMRObservationPercentileValues;
