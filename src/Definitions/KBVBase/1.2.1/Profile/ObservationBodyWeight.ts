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
import BodyWeightMethodSnomedVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/BodyWeightMethodSnomed";
import BodyWeightSnomedVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/BodyWeightSnomed";
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
import VitalSignDEBodyWeightLoincVS from "../../../../Definitions/HL7DE/0.9.13/ValueSet/VitalSignDEBodyWeightLoinc";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Body_Weight"

/**
 * Content in other Language.
 */
export interface ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion("ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent", () =>
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
export interface ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
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
export interface ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gesamtkörper";
    id?: string;
}

export const ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
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

export const ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent: t.Type<ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent> =
    t.recursion(
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        Extension | ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        Extension | ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
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
export interface ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed {
    extension: Array<
        Extension | ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent>
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
export interface ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed {
    extension: Array<
        Extension | ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed: t.Type<ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed> =
    t.recursion("ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomedContent>
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
export interface ObservationBodyWeightCodeLoincDisplay {
    extension: Array<
        Extension | ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationBodyWeightCodeLoincDisplay: t.Type<ObservationBodyWeightCodeLoincDisplay> =
    t.recursion("ObservationBodyWeightCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyWeightCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface ObservationBodyWeightCodeCodeSnomedDisplay {
    extension: Array<
        Extension | ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBodyWeightCodeCodeSnomedDisplay: t.Type<ObservationBodyWeightCodeCodeSnomedDisplay> =
    t.recursion("ObservationBodyWeightCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
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
export interface ObservationBodyWeightCodeLoinc {
    system: string;
    version: "2.71";
    code: VitalSignDEBodyWeightLoincVS;
    id?: string;
    _display?: ObservationBodyWeightCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyWeightCodeLoinc: t.Type<ObservationBodyWeightCodeLoinc> =
    t.recursion("ObservationBodyWeightCodeLoinc", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: Literal("2.71"),
                code: VitalSignDEBodyWeightLoincVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyWeightCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyWeightCodeCodeSnomed {
    system: string;
    version: string;
    code: BodyWeightSnomedVS;
    id?: string;
    _display?: ObservationBodyWeightCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyWeightCodeCodeSnomed: t.Type<ObservationBodyWeightCodeCodeSnomed> =
    t.recursion("ObservationBodyWeightCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBodyWeightBodySiteCodingDisplay {
    extension: Array<
        Extension | ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBodyWeightBodySiteCodingDisplay: t.Type<ObservationBodyWeightBodySiteCodingDisplay> =
    t.recursion("ObservationBodyWeightBodySiteCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightBodySiteCodingDisplayAnzeigenameCodeSnomed>
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
export interface ObservationBodyWeightMethodCodingDisplay {
    extension: Array<
        Extension | ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBodyWeightMethodCodingDisplay: t.Type<ObservationBodyWeightMethodCodingDisplay> =
    t.recursion("ObservationBodyWeightMethodCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyWeightMethodCodingDisplayAnzeigenameMethodSnomed>
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
export interface ObservationBodyWeightValueQuantity {
    value: number;
    unit: string;
    system: "http://unitsofmeasure.org";
    code: UcumVitalsCommonDEVS;
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBodyWeightValueQuantity: t.Type<ObservationBodyWeightValueQuantity> =
    t.recursion("ObservationBodyWeightValueQuantity", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyWeightBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "38266002";
    display: "Entire body as a whole (body structure)";
    id?: string;
    _display?: ObservationBodyWeightBodySiteCodingDisplay;
    userSelected?: boolean;
}

export const ObservationBodyWeightBodySiteCoding: t.Type<ObservationBodyWeightBodySiteCoding> =
    t.recursion("ObservationBodyWeightBodySiteCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20210731"
                ),
                code: Literal("38266002"),
                display: Literal("Entire body as a whole (body structure)")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyWeightBodySiteCodingDisplay,
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

export const ObservationBodyWeightMethodCoding: t.Type<ObservationBodyWeightMethodCoding> =
    t.recursion("ObservationBodyWeightMethodCoding", () =>
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
    coding: Array<ObservationBodyWeightCodeLoinc | ObservationBodyWeightCodeCodeSnomed>;
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
                            t.Type<ObservationBodyWeightCodeLoinc>,
                            t.Type<ObservationBodyWeightCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBodyWeightCodeLoinc,
                        ObservationBodyWeightCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationBodyWeightCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: { pattern: "$this" }
                        },
                        {
                            codec: ObservationBodyWeightCodeCodeSnomed,
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
 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
 */
export interface ObservationBodyWeightBodySite {
    coding: Array<ObservationBodyWeightBodySiteCoding>;
    id?: string;
    text?: string;
}

export const ObservationBodyWeightBodySite: t.Type<ObservationBodyWeightBodySite> =
    t.recursion("ObservationBodyWeightBodySite", () =>
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

export const ObservationBodyWeightMethod: t.Type<ObservationBodyWeightMethod> =
    t.recursion("ObservationBodyWeightMethod", () =>
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

export const ObservationBodyWeightReferenceRange: t.Type<ObservationBodyWeightReferenceRange> =
    t.recursion("ObservationBodyWeightReferenceRange", () =>
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
    status: ObservationstatusVS;
    category: Array<CodeableConcept>;
    code: ObservationBodyWeightCode;
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
                status: ObservationstatusVS,
                category: MinArray(1, CodeableConcept),
                code: ObservationBodyWeightCode,
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
                valueQuantity: ObservationBodyWeightValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
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
