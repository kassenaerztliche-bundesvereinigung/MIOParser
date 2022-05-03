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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Trauma_Of_Fetus"

/**
 * Content in other Language.
 */
export interface CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Traumata:";
    id?: string;
}

export const CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Traumata:")
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
export interface CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1BirthTraumaOfFetusCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1BirthTraumaOfFetusCodeCodingDisplay: t.Type<CMRObservationU1BirthTraumaOfFetusCodeCodingDisplay> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1BirthTraumaOfFetusCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "56110009";
    id?: string;
    _display?: CMRObservationU1BirthTraumaOfFetusCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1BirthTraumaOfFetusCodeCoding: t.Type<CMRObservationU1BirthTraumaOfFetusCodeCoding> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("56110009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1BirthTraumaOfFetusCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1BirthTraumaOfFetusMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Trauma_Of_Fetus|1.0.1">;
    id?: string;
}

export const CMRObservationU1BirthTraumaOfFetusMeta: t.Type<CMRObservationU1BirthTraumaOfFetusMeta> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Trauma_Of_Fetus|1.0.1"
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
export interface CMRObservationU1BirthTraumaOfFetusCode {
    coding: Array<CMRObservationU1BirthTraumaOfFetusCodeCoding>;
    id?: string;
}

export const CMRObservationU1BirthTraumaOfFetusCode: t.Type<CMRObservationU1BirthTraumaOfFetusCode> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1BirthTraumaOfFetusCodeCoding
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
export interface CMRObservationU1BirthTraumaOfFetusSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1BirthTraumaOfFetusSubject: t.Type<CMRObservationU1BirthTraumaOfFetusSubject> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusSubject", () =>
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
export interface CMRObservationU1BirthTraumaOfFetusEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1BirthTraumaOfFetusEncounter: t.Type<CMRObservationU1BirthTraumaOfFetusEncounter> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusEncounter", () =>
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
export interface CMRObservationU1BirthTraumaOfFetusPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1BirthTraumaOfFetusPerformer: t.Type<CMRObservationU1BirthTraumaOfFetusPerformer> =
    t.recursion("CMRObservationU1BirthTraumaOfFetusPerformer", () =>
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

interface CMRObservationU1BirthTraumaOfFetus {
    resourceType: "Observation";
    meta: CMRObservationU1BirthTraumaOfFetusMeta;
    status: "final";
    code: CMRObservationU1BirthTraumaOfFetusCode;
    subject: CMRObservationU1BirthTraumaOfFetusSubject;
    encounter: CMRObservationU1BirthTraumaOfFetusEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1BirthTraumaOfFetusPerformer>;
}

const CMRObservationU1BirthTraumaOfFetus: t.Type<CMRObservationU1BirthTraumaOfFetus> =
    t.recursion("CMRObservationU1BirthTraumaOfFetus", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1BirthTraumaOfFetusMeta,
                    status: Literal("final"),
                    code: CMRObservationU1BirthTraumaOfFetusCode,
                    subject: CMRObservationU1BirthTraumaOfFetusSubject,
                    encounter: CMRObservationU1BirthTraumaOfFetusEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1BirthTraumaOfFetusPerformer)
                })
            ])
        )
    );

export default CMRObservationU1BirthTraumaOfFetus;
