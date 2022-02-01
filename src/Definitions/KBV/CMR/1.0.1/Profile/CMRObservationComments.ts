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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments"

/**
 * Content in other Language.
 */
export interface CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bemerkungen:";
    id?: string;
}

export const CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Bemerkungen:")
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
export interface CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationCommentsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationCommentsCodeCodingDisplay: t.Type<CMRObservationCommentsCodeCodingDisplay> =
    t.recursion("CMRObservationCommentsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationCommentsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationCommentsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "703852005";
    id?: string;
    _display?: CMRObservationCommentsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationCommentsCodeCoding: t.Type<CMRObservationCommentsCodeCoding> =
    t.recursion("CMRObservationCommentsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("703852005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationCommentsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationCommentsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.1">;
    id?: string;
}

export const CMRObservationCommentsMeta: t.Type<CMRObservationCommentsMeta> = t.recursion(
    "CMRObservationCommentsMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.1"
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
export interface CMRObservationCommentsCode {
    coding: Array<CMRObservationCommentsCodeCoding>;
    id?: string;
}

export const CMRObservationCommentsCode: t.Type<CMRObservationCommentsCode> = t.recursion(
    "CMRObservationCommentsCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationCommentsCodeCoding)
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
export interface CMRObservationCommentsSubject {
    reference: string;
    id?: string;
}

export const CMRObservationCommentsSubject: t.Type<CMRObservationCommentsSubject> =
    t.recursion("CMRObservationCommentsSubject", () =>
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
export interface CMRObservationCommentsEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationCommentsEncounter: t.Type<CMRObservationCommentsEncounter> =
    t.recursion("CMRObservationCommentsEncounter", () =>
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
export interface CMRObservationCommentsPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationCommentsPerformer: t.Type<CMRObservationCommentsPerformer> =
    t.recursion("CMRObservationCommentsPerformer", () =>
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

interface CMRObservationComments {
    resourceType: "Observation";
    meta: CMRObservationCommentsMeta;
    status: "final";
    code: CMRObservationCommentsCode;
    subject: CMRObservationCommentsSubject;
    encounter: CMRObservationCommentsEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationCommentsPerformer>;
}

const CMRObservationComments: t.Type<CMRObservationComments> = t.recursion(
    "CMRObservationComments",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationCommentsMeta,
                    status: Literal("final"),
                    code: CMRObservationCommentsCode,
                    subject: CMRObservationCommentsSubject,
                    encounter: CMRObservationCommentsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationCommentsPerformer)
                })
            ])
        )
);

export default CMRObservationComments;
