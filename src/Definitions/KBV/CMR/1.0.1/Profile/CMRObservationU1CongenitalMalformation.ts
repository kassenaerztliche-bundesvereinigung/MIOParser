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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Congenital_Malformation"

/**
 * Content in other Language.
 */
export interface CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Fehlbildungen:";
    id?: string;
}

export const CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Fehlbildungen:")
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
export interface CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1CongenitalMalformationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1CongenitalMalformationCodeCodingDisplay: t.Type<CMRObservationU1CongenitalMalformationCodeCodingDisplay> =
    t.recursion("CMRObservationU1CongenitalMalformationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1CongenitalMalformationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "276654001";
    id?: string;
    _display?: CMRObservationU1CongenitalMalformationCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1CongenitalMalformationCodeCoding: t.Type<CMRObservationU1CongenitalMalformationCodeCoding> =
    t.recursion("CMRObservationU1CongenitalMalformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("276654001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1CongenitalMalformationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1CongenitalMalformationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Congenital_Malformation|1.0.1">;
    id?: string;
}

export const CMRObservationU1CongenitalMalformationMeta: t.Type<CMRObservationU1CongenitalMalformationMeta> =
    t.recursion("CMRObservationU1CongenitalMalformationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Congenital_Malformation|1.0.1"
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
export interface CMRObservationU1CongenitalMalformationCode {
    coding: Array<CMRObservationU1CongenitalMalformationCodeCoding>;
    id?: string;
}

export const CMRObservationU1CongenitalMalformationCode: t.Type<CMRObservationU1CongenitalMalformationCode> =
    t.recursion("CMRObservationU1CongenitalMalformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1CongenitalMalformationCodeCoding
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
export interface CMRObservationU1CongenitalMalformationSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1CongenitalMalformationSubject: t.Type<CMRObservationU1CongenitalMalformationSubject> =
    t.recursion("CMRObservationU1CongenitalMalformationSubject", () =>
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
export interface CMRObservationU1CongenitalMalformationEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1CongenitalMalformationEncounter: t.Type<CMRObservationU1CongenitalMalformationEncounter> =
    t.recursion("CMRObservationU1CongenitalMalformationEncounter", () =>
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
export interface CMRObservationU1CongenitalMalformationPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1CongenitalMalformationPerformer: t.Type<CMRObservationU1CongenitalMalformationPerformer> =
    t.recursion("CMRObservationU1CongenitalMalformationPerformer", () =>
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

interface CMRObservationU1CongenitalMalformation {
    resourceType: "Observation";
    meta: CMRObservationU1CongenitalMalformationMeta;
    status: "final";
    code: CMRObservationU1CongenitalMalformationCode;
    subject: CMRObservationU1CongenitalMalformationSubject;
    encounter: CMRObservationU1CongenitalMalformationEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1CongenitalMalformationPerformer>;
}

const CMRObservationU1CongenitalMalformation: t.Type<CMRObservationU1CongenitalMalformation> =
    t.recursion("CMRObservationU1CongenitalMalformation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1CongenitalMalformationMeta,
                    status: Literal("final"),
                    code: CMRObservationU1CongenitalMalformationCode,
                    subject: CMRObservationU1CongenitalMalformationSubject,
                    encounter: CMRObservationU1CongenitalMalformationEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1CongenitalMalformationPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU1CongenitalMalformation;
