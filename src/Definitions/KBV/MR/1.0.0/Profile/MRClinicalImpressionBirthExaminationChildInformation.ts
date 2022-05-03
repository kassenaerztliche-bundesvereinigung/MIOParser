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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Child_Information"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Angaben zum Kind";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Angaben zum Kind")
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
export interface MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplay: t.Type<MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionBirthExaminationChildInformationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "118188004";
    id?: string;
    _display?: MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationCodeCoding: t.Type<MRClinicalImpressionBirthExaminationChildInformationCodeCoding> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("118188004")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRClinicalImpressionBirthExaminationChildInformationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationInvestigationCode {
    text: "Angaben zum Kind";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationInvestigationCode: t.Type<MRClinicalImpressionBirthExaminationChildInformationInvestigationCode> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationChildInformationInvestigationCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        text: Literal("Angaben zum Kind")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A record of a specific investigation that was undertaken.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationInvestigationItem {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationInvestigationItem: t.Type<MRClinicalImpressionBirthExaminationChildInformationInvestigationItem> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationChildInformationInvestigationItem",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Live_Birth|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation|1.0.0"
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
export interface MRClinicalImpressionBirthExaminationChildInformationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Child_Information|1.0.0">;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationMeta: t.Type<MRClinicalImpressionBirthExaminationChildInformationMeta> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Child_Information|1.0.0"
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
 * Categorizes the type of clinical assessment performed.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationCode {
    coding: Array<MRClinicalImpressionBirthExaminationChildInformationCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationCode: t.Type<MRClinicalImpressionBirthExaminationChildInformationCode> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionBirthExaminationChildInformationCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient or group of individuals assessed as part of this record.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationSubject {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationSubject: t.Type<MRClinicalImpressionBirthExaminationChildInformationSubject> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationEncounter {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationEncounter: t.Type<MRClinicalImpressionBirthExaminationChildInformationEncounter> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The clinician performing the assessment.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationAssessor {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationChildInformationAssessor: t.Type<MRClinicalImpressionBirthExaminationChildInformationAssessor> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationAssessor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface MRClinicalImpressionBirthExaminationChildInformationInvestigation {
    code: MRClinicalImpressionBirthExaminationChildInformationInvestigationCode;
    id?: string;
    item?: MRClinicalImpressionBirthExaminationChildInformationInvestigationItem[];
}

export const MRClinicalImpressionBirthExaminationChildInformationInvestigation: t.Type<MRClinicalImpressionBirthExaminationChildInformationInvestigation> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformationInvestigation", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRClinicalImpressionBirthExaminationChildInformationInvestigationCode
                }),
                t.partial({
                    id: SCALARString,
                    item: t.array(
                        MRClinicalImpressionBirthExaminationChildInformationInvestigationItem
                    )
                })
            ])
        )
    );

interface MRClinicalImpressionBirthExaminationChildInformation {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionBirthExaminationChildInformationMeta;
    status: "completed";
    code: MRClinicalImpressionBirthExaminationChildInformationCode;
    subject: MRClinicalImpressionBirthExaminationChildInformationSubject;
    encounter: MRClinicalImpressionBirthExaminationChildInformationEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    assessor?: MRClinicalImpressionBirthExaminationChildInformationAssessor;
    investigation?: Array<MRClinicalImpressionBirthExaminationChildInformationInvestigation>;
}

const MRClinicalImpressionBirthExaminationChildInformation: t.Type<MRClinicalImpressionBirthExaminationChildInformation> =
    t.recursion("MRClinicalImpressionBirthExaminationChildInformation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionBirthExaminationChildInformationMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionBirthExaminationChildInformationCode,
                    subject: MRClinicalImpressionBirthExaminationChildInformationSubject,
                    encounter:
                        MRClinicalImpressionBirthExaminationChildInformationEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    assessor:
                        MRClinicalImpressionBirthExaminationChildInformationAssessor,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionBirthExaminationChildInformationInvestigation
                    )
                })
            ])
        )
    );

export default MRClinicalImpressionBirthExaminationChildInformation;
