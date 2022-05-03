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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar"

/**
 * Content in other Language.
 */
export interface MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Zucker";
    id?: string;
}

export const MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Zucker")
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
export interface MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationUrineSugarCodeCodingDisplay {
    id?: string;
    extension?: MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationUrineSugarCodeCodingDisplay: t.Type<MRObservationUrineSugarCodeCodingDisplay> =
    t.recursion("MRObservationUrineSugarCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationUrineSugarCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationUrineSugarCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "268556000";
    id?: string;
    _display?: MRObservationUrineSugarCodeCodingDisplay;
    display?: string;
}

export const MRObservationUrineSugarCodeCoding: t.Type<MRObservationUrineSugarCodeCoding> =
    t.recursion("MRObservationUrineSugarCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("268556000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationUrineSugarCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationUrineSugarMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.1.0">;
    id?: string;
}

export const MRObservationUrineSugarMeta: t.Type<MRObservationUrineSugarMeta> =
    t.recursion("MRObservationUrineSugarMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.1.0"
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
export interface MRObservationUrineSugarCode {
    coding: Array<MRObservationUrineSugarCodeCoding>;
    id?: string;
}

export const MRObservationUrineSugarCode: t.Type<MRObservationUrineSugarCode> =
    t.recursion("MRObservationUrineSugarCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationUrineSugarCodeCoding)
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
export interface MRObservationUrineSugarSubject {
    reference: string;
    id?: string;
}

export const MRObservationUrineSugarSubject: t.Type<MRObservationUrineSugarSubject> =
    t.recursion("MRObservationUrineSugarSubject", () =>
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
export interface MRObservationUrineSugarEncounter {
    reference: string;
    id?: string;
}

export const MRObservationUrineSugarEncounter: t.Type<MRObservationUrineSugarEncounter> =
    t.recursion("MRObservationUrineSugarEncounter", () =>
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
export interface MRObservationUrineSugarPerformer {
    reference: string;
    id?: string;
}

export const MRObservationUrineSugarPerformer: t.Type<MRObservationUrineSugarPerformer> =
    t.recursion("MRObservationUrineSugarPerformer", () =>
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

interface MRObservationUrineSugar {
    resourceType: "Observation";
    meta: MRObservationUrineSugarMeta;
    status: "final";
    code: MRObservationUrineSugarCode;
    subject: MRObservationUrineSugarSubject;
    encounter: MRObservationUrineSugarEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationUrineSugarPerformer>;
}

const MRObservationUrineSugar: t.Type<MRObservationUrineSugar> = t.recursion(
    "MRObservationUrineSugar",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationUrineSugarMeta,
                    status: Literal("final"),
                    code: MRObservationUrineSugarCode,
                    subject: MRObservationUrineSugarSubject,
                    encounter: MRObservationUrineSugarEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationUrineSugarPerformer)
                })
            ])
        )
);

export default MRObservationUrineSugar;
