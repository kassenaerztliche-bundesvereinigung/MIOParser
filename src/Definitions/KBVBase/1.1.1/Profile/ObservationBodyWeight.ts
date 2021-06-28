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
import { Literal, MinMaxArray, ReqArray, ExtensibleCheck } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import BodyWeightLoincVS from "../../../../Definitions/KBVBase/1.1.1/ValueSet/BodyWeightLoinc";
import BodyWeightMethodSnomedVS from "../../../../Definitions/KBVBase/1.1.1/ValueSet/BodyWeightMethodSnomed";
import BodyWeightSnomedVS from "../../../../Definitions/KBVBase/1.1.1/ValueSet/BodyWeightSnomed";
import BodyWeightUnitVS from "../../../../Definitions/KBVBase/1.1.1/ValueSet/BodyWeightUnit";
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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Body_Weight"

/**
 * Content in other Language.
 */
export interface ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gesamtkörper";
    id?: string;
}

export const ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent",
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
 * Content in other Language.
 */
export interface ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent: t.Type<ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent> = t.recursion(
    "ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent",
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
export interface ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed",
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
                                ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent
    )[];
}

export const ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed: t.Type<ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed> = t.recursion(
    "ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed",
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
                                ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent,
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
export interface ObservationBodyWeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationBodyWeightCodeCodeSnomedDisplay: t.Type<ObservationBodyWeightCodeCodeSnomedDisplay> = t.recursion(
    "ObservationBodyWeightCodeCodeSnomedDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                        >
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface ObservationBodyWeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const ObservationBodyWeightCodeCodeLoincDisplay: t.Type<ObservationBodyWeightCodeCodeLoincDisplay> = t.recursion(
    "ObservationBodyWeightCodeCodeLoincDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                        >
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface ObservationBodyWeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyWeightSnomedVS;
    id?: string;
    _display?: ObservationBodyWeightCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyWeightCodeCodeSnomed: t.Type<ObservationBodyWeightCodeCodeSnomed> = t.recursion(
    "ObservationBodyWeightCodeCodeSnomed",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: BodyWeightSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyWeightCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyWeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: BodyWeightLoincVS;
    id?: string;
    _display?: ObservationBodyWeightCodeCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyWeightCodeCodeLoinc: t.Type<ObservationBodyWeightCodeCodeLoinc> = t.recursion(
    "ObservationBodyWeightCodeCodeLoinc",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: SCALARString,
                code: BodyWeightLoincVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyWeightCodeCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBodyWeightBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ObservationBodyWeightBodySiteCodingDisplay: t.Type<ObservationBodyWeightBodySiteCodingDisplay> = t.recursion(
    "ObservationBodyWeightBodySiteCodingDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed
                        >
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed,
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
export interface ObservationBodyWeightMethodCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed
    )[];
    value?: string;
}

export const ObservationBodyWeightMethodCodingDisplay: t.Type<ObservationBodyWeightMethodCodingDisplay> = t.recursion(
    "ObservationBodyWeightMethodCodingDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed
                        >
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed,
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
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationBodyWeightValueQuantity {
    value: number;
    unit: BodyWeightUnitVS;
    system: "http://unitsofmeasure.org";
    code: BodyWeightUnitVS;
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBodyWeightValueQuantity: t.Type<ObservationBodyWeightValueQuantity> = t.recursion(
    "ObservationBodyWeightValueQuantity",
    () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: BodyWeightUnitVS,
                system: Literal("http://unitsofmeasure.org"),
                code: BodyWeightUnitVS
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
export interface ObservationBodyWeightBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "38266002";
    id?: string;
    _display?: ObservationBodyWeightBodySiteCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyWeightBodySiteCoding: t.Type<ObservationBodyWeightBodySiteCoding> = t.recursion(
    "ObservationBodyWeightBodySiteCoding",
    () =>
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
                _display: ObservationBodyWeightBodySiteCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyWeightMethodCoding {
    system: string;
    version: string;
    code: BodyWeightMethodSnomedVS;
    id?: string;
    _display?: ObservationBodyWeightMethodCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyWeightMethodCoding: t.Type<ObservationBodyWeightMethodCoding> = t.recursion(
    "ObservationBodyWeightMethodCoding",
    () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: BodyWeightMethodSnomedVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyWeightMethodCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationBodyWeightCode {
    coding: Array<
        ObservationBodyWeightCodeCodeSnomed | ObservationBodyWeightCodeCodeLoinc
    >;
    id?: string;
    text?: string;
}

export const ObservationBodyWeightCode: t.Type<ObservationBodyWeightCode> = t.recursion(
    "ObservationBodyWeightCode",
    () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBodyWeightCodeCodeSnomed>,
                            t.Type<ObservationBodyWeightCodeCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBodyWeightCodeCodeSnomed,
                        ObservationBodyWeightCodeCodeLoinc
                    ]),
                    [
                        {
                            codec: ObservationBodyWeightCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: ObservationBodyWeightCodeCodeLoinc,
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
export interface ObservationBodyWeightBodySite {
    coding: Array<ObservationBodyWeightBodySiteCoding>;
    id?: string;
    text?: string;
}

export const ObservationBodyWeightBodySite: t.Type<ObservationBodyWeightBodySite> = t.recursion(
    "ObservationBodyWeightBodySite",
    () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, ObservationBodyWeightBodySiteCoding)
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
export interface ObservationBodyWeightMethod {
    coding: Array<ObservationBodyWeightMethodCoding>;
    id?: string;
    text?: string;
}

export const ObservationBodyWeightMethod: t.Type<ObservationBodyWeightMethod> = t.recursion(
    "ObservationBodyWeightMethod",
    () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, ObservationBodyWeightMethodCoding)
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
export interface ObservationBodyWeightReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationBodyWeightReferenceRange: t.Type<ObservationBodyWeightReferenceRange> = t.recursion(
    "ObservationBodyWeightReferenceRange",
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

interface ObservationBodyWeight {
    status: "final";
    code: ObservationBodyWeightCode;
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
    valueQuantity?: ObservationBodyWeightValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: ObservationBodyWeightBodySite;
    method?: ObservationBodyWeightMethod;
    device?: Reference;
    referenceRange?: ObservationBodyWeightReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationBodyWeight: t.Type<ObservationBodyWeight> = t.recursion(
    "ObservationBodyWeight",
    () =>
        t.intersection([
            t.type({
                status: Literal("final"),
                code: ObservationBodyWeightCode,
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
                valueQuantity: ObservationBodyWeightValueQuantity,
                dataAbsentReason: ExtensibleCheck<t.Type<DataabsentreasonVS>>(
                    DataabsentreasonVS
                ),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: ObservationBodyWeightBodySite,
                method: ObservationBodyWeightMethod,
                device: Reference,
                referenceRange: t.array(ObservationBodyWeightReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationBodyWeight;
