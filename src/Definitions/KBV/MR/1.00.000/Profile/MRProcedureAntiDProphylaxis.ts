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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis"

/**
 * Content in other Language.
 */
export interface MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anti-D-Prophylaxe";
    id?: string;
}

export const MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Anti-D-Prophylaxe")
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
export interface MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRProcedureAntiDProphylaxisCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRProcedureAntiDProphylaxisCodeCodingDisplay: t.Type<MRProcedureAntiDProphylaxisCodeCodingDisplay> = t.recursion(
    "MRProcedureAntiDProphylaxisCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRProcedureAntiDProphylaxisCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRProcedureAntiDProphylaxisCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "180190006";
    id?: string;
    _display?: MRProcedureAntiDProphylaxisCodeCodingDisplay;
    display?: string;
}

export const MRProcedureAntiDProphylaxisCodeCoding: t.Type<MRProcedureAntiDProphylaxisCodeCoding> = t.recursion(
    "MRProcedureAntiDProphylaxisCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("180190006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRProcedureAntiDProphylaxisCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The practitioner who was involved in the procedure.
 */
export interface MRProcedureAntiDProphylaxisPerformerActor {
    reference: string;
    id?: string;
}

export const MRProcedureAntiDProphylaxisPerformerActor: t.Type<MRProcedureAntiDProphylaxisPerformerActor> = t.recursion(
    "MRProcedureAntiDProphylaxisPerformerActor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRProcedureAntiDProphylaxisMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis|1.0.0"
    >;
    id?: string;
}

export const MRProcedureAntiDProphylaxisMeta: t.Type<MRProcedureAntiDProphylaxisMeta> = t.recursion(
    "MRProcedureAntiDProphylaxisMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis|1.0.0"
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
export interface MRProcedureAntiDProphylaxisCode {
    coding: Array<MRProcedureAntiDProphylaxisCodeCoding>;
    id?: string;
}

export const MRProcedureAntiDProphylaxisCode: t.Type<MRProcedureAntiDProphylaxisCode> = t.recursion(
    "MRProcedureAntiDProphylaxisCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRProcedureAntiDProphylaxisCodeCoding)
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
export interface MRProcedureAntiDProphylaxisSubject {
    reference: string;
    id?: string;
}

export const MRProcedureAntiDProphylaxisSubject: t.Type<MRProcedureAntiDProphylaxisSubject> = t.recursion(
    "MRProcedureAntiDProphylaxisSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRProcedureAntiDProphylaxisEncounter {
    reference: string;
    id?: string;
}

export const MRProcedureAntiDProphylaxisEncounter: t.Type<MRProcedureAntiDProphylaxisEncounter> = t.recursion(
    "MRProcedureAntiDProphylaxisEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRProcedureAntiDProphylaxisPerformer {
    actor: MRProcedureAntiDProphylaxisPerformerActor;
    id?: string;
}

export const MRProcedureAntiDProphylaxisPerformer: t.Type<MRProcedureAntiDProphylaxisPerformer> = t.recursion(
    "MRProcedureAntiDProphylaxisPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    actor: MRProcedureAntiDProphylaxisPerformerActor
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRProcedureAntiDProphylaxis {
    meta: MRProcedureAntiDProphylaxisMeta;
    status: "completed";
    code: MRProcedureAntiDProphylaxisCode;
    subject: MRProcedureAntiDProphylaxisSubject;
    encounter: MRProcedureAntiDProphylaxisEncounter;
    performedDateTime: string;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRProcedureAntiDProphylaxisPerformer>;
    note?: Array<Annotation>;
}

const MRProcedureAntiDProphylaxis: t.Type<MRProcedureAntiDProphylaxis> = t.recursion(
    "MRProcedureAntiDProphylaxis",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRProcedureAntiDProphylaxisMeta,
                    status: Literal("completed"),
                    code: MRProcedureAntiDProphylaxisCode,
                    subject: MRProcedureAntiDProphylaxisSubject,
                    encounter: MRProcedureAntiDProphylaxisEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRProcedureAntiDProphylaxisPerformer),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRProcedureAntiDProphylaxis;
