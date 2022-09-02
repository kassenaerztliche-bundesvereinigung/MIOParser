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
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import ApgarScoreIdentifierLoincVS from "../../../../Definitions/KBVBase/1.1.0/ValueSet/ApgarScoreIdentifierLoinc";
import ApgarScoreIdentifierSnomedVS from "../../../../Definitions/KBVBase/1.1.0/ValueSet/ApgarScoreIdentifierSnomed";
import ApgarScoreValueVS from "../../../../Definitions/KBVBase/1.1.0/ValueSet/ApgarScoreValue";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import DataabsentreasonVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Dataabsentreason";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationinterpretationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationinterpretation";

import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Apgar_Score"

/**
 * Content in other Language.
 */
export interface ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                            t.Type<ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                            t.Type<ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                t.Type<ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface ObservationApgarScoreCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationApgarScoreCodeCodeSnomedDisplay: t.Type<ObservationApgarScoreCodeCodeSnomedDisplay> =
    t.recursion("ObservationApgarScoreCodeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationApgarScoreCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const ObservationApgarScoreCodeCodeLoincDisplay: t.Type<ObservationApgarScoreCodeCodeLoincDisplay> =
    t.recursion("ObservationApgarScoreCodeCodeLoincDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc,
                        occurrence: ["0", "*"],
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
export interface ObservationApgarScoreValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const ObservationApgarScoreValueCodeableConceptCodingDisplay: t.Type<ObservationApgarScoreValueCodeableConceptCodingDisplay> =
    t.recursion("ObservationApgarScoreValueCodeableConceptCodingDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface ObservationApgarScoreCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: ApgarScoreIdentifierSnomedVS;
    id?: string;
    _display?: ObservationApgarScoreCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationApgarScoreCodeCodeSnomed: t.Type<ObservationApgarScoreCodeCodeSnomed> =
    t.recursion("ObservationApgarScoreCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: ApgarScoreIdentifierSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationApgarScoreCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationApgarScoreCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: ApgarScoreIdentifierLoincVS;
    id?: string;
    _display?: ObservationApgarScoreCodeCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationApgarScoreCodeCodeLoinc: t.Type<ObservationApgarScoreCodeCodeLoinc> =
    t.recursion("ObservationApgarScoreCodeCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: SCALARString,
                code: ApgarScoreIdentifierLoincVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationApgarScoreCodeCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationApgarScoreValueCodeableConceptCoding {
    system: string;
    version: string;
    code: ApgarScoreValueVS;
    id?: string;
    _display?: ObservationApgarScoreValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationApgarScoreValueCodeableConceptCoding: t.Type<ObservationApgarScoreValueCodeableConceptCoding> =
    t.recursion("ObservationApgarScoreValueCodeableConceptCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: ApgarScoreValueVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationApgarScoreValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationApgarScoreValueCodeableConcept {
    coding: Array<ObservationApgarScoreValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const ObservationApgarScoreValueCodeableConcept: t.Type<ObservationApgarScoreValueCodeableConcept> =
    t.recursion("ObservationApgarScoreValueCodeableConcept", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, ObservationApgarScoreValueCodeableConceptCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationApgarScoreCode {
    coding: Array<
        ObservationApgarScoreCodeCodeSnomed | ObservationApgarScoreCodeCodeLoinc
    >;
    id?: string;
    text?: string;
}

export const ObservationApgarScoreCode: t.Type<ObservationApgarScoreCode> = t.recursion(
    "ObservationApgarScoreCode",
    () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationApgarScoreCodeCodeSnomed>,
                            t.Type<ObservationApgarScoreCodeCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationApgarScoreCodeCodeSnomed,
                        ObservationApgarScoreCodeCodeLoinc
                    ]),
                    [
                        {
                            codec: ObservationApgarScoreCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: ObservationApgarScoreCodeCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "http://loinc.org" }
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
export interface ObservationApgarScoreReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationApgarScoreReferenceRange: t.Type<ObservationApgarScoreReferenceRange> =
    t.recursion("ObservationApgarScoreReferenceRange", () =>
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

interface ObservationApgarScore {
    status: "final";
    code: ObservationApgarScoreCode;
    subject: Reference;
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
    category?: CodeableConcept[];
    encounter?: Reference;
    effectiveDateTime?: string;
    issued?: string;
    performer?: Array<Reference>;
    valueCodeableConcept?: ObservationApgarScoreValueCodeableConcept;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    method?: CodeableConcept;
    referenceRange?: ObservationApgarScoreReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationApgarScore: t.Type<ObservationApgarScore> = t.recursion(
    "ObservationApgarScore",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                code: ObservationApgarScoreCode,
                subject: Reference
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
                category: t.array(CodeableConcept),
                encounter: Reference,
                effectiveDateTime: SCALARDateTime,
                issued: SCALARInstant,
                performer: MaxArray(1, Reference),
                valueCodeableConcept: ObservationApgarScoreValueCodeableConcept,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                method: CodeableConcept,
                referenceRange: t.array(ObservationApgarScoreReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationApgarScore;
