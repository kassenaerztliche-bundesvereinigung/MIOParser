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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth_Mother"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Wochenbett";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Wochenbett")
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "133906008";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCoding> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210731"
                        ),
                        code: Literal("133906008")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationCode {
    text: "Untersuchungen zur ersten Untersuchung nach Entbindung / Wochenbett";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationCode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationCode> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        text: Literal(
                            "Untersuchungen zur ersten Untersuchung nach Entbindung / Wochenbett"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationItemReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationItemReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationItemReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationItemReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.1.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.1.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum|1.1.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake|1.1.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth_Mother|1.1.0">;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherMeta: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherMeta> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthMotherMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth_Mother|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherCode {
    coding: Array<MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherCode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherCode> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthMotherCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthMotherCodeCoding
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherSubjectReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherSubjectReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherSubjectReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherSubjectReference",
        () =>
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherEncounterReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherEncounterReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherEncounterReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherEncounterReference",
        () =>
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherAssessorReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherAssessorReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherAssessorReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherAssessorReference",
        () =>
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigation {
    code: MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationCode;
    item: Array<MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationItemReference>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigation: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigation> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigation",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        code: MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationCode,
                        item: MinArray(
                            1,
                            MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigationItemReference
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface MRClinicalImpressionFirstExaminationAfterChildbirthMother {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionFirstExaminationAfterChildbirthMotherMeta;
    status: "completed";
    code: MRClinicalImpressionFirstExaminationAfterChildbirthMotherCode;
    subject: MRClinicalImpressionFirstExaminationAfterChildbirthMotherSubjectReference;
    encounter: MRClinicalImpressionFirstExaminationAfterChildbirthMotherEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    assessor?: MRClinicalImpressionFirstExaminationAfterChildbirthMotherAssessorReference;
    investigation?: Array<MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigation>;
    note?: Array<Annotation>;
}

const MRClinicalImpressionFirstExaminationAfterChildbirthMother: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMother> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthMother", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionFirstExaminationAfterChildbirthMotherMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionFirstExaminationAfterChildbirthMotherCode,
                    subject:
                        MRClinicalImpressionFirstExaminationAfterChildbirthMotherSubjectReference,
                    encounter:
                        MRClinicalImpressionFirstExaminationAfterChildbirthMotherEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    assessor:
                        MRClinicalImpressionFirstExaminationAfterChildbirthMotherAssessorReference,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthMotherInvestigation
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRClinicalImpressionFirstExaminationAfterChildbirthMother;
