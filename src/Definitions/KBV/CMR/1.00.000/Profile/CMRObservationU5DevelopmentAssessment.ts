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
import CMRU5DevelopmentAssessmentVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU5DevelopmentAssessment";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Development_Assessment"

/**
 * Content in other Language.
 */
export interface CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU5DevelopmentAssessmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU5DevelopmentAssessmentCodeCodingDisplay: t.Type<CMRObservationU5DevelopmentAssessmentCodeCodingDisplay> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU5DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU5DevelopmentAssessmentCodeCoding {
    system: string;
    version: string;
    code: CMRU5DevelopmentAssessmentVS;
    id?: string;
    _display?: CMRObservationU5DevelopmentAssessmentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU5DevelopmentAssessmentCodeCoding: t.Type<CMRObservationU5DevelopmentAssessmentCodeCoding> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU5DevelopmentAssessmentVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU5DevelopmentAssessmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU5DevelopmentAssessmentMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Development_Assessment|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU5DevelopmentAssessmentMeta: t.Type<CMRObservationU5DevelopmentAssessmentMeta> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Development_Assessment|1.0.0"
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
export interface CMRObservationU5DevelopmentAssessmentCode {
    coding: Array<CMRObservationU5DevelopmentAssessmentCodeCoding>;
    id?: string;
}

export const CMRObservationU5DevelopmentAssessmentCode: t.Type<CMRObservationU5DevelopmentAssessmentCode> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU5DevelopmentAssessmentCodeCoding
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
export interface CMRObservationU5DevelopmentAssessmentSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU5DevelopmentAssessmentSubject: t.Type<CMRObservationU5DevelopmentAssessmentSubject> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentSubject",
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
export interface CMRObservationU5DevelopmentAssessmentEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU5DevelopmentAssessmentEncounter: t.Type<CMRObservationU5DevelopmentAssessmentEncounter> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentEncounter",
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
export interface CMRObservationU5DevelopmentAssessmentPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU5DevelopmentAssessmentPerformer: t.Type<CMRObservationU5DevelopmentAssessmentPerformer> = t.recursion(
    "CMRObservationU5DevelopmentAssessmentPerformer",
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

interface CMRObservationU5DevelopmentAssessment {
    resourceType: "Observation";
    meta: CMRObservationU5DevelopmentAssessmentMeta;
    status: "final";
    code: CMRObservationU5DevelopmentAssessmentCode;
    subject: CMRObservationU5DevelopmentAssessmentSubject;
    encounter: CMRObservationU5DevelopmentAssessmentEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU5DevelopmentAssessmentPerformer>;
}

const CMRObservationU5DevelopmentAssessment: t.Type<CMRObservationU5DevelopmentAssessment> = t.recursion(
    "CMRObservationU5DevelopmentAssessment",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU5DevelopmentAssessmentMeta,
                    status: Literal("final"),
                    code: CMRObservationU5DevelopmentAssessmentCode,
                    subject: CMRObservationU5DevelopmentAssessmentSubject,
                    encounter: CMRObservationU5DevelopmentAssessmentEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU5DevelopmentAssessmentPerformer)
                })
            ])
        )
);

export default CMRObservationU5DevelopmentAssessment;
