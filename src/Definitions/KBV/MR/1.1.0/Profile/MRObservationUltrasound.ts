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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Ultrasound"

/**
 * Content in other Language.
 */
export interface MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ultraschall";
    id?: string;
}

export const MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Ultraschall")
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
export interface MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationUltrasoundCodeCodingDisplay {
    id?: string;
    extension?: MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationUltrasoundCodeCodingDisplay: t.Type<MRObservationUltrasoundCodeCodingDisplay> =
    t.recursion("MRObservationUltrasoundCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationUltrasoundCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationUltrasoundCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "268445003";
    id?: string;
    _display?: MRObservationUltrasoundCodeCodingDisplay;
    display?: string;
}

export const MRObservationUltrasoundCodeCoding: t.Type<MRObservationUltrasoundCodeCoding> =
    t.recursion("MRObservationUltrasoundCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("268445003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationUltrasoundCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationUltrasoundMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Ultrasound|1.1.0">;
    id?: string;
}

export const MRObservationUltrasoundMeta: t.Type<MRObservationUltrasoundMeta> =
    t.recursion("MRObservationUltrasoundMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Ultrasound|1.1.0"
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
export interface MRObservationUltrasoundCode {
    coding: Array<MRObservationUltrasoundCodeCoding>;
    id?: string;
}

export const MRObservationUltrasoundCode: t.Type<MRObservationUltrasoundCode> =
    t.recursion("MRObservationUltrasoundCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationUltrasoundCodeCoding)
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
export interface MRObservationUltrasoundSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationUltrasoundSubjectReference: t.Type<MRObservationUltrasoundSubjectReference> =
    t.recursion("MRObservationUltrasoundSubjectReference", () =>
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
export interface MRObservationUltrasoundEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationUltrasoundEncounterReference: t.Type<MRObservationUltrasoundEncounterReference> =
    t.recursion("MRObservationUltrasoundEncounterReference", () =>
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
export interface MRObservationUltrasoundPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationUltrasoundPerformerReference: t.Type<MRObservationUltrasoundPerformerReference> =
    t.recursion("MRObservationUltrasoundPerformerReference", () =>
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

interface MRObservationUltrasound {
    resourceType: "Observation";
    meta: MRObservationUltrasoundMeta;
    status: "final";
    code: MRObservationUltrasoundCode;
    subject: MRObservationUltrasoundSubjectReference;
    encounter: MRObservationUltrasoundEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationUltrasoundPerformerReference>;
    note?: Array<Annotation>;
}

const MRObservationUltrasound: t.Type<MRObservationUltrasound> = t.recursion(
    "MRObservationUltrasound",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationUltrasoundMeta,
                    status: Literal("final"),
                    code: MRObservationUltrasoundCode,
                    subject: MRObservationUltrasoundSubjectReference,
                    encounter: MRObservationUltrasoundEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationUltrasoundPerformerReference),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRObservationUltrasound;
