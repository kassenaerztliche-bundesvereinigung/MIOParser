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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRU3ConsultationVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU3Consultation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U3_Consultation"

/**
 * Content in other Language.
 */
export interface CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU3ConsultationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU3ConsultationCodeCodingDisplay: t.Type<CMRProcedureU3ConsultationCodeCodingDisplay> = t.recursion(
    "CMRProcedureU3ConsultationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU3ConsultationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU3ConsultationCodeCoding {
    system: string;
    version: string;
    code: CMRU3ConsultationVS;
    id?: string;
    _display?: CMRProcedureU3ConsultationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU3ConsultationCodeCoding: t.Type<CMRProcedureU3ConsultationCodeCoding> = t.recursion(
    "CMRProcedureU3ConsultationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU3ConsultationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU3ConsultationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU3ConsultationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U3_Consultation|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureU3ConsultationMeta: t.Type<CMRProcedureU3ConsultationMeta> = t.recursion(
    "CMRProcedureU3ConsultationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U3_Consultation|1.0.0"
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
export interface CMRProcedureU3ConsultationCode {
    coding: Array<CMRProcedureU3ConsultationCodeCoding>;
    id?: string;
}

export const CMRProcedureU3ConsultationCode: t.Type<CMRProcedureU3ConsultationCode> = t.recursion(
    "CMRProcedureU3ConsultationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRProcedureU3ConsultationCodeCoding)
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
export interface CMRProcedureU3ConsultationSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureU3ConsultationSubject: t.Type<CMRProcedureU3ConsultationSubject> = t.recursion(
    "CMRProcedureU3ConsultationSubject",
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
export interface CMRProcedureU3ConsultationEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureU3ConsultationEncounter: t.Type<CMRProcedureU3ConsultationEncounter> = t.recursion(
    "CMRProcedureU3ConsultationEncounter",
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
export interface CMRProcedureU3ConsultationAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureU3ConsultationAsserter: t.Type<CMRProcedureU3ConsultationAsserter> = t.recursion(
    "CMRProcedureU3ConsultationAsserter",
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

interface CMRProcedureU3Consultation {
    resourceType: "Procedure";
    meta: CMRProcedureU3ConsultationMeta;
    status: "completed";
    code: CMRProcedureU3ConsultationCode;
    subject: CMRProcedureU3ConsultationSubject;
    encounter: CMRProcedureU3ConsultationEncounter;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureU3ConsultationAsserter;
}

const CMRProcedureU3Consultation: t.Type<CMRProcedureU3Consultation> = t.recursion(
    "CMRProcedureU3Consultation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU3ConsultationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureU3ConsultationCode,
                    subject: CMRProcedureU3ConsultationSubject,
                    encounter: CMRProcedureU3ConsultationEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureU3ConsultationAsserter
                })
            ])
        )
);

export default CMRProcedureU3Consultation;
