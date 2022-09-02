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
    MinArray,
    ValueSetCheck,
    ExtensibleCheck,
    ReqArray
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Age from "../../../../Definitions/FHIR/4.0.1/Profile/Age";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ConditioncategoryVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Conditioncategory";
import ConditionclinicalVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Conditionclinical";
import ConditionverstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Conditionverstatus";
import DiagnoseSnomedCTVS from "../../../../Definitions/KBVBase/1.1.3/ValueSet/DiagnoseSnomedCT";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Icd10gmausrufezeichen from "../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmausrufezeichen";
import Icd10gmdiagnosesicherheit from "../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmdiagnosesicherheit";
import Icd10gmmanifestationscode from "../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmmanifestationscode";
import Icd10gmprimaercode from "../../../../Definitions/HL7DE/0.9.13/Extension/Icd10gmprimaercode";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import Seitenlokalisation from "../../../../Definitions/HL7DE/0.9.13/Extension/Seitenlokalisation";
import StageLife from "../../../../Definitions/KBVBase/1.1.3/Extension/StageLife";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Diagnosis"

/**
 * Content in other Language.
 */
export interface DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent: t.Type<DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent> =
    t.recursion("DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent", () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Content in other Language.
 */
export interface DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent: t.Type<DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent> =
    t.recursion("DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent", () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DiagnosisSeveritySnomedctDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent)[];
}

export const DiagnosisSeveritySnomedctDisplayAnzeigenameCode: t.Type<DiagnosisSeveritySnomedctDisplayAnzeigenameCode> =
    t.recursion("DiagnosisSeveritySnomedctDisplayAnzeigenameCode", () =>
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
                            t.Type<DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DiagnosisSeveritySnomedctDisplayAnzeigenameCodeContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DiagnosisCodeSnomedctDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent)[];
}

