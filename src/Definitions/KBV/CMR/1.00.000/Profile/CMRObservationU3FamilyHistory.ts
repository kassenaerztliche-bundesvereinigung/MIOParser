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
import CMRU3FamilyHistoryVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRU3FamilyHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Family_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3FamilyHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3FamilyHistoryCodeCodingDisplay: t.Type<CMRObservationU3FamilyHistoryCodeCodingDisplay> = t.recursion(
    "CMRObservationU3FamilyHistoryCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3FamilyHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU3FamilyHistoryVS;
    id?: string;
    _display?: CMRObservationU3FamilyHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3FamilyHistoryCodeCoding: t.Type<CMRObservationU3FamilyHistoryCodeCoding> = t.recursion(
    "CMRObservationU3FamilyHistoryCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU3FamilyHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3FamilyHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3FamilyHistoryMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Family_History|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU3FamilyHistoryMeta: t.Type<CMRObservationU3FamilyHistoryMeta> = t.recursion(
    "CMRObservationU3FamilyHistoryMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Family_History|1.0.0"
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
export interface CMRObservationU3FamilyHistoryCode {
    coding: Array<CMRObservationU3FamilyHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU3FamilyHistoryCode: t.Type<CMRObservationU3FamilyHistoryCode> = t.recursion(
    "CMRObservationU3FamilyHistoryCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU3FamilyHistoryCodeCoding)
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
export interface CMRObservationU3FamilyHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3FamilyHistorySubject: t.Type<CMRObservationU3FamilyHistorySubject> = t.recursion(
    "CMRObservationU3FamilyHistorySubject",
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
export interface CMRObservationU3FamilyHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3FamilyHistoryEncounter: t.Type<CMRObservationU3FamilyHistoryEncounter> = t.recursion(
    "CMRObservationU3FamilyHistoryEncounter",
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
export interface CMRObservationU3FamilyHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3FamilyHistoryPerformer: t.Type<CMRObservationU3FamilyHistoryPerformer> = t.recursion(
    "CMRObservationU3FamilyHistoryPerformer",
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

interface CMRObservationU3FamilyHistory {
    resourceType: "Observation";
    meta: CMRObservationU3FamilyHistoryMeta;
    status: "final";
    code: CMRObservationU3FamilyHistoryCode;
    subject: CMRObservationU3FamilyHistorySubject;
    encounter: CMRObservationU3FamilyHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3FamilyHistoryPerformer>;
}

const CMRObservationU3FamilyHistory: t.Type<CMRObservationU3FamilyHistory> = t.recursion(
    "CMRObservationU3FamilyHistory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3FamilyHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU3FamilyHistoryCode,
                    subject: CMRObservationU3FamilyHistorySubject,
                    encounter: CMRObservationU3FamilyHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU3FamilyHistoryPerformer)
                })
            ])
        )
);

export default CMRObservationU3FamilyHistory;
