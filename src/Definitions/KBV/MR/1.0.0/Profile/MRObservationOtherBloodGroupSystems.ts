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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Blood_Group_Systems"

/**
 * Content in other Language.
 */
export interface MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anderes Blutgruppen-System";
    id?: string;
}

export const MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Anderes Blutgruppen-System")
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
export interface MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationOtherBloodGroupSystemsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationOtherBloodGroupSystemsCodeCodingDisplay: t.Type<MRObservationOtherBloodGroupSystemsCodeCodingDisplay> =
    t.recursion("MRObservationOtherBloodGroupSystemsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationOtherBloodGroupSystemsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationOtherBloodGroupSystemsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "365641003";
    id?: string;
    _display?: MRObservationOtherBloodGroupSystemsCodeCodingDisplay;
    display?: string;
}

export const MRObservationOtherBloodGroupSystemsCodeCoding: t.Type<MRObservationOtherBloodGroupSystemsCodeCoding> =
    t.recursion("MRObservationOtherBloodGroupSystemsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("365641003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationOtherBloodGroupSystemsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationOtherBloodGroupSystemsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Blood_Group_Systems|1.0.0">;
    id?: string;
}

export const MRObservationOtherBloodGroupSystemsMeta: t.Type<MRObservationOtherBloodGroupSystemsMeta> =
    t.recursion("MRObservationOtherBloodGroupSystemsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Blood_Group_Systems|1.0.0"
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
export interface MRObservationOtherBloodGroupSystemsCode {
    coding: Array<MRObservationOtherBloodGroupSystemsCodeCoding>;
    id?: string;
}

export const MRObservationOtherBloodGroupSystemsCode: t.Type<MRObservationOtherBloodGroupSystemsCode> =
    t.recursion("MRObservationOtherBloodGroupSystemsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationOtherBloodGroupSystemsCodeCoding
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
export interface MRObservationOtherBloodGroupSystemsSubject {
    reference: string;
    id?: string;
}

export const MRObservationOtherBloodGroupSystemsSubject: t.Type<MRObservationOtherBloodGroupSystemsSubject> =
    t.recursion("MRObservationOtherBloodGroupSystemsSubject", () =>
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
export interface MRObservationOtherBloodGroupSystemsEncounter {
    reference: string;
    id?: string;
}

export const MRObservationOtherBloodGroupSystemsEncounter: t.Type<MRObservationOtherBloodGroupSystemsEncounter> =
    t.recursion("MRObservationOtherBloodGroupSystemsEncounter", () =>
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
export interface MRObservationOtherBloodGroupSystemsPerformer {
    reference: string;
    id?: string;
}

export const MRObservationOtherBloodGroupSystemsPerformer: t.Type<MRObservationOtherBloodGroupSystemsPerformer> =
    t.recursion("MRObservationOtherBloodGroupSystemsPerformer", () =>
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

interface MRObservationOtherBloodGroupSystems {
    resourceType: "Observation";
    meta: MRObservationOtherBloodGroupSystemsMeta;
    status: "final";
    code: MRObservationOtherBloodGroupSystemsCode;
    subject: MRObservationOtherBloodGroupSystemsSubject;
    encounter: MRObservationOtherBloodGroupSystemsEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationOtherBloodGroupSystemsPerformer>;
}

const MRObservationOtherBloodGroupSystems: t.Type<MRObservationOtherBloodGroupSystems> =
    t.recursion("MRObservationOtherBloodGroupSystems", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationOtherBloodGroupSystemsMeta,
                    status: Literal("final"),
                    code: MRObservationOtherBloodGroupSystemsCode,
                    subject: MRObservationOtherBloodGroupSystemsSubject,
                    encounter: MRObservationOtherBloodGroupSystemsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationOtherBloodGroupSystemsPerformer)
                })
            ])
        )
    );

export default MRObservationOtherBloodGroupSystems;
