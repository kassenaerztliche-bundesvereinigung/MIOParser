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
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import CMRProcedureStatusVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRProcedureStatus";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening"

/**
 * Content in other Language.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent {
    url: "content";
    valueString: "Eltern wünschen keine Untersuchung";
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent: t.Type<CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Eltern wünschen keine Untersuchung")
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
export interface CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Screening auf Mukoviszidose";
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Screening auf Mukoviszidose")
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
export interface CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent
    )[];
}

export const CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed: t.Type<CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed",
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
                                    CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent,
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
export interface CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningScreeninglaborValueReference {
    display: string;
    id?: string;
    reference?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningScreeninglaborValueReference: t.Type<CMRProcedureU1U3CysticFibrosisScreeningScreeninglaborValueReference> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningScreeninglaborValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    reference: CustomReference(SCALARString, [])
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed
    )[];
    value?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplay: t.Type<CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplay> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed,
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
export interface CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplay: t.Type<CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplay> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * Optional Extension Element - found in all resources.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory";
    valueReference: CMRProcedureU1U3CysticFibrosisScreeningScreeninglaborValueReference;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor: t.Type<CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory"
                    ),
                    valueReference: CMRProcedureU1U3CysticFibrosisScreeningScreeninglaborValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "428841003";
    id?: string;
    _display?: CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplay;
    display?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCoding: t.Type<CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCoding> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("428841003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "738796001:363702006=171191008";
    id?: string;
    _display?: CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningCodeCoding: t.Type<CMRProcedureU1U3CysticFibrosisScreeningCodeCoding> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("738796001:363702006=171191008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU1U3CysticFibrosisScreeningCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningMeta: t.Type<CMRProcedureU1U3CysticFibrosisScreeningMeta> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Cystic_Fibrosis_Screening|1.0.0"
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
 * A larger event of which this particular procedure is a component or step.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningPartOf {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningPartOf: t.Type<CMRProcedureU1U3CysticFibrosisScreeningPartOf> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningPartOf",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Captures the reason for the current state of the procedure.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningStatusReason {
    coding: Array<CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCoding>;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningStatusReason: t.Type<CMRProcedureU1U3CysticFibrosisScreeningStatusReason> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningStatusReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRProcedureU1U3CysticFibrosisScreeningStatusReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningCode {
    coding: Array<CMRProcedureU1U3CysticFibrosisScreeningCodeCoding>;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningCode: t.Type<CMRProcedureU1U3CysticFibrosisScreeningCode> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRProcedureU1U3CysticFibrosisScreeningCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The person, animal or group on which the procedure was performed.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningSubject: t.Type<CMRProcedureU1U3CysticFibrosisScreeningSubject> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningEncounter: t.Type<CMRProcedureU1U3CysticFibrosisScreeningEncounter> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Individual who is making the procedure statement.
 */
export interface CMRProcedureU1U3CysticFibrosisScreeningAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3CysticFibrosisScreeningAsserter: t.Type<CMRProcedureU1U3CysticFibrosisScreeningAsserter> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreeningAsserter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRProcedureU1U3CysticFibrosisScreening {
    resourceType: "Procedure";
    meta: CMRProcedureU1U3CysticFibrosisScreeningMeta;
    status: CMRProcedureStatusVS;
    code: CMRProcedureU1U3CysticFibrosisScreeningCode;
    subject: CMRProcedureU1U3CysticFibrosisScreeningSubject;
    encounter: CMRProcedureU1U3CysticFibrosisScreeningEncounter;
    performedDateTime: string;
    asserter: CMRProcedureU1U3CysticFibrosisScreeningAsserter;
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor)[];
    partOf?: Array<CMRProcedureU1U3CysticFibrosisScreeningPartOf>;
    statusReason?: CMRProcedureU1U3CysticFibrosisScreeningStatusReason;
}

const CMRProcedureU1U3CysticFibrosisScreening: t.Type<CMRProcedureU1U3CysticFibrosisScreening> = t.recursion(
    "CMRProcedureU1U3CysticFibrosisScreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU1U3CysticFibrosisScreeningMeta,
                    status: CMRProcedureStatusVS,
                    code: CMRProcedureU1U3CysticFibrosisScreeningCode,
                    subject: CMRProcedureU1U3CysticFibrosisScreeningSubject,
                    encounter: CMRProcedureU1U3CysticFibrosisScreeningEncounter,
                    performedDateTime: SCALARDateTime,
                    asserter: CMRProcedureU1U3CysticFibrosisScreeningAsserter
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU1U3CysticFibrosisScreeningScreeninglabor,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    partOf: MaxArray(1, CMRProcedureU1U3CysticFibrosisScreeningPartOf),
                    statusReason: CMRProcedureU1U3CysticFibrosisScreeningStatusReason
                })
            ])
        )
);

export default CMRProcedureU1U3CysticFibrosisScreening;
