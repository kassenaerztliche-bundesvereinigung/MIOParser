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
import CMRU3PhysicalExamHeadVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU3PhysicalExamHead";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Physical_Exam_Head"

/**
 * Content in other Language.
 */
export interface CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3PhysicalExamHeadCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3PhysicalExamHeadCodeCodingDisplay: t.Type<CMRObservationU3PhysicalExamHeadCodeCodingDisplay> = t.recursion(
    "CMRObservationU3PhysicalExamHeadCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3PhysicalExamHeadCodeCoding {
    system: string;
    version: string;
    code: CMRU3PhysicalExamHeadVS;
    id?: string;
    _display?: CMRObservationU3PhysicalExamHeadCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3PhysicalExamHeadCodeCoding: t.Type<CMRObservationU3PhysicalExamHeadCodeCoding> = t.recursion(
    "CMRObservationU3PhysicalExamHeadCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU3PhysicalExamHeadVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3PhysicalExamHeadCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3PhysicalExamHeadMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Physical_Exam_Head|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU3PhysicalExamHeadMeta: t.Type<CMRObservationU3PhysicalExamHeadMeta> = t.recursion(
    "CMRObservationU3PhysicalExamHeadMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Physical_Exam_Head|1.0.0"
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
export interface CMRObservationU3PhysicalExamHeadCode {
    coding: Array<CMRObservationU3PhysicalExamHeadCodeCoding>;
    id?: string;
}

export const CMRObservationU3PhysicalExamHeadCode: t.Type<CMRObservationU3PhysicalExamHeadCode> = t.recursion(
    "CMRObservationU3PhysicalExamHeadCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU3PhysicalExamHeadCodeCoding)
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
export interface CMRObservationU3PhysicalExamHeadSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3PhysicalExamHeadSubject: t.Type<CMRObservationU3PhysicalExamHeadSubject> = t.recursion(
    "CMRObservationU3PhysicalExamHeadSubject",
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
export interface CMRObservationU3PhysicalExamHeadEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3PhysicalExamHeadEncounter: t.Type<CMRObservationU3PhysicalExamHeadEncounter> = t.recursion(
    "CMRObservationU3PhysicalExamHeadEncounter",
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
export interface CMRObservationU3PhysicalExamHeadPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3PhysicalExamHeadPerformer: t.Type<CMRObservationU3PhysicalExamHeadPerformer> = t.recursion(
    "CMRObservationU3PhysicalExamHeadPerformer",
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

interface CMRObservationU3PhysicalExamHead {
    resourceType: "Observation";
    meta: CMRObservationU3PhysicalExamHeadMeta;
    status: "final";
    code: CMRObservationU3PhysicalExamHeadCode;
    subject: CMRObservationU3PhysicalExamHeadSubject;
    encounter: CMRObservationU3PhysicalExamHeadEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3PhysicalExamHeadPerformer>;
}

const CMRObservationU3PhysicalExamHead: t.Type<CMRObservationU3PhysicalExamHead> = t.recursion(
    "CMRObservationU3PhysicalExamHead",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3PhysicalExamHeadMeta,
                    status: Literal("final"),
                    code: CMRObservationU3PhysicalExamHeadCode,
                    subject: CMRObservationU3PhysicalExamHeadSubject,
                    encounter: CMRObservationU3PhysicalExamHeadEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU3PhysicalExamHeadPerformer)
                })
            ])
        )
);

export default CMRObservationU3PhysicalExamHead;
