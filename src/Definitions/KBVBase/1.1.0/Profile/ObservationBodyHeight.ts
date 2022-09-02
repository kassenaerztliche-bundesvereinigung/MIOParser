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
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import BodyHeightLoincVS from "../../../../Definitions/KBVBase/1.1.0/ValueSet/BodyHeightLoinc";
import BodyHeightSnomedVS from "../../../../Definitions/KBVBase/1.1.0/ValueSet/BodyHeightSnomed";
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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Body_Height"

/**
 * Content in other Language.
 */
export interface ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gesamtkörper";
    id?: string;
}

export const ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Gesamtkörper")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                            t.Type<ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                            t.Type<ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed", () =>
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
                            t.Type<ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationBodyHeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationBodyHeightCodeCodeSnomedDisplay: t.Type<ObservationBodyHeightCodeCodeSnomedDisplay> =
    t.recursion("ObservationBodyHeightCodeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationBodyHeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const ObservationBodyHeightCodeCodeLoincDisplay: t.Type<ObservationBodyHeightCodeCodeLoincDisplay> =
    t.recursion("ObservationBodyHeightCodeCodeLoincDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyHeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyHeightSnomedVS;
    id?: string;
    _display?: ObservationBodyHeightCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyHeightCodeCodeSnomed: t.Type<ObservationBodyHeightCodeCodeSnomed> =
    t.recursion("ObservationBodyHeightCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: BodyHeightSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyHeightCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyHeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: BodyHeightLoincVS;
    id?: string;
    _display?: ObservationBodyHeightCodeCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyHeightCodeCodeLoinc: t.Type<ObservationBodyHeightCodeCodeLoinc> =
    t.recursion("ObservationBodyHeightCodeCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: SCALARString,
                code: BodyHeightLoincVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyHeightCodeCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBodyHeightBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationBodyHeightBodySiteCodingDisplay: t.Type<ObservationBodyHeightBodySiteCodingDisplay> =
    t.recursion("ObservationBodyHeightBodySiteCodingDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed,
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
export interface ObservationBodyHeightValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBodyHeightValueQuantity: t.Type<ObservationBodyHeightValueQuantity> =
    t.recursion("ObservationBodyHeightValueQuantity", () =>
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
export interface ObservationBodyHeightBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "38266002";
    id?: string;
    _display?: ObservationBodyHeightBodySiteCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyHeightBodySiteCoding: t.Type<ObservationBodyHeightBodySiteCoding> =
    t.recursion("ObservationBodyHeightBodySiteCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20200731"
                ),
                code: Literal("38266002")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyHeightBodySiteCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationBodyHeightCode {
    coding: Array<
        ObservationBodyHeightCodeCodeSnomed | ObservationBodyHeightCodeCodeLoinc
    >;
    id?: string;
    text?: string;
}

export const ObservationBodyHeightCode: t.Type<ObservationBodyHeightCode> = t.recursion(
    "ObservationBodyHeightCode",
    () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBodyHeightCodeCodeSnomed>,
                            t.Type<ObservationBodyHeightCodeCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBodyHeightCodeCodeSnomed,
                        ObservationBodyHeightCodeCodeLoinc
                    ]),
                    [
                        {
                            codec: ObservationBodyHeightCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: ObservationBodyHeightCodeCodeLoinc,
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
export interface ObservationBodyHeightBodySite {
    coding: Array<ObservationBodyHeightBodySiteCoding>;
    id?: string;
    text?: string;
}

export const ObservationBodyHeightBodySite: t.Type<ObservationBodyHeightBodySite> =
    t.recursion("ObservationBodyHeightBodySite", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, ObservationBodyHeightBodySiteCoding)
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
export interface ObservationBodyHeightReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationBodyHeightReferenceRange: t.Type<ObservationBodyHeightReferenceRange> =
    t.recursion("ObservationBodyHeightReferenceRange", () =>
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

interface ObservationBodyHeight {
    status: "final";
    code: ObservationBodyHeightCode;
    subject: Reference;
    resourceType?: "Observation";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Array<Resource>;
    identifier?: Array<Identifier>;
    basedOn?: Array<Reference>;
    partOf?: Array<Reference>;
    category?: CodeableConcept[];
    encounter?: Reference;
    effectiveDateTime?: string;
    issued?: string;
    performer?: Reference[];
    valueQuantity?: ObservationBodyHeightValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: ObservationBodyHeightBodySite;
    method?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationBodyHeightReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationBodyHeight: t.Type<ObservationBodyHeight> = t.recursion(
    "ObservationBodyHeight",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                code: ObservationBodyHeightCode,
                subject: Reference
            }),
            t.partial({
                resourceType: Literal("Observation"),
                id: SCALARString,
                meta: Meta,
                implicitRules: SCALARUri,
                language: SCALARCode,
                text: Narrative,
                contained: MaxArray(1, Resource),
                identifier: MaxArray(1, Identifier),
                basedOn: MaxArray(1, Reference),
                partOf: MaxArray(1, Reference),
                category: t.array(CodeableConcept),
                encounter: Reference,
                effectiveDateTime: SCALARDateTime,
                issued: SCALARInstant,
                performer: t.array(Reference),
                valueQuantity: ObservationBodyHeightValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: ObservationBodyHeightBodySite,
                method: CodeableConcept,
                device: Reference,
                referenceRange: t.array(ObservationBodyHeightReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationBodyHeight;
