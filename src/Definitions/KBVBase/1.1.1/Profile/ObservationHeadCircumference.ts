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
import { Literal, MinMaxArray, ReqArray, ExtensibleCheck } from "../../../CustomTypes";
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
import HeadCircumferenceBodySiteSnomedVS from "../../../../Definitions/KBVBase/1.1.1/ValueSet/HeadCircumferenceBodySiteSnomed";
import HeadCircumferenceSnomedVS from "../../../../Definitions/KBVBase/1.1.1/ValueSet/HeadCircumferenceSnomed";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationinterpretationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationinterpretation";

import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Head_Circumference"

/**
 * Content in other Language.
 */
export interface ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                t.Type<ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                t.Type<ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed: t.Type<ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed",
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
                                t.Type<ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationHeadCircumferenceCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationHeadCircumferenceCodeCodeSnomedDisplay: t.Type<ObservationHeadCircumferenceCodeCodeSnomedDisplay> =
    t.recursion("ObservationHeadCircumferenceCodeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationHeadCircumferenceCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const ObservationHeadCircumferenceCodeCodeLoincDisplay: t.Type<ObservationHeadCircumferenceCodeCodeLoincDisplay> =
    t.recursion("ObservationHeadCircumferenceCodeCodeLoincDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface ObservationHeadCircumferenceCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: HeadCircumferenceSnomedVS;
    id?: string;
    _display?: ObservationHeadCircumferenceCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationHeadCircumferenceCodeCodeSnomed: t.Type<ObservationHeadCircumferenceCodeCodeSnomed> =
    t.recursion("ObservationHeadCircumferenceCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: HeadCircumferenceSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationHeadCircumferenceCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationHeadCircumferenceCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "9843-4";
    id?: string;
    _display?: ObservationHeadCircumferenceCodeCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationHeadCircumferenceCodeCodeLoinc: t.Type<ObservationHeadCircumferenceCodeCodeLoinc> =
    t.recursion("ObservationHeadCircumferenceCodeCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.68"),
                code: Literal("9843-4")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationHeadCircumferenceCodeCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationHeadCircumferenceBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationHeadCircumferenceBodySiteCodingDisplay: t.Type<ObservationHeadCircumferenceBodySiteCodingDisplay> =
    t.recursion("ObservationHeadCircumferenceBodySiteCodingDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationHeadCircumferenceBodySiteCodingDisplayAnzeigenameCodeSnomed,
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
export interface ObservationHeadCircumferenceValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationHeadCircumferenceValueQuantity: t.Type<ObservationHeadCircumferenceValueQuantity> =
    t.recursion("ObservationHeadCircumferenceValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: Literal("cm"),
                system: Literal("http://unitsofmeasure.org"),
                code: Literal("cm")
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
export interface ObservationHeadCircumferenceBodySiteCoding {
    system: string;
    version: string;
    code: HeadCircumferenceBodySiteSnomedVS;
    id?: string;
    _display?: ObservationHeadCircumferenceBodySiteCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationHeadCircumferenceBodySiteCoding: t.Type<ObservationHeadCircumferenceBodySiteCoding> =
    t.recursion("ObservationHeadCircumferenceBodySiteCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: HeadCircumferenceBodySiteSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationHeadCircumferenceBodySiteCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationHeadCircumferenceCode {
    coding: Array<
        | ObservationHeadCircumferenceCodeCodeSnomed
        | ObservationHeadCircumferenceCodeCodeLoinc
    >;
    id?: string;
    text?: string;
}

export const ObservationHeadCircumferenceCode: t.Type<ObservationHeadCircumferenceCode> =
    t.recursion("ObservationHeadCircumferenceCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationHeadCircumferenceCodeCodeSnomed>,
                            t.Type<ObservationHeadCircumferenceCodeCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationHeadCircumferenceCodeCodeSnomed,
                        ObservationHeadCircumferenceCodeCodeLoinc
                    ]),
                    [
                        {
                            codec: ObservationHeadCircumferenceCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: ObservationHeadCircumferenceCodeCodeLoinc,
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
 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
 */
export interface ObservationHeadCircumferenceBodySite {
    coding: Array<ObservationHeadCircumferenceBodySiteCoding>;
    id?: string;
    text?: string;
}

export const ObservationHeadCircumferenceBodySite: t.Type<ObservationHeadCircumferenceBodySite> =
    t.recursion("ObservationHeadCircumferenceBodySite", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, ObservationHeadCircumferenceBodySiteCoding)
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
export interface ObservationHeadCircumferenceReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationHeadCircumferenceReferenceRange: t.Type<ObservationHeadCircumferenceReferenceRange> =
    t.recursion("ObservationHeadCircumferenceReferenceRange", () =>
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

interface ObservationHeadCircumference {
    status: "final";
    code: ObservationHeadCircumferenceCode;
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
    performer?: Reference[];
    valueQuantity?: ObservationHeadCircumferenceValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: ObservationHeadCircumferenceBodySite;
    method?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationHeadCircumferenceReferenceRange[];
    derivedFrom?: Reference[];
}

const ObservationHeadCircumference: t.Type<ObservationHeadCircumference> = t.recursion(
    "ObservationHeadCircumference",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                code: ObservationHeadCircumferenceCode,
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
                performer: t.array(Reference),
                valueQuantity: ObservationHeadCircumferenceValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: ObservationHeadCircumferenceBodySite,
                method: CodeableConcept,
                device: Reference,
                referenceRange: t.array(ObservationHeadCircumferenceReferenceRange),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationHeadCircumference;
