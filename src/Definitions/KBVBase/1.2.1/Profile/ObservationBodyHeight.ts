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
import BodyHeightSnomedVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/BodyHeightSnomed";
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

import VitalSignDEBodyHeightLoincVS from "../../../../Definitions/HL7DE/0.9.13/ValueSet/VitalSignDEBodyHeightLoinc";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Body_Height"

/**
 * Content in other Language.
 */
export interface ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent: t.Type<ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent> =
    t.recursion("ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent", () =>
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc {
    extension: Array<
        Extension | ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc: t.Type<ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc> =
    t.recursion("ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyHeightCodeLoincDisplayAnzeigenameloincContent,
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
export interface ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        Extension | ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
        t.intersection([
            t.type({
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
export interface ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed {
    extension: Array<
        Extension | ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed: t.Type<ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed", () =>
        t.intersection([
            t.type({
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
export interface ObservationBodyHeightCodeLoincDisplay {
    extension: Array<Extension | ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc>;
    id?: string;
    value?: string;
}

export const ObservationBodyHeightCodeLoincDisplay: t.Type<ObservationBodyHeightCodeLoincDisplay> =
    t.recursion("ObservationBodyHeightCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBodyHeightCodeLoincDisplayAnzeigenameloinc,
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
export interface ObservationBodyHeightCodeCodeSnomedDisplay {
    extension: Array<
        Extension | ObservationBodyHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBodyHeightCodeCodeSnomedDisplay: t.Type<ObservationBodyHeightCodeCodeSnomedDisplay> =
    t.recursion("ObservationBodyHeightCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
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
export interface ObservationBodyHeightCodeLoinc {
    system: string;
    version: string;
    code: VitalSignDEBodyHeightLoincVS;
    id?: string;
    _display?: ObservationBodyHeightCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const ObservationBodyHeightCodeLoinc: t.Type<ObservationBodyHeightCodeLoinc> =
    t.recursion("ObservationBodyHeightCodeLoinc", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: VitalSignDEBodyHeightLoincVS
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBodyHeightCodeLoincDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBodyHeightCodeCodeSnomed {
    system: string;
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
                system: SCALARUri,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBodyHeightBodySiteCodingDisplay {
    extension: Array<
        Extension | ObservationBodyHeightBodySiteCodingDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBodyHeightBodySiteCodingDisplay: t.Type<ObservationBodyHeightBodySiteCodingDisplay> =
    t.recursion("ObservationBodyHeightBodySiteCodingDisplay", () =>
        t.intersection([
            t.type({
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
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "38266002";
    display: "Entire body as a whole (body structure)";
    id?: string;
    _display?: ObservationBodyHeightBodySiteCodingDisplay;
    userSelected?: boolean;
}

export const ObservationBodyHeightBodySiteCoding: t.Type<ObservationBodyHeightBodySiteCoding> =
    t.recursion("ObservationBodyHeightBodySiteCoding", () =>
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
                _display: ObservationBodyHeightBodySiteCodingDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationBodyHeightCode {
    coding: Array<ObservationBodyHeightCodeLoinc | ObservationBodyHeightCodeCodeSnomed>;
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
                            t.Type<ObservationBodyHeightCodeLoinc>,
                            t.Type<ObservationBodyHeightCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBodyHeightCodeLoinc,
                        ObservationBodyHeightCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationBodyHeightCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: { pattern: "$this" }
                        },
                        {
                            codec: ObservationBodyHeightCodeCodeSnomed,
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
    status: ObservationstatusVS;
    category: Array<CodeableConcept>;
    code: ObservationBodyHeightCode;
    subject: Reference;
    effectiveDateTime: string;
    bodySite: ObservationBodyHeightBodySite;
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
    valueQuantity?: ObservationBodyHeightValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
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
                status: ObservationstatusVS,
                category: MinArray(1, CodeableConcept),
                code: ObservationBodyHeightCode,
                subject: Reference,
                effectiveDateTime: SCALARDateTime,
                bodySite: ObservationBodyHeightBodySite
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
                valueQuantity: ObservationBodyHeightValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                method: CodeableConcept,
                device: Reference,
                referenceRange: t.array(ObservationBodyHeightReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationBodyHeight;
