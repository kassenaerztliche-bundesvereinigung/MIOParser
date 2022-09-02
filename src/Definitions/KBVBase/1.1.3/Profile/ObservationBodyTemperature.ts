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
import { Literal, MinArray, ReqArray, ExtensibleCheck } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import BodyTempSnomedVS from "../../../../Definitions/KBVBase/1.1.3/ValueSet/BodyTempSnomed";

import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";

import DataabsentreasonVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Dataabsentreason";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationinterpretationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationinterpretation";

import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Body_Temperature"

/**
 * Content in other Language.
 */
export interface ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpertemperatur";
    id?: string;
}

export const ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Körpertemperatur")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent: t.Type<ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent> =
    t.recursion(
        "ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                            t.Type<ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoincContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
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
                                t.Type<ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent
    )[];
}

export const ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum: t.Type<ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum> =
    t.recursion("ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum", () =>
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
                            t.Type<ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcumContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBodyTemperatureCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const ObservationBodyTemperatureCodeLoincDisplay: t.Type<ObservationBodyTemperatureCodeLoincDisplay> =
    t.recursion("ObservationBodyTemperatureCodeLoincDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyTemperatureCodeLoincDisplayAnzeigenameCodeLoinc,
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
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBodyTemperatureCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationBodyTemperatureCodeCodeSnomedDisplay: t.Type<ObservationBodyTemperatureCodeCodeSnomedDisplay> =
    t.recursion("ObservationBodyTemperatureCodeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyTemperatureCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyTemperatureCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8310-5";
    display: "Body temperature";
    id?: string;
    _display?: ObservationBodyTemperatureCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationBodyTemperatureCodeLoinc: t.Type<ObservationBodyTemperatureCodeLoinc> =
    t.recursion("ObservationBodyTemperatureCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.69"),
                code: Literal("8310-5"),
                display: Literal("Body temperature")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyTemperatureCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyTemperatureCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyTempSnomedVS;
    id?: string;
    _display?: ObservationBodyTemperatureCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyTemperatureCodeCodeSnomed: t.Type<ObservationBodyTemperatureCodeCodeSnomed> =
    t.recursion("ObservationBodyTemperatureCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: BodyTempSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyTemperatureCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A human-readable form of the unit.
 */
export interface ObservationBodyTemperatureValueQuantityUnit {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum
    )[];
    value?: string;
}

export const ObservationBodyTemperatureValueQuantityUnit: t.Type<ObservationBodyTemperatureValueQuantityUnit> =
    t.recursion("ObservationBodyTemperatureValueQuantityUnit", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyTemperatureValueQuantityUnitAnzeigenameUnitUcum,
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
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationBodyTemperatureValueQuantity {
    value: number;
    system: "http://unitsofmeasure.org";
    code: "Cel";
    id?: string;
    comparator?: QuantitycomparatorVS;
    _unit?: ObservationBodyTemperatureValueQuantityUnit;
    unit?: string;
}

export const ObservationBodyTemperatureValueQuantity: t.Type<ObservationBodyTemperatureValueQuantity> =
    t.recursion("ObservationBodyTemperatureValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                system: Literal("http://unitsofmeasure.org"),
                code: Literal("Cel")
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS,
                _unit: ObservationBodyTemperatureValueQuantityUnit,
                unit: SCALARString
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationBodyTemperatureCode {
    coding: Array<
        ObservationBodyTemperatureCodeLoinc | ObservationBodyTemperatureCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationBodyTemperatureCode: t.Type<ObservationBodyTemperatureCode> =
    t.recursion("ObservationBodyTemperatureCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBodyTemperatureCodeLoinc>,
                            t.Type<ObservationBodyTemperatureCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBodyTemperatureCodeLoinc,
                        ObservationBodyTemperatureCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationBodyTemperatureCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://loinc.org",
                                    version: "2.69",
                                    code: "8310-5",
                                    display: "Body temperature"
                                }
                            }
                        },
                        {
                            codec: ObservationBodyTemperatureCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: { system: "http://snomed.info/sct" }
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
 * Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
 */
export interface ObservationBodyTemperatureReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationBodyTemperatureReferenceRange: t.Type<ObservationBodyTemperatureReferenceRange> =
    t.recursion("ObservationBodyTemperatureReferenceRange", () =>
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

interface ObservationBodyTemperature {
    status: "final";
    category: Array<CodeableConcept>;
    code: ObservationBodyTemperatureCode;
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
    encounter?: Reference;
    issued?: string;
    performer?: Reference[];
    valueQuantity?: ObservationBodyTemperatureValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    specimen?: Reference;
    device?: Reference;
    referenceRange?: ObservationBodyTemperatureReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationBodyTemperature: t.Type<ObservationBodyTemperature> = t.recursion(
    "ObservationBodyTemperature",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                category: MinArray(1, CodeableConcept),
                code: ObservationBodyTemperatureCode,
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
                encounter: Reference,
                issued: SCALARInstant,
                performer: t.array(Reference),
                valueQuantity: ObservationBodyTemperatureValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: CodeableConcept,
                method: CodeableConcept,
                specimen: Reference,
                device: Reference,
                referenceRange: t.array(ObservationBodyTemperatureReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationBodyTemperature;
