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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRExaminationInterpretationVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRExaminationInterpretation";
import MRExaminationLoincVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRExaminationLoinc";
import MRExaminationResultQualitativeVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRExaminationResultQualitative";
import MRExaminationSnomedVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRExaminationSnomed";
import MRExaminationUnitVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRExaminationUnit";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination"

/**
 * Content in other Language.
 */
export interface MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent: t.Type<MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent> = t.recursion(
    "MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent",
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
export interface MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent
    )[];
}

export const MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed: t.Type<MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed> = t.recursion(
    "MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed",
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
                                    MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent,
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
export interface MRObservationExaminationCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationExaminationCodeSnomedCTDisplay: t.Type<MRObservationExaminationCodeSnomedCTDisplay> = t.recursion(
    "MRObservationExaminationCodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationExaminationCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationExaminationCodeLoincDisplay: t.Type<MRObservationExaminationCodeLoincDisplay> = t.recursion(
    "MRObservationExaminationCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationExaminationValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const MRObservationExaminationValueCodeableConceptCodingDisplay: t.Type<MRObservationExaminationValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationExaminationValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface MRObservationExaminationCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: MRExaminationSnomedVS;
    id?: string;
    _display?: MRObservationExaminationCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationExaminationCodeSnomedCT: t.Type<MRObservationExaminationCodeSnomedCT> = t.recursion(
    "MRObservationExaminationCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRExaminationSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: MRExaminationLoincVS;
    id?: string;
    _display?: MRObservationExaminationCodeLoincDisplay;
    display?: string;
}

export const MRObservationExaminationCodeLoinc: t.Type<MRObservationExaminationCodeLoinc> = t.recursion(
    "MRObservationExaminationCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: MRExaminationLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRExaminationResultQualitativeVS;
    id?: string;
    _display?: MRObservationExaminationValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationExaminationValueCodeableConceptCoding: t.Type<MRObservationExaminationValueCodeableConceptCoding> = t.recursion(
    "MRObservationExaminationValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRExaminationResultQualitativeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationInterpretationCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed
    )[];
    value?: string;
}

export const MRObservationExaminationInterpretationCodingDisplay: t.Type<MRObservationExaminationInterpretationCodingDisplay> = t.recursion(
    "MRObservationExaminationInterpretationCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed,
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
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationExaminationValueQuantity {
    value: number;
    unit: MRExaminationUnitVS;
    system: "http://unitsofmeasure.org";
    code: MRExaminationUnitVS;
    id?: string;
}

export const MRObservationExaminationValueQuantity: t.Type<MRObservationExaminationValueQuantity> = t.recursion(
    "MRObservationExaminationValueQuantity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: MRExaminationUnitVS,
                    system: Literal("http://unitsofmeasure.org"),
                    code: MRExaminationUnitVS
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationExaminationValueCodeableConcept {
    coding: Array<MRObservationExaminationValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationExaminationValueCodeableConcept: t.Type<MRObservationExaminationValueCodeableConcept> = t.recursion(
    "MRObservationExaminationValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationExaminationValueCodeableConceptCoding
                    )
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
export interface MRObservationExaminationDataAbsentReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason";
    code: "masked";
    display: "Masked";
    id?: string;
    version?: string;
}

export const MRObservationExaminationDataAbsentReasonCoding: t.Type<MRObservationExaminationDataAbsentReasonCoding> = t.recursion(
    "MRObservationExaminationDataAbsentReasonCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/data-absent-reason"
                    ),
                    code: Literal("masked"),
                    display: Literal("Masked")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationInterpretationCoding {
    system: string;
    version: string;
    code: MRExaminationInterpretationVS;
    id?: string;
    _display?: MRObservationExaminationInterpretationCodingDisplay;
    display?: string;
}

export const MRObservationExaminationInterpretationCoding: t.Type<MRObservationExaminationInterpretationCoding> = t.recursion(
    "MRObservationExaminationInterpretationCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: MRExaminationInterpretationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationInterpretationCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationExaminationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.0.0"
    >;
    id?: string;
}

export const MRObservationExaminationMeta: t.Type<MRObservationExaminationMeta> = t.recursion(
    "MRObservationExaminationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.0.0"
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
 * A unique identifier assigned to this observation.
 */
export interface MRObservationExaminationIdentifier {
    system: string;
    value: string;
    id?: string;
}

export const MRObservationExaminationIdentifier: t.Type<MRObservationExaminationIdentifier> = t.recursion(
    "MRObservationExaminationIdentifier",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    value: SCALARString
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
export interface MRObservationExaminationCode {
    coding: Array<
        MRObservationExaminationCodeSnomedCT | MRObservationExaminationCodeLoinc
    >;
    id?: string;
}

export const MRObservationExaminationCode: t.Type<MRObservationExaminationCode> = t.recursion(
    "MRObservationExaminationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationExaminationCodeSnomedCT>,
                                t.Type<MRObservationExaminationCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationExaminationCodeSnomedCT,
                            MRObservationExaminationCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationExaminationCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationExaminationCodeLoinc,
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
export interface MRObservationExaminationSubject {
    reference: string;
    id?: string;
}

export const MRObservationExaminationSubject: t.Type<MRObservationExaminationSubject> = t.recursion(
    "MRObservationExaminationSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationExaminationEncounter {
    reference: string;
    id?: string;
}

export const MRObservationExaminationEncounter: t.Type<MRObservationExaminationEncounter> = t.recursion(
    "MRObservationExaminationEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationExaminationPerformer {
    reference: string;
    id?: string;
}

export const MRObservationExaminationPerformer: t.Type<MRObservationExaminationPerformer> = t.recursion(
    "MRObservationExaminationPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Provides a reason why the expected value in the element Observation.value[x] is missing.
 */
export interface MRObservationExaminationDataAbsentReason {
    coding: Array<MRObservationExaminationDataAbsentReasonCoding>;
    id?: string;
}

export const MRObservationExaminationDataAbsentReason: t.Type<MRObservationExaminationDataAbsentReason> = t.recursion(
    "MRObservationExaminationDataAbsentReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationExaminationDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A categorical assessment of an observation value.  For example, high, low, normal.
 */
export interface MRObservationExaminationInterpretation {
    coding: Array<MRObservationExaminationInterpretationCoding>;
    id?: string;
}

export const MRObservationExaminationInterpretation: t.Type<MRObservationExaminationInterpretation> = t.recursion(
    "MRObservationExaminationInterpretation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationExaminationInterpretationCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRObservationExamination {
    meta: MRObservationExaminationMeta;
    status: "final";
    code: MRObservationExaminationCode;
    subject: MRObservationExaminationSubject;
    encounter: MRObservationExaminationEncounter;
    effectiveDateTime: string;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    identifier?: Array<MRObservationExaminationIdentifier>;
    performer?: Array<MRObservationExaminationPerformer>;
    valueCodeableConcept?: MRObservationExaminationValueCodeableConcept;
    valueQuantity?: MRObservationExaminationValueQuantity;
    dataAbsentReason?: MRObservationExaminationDataAbsentReason;
    interpretation?: Array<MRObservationExaminationInterpretation>;
    note?: Array<Annotation>;
}

const MRObservationExamination: t.Type<MRObservationExamination> = t.recursion(
    "MRObservationExamination",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationExaminationMeta,
                    status: Literal("final"),
                    code: MRObservationExaminationCode,
                    subject: MRObservationExaminationSubject,
                    encounter: MRObservationExaminationEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    identifier: MaxArray(1, MRObservationExaminationIdentifier),
                    performer: MaxArray(1, MRObservationExaminationPerformer),
                    valueCodeableConcept: MRObservationExaminationValueCodeableConcept,
                    valueQuantity: MRObservationExaminationValueQuantity,
                    dataAbsentReason: MRObservationExaminationDataAbsentReason,
                    interpretation: MaxArray(1, MRObservationExaminationInterpretation),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRObservationExamination;
