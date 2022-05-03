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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Hinweise auf Auffälligkeiten";
    id?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Hinweise auf Auffälligkeiten")
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
export interface CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplay: t.Type<CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplay> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U6IndicationforAbnormalityCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    id?: string;
    _display?: CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityCodeCoding: t.Type<CMRObservationU3U6IndicationforAbnormalityCodeCoding> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalityCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("406207000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U6IndicationforAbnormalityCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U6IndicationforAbnormalityMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.1">;
    id?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityMeta: t.Type<CMRObservationU3U6IndicationforAbnormalityMeta> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalityMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.1"
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
export interface CMRObservationU3U6IndicationforAbnormalityCode {
    coding: Array<CMRObservationU3U6IndicationforAbnormalityCodeCoding>;
    id?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityCode: t.Type<CMRObservationU3U6IndicationforAbnormalityCode> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalityCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U6IndicationforAbnormalityCodeCoding
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
export interface CMRObservationU3U6IndicationforAbnormalitySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3U6IndicationforAbnormalitySubject: t.Type<CMRObservationU3U6IndicationforAbnormalitySubject> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalitySubject", () =>
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
export interface CMRObservationU3U6IndicationforAbnormalityEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityEncounter: t.Type<CMRObservationU3U6IndicationforAbnormalityEncounter> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalityEncounter", () =>
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
export interface CMRObservationU3U6IndicationforAbnormalityPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3U6IndicationforAbnormalityPerformer: t.Type<CMRObservationU3U6IndicationforAbnormalityPerformer> =
    t.recursion("CMRObservationU3U6IndicationforAbnormalityPerformer", () =>
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

interface CMRObservationU3U6IndicationforAbnormality {
    resourceType: "Observation";
    meta: CMRObservationU3U6IndicationforAbnormalityMeta;
    status: "final";
    code: CMRObservationU3U6IndicationforAbnormalityCode;
    subject: CMRObservationU3U6IndicationforAbnormalitySubject;
    encounter: CMRObservationU3U6IndicationforAbnormalityEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U6IndicationforAbnormalityPerformer>;
}

const CMRObservationU3U6IndicationforAbnormality: t.Type<CMRObservationU3U6IndicationforAbnormality> =
    t.recursion("CMRObservationU3U6IndicationforAbnormality", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U6IndicationforAbnormalityMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U6IndicationforAbnormalityCode,
                    subject: CMRObservationU3U6IndicationforAbnormalitySubject,
                    encounter: CMRObservationU3U6IndicationforAbnormalityEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU3U6IndicationforAbnormalityPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU3U6IndicationforAbnormality;
