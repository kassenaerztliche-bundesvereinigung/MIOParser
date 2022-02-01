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
    Excess,
    MinMaxArray,
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCanonical from "../../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import CareplanactivitykindVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Careplanactivitykind";
import CareplanactivitystatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Careplanactivitystatus";

import CodeableConcept from "../../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";

import SimpleQuantity from "../../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";
import Timing from "../../../../../Definitions/FHIR/4.0.1/Profile/Timing";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result"

/**
 * Content in other Language.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent {
    url: "content";
    valueString: "weitere Maßnahmen vereinbart:";
    id?: string;
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent> =
    t.recursion(
        "CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("weitere Maßnahmen vereinbart:")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent {
    url: "content";
    valueString: "Auffälligkeiten zur Beobachtung:";
    id?: string;
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent> =
    t.recursion(
        "CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Auffälligkeiten zur Beobachtung:")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent
    )[];
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed> =
    t.recursion(
        "CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed",
        () =>
            Excess(
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
                                    t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent
    )[];
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed> =
    t.recursion(
        "CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed",
        () =>
            Excess(
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
                                    t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed
    )[];
    value?: string;
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplay: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplay> =
    t.recursion(
        "CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplayAnzeigenameActivityWeitereMassnahmenVereinbartSnomed,
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
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed
    )[];
    value?: string;
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplay: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplay> =
    t.recursion(
        "CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplayAnzeigenameActivityAuffaelligkeitenZurBeobachtungSnomed,
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
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    id?: string;
    _display?: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplay;
    display?: string;
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCoding: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCoding> =
    t.recursion("CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("722448004")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "271906008";
    id?: string;
    _display?: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplay;
    display?: string;
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCoding: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCoding> =
    t.recursion(
        "CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("271906008")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCode {
    coding: Array<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCoding>;
    id?: string;
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCode: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCode> =
    t.recursion("CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCode {
    coding: Array<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCoding>;
    id?: string;
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCode: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCode> =
    t.recursion("CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetail {
    code: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCode;
    status: CareplanactivitystatusVS;
    description: string;
    id?: string;
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetail: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetail> =
    t.recursion("CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetail", () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetailCode,
                    status: CareplanactivitystatusVS,
                    description: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetail {
    code: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCode;
    status: CareplanactivitystatusVS;
    description: string;
    id?: string;
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetail: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetail> =
    t.recursion("CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetail", () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetailCode,
                    status: CareplanactivitystatusVS,
                    description: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export interface CMRCarePlanU2U9ResultDetail {
    status: CareplanactivitystatusVS;
    id?: string;
    kind?: CareplanactivitykindVS;
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    code?: CodeableConcept;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    goal?: Reference[];
    statusReason?: CodeableConcept;
    doNotPerform?: boolean;
    scheduledTiming?: Timing;
    scheduledPeriod?: Period;
    scheduledString?: string;
    location?: Reference;
    performer?: Reference[];
    productCodeableConcept?: CodeableConcept;
    productReference?: Reference;
    dailyAmount?: SimpleQuantity;
    quantity?: SimpleQuantity;
    description?: string;
}

export const CMRCarePlanU2U9ResultDetail: t.Type<CMRCarePlanU2U9ResultDetail> =
    t.recursion("CMRCarePlanU2U9ResultDetail", () =>
        Excess(
            t.intersection([
                t.type({
                    status: CareplanactivitystatusVS
                }),
                t.partial({
                    id: SCALARString,
                    kind: CareplanactivitykindVS,
                    instantiatesCanonical: t.array(SCALARCanonical),
                    instantiatesUri: t.array(SCALARUri),
                    code: CodeableConcept,
                    reasonCode: t.array(CodeableConcept),
                    reasonReference: t.array(Reference),
                    goal: t.array(Reference),
                    statusReason: CodeableConcept,
                    doNotPerform: SCALARBoolean,
                    scheduledTiming: Timing,
                    scheduledPeriod: Period,
                    scheduledString: SCALARString,
                    location: Reference,
                    performer: t.array(Reference),
                    productCodeableConcept: CodeableConcept,
                    productReference: Reference,
                    dailyAmount: SimpleQuantity,
                    quantity: SimpleQuantity,
                    description: SCALARString
                })
            ])
        )
    );

/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export interface CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart {
    detail: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetail;
    id?: string;
}

export const CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart: t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart> =
    t.recursion("CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart", () =>
        Excess(
            t.intersection([
                t.type({
                    detail: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbartDetail
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export interface CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung {
    detail: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetail;
    id?: string;
}

export const CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung: t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung> =
    t.recursion("CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung", () =>
        Excess(
            t.intersection([
                t.type({
                    detail: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtungDetail
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCarePlanU2U9ResultMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.1">;
    id?: string;
}

export const CMRCarePlanU2U9ResultMeta: t.Type<CMRCarePlanU2U9ResultMeta> = t.recursion(
    "CMRCarePlanU2U9ResultMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.1"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Identifies the patient or group whose intended care is described by the plan.
 */
export interface CMRCarePlanU2U9ResultSubject {
    reference: string;
    id?: string;
}

export const CMRCarePlanU2U9ResultSubject: t.Type<CMRCarePlanU2U9ResultSubject> =
    t.recursion("CMRCarePlanU2U9ResultSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.
 */
export interface CMRCarePlanU2U9ResultEncounter {
    reference: string;
    id?: string;
}

export const CMRCarePlanU2U9ResultEncounter: t.Type<CMRCarePlanU2U9ResultEncounter> =
    t.recursion("CMRCarePlanU2U9ResultEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
 */
export interface CMRCarePlanU2U9ResultAuthor {
    reference: string;
    id?: string;
}

export const CMRCarePlanU2U9ResultAuthor: t.Type<CMRCarePlanU2U9ResultAuthor> =
    t.recursion("CMRCarePlanU2U9ResultAuthor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRCarePlanU2U9Result {
    resourceType: "CarePlan";
    meta: CMRCarePlanU2U9ResultMeta;
    status: "completed";
    intent: "proposal";
    subject: CMRCarePlanU2U9ResultSubject;
    encounter: CMRCarePlanU2U9ResultEncounter;
    created: string;
    activity: Array<
        | CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart
        | CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung
    >;
    id?: string;
    text?: Narrative;
    author?: CMRCarePlanU2U9ResultAuthor;
}

const CMRCarePlanU2U9Result: t.Type<CMRCarePlanU2U9Result> = t.recursion(
    "CMRCarePlanU2U9Result",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("CarePlan"),
                    meta: CMRCarePlanU2U9ResultMeta,
                    status: Literal("completed"),
                    intent: Literal("proposal"),
                    subject: CMRCarePlanU2U9ResultSubject,
                    encounter: CMRCarePlanU2U9ResultEncounter,
                    created: SCALARDateTime,
                    activity: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart>,
                                t.Type<CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart,
                            CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung
                        ]),
                        [
                            {
                                codec: CMRCarePlanU2U9ResultWeitereMassnahmenVereinbart,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "detail.code.coding.code",
                                    value: "722448004"
                                }
                            },
                            {
                                codec: CMRCarePlanU2U9ResultAuffaelligkeitenZurBeobachtung,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "detail.code.coding.code",
                                    value: "271906008"
                                }
                            }
                        ],
                        ["1", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    author: CMRCarePlanU2U9ResultAuthor
                })
            ])
        )
);

export default CMRCarePlanU2U9Result;
