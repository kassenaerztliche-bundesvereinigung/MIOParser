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
import HeartRateSnomedVS from "../../../../Definitions/KBVBase/1.1.3/ValueSet/HeartRateSnomed";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationinterpretationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationinterpretation";

import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Heart_Rate"

/**
 * Content in other Language.
 */
export interface ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Herzfrequenz";
    id?: string;
}

export const ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion("ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent", () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: Literal("Herzfrequenz")
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Content in other Language.
 */
export interface ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                            t.Type<ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                            t.Type<ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationHeartRateCodeLoincDisplay {
    id?: string;
    extension?: (Extension | ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc)[];
    value?: string;
}

export const ObservationHeartRateCodeLoincDisplay: t.Type<ObservationHeartRateCodeLoincDisplay> =
    t.recursion("ObservationHeartRateCodeLoincDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationHeartRateCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface ObservationHeartRateCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationHeartRateCodeCodeSnomedDisplay: t.Type<ObservationHeartRateCodeCodeSnomedDisplay> =
    t.recursion("ObservationHeartRateCodeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationHeartRateCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationHeartRateCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8867-4";
    display: "Heart rate";
    id?: string;
    _display?: ObservationHeartRateCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationHeartRateCodeLoinc: t.Type<ObservationHeartRateCodeLoinc> =
    t.recursion("ObservationHeartRateCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.69"),
                code: Literal("8867-4"),
                display: Literal("Heart rate")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationHeartRateCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationHeartRateCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: HeartRateSnomedVS;
    id?: string;
    _display?: ObservationHeartRateCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationHeartRateCodeCodeSnomed: t.Type<ObservationHeartRateCodeCodeSnomed> =
    t.recursion("ObservationHeartRateCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: HeartRateSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationHeartRateCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationHeartRateValueQuantity {
    value: number;
    unit: "/min";
    system: "http://unitsofmeasure.org";
    code: "/min";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationHeartRateValueQuantity: t.Type<ObservationHeartRateValueQuantity> =
    t.recursion("ObservationHeartRateValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: Literal("/min"),
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
export interface ObservationHeartRateCode {
    coding: Array<ObservationHeartRateCodeLoinc | ObservationHeartRateCodeCodeSnomed>;
    id?: string;
    text?: string;
}

export const ObservationHeartRateCode: t.Type<ObservationHeartRateCode> = t.recursion(
    "ObservationHeartRateCode",
    () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationHeartRateCodeLoinc>,
                            t.Type<ObservationHeartRateCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationHeartRateCodeLoinc,
                        ObservationHeartRateCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationHeartRateCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://loinc.org",
                                    version: "2.69",
                                    code: "8867-4",
                                    display: "Heart rate"
                                }
                            }
                        },
                        {
                            codec: ObservationHeartRateCodeCodeSnomed,
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
export interface ObservationHeartRateReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationHeartRateReferenceRange: t.Type<ObservationHeartRateReferenceRange> =
    t.recursion("ObservationHeartRateReferenceRange", () =>
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

interface ObservationHeartRate {
    status: "final";
    category: Array<CodeableConcept>;
    code: ObservationHeartRateCode;
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
    valueQuantity?: ObservationHeartRateValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationHeartRateReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationHeartRate: t.Type<ObservationHeartRate> = t.recursion(
    "ObservationHeartRate",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                category: MinArray(1, CodeableConcept),
                code: ObservationHeartRateCode,
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
                valueQuantity: ObservationHeartRateValueQuantity,
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
                referenceRange: t.array(ObservationHeartRateReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationHeartRate;
