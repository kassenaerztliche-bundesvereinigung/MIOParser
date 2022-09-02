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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups"

/**
 * Content in other Language.
 */
export interface MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anzahl der Vorsorgeuntersuchungen";
    id?: string;
}

export const MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Anzahl der Vorsorgeuntersuchungen")
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
export interface MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationNumberOfCheckupsCodeCodingDisplay {
    id?: string;
    extension?: MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationNumberOfCheckupsCodeCodingDisplay: t.Type<MRObservationNumberOfCheckupsCodeCodingDisplay> =
    t.recursion("MRObservationNumberOfCheckupsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationNumberOfCheckupsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "3401000175105";
    id?: string;
    _display?: MRObservationNumberOfCheckupsCodeCodingDisplay;
    display?: string;
}

export const MRObservationNumberOfCheckupsCodeCoding: t.Type<MRObservationNumberOfCheckupsCodeCoding> =
    t.recursion("MRObservationNumberOfCheckupsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("3401000175105")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationNumberOfCheckupsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationNumberOfCheckupsValueQuantity {
    value: number;
    system: "http://unitsofmeasure.org";
    code: "1";
    id?: string;
}

export const MRObservationNumberOfCheckupsValueQuantity: t.Type<MRObservationNumberOfCheckupsValueQuantity> =
    t.recursion("MRObservationNumberOfCheckupsValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("1")
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
export interface MRObservationNumberOfCheckupsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.1.0">;
    id?: string;
}

export const MRObservationNumberOfCheckupsMeta: t.Type<MRObservationNumberOfCheckupsMeta> =
    t.recursion("MRObservationNumberOfCheckupsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.1.0"
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
export interface MRObservationNumberOfCheckupsCode {
    coding: Array<MRObservationNumberOfCheckupsCodeCoding>;
    id?: string;
}

export const MRObservationNumberOfCheckupsCode: t.Type<MRObservationNumberOfCheckupsCode> =
    t.recursion("MRObservationNumberOfCheckupsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationNumberOfCheckupsCodeCoding)
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
export interface MRObservationNumberOfCheckupsSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationNumberOfCheckupsSubjectReference: t.Type<MRObservationNumberOfCheckupsSubjectReference> =
    t.recursion("MRObservationNumberOfCheckupsSubjectReference", () =>
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
export interface MRObservationNumberOfCheckupsEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationNumberOfCheckupsEncounterReference: t.Type<MRObservationNumberOfCheckupsEncounterReference> =
    t.recursion("MRObservationNumberOfCheckupsEncounterReference", () =>
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
export interface MRObservationNumberOfCheckupsPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationNumberOfCheckupsPerformerReference: t.Type<MRObservationNumberOfCheckupsPerformerReference> =
    t.recursion("MRObservationNumberOfCheckupsPerformerReference", () =>
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

interface MRObservationNumberOfCheckups {
    resourceType: "Observation";
    meta: MRObservationNumberOfCheckupsMeta;
    status: "final";
    code: MRObservationNumberOfCheckupsCode;
    subject: MRObservationNumberOfCheckupsSubjectReference;
    encounter: MRObservationNumberOfCheckupsEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationNumberOfCheckupsValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationNumberOfCheckupsPerformerReference>;
}

const MRObservationNumberOfCheckups: t.Type<MRObservationNumberOfCheckups> = t.recursion(
    "MRObservationNumberOfCheckups",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationNumberOfCheckupsMeta,
                    status: Literal("final"),
                    code: MRObservationNumberOfCheckupsCode,
                    subject: MRObservationNumberOfCheckupsSubjectReference,
                    encounter: MRObservationNumberOfCheckupsEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationNumberOfCheckupsValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationNumberOfCheckupsPerformerReference
                    )
                })
            ])
        )
);

export default MRObservationNumberOfCheckups;
