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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Body_Weight"

/**
 * Content in other Language.
 */
export interface CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpergewicht in kg";
    id?: string;
}

export const CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Körpergewicht in kg")
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
export interface CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpergewicht in kg";
    id?: string;
}

export const CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Körpergewicht in kg")
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
export interface CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationU7U9BodyWeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7U9BodyWeightCodeCodeSnomedDisplay: t.Type<CMRObservationU7U9BodyWeightCodeCodeSnomedDisplay> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeSnomedDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7U9BodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7U9BodyWeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationU7U9BodyWeightCodeCodeLoincDisplay: t.Type<CMRObservationU7U9BodyWeightCodeCodeLoincDisplay> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7U9BodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRObservationU7U9BodyWeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "27113001";
    id?: string;
    _display?: CMRObservationU7U9BodyWeightCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU7U9BodyWeightCodeCodeSnomed: t.Type<CMRObservationU7U9BodyWeightCodeCodeSnomed> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeSnomed",
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
                    _display: CMRObservationU7U9BodyWeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU7U9BodyWeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "29463-7";
    id?: string;
    _display?: CMRObservationU7U9BodyWeightCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU7U9BodyWeightCodeCodeLoinc: t.Type<CMRObservationU7U9BodyWeightCodeCodeLoinc> = t.recursion(
    "CMRObservationU7U9BodyWeightCodeCodeLoinc",
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
                    _display: CMRObservationU7U9BodyWeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU7U9BodyWeightValueQuantity {
    value: number;
    unit: "kg";
    system: "http://unitsofmeasure.org";
    code: "kg";
    id?: string;
}

export const CMRObservationU7U9BodyWeightValueQuantity: t.Type<CMRObservationU7U9BodyWeightValueQuantity> = t.recursion(
    "CMRObservationU7U9BodyWeightValueQuantity",
    () =>
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
export interface CMRObservationU7U9BodyWeightMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Body_Weight|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU7U9BodyWeightMeta: t.Type<CMRObservationU7U9BodyWeightMeta> = t.recursion(
    "CMRObservationU7U9BodyWeightMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Body_Weight|1.0.0"
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
export interface CMRObservationU7U9BodyWeightCode {
    coding: Array<
        | CMRObservationU7U9BodyWeightCodeCodeSnomed
        | CMRObservationU7U9BodyWeightCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU7U9BodyWeightCode: t.Type<CMRObservationU7U9BodyWeightCode> = t.recursion(
    "CMRObservationU7U9BodyWeightCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU7U9BodyWeightCodeCodeSnomed>,
                                t.Type<CMRObservationU7U9BodyWeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU7U9BodyWeightCodeCodeSnomed,
                            CMRObservationU7U9BodyWeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU7U9BodyWeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU7U9BodyWeightCodeCodeLoinc,
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
export interface CMRObservationU7U9BodyWeightSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9BodyWeightSubject: t.Type<CMRObservationU7U9BodyWeightSubject> = t.recursion(
    "CMRObservationU7U9BodyWeightSubject",
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
export interface CMRObservationU7U9BodyWeightEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9BodyWeightEncounter: t.Type<CMRObservationU7U9BodyWeightEncounter> = t.recursion(
    "CMRObservationU7U9BodyWeightEncounter",
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
export interface CMRObservationU7U9BodyWeightPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9BodyWeightPerformer: t.Type<CMRObservationU7U9BodyWeightPerformer> = t.recursion(
    "CMRObservationU7U9BodyWeightPerformer",
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

interface CMRObservationU7U9BodyWeight {
    resourceType: "Observation";
    meta: CMRObservationU7U9BodyWeightMeta;
    status: "final";
    code: CMRObservationU7U9BodyWeightCode;
    subject: CMRObservationU7U9BodyWeightSubject;
    encounter: CMRObservationU7U9BodyWeightEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU7U9BodyWeightValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7U9BodyWeightPerformer>;
}

const CMRObservationU7U9BodyWeight: t.Type<CMRObservationU7U9BodyWeight> = t.recursion(
    "CMRObservationU7U9BodyWeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7U9BodyWeightMeta,
                    status: Literal("final"),
                    code: CMRObservationU7U9BodyWeightCode,
                    subject: CMRObservationU7U9BodyWeightSubject,
                    encounter: CMRObservationU7U9BodyWeightEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU7U9BodyWeightValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU7U9BodyWeightPerformer)
                })
            ])
        )
);

export default CMRObservationU7U9BodyWeight;
