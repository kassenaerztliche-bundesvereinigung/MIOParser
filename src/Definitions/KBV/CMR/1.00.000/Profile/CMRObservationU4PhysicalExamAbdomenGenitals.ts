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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRU4PhysicalExamAbdomenGenitalsVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU4PhysicalExamAbdomenGenitals";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplay> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU4PhysicalExamAbdomenGenitalsCodeCoding {
    system: string;
    version: string;
    code: CMRU4PhysicalExamAbdomenGenitalsVS;
    id?: string;
    _display?: CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsCodeCoding> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU4PhysicalExamAbdomenGenitalsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU4PhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU4PhysicalExamAbdomenGenitalsMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Abdomen_Genitals|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsMeta: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsMeta> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Abdomen_Genitals|1.0.0"
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
export interface CMRObservationU4PhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRObservationU4PhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsCode: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsCode> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU4PhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRObservationU4PhysicalExamAbdomenGenitalsSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsSubject: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsSubject> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
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
export interface CMRObservationU4PhysicalExamAbdomenGenitalsEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsEncounter: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsEncounter> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMRObservationU4PhysicalExamAbdomenGenitalsPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamAbdomenGenitalsPerformer: t.Type<CMRObservationU4PhysicalExamAbdomenGenitalsPerformer> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitalsPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRObservationU4PhysicalExamAbdomenGenitals {
    resourceType: "Observation";
    meta: CMRObservationU4PhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRObservationU4PhysicalExamAbdomenGenitalsCode;
    subject: CMRObservationU4PhysicalExamAbdomenGenitalsSubject;
    encounter: CMRObservationU4PhysicalExamAbdomenGenitalsEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU4PhysicalExamAbdomenGenitalsPerformer>;
}

const CMRObservationU4PhysicalExamAbdomenGenitals: t.Type<CMRObservationU4PhysicalExamAbdomenGenitals> = t.recursion(
    "CMRObservationU4PhysicalExamAbdomenGenitals",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU4PhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRObservationU4PhysicalExamAbdomenGenitalsCode,
                    subject: CMRObservationU4PhysicalExamAbdomenGenitalsSubject,
                    encounter: CMRObservationU4PhysicalExamAbdomenGenitalsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU4PhysicalExamAbdomenGenitalsPerformer
                    )
                })
            ])
        )
);

export default CMRObservationU4PhysicalExamAbdomenGenitals;
