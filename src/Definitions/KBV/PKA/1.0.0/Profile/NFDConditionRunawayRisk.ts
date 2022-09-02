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

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDRunawayRiskVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDRunawayRisk";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Runaway_Risk"

/**
 * Content in other Language.
 */
export interface NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface NFDConditionRunawayRiskEvidenceCodeSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDConditionRunawayRiskEvidenceCodeSnomedCode: t.Type<NFDConditionRunawayRiskEvidenceCodeSnomedCode> =
    t.recursion("NFDConditionRunawayRiskEvidenceCodeSnomedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: SCALARCode,
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
export interface NFDConditionRunawayRiskCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const NFDConditionRunawayRiskCodeCodingDisplay: t.Type<NFDConditionRunawayRiskCodeCodingDisplay> =
    t.recursion("NFDConditionRunawayRiskCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDConditionRunawayRiskCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface NFDConditionRunawayRiskCodeCoding {
    system: string;
    version: string;
    code: NFDRunawayRiskVS;
    id?: string;
    _display?: NFDConditionRunawayRiskCodeCodingDisplay;
    display?: string;
}

export const NFDConditionRunawayRiskCodeCoding: t.Type<NFDConditionRunawayRiskCodeCoding> =
    t.recursion("NFDConditionRunawayRiskCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: NFDRunawayRiskVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDConditionRunawayRiskCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A manifestation or symptom that led to the recording of this condition.
 */
export interface NFDConditionRunawayRiskEvidenceCode {
    id?: string;
    coding?: NFDConditionRunawayRiskEvidenceCodeSnomedCode[];
    text?: string;
}

export const NFDConditionRunawayRiskEvidenceCode: t.Type<NFDConditionRunawayRiskEvidenceCode> =
    t.recursion("NFDConditionRunawayRiskEvidenceCode", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: t.array(NFDConditionRunawayRiskEvidenceCodeSnomedCode),
                text: SCALARString
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDConditionRunawayRiskMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Runaway_Risk|1.0.0">;
    id?: string;
}

export const NFDConditionRunawayRiskMeta: t.Type<NFDConditionRunawayRiskMeta> =
    t.recursion("NFDConditionRunawayRiskMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition_Runaway_Risk|1.0.0"
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
export interface NFDConditionRunawayRiskCode {
    coding: Array<NFDConditionRunawayRiskCodeCoding>;
    id?: string;
}

export const NFDConditionRunawayRiskCode: t.Type<NFDConditionRunawayRiskCode> =
    t.recursion("NFDConditionRunawayRiskCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDConditionRunawayRiskCodeCoding)
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
export interface NFDConditionRunawayRiskSubjectReference {
    reference: string;
    id?: string;
}

export const NFDConditionRunawayRiskSubjectReference: t.Type<NFDConditionRunawayRiskSubjectReference> =
    t.recursion("NFDConditionRunawayRiskSubjectReference", () =>
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
export interface NFDConditionRunawayRiskAsserterReference {
    reference: string;
    id?: string;
}

export const NFDConditionRunawayRiskAsserterReference: t.Type<NFDConditionRunawayRiskAsserterReference> =
    t.recursion("NFDConditionRunawayRiskAsserterReference", () =>
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
export interface NFDConditionRunawayRiskEvidence {
    id?: string;
    code?: Array<NFDConditionRunawayRiskEvidenceCode>;
}

export const NFDConditionRunawayRiskEvidence: t.Type<NFDConditionRunawayRiskEvidence> =
    t.recursion("NFDConditionRunawayRiskEvidence", () =>
        Excess(
            t.partial({
                id: SCALARString,
                code: MaxArray(1, NFDConditionRunawayRiskEvidenceCode)
            })
        )
    );

interface NFDConditionRunawayRisk {
    resourceType: "Condition";
    meta: NFDConditionRunawayRiskMeta;
    code: NFDConditionRunawayRiskCode;
    subject: NFDConditionRunawayRiskSubjectReference;
    evidence: Array<NFDConditionRunawayRiskEvidence>;
    id?: string;
    asserter?: NFDConditionRunawayRiskAsserterReference;
}

const NFDConditionRunawayRisk: t.Type<NFDConditionRunawayRisk> = t.recursion(
    "NFDConditionRunawayRisk",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Condition"),
                    meta: NFDConditionRunawayRiskMeta,
                    code: NFDConditionRunawayRiskCode,
                    subject: NFDConditionRunawayRiskSubjectReference,
                    evidence: MinMaxArray(1, 1, NFDConditionRunawayRiskEvidence)
                }),
                t.partial({
                    id: SCALARString,
                    asserter: NFDConditionRunawayRiskAsserterReference
                })
            ])
        )
);

export default NFDConditionRunawayRisk;
