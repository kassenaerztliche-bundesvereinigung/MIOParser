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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Second_Examination_After_Childbirth"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Zweite Untersuchung nach Entbindung";
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Zweite Untersuchung nach Entbindung")
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplay: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "717810008";
    id?: string;
    _display?: MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthCodeCoding: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCoding> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("717810008")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRClinicalImpressionSecondExaminationAfterChildbirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationCode {
    text: "Untersuchungen zur zweiten Untersuchung nach Entbindung";
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationCode: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationCode> =
    t.recursion(
        "MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        text: Literal(
                            "Untersuchungen zur zweiten Untersuchung nach Entbindung"
                        )
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationItem {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationItem: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationItem> =
    t.recursion(
        "MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationItem",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Protein|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3|1.0.0"
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Second_Examination_After_Childbirth|1.0.0">;
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthMeta: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthMeta> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Second_Examination_After_Childbirth|1.0.0"
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthCode {
    coding: Array<MRClinicalImpressionSecondExaminationAfterChildbirthCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthCode: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthCode> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionSecondExaminationAfterChildbirthCodeCoding
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthSubject {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthSubject: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthSubject> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthSubject", () =>
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthEncounter {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthEncounter: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthEncounter> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthEncounter", () =>
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthAssessor {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthAssessor: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthAssessor> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthAssessor", () =>
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
export interface MRClinicalImpressionSecondExaminationAfterChildbirthInvestigation {
    code: MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationCode;
    id?: string;
    item?: MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationItem[];
}

export const MRClinicalImpressionSecondExaminationAfterChildbirthInvestigation: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirthInvestigation> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirthInvestigation", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationCode
                }),
                t.partial({
                    id: SCALARString,
                    item: t.array(
                        MRClinicalImpressionSecondExaminationAfterChildbirthInvestigationItem
                    )
                })
            ])
        )
    );

interface MRClinicalImpressionSecondExaminationAfterChildbirth {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionSecondExaminationAfterChildbirthMeta;
    status: "completed";
    code: MRClinicalImpressionSecondExaminationAfterChildbirthCode;
    subject: MRClinicalImpressionSecondExaminationAfterChildbirthSubject;
    encounter: MRClinicalImpressionSecondExaminationAfterChildbirthEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    assessor?: MRClinicalImpressionSecondExaminationAfterChildbirthAssessor;
    investigation?: Array<MRClinicalImpressionSecondExaminationAfterChildbirthInvestigation>;
    note?: Array<Annotation>;
}

const MRClinicalImpressionSecondExaminationAfterChildbirth: t.Type<MRClinicalImpressionSecondExaminationAfterChildbirth> =
    t.recursion("MRClinicalImpressionSecondExaminationAfterChildbirth", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionSecondExaminationAfterChildbirthMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionSecondExaminationAfterChildbirthCode,
                    subject: MRClinicalImpressionSecondExaminationAfterChildbirthSubject,
                    encounter:
                        MRClinicalImpressionSecondExaminationAfterChildbirthEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    assessor:
                        MRClinicalImpressionSecondExaminationAfterChildbirthAssessor,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionSecondExaminationAfterChildbirthInvestigation
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRClinicalImpressionSecondExaminationAfterChildbirth;
