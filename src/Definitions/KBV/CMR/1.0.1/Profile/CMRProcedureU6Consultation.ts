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
import CMRU6ConsultationVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU6Consultation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U6_Consultation"

/**
 * Content in other Language.
 */
export interface CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU6ConsultationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU6ConsultationCodeCodingDisplay: t.Type<CMRProcedureU6ConsultationCodeCodingDisplay> =
    t.recursion("CMRProcedureU6ConsultationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU6ConsultationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU6ConsultationCodeCoding {
    system: string;
    version: string;
    code: CMRU6ConsultationVS;
    id?: string;
    _display?: CMRProcedureU6ConsultationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU6ConsultationCodeCoding: t.Type<CMRProcedureU6ConsultationCodeCoding> =
    t.recursion("CMRProcedureU6ConsultationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU6ConsultationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU6ConsultationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU6ConsultationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U6_Consultation|1.0.1">;
    id?: string;
}

export const CMRProcedureU6ConsultationMeta: t.Type<CMRProcedureU6ConsultationMeta> =
    t.recursion("CMRProcedureU6ConsultationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U6_Consultation|1.0.1"
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
export interface CMRProcedureU6ConsultationCode {
    coding: Array<CMRProcedureU6ConsultationCodeCoding>;
    id?: string;
}

export const CMRProcedureU6ConsultationCode: t.Type<CMRProcedureU6ConsultationCode> =
    t.recursion("CMRProcedureU6ConsultationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRProcedureU6ConsultationCodeCoding)
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
export interface CMRProcedureU6ConsultationSubjectReference {
    reference: string;
    id?: string;
}

export const CMRProcedureU6ConsultationSubjectReference: t.Type<CMRProcedureU6ConsultationSubjectReference> =
    t.recursion("CMRProcedureU6ConsultationSubjectReference", () =>
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
export interface CMRProcedureU6ConsultationEncounterReference {
    reference: string;
    id?: string;
}

export const CMRProcedureU6ConsultationEncounterReference: t.Type<CMRProcedureU6ConsultationEncounterReference> =
    t.recursion("CMRProcedureU6ConsultationEncounterReference", () =>
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
export interface CMRProcedureU6ConsultationAsserterReference {
    reference: string;
    id?: string;
}

export const CMRProcedureU6ConsultationAsserterReference: t.Type<CMRProcedureU6ConsultationAsserterReference> =
    t.recursion("CMRProcedureU6ConsultationAsserterReference", () =>
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

interface CMRProcedureU6Consultation {
    resourceType: "Procedure";
    meta: CMRProcedureU6ConsultationMeta;
    status: "completed";
    code: CMRProcedureU6ConsultationCode;
    subject: CMRProcedureU6ConsultationSubjectReference;
    encounter: CMRProcedureU6ConsultationEncounterReference;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureU6ConsultationAsserterReference;
}

const CMRProcedureU6Consultation: t.Type<CMRProcedureU6Consultation> = t.recursion(
    "CMRProcedureU6Consultation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU6ConsultationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureU6ConsultationCode,
                    subject: CMRProcedureU6ConsultationSubjectReference,
                    encounter: CMRProcedureU6ConsultationEncounterReference,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureU6ConsultationAsserterReference
                })
            ])
        )
);

export default CMRProcedureU6Consultation;
