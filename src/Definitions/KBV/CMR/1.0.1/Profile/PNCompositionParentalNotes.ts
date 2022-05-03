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
    MinArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Composition_Parental_Notes"

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface PNCompositionParentalNotesNotizenEinleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: "Tipp: Ist Ihnen bei Ihrem Baby etwas aufgefallen, das Sie ungewöhnlich finden? Am besten notieren Sie sich vor der Untersuchung, was Sie beobachtet haben und worüber Sie mit Ihrer Ärztin oder Ihrem Arzt sprechen möchten.";
    id?: string;
}

export const PNCompositionParentalNotesNotizenEinleitung: t.Type<PNCompositionParentalNotesNotizenEinleitung> =
    t.recursion("PNCompositionParentalNotesNotizenEinleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: Literal(
                        "Tipp: Ist Ihnen bei Ihrem Baby etwas aufgefallen, das Sie ungewöhnlich finden? Am besten notieren Sie sich vor der Untersuchung, was Sie beobachtet haben und worüber Sie mit Ihrer Ärztin oder Ihrem Arzt sprechen möchten."
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PNCompositionParentalNotesTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "401141001";
    display: "Parental concern about child (finding)";
    id?: string;
}

export const PNCompositionParentalNotesTypeCoding: t.Type<PNCompositionParentalNotesTypeCoding> =
    t.recursion("PNCompositionParentalNotesTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("401141001"),
                    display: Literal("Parental concern about child (finding)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface PNCompositionParentalNotesCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const PNCompositionParentalNotesCategoryCoding: t.Type<PNCompositionParentalNotesCategoryCoding> =
    t.recursion("PNCompositionParentalNotesCategoryCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("243788004"),
                    display: Literal("Child examination (procedure)")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface PNCompositionParentalNotesSectionEntry {
    reference: string;
    id?: string;
}

export const PNCompositionParentalNotesSectionEntry: t.Type<PNCompositionParentalNotesSectionEntry> =
    t.recursion("PNCompositionParentalNotesSectionEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Observation_Parental_Notes|1.0.1"
                    ])
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
export interface PNCompositionParentalNotesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Composition_Parental_Notes|1.0.1">;
    id?: string;
}

export const PNCompositionParentalNotesMeta: t.Type<PNCompositionParentalNotesMeta> =
    t.recursion("PNCompositionParentalNotesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Composition_Parental_Notes|1.0.1"
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
 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
 */
export interface PNCompositionParentalNotesType {
    coding: Array<PNCompositionParentalNotesTypeCoding>;
    id?: string;
}

export const PNCompositionParentalNotesType: t.Type<PNCompositionParentalNotesType> =
    t.recursion("PNCompositionParentalNotesType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PNCompositionParentalNotesTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
 */
export interface PNCompositionParentalNotesCategory {
    coding: Array<PNCompositionParentalNotesCategoryCoding>;
    id?: string;
}

export const PNCompositionParentalNotesCategory: t.Type<PNCompositionParentalNotesCategory> =
    t.recursion("PNCompositionParentalNotesCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PNCompositionParentalNotesCategoryCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
 */
export interface PNCompositionParentalNotesSubject {
    reference: string;
    id?: string;
}

export const PNCompositionParentalNotesSubject: t.Type<PNCompositionParentalNotesSubject> =
    t.recursion("PNCompositionParentalNotesSubject", () =>
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
 * Describes the clinical encounter or type of care this documentation is associated with.
 */
export interface PNCompositionParentalNotesEncounter {
    reference: string;
    id?: string;
}

export const PNCompositionParentalNotesEncounter: t.Type<PNCompositionParentalNotesEncounter> =
    t.recursion("PNCompositionParentalNotesEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface PNCompositionParentalNotesAuthor {
    display: string;
    id?: string;
}

export const PNCompositionParentalNotesAuthor: t.Type<PNCompositionParentalNotesAuthor> =
    t.recursion("PNCompositionParentalNotesAuthor", () =>
        Excess(
            t.intersection([
                t.type({
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface PNCompositionParentalNotesSection {
    entry: Array<PNCompositionParentalNotesSectionEntry>;
    id?: string;
}

export const PNCompositionParentalNotesSection: t.Type<PNCompositionParentalNotesSection> =
    t.recursion("PNCompositionParentalNotesSection", () =>
        Excess(
            t.intersection([
                t.type({
                    entry: MinMaxArray(1, 1, PNCompositionParentalNotesSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface PNCompositionParentalNotes {
    resourceType: "Composition";
    meta: PNCompositionParentalNotesMeta;
    status: "final";
    type: PNCompositionParentalNotesType;
    category: Array<PNCompositionParentalNotesCategory>;
    subject: PNCompositionParentalNotesSubject;
    encounter: PNCompositionParentalNotesEncounter;
    date: string;
    author: Array<PNCompositionParentalNotesAuthor>;
    title: "Hier können Sie Ihre Notizen eintragen:";
    section: Array<PNCompositionParentalNotesSection>;
    id?: string;
    text?: Narrative;
    extension?: (Extension | PNCompositionParentalNotesNotizenEinleitung)[];
}

const PNCompositionParentalNotes: t.Type<PNCompositionParentalNotes> = t.recursion(
    "PNCompositionParentalNotes",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: PNCompositionParentalNotesMeta,
                    status: Literal("final"),
                    type: PNCompositionParentalNotesType,
                    category: MinMaxArray(1, 1, PNCompositionParentalNotesCategory),
                    subject: PNCompositionParentalNotesSubject,
                    encounter: PNCompositionParentalNotesEncounter,
                    date: SCALARDateTime,
                    author: MinArray(1, PNCompositionParentalNotesAuthor),
                    title: Literal("Hier können Sie Ihre Notizen eintragen:"),
                    section: MinMaxArray(1, 1, PNCompositionParentalNotesSection)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<PNCompositionParentalNotesNotizenEinleitung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, PNCompositionParentalNotesNotizenEinleitung]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PNCompositionParentalNotesNotizenEinleitung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

export default PNCompositionParentalNotes;
