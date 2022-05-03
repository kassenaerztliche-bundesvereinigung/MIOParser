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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Fundus_Height"

/**
 * Content in other Language.
 */
export interface MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Fundusstand/Symphyse-Fundusabstand";
    id?: string;
}

export const MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Fundusstand/Symphyse-Fundusabstand")
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
export interface MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationFundusHeightCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationFundusHeightCodeCodingDisplay: t.Type<MRObservationFundusHeightCodeCodingDisplay> =
    t.recursion("MRObservationFundusHeightCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationFundusHeightCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationFundusHeightCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364265003";
    id?: string;
    _display?: MRObservationFundusHeightCodeCodingDisplay;
    display?: string;
}

export const MRObservationFundusHeightCodeCoding: t.Type<MRObservationFundusHeightCodeCoding> =
    t.recursion("MRObservationFundusHeightCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364265003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationFundusHeightCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationFundusHeightMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Fundus_Height|1.0.0">;
    id?: string;
}

export const MRObservationFundusHeightMeta: t.Type<MRObservationFundusHeightMeta> =
    t.recursion("MRObservationFundusHeightMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Fundus_Height|1.0.0"
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
export interface MRObservationFundusHeightCode {
    coding: Array<MRObservationFundusHeightCodeCoding>;
    id?: string;
}

export const MRObservationFundusHeightCode: t.Type<MRObservationFundusHeightCode> =
    t.recursion("MRObservationFundusHeightCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationFundusHeightCodeCoding)
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
export interface MRObservationFundusHeightSubject {
    reference: string;
    id?: string;
}

export const MRObservationFundusHeightSubject: t.Type<MRObservationFundusHeightSubject> =
    t.recursion("MRObservationFundusHeightSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationFundusHeightEncounter {
    reference: string;
    id?: string;
}

export const MRObservationFundusHeightEncounter: t.Type<MRObservationFundusHeightEncounter> =
    t.recursion("MRObservationFundusHeightEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationFundusHeightPerformer {
    reference: string;
    id?: string;
}

export const MRObservationFundusHeightPerformer: t.Type<MRObservationFundusHeightPerformer> =
    t.recursion("MRObservationFundusHeightPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationFundusHeight {
    resourceType: "Observation";
    meta: MRObservationFundusHeightMeta;
    status: "final";
    code: MRObservationFundusHeightCode;
    subject: MRObservationFundusHeightSubject;
    encounter: MRObservationFundusHeightEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationFundusHeightPerformer>;
}

const MRObservationFundusHeight: t.Type<MRObservationFundusHeight> = t.recursion(
    "MRObservationFundusHeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationFundusHeightMeta,
                    status: Literal("final"),
                    code: MRObservationFundusHeightCode,
                    subject: MRObservationFundusHeightSubject,
                    encounter: MRObservationFundusHeightEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationFundusHeightPerformer)
                })
            ])
        )
);

export default MRObservationFundusHeight;
