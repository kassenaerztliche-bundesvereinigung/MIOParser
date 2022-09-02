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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import ConditionverstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Conditionverstatus";
import DiagnoseSnomedCTVS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/DiagnoseSnomedCT";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Icd10gmausrufezeichen from "../../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmausrufezeichen";
import Icd10gmdiagnosesicherheit from "../../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmdiagnosesicherheit";
import Icd10gmmanifestationscode from "../../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmmanifestationscode";
import Icd10gmprimaercode from "../../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmprimaercode";
import KBVVSSFHIRICDSEITENLOKALISATIONVS from "../../../../../Definitions/ST/1.0.0/ValueSet/KBVVSSFHIRICDSEITENLOKALISATION";
import Seitenlokalisation from "../../../../../Definitions/HL7DE/0.9.13/Extension/Seitenlokalisation";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition"

/**
 * Content in other Language.
 */
export interface NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent: t.Type<NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent> =
    t.recursion("NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent", () =>
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
 * Content in other Language.
 */
export interface NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent: t.Type<NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent> =
    t.recursion(
        "NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent",
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
 * Content in other Language.
 */
export interface NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent {
    url: "content";
    valueString: "Diagnose";
    id?: string;
}

export const NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent: t.Type<NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent> =
    t.recursion("NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Diagnose")
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
export interface NFDConditionCodeSnomedctDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent)[];
}

