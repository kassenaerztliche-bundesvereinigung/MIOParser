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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy"

/**
 * Content in other Language.
 */
export interface MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Stationärer Aufenthalt ante partum in Wochen";
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Stationärer Aufenthalt ante partum in Wochen"
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
export interface MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationInpatientStayDuringPregnancyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationInpatientStayDuringPregnancyCodeCodingDisplay: t.Type<MRObservationInpatientStayDuringPregnancyCodeCodingDisplay> =
    t.recursion("MRObservationInpatientStayDuringPregnancyCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationInpatientStayDuringPregnancyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationInpatientStayDuringPregnancyCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: "183797002";
    id?: string;
    _display?: MRObservationInpatientStayDuringPregnancyCodeCodingDisplay;
    display?: string;
}

export const MRObservationInpatientStayDuringPregnancyCodeCoding: t.Type<MRObservationInpatientStayDuringPregnancyCodeCoding> =
    t.recursion("MRObservationInpatientStayDuringPregnancyCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: Literal("183797002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationInpatientStayDuringPregnancyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationInpatientStayDuringPregnancyValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancyValueQuantity: t.Type<MRObservationInpatientStayDuringPregnancyValueQuantity> =
    t.recursion("MRObservationInpatientStayDuringPregnancyValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("Wochen"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("wk")
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
export interface MRObservationInpatientStayDuringPregnancyMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy|1.0.0">;
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancyMeta: t.Type<MRObservationInpatientStayDuringPregnancyMeta> =
    t.recursion("MRObservationInpatientStayDuringPregnancyMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy|1.0.0"
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
export interface MRObservationInpatientStayDuringPregnancyCode {
    coding: Array<MRObservationInpatientStayDuringPregnancyCodeCoding>;
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancyCode: t.Type<MRObservationInpatientStayDuringPregnancyCode> =
    t.recursion("MRObservationInpatientStayDuringPregnancyCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationInpatientStayDuringPregnancyCodeCoding
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
export interface MRObservationInpatientStayDuringPregnancySubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancySubjectReference: t.Type<MRObservationInpatientStayDuringPregnancySubjectReference> =
    t.recursion("MRObservationInpatientStayDuringPregnancySubjectReference", () =>
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
export interface MRObservationInpatientStayDuringPregnancyEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancyEncounterReference: t.Type<MRObservationInpatientStayDuringPregnancyEncounterReference> =
    t.recursion("MRObservationInpatientStayDuringPregnancyEncounterReference", () =>
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
export interface MRObservationInpatientStayDuringPregnancyPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationInpatientStayDuringPregnancyPerformerReference: t.Type<MRObservationInpatientStayDuringPregnancyPerformerReference> =
    t.recursion("MRObservationInpatientStayDuringPregnancyPerformerReference", () =>
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

interface MRObservationInpatientStayDuringPregnancy {
    resourceType: "Observation";
    meta: MRObservationInpatientStayDuringPregnancyMeta;
    status: "final";
    code: MRObservationInpatientStayDuringPregnancyCode;
    subject: MRObservationInpatientStayDuringPregnancySubjectReference;
    encounter: MRObservationInpatientStayDuringPregnancyEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationInpatientStayDuringPregnancyValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationInpatientStayDuringPregnancyPerformerReference>;
}

const MRObservationInpatientStayDuringPregnancy: t.Type<MRObservationInpatientStayDuringPregnancy> =
    t.recursion("MRObservationInpatientStayDuringPregnancy", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationInpatientStayDuringPregnancyMeta,
                    status: Literal("final"),
                    code: MRObservationInpatientStayDuringPregnancyCode,
                    subject: MRObservationInpatientStayDuringPregnancySubjectReference,
                    encounter:
                        MRObservationInpatientStayDuringPregnancyEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationInpatientStayDuringPregnancyValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationInpatientStayDuringPregnancyPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationInpatientStayDuringPregnancy;
