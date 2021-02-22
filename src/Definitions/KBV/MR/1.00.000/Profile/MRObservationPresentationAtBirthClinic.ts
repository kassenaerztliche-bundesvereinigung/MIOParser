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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic"

/**
 * Content in other Language.
 */
export interface MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Vor Entbindung in Klinik vorgestellt";
    id?: string;
}

export const MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Vor Entbindung in Klinik vorgestellt")
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
export interface MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationPresentationAtBirthClinicCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationPresentationAtBirthClinicCodeCodingDisplay: t.Type<MRObservationPresentationAtBirthClinicCodeCodingDisplay> = t.recursion(
    "MRObservationPresentationAtBirthClinicCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationPresentationAtBirthClinicCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationPresentationAtBirthClinicCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "185226003";
    id?: string;
    _display?: MRObservationPresentationAtBirthClinicCodeCodingDisplay;
    display?: string;
}

export const MRObservationPresentationAtBirthClinicCodeCoding: t.Type<MRObservationPresentationAtBirthClinicCodeCoding> = t.recursion(
    "MRObservationPresentationAtBirthClinicCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("185226003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPresentationAtBirthClinicCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPresentationAtBirthClinicMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.0.0"
    >;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicMeta: t.Type<MRObservationPresentationAtBirthClinicMeta> = t.recursion(
    "MRObservationPresentationAtBirthClinicMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.0.0"
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
export interface MRObservationPresentationAtBirthClinicCode {
    coding: Array<MRObservationPresentationAtBirthClinicCodeCoding>;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicCode: t.Type<MRObservationPresentationAtBirthClinicCode> = t.recursion(
    "MRObservationPresentationAtBirthClinicCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationPresentationAtBirthClinicCodeCoding
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
export interface MRObservationPresentationAtBirthClinicSubject {
    reference: string;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicSubject: t.Type<MRObservationPresentationAtBirthClinicSubject> = t.recursion(
    "MRObservationPresentationAtBirthClinicSubject",
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
export interface MRObservationPresentationAtBirthClinicEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicEncounter: t.Type<MRObservationPresentationAtBirthClinicEncounter> = t.recursion(
    "MRObservationPresentationAtBirthClinicEncounter",
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
export interface MRObservationPresentationAtBirthClinicPerformer {
    reference: string;
    id?: string;
}

export const MRObservationPresentationAtBirthClinicPerformer: t.Type<MRObservationPresentationAtBirthClinicPerformer> = t.recursion(
    "MRObservationPresentationAtBirthClinicPerformer",
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

interface MRObservationPresentationAtBirthClinic {
    meta: MRObservationPresentationAtBirthClinicMeta;
    status: "final";
    code: MRObservationPresentationAtBirthClinicCode;
    subject: MRObservationPresentationAtBirthClinicSubject;
    encounter: MRObservationPresentationAtBirthClinicEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPresentationAtBirthClinicPerformer>;
}

const MRObservationPresentationAtBirthClinic: t.Type<MRObservationPresentationAtBirthClinic> = t.recursion(
    "MRObservationPresentationAtBirthClinic",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationPresentationAtBirthClinicMeta,
                    status: Literal("final"),
                    code: MRObservationPresentationAtBirthClinicCode,
                    subject: MRObservationPresentationAtBirthClinicSubject,
                    encounter: MRObservationPresentationAtBirthClinicEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationPresentationAtBirthClinicPerformer
                    )
                })
            ])
        )
);

export default MRObservationPresentationAtBirthClinic;
