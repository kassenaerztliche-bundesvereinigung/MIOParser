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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Problem_Of_Hip"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Klinische Zeichen:";
    id?: string;
}

export const CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Klinische Zeichen:")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner.
 */
export interface CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U4ProblemOfHipCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4ProblemOfHipCodeCodingDisplay: t.Type<CMRObservationU3U4ProblemOfHipCodeCodingDisplay> =
    t.recursion("CMRObservationU3U4ProblemOfHipCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4ProblemOfHipCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U4ProblemOfHipCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364501006";
    id?: string;
    _display?: CMRObservationU3U4ProblemOfHipCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4ProblemOfHipCodeCoding: t.Type<CMRObservationU3U4ProblemOfHipCodeCoding> =
    t.recursion("CMRObservationU3U4ProblemOfHipCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364501006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4ProblemOfHipCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U4ProblemOfHipMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Problem_Of_Hip|1.0.1">;
    id?: string;
}

export const CMRObservationU3U4ProblemOfHipMeta: t.Type<CMRObservationU3U4ProblemOfHipMeta> =
    t.recursion("CMRObservationU3U4ProblemOfHipMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Problem_Of_Hip|1.0.1"
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
export interface CMRObservationU3U4ProblemOfHipCode {
    coding: Array<CMRObservationU3U4ProblemOfHipCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4ProblemOfHipCode: t.Type<CMRObservationU3U4ProblemOfHipCode> =
    t.recursion("CMRObservationU3U4ProblemOfHipCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU3U4ProblemOfHipCodeCoding)
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
export interface CMRObservationU3U4ProblemOfHipSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4ProblemOfHipSubject: t.Type<CMRObservationU3U4ProblemOfHipSubject> =
    t.recursion("CMRObservationU3U4ProblemOfHipSubject", () =>
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
export interface CMRObservationU3U4ProblemOfHipEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4ProblemOfHipEncounter: t.Type<CMRObservationU3U4ProblemOfHipEncounter> =
    t.recursion("CMRObservationU3U4ProblemOfHipEncounter", () =>
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
export interface CMRObservationU3U4ProblemOfHipPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4ProblemOfHipPerformer: t.Type<CMRObservationU3U4ProblemOfHipPerformer> =
    t.recursion("CMRObservationU3U4ProblemOfHipPerformer", () =>
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

interface CMRObservationU3U4ProblemOfHip {
    resourceType: "Observation";
    meta: CMRObservationU3U4ProblemOfHipMeta;
    status: "final";
    code: CMRObservationU3U4ProblemOfHipCode;
    subject: CMRObservationU3U4ProblemOfHipSubject;
    encounter: CMRObservationU3U4ProblemOfHipEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U4ProblemOfHipPerformer>;
}

const CMRObservationU3U4ProblemOfHip: t.Type<CMRObservationU3U4ProblemOfHip> =
    t.recursion("CMRObservationU3U4ProblemOfHip", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U4ProblemOfHipMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U4ProblemOfHipCode,
                    subject: CMRObservationU3U4ProblemOfHipSubject,
                    encounter: CMRObservationU3U4ProblemOfHipEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU3U4ProblemOfHipPerformer)
                })
            ])
        )
    );

export default CMRObservationU3U4ProblemOfHip;
