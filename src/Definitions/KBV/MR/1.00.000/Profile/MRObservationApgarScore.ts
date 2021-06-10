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

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import ApgarScoreIdentifierLoincVS from "../../../../../Definitions/KBVBase/1.01.000/ValueSet/ApgarScoreIdentifierLoinc";
import ApgarScoreIdentifierSnomedVS from "../../../../../Definitions/KBVBase/1.01.000/ValueSet/ApgarScoreIdentifierSnomed";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score"

/**
 * Content in other Language.
 */
export interface MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface MRObservationApgarScoreCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationApgarScoreCodeCodeSnomedDisplay: t.Type<MRObservationApgarScoreCodeCodeSnomedDisplay> = t.recursion(
    "MRObservationApgarScoreCodeCodeSnomedDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationApgarScoreCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationApgarScoreCodeCodeLoincDisplay: t.Type<MRObservationApgarScoreCodeCodeLoincDisplay> = t.recursion(
    "MRObservationApgarScoreCodeCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationApgarScoreValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const MRObservationApgarScoreValueCodeableConceptCodingDisplay: t.Type<MRObservationApgarScoreValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationApgarScoreValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface MRObservationApgarScoreCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: ApgarScoreIdentifierSnomedVS;
    id?: string;
    _display?: MRObservationApgarScoreCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationApgarScoreCodeCodeSnomed: t.Type<MRObservationApgarScoreCodeCodeSnomed> = t.recursion(
    "MRObservationApgarScoreCodeCodeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: ApgarScoreIdentifierSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationApgarScoreCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationApgarScoreCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: ApgarScoreIdentifierLoincVS;
    id?: string;
    _display?: MRObservationApgarScoreCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationApgarScoreCodeCodeLoinc: t.Type<MRObservationApgarScoreCodeCodeLoinc> = t.recursion(
    "MRObservationApgarScoreCodeCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: ApgarScoreIdentifierLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationApgarScoreCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationApgarScoreValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: string;
    id?: string;
    _display?: MRObservationApgarScoreValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationApgarScoreValueCodeableConceptCoding: t.Type<MRObservationApgarScoreValueCodeableConceptCoding> = t.recursion(
    "MRObservationApgarScoreValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationApgarScoreValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationApgarScoreValueCodeableConcept {
    coding: Array<MRObservationApgarScoreValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationApgarScoreValueCodeableConcept: t.Type<MRObservationApgarScoreValueCodeableConcept> = t.recursion(
    "MRObservationApgarScoreValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationApgarScoreValueCodeableConceptCoding
                    )
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
export interface MRObservationApgarScoreMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score|1.0.0"
    >;
    id?: string;
}

export const MRObservationApgarScoreMeta: t.Type<MRObservationApgarScoreMeta> = t.recursion(
    "MRObservationApgarScoreMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score|1.0.0"
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
export interface MRObservationApgarScoreCode {
    coding: Array<
        MRObservationApgarScoreCodeCodeSnomed | MRObservationApgarScoreCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationApgarScoreCode: t.Type<MRObservationApgarScoreCode> = t.recursion(
    "MRObservationApgarScoreCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationApgarScoreCodeCodeSnomed>,
                                t.Type<MRObservationApgarScoreCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationApgarScoreCodeCodeSnomed,
                            MRObservationApgarScoreCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationApgarScoreCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationApgarScoreCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "*"]
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
export interface MRObservationApgarScoreSubject {
    reference: string;
    id?: string;
}

export const MRObservationApgarScoreSubject: t.Type<MRObservationApgarScoreSubject> = t.recursion(
    "MRObservationApgarScoreSubject",
    () =>
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
export interface MRObservationApgarScoreEncounter {
    reference: string;
    id?: string;
}

export const MRObservationApgarScoreEncounter: t.Type<MRObservationApgarScoreEncounter> = t.recursion(
    "MRObservationApgarScoreEncounter",
    () =>
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
export interface MRObservationApgarScorePerformer {
    reference: string;
    id?: string;
}

export const MRObservationApgarScorePerformer: t.Type<MRObservationApgarScorePerformer> = t.recursion(
    "MRObservationApgarScorePerformer",
    () =>
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

interface MRObservationApgarScore {
    resourceType: "Observation";
    meta: MRObservationApgarScoreMeta;
    status: "final";
    code: MRObservationApgarScoreCode;
    subject: MRObservationApgarScoreSubject;
    encounter: MRObservationApgarScoreEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationApgarScoreValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationApgarScorePerformer>;
}

const MRObservationApgarScore: t.Type<MRObservationApgarScore> = t.recursion(
    "MRObservationApgarScore",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationApgarScoreMeta,
                    status: Literal("final"),
                    code: MRObservationApgarScoreCode,
                    subject: MRObservationApgarScoreSubject,
                    encounter: MRObservationApgarScoreEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept: MRObservationApgarScoreValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationApgarScorePerformer)
                })
            ])
        )
);

export default MRObservationApgarScore;
