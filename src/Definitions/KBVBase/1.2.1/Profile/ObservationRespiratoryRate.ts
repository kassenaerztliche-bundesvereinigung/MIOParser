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
import RespiratoryRateSnomedVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/RespiratoryRateSnomed";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Respiratory_Rate"

/**
 * Content in other Language.
 */
export interface ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Atemfrequenz";
    id?: string;
}

export const ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Atemfrequenz")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        Extension | ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationRespiratoryRateCodeLoincDisplay {
    extension: Array<
        Extension | ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationRespiratoryRateCodeLoincDisplay: t.Type<ObservationRespiratoryRateCodeLoincDisplay> =
    t.recursion("ObservationRespiratoryRateCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationRespiratoryRateCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface ObservationRespiratoryRateCodeCodeSnomedDisplay {
    extension: Array<
        Extension | ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationRespiratoryRateCodeCodeSnomedDisplay: t.Type<ObservationRespiratoryRateCodeCodeSnomedDisplay> =
    t.recursion("ObservationRespiratoryRateCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationRespiratoryRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationRespiratoryRateCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "9279-1";
    display: "Respiratory rate";
    id?: string;
    _display?: ObservationRespiratoryRateCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationRespiratoryRateCodeLoinc: t.Type<ObservationRespiratoryRateCodeLoinc> =
    t.recursion("ObservationRespiratoryRateCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.71"),
                code: Literal("9279-1"),
                display: Literal("Respiratory rate")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationRespiratoryRateCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationRespiratoryRateCodeCodeSnomed {
    system: string;
    version: string;
    code: RespiratoryRateSnomedVS;
    id?: string;
    _display?: ObservationRespiratoryRateCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationRespiratoryRateCodeCodeSnomed: t.Type<ObservationRespiratoryRateCodeCodeSnomed> =
    t.recursion("ObservationRespiratoryRateCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: RespiratoryRateSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationRespiratoryRateCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationRespiratoryRateValueQuantity {
    value: number;
    unit: "per minute";
    system: "http://unitsofmeasure.org";
    code: "/min";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationRespiratoryRateValueQuantity: t.Type<ObservationRespiratoryRateValueQuantity> =
    t.recursion("ObservationRespiratoryRateValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: Literal("per minute"),
                system: Literal("http://unitsofmeasure.org"),
                code: Literal("/min")
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationRespiratoryRateCode {
    coding: Array<
        ObservationRespiratoryRateCodeLoinc | ObservationRespiratoryRateCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationRespiratoryRateCode: t.Type<ObservationRespiratoryRateCode> =
    t.recursion("ObservationRespiratoryRateCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationRespiratoryRateCodeLoinc>,
                            t.Type<ObservationRespiratoryRateCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationRespiratoryRateCodeLoinc,
                        ObservationRespiratoryRateCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationRespiratoryRateCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: { system: "http://loinc.org", code: "9279-1" }
                            }
                        },
                        {
                            codec: ObservationRespiratoryRateCodeCodeSnomed,
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
 * Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
 */
export interface ObservationRespiratoryRateReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationRespiratoryRateReferenceRange: t.Type<ObservationRespiratoryRateReferenceRange> =
    t.recursion("ObservationRespiratoryRateReferenceRange", () =>
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

interface ObservationRespiratoryRate {
    status: ObservationstatusVS;
    category: Array<CodeableConcept>;
    code: ObservationRespiratoryRateCode;
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
    valueQuantity?: ObservationRespiratoryRateValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationRespiratoryRateReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationRespiratoryRate: t.Type<ObservationRespiratoryRate> = t.recursion(
    "ObservationRespiratoryRate",
    () =>
        t.intersection([
            t.type({
                status: ObservationstatusVS,
                category: MinArray(1, CodeableConcept),
                code: ObservationRespiratoryRateCode,
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
                valueQuantity: ObservationRespiratoryRateValueQuantity,
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
                device: Reference,
                referenceRange: t.array(ObservationRespiratoryRateReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationRespiratoryRate;
