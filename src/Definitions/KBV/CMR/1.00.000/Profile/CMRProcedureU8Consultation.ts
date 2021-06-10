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
import CMRU8ConsultationVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU8Consultation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U8_Consultation"

/**
 * Content in other Language.
 */
export interface CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureU8ConsultationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureU8ConsultationCodeCodingDisplay: t.Type<CMRProcedureU8ConsultationCodeCodingDisplay> = t.recursion(
    "CMRProcedureU8ConsultationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureU8ConsultationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureU8ConsultationCodeCoding {
    system: string;
    version: string;
    code: CMRU8ConsultationVS;
    id?: string;
    _display?: CMRProcedureU8ConsultationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureU8ConsultationCodeCoding: t.Type<CMRProcedureU8ConsultationCodeCoding> = t.recursion(
    "CMRProcedureU8ConsultationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU8ConsultationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureU8ConsultationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureU8ConsultationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U8_Consultation|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureU8ConsultationMeta: t.Type<CMRProcedureU8ConsultationMeta> = t.recursion(
    "CMRProcedureU8ConsultationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U8_Consultation|1.0.0"
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
export interface CMRProcedureU8ConsultationCode {
    coding: Array<CMRProcedureU8ConsultationCodeCoding>;
    id?: string;
}

export const CMRProcedureU8ConsultationCode: t.Type<CMRProcedureU8ConsultationCode> = t.recursion(
    "CMRProcedureU8ConsultationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRProcedureU8ConsultationCodeCoding)
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
export interface CMRProcedureU8ConsultationSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureU8ConsultationSubject: t.Type<CMRProcedureU8ConsultationSubject> = t.recursion(
    "CMRProcedureU8ConsultationSubject",
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
export interface CMRProcedureU8ConsultationEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureU8ConsultationEncounter: t.Type<CMRProcedureU8ConsultationEncounter> = t.recursion(
    "CMRProcedureU8ConsultationEncounter",
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
export interface CMRProcedureU8ConsultationAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureU8ConsultationAsserter: t.Type<CMRProcedureU8ConsultationAsserter> = t.recursion(
    "CMRProcedureU8ConsultationAsserter",
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

interface CMRProcedureU8Consultation {
    resourceType: "Procedure";
    meta: CMRProcedureU8ConsultationMeta;
    status: "completed";
    code: CMRProcedureU8ConsultationCode;
    subject: CMRProcedureU8ConsultationSubject;
    encounter: CMRProcedureU8ConsultationEncounter;
    performedDateTime: string;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureU8ConsultationAsserter;
}

const CMRProcedureU8Consultation: t.Type<CMRProcedureU8Consultation> = t.recursion(
    "CMRProcedureU8Consultation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureU8ConsultationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureU8ConsultationCode,
                    subject: CMRProcedureU8ConsultationSubject,
                    encounter: CMRProcedureU8ConsultationEncounter,
                    performedDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureU8ConsultationAsserter
                })
            ])
        )
);

export default CMRProcedureU8Consultation;
