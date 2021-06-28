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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRPregnancyInformationVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRPregnancyInformation";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information"

/**
 * Content in other Language.
 */
export interface MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationPregnancyInformationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationPregnancyInformationCodeCodingDisplay: t.Type<MRObservationPregnancyInformationCodeCodingDisplay> = t.recursion(
    "MRObservationPregnancyInformationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationPregnancyInformationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationPregnancyInformationCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRPregnancyInformationVS;
    id?: string;
    _display?: MRObservationPregnancyInformationCodeCodingDisplay;
    display?: string;
}

export const MRObservationPregnancyInformationCodeCoding: t.Type<MRObservationPregnancyInformationCodeCoding> = t.recursion(
    "MRObservationPregnancyInformationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRPregnancyInformationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPregnancyInformationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPregnancyInformationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information|1.0.0"
    >;
    id?: string;
}

export const MRObservationPregnancyInformationMeta: t.Type<MRObservationPregnancyInformationMeta> = t.recursion(
    "MRObservationPregnancyInformationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information|1.0.0"
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
export interface MRObservationPregnancyInformationCode {
    coding: Array<MRObservationPregnancyInformationCodeCoding>;
    id?: string;
}

export const MRObservationPregnancyInformationCode: t.Type<MRObservationPregnancyInformationCode> = t.recursion(
    "MRObservationPregnancyInformationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPregnancyInformationCodeCoding)
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
export interface MRObservationPregnancyInformationSubject {
    reference: string;
    id?: string;
}

export const MRObservationPregnancyInformationSubject: t.Type<MRObservationPregnancyInformationSubject> = t.recursion(
    "MRObservationPregnancyInformationSubject",
    () =>
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
export interface MRObservationPregnancyInformationEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPregnancyInformationEncounter: t.Type<MRObservationPregnancyInformationEncounter> = t.recursion(
    "MRObservationPregnancyInformationEncounter",
    () =>
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
export interface MRObservationPregnancyInformationPerformer {
    reference: string;
    id?: string;
}

export const MRObservationPregnancyInformationPerformer: t.Type<MRObservationPregnancyInformationPerformer> = t.recursion(
    "MRObservationPregnancyInformationPerformer",
    () =>
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

interface MRObservationPregnancyInformation {
    resourceType: "Observation";
    meta: MRObservationPregnancyInformationMeta;
    status: "final";
    code: MRObservationPregnancyInformationCode;
    subject: MRObservationPregnancyInformationSubject;
    encounter: MRObservationPregnancyInformationEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPregnancyInformationPerformer>;
}

const MRObservationPregnancyInformation: t.Type<MRObservationPregnancyInformation> = t.recursion(
    "MRObservationPregnancyInformation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPregnancyInformationMeta,
                    status: Literal("final"),
                    code: MRObservationPregnancyInformationCode,
                    subject: MRObservationPregnancyInformationSubject,
                    encounter: MRObservationPregnancyInformationEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationPregnancyInformationPerformer)
                })
            ])
        )
);

export default MRObservationPregnancyInformation;
