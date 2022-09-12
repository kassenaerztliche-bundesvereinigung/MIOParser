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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed"

/**
 * Content in other Language.
 */
export interface MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "U3 durchgeführt";
    id?: string;
}

export const MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("U3 durchgeführt")
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
export interface MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationU3PerformedCodeCodingDisplay {
    id?: string;
    extension?: MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationU3PerformedCodeCodingDisplay: t.Type<MRObservationU3PerformedCodeCodingDisplay> =
    t.recursion("MRObservationU3PerformedCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationU3PerformedCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "444084004";
    id?: string;
    _display?: MRObservationU3PerformedCodeCodingDisplay;
    display?: string;
}

export const MRObservationU3PerformedCodeCoding: t.Type<MRObservationU3PerformedCodeCoding> =
    t.recursion("MRObservationU3PerformedCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("444084004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationU3PerformedCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationU3PerformedMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.1.0">;
    id?: string;
}

export const MRObservationU3PerformedMeta: t.Type<MRObservationU3PerformedMeta> =
    t.recursion("MRObservationU3PerformedMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.1.0"
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
export interface MRObservationU3PerformedCode {
    coding: Array<MRObservationU3PerformedCodeCoding>;
    id?: string;
}

export const MRObservationU3PerformedCode: t.Type<MRObservationU3PerformedCode> =
    t.recursion("MRObservationU3PerformedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationU3PerformedCodeCoding)
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
export interface MRObservationU3PerformedSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationU3PerformedSubjectReference: t.Type<MRObservationU3PerformedSubjectReference> =
    t.recursion("MRObservationU3PerformedSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRObservationU3PerformedEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationU3PerformedEncounterReference: t.Type<MRObservationU3PerformedEncounterReference> =
    t.recursion("MRObservationU3PerformedEncounterReference", () =>
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
export interface MRObservationU3PerformedPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationU3PerformedPerformerReference: t.Type<MRObservationU3PerformedPerformerReference> =
    t.recursion("MRObservationU3PerformedPerformerReference", () =>
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

interface MRObservationU3Performed {
    resourceType: "Observation";
    meta: MRObservationU3PerformedMeta;
    status: "final";
    code: MRObservationU3PerformedCode;
    subject: MRObservationU3PerformedSubjectReference;
    encounter: MRObservationU3PerformedEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationU3PerformedPerformerReference>;
}

const MRObservationU3Performed: t.Type<MRObservationU3Performed> = t.recursion(
    "MRObservationU3Performed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationU3PerformedMeta,
                    status: Literal("final"),
                    code: MRObservationU3PerformedCode,
                    subject: MRObservationU3PerformedSubjectReference,
                    encounter: MRObservationU3PerformedEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationU3PerformedPerformerReference)
                })
            ])
        )
);

export default MRObservationU3Performed;
