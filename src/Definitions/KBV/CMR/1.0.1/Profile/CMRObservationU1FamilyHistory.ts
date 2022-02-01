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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Family_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Familienanamnese: (u. a. behandlungsbedürftige Hyperbilirubinämie bei einem vorausgegangenen Kind)";
    id?: string;
}

export const CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Familienanamnese: (u. a. behandlungsbedürftige Hyperbilirubinämie bei einem vorausgegangenen Kind)"
                        )
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
export interface CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1FamilyHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1FamilyHistoryCodeCodingDisplay: t.Type<CMRObservationU1FamilyHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU1FamilyHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1FamilyHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1FamilyHistoryCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "422432008";
    id?: string;
    _display?: CMRObservationU1FamilyHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1FamilyHistoryCodeCoding: t.Type<CMRObservationU1FamilyHistoryCodeCoding> =
    t.recursion("CMRObservationU1FamilyHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("422432008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1FamilyHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1FamilyHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Family_History|1.0.1">;
    id?: string;
}

export const CMRObservationU1FamilyHistoryMeta: t.Type<CMRObservationU1FamilyHistoryMeta> =
    t.recursion("CMRObservationU1FamilyHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Family_History|1.0.1"
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
export interface CMRObservationU1FamilyHistoryCode {
    coding: Array<CMRObservationU1FamilyHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU1FamilyHistoryCode: t.Type<CMRObservationU1FamilyHistoryCode> =
    t.recursion("CMRObservationU1FamilyHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1FamilyHistoryCodeCoding)
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
export interface CMRObservationU1FamilyHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1FamilyHistorySubject: t.Type<CMRObservationU1FamilyHistorySubject> =
    t.recursion("CMRObservationU1FamilyHistorySubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
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
export interface CMRObservationU1FamilyHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1FamilyHistoryEncounter: t.Type<CMRObservationU1FamilyHistoryEncounter> =
    t.recursion("CMRObservationU1FamilyHistoryEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
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
export interface CMRObservationU1FamilyHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1FamilyHistoryPerformer: t.Type<CMRObservationU1FamilyHistoryPerformer> =
    t.recursion("CMRObservationU1FamilyHistoryPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU1FamilyHistory {
    resourceType: "Observation";
    meta: CMRObservationU1FamilyHistoryMeta;
    status: "final";
    code: CMRObservationU1FamilyHistoryCode;
    subject: CMRObservationU1FamilyHistorySubject;
    encounter: CMRObservationU1FamilyHistoryEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1FamilyHistoryPerformer>;
}

const CMRObservationU1FamilyHistory: t.Type<CMRObservationU1FamilyHistory> = t.recursion(
    "CMRObservationU1FamilyHistory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1FamilyHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU1FamilyHistoryCode,
                    subject: CMRObservationU1FamilyHistorySubject,
                    encounter: CMRObservationU1FamilyHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1FamilyHistoryPerformer)
                })
            ])
        )
);

export default CMRObservationU1FamilyHistory;
