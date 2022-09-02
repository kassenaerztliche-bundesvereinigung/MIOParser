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
    MinMaxArray,
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
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationinterpretationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationinterpretation";
import ObservationstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";
import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";
import UcumVitalsCommonDEVS from "../../../../Definitions/HL7DE/0.9.13/ValueSet/UcumVitalsCommonDE";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Peripheral_Oxygen_Saturation"

/**
 * Content in other Language.
 */
export interface ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "periphere arterielle Sauerstoffsättigung";
    id?: string;
}

export const ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("periphere arterielle Sauerstoffsättigung")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "periphere arterielle Sauerstoffsättigung";
    id?: string;
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("periphere arterielle Sauerstoffsättigung")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent {
    url: "content";
    valueString: "Pulsoximeter";
    id?: string;
}

export const ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent: t.Type<ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent> =
    t.recursion(
        "ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Pulsoximeter")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        | Extension
        | ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed {
    extension: Array<
        | Extension
        | ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed: t.Type<ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed> =
    t.recursion(
        "ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomedContent,
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
export interface ObservationPeripheralOxygenSaturationCodeLoincDisplay {
    extension: Array<
        | Extension
        | ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationPeripheralOxygenSaturationCodeLoincDisplay: t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplay> =
    t.recursion("ObservationPeripheralOxygenSaturationCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay {
    extension: Array<
        | Extension
        | ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay> =
    t.recursion("ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationPeripheralOxygenSaturationCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "2708-6";
    display: "Oxygen saturation in Arterial blood";
    id?: string;
    _display?: ObservationPeripheralOxygenSaturationCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationPeripheralOxygenSaturationCodeLoinc: t.Type<ObservationPeripheralOxygenSaturationCodeLoinc> =
    t.recursion("ObservationPeripheralOxygenSaturationCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.71"),
                code: Literal("2708-6"),
                display: Literal("Oxygen saturation in Arterial blood")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationPeripheralOxygenSaturationCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "431314004";
    display: "Peripheral oxygen saturation (observable entity)";
    id?: string;
    _display?: ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay;
    userSelected?: boolean;
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomed: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomed> =
    t.recursion("ObservationPeripheralOxygenSaturationCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20210731"
                ),
                code: Literal("431314004"),
                display: Literal("Peripheral oxygen saturation (observable entity)")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationPeripheralOxygenSaturationMethodCodingDisplay {
    extension: Array<
        | Extension
        | ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationPeripheralOxygenSaturationMethodCodingDisplay: t.Type<ObservationPeripheralOxygenSaturationMethodCodingDisplay> =
    t.recursion("ObservationPeripheralOxygenSaturationMethodCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationPeripheralOxygenSaturationMethodCodingDisplayAnzeigenameMethodSnomed,
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
export interface ObservationPeripheralOxygenSaturationComponentValueQuantity {
    value: number;
    unit: string;
    system: "http://unitsofmeasure.org";
    code: UcumVitalsCommonDEVS;
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationPeripheralOxygenSaturationComponentValueQuantity: t.Type<ObservationPeripheralOxygenSaturationComponentValueQuantity> =
    t.recursion("ObservationPeripheralOxygenSaturationComponentValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: SCALARString,
                system: Literal("http://unitsofmeasure.org"),
                code: UcumVitalsCommonDEVS
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationPeripheralOxygenSaturationValueQuantity {
    value: number;
    unit: "%";
    system: "http://unitsofmeasure.org";
    code: "%";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationPeripheralOxygenSaturationValueQuantity: t.Type<ObservationPeripheralOxygenSaturationValueQuantity> =
    t.recursion("ObservationPeripheralOxygenSaturationValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: Literal("%"),
                system: Literal("http://unitsofmeasure.org"),
                code: Literal("%")
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
export interface ObservationPeripheralOxygenSaturationMethodCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "448703006";
    display: "Pulse oximeter (physical object)";
    id?: string;
    _display?: ObservationPeripheralOxygenSaturationMethodCodingDisplay;
    userSelected?: boolean;
}

export const ObservationPeripheralOxygenSaturationMethodCoding: t.Type<ObservationPeripheralOxygenSaturationMethodCoding> =
    t.recursion("ObservationPeripheralOxygenSaturationMethodCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20210731"
                ),
                code: Literal("448703006"),
                display: Literal("Pulse oximeter (physical object)")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationPeripheralOxygenSaturationMethodCodingDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationPeripheralOxygenSaturationCode {
    coding: Array<
        | ObservationPeripheralOxygenSaturationCodeLoinc
        | ObservationPeripheralOxygenSaturationCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationPeripheralOxygenSaturationCode: t.Type<ObservationPeripheralOxygenSaturationCode> =
    t.recursion("ObservationPeripheralOxygenSaturationCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationPeripheralOxygenSaturationCodeLoinc>,
                            t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationPeripheralOxygenSaturationCodeLoinc,
                        ObservationPeripheralOxygenSaturationCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationPeripheralOxygenSaturationCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: { system: "http://loinc.org", code: "2708-6" }
                            }
                        },
                        {
                            codec: ObservationPeripheralOxygenSaturationCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://snomed.info/sct",
                                    version:
                                        "http://snomed.info/sct/900000000000207008/version/20210731",
                                    code: "431314004",
                                    display:
                                        "Peripheral oxygen saturation (observable entity)"
                                }
                            }
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
 * Indicates the mechanism used to perform the observation.
 */
export interface ObservationPeripheralOxygenSaturationMethod {
    coding: Array<ObservationPeripheralOxygenSaturationMethodCoding>;
    id?: string;
    text?: string;
}

export const ObservationPeripheralOxygenSaturationMethod: t.Type<ObservationPeripheralOxygenSaturationMethod> =
    t.recursion("ObservationPeripheralOxygenSaturationMethod", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(
                    1,
                    1,
                    ObservationPeripheralOxygenSaturationMethodCoding
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
export interface ObservationPeripheralOxygenSaturationReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationPeripheralOxygenSaturationReferenceRange: t.Type<ObservationPeripheralOxygenSaturationReferenceRange> =
    t.recursion("ObservationPeripheralOxygenSaturationReferenceRange", () =>
        t.partial({
            id: SCALARString,
            low: SimpleQuantity,
            high: SimpleQuantity,
            type: CodeableConcept,
            appliesTo: t.array(CodeableConcept),
            age: Range,
            text: SCALARString
        })
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface ObservationPeripheralOxygenSaturationComponent {
    code: CodeableConcept;
    id?: string;
    valueQuantity?: ObservationPeripheralOxygenSaturationComponentValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    referenceRange?: ObservationPeripheralOxygenSaturationReferenceRange[];
}

export const ObservationPeripheralOxygenSaturationComponent: t.Type<ObservationPeripheralOxygenSaturationComponent> =
    t.recursion("ObservationPeripheralOxygenSaturationComponent", () =>
        t.intersection([
            t.type({
                code: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                valueQuantity:
                    ObservationPeripheralOxygenSaturationComponentValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                referenceRange: t.array(
                    ObservationPeripheralOxygenSaturationReferenceRange
                )
            })
        ])
    );

interface ObservationPeripheralOxygenSaturation {
    status: ObservationstatusVS;
    category: Array<CodeableConcept>;
    code: ObservationPeripheralOxygenSaturationCode;
    subject: Reference;
    effectiveDateTime: string;
    method: ObservationPeripheralOxygenSaturationMethod;
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
    encounter?: Reference;
    issued?: string;
    performer?: Reference[];
    valueQuantity?: ObservationPeripheralOxygenSaturationValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationPeripheralOxygenSaturationReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
    component?: ObservationPeripheralOxygenSaturationComponent[];
}

const ObservationPeripheralOxygenSaturation: t.Type<ObservationPeripheralOxygenSaturation> =
    t.recursion("ObservationPeripheralOxygenSaturation", () =>
        t.intersection([
            t.type({
                status: ObservationstatusVS,
                category: MinArray(1, CodeableConcept),
                code: ObservationPeripheralOxygenSaturationCode,
                subject: Reference,
                effectiveDateTime: SCALARDateTime,
                method: ObservationPeripheralOxygenSaturationMethod
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
                encounter: Reference,
                issued: SCALARInstant,
                performer: t.array(Reference),
                valueQuantity: ObservationPeripheralOxygenSaturationValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: CodeableConcept,
                device: Reference,
                referenceRange: t.array(
                    ObservationPeripheralOxygenSaturationReferenceRange
                ),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference),
                component: t.array(ObservationPeripheralOxygenSaturationComponent)
            })
        ])
    );

export default ObservationPeripheralOxygenSaturation;
