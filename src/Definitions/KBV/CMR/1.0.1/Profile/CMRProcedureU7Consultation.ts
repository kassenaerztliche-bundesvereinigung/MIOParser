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
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRU7ConsultationVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7Consultation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7_Consultation"

/**
 * Content in other Language.
 */
export interface CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU7ConsultationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU7ConsultationCodeCodingDisplay: t.Type<CMRProcedureU7ConsultationCodeCodingDisplay> =
    t.recursion("CMRProcedureU7ConsultationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU7ConsultationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU7ConsultationCodeCoding {
    system: string;
    version: string;
    code: CMRU7ConsultationVS;
    id?: string;
    _display?: CMRProcedureU7ConsultationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU7ConsultationCodeCoding: t.Type<CMRProcedureU7ConsultationCodeCoding> =
    t.recursion("CMRProcedureU7ConsultationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7ConsultationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU7ConsultationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU7ConsultationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7_Consultation|1.0.1">;
    id?: string;
}

export const CMRProcedureU7ConsultationMeta: t.Type<CMRProcedureU7ConsultationMeta> =
    t.recursion("CMRProcedureU7ConsultationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7_Consultation|1.0.1"
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
export interface CMRProcedureU7ConsultationCode {
    coding: Array<CMRProcedureU7ConsultationCodeCoding>;
    id?: string;
}

export const CMRProcedureU7ConsultationCode: t.Type<CMRProcedureU7ConsultationCode> =
    t.recursion("CMRProcedureU7ConsultationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRProcedureU7ConsultationCodeCoding)
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
export interface CMRProcedureU7ConsultationSubjectReference {
    reference: string;
    id?: string;
}

export const CMRProcedureU7ConsultationSubjectReference: t.Type<CMRProcedureU7ConsultationSubjectReference> =
    t.recursion("CMRProcedureU7ConsultationSubjectReference", () =>
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
 * The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
 */
export interface CMRProcedureU7ConsultationEncounterReference {
    reference: string;
    id?: string;
}

export const CMRProcedureU7ConsultationEncounterReference: t.Type<CMRProcedureU7ConsultationEncounterReference> =
    t.recursion("CMRProcedureU7ConsultationEncounterReference", () =>
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
 * Individual who is making the procedure statement.
 */
export interface CMRProcedureU7ConsultationAsserterReference {
    reference: string;
    id?: string;
}

export const CMRProcedureU7ConsultationAsserterReference: t.Type<CMRProcedureU7ConsultationAsserterReference> =
    t.recursion("CMRProcedureU7ConsultationAsserterReference", () =>
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

interface CMRProcedureU7Consultation {
    resourceType: "Procedure";
    meta: CMRProcedureU7ConsultationMeta;
    status: "completed";
    code: CMRProcedureU7ConsultationCode;
    subject: CMRProcedureU7ConsultationSubjectReference;
    encounter: CMRProcedureU7ConsultationEncounterReference;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureU7ConsultationAsserterReference;
}

const CMRProcedureU7Consultation: t.Type<CMRProcedureU7Consultation> = t.recursion(
    "CMRProcedureU7Consultation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU7ConsultationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureU7ConsultationCode,
                    subject: CMRProcedureU7ConsultationSubjectReference,
                    encounter: CMRProcedureU7ConsultationEncounterReference,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureU7ConsultationAsserterReference
                })
            ])
        )
);

export default CMRProcedureU7Consultation;
