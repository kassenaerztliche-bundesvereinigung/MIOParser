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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth"

/**
 * Content in other Language.
 */
export interface MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Extern entbunden";
    id?: string;
}

export const MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Extern entbunden")
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
export interface MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExternalBirthCodeCodingDisplay {
    id?: string;
    extension?: MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationExternalBirthCodeCodingDisplay: t.Type<MRObservationExternalBirthCodeCodingDisplay> =
    t.recursion("MRObservationExternalBirthCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExternalBirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "60059000";
    id?: string;
    _display?: MRObservationExternalBirthCodeCodingDisplay;
    display?: string;
}

export const MRObservationExternalBirthCodeCoding: t.Type<MRObservationExternalBirthCodeCoding> =
    t.recursion("MRObservationExternalBirthCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("60059000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExternalBirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationExternalBirthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.1.0">;
    id?: string;
}

export const MRObservationExternalBirthMeta: t.Type<MRObservationExternalBirthMeta> =
    t.recursion("MRObservationExternalBirthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.1.0"
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
export interface MRObservationExternalBirthCode {
    coding: Array<MRObservationExternalBirthCodeCoding>;
    id?: string;
}

export const MRObservationExternalBirthCode: t.Type<MRObservationExternalBirthCode> =
    t.recursion("MRObservationExternalBirthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationExternalBirthCodeCoding)
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
export interface MRObservationExternalBirthSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationExternalBirthSubjectReference: t.Type<MRObservationExternalBirthSubjectReference> =
    t.recursion("MRObservationExternalBirthSubjectReference", () =>
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
export interface MRObservationExternalBirthEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationExternalBirthEncounterReference: t.Type<MRObservationExternalBirthEncounterReference> =
    t.recursion("MRObservationExternalBirthEncounterReference", () =>
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
export interface MRObservationExternalBirthPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationExternalBirthPerformerReference: t.Type<MRObservationExternalBirthPerformerReference> =
    t.recursion("MRObservationExternalBirthPerformerReference", () =>
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

interface MRObservationExternalBirth {
    resourceType: "Observation";
    meta: MRObservationExternalBirthMeta;
    status: "final";
    code: MRObservationExternalBirthCode;
    subject: MRObservationExternalBirthSubjectReference;
    encounter: MRObservationExternalBirthEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationExternalBirthPerformerReference>;
}

const MRObservationExternalBirth: t.Type<MRObservationExternalBirth> = t.recursion(
    "MRObservationExternalBirth",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationExternalBirthMeta,
                    status: Literal("final"),
                    code: MRObservationExternalBirthCode,
                    subject: MRObservationExternalBirthSubjectReference,
                    encounter: MRObservationExternalBirthEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationExternalBirthPerformerReference)
                })
            ])
        )
);

export default MRObservationExternalBirth;
