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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRU1U3BirthmodeVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU1U3Birthmode";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3BirthmodeCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3BirthmodeCodeCodingDisplay: t.Type<CMRObservationU1U3BirthmodeCodeCodingDisplay> =
    t.recursion("CMRObservationU1U3BirthmodeCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3BirthmodeCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3BirthmodeCodeCoding {
    system: string;
    version: string;
    code: CMRU1U3BirthmodeVS;
    id?: string;
    _display?: CMRObservationU1U3BirthmodeCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3BirthmodeCodeCoding: t.Type<CMRObservationU1U3BirthmodeCodeCoding> =
    t.recursion("CMRObservationU1U3BirthmodeCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU1U3BirthmodeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3BirthmodeCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U3BirthmodeMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode|1.0.1">;
    id?: string;
}

export const CMRObservationU1U3BirthmodeMeta: t.Type<CMRObservationU1U3BirthmodeMeta> =
    t.recursion("CMRObservationU1U3BirthmodeMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Birthmode|1.0.1"
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
export interface CMRObservationU1U3BirthmodeCode {
    coding: Array<CMRObservationU1U3BirthmodeCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3BirthmodeCode: t.Type<CMRObservationU1U3BirthmodeCode> =
    t.recursion("CMRObservationU1U3BirthmodeCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1U3BirthmodeCodeCoding)
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
export interface CMRObservationU1U3BirthmodeSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3BirthmodeSubjectReference: t.Type<CMRObservationU1U3BirthmodeSubjectReference> =
    t.recursion("CMRObservationU1U3BirthmodeSubjectReference", () =>
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
export interface CMRObservationU1U3BirthmodeEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3BirthmodeEncounterReference: t.Type<CMRObservationU1U3BirthmodeEncounterReference> =
    t.recursion("CMRObservationU1U3BirthmodeEncounterReference", () =>
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
export interface CMRObservationU1U3BirthmodePerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3BirthmodePerformerReference: t.Type<CMRObservationU1U3BirthmodePerformerReference> =
    t.recursion("CMRObservationU1U3BirthmodePerformerReference", () =>
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

interface CMRObservationU1U3Birthmode {
    resourceType: "Observation";
    meta: CMRObservationU1U3BirthmodeMeta;
    status: "final";
    code: CMRObservationU1U3BirthmodeCode;
    subject: CMRObservationU1U3BirthmodeSubjectReference;
    encounter: CMRObservationU1U3BirthmodeEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3BirthmodePerformerReference>;
}

const CMRObservationU1U3Birthmode: t.Type<CMRObservationU1U3Birthmode> = t.recursion(
    "CMRObservationU1U3Birthmode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3BirthmodeMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3BirthmodeCode,
                    subject: CMRObservationU1U3BirthmodeSubjectReference,
                    encounter: CMRObservationU1U3BirthmodeEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1U3BirthmodePerformerReference)
                })
            ])
        )
);

export default CMRObservationU1U3Birthmode;