export const NFDConditionCodeSnomedctDisplayAnzeigenameCode: t.Type<NFDConditionCodeSnomedctDisplayAnzeigenameCode> =
    t.recursion("NFDConditionCodeSnomedctDisplayAnzeigenameCode", () =>
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
                                t.Type<NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDConditionCodeSnomedctDisplayAnzeigenameCodeContent,
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
export interface NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatus {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent[];
}

export const NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatus: t.Type<NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatus> =
    t.recursion(
        "NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatus",
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
                        extension: t.array(
                            NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDConditionCategoryCodingDisplayAnzeigenameCategory {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent
    )[];
}

export const NFDConditionCategoryCodingDisplayAnzeigenameCategory: t.Type<NFDConditionCategoryCodingDisplayAnzeigenameCategory> =
    t.recursion("NFDConditionCategoryCodingDisplayAnzeigenameCategory", () =>
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
                                t.Type<NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDConditionCategoryCodingDisplayAnzeigenameCategoryContent,
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
export interface NFDConditionCodeSnomedctDisplay {
    id?: string;
    extension?: (Extension | NFDConditionCodeSnomedctDisplayAnzeigenameCode)[];
    value?: string;
}

export const NFDConditionCodeSnomedctDisplay: t.Type<NFDConditionCodeSnomedctDisplay> =
    t.recursion("NFDConditionCodeSnomedctDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDConditionCodeSnomedctDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDConditionCodeSnomedctDisplayAnzeigenameCode]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDConditionCodeSnomedctDisplayAnzeigenameCode,
                            occurrence: ["0", "1"],
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDConditionVerificationStatusCodingDisplay {
    id?: string;
    extension?: NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatus[];
    value?: string;
}

export const NFDConditionVerificationStatusCodingDisplay: t.Type<NFDConditionVerificationStatusCodingDisplay> =
    t.recursion("NFDConditionVerificationStatusCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    NFDConditionVerificationStatusCodingDisplayAnzeigenameVerificationStatus
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDConditionCategoryCodingDisplay {
    id?: string;
    extension?: NFDConditionCategoryCodingDisplayAnzeigenameCategory[];
    value?: string;
}

export const NFDConditionCategoryCodingDisplay: t.Type<NFDConditionCategoryCodingDisplay> =
    t.recursion("NFDConditionCategoryCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(NFDConditionCategoryCodingDisplayAnzeigenameCategory),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionCodeICD10GM {
    system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm";
    version: string;
    code: string;
    id?: string;
    extension?: (
        | Extension
        | Icd10gmprimaercode
        | Icd10gmmanifestationscode
        | Icd10gmausrufezeichen
        | Icd10gmdiagnosesicherheit
        | Seitenlokalisation
    )[];
    display?: string;
    userSelected?: boolean;
}

export const NFDConditionCodeICD10GM: t.Type<NFDConditionCodeICD10GM> = t.recursion(
    "NFDConditionCodeICD10GM",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/dimdi/icd-10-gm"),
                    version: SCALARString,
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<Icd10gmprimaercode>,
                                t.Type<Icd10gmmanifestationscode>,
                                t.Type<Icd10gmausrufezeichen>,
                                t.Type<Icd10gmdiagnosesicherheit>,
                                t.Type<Seitenlokalisation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            Icd10gmprimaercode,
                            Icd10gmmanifestationscode,
                            Icd10gmausrufezeichen,
                            Icd10gmdiagnosesicherheit,
                            Seitenlokalisation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: Icd10gmprimaercode,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "http://fhir.de/StructureDefinition/icd-10-gm-primaercode"
                                }
                            },
                            {
                                codec: Icd10gmmanifestationscode,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "url",
                                    value: "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode"
                                }
                            },
                            {
                                codec: Icd10gmausrufezeichen,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "url",
                                    value: "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen"
                                }
                            },
                            {
                                codec: Icd10gmdiagnosesicherheit,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit"
                                }
                            },
                            {
                                codec: Seitenlokalisation,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "http://fhir.de/StructureDefinition/seitenlokalisation"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionCodeAlphaid {
    system: "http://fhir.de/CodeSystem/dimdi/alpha-id";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const NFDConditionCodeAlphaid: t.Type<NFDConditionCodeAlphaid> = t.recursion(
    "NFDConditionCodeAlphaid",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/dimdi/alpha-id"),
                    version: SCALARString,
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionCodeSnomedct {
    system: "http://snomed.info/sct";
    version: string;
    code: DiagnoseSnomedCTVS;
    id?: string;
    _display?: NFDConditionCodeSnomedctDisplay;
    display?: string;
    userSelected?: boolean;
}

export const NFDConditionCodeSnomedct: t.Type<NFDConditionCodeSnomedct> = t.recursion(
    "NFDConditionCodeSnomedct",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: DiagnoseSnomedCTVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDConditionCodeSnomedctDisplay,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionCodeOrphanet {
    system: "http://www.orpha.net";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const NFDConditionCodeOrphanet: t.Type<NFDConditionCodeOrphanet> = t.recursion(
    "NFDConditionCodeOrphanet",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://www.orpha.net"),
                    version: SCALARString,
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionVerificationStatusCoding {
    system: string;
    version: string;
    code: ConditionverstatusVS;
    id?: string;
    _display?: NFDConditionVerificationStatusCodingDisplay;
    display?: string;
}

export const NFDConditionVerificationStatusCoding: t.Type<NFDConditionVerificationStatusCoding> =
    t.recursion("NFDConditionVerificationStatusCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: ConditionverstatusVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDConditionVerificationStatusCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "439401001";
    display: "Diagnosis (observable entity)";
    id?: string;
    _display?: NFDConditionCategoryCodingDisplay;
}

export const NFDConditionCategoryCoding: t.Type<NFDConditionCategoryCoding> = t.recursion(
    "NFDConditionCategoryCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("439401001"),
                    display: Literal("Diagnosis (observable entity)")
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDConditionCategoryCodingDisplay
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDConditionBodySiteCoding {
    system: string;
    version: string;
    code: KBVVSSFHIRICDSEITENLOKALISATIONVS;
    display: string;
    id?: string;
}

export const NFDConditionBodySiteCoding: t.Type<NFDConditionBodySiteCoding> = t.recursion(
    "NFDConditionBodySiteCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: KBVVSSFHIRICDSEITENLOKALISATIONVS,
                    display: SCALARString
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
export interface NFDConditionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition|1.0.0">;
    id?: string;
}

export const NFDConditionMeta: t.Type<NFDConditionMeta> = t.recursion(
    "NFDConditionMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Condition|1.0.0"
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
 * The verification status to support the clinical status of the condition.
 */
export interface NFDConditionVerificationStatus {
    coding: Array<NFDConditionVerificationStatusCoding>;
    id?: string;
}

export const NFDConditionVerificationStatus: t.Type<NFDConditionVerificationStatus> =
    t.recursion("NFDConditionVerificationStatus", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDConditionVerificationStatusCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A category assigned to the condition.
 */
export interface NFDConditionCategory {
    coding: Array<NFDConditionCategoryCoding>;
    id?: string;
}

export const NFDConditionCategory: t.Type<NFDConditionCategory> = t.recursion(
    "NFDConditionCategory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDConditionCategoryCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * In diesem Element wird der Diagnosecode aufgeführt. Dieser kann aus verschiedenen Codiersystem stammen. Jede Diagnose muss mindestens einen Diagnosecode besitzen. Hierbei können die vorgeschlagenen Codiersysteme (ICD, Alpha-ID, SNOMED, ORPHANET) verwendet werden.
 */
export interface NFDConditionCode {
    text: string;
    id?: string;
    coding?: Array<
        | NFDConditionCodeICD10GM
        | NFDConditionCodeAlphaid
        | NFDConditionCodeSnomedct
        | NFDConditionCodeOrphanet
    >;
}

export const NFDConditionCode: t.Type<NFDConditionCode> = t.recursion(
    "NFDConditionCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<NFDConditionCodeICD10GM>,
                                t.Type<NFDConditionCodeAlphaid>,
                                t.Type<NFDConditionCodeSnomedct>,
                                t.Type<NFDConditionCodeOrphanet>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            NFDConditionCodeICD10GM,
                            NFDConditionCodeAlphaid,
                            NFDConditionCodeSnomedct,
                            NFDConditionCodeOrphanet
                        ]),
                        [
                            {
                                codec: NFDConditionCodeICD10GM,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/dimdi/icd-10-gm"
                                }
                            },
                            {
                                codec: NFDConditionCodeAlphaid,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/dimdi/alpha-id"
                                }
                            },
                            {
                                codec: NFDConditionCodeSnomedct,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: NFDConditionCodeOrphanet,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "system", value: "http://www.orpha.net" }
                            }
                        ],
                        ["0", "1"]
                    )
                })
            ])
        )
);

