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
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRBaseExcessUnitVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRBaseExcessUnit";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Base excess";
    id?: string;
}

export const CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Base excess")
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
export interface CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Base excess";
    id?: string;
}

export const CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Base excess")
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
export interface CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3BaseExcessCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3BaseExcessCodeCodeLoincDisplay: t.Type<CMRObservationU1U3BaseExcessCodeCodeLoincDisplay> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3BaseExcessCodeCodeLoincDisplayAnzeigenameCodeSnomed,
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
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU1U3BaseExcessCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3BaseExcessCodeCodeSnomedDisplay: t.Type<CMRObservationU1U3BaseExcessCodeCodeSnomedDisplay> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeSnomedDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3BaseExcessCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3BaseExcessCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "28638-5";
    id?: string;
    _display?: CMRObservationU1U3BaseExcessCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU1U3BaseExcessCodeCodeLoinc: t.Type<CMRObservationU1U3BaseExcessCodeCodeLoinc> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("28638-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3BaseExcessCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3BaseExcessCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "363787002:370134009=123029007,704319004=12499000,704318007=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001";
    id?: string;
    _display?: CMRObservationU1U3BaseExcessCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU1U3BaseExcessCodeCodeSnomed: t.Type<CMRObservationU1U3BaseExcessCodeCodeSnomed> = t.recursion(
    "CMRObservationU1U3BaseExcessCodeCodeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal(
                        "363787002:370134009=123029007,704319004=12499000,704318007=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3BaseExcessCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U3BaseExcessValueQuantity {
    value: number;
    unit: CMRBaseExcessUnitVS;
    system: string;
    code: CMRBaseExcessUnitVS;
    id?: string;
}

export const CMRObservationU1U3BaseExcessValueQuantity: t.Type<CMRObservationU1U3BaseExcessValueQuantity> = t.recursion(
    "CMRObservationU1U3BaseExcessValueQuantity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: CMRBaseExcessUnitVS,
                    system: SCALARUri,
                    code: CMRBaseExcessUnitVS
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
export interface CMRObservationU1U3BaseExcessMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1U3BaseExcessMeta: t.Type<CMRObservationU1U3BaseExcessMeta> = t.recursion(
    "CMRObservationU1U3BaseExcessMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Base_Excess|1.0.0"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface CMRObservationU1U3BaseExcessCode {
    coding: Array<
        | CMRObservationU1U3BaseExcessCodeCodeLoinc
        | CMRObservationU1U3BaseExcessCodeCodeSnomed
    >;
    id?: string;
}

export const CMRObservationU1U3BaseExcessCode: t.Type<CMRObservationU1U3BaseExcessCode> = t.recursion(
    "CMRObservationU1U3BaseExcessCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU1U3BaseExcessCodeCodeLoinc>,
                                t.Type<CMRObservationU1U3BaseExcessCodeCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU1U3BaseExcessCodeCodeLoinc,
                            CMRObservationU1U3BaseExcessCodeCodeSnomed
                        ]),
                        [
                            {
                                codec: CMRObservationU1U3BaseExcessCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code", value: "28638-5" }
                            },
                            {
                                codec: CMRObservationU1U3BaseExcessCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "code",
                                    value:
                                        "363787002:370134009=123029007,704319004=12499000,704318007=118556004,370132008=30766002,704327008=703430008,246093002=68615006,246501002=723208001"
                                }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface CMRObservationU1U3BaseExcessSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3BaseExcessSubject: t.Type<CMRObservationU1U3BaseExcessSubject> = t.recursion(
    "CMRObservationU1U3BaseExcessSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU1U3BaseExcessEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3BaseExcessEncounter: t.Type<CMRObservationU1U3BaseExcessEncounter> = t.recursion(
    "CMRObservationU1U3BaseExcessEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU1U3BaseExcessPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3BaseExcessPerformer: t.Type<CMRObservationU1U3BaseExcessPerformer> = t.recursion(
    "CMRObservationU1U3BaseExcessPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRObservationU1U3BaseExcess {
    meta: CMRObservationU1U3BaseExcessMeta;
    status: "final";
    code: CMRObservationU1U3BaseExcessCode;
    subject: CMRObservationU1U3BaseExcessSubject;
    encounter: CMRObservationU1U3BaseExcessEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU1U3BaseExcessValueQuantity;
    resourceType?: "Observation";
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3BaseExcessPerformer>;
}

const CMRObservationU1U3BaseExcess: t.Type<CMRObservationU1U3BaseExcess> = t.recursion(
    "CMRObservationU1U3BaseExcess",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: CMRObservationU1U3BaseExcessMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3BaseExcessCode,
                    subject: CMRObservationU1U3BaseExcessSubject,
                    encounter: CMRObservationU1U3BaseExcessEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU1U3BaseExcessValueQuantity
                }),
                t.partial({
                    resourceType: Literal("Observation"),
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1U3BaseExcessPerformer)
                })
            ])
        )
);

export default CMRObservationU1U3BaseExcess;
