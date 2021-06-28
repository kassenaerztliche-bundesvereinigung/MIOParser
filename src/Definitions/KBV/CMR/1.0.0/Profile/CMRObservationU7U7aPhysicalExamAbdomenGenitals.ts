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
import CMRU7U7aPhysicalExamAbdomenGenitalsVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRU7U7aPhysicalExamAbdomenGenitals";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U7a_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCoding {
    system: string;
    version: string;
    code: CMRU7U7aPhysicalExamAbdomenGenitalsVS;
    id?: string;
    _display?: CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCoding> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7U7aPhysicalExamAbdomenGenitalsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsMeta: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsMeta> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.0"
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsCode: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsCode> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7U7aPhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsSubject: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsSubject> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsSubject",
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsEncounter: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsEncounter> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsEncounter",
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
export interface CMRObservationU7U7aPhysicalExamAbdomenGenitalsPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7U7aPhysicalExamAbdomenGenitalsPerformer: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitalsPerformer> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitalsPerformer",
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

interface CMRObservationU7U7aPhysicalExamAbdomenGenitals {
    resourceType: "Observation";
    meta: CMRObservationU7U7aPhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRObservationU7U7aPhysicalExamAbdomenGenitalsCode;
    subject: CMRObservationU7U7aPhysicalExamAbdomenGenitalsSubject;
    encounter: CMRObservationU7U7aPhysicalExamAbdomenGenitalsEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7U7aPhysicalExamAbdomenGenitalsPerformer>;
}

const CMRObservationU7U7aPhysicalExamAbdomenGenitals: t.Type<CMRObservationU7U7aPhysicalExamAbdomenGenitals> = t.recursion(
    "CMRObservationU7U7aPhysicalExamAbdomenGenitals",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7U7aPhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRObservationU7U7aPhysicalExamAbdomenGenitalsCode,
                    subject: CMRObservationU7U7aPhysicalExamAbdomenGenitalsSubject,
                    encounter: CMRObservationU7U7aPhysicalExamAbdomenGenitalsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU7U7aPhysicalExamAbdomenGenitalsPerformer
                    )
                })
            ])
        )
);

export default CMRObservationU7U7aPhysicalExamAbdomenGenitals;
