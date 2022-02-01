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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRFoetalPositionVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRFoetalPosition";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
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
export interface CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3FoetalPositionCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3FoetalPositionCodeCodingDisplay: t.Type<CMRObservationU1U3FoetalPositionCodeCodingDisplay> =
    t.recursion("CMRObservationU1U3FoetalPositionCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3FoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3FoetalPositionCodeCoding {
    system: string;
    version: string;
    code: CMRFoetalPositionVS;
    id?: string;
    _display?: CMRObservationU1U3FoetalPositionCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3FoetalPositionCodeCoding: t.Type<CMRObservationU1U3FoetalPositionCodeCoding> =
    t.recursion("CMRObservationU1U3FoetalPositionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRFoetalPositionVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3FoetalPositionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U3FoetalPositionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position|1.0.1">;
    id?: string;
}

export const CMRObservationU1U3FoetalPositionMeta: t.Type<CMRObservationU1U3FoetalPositionMeta> =
    t.recursion("CMRObservationU1U3FoetalPositionMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Foetal_Position|1.0.1"
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
export interface CMRObservationU1U3FoetalPositionCode {
    coding: Array<CMRObservationU1U3FoetalPositionCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3FoetalPositionCode: t.Type<CMRObservationU1U3FoetalPositionCode> =
    t.recursion("CMRObservationU1U3FoetalPositionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1U3FoetalPositionCodeCoding)
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
export interface CMRObservationU1U3FoetalPositionSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3FoetalPositionSubject: t.Type<CMRObservationU1U3FoetalPositionSubject> =
    t.recursion("CMRObservationU1U3FoetalPositionSubject", () =>
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
export interface CMRObservationU1U3FoetalPositionEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3FoetalPositionEncounter: t.Type<CMRObservationU1U3FoetalPositionEncounter> =
    t.recursion("CMRObservationU1U3FoetalPositionEncounter", () =>
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
export interface CMRObservationU1U3FoetalPositionPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3FoetalPositionPerformer: t.Type<CMRObservationU1U3FoetalPositionPerformer> =
    t.recursion("CMRObservationU1U3FoetalPositionPerformer", () =>
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

interface CMRObservationU1U3FoetalPosition {
    resourceType: "Observation";
    meta: CMRObservationU1U3FoetalPositionMeta;
    status: "final";
    code: CMRObservationU1U3FoetalPositionCode;
    subject: CMRObservationU1U3FoetalPositionSubject;
    encounter: CMRObservationU1U3FoetalPositionEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3FoetalPositionPerformer>;
}

const CMRObservationU1U3FoetalPosition: t.Type<CMRObservationU1U3FoetalPosition> =
    t.recursion("CMRObservationU1U3FoetalPosition", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3FoetalPositionMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3FoetalPositionCode,
                    subject: CMRObservationU1U3FoetalPositionSubject,
                    encounter: CMRObservationU1U3FoetalPositionEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1U3FoetalPositionPerformer)
                })
            ])
        )
    );

export default CMRObservationU1U3FoetalPosition;
