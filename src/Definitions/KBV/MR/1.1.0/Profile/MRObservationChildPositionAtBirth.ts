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
import MRChildPositionVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRChildPosition";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position_At_Birth"

/**
 * Content in other Language.
 */
export interface MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
 * Content in other Language.
 */
export interface MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kindslage";
    id?: string;
}

export const MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kindslage")
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
export interface MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                        extension: t.array(
                            MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplay: t.Type<MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationChildPositionAtBirthCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationChildPositionAtBirthCodeCodingDisplay: t.Type<MRObservationChildPositionAtBirthCodeCodingDisplay> =
    t.recursion("MRObservationChildPositionAtBirthCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationChildPositionAtBirthCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationChildPositionAtBirthValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRChildPositionVS;
    id?: string;
    _display?: MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationChildPositionAtBirthValueCodeableConceptCoding: t.Type<MRObservationChildPositionAtBirthValueCodeableConceptCoding> =
    t.recursion("MRObservationChildPositionAtBirthValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRChildPositionVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationChildPositionAtBirthValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationChildPositionAtBirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364607000";
    id?: string;
    _display?: MRObservationChildPositionAtBirthCodeCodingDisplay;
    display?: string;
}

export const MRObservationChildPositionAtBirthCodeCoding: t.Type<MRObservationChildPositionAtBirthCodeCoding> =
    t.recursion("MRObservationChildPositionAtBirthCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("364607000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationChildPositionAtBirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationChildPositionAtBirthValueCodeableConcept {
    coding: Array<MRObservationChildPositionAtBirthValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationChildPositionAtBirthValueCodeableConcept: t.Type<MRObservationChildPositionAtBirthValueCodeableConcept> =
    t.recursion("MRObservationChildPositionAtBirthValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationChildPositionAtBirthValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationChildPositionAtBirthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position_At_Birth|1.1.0">;
    id?: string;
}

export const MRObservationChildPositionAtBirthMeta: t.Type<MRObservationChildPositionAtBirthMeta> =
    t.recursion("MRObservationChildPositionAtBirthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position_At_Birth|1.1.0"
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
export interface MRObservationChildPositionAtBirthCode {
    coding: Array<MRObservationChildPositionAtBirthCodeCoding>;
    id?: string;
}

export const MRObservationChildPositionAtBirthCode: t.Type<MRObservationChildPositionAtBirthCode> =
    t.recursion("MRObservationChildPositionAtBirthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationChildPositionAtBirthCodeCoding)
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
export interface MRObservationChildPositionAtBirthSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationChildPositionAtBirthSubjectReference: t.Type<MRObservationChildPositionAtBirthSubjectReference> =
    t.recursion("MRObservationChildPositionAtBirthSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRObservationChildPositionAtBirthEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationChildPositionAtBirthEncounterReference: t.Type<MRObservationChildPositionAtBirthEncounterReference> =
    t.recursion("MRObservationChildPositionAtBirthEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRObservationChildPositionAtBirthPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationChildPositionAtBirthPerformerReference: t.Type<MRObservationChildPositionAtBirthPerformerReference> =
    t.recursion("MRObservationChildPositionAtBirthPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationChildPositionAtBirth {
    resourceType: "Observation";
    meta: MRObservationChildPositionAtBirthMeta;
    status: "final";
    code: MRObservationChildPositionAtBirthCode;
    subject: MRObservationChildPositionAtBirthSubjectReference;
    encounter: MRObservationChildPositionAtBirthEncounterReference;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationChildPositionAtBirthValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationChildPositionAtBirthPerformerReference>;
}

const MRObservationChildPositionAtBirth: t.Type<MRObservationChildPositionAtBirth> =
    t.recursion("MRObservationChildPositionAtBirth", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationChildPositionAtBirthMeta,
                    status: Literal("final"),
                    code: MRObservationChildPositionAtBirthCode,
                    subject: MRObservationChildPositionAtBirthSubjectReference,
                    encounter: MRObservationChildPositionAtBirthEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        MRObservationChildPositionAtBirthValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationChildPositionAtBirthPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationChildPositionAtBirth;
