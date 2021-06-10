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
import CMRU2ConsultationVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU2Consultation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U2_Consultation"

/**
 * Content in other Language.
 */
export interface CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU2ConsultationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU2ConsultationCodeCodingDisplay: t.Type<CMRProcedureU2ConsultationCodeCodingDisplay> = t.recursion(
    "CMRProcedureU2ConsultationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU2ConsultationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU2ConsultationCodeCoding {
    system: string;
    version: string;
    code: CMRU2ConsultationVS;
    id?: string;
    _display?: CMRProcedureU2ConsultationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU2ConsultationCodeCoding: t.Type<CMRProcedureU2ConsultationCodeCoding> = t.recursion(
    "CMRProcedureU2ConsultationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2ConsultationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU2ConsultationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU2ConsultationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U2_Consultation|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureU2ConsultationMeta: t.Type<CMRProcedureU2ConsultationMeta> = t.recursion(
    "CMRProcedureU2ConsultationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U2_Consultation|1.0.0"
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
export interface CMRProcedureU2ConsultationCode {
    coding: Array<CMRProcedureU2ConsultationCodeCoding>;
    id?: string;
}

export const CMRProcedureU2ConsultationCode: t.Type<CMRProcedureU2ConsultationCode> = t.recursion(
    "CMRProcedureU2ConsultationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRProcedureU2ConsultationCodeCoding)
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
export interface CMRProcedureU2ConsultationSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureU2ConsultationSubject: t.Type<CMRProcedureU2ConsultationSubject> = t.recursion(
    "CMRProcedureU2ConsultationSubject",
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
export interface CMRProcedureU2ConsultationEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureU2ConsultationEncounter: t.Type<CMRProcedureU2ConsultationEncounter> = t.recursion(
    "CMRProcedureU2ConsultationEncounter",
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
export interface CMRProcedureU2ConsultationAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureU2ConsultationAsserter: t.Type<CMRProcedureU2ConsultationAsserter> = t.recursion(
    "CMRProcedureU2ConsultationAsserter",
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

interface CMRProcedureU2Consultation {
    resourceType: "Procedure";
    meta: CMRProcedureU2ConsultationMeta;
    status: "completed";
    code: CMRProcedureU2ConsultationCode;
    subject: CMRProcedureU2ConsultationSubject;
    encounter: CMRProcedureU2ConsultationEncounter;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureU2ConsultationAsserter;
}

const CMRProcedureU2Consultation: t.Type<CMRProcedureU2Consultation> = t.recursion(
    "CMRProcedureU2Consultation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU2ConsultationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureU2ConsultationCode,
                    subject: CMRProcedureU2ConsultationSubject,
                    encounter: CMRProcedureU2ConsultationEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureU2ConsultationAsserter
                })
            ])
        )
);

export default CMRProcedureU2Consultation;
