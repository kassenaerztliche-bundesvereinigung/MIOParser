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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDCommunicationDisorderVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDCommunicationDisorder";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Communication_Disorder"

/**
 * Content in other Language.
 */
export interface NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kommunikationsstörung";
    id?: string;
}

export const NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kommunikationsstörung")
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
export interface NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionCommunicationDisorderEvidenceCodeSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: NFDCommunicationDisorderVS;
    display: string;
    id?: string;
}

export const NFDConditionCommunicationDisorderEvidenceCodeSnomedCode: t.Type<NFDConditionCommunicationDisorderEvidenceCodeSnomedCode> =
    t.recursion("NFDConditionCommunicationDisorderEvidenceCodeSnomedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: NFDCommunicationDisorderVS,
                    display: SCALARString
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
export interface NFDConditionCommunicationDisorderCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const NFDConditionCommunicationDisorderCodeCodingDisplay: t.Type<NFDConditionCommunicationDisorderCodeCodingDisplay> =
    t.recursion("NFDConditionCommunicationDisorderCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDConditionCommunicationDisorderCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface NFDConditionCommunicationDisorderCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "278919001";
    display: "Communication disorder (disorder)";
    id?: string;
    _display?: NFDConditionCommunicationDisorderCodeCodingDisplay;
}

export const NFDConditionCommunicationDisorderCodeCoding: t.Type<NFDConditionCommunicationDisorderCodeCoding> =
    t.recursion("NFDConditionCommunicationDisorderCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("278919001"),
                    display: Literal("Communication disorder (disorder)")
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDConditionCommunicationDisorderCodeCodingDisplay
                })
            ])
        )
    );

/**
 * A manifestation or symptom that led to the recording of this condition.
 */
export interface NFDConditionCommunicationDisorderEvidenceCode {
    id?: string;
    coding?: NFDConditionCommunicationDisorderEvidenceCodeSnomedCode[];
    text?: string;
}

export const NFDConditionCommunicationDisorderEvidenceCode: t.Type<NFDConditionCommunicationDisorderEvidenceCode> =
    t.recursion("NFDConditionCommunicationDisorderEvidenceCode", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: t.array(NFDConditionCommunicationDisorderEvidenceCodeSnomedCode),
                text: SCALARString
            })
        )
    );

/**
 * Links to other relevant information, including pathology reports.
 */
export interface NFDConditionCommunicationDisorderEvidenceDetailReference {
    reference: string;
    id?: string;
}

export const NFDConditionCommunicationDisorderEvidenceDetailReference: t.Type<NFDConditionCommunicationDisorderEvidenceDetailReference> =
    t.recursion("NFDConditionCommunicationDisorderEvidenceDetailReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition|1.0.0"
                    ])
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
export interface NFDConditionCommunicationDisorderMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Communication_Disorder|1.0.0">;
    id?: string;
}

export const NFDConditionCommunicationDisorderMeta: t.Type<NFDConditionCommunicationDisorderMeta> =
    t.recursion("NFDConditionCommunicationDisorderMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Communication_Disorder|1.0.0"
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
 * Identification of the condition, problem or diagnosis.
 */
export interface NFDConditionCommunicationDisorderCode {
    coding: Array<NFDConditionCommunicationDisorderCodeCoding>;
    id?: string;
}

export const NFDConditionCommunicationDisorderCode: t.Type<NFDConditionCommunicationDisorderCode> =
    t.recursion("NFDConditionCommunicationDisorderCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDConditionCommunicationDisorderCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Indicates the patient or group who the condition record is associated with.
 */
export interface NFDConditionCommunicationDisorderSubjectReference {
    reference: string;
    id?: string;
}

export const NFDConditionCommunicationDisorderSubjectReference: t.Type<NFDConditionCommunicationDisorderSubjectReference> =
    t.recursion("NFDConditionCommunicationDisorderSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Individual who is making the condition statement.
 */
export interface NFDConditionCommunicationDisorderAsserterReference {
    reference: string;
    id?: string;
}

export const NFDConditionCommunicationDisorderAsserterReference: t.Type<NFDConditionCommunicationDisorderAsserterReference> =
    t.recursion("NFDConditionCommunicationDisorderAsserterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
 */
export interface NFDConditionCommunicationDisorderEvidence {
    id?: string;
    code?: Array<NFDConditionCommunicationDisorderEvidenceCode>;
    detail?: Array<NFDConditionCommunicationDisorderEvidenceDetailReference>;
}

export const NFDConditionCommunicationDisorderEvidence: t.Type<NFDConditionCommunicationDisorderEvidence> =
    t.recursion("NFDConditionCommunicationDisorderEvidence", () =>
        Excess(
            t.partial({
                id: SCALARString,
                code: MaxArray(1, NFDConditionCommunicationDisorderEvidenceCode),
                detail: MaxArray(
                    1,
                    NFDConditionCommunicationDisorderEvidenceDetailReference
                )
            })
        )
    );

interface NFDConditionCommunicationDisorder {
    resourceType: "Condition";
    meta: NFDConditionCommunicationDisorderMeta;
    code: NFDConditionCommunicationDisorderCode;
    subject: NFDConditionCommunicationDisorderSubjectReference;
    evidence: Array<NFDConditionCommunicationDisorderEvidence>;
    id?: string;
    asserter?: NFDConditionCommunicationDisorderAsserterReference;
}

const NFDConditionCommunicationDisorder: t.Type<NFDConditionCommunicationDisorder> =
    t.recursion("NFDConditionCommunicationDisorder", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Condition"),
                    meta: NFDConditionCommunicationDisorderMeta,
                    code: NFDConditionCommunicationDisorderCode,
                    subject: NFDConditionCommunicationDisorderSubjectReference,
                    evidence: MinMaxArray(1, 1, NFDConditionCommunicationDisorderEvidence)
                }),
                t.partial({
                    id: SCALARString,
                    asserter: NFDConditionCommunicationDisorderAsserterReference
                })
            ])
        )
    );

export default NFDConditionCommunicationDisorder;