export const DiagnosisCodeSnomedctDisplayAnzeigenameCode: t.Type<DiagnosisCodeSnomedctDisplayAnzeigenameCode> =
    t.recursion("DiagnosisCodeSnomedctDisplayAnzeigenameCode", () =>
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
                            t.Type<DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DiagnosisCodeSnomedctDisplayAnzeigenameCodeContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DiagnosisSeveritySnomedctDisplay {
    id?: string;
    extension?: (Extension | DiagnosisSeveritySnomedctDisplayAnzeigenameCode)[];
    value?: string;
}

export const DiagnosisSeveritySnomedctDisplay: t.Type<DiagnosisSeveritySnomedctDisplay> =
    t.recursion("DiagnosisSeveritySnomedctDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DiagnosisSeveritySnomedctDisplayAnzeigenameCode>
                    ]
                >,
                t.Any
            >(
                t.union([Extension, DiagnosisSeveritySnomedctDisplayAnzeigenameCode]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DiagnosisSeveritySnomedctDisplayAnzeigenameCode,
                        occurrence: ["0", "*"],
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
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DiagnosisCodeSnomedctDisplay {
    id?: string;
    extension?: (Extension | DiagnosisCodeSnomedctDisplayAnzeigenameCode)[];
    value?: string;
}

export const DiagnosisCodeSnomedctDisplay: t.Type<DiagnosisCodeSnomedctDisplay> =
    t.recursion("DiagnosisCodeSnomedctDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DiagnosisCodeSnomedctDisplayAnzeigenameCode>
                    ]
                >,
                t.Any
            >(
                t.union([Extension, DiagnosisCodeSnomedctDisplayAnzeigenameCode]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DiagnosisCodeSnomedctDisplayAnzeigenameCode,
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnosisSeveritySnomedct {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    id?: string;
    _display?: DiagnosisSeveritySnomedctDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DiagnosisSeveritySnomedct: t.Type<DiagnosisSeveritySnomedct> = t.recursion(
    "DiagnosisSeveritySnomedct",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                _display: DiagnosisSeveritySnomedctDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnosisCodeICD10GM {
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

export const DiagnosisCodeICD10GM: t.Type<DiagnosisCodeICD10GM> = t.recursion(
    "DiagnosisCodeICD10GM",
    () =>
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
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnosisCodeAlphaid {
    system: "http://fhir.de/CodeSystem/dimdi/alpha-id";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const DiagnosisCodeAlphaid: t.Type<DiagnosisCodeAlphaid> = t.recursion(
    "DiagnosisCodeAlphaid",
    () =>
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
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnosisCodeSnomedct {
    system: "http://snomed.info/sct";
    version: string;
    code: DiagnoseSnomedCTVS;
    id?: string;
    _display?: DiagnosisCodeSnomedctDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DiagnosisCodeSnomedct: t.Type<DiagnosisCodeSnomedct> = t.recursion(
    "DiagnosisCodeSnomedct",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: DiagnoseSnomedCTVS
            }),
            t.partial({
                id: SCALARString,
                _display: DiagnosisCodeSnomedctDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnosisCodeOrphanet {
    system: "http://www.orpha.net";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const DiagnosisCodeOrphanet: t.Type<DiagnosisCodeOrphanet> = t.recursion(
    "DiagnosisCodeOrphanet",
    () =>
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
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnosisBodySiteSnomedct {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const DiagnosisBodySiteSnomedct: t.Type<DiagnosisBodySiteSnomedct> = t.recursion(
    "DiagnosisBodySiteSnomedct",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * The start of the period. The boundary is inclusive.
 */
export interface DiagnosisOnsetPeriodStart {
    id?: string;
    extension?: (Extension | StageLife)[];
    value?: string;
}

export const DiagnosisOnsetPeriodStart: t.Type<DiagnosisOnsetPeriodStart> = t.recursion(
    "DiagnosisOnsetPeriodStart",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<t.UnionC<[t.Type<Extension>, t.Type<StageLife>]>, t.Any>(
                t.union([Extension, StageLife]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: StageLife,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARDateTime
        })
);

/**
 * The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
 */
export interface DiagnosisOnsetPeriodEnd {
    id?: string;
    extension?: (Extension | StageLife)[];
    value?: string;
}

export const DiagnosisOnsetPeriodEnd: t.Type<DiagnosisOnsetPeriodEnd> = t.recursion(
    "DiagnosisOnsetPeriodEnd",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<t.UnionC<[t.Type<Extension>, t.Type<StageLife>]>, t.Any>(
                t.union([Extension, StageLife]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: StageLife,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARDateTime
        })
);

/**
 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
 */
export interface DiagnosisOnsetPeriod {
    id?: string;
    _start?: DiagnosisOnsetPeriodStart;
    start?: string;
    _end?: DiagnosisOnsetPeriodEnd;
    end?: string;
}

export const DiagnosisOnsetPeriod: t.Type<DiagnosisOnsetPeriod> = t.recursion(
    "DiagnosisOnsetPeriod",
    () =>
        t.partial({
            id: SCALARString,
            _start: DiagnosisOnsetPeriodStart,
            start: SCALARDateTime,
            _end: DiagnosisOnsetPeriodEnd,
            end: SCALARDateTime
        })
);

/**
 * A subjective assessment of the severity of the condition as evaluated by the clinician.
 */
export interface DiagnosisSeverity {
    id?: string;
    coding?: DiagnosisSeveritySnomedct[];
    text?: string;
}

export const DiagnosisSeverity: t.Type<DiagnosisSeverity> = t.recursion(
    "DiagnosisSeverity",
    () =>
        t.partial({
            id: SCALARString,
            coding: t.array(DiagnosisSeveritySnomedct),
            text: SCALARString
        })
);

/**
 * In diesem Element wird der Diagnosecode aufgeführt. Dieser kann aus verschiedenen Codiersystem stammen. Jede Diagnose muss mindestens einen Diagnosecode besitzen. Hierbei können die vorgeschlagenen Codiersysteme (ICD, Alpha-ID, SNOMED, ORPHANET) verwendet werden.
 */
export interface DiagnosisCode {
    coding: Array<
        | DiagnosisCodeICD10GM
        | DiagnosisCodeAlphaid
        | DiagnosisCodeSnomedct
        | DiagnosisCodeOrphanet
    >;
    id?: string;
    text?: string;
}

export const DiagnosisCode: t.Type<DiagnosisCode> = t.recursion("DiagnosisCode", () =>
    t.intersection([
        t.type({
            coding: ReqArray<
                t.UnionC<
                    [
                        t.Type<DiagnosisCodeICD10GM>,
                        t.Type<DiagnosisCodeAlphaid>,
                        t.Type<DiagnosisCodeSnomedct>,
                        t.Type<DiagnosisCodeOrphanet>
                    ]
                >,
                t.Any
            >(
                t.union([
                    DiagnosisCodeICD10GM,
                    DiagnosisCodeAlphaid,
                    DiagnosisCodeSnomedct,
                    DiagnosisCodeOrphanet
                ]),
                [
                    {
                        codec: DiagnosisCodeICD10GM,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "system",
                            value: "http://fhir.de/CodeSystem/dimdi/icd-10-gm"
                        }
                    },
                    {
                        codec: DiagnosisCodeAlphaid,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "system",
                            value: "http://fhir.de/CodeSystem/dimdi/alpha-id"
                        }
                    },
                    {
                        codec: DiagnosisCodeSnomedct,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "system", value: "http://snomed.info/sct" }
                    },
                    {
                        codec: DiagnosisCodeOrphanet,
                        occurrence: ["0", "1"],
                        sliceBy: { path: "system", value: "http://www.orpha.net" }
                    }
                ],
                ["1", "*"]
            )
        }),
        t.partial({
            id: SCALARString,
            text: SCALARString
        })
    ])
);

/**
 * Über die Körperstelle kann angegeben werden, in welchem Bereich des Körpers eine Krankheit diagnostiziert wurde (topographische Information).
 */
export interface DiagnosisBodySite {
    coding: Array<DiagnosisBodySiteSnomedct>;
    id?: string;
    text?: string;
}

export const DiagnosisBodySite: t.Type<DiagnosisBodySite> = t.recursion(
    "DiagnosisBodySite",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, DiagnosisBodySiteSnomedct)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
);

/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export interface DiagnosisStage {
    id?: string;
    summary?: CodeableConcept;
    assessment?: Reference[];
    type?: CodeableConcept;
}

export const DiagnosisStage: t.Type<DiagnosisStage> = t.recursion("DiagnosisStage", () =>
    t.partial({
        id: SCALARString,
        summary: CodeableConcept,
        assessment: t.array(Reference),
        type: CodeableConcept
    })
);

/**
 * Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
 */
export interface DiagnosisEvidence {
    id?: string;
    code?: CodeableConcept[];
    detail?: Reference[];
}

export const DiagnosisEvidence: t.Type<DiagnosisEvidence> = t.recursion(
    "DiagnosisEvidence",
    () =>
        t.partial({
            id: SCALARString,
            code: t.array(CodeableConcept),
            detail: t.array(Reference)
        })
);

interface Diagnosis {
    code: DiagnosisCode;
    subject: Reference;
    resourceType?: "Condition";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    clinicalStatus?: {
        coding: {
            system?: string;
            version?: string;
            code?: ConditionclinicalVS;
            display?: string;
            userSelected?: boolean;
        }[];
    };
    verificationStatus?: {
        coding: {
            system?: string;
            version?: string;
            code?: ConditionverstatusVS;
            display?: string;
            userSelected?: boolean;
        }[];
    };
    category?: ConditioncategoryVS[];
    severity?: DiagnosisSeverity;
    bodySite?: DiagnosisBodySite[];
    encounter?: Reference;
    onsetDateTime?: string;
    onsetPeriod?: DiagnosisOnsetPeriod;
    abatementDateTime?: string;
    abatementAge?: Age;
    abatementPeriod?: Period;
    abatementRange?: Range;
    abatementString?: string;
    recordedDate?: string;
    recorder?: Reference;
    asserter?: Reference;
    stage?: DiagnosisStage[];
    evidence?: DiagnosisEvidence[];
    note?: Annotation[];
}

const Diagnosis: t.Type<Diagnosis> = t.recursion("Diagnosis", () =>
    t.intersection([
        t.type({
            code: DiagnosisCode,
            subject: Reference
        }),
        t.partial({
            resourceType: Literal("Condition"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            identifier: t.array(Identifier),
            clinicalStatus: t.type({
                coding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: ValueSetCheck<t.Type<ConditionclinicalVS>>(
                            ConditionclinicalVS
                        ),
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            verificationStatus: t.type({
                coding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: ValueSetCheck<t.Type<ConditionverstatusVS>>(
                            ConditionverstatusVS
                        ),
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            category: t.array(
                ExtensibleCheck<t.Type<ConditioncategoryVS>>(ConditioncategoryVS)
            ),
            severity: DiagnosisSeverity,
            bodySite: t.array(DiagnosisBodySite),
            encounter: Reference,
            onsetDateTime: SCALARDateTime,
            onsetPeriod: DiagnosisOnsetPeriod,
            abatementDateTime: SCALARDateTime,
            abatementAge: Age,
            abatementPeriod: Period,
            abatementRange: Range,
            abatementString: SCALARString,
            recordedDate: SCALARDateTime,
            recorder: Reference,
            asserter: Reference,
            stage: t.array(DiagnosisStage),
            evidence: t.array(DiagnosisEvidence),
            note: t.array(Annotation)
        })
    ])
);

export default Diagnosis;
