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
import CMRU9ConsultationVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRU9Consultation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U9_Consultation"

/**
 * Content in other Language.
 */
export interface CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU9ConsultationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU9ConsultationCodeCodingDisplay: t.Type<CMRProcedureU9ConsultationCodeCodingDisplay> = t.recursion(
    "CMRProcedureU9ConsultationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU9ConsultationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU9ConsultationCodeCoding {
    system: string;
    version: string;
    code: CMRU9ConsultationVS;
    id?: string;
    _display?: CMRProcedureU9ConsultationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU9ConsultationCodeCoding: t.Type<CMRProcedureU9ConsultationCodeCoding> = t.recursion(
    "CMRProcedureU9ConsultationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU9ConsultationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU9ConsultationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU9ConsultationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U9_Consultation|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureU9ConsultationMeta: t.Type<CMRProcedureU9ConsultationMeta> = t.recursion(
    "CMRProcedureU9ConsultationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U9_Consultation|1.0.0"
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
export interface CMRProcedureU9ConsultationCode {
    coding: Array<CMRProcedureU9ConsultationCodeCoding>;
    id?: string;
}

export const CMRProcedureU9ConsultationCode: t.Type<CMRProcedureU9ConsultationCode> = t.recursion(
    "CMRProcedureU9ConsultationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRProcedureU9ConsultationCodeCoding)
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
export interface CMRProcedureU9ConsultationSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureU9ConsultationSubject: t.Type<CMRProcedureU9ConsultationSubject> = t.recursion(
    "CMRProcedureU9ConsultationSubject",
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
export interface CMRProcedureU9ConsultationEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureU9ConsultationEncounter: t.Type<CMRProcedureU9ConsultationEncounter> = t.recursion(
    "CMRProcedureU9ConsultationEncounter",
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
export interface CMRProcedureU9ConsultationAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureU9ConsultationAsserter: t.Type<CMRProcedureU9ConsultationAsserter> = t.recursion(
    "CMRProcedureU9ConsultationAsserter",
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

interface CMRProcedureU9Consultation {
    resourceType: "Procedure";
    meta: CMRProcedureU9ConsultationMeta;
    status: "completed";
    code: CMRProcedureU9ConsultationCode;
    subject: CMRProcedureU9ConsultationSubject;
    encounter: CMRProcedureU9ConsultationEncounter;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureU9ConsultationAsserter;
}

const CMRProcedureU9Consultation: t.Type<CMRProcedureU9Consultation> = t.recursion(
    "CMRProcedureU9Consultation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU9ConsultationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureU9ConsultationCode,
                    subject: CMRProcedureU9ConsultationSubject,
                    encounter: CMRProcedureU9ConsultationEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureU9ConsultationAsserter
                })
            ])
        )
);

export default CMRProcedureU9Consultation;
