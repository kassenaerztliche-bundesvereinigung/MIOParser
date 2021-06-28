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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import StageLifeVS from "../../../../../Definitions/KBVBase/1.1.1/ValueSet/StageLife";
import VaccinationPriorDiseaseICDVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationPriorDiseaseICD";
import VaccinationPriorDiseaseVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationPriorDisease";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Condition"

/**
 * Content in other Language.
 */
export interface VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Content in other Language.
 */
export interface VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay: t.Type<VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay> = t.recursion(
    "VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding {
    system: string;
    version: string;
    code: StageLifeVS;
    id?: string;
    _display?: VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay;
    display?: string;
}

export const VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding: t.Type<VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding> = t.recursion(
    "VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: StageLifeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed> = t.recursion(
    "VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationConditionOnsetStringLebensphaseValueCodeableConcept {
    coding: Array<VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationConditionOnsetStringLebensphaseValueCodeableConcept: t.Type<VaccinationConditionOnsetStringLebensphaseValueCodeableConcept> = t.recursion(
    "VaccinationConditionOnsetStringLebensphaseValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding
                    )
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
export interface VaccinationConditionCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationConditionCodeSnomedCTDisplay: t.Type<VaccinationConditionCodeSnomedCTDisplay> = t.recursion(
    "VaccinationConditionCodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
 * In diesem Profil werden verschiedene Alterklassen/Lebensphasen von Personen beschrieben, die zu einem anderen Profil hinzugefügt werden können.
 */
export interface VaccinationConditionOnsetStringLebensphase {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups";
    valueCodeableConcept: VaccinationConditionOnsetStringLebensphaseValueCodeableConcept;
    id?: string;
}

export const VaccinationConditionOnsetStringLebensphase: t.Type<VaccinationConditionOnsetStringLebensphase> = t.recursion(
    "VaccinationConditionOnsetStringLebensphase",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups"
                    ),
                    valueCodeableConcept: VaccinationConditionOnsetStringLebensphaseValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationConditionCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: VaccinationPriorDiseaseVS;
    id?: string;
    _display?: VaccinationConditionCodeSnomedCTDisplay;
    display?: string;
}

export const VaccinationConditionCodeSnomedCT: t.Type<VaccinationConditionCodeSnomedCT> = t.recursion(
    "VaccinationConditionCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: VaccinationPriorDiseaseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationConditionCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationConditionCodeIcd10gm {
    system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm";
    version: string;
    code: VaccinationPriorDiseaseICDVS;
    display: string;
    id?: string;
}

export const VaccinationConditionCodeIcd10gm: t.Type<VaccinationConditionCodeIcd10gm> = t.recursion(
    "VaccinationConditionCodeIcd10gm",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/dimdi/icd-10-gm"),
                    version: SCALARString,
                    code: VaccinationPriorDiseaseICDVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationConditionClinicalStatusCoding {
    system: "http://terminology.hl7.org/CodeSystem/condition-clinical";
    code: "resolved";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationConditionClinicalStatusCoding: t.Type<VaccinationConditionClinicalStatusCoding> = t.recursion(
    "VaccinationConditionClinicalStatusCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/condition-clinical"
                    ),
                    code: Literal("resolved")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationConditionVerificationStatusCoding {
    system: "http://terminology.hl7.org/CodeSystem/condition-ver-status";
    code: "confirmed";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationConditionVerificationStatusCoding: t.Type<VaccinationConditionVerificationStatusCoding> = t.recursion(
    "VaccinationConditionVerificationStatusCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/condition-ver-status"
                    ),
                    code: Literal("confirmed")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
 */
export interface VaccinationConditionOnsetString {
    id?: string;
    extension?: (Extension | VaccinationConditionOnsetStringLebensphase)[];
    value?: string;
}

export const VaccinationConditionOnsetString: t.Type<VaccinationConditionOnsetString> = t.recursion(
    "VaccinationConditionOnsetString",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationConditionOnsetStringLebensphase>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, VaccinationConditionOnsetStringLebensphase]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationConditionOnsetStringLebensphase,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups"
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationConditionMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Condition|1.1.0"
    >;
    id?: string;
}

export const VaccinationConditionMeta: t.Type<VaccinationConditionMeta> = t.recursion(
    "VaccinationConditionMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Condition|1.1.0"
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
 * The clinical status of the condition.
 */
export interface VaccinationConditionClinicalStatus {
    coding: Array<VaccinationConditionClinicalStatusCoding>;
    id?: string;
}

export const VaccinationConditionClinicalStatus: t.Type<VaccinationConditionClinicalStatus> = t.recursion(
    "VaccinationConditionClinicalStatus",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationConditionClinicalStatusCoding)
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
export interface VaccinationConditionVerificationStatus {
    coding: Array<VaccinationConditionVerificationStatusCoding>;
    id?: string;
}

export const VaccinationConditionVerificationStatus: t.Type<VaccinationConditionVerificationStatus> = t.recursion(
    "VaccinationConditionVerificationStatus",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationConditionVerificationStatusCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Dieses Element beschreibt die durchgemachte Infektionskrankheit, die zu einer Immunität führt. Enthalten ist die Bezeichnung der Erkrankung mit der entsprechenden Codierung.
 */
export interface VaccinationConditionCode {
    coding: Array<VaccinationConditionCodeSnomedCT | VaccinationConditionCodeIcd10gm>;
    id?: string;
}

export const VaccinationConditionCode: t.Type<VaccinationConditionCode> = t.recursion(
    "VaccinationConditionCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationConditionCodeSnomedCT>,
                                t.Type<VaccinationConditionCodeIcd10gm>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationConditionCodeSnomedCT,
                            VaccinationConditionCodeIcd10gm
                        ]),
                        [
                            {
                                codec: VaccinationConditionCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: VaccinationConditionCodeIcd10gm,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/dimdi/icd-10-gm"
                                }
                            }
                        ],
                        ["1", "2"]
                    )
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
export interface VaccinationConditionSubject {
    reference: string;
    id?: string;
}

export const VaccinationConditionSubject: t.Type<VaccinationConditionSubject> = t.recursion(
    "VaccinationConditionSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Diese Person hat den Eintrag im digitalen Impfpass getätigt.
 */
export interface VaccinationConditionRecorder {
    reference: string;
    id?: string;
}

export const VaccinationConditionRecorder: t.Type<VaccinationConditionRecorder> = t.recursion(
    "VaccinationConditionRecorder",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Damit soll dem Arzt die Möglichkeit gegeben werden evt. nähere Angaben zu einer Diagnose in Form von Freitext zu machen
 */
export interface VaccinationConditionNote {
    text: string;
    id?: string;
}

export const VaccinationConditionNote: t.Type<VaccinationConditionNote> = t.recursion(
    "VaccinationConditionNote",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARMarkdown
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationCondition {
    resourceType: "Condition";
    meta: VaccinationConditionMeta;
    clinicalStatus: VaccinationConditionClinicalStatus;
    verificationStatus: VaccinationConditionVerificationStatus;
    code: VaccinationConditionCode;
    subject: VaccinationConditionSubject;
    recordedDate: string;
    id?: string;
    text?: Narrative;
    _onsetString?: VaccinationConditionOnsetString;
    onsetString?: string;
    recorder?: VaccinationConditionRecorder;
    note?: Array<VaccinationConditionNote>;
}

const VaccinationCondition: t.Type<VaccinationCondition> = t.recursion(
    "VaccinationCondition",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Condition"),
                    meta: VaccinationConditionMeta,
                    clinicalStatus: VaccinationConditionClinicalStatus,
                    verificationStatus: VaccinationConditionVerificationStatus,
                    code: VaccinationConditionCode,
                    subject: VaccinationConditionSubject,
                    recordedDate: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    _onsetString: VaccinationConditionOnsetString,
                    onsetString: SCALARString,
                    recorder: VaccinationConditionRecorder,
                    note: MaxArray(1, VaccinationConditionNote)
                })
            ])
        )
);

export default VaccinationCondition;
