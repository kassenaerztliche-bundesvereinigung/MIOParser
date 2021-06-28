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
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Observation_Parental_Notes"

/**
 * Content in other Language.
 */
export interface PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Hier können Sie Ihre Notizen eintragen:";
    id?: string;
}

export const PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Hier können Sie Ihre Notizen eintragen:")
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
export interface PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface PNObservationParentalNotesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const PNObservationParentalNotesCodeCodingDisplay: t.Type<PNObservationParentalNotesCodeCodingDisplay> = t.recursion(
    "PNObservationParentalNotesCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PNObservationParentalNotesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface PNObservationParentalNotesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "401141001";
    id?: string;
    _display?: PNObservationParentalNotesCodeCodingDisplay;
    display?: string;
}

export const PNObservationParentalNotesCodeCoding: t.Type<PNObservationParentalNotesCodeCoding> = t.recursion(
    "PNObservationParentalNotesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("401141001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: PNObservationParentalNotesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface PNObservationParentalNotesMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Observation_Parental_Notes|1.0.0"
    >;
    id?: string;
}

export const PNObservationParentalNotesMeta: t.Type<PNObservationParentalNotesMeta> = t.recursion(
    "PNObservationParentalNotesMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Observation_Parental_Notes|1.0.0"
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
export interface PNObservationParentalNotesCode {
    coding: Array<PNObservationParentalNotesCodeCoding>;
    id?: string;
}

export const PNObservationParentalNotesCode: t.Type<PNObservationParentalNotesCode> = t.recursion(
    "PNObservationParentalNotesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PNObservationParentalNotesCodeCoding)
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
export interface PNObservationParentalNotesSubject {
    reference: string;
    id?: string;
}

export const PNObservationParentalNotesSubject: t.Type<PNObservationParentalNotesSubject> = t.recursion(
    "PNObservationParentalNotesSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Patient"
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
export interface PNObservationParentalNotesEncounter {
    reference: string;
    id?: string;
}

export const PNObservationParentalNotesEncounter: t.Type<PNObservationParentalNotesEncounter> = t.recursion(
    "PNObservationParentalNotesEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Encounter"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface PNObservationParentalNotes {
    resourceType: "Observation";
    meta: PNObservationParentalNotesMeta;
    status: "final";
    code: PNObservationParentalNotesCode;
    subject: PNObservationParentalNotesSubject;
    encounter: PNObservationParentalNotesEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
}

const PNObservationParentalNotes: t.Type<PNObservationParentalNotes> = t.recursion(
    "PNObservationParentalNotes",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: PNObservationParentalNotesMeta,
                    status: Literal("final"),
                    code: PNObservationParentalNotesCode,
                    subject: PNObservationParentalNotesSubject,
                    encounter: PNObservationParentalNotesEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default PNObservationParentalNotes;
