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
import CMRU5PhysicalExamChestLungRespiratoryTractVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRU5PhysicalExamChestLungRespiratoryTract";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: string;
    version: string;
    code: CMRU5PhysicalExamChestLungRespiratoryTractVS;
    id?: string;
    _display?: CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCoding> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU5PhysicalExamChestLungRespiratoryTractVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractMeta> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0"
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractCode> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU5PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractSubject> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractSubject",
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractEncounter> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractEncounter",
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
export interface CMRObservationU5PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTractPerformer> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTractPerformer",
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

interface CMRObservationU5PhysicalExamChestLungRespiratoryTract {
    resourceType: "Observation";
    meta: CMRObservationU5PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRObservationU5PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRObservationU5PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRObservationU5PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU5PhysicalExamChestLungRespiratoryTractPerformer>;
}

const CMRObservationU5PhysicalExamChestLungRespiratoryTract: t.Type<CMRObservationU5PhysicalExamChestLungRespiratoryTract> = t.recursion(
    "CMRObservationU5PhysicalExamChestLungRespiratoryTract",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU5PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRObservationU5PhysicalExamChestLungRespiratoryTractCode,
                    subject: CMRObservationU5PhysicalExamChestLungRespiratoryTractSubject,
                    encounter: CMRObservationU5PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU5PhysicalExamChestLungRespiratoryTractPerformer
                    )
                })
            ])
        )
);

export default CMRObservationU5PhysicalExamChestLungRespiratoryTract;
