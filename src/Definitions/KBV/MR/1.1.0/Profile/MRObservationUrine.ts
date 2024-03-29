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

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine"

/**
 * Content in other Language.
 */
export interface MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Urin";
    id?: string;
}

export const MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion("MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Urin")
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
export interface MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationUrineCodeCodingDisplay {
    id?: string;
    extension?: MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationUrineCodeCodingDisplay: t.Type<MRObservationUrineCodeCodingDisplay> =
    t.recursion("MRObservationUrineCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationUrineCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationUrineCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364687002";
    id?: string;
    _display?: MRObservationUrineCodeCodingDisplay;
    display?: string;
}

export const MRObservationUrineCodeCoding: t.Type<MRObservationUrineCodeCoding> =
    t.recursion("MRObservationUrineCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("364687002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationUrineCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationUrineMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine|1.1.0">;
    id?: string;
}

export const MRObservationUrineMeta: t.Type<MRObservationUrineMeta> = t.recursion(
    "MRObservationUrineMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine|1.1.0"
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
export interface MRObservationUrineCode {
    coding: Array<MRObservationUrineCodeCoding>;
    id?: string;
}

export const MRObservationUrineCode: t.Type<MRObservationUrineCode> = t.recursion(
    "MRObservationUrineCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationUrineCodeCoding)
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
export interface MRObservationUrineSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationUrineSubjectReference: t.Type<MRObservationUrineSubjectReference> =
    t.recursion("MRObservationUrineSubjectReference", () =>
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
export interface MRObservationUrineEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationUrineEncounterReference: t.Type<MRObservationUrineEncounterReference> =
    t.recursion("MRObservationUrineEncounterReference", () =>
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
export interface MRObservationUrinePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationUrinePerformerReference: t.Type<MRObservationUrinePerformerReference> =
    t.recursion("MRObservationUrinePerformerReference", () =>
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

interface MRObservationUrine {
    resourceType: "Observation";
    meta: MRObservationUrineMeta;
    status: "final";
    code: MRObservationUrineCode;
    subject: MRObservationUrineSubjectReference;
    encounter: MRObservationUrineEncounterReference;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationUrinePerformerReference>;
}

const MRObservationUrine: t.Type<MRObservationUrine> = t.recursion(
    "MRObservationUrine",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationUrineMeta,
                    status: Literal("final"),
                    code: MRObservationUrineCode,
                    subject: MRObservationUrineSubjectReference,
                    encounter: MRObservationUrineEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationUrinePerformerReference)
                })
            ])
        )
);

export default MRObservationUrine;
