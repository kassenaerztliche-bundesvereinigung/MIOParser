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

import EventstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Eventstatus";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRCounsellingVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRCounselling";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Counselling"

/**
 * Content in other Language.
 */
export interface MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Beratung der Schwangeren";
    id?: string;
}

export const MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Beratung der Schwangeren")
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
export interface MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent: t.Type<MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent> = t.recursion(
    "MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent
    )[];
}

export const MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed: t.Type<MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed> = t.recursion(
    "MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed",
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
                                    MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomedContent,
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
export interface MRProcedureCounsellingCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRProcedureCounsellingCodeCodingDisplay: t.Type<MRProcedureCounsellingCodeCodingDisplay> = t.recursion(
    "MRProcedureCounsellingCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRProcedureCounsellingCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRProcedureCounsellingReasonCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed
    )[];
    value?: string;
}

export const MRProcedureCounsellingReasonCodeCodingDisplay: t.Type<MRProcedureCounsellingReasonCodeCodingDisplay> = t.recursion(
    "MRProcedureCounsellingReasonCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRProcedureCounsellingReasonCodeCodingDisplayAnzeigenameReasonCodeSnomed,
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
export interface MRProcedureCounsellingCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "17629007";
    id?: string;
    _display?: MRProcedureCounsellingCodeCodingDisplay;
    display?: string;
}

export const MRProcedureCounsellingCodeCoding: t.Type<MRProcedureCounsellingCodeCoding> = t.recursion(
    "MRProcedureCounsellingCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("17629007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRProcedureCounsellingCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The practitioner who was involved in the procedure.
 */
export interface MRProcedureCounsellingPerformerActor {
    reference: string;
    id?: string;
}

export const MRProcedureCounsellingPerformerActor: t.Type<MRProcedureCounsellingPerformerActor> = t.recursion(
    "MRProcedureCounsellingPerformerActor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
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
export interface MRProcedureCounsellingReasonCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: MRCounsellingVS;
    id?: string;
    _display?: MRProcedureCounsellingReasonCodeCodingDisplay;
    display?: string;
}

export const MRProcedureCounsellingReasonCodeCoding: t.Type<MRProcedureCounsellingReasonCodeCoding> = t.recursion(
    "MRProcedureCounsellingReasonCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: MRCounsellingVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRProcedureCounsellingReasonCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRProcedureCounsellingMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Counselling|1.0.0"
    >;
    id?: string;
}

export const MRProcedureCounsellingMeta: t.Type<MRProcedureCounsellingMeta> = t.recursion(
    "MRProcedureCounsellingMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Counselling|1.0.0"
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
 * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
 */
export interface MRProcedureCounsellingCode {
    coding: Array<MRProcedureCounsellingCodeCoding>;
    id?: string;
}

export const MRProcedureCounsellingCode: t.Type<MRProcedureCounsellingCode> = t.recursion(
    "MRProcedureCounsellingCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRProcedureCounsellingCodeCoding)
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
export interface MRProcedureCounsellingSubject {
    reference: string;
    id?: string;
}

export const MRProcedureCounsellingSubject: t.Type<MRProcedureCounsellingSubject> = t.recursion(
    "MRProcedureCounsellingSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRProcedureCounsellingEncounter {
    reference: string;
    id?: string;
}

export const MRProcedureCounsellingEncounter: t.Type<MRProcedureCounsellingEncounter> = t.recursion(
    "MRProcedureCounsellingEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Limited to "real" people rather than equipment.
 */
export interface MRProcedureCounsellingPerformer {
    actor: MRProcedureCounsellingPerformerActor;
    id?: string;
}

export const MRProcedureCounsellingPerformer: t.Type<MRProcedureCounsellingPerformer> = t.recursion(
    "MRProcedureCounsellingPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    actor: MRProcedureCounsellingPerformerActor
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The coded reason why the procedure was performed. This may be a coded entity of some type, or may simply be present as text.
 */
export interface MRProcedureCounsellingReasonCode {
    coding: Array<MRProcedureCounsellingReasonCodeCoding>;
    id?: string;
}

export const MRProcedureCounsellingReasonCode: t.Type<MRProcedureCounsellingReasonCode> = t.recursion(
    "MRProcedureCounsellingReasonCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRProcedureCounsellingReasonCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRProcedureCounselling {
    resourceType: "Procedure";
    meta: MRProcedureCounsellingMeta;
    status: EventstatusVS;
    code: MRProcedureCounsellingCode;
    subject: MRProcedureCounsellingSubject;
    encounter: MRProcedureCounsellingEncounter;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRProcedureCounsellingPerformer>;
    reasonCode?: MRProcedureCounsellingReasonCode[];
}

const MRProcedureCounselling: t.Type<MRProcedureCounselling> = t.recursion(
    "MRProcedureCounselling",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: MRProcedureCounsellingMeta,
                    status: EventstatusVS,
                    code: MRProcedureCounsellingCode,
                    subject: MRProcedureCounsellingSubject,
                    encounter: MRProcedureCounsellingEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRProcedureCounsellingPerformer),
                    reasonCode: t.array(MRProcedureCounsellingReasonCode)
                })
            ])
        )
);

export default MRProcedureCounselling;
