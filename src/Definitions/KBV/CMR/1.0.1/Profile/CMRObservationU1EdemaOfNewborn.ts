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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_Of_Newborn"

/**
 * Content in other Language.
 */
export interface CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ödeme";
    id?: string;
}

export const CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Ödeme")
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
export interface CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1EdemaOfNewbornCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1EdemaOfNewbornCodeCodingDisplay: t.Type<CMRObservationU1EdemaOfNewbornCodeCodingDisplay> =
    t.recursion("CMRObservationU1EdemaOfNewbornCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1EdemaOfNewbornCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "78913002";
    id?: string;
    _display?: CMRObservationU1EdemaOfNewbornCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1EdemaOfNewbornCodeCoding: t.Type<CMRObservationU1EdemaOfNewbornCodeCoding> =
    t.recursion("CMRObservationU1EdemaOfNewbornCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("78913002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1EdemaOfNewbornCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1EdemaOfNewbornMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_Of_Newborn|1.0.1">;
    id?: string;
}

export const CMRObservationU1EdemaOfNewbornMeta: t.Type<CMRObservationU1EdemaOfNewbornMeta> =
    t.recursion("CMRObservationU1EdemaOfNewbornMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_Of_Newborn|1.0.1"
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
export interface CMRObservationU1EdemaOfNewbornCode {
    coding: Array<CMRObservationU1EdemaOfNewbornCodeCoding>;
    id?: string;
}

export const CMRObservationU1EdemaOfNewbornCode: t.Type<CMRObservationU1EdemaOfNewbornCode> =
    t.recursion("CMRObservationU1EdemaOfNewbornCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1EdemaOfNewbornCodeCoding)
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
export interface CMRObservationU1EdemaOfNewbornSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1EdemaOfNewbornSubjectReference: t.Type<CMRObservationU1EdemaOfNewbornSubjectReference> =
    t.recursion("CMRObservationU1EdemaOfNewbornSubjectReference", () =>
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
export interface CMRObservationU1EdemaOfNewbornEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1EdemaOfNewbornEncounterReference: t.Type<CMRObservationU1EdemaOfNewbornEncounterReference> =
    t.recursion("CMRObservationU1EdemaOfNewbornEncounterReference", () =>
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
export interface CMRObservationU1EdemaOfNewbornPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1EdemaOfNewbornPerformerReference: t.Type<CMRObservationU1EdemaOfNewbornPerformerReference> =
    t.recursion("CMRObservationU1EdemaOfNewbornPerformerReference", () =>
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

interface CMRObservationU1EdemaOfNewborn {
    resourceType: "Observation";
    meta: CMRObservationU1EdemaOfNewbornMeta;
    status: "final";
    code: CMRObservationU1EdemaOfNewbornCode;
    subject: CMRObservationU1EdemaOfNewbornSubjectReference;
    encounter: CMRObservationU1EdemaOfNewbornEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1EdemaOfNewbornPerformerReference>;
}

const CMRObservationU1EdemaOfNewborn: t.Type<CMRObservationU1EdemaOfNewborn> =
    t.recursion("CMRObservationU1EdemaOfNewborn", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1EdemaOfNewbornMeta,
                    status: Literal("final"),
                    code: CMRObservationU1EdemaOfNewbornCode,
                    subject: CMRObservationU1EdemaOfNewbornSubjectReference,
                    encounter: CMRObservationU1EdemaOfNewbornEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1EdemaOfNewbornPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU1EdemaOfNewborn;