/**
 * Über die Körperstelle kann angegeben werden, in welchem Bereich des Körpers eine Krankheit diagnostiziert wurde (topographische Information).
 */
export interface NFDConditionBodySite {
    coding: Array<NFDConditionBodySiteCoding>;
    id?: string;
}

export const NFDConditionBodySite: t.Type<NFDConditionBodySite> = t.recursion(
    "NFDConditionBodySite",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDConditionBodySiteCoding)
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
export interface NFDConditionSubjectReference {
    reference: string;
    id?: string;
}

export const NFDConditionSubjectReference: t.Type<NFDConditionSubjectReference> =
    t.recursion("NFDConditionSubjectReference", () =>
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
export interface NFDConditionAsserterReference {
    reference: string;
    id?: string;
}

export const NFDConditionAsserterReference: t.Type<NFDConditionAsserterReference> =
    t.recursion("NFDConditionAsserterReference", () =>
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

interface NFDCondition {
    resourceType: "Condition";
    meta: NFDConditionMeta;
    category: Array<NFDConditionCategory>;
    code: NFDConditionCode;
    subject: NFDConditionSubjectReference;
    id?: string;
    verificationStatus?: NFDConditionVerificationStatus;
    bodySite?: Array<NFDConditionBodySite>;
    onsetString?: string;
    onsetDateTime?: string;
    asserter?: NFDConditionAsserterReference;
}

const NFDCondition: t.Type<NFDCondition> = t.recursion("NFDCondition", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Condition"),
                meta: NFDConditionMeta,
                category: MinMaxArray(1, 1, NFDConditionCategory),
                code: NFDConditionCode,
                subject: NFDConditionSubjectReference
            }),
            t.partial({
                id: SCALARString,
                verificationStatus: NFDConditionVerificationStatus,
                bodySite: MaxArray(1, NFDConditionBodySite),
                onsetString: SCALARString,
                onsetDateTime: SCALARDateTime,
                asserter: NFDConditionAsserterReference
            })
        ])
    )
);

export default NFDCondition;
