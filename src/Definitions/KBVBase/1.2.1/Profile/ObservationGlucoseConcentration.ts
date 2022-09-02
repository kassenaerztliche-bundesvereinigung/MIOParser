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
    MinArray,
    MaxArray,
    MinMaxArray,
    ValueSetCheck,
    ReqArray,
    ExtensibleCheck
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import DataabsentreasonVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Dataabsentreason";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GlucoseConcentrationInterpretationVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GlucoseConcentrationInterpretation";
import GlucoseConcentrationLoincVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GlucoseConcentrationLoinc";
import GlucoseConcentrationSnomedVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GlucoseConcentrationSnomed";
import GlucoseConcentrationUnitVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GlucoseConcentrationUnit";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import ObservationstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";
import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ReferencerangemeaningVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Referencerangemeaning";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Glucose_Concentration"

/**
 * Content in other Language.
 */
export interface ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        | Extension
        | ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoincContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed: t.Type<ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationGlucoseConcentrationCodeLoincDisplay {
    extension: Array<
        Extension | ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationGlucoseConcentrationCodeLoincDisplay: t.Type<ObservationGlucoseConcentrationCodeLoincDisplay> =
    t.recursion("ObservationGlucoseConcentrationCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationGlucoseConcentrationCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationGlucoseConcentrationCodeCodeSnomedDisplay {
    extension: Array<
        | Extension
        | ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationGlucoseConcentrationCodeCodeSnomedDisplay: t.Type<ObservationGlucoseConcentrationCodeCodeSnomedDisplay> =
    t.recursion("ObservationGlucoseConcentrationCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationGlucoseConcentrationCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationGlucoseConcentrationCodeLoinc {
    system: string;
    version: string;
    code: GlucoseConcentrationLoincVS;
    id?: string;
    _display?: ObservationGlucoseConcentrationCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationGlucoseConcentrationCodeLoinc: t.Type<ObservationGlucoseConcentrationCodeLoinc> =
    t.recursion("ObservationGlucoseConcentrationCodeLoinc", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: GlucoseConcentrationLoincVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationGlucoseConcentrationCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationGlucoseConcentrationCodeCodeSnomed {
    system: string;
    version: string;
    code: GlucoseConcentrationSnomedVS;
    id?: string;
    _display?: ObservationGlucoseConcentrationCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationGlucoseConcentrationCodeCodeSnomed: t.Type<ObservationGlucoseConcentrationCodeCodeSnomed> =
    t.recursion("ObservationGlucoseConcentrationCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: GlucoseConcentrationSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationGlucoseConcentrationCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationGlucoseConcentrationInterpretationCodingDisplay {
    extension: Array<
        | Extension
        | ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationGlucoseConcentrationInterpretationCodingDisplay: t.Type<ObservationGlucoseConcentrationInterpretationCodingDisplay> =
    t.recursion("ObservationGlucoseConcentrationInterpretationCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationGlucoseConcentrationInterpretationCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationGlucoseConcentrationValueQuantity {
    value: number;
    unit: string;
    system: "http://unitsofmeasure.org";
    code: GlucoseConcentrationUnitVS;
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationGlucoseConcentrationValueQuantity: t.Type<ObservationGlucoseConcentrationValueQuantity> =
    t.recursion("ObservationGlucoseConcentrationValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: SCALARString,
                system: Literal("http://unitsofmeasure.org"),
                code: GlucoseConcentrationUnitVS
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationGlucoseConcentrationInterpretationCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: GlucoseConcentrationInterpretationVS;
    id?: string;
    _display?: ObservationGlucoseConcentrationInterpretationCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationGlucoseConcentrationInterpretationCoding: t.Type<ObservationGlucoseConcentrationInterpretationCoding> =
    t.recursion("ObservationGlucoseConcentrationInterpretationCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: GlucoseConcentrationInterpretationVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationGlucoseConcentrationInterpretationCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).
 */
export interface ObservationGlucoseConcentrationReferenceRangeLow {
    value: number;
    unit: string;
    system: "http://unitsofmeasure.org";
    code: GlucoseConcentrationUnitVS;
    id?: string;
}

export const ObservationGlucoseConcentrationReferenceRangeLow: t.Type<ObservationGlucoseConcentrationReferenceRangeLow> =
    t.recursion("ObservationGlucoseConcentrationReferenceRangeLow", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: SCALARString,
                system: Literal("http://unitsofmeasure.org"),
                code: GlucoseConcentrationUnitVS
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).
 */
export interface ObservationGlucoseConcentrationReferenceRangeHigh {
    value: number;
    unit: string;
    system: "http://unitsofmeasure.org";
    code: GlucoseConcentrationUnitVS;
    id?: string;
}

export const ObservationGlucoseConcentrationReferenceRangeHigh: t.Type<ObservationGlucoseConcentrationReferenceRangeHigh> =
    t.recursion("ObservationGlucoseConcentrationReferenceRangeHigh", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: SCALARString,
                system: Literal("http://unitsofmeasure.org"),
                code: GlucoseConcentrationUnitVS
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationGlucoseConcentrationCode {
    coding: Array<
        | ObservationGlucoseConcentrationCodeLoinc
        | ObservationGlucoseConcentrationCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationGlucoseConcentrationCode: t.Type<ObservationGlucoseConcentrationCode> =
    t.recursion("ObservationGlucoseConcentrationCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationGlucoseConcentrationCodeLoinc>,
                            t.Type<ObservationGlucoseConcentrationCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationGlucoseConcentrationCodeLoinc,
                        ObservationGlucoseConcentrationCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationGlucoseConcentrationCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: { pattern: "$this" }
                        },
                        {
                            codec: ObservationGlucoseConcentrationCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: { pattern: "$this" }
                        }
                    ],
                    ["2", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * A categorical assessment of an observation value.  For example, high, low, normal.
 */
export interface ObservationGlucoseConcentrationInterpretation {
    coding: Array<ObservationGlucoseConcentrationInterpretationCoding>;
    id?: string;
    text?: string;
}

export const ObservationGlucoseConcentrationInterpretation: t.Type<ObservationGlucoseConcentrationInterpretation> =
    t.recursion("ObservationGlucoseConcentrationInterpretation", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(
                    1,
                    1,
                    ObservationGlucoseConcentrationInterpretationCoding
                )
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
 */
export interface ObservationGlucoseConcentrationReferenceRange {
    id?: string;
    low?: ObservationGlucoseConcentrationReferenceRangeLow;
    high?: ObservationGlucoseConcentrationReferenceRangeHigh;
    type?: {
        coding: {
            system?: string;
            version?: string;
            code?: ReferencerangemeaningVS;
            display?: string;
            userSelected?: boolean;
        }[];
    };
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationGlucoseConcentrationReferenceRange: t.Type<ObservationGlucoseConcentrationReferenceRange> =
    t.recursion("ObservationGlucoseConcentrationReferenceRange", () =>
        t.partial({
            id: SCALARString,
            low: ObservationGlucoseConcentrationReferenceRangeLow,
            high: ObservationGlucoseConcentrationReferenceRangeHigh,
            type: t.type({
                coding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: ValueSetCheck<t.Type<ReferencerangemeaningVS>>(
                            ReferencerangemeaningVS
                        ),
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            appliesTo: t.array(CodeableConcept),
            age: Range,
            text: SCALARString
        })
    );

interface ObservationGlucoseConcentration {
    status: ObservationstatusVS;
    category: Array<CodeableConcept>;
    code: ObservationGlucoseConcentrationCode;
    subject: Reference;
    effectiveDateTime: string;
    resourceType?: "Observation";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    basedOn?: Reference[];
    partOf?: Reference[];
    focus?: Reference[];
    encounter?: Reference;
    issued?: string;
    performer?: Reference[];
    valueQuantity?: ObservationGlucoseConcentrationValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: Array<ObservationGlucoseConcentrationInterpretation>;
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    specimen?: Reference;
    device?: Reference;
    referenceRange?: Array<ObservationGlucoseConcentrationReferenceRange>;
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationGlucoseConcentration: t.Type<ObservationGlucoseConcentration> =
    t.recursion("ObservationGlucoseConcentration", () =>
        t.intersection([
            t.type({
                status: ObservationstatusVS,
                category: MinArray(1, CodeableConcept),
                code: ObservationGlucoseConcentrationCode,
                subject: Reference,
                effectiveDateTime: SCALARDateTime
            }),
            t.partial({
                resourceType: Literal("Observation"),
                id: SCALARString,
                meta: Meta,
                implicitRules: SCALARUri,
                language: SCALARCode,
                text: Narrative,
                contained: t.array(Resource),
                identifier: t.array(Identifier),
                basedOn: t.array(Reference),
                partOf: t.array(Reference),
                focus: t.array(Reference),
                encounter: Reference,
                issued: SCALARInstant,
                performer: t.array(Reference),
                valueQuantity: ObservationGlucoseConcentrationValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: MaxArray(
                    1,
                    ObservationGlucoseConcentrationInterpretation
                ),
                note: t.array(Annotation),
                bodySite: CodeableConcept,
                method: CodeableConcept,
                specimen: Reference,
                device: Reference,
                referenceRange: MaxArray(
                    1,
                    ObservationGlucoseConcentrationReferenceRange
                ),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
    );

export default ObservationGlucoseConcentration;
