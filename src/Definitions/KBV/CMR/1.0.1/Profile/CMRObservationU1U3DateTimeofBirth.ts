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
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Geburtsdatum und Uhrzeit";
    id?: string;
}

export const CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Geburtsdatum und Uhrzeit")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed",
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
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU1U3DateTimeofBirthCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3DateTimeofBirthCodeCodingDisplay: t.Type<CMRObservationU1U3DateTimeofBirthCodeCodingDisplay> =
    t.recursion("CMRObservationU1U3DateTimeofBirthCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3DateTimeofBirthCodeCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3DateTimeofBirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "184099003+397836004";
    id?: string;
    _display?: CMRObservationU1U3DateTimeofBirthCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3DateTimeofBirthCodeCoding: t.Type<CMRObservationU1U3DateTimeofBirthCodeCoding> =
    t.recursion("CMRObservationU1U3DateTimeofBirthCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("184099003+397836004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3DateTimeofBirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U3DateTimeofBirthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth|1.0.1">;
    id?: string;
}

export const CMRObservationU1U3DateTimeofBirthMeta: t.Type<CMRObservationU1U3DateTimeofBirthMeta> =
    t.recursion("CMRObservationU1U3DateTimeofBirthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Date_Time_of_Birth|1.0.1"
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
export interface CMRObservationU1U3DateTimeofBirthCode {
    coding: Array<CMRObservationU1U3DateTimeofBirthCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3DateTimeofBirthCode: t.Type<CMRObservationU1U3DateTimeofBirthCode> =
    t.recursion("CMRObservationU1U3DateTimeofBirthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1U3DateTimeofBirthCodeCoding)
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
export interface CMRObservationU1U3DateTimeofBirthSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3DateTimeofBirthSubjectReference: t.Type<CMRObservationU1U3DateTimeofBirthSubjectReference> =
    t.recursion("CMRObservationU1U3DateTimeofBirthSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
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
export interface CMRObservationU1U3DateTimeofBirthEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3DateTimeofBirthEncounterReference: t.Type<CMRObservationU1U3DateTimeofBirthEncounterReference> =
    t.recursion("CMRObservationU1U3DateTimeofBirthEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
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
export interface CMRObservationU1U3DateTimeofBirthPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3DateTimeofBirthPerformerReference: t.Type<CMRObservationU1U3DateTimeofBirthPerformerReference> =
    t.recursion("CMRObservationU1U3DateTimeofBirthPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU1U3DateTimeofBirth {
    resourceType: "Observation";
    meta: CMRObservationU1U3DateTimeofBirthMeta;
    status: "final";
    code: CMRObservationU1U3DateTimeofBirthCode;
    subject: CMRObservationU1U3DateTimeofBirthSubjectReference;
    encounter: CMRObservationU1U3DateTimeofBirthEncounterReference;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3DateTimeofBirthPerformerReference>;
}

const CMRObservationU1U3DateTimeofBirth: t.Type<CMRObservationU1U3DateTimeofBirth> =
    t.recursion("CMRObservationU1U3DateTimeofBirth", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3DateTimeofBirthMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3DateTimeofBirthCode,
                    subject: CMRObservationU1U3DateTimeofBirthSubjectReference,
                    encounter: CMRObservationU1U3DateTimeofBirthEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U3DateTimeofBirthPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU1U3DateTimeofBirth;
