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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy"

/**
 * Content in other Language.
 */
export interface MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Angaben zu vorangegangenen Schwangerschaften";
    id?: string;
}

export const MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Angaben zu vorangegangenen Schwangerschaften"
                        )
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
export interface MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationPreviousPregnancyCodeCodingDisplay {
    id?: string;
    extension?: MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationPreviousPregnancyCodeCodingDisplay: t.Type<MRObservationPreviousPregnancyCodeCodingDisplay> =
    t.recursion("MRObservationPreviousPregnancyCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationPreviousPregnancyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "127362006";
    id?: string;
    _display?: MRObservationPreviousPregnancyCodeCodingDisplay;
    display?: string;
}

export const MRObservationPreviousPregnancyCodeCoding: t.Type<MRObservationPreviousPregnancyCodeCoding> =
    t.recursion("MRObservationPreviousPregnancyCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("127362006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPreviousPregnancyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPreviousPregnancyMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy|1.1.0">;
    id?: string;
}

export const MRObservationPreviousPregnancyMeta: t.Type<MRObservationPreviousPregnancyMeta> =
    t.recursion("MRObservationPreviousPregnancyMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy|1.1.0"
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
export interface MRObservationPreviousPregnancyCode {
    coding: Array<MRObservationPreviousPregnancyCodeCoding>;
    id?: string;
}

export const MRObservationPreviousPregnancyCode: t.Type<MRObservationPreviousPregnancyCode> =
    t.recursion("MRObservationPreviousPregnancyCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPreviousPregnancyCodeCoding)
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
export interface MRObservationPreviousPregnancySubject {
    reference: string;
    id?: string;
}

export const MRObservationPreviousPregnancySubject: t.Type<MRObservationPreviousPregnancySubject> =
    t.recursion("MRObservationPreviousPregnancySubject", () =>
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
export interface MRObservationPreviousPregnancyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPreviousPregnancyEncounter: t.Type<MRObservationPreviousPregnancyEncounter> =
    t.recursion("MRObservationPreviousPregnancyEncounter", () =>
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
export interface MRObservationPreviousPregnancyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationPreviousPregnancyPerformer: t.Type<MRObservationPreviousPregnancyPerformer> =
    t.recursion("MRObservationPreviousPregnancyPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationPreviousPregnancy {
    resourceType: "Observation";
    meta: MRObservationPreviousPregnancyMeta;
    status: "final";
    code: MRObservationPreviousPregnancyCode;
    subject: MRObservationPreviousPregnancySubject;
    encounter: MRObservationPreviousPregnancyEncounter;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPreviousPregnancyPerformer>;
    note?: Array<Annotation>;
}

const MRObservationPreviousPregnancy: t.Type<MRObservationPreviousPregnancy> =
    t.recursion("MRObservationPreviousPregnancy", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPreviousPregnancyMeta,
                    status: Literal("final"),
                    code: MRObservationPreviousPregnancyCode,
                    subject: MRObservationPreviousPregnancySubject,
                    encounter: MRObservationPreviousPregnancyEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationPreviousPregnancyPerformer),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRObservationPreviousPregnancy;
