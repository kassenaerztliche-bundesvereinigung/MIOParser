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
import CMRU5PhysicalExamMouthNoseVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU5PhysicalExamMouthNose";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplay> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU5PhysicalExamMouthNoseCodeCoding {
    system: string;
    version: string;
    code: CMRU5PhysicalExamMouthNoseVS;
    id?: string;
    _display?: CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseCodeCoding: t.Type<CMRObservationU5PhysicalExamMouthNoseCodeCoding> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU5PhysicalExamMouthNoseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU5PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU5PhysicalExamMouthNoseMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Mouth_Nose|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseMeta: t.Type<CMRObservationU5PhysicalExamMouthNoseMeta> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Mouth_Nose|1.0.0"
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
export interface CMRObservationU5PhysicalExamMouthNoseCode {
    coding: Array<CMRObservationU5PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseCode: t.Type<CMRObservationU5PhysicalExamMouthNoseCode> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU5PhysicalExamMouthNoseCodeCoding
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
export interface CMRObservationU5PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseSubject: t.Type<CMRObservationU5PhysicalExamMouthNoseSubject> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseSubject",
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
export interface CMRObservationU5PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMouthNoseEncounter: t.Type<CMRObservationU5PhysicalExamMouthNoseEncounter> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNoseEncounter",
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
export interface CMRObservationU5PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMouthNosePerformer: t.Type<CMRObservationU5PhysicalExamMouthNosePerformer> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNosePerformer",
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

interface CMRObservationU5PhysicalExamMouthNose {
    resourceType: "Observation";
    meta: CMRObservationU5PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRObservationU5PhysicalExamMouthNoseCode;
    subject: CMRObservationU5PhysicalExamMouthNoseSubject;
    encounter: CMRObservationU5PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU5PhysicalExamMouthNosePerformer>;
}

const CMRObservationU5PhysicalExamMouthNose: t.Type<CMRObservationU5PhysicalExamMouthNose> = t.recursion(
    "CMRObservationU5PhysicalExamMouthNose",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU5PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRObservationU5PhysicalExamMouthNoseCode,
                    subject: CMRObservationU5PhysicalExamMouthNoseSubject,
                    encounter: CMRObservationU5PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU5PhysicalExamMouthNosePerformer)
                })
            ])
        )
);

export default CMRObservationU5PhysicalExamMouthNose;
