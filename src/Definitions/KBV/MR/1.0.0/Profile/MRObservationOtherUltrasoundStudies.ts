/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
import MROtherUltrasoundStudiesVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MROtherUltrasoundStudies";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Ultrasound_Studies"

/**
 * Content in other Language.
 */
export interface MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationOtherUltrasoundStudiesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationOtherUltrasoundStudiesCodeCodingDisplay: t.Type<MRObservationOtherUltrasoundStudiesCodeCodingDisplay> = t.recursion(
    "MRObservationOtherUltrasoundStudiesCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationOtherUltrasoundStudiesCodeCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface MRObservationOtherUltrasoundStudiesCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MROtherUltrasoundStudiesVS;
    id?: string;
    _display?: MRObservationOtherUltrasoundStudiesCodeCodingDisplay;
    display?: string;
}

export const MRObservationOtherUltrasoundStudiesCodeCoding: t.Type<MRObservationOtherUltrasoundStudiesCodeCoding> = t.recursion(
    "MRObservationOtherUltrasoundStudiesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MROtherUltrasoundStudiesVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationOtherUltrasoundStudiesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationOtherUltrasoundStudiesMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Ultrasound_Studies|1.0.0"
    >;
    id?: string;
}

export const MRObservationOtherUltrasoundStudiesMeta: t.Type<MRObservationOtherUltrasoundStudiesMeta> = t.recursion(
    "MRObservationOtherUltrasoundStudiesMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Ultrasound_Studies|1.0.0"
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
export interface MRObservationOtherUltrasoundStudiesCode {
    coding: Array<MRObservationOtherUltrasoundStudiesCodeCoding>;
    id?: string;
}

export const MRObservationOtherUltrasoundStudiesCode: t.Type<MRObservationOtherUltrasoundStudiesCode> = t.recursion(
    "MRObservationOtherUltrasoundStudiesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationOtherUltrasoundStudiesCodeCoding
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
export interface MRObservationOtherUltrasoundStudiesSubject {
    reference: string;
    id?: string;
}

export const MRObservationOtherUltrasoundStudiesSubject: t.Type<MRObservationOtherUltrasoundStudiesSubject> = t.recursion(
    "MRObservationOtherUltrasoundStudiesSubject",
    () =>
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
export interface MRObservationOtherUltrasoundStudiesEncounter {
    reference: string;
    id?: string;
}

export const MRObservationOtherUltrasoundStudiesEncounter: t.Type<MRObservationOtherUltrasoundStudiesEncounter> = t.recursion(
    "MRObservationOtherUltrasoundStudiesEncounter",
    () =>
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
export interface MRObservationOtherUltrasoundStudiesPerformer {
    reference: string;
    id?: string;
}

export const MRObservationOtherUltrasoundStudiesPerformer: t.Type<MRObservationOtherUltrasoundStudiesPerformer> = t.recursion(
    "MRObservationOtherUltrasoundStudiesPerformer",
    () =>
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

interface MRObservationOtherUltrasoundStudies {
    resourceType: "Observation";
    meta: MRObservationOtherUltrasoundStudiesMeta;
    status: "final";
    code: MRObservationOtherUltrasoundStudiesCode;
    subject: MRObservationOtherUltrasoundStudiesSubject;
    encounter: MRObservationOtherUltrasoundStudiesEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationOtherUltrasoundStudiesPerformer>;
}

const MRObservationOtherUltrasoundStudies: t.Type<MRObservationOtherUltrasoundStudies> = t.recursion(
    "MRObservationOtherUltrasoundStudies",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationOtherUltrasoundStudiesMeta,
                    status: Literal("final"),
                    code: MRObservationOtherUltrasoundStudiesCode,
                    subject: MRObservationOtherUltrasoundStudiesSubject,
                    encounter: MRObservationOtherUltrasoundStudiesEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationOtherUltrasoundStudiesPerformer)
                })
            ])
        )
);

export default MRObservationOtherUltrasoundStudies;
