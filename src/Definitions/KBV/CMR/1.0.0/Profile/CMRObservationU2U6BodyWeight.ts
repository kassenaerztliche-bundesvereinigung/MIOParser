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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Body_Weight"

/**
 * Content in other Language.
 */
export interface CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpergewicht in g";
    id?: string;
}

export const CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpergewicht in g";
    id?: string;
}

export const CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                t.Type<
                                    CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationU2U6BodyWeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2U6BodyWeightCodeCodeSnomedDisplay: t.Type<CMRObservationU2U6BodyWeightCodeCodeSnomedDisplay> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeSnomedDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U6BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface CMRObservationU2U6BodyWeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationU2U6BodyWeightCodeCodeLoincDisplay: t.Type<CMRObservationU2U6BodyWeightCodeCodeLoincDisplay> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U6BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface CMRObservationU2U6BodyWeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "27113001";
    id?: string;
    _display?: CMRObservationU2U6BodyWeightCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU2U6BodyWeightCodeCodeSnomed: t.Type<CMRObservationU2U6BodyWeightCodeCodeSnomed> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("27113001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U6BodyWeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU2U6BodyWeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "29463-7";
    id?: string;
    _display?: CMRObservationU2U6BodyWeightCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU2U6BodyWeightCodeCodeLoinc: t.Type<CMRObservationU2U6BodyWeightCodeCodeLoinc> = t.recursion(
    "CMRObservationU2U6BodyWeightCodeCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("29463-7")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U6BodyWeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU2U6BodyWeightValueQuantity {
    value: number;
    unit: "g";
    system: "http://unitsofmeasure.org";
    code: "g";
    id?: string;
}

export const CMRObservationU2U6BodyWeightValueQuantity: t.Type<CMRObservationU2U6BodyWeightValueQuantity> = t.recursion(
    "CMRObservationU2U6BodyWeightValueQuantity",
    () =>
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
export interface CMRObservationU2U6BodyWeightMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Body_Weight|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU2U6BodyWeightMeta: t.Type<CMRObservationU2U6BodyWeightMeta> = t.recursion(
    "CMRObservationU2U6BodyWeightMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Body_Weight|1.0.0"
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
export interface CMRObservationU2U6BodyWeightCode {
    coding: Array<
        | CMRObservationU2U6BodyWeightCodeCodeSnomed
        | CMRObservationU2U6BodyWeightCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU2U6BodyWeightCode: t.Type<CMRObservationU2U6BodyWeightCode> = t.recursion(
    "CMRObservationU2U6BodyWeightCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU2U6BodyWeightCodeCodeSnomed>,
                                t.Type<CMRObservationU2U6BodyWeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU2U6BodyWeightCodeCodeSnomed,
                            CMRObservationU2U6BodyWeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU2U6BodyWeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU2U6BodyWeightCodeCodeLoinc,
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
export interface CMRObservationU2U6BodyWeightSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2U6BodyWeightSubject: t.Type<CMRObservationU2U6BodyWeightSubject> = t.recursion(
    "CMRObservationU2U6BodyWeightSubject",
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU2U6BodyWeightEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2U6BodyWeightEncounter: t.Type<CMRObservationU2U6BodyWeightEncounter> = t.recursion(
    "CMRObservationU2U6BodyWeightEncounter",
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU2U6BodyWeightPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2U6BodyWeightPerformer: t.Type<CMRObservationU2U6BodyWeightPerformer> = t.recursion(
    "CMRObservationU2U6BodyWeightPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRObservationU2U6BodyWeight {
    resourceType: "Observation";
    meta: CMRObservationU2U6BodyWeightMeta;
    status: "final";
    code: CMRObservationU2U6BodyWeightCode;
    subject: CMRObservationU2U6BodyWeightSubject;
    encounter: CMRObservationU2U6BodyWeightEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU2U6BodyWeightValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2U6BodyWeightPerformer>;
}

const CMRObservationU2U6BodyWeight: t.Type<CMRObservationU2U6BodyWeight> = t.recursion(
    "CMRObservationU2U6BodyWeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2U6BodyWeightMeta,
                    status: Literal("final"),
                    code: CMRObservationU2U6BodyWeightCode,
                    subject: CMRObservationU2U6BodyWeightSubject,
                    encounter: CMRObservationU2U6BodyWeightEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU2U6BodyWeightValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU2U6BodyWeightPerformer)
                })
            ])
        )
);

export default CMRObservationU2U6BodyWeight;
