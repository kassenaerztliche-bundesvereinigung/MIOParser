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
import CMRU7PhysicalExamEyesVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRU7PhysicalExamEyes";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7PhysicalExamEyesCodeCodingDisplay: t.Type<CMRObservationU7PhysicalExamEyesCodeCodingDisplay> = t.recursion(
    "CMRObservationU7PhysicalExamEyesCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7PhysicalExamEyesCodeCoding {
    system: string;
    version: string;
    code: CMRU7PhysicalExamEyesVS;
    id?: string;
    _display?: CMRObservationU7PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7PhysicalExamEyesCodeCoding: t.Type<CMRObservationU7PhysicalExamEyesCodeCoding> = t.recursion(
    "CMRObservationU7PhysicalExamEyesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7PhysicalExamEyesVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7PhysicalExamEyesMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Eyes|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU7PhysicalExamEyesMeta: t.Type<CMRObservationU7PhysicalExamEyesMeta> = t.recursion(
    "CMRObservationU7PhysicalExamEyesMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Eyes|1.0.0"
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
export interface CMRObservationU7PhysicalExamEyesCode {
    coding: Array<CMRObservationU7PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRObservationU7PhysicalExamEyesCode: t.Type<CMRObservationU7PhysicalExamEyesCode> = t.recursion(
    "CMRObservationU7PhysicalExamEyesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU7PhysicalExamEyesCodeCoding)
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
export interface CMRObservationU7PhysicalExamEyesSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamEyesSubject: t.Type<CMRObservationU7PhysicalExamEyesSubject> = t.recursion(
    "CMRObservationU7PhysicalExamEyesSubject",
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
export interface CMRObservationU7PhysicalExamEyesEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamEyesEncounter: t.Type<CMRObservationU7PhysicalExamEyesEncounter> = t.recursion(
    "CMRObservationU7PhysicalExamEyesEncounter",
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
export interface CMRObservationU7PhysicalExamEyesPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamEyesPerformer: t.Type<CMRObservationU7PhysicalExamEyesPerformer> = t.recursion(
    "CMRObservationU7PhysicalExamEyesPerformer",
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

interface CMRObservationU7PhysicalExamEyes {
    resourceType: "Observation";
    meta: CMRObservationU7PhysicalExamEyesMeta;
    status: "final";
    code: CMRObservationU7PhysicalExamEyesCode;
    subject: CMRObservationU7PhysicalExamEyesSubject;
    encounter: CMRObservationU7PhysicalExamEyesEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7PhysicalExamEyesPerformer>;
}

const CMRObservationU7PhysicalExamEyes: t.Type<CMRObservationU7PhysicalExamEyes> = t.recursion(
    "CMRObservationU7PhysicalExamEyes",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRObservationU7PhysicalExamEyesCode,
                    subject: CMRObservationU7PhysicalExamEyesSubject,
                    encounter: CMRObservationU7PhysicalExamEyesEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU7PhysicalExamEyesPerformer)
                })
            ])
        )
);

export default CMRObservationU7PhysicalExamEyes;
