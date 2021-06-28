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
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRNewbornBloodSpotScreeningTypeVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRNewbornBloodSpotScreeningType";
import CMRProcedureStatusVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRProcedureStatus";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening"

/**
 * Content in other Language.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent {
    url: "content";
    valueString: "Eltern wünschen keine Untersuchung";
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent",
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "738796001:363702006=395507008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Premature infant (finding)";
    id?: string;
    userSelected?: boolean;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConceptCoding: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConceptCoding> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("738796001:363702006=395507008"),
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Premature infant (finding)"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent
    )[];
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed",
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
                                    CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomedContent,
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglaborValueReference {
    display: string;
    id?: string;
    reference?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglaborValueReference: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglaborValueReference> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglaborValueReference",
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
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConcept {
    coding: Array<
        CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConceptCoding
    >;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConcept: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConcept> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed
    )[];
    value?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplay: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplay> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplayAnzeigenameStatusReasonSnomed,
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplay: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplay> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory";
    valueReference: CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglaborValueReference;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory"
                    ),
                    valueReference: CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglaborValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Optional Extension Element - found in all resources.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood";
    valueCodeableConcept: CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConcept;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood"
                    ),
                    valueCodeableConcept: CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36LebensstundeValueCodeableConcept
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "183948000:363589002=428447008";
    id?: string;
    _display?: CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplay;
    display?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCoding: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCoding> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("183948000:363589002=428447008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningCodeCoding {
    system: string;
    version: string;
    code: CMRNewbornBloodSpotScreeningTypeVS;
    id?: string;
    _display?: CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningCodeCoding: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningCodeCoding> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRNewbornBloodSpotScreeningTypeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU1U3NewbornBloodSpotScreeningCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningMeta: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningMeta> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
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
 * Captures the reason for the current state of the procedure.
 */
export interface CMRProcedureU1U3NewbornBloodSpotScreeningStatusReason {
    coding: Array<CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCoding>;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningStatusReason: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningStatusReason> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningStatusReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRProcedureU1U3NewbornBloodSpotScreeningStatusReasonCoding
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningCode {
    coding: Array<CMRProcedureU1U3NewbornBloodSpotScreeningCodeCoding>;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningCode: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningCode> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRProcedureU1U3NewbornBloodSpotScreeningCodeCoding
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningSubject: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningSubject> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningSubject",
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningEncounter: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningEncounter> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningEncounter",
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
export interface CMRProcedureU1U3NewbornBloodSpotScreeningAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureU1U3NewbornBloodSpotScreeningAsserter: t.Type<CMRProcedureU1U3NewbornBloodSpotScreeningAsserter> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreeningAsserter",
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

interface CMRProcedureU1U3NewbornBloodSpotScreening {
    resourceType: "Procedure";
    meta: CMRProcedureU1U3NewbornBloodSpotScreeningMeta;
    status: CMRProcedureStatusVS;
    code: CMRProcedureU1U3NewbornBloodSpotScreeningCode;
    subject: CMRProcedureU1U3NewbornBloodSpotScreeningSubject;
    encounter: CMRProcedureU1U3NewbornBloodSpotScreeningEncounter;
    id?: string;
    text?: Narrative;
    extension?: (
        | Extension
        | CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor
        | CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde
    )[];
    statusReason?: CMRProcedureU1U3NewbornBloodSpotScreeningStatusReason;
    performedDateTime?: string;
    asserter?: CMRProcedureU1U3NewbornBloodSpotScreeningAsserter;
}

const CMRProcedureU1U3NewbornBloodSpotScreening: t.Type<CMRProcedureU1U3NewbornBloodSpotScreening> = t.recursion(
    "CMRProcedureU1U3NewbornBloodSpotScreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU1U3NewbornBloodSpotScreeningMeta,
                    status: CMRProcedureStatusVS,
                    code: CMRProcedureU1U3NewbornBloodSpotScreeningCode,
                    subject: CMRProcedureU1U3NewbornBloodSpotScreeningSubject,
                    encounter: CMRProcedureU1U3NewbornBloodSpotScreeningEncounter
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor
                                >,
                                t.Type<
                                    CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor,
                            CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU1U3NewbornBloodSpotScreeningScreeninglabor,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory"
                                }
                            },
                            {
                                codec: CMRProcedureU1U3NewbornBloodSpotScreeningErstabnahmeVorVollendeter36Lebensstunde,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    statusReason: CMRProcedureU1U3NewbornBloodSpotScreeningStatusReason,
                    performedDateTime: SCALARDateTime,
                    asserter: CMRProcedureU1U3NewbornBloodSpotScreeningAsserter
                })
            ])
        )
);

export default CMRProcedureU1U3NewbornBloodSpotScreening;
