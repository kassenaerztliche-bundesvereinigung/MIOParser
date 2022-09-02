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

import MRImmunizationStatusVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRImmunizationStatus";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Immunization_Status"

/**
 * Content in other Language.
 */
export interface MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationImmunizationStatusCodeCodingDisplay {
    id?: string;
    extension?: MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationImmunizationStatusCodeCodingDisplay: t.Type<MRObservationImmunizationStatusCodeCodingDisplay> =
    t.recursion("MRObservationImmunizationStatusCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationImmunizationStatusCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationImmunizationStatusCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRImmunizationStatusVS;
    id?: string;
    _display?: MRObservationImmunizationStatusCodeCodingDisplay;
    display?: string;
}

export const MRObservationImmunizationStatusCodeCoding: t.Type<MRObservationImmunizationStatusCodeCoding> =
    t.recursion("MRObservationImmunizationStatusCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRImmunizationStatusVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationImmunizationStatusCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationImmunizationStatusMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Immunization_Status|1.1.0">;
    id?: string;
}

export const MRObservationImmunizationStatusMeta: t.Type<MRObservationImmunizationStatusMeta> =
    t.recursion("MRObservationImmunizationStatusMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Immunization_Status|1.1.0"
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
export interface MRObservationImmunizationStatusCode {
    coding: Array<MRObservationImmunizationStatusCodeCoding>;
    id?: string;
}

export const MRObservationImmunizationStatusCode: t.Type<MRObservationImmunizationStatusCode> =
    t.recursion("MRObservationImmunizationStatusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationImmunizationStatusCodeCoding)
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
export interface MRObservationImmunizationStatusSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationImmunizationStatusSubjectReference: t.Type<MRObservationImmunizationStatusSubjectReference> =
    t.recursion("MRObservationImmunizationStatusSubjectReference", () =>
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
export interface MRObservationImmunizationStatusEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationImmunizationStatusEncounterReference: t.Type<MRObservationImmunizationStatusEncounterReference> =
    t.recursion("MRObservationImmunizationStatusEncounterReference", () =>
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
export interface MRObservationImmunizationStatusPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationImmunizationStatusPerformerReference: t.Type<MRObservationImmunizationStatusPerformerReference> =
    t.recursion("MRObservationImmunizationStatusPerformerReference", () =>
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

interface MRObservationImmunizationStatus {
    resourceType: "Observation";
    meta: MRObservationImmunizationStatusMeta;
    status: "final";
    code: MRObservationImmunizationStatusCode;
    subject: MRObservationImmunizationStatusSubjectReference;
    encounter: MRObservationImmunizationStatusEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationImmunizationStatusPerformerReference>;
}

const MRObservationImmunizationStatus: t.Type<MRObservationImmunizationStatus> =
    t.recursion("MRObservationImmunizationStatus", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationImmunizationStatusMeta,
                    status: Literal("final"),
                    code: MRObservationImmunizationStatusCode,
                    subject: MRObservationImmunizationStatusSubjectReference,
                    encounter: MRObservationImmunizationStatusEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationImmunizationStatusPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationImmunizationStatus;
