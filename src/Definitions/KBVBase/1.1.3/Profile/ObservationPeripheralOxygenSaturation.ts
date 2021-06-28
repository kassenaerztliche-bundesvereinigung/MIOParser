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

export const ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
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

export const ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            t.Type<
                                ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoincContent
                            >
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
                    ["0", "*"]
                )
            })
        ])
);

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                            t.Type<
                                ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            >
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
                    ["0", "*"]
                )
            })
        ])
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationPeripheralOxygenSaturationCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const ObservationPeripheralOxygenSaturationCodeLoincDisplay: t.Type<ObservationPeripheralOxygenSaturationCodeLoincDisplay> = t.recursion(
    "ObservationPeripheralOxygenSaturationCodeLoincDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            ObservationPeripheralOxygenSaturationCodeLoincDisplayAnzeigenameCodeLoinc
                        >
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
                            value:
                                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay> = t.recursion(
    "ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                        >
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
                            value:
                                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface ObservationPeripheralOxygenSaturationCodeLoinc {
    system: string;
    version: string;
    code: string;
    id?: string;
    _display?: ObservationPeripheralOxygenSaturationCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationPeripheralOxygenSaturationCodeLoinc: t.Type<ObservationPeripheralOxygenSaturationCodeLoinc> = t.recursion(
    "ObservationPeripheralOxygenSaturationCodeLoinc",
    () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationPeripheralOxygenSaturationCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationPeripheralOxygenSaturationCodeCodeSnomed {
    system: string;
    version: string;
    code: string;
    id?: string;
    _display?: ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationPeripheralOxygenSaturationCodeCodeSnomed: t.Type<ObservationPeripheralOxygenSaturationCodeCodeSnomed> = t.recursion(
    "ObservationPeripheralOxygenSaturationCodeCodeSnomed",
    () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationPeripheralOxygenSaturationCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationPeripheralOxygenSaturationComponentValueQuantity {
    value: number;
    unit: string;
    system: string;
    code: UcumVitalsCommonDEVS;
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationPeripheralOxygenSaturationComponentValueQuantity: t.Type<ObservationPeripheralOxygenSaturationComponentValueQuantity> = t.recursion(
    "ObservationPeripheralOxygenSaturationComponentValueQuantity",
    () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: SCALARString,
                system: SCALARUri,
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

export const ObservationPeripheralOxygenSaturationValueQuantity: t.Type<ObservationPeripheralOxygenSaturationValueQuantity> = t.recursion(
    "ObservationPeripheralOxygenSaturationValueQuantity",
    () =>
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

export const ObservationPeripheralOxygenSaturationCode: t.Type<ObservationPeripheralOxygenSaturationCode> = t.recursion(
    "ObservationPeripheralOxygenSaturationCode",
    () =>
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
                            sliceBy: { path: "" }
                        },
                        {
                            codec: ObservationPeripheralOxygenSaturationCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "" }
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
export interface ObservationPeripheralOxygenSaturationReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationPeripheralOxygenSaturationReferenceRange: t.Type<ObservationPeripheralOxygenSaturationReferenceRange> = t.recursion(
    "ObservationPeripheralOxygenSaturationReferenceRange",
    () =>
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

export const ObservationPeripheralOxygenSaturationComponent: t.Type<ObservationPeripheralOxygenSaturationComponent> = t.recursion(
    "ObservationPeripheralOxygenSaturationComponent",
    () =>
        t.intersection([
            t.type({
                code: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                valueQuantity: ObservationPeripheralOxygenSaturationComponentValueQuantity,
                dataAbsentReason: ExtensibleCheck<t.Type<DataabsentreasonVS>>(
                    DataabsentreasonVS
                ),
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
    status: "final";
    category: Array<CodeableConcept>;
    code: ObservationPeripheralOxygenSaturationCode;
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
    valueQuantity?: ObservationPeripheralOxygenSaturationValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationPeripheralOxygenSaturationReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
    component?: ObservationPeripheralOxygenSaturationComponent[];
}

const ObservationPeripheralOxygenSaturation: t.Type<ObservationPeripheralOxygenSaturation> = t.recursion(
    "ObservationPeripheralOxygenSaturation",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                category: MinArray(1, CodeableConcept),
                code: ObservationPeripheralOxygenSaturationCode,
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
                valueQuantity: ObservationPeripheralOxygenSaturationValueQuantity,
                dataAbsentReason: ExtensibleCheck<t.Type<DataabsentreasonVS>>(
                    DataabsentreasonVS
                ),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: CodeableConcept,
                method: CodeableConcept,
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
