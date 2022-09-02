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
    MinArray,
    MaxArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Initial_Examination"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anamnese und allgemeine Befunde/Erste Vorsorge-Untersuchung";
    id?: string;
}

export const MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Anamnese und allgemeine Befunde/Erste Vorsorge-Untersuchung"
                        )
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
export interface MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionInitialExaminationCodeCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionInitialExaminationCodeCodingDisplay: t.Type<MRClinicalImpressionInitialExaminationCodeCodingDisplay> =
    t.recursion("MRClinicalImpressionInitialExaminationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRClinicalImpressionInitialExaminationCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionInitialExaminationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "417662000+271336007";
    id?: string;
    _display?: MRClinicalImpressionInitialExaminationCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionInitialExaminationCodeCoding: t.Type<MRClinicalImpressionInitialExaminationCodeCoding> =
    t.recursion("MRClinicalImpressionInitialExaminationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("417662000+271336007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRClinicalImpressionInitialExaminationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionInitialExaminationInvestigationCode {
    text: "Anamnese und allgemeine Befunde/Erste Vorsorge-Untersuchung";
    id?: string;
}

export const MRClinicalImpressionInitialExaminationInvestigationCode: t.Type<MRClinicalImpressionInitialExaminationInvestigationCode> =
    t.recursion("MRClinicalImpressionInitialExaminationInvestigationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal(
                        "Anamnese und allgemeine Befunde/Erste Vorsorge-Untersuchung"
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
export interface MRClinicalImpressionInitialExaminationInvestigationItemReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationInvestigationItemReference: t.Type<MRClinicalImpressionInitialExaminationInvestigationItemReference> =
    t.recursion("MRClinicalImpressionInitialExaminationInvestigationItemReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
 */
export interface MRClinicalImpressionInitialExaminationFindingItemReferenceReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationFindingItemReferenceReference: t.Type<MRClinicalImpressionInitialExaminationFindingItemReferenceReference> =
    t.recursion(
        "MRClinicalImpressionInitialExaminationFindingItemReferenceReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk|1.1.0"
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
export interface MRClinicalImpressionInitialExaminationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Initial_Examination|1.1.0">;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationMeta: t.Type<MRClinicalImpressionInitialExaminationMeta> =
    t.recursion("MRClinicalImpressionInitialExaminationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Initial_Examination|1.1.0"
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
export interface MRClinicalImpressionInitialExaminationCode {
    coding: Array<MRClinicalImpressionInitialExaminationCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationCode: t.Type<MRClinicalImpressionInitialExaminationCode> =
    t.recursion("MRClinicalImpressionInitialExaminationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionInitialExaminationCodeCoding
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
export interface MRClinicalImpressionInitialExaminationSubjectReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationSubjectReference: t.Type<MRClinicalImpressionInitialExaminationSubjectReference> =
    t.recursion("MRClinicalImpressionInitialExaminationSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRClinicalImpressionInitialExaminationEncounterReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationEncounterReference: t.Type<MRClinicalImpressionInitialExaminationEncounterReference> =
    t.recursion("MRClinicalImpressionInitialExaminationEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRClinicalImpressionInitialExaminationAssessorReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationAssessorReference: t.Type<MRClinicalImpressionInitialExaminationAssessorReference> =
    t.recursion("MRClinicalImpressionInitialExaminationAssessorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
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
export interface MRClinicalImpressionInitialExaminationInvestigation {
    code: MRClinicalImpressionInitialExaminationInvestigationCode;
    item: Array<MRClinicalImpressionInitialExaminationInvestigationItemReference>;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationInvestigation: t.Type<MRClinicalImpressionInitialExaminationInvestigation> =
    t.recursion("MRClinicalImpressionInitialExaminationInvestigation", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRClinicalImpressionInitialExaminationInvestigationCode,
                    item: MinArray(
                        1,
                        MRClinicalImpressionInitialExaminationInvestigationItemReference
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export interface MRClinicalImpressionInitialExaminationFinding {
    itemReference: MRClinicalImpressionInitialExaminationFindingItemReferenceReference;
    id?: string;
}

export const MRClinicalImpressionInitialExaminationFinding: t.Type<MRClinicalImpressionInitialExaminationFinding> =
    t.recursion("MRClinicalImpressionInitialExaminationFinding", () =>
        Excess(
            t.intersection([
                t.type({
                    itemReference:
                        MRClinicalImpressionInitialExaminationFindingItemReferenceReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRClinicalImpressionInitialExamination {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionInitialExaminationMeta;
    status: "completed";
    code: MRClinicalImpressionInitialExaminationCode;
    subject: MRClinicalImpressionInitialExaminationSubjectReference;
    encounter: MRClinicalImpressionInitialExaminationEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    assessor?: MRClinicalImpressionInitialExaminationAssessorReference;
    investigation?: Array<MRClinicalImpressionInitialExaminationInvestigation>;
    finding?: Array<MRClinicalImpressionInitialExaminationFinding>;
    note?: Array<Annotation>;
}

const MRClinicalImpressionInitialExamination: t.Type<MRClinicalImpressionInitialExamination> =
    t.recursion("MRClinicalImpressionInitialExamination", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionInitialExaminationMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionInitialExaminationCode,
                    subject: MRClinicalImpressionInitialExaminationSubjectReference,
                    encounter: MRClinicalImpressionInitialExaminationEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    assessor: MRClinicalImpressionInitialExaminationAssessorReference,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionInitialExaminationInvestigation
                    ),
                    finding: MaxArray(1, MRClinicalImpressionInitialExaminationFinding),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRClinicalImpressionInitialExamination;
