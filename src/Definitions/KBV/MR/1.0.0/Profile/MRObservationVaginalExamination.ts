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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Vaginal_Examination"

/**
 * Content in other Language.
 */
export interface MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Vaginale Untersuchung";
    id?: string;
}

export const MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Vaginale Untersuchung")
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
export interface MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationVaginalExaminationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationVaginalExaminationCodeCodingDisplay: t.Type<MRObservationVaginalExaminationCodeCodingDisplay> =
    t.recursion("MRObservationVaginalExaminationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationVaginalExaminationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationVaginalExaminationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "275963006";
    id?: string;
    _display?: MRObservationVaginalExaminationCodeCodingDisplay;
    display?: string;
}

export const MRObservationVaginalExaminationCodeCoding: t.Type<MRObservationVaginalExaminationCodeCoding> =
    t.recursion("MRObservationVaginalExaminationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("275963006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationVaginalExaminationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationVaginalExaminationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Vaginal_Examination|1.0.0">;
    id?: string;
}

export const MRObservationVaginalExaminationMeta: t.Type<MRObservationVaginalExaminationMeta> =
    t.recursion("MRObservationVaginalExaminationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Vaginal_Examination|1.0.0"
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
export interface MRObservationVaginalExaminationCode {
    coding: Array<MRObservationVaginalExaminationCodeCoding>;
    id?: string;
}

export const MRObservationVaginalExaminationCode: t.Type<MRObservationVaginalExaminationCode> =
    t.recursion("MRObservationVaginalExaminationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationVaginalExaminationCodeCoding)
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
export interface MRObservationVaginalExaminationSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationVaginalExaminationSubjectReference: t.Type<MRObservationVaginalExaminationSubjectReference> =
    t.recursion("MRObservationVaginalExaminationSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationVaginalExaminationEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationVaginalExaminationEncounterReference: t.Type<MRObservationVaginalExaminationEncounterReference> =
    t.recursion("MRObservationVaginalExaminationEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationVaginalExaminationPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationVaginalExaminationPerformerReference: t.Type<MRObservationVaginalExaminationPerformerReference> =
    t.recursion("MRObservationVaginalExaminationPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationVaginalExamination {
    resourceType: "Observation";
    meta: MRObservationVaginalExaminationMeta;
    status: "final";
    code: MRObservationVaginalExaminationCode;
    subject: MRObservationVaginalExaminationSubjectReference;
    encounter: MRObservationVaginalExaminationEncounterReference;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationVaginalExaminationPerformerReference>;
    note?: Array<Annotation>;
}

const MRObservationVaginalExamination: t.Type<MRObservationVaginalExamination> =
    t.recursion("MRObservationVaginalExamination", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationVaginalExaminationMeta,
                    status: Literal("final"),
                    code: MRObservationVaginalExaminationCode,
                    subject: MRObservationVaginalExaminationSubjectReference,
                    encounter: MRObservationVaginalExaminationEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationVaginalExaminationPerformerReference
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRObservationVaginalExamination;
