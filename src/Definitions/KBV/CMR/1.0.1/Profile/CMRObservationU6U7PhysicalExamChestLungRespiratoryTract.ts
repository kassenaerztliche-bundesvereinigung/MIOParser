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
import CMRU6U7PhysicalExamChestLungRespiratoryTractVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU6U7PhysicalExamChestLungRespiratoryTract";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: string;
    version: string;
    code: CMRU6U7PhysicalExamChestLungRespiratoryTractVS;
    id?: string;
    _display?: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCoding> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU6U7PhysicalExamChestLungRespiratoryTractVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1">;
    id?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractMeta> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTractMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCode> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractSubject> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTractSubject", () =>
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractEncounter> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTractEncounter", () =>
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
export interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU6U7PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractPerformer> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTractPerformer", () =>
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

interface CMRObservationU6U7PhysicalExamChestLungRespiratoryTract {
    resourceType: "Observation";
    meta: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU6U7PhysicalExamChestLungRespiratoryTractPerformer>;
}

const CMRObservationU6U7PhysicalExamChestLungRespiratoryTract: t.Type<CMRObservationU6U7PhysicalExamChestLungRespiratoryTract> =
    t.recursion("CMRObservationU6U7PhysicalExamChestLungRespiratoryTract", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRObservationU6U7PhysicalExamChestLungRespiratoryTractCode,
                    subject:
                        CMRObservationU6U7PhysicalExamChestLungRespiratoryTractSubject,
                    encounter:
                        CMRObservationU6U7PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU6U7PhysicalExamChestLungRespiratoryTractPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU6U7PhysicalExamChestLungRespiratoryTract;
