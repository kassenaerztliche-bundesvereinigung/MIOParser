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
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated"

/**
 * Content in other Language.
 */
export interface MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Konsiliaruntersuchung veranlasst";
    id?: string;
}

export const MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Konsiliaruntersuchung veranlasst")
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
export interface MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationConsultationInitiatedCodeCodingDisplay {
    id?: string;
    extension?: MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationConsultationInitiatedCodeCodingDisplay: t.Type<MRObservationConsultationInitiatedCodeCodingDisplay> =
    t.recursion("MRObservationConsultationInitiatedCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationConsultationInitiatedCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationConsultationInitiatedCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "171338009";
    id?: string;
    _display?: MRObservationConsultationInitiatedCodeCodingDisplay;
    display?: string;
}

export const MRObservationConsultationInitiatedCodeCoding: t.Type<MRObservationConsultationInitiatedCodeCoding> =
    t.recursion("MRObservationConsultationInitiatedCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("171338009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationConsultationInitiatedCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationConsultationInitiatedMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.1.0">;
    id?: string;
}

export const MRObservationConsultationInitiatedMeta: t.Type<MRObservationConsultationInitiatedMeta> =
    t.recursion("MRObservationConsultationInitiatedMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.1.0"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface MRObservationConsultationInitiatedCode {
    coding: Array<MRObservationConsultationInitiatedCodeCoding>;
    id?: string;
}

export const MRObservationConsultationInitiatedCode: t.Type<MRObservationConsultationInitiatedCode> =
    t.recursion("MRObservationConsultationInitiatedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationConsultationInitiatedCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface MRObservationConsultationInitiatedSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationConsultationInitiatedSubjectReference: t.Type<MRObservationConsultationInitiatedSubjectReference> =
    t.recursion("MRObservationConsultationInitiatedSubjectReference", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface MRObservationConsultationInitiatedEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationConsultationInitiatedEncounterReference: t.Type<MRObservationConsultationInitiatedEncounterReference> =
    t.recursion("MRObservationConsultationInitiatedEncounterReference", () =>
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface MRObservationConsultationInitiatedPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationConsultationInitiatedPerformerReference: t.Type<MRObservationConsultationInitiatedPerformerReference> =
    t.recursion("MRObservationConsultationInitiatedPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationConsultationInitiated {
    resourceType: "Observation";
    meta: MRObservationConsultationInitiatedMeta;
    status: "final";
    code: MRObservationConsultationInitiatedCode;
    subject: MRObservationConsultationInitiatedSubjectReference;
    encounter: MRObservationConsultationInitiatedEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationConsultationInitiatedPerformerReference>;
}

const MRObservationConsultationInitiated: t.Type<MRObservationConsultationInitiated> =
    t.recursion("MRObservationConsultationInitiated", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationConsultationInitiatedMeta,
                    status: Literal("final"),
                    code: MRObservationConsultationInitiatedCode,
                    subject: MRObservationConsultationInitiatedSubjectReference,
                    encounter: MRObservationConsultationInitiatedEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationConsultationInitiatedPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationConsultationInitiated;
