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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Varicosis"

/**
 * Content in other Language.
 */
export interface MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Varikosis";
    id?: string;
}

export const MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Varikosis")
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
export interface MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationVaricosisCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationVaricosisCodeCodingDisplay: t.Type<MRObservationVaricosisCodeCodingDisplay> = t.recursion(
    "MRObservationVaricosisCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationVaricosisCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationVaricosisCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364102005";
    id?: string;
    _display?: MRObservationVaricosisCodeCodingDisplay;
    display?: string;
}

export const MRObservationVaricosisCodeCoding: t.Type<MRObservationVaricosisCodeCoding> = t.recursion(
    "MRObservationVaricosisCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364102005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationVaricosisCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationVaricosisMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Varicosis|1.0.0"
    >;
    id?: string;
}

export const MRObservationVaricosisMeta: t.Type<MRObservationVaricosisMeta> = t.recursion(
    "MRObservationVaricosisMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Varicosis|1.0.0"
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
export interface MRObservationVaricosisCode {
    coding: Array<MRObservationVaricosisCodeCoding>;
    id?: string;
}

export const MRObservationVaricosisCode: t.Type<MRObservationVaricosisCode> = t.recursion(
    "MRObservationVaricosisCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationVaricosisCodeCoding)
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
export interface MRObservationVaricosisSubject {
    reference: string;
    id?: string;
}

export const MRObservationVaricosisSubject: t.Type<MRObservationVaricosisSubject> = t.recursion(
    "MRObservationVaricosisSubject",
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
export interface MRObservationVaricosisEncounter {
    reference: string;
    id?: string;
}

export const MRObservationVaricosisEncounter: t.Type<MRObservationVaricosisEncounter> = t.recursion(
    "MRObservationVaricosisEncounter",
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
export interface MRObservationVaricosisPerformer {
    reference: string;
    id?: string;
}

export const MRObservationVaricosisPerformer: t.Type<MRObservationVaricosisPerformer> = t.recursion(
    "MRObservationVaricosisPerformer",
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

interface MRObservationVaricosis {
    meta: MRObservationVaricosisMeta;
    status: "final";
    code: MRObservationVaricosisCode;
    subject: MRObservationVaricosisSubject;
    encounter: MRObservationVaricosisEncounter;
    effectiveDateTime: string;
    valueString: string;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationVaricosisPerformer>;
}

const MRObservationVaricosis: t.Type<MRObservationVaricosis> = t.recursion(
    "MRObservationVaricosis",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationVaricosisMeta,
                    status: Literal("final"),
                    code: MRObservationVaricosisCode,
                    subject: MRObservationVaricosisSubject,
                    encounter: MRObservationVaricosisEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationVaricosisPerformer)
                })
            ])
        )
);

export default MRObservationVaricosis;
