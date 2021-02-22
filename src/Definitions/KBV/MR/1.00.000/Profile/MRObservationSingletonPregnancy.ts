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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy"

/**
 * Content in other Language.
 */
export interface MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Einlingsschwangerschaft";
    id?: string;
}

export const MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Einlingsschwangerschaft")
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
export interface MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationSingletonPregnancyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationSingletonPregnancyCodeCodingDisplay: t.Type<MRObservationSingletonPregnancyCodeCodingDisplay> = t.recursion(
    "MRObservationSingletonPregnancyCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationSingletonPregnancyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationSingletonPregnancyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "237244005";
    id?: string;
    _display?: MRObservationSingletonPregnancyCodeCodingDisplay;
    display?: string;
}

export const MRObservationSingletonPregnancyCodeCoding: t.Type<MRObservationSingletonPregnancyCodeCoding> = t.recursion(
    "MRObservationSingletonPregnancyCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("237244005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationSingletonPregnancyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationSingletonPregnancyMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0"
    >;
    id?: string;
}

export const MRObservationSingletonPregnancyMeta: t.Type<MRObservationSingletonPregnancyMeta> = t.recursion(
    "MRObservationSingletonPregnancyMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0"
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
export interface MRObservationSingletonPregnancyCode {
    coding: Array<MRObservationSingletonPregnancyCodeCoding>;
    id?: string;
}

export const MRObservationSingletonPregnancyCode: t.Type<MRObservationSingletonPregnancyCode> = t.recursion(
    "MRObservationSingletonPregnancyCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationSingletonPregnancyCodeCoding)
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
export interface MRObservationSingletonPregnancySubject {
    reference: string;
    id?: string;
}

export const MRObservationSingletonPregnancySubject: t.Type<MRObservationSingletonPregnancySubject> = t.recursion(
    "MRObservationSingletonPregnancySubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationSingletonPregnancyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationSingletonPregnancyEncounter: t.Type<MRObservationSingletonPregnancyEncounter> = t.recursion(
    "MRObservationSingletonPregnancyEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationSingletonPregnancyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationSingletonPregnancyPerformer: t.Type<MRObservationSingletonPregnancyPerformer> = t.recursion(
    "MRObservationSingletonPregnancyPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRObservationSingletonPregnancy {
    meta: MRObservationSingletonPregnancyMeta;
    status: "final";
    code: MRObservationSingletonPregnancyCode;
    subject: MRObservationSingletonPregnancySubject;
    encounter: MRObservationSingletonPregnancyEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationSingletonPregnancyPerformer>;
}

const MRObservationSingletonPregnancy: t.Type<MRObservationSingletonPregnancy> = t.recursion(
    "MRObservationSingletonPregnancy",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationSingletonPregnancyMeta,
                    status: Literal("final"),
                    code: MRObservationSingletonPregnancyCode,
                    subject: MRObservationSingletonPregnancySubject,
                    encounter: MRObservationSingletonPregnancyEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationSingletonPregnancyPerformer)
                })
            ])
        )
);

export default MRObservationSingletonPregnancy;
