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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic"

/**
 * Content in other Language.
 */
export interface MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Vor Entbindung in Klinik vorgestellt";
    id?: string;
}

export const MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Vor Entbindung in Klinik vorgestellt")
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
export interface MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationPresentationAtBirthClinicCodeCodingDisplay {
    id?: string;
    extension?: MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationPresentationAtBirthClinicCodeCodingDisplay: t.Type<MRObservationPresentationAtBirthClinicCodeCodingDisplay> =
    t.recursion("MRObservationPresentationAtBirthClinicCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationPresentationAtBirthClinicCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "424441002";
    id?: string;
    _display?: MRObservationPresentationAtBirthClinicCodeCodingDisplay;
    display?: string;
}

export const MRObservationPresentationAtBirthClinicCodeCoding: t.Type<MRObservationPresentationAtBirthClinicCodeCoding> =
    t.recursion("MRObservationPresentationAtBirthClinicCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("424441002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPresentationAtBirthClinicCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPresentationAtBirthClinicMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.1.0">;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicMeta: t.Type<MRObservationPresentationAtBirthClinicMeta> =
    t.recursion("MRObservationPresentationAtBirthClinicMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.1.0"
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
export interface MRObservationPresentationAtBirthClinicCode {
    coding: Array<MRObservationPresentationAtBirthClinicCodeCoding>;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicCode: t.Type<MRObservationPresentationAtBirthClinicCode> =
    t.recursion("MRObservationPresentationAtBirthClinicCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationPresentationAtBirthClinicCodeCoding
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
export interface MRObservationPresentationAtBirthClinicSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicSubjectReference: t.Type<MRObservationPresentationAtBirthClinicSubjectReference> =
    t.recursion("MRObservationPresentationAtBirthClinicSubjectReference", () =>
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
export interface MRObservationPresentationAtBirthClinicEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicEncounterReference: t.Type<MRObservationPresentationAtBirthClinicEncounterReference> =
    t.recursion("MRObservationPresentationAtBirthClinicEncounterReference", () =>
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
export interface MRObservationPresentationAtBirthClinicPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicPerformerReference: t.Type<MRObservationPresentationAtBirthClinicPerformerReference> =
    t.recursion("MRObservationPresentationAtBirthClinicPerformerReference", () =>
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

interface MRObservationPresentationAtBirthClinic {
    resourceType: "Observation";
    meta: MRObservationPresentationAtBirthClinicMeta;
    status: "final";
    code: MRObservationPresentationAtBirthClinicCode;
    subject: MRObservationPresentationAtBirthClinicSubjectReference;
    encounter: MRObservationPresentationAtBirthClinicEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPresentationAtBirthClinicPerformerReference>;
}

const MRObservationPresentationAtBirthClinic: t.Type<MRObservationPresentationAtBirthClinic> =
    t.recursion("MRObservationPresentationAtBirthClinic", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPresentationAtBirthClinicMeta,
                    status: Literal("final"),
                    code: MRObservationPresentationAtBirthClinicCode,
                    subject: MRObservationPresentationAtBirthClinicSubjectReference,
                    encounter: MRObservationPresentationAtBirthClinicEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationPresentationAtBirthClinicPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationPresentationAtBirthClinic;
