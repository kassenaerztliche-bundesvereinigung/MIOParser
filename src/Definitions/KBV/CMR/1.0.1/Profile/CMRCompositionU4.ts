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

import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U4"

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "- Neugeborenen-Hörscreening - Screening auf Hüftgelenksdysplasie und -luxation";
    id?: string;
}

export const CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis: t.Type<CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis> =
    t.recursion("CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "- Neugeborenen-Hörscreening - Screening auf Hüftgelenksdysplasie und -luxation"
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
export interface CMRCompositionU4ErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU4ErgebnisseSectionCodeCoding: t.Type<CMRCompositionU4ErgebnisseSectionCodeCoding> =
    t.recursion("CMRCompositionU4ErgebnisseSectionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("722448004"),
                    display: Literal("Treatment plan report (record artifact)")
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
export interface CMRCompositionU4HoerscreeningCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252957005";
    display: "Children's hearing test (procedure)";
    id?: string;
}

export const CMRCompositionU4HoerscreeningCodeCodeSnomed: t.Type<CMRCompositionU4HoerscreeningCodeCodeSnomed> =
    t.recursion("CMRCompositionU4HoerscreeningCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("252957005"),
                    display: Literal("Children's hearing test (procedure)")
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
export interface CMRCompositionU4HoerscreeningCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "54111-0";
    display: "Newborn hearing screening panel";
    id?: string;
}

export const CMRCompositionU4HoerscreeningCodeCodeLoinc: t.Type<CMRCompositionU4HoerscreeningCodeCodeLoinc> =
    t.recursion("CMRCompositionU4HoerscreeningCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("54111-0"),
                    display: Literal("Newborn hearing screening panel")
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
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "171241003";
    display: "Congenital dislocation of the hip screening (procedure)";
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("171241003"),
                    display: Literal(
                        "Congenital dislocation of the hip screening (procedure)"
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
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "30711-6";
    display: "US Hip developmental joint assessment";
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("30711-6"),
                    display: Literal("US Hip developmental joint assessment")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
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
export interface CMRCompositionU4AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("423374008"),
                    display: Literal("Review of systems section (record artifact)")
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
export interface CMRCompositionU4AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU4SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU4SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU4SozialanamneseAnamneseAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Zutreffendes bitte ankreuzen!")
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
export interface CMRCompositionU4SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU4SozialanamneseCodeCoding: t.Type<CMRCompositionU4SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU4SozialanamneseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("281575007"),
                    display: Literal("Family social history (situation)")
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
export interface CMRCompositionU4SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU4SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU4SozialanamneseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU4UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU4UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU4UntersuchungUntersuchungAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal("Nur Auffälligkeiten ankreuzen!")
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
export interface CMRCompositionU4UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU4UntersuchungCodeCoding: t.Type<CMRCompositionU4UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU4UntersuchungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("425044008"),
                    display: Literal("Physical exam section (record artifact)")
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
export interface CMRCompositionU4UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU4UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU4UntersuchungEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU4BeratungBeratungAnweisung: t.Type<CMRCompositionU4BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU4BeratungBeratungAnweisung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                    ),
                    valueString: Literal(
                        "Bei erweitertem Beratungsbedarf bitte ankreuzen!"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU4BeratungBeratungHinweis: t.Type<CMRCompositionU4BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU4BeratungBeratungHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal("Beratung vor allem zu folgenden Themen:")
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
export interface CMRCompositionU4BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU4BeratungCodeCoding: t.Type<CMRCompositionU4BeratungCodeCoding> =
    t.recursion("CMRCompositionU4BeratungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("409066002"),
                    display: Literal("Education, guidance and counseling (procedure)")
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
export interface CMRCompositionU4BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4BeratungEmptyReasonCoding: t.Type<CMRCompositionU4BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU4BeratungEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
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
export interface CMRCompositionU4ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU4ErgebnisseCodeCoding: t.Type<CMRCompositionU4ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU4ErgebnisseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("423100009"),
                    display: Literal("Results section (record artifact)")
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
export interface CMRCompositionU4ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU4ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU4ErgebnisseEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4ErgebnisseSectionCode {
    coding: Array<CMRCompositionU4ErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU4ErgebnisseSectionCode: t.Type<CMRCompositionU4ErgebnisseSectionCode> =
    t.recursion("CMRCompositionU4ErgebnisseSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4ErgebnisseSectionCodeCoding)
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
export interface CMRCompositionU4ErgebnisseSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4ErgebnisseSectionEntry: t.Type<CMRCompositionU4ErgebnisseSectionEntry> =
    t.recursion("CMRCompositionU4ErgebnisseSectionEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.1"
                    ])
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
export interface CMRCompositionU4HoerscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4HoerscreeningEmptyReasonCoding: t.Type<CMRCompositionU4HoerscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU4HoerscreeningEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                        ),
                        valueString: Literal(
                            "Nur ankreuzen, wenn die Items NICHT erfüllt werden!"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beobachtung der Interaktion: Insbesondere die folgenden Reaktionen des Kindes können der Ärztin oder dem Arzt als Hinweis zur Einschätzung von Stimmung, Kommunikations- und Regulationsmöglichkeiten des Kindes im Kontakt mit seiner primären Bezugsperson und als weitere Grundlage für das Ärztin- oder Arzt-Elterngespräch dienen:";
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis> =
    t.recursion(
        "CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                        ),
                        valueString: Literal(
                            "Beobachtung der Interaktion: Insbesondere die folgenden Reaktionen des Kindes können der Ärztin oder dem Arzt als Hinweis zur Einschätzung von Stimmung, Kommunikations- und Regulationsmöglichkeiten des Kindes im Kontakt mit seiner primären Bezugsperson und als weitere Grundlage für das Ärztin- oder Arzt-Elterngespräch dienen:"
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
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("406207000"),
                    display: Literal("Child development by age (observable entity)")
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
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal(
                            "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                        ),
                        version: Literal("4.0.1"),
                        code: Literal("closed"),
                        display: Literal("Closed")
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
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReasonCoding: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReasonCoding> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("closed"),
                    display: Literal("Closed")
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
export interface CMRCompositionU4PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU4PerzentilkurvenCodeCoding: t.Type<CMRCompositionU4PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU4PerzentilkurvenCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("129822005"),
                    display: Literal(
                        "Childhood growth AND/OR development finding (finding)"
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
export interface CMRCompositionU4PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU4PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU4PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU4PerzentilkurvenEmptyReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/list-empty-reason"
                    ),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("closed"),
                    display: Literal("Closed")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU4AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4AktuelleAnamneseDesKindesCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4AktuelleAnamneseDesKindesEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesEntry: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesEntry> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Current_Child_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU4AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU4AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4AktuelleAnamneseDesKindesEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4SozialanamneseCode {
    coding: Array<CMRCompositionU4SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU4SozialanamneseCode: t.Type<CMRCompositionU4SozialanamneseCode> =
    t.recursion("CMRCompositionU4SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4SozialanamneseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4SozialanamneseText: t.Type<CMRCompositionU4SozialanamneseText> =
    t.recursion("CMRCompositionU4SozialanamneseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4SozialanamneseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4SozialanamneseEntry: t.Type<CMRCompositionU4SozialanamneseEntry> =
    t.recursion("CMRCompositionU4SozialanamneseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU4SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4SozialanamneseEmptyReason: t.Type<CMRCompositionU4SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU4SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4SozialanamneseEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4UntersuchungCode {
    coding: Array<CMRCompositionU4UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU4UntersuchungCode: t.Type<CMRCompositionU4UntersuchungCode> =
    t.recursion("CMRCompositionU4UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4UntersuchungCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4UntersuchungText: t.Type<CMRCompositionU4UntersuchungText> =
    t.recursion("CMRCompositionU4UntersuchungText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4UntersuchungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4UntersuchungEntry: t.Type<CMRCompositionU4UntersuchungEntry> =
    t.recursion("CMRCompositionU4UntersuchungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Mouth_Nose|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_U5_Physical_Exam_Eyes|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4UntersuchungEmptyReason {
    coding: Array<CMRCompositionU4UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4UntersuchungEmptyReason: t.Type<CMRCompositionU4UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU4UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4UntersuchungEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4BeratungCode {
    coding: Array<CMRCompositionU4BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU4BeratungCode: t.Type<CMRCompositionU4BeratungCode> =
    t.recursion("CMRCompositionU4BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4BeratungCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4BeratungText: t.Type<CMRCompositionU4BeratungText> =
    t.recursion("CMRCompositionU4BeratungText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4BeratungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4BeratungEntry: t.Type<CMRCompositionU4BeratungEntry> =
    t.recursion("CMRCompositionU4BeratungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U4_Consultation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4BeratungEmptyReason {
    coding: Array<CMRCompositionU4BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4BeratungEmptyReason: t.Type<CMRCompositionU4BeratungEmptyReason> =
    t.recursion("CMRCompositionU4BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4BeratungEmptyReasonCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4ErgebnisseCode {
    coding: Array<CMRCompositionU4ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU4ErgebnisseCode: t.Type<CMRCompositionU4ErgebnisseCode> =
    t.recursion("CMRCompositionU4ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4ErgebnisseCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4ErgebnisseText: t.Type<CMRCompositionU4ErgebnisseText> =
    t.recursion("CMRCompositionU4ErgebnisseText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4ErgebnisseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4ErgebnisseEntry: t.Type<CMRCompositionU4ErgebnisseEntry> =
    t.recursion("CMRCompositionU4ErgebnisseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU4ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4ErgebnisseEmptyReason: t.Type<CMRCompositionU4ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU4ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4ErgebnisseEmptyReasonCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface CMRCompositionU4ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    code: CMRCompositionU4ErgebnisseSectionCode;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis
    )[];
    entry?: Array<CMRCompositionU4ErgebnisseSectionEntry>;
}

export const CMRCompositionU4ErgebnisseSection: t.Type<CMRCompositionU4ErgebnisseSection> =
    t.recursion("CMRCompositionU4ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    ),
                    code: CMRCompositionU4ErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU4ErgebnisseSectionPruefungAufklaerungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU4ErgebnisseSectionEntry)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4HoerscreeningCode {
    coding: Array<
        | CMRCompositionU4HoerscreeningCodeCodeSnomed
        | CMRCompositionU4HoerscreeningCodeCodeLoinc
    >;
    id?: string;
    text?: string;
}

export const CMRCompositionU4HoerscreeningCode: t.Type<CMRCompositionU4HoerscreeningCode> =
    t.recursion("CMRCompositionU4HoerscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU4HoerscreeningCodeCodeSnomed>,
                                t.Type<CMRCompositionU4HoerscreeningCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU4HoerscreeningCodeCodeSnomed,
                            CMRCompositionU4HoerscreeningCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU4HoerscreeningCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU4HoerscreeningCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4HoerscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4HoerscreeningText: t.Type<CMRCompositionU4HoerscreeningText> =
    t.recursion("CMRCompositionU4HoerscreeningText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4HoerscreeningEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4HoerscreeningEntry: t.Type<CMRCompositionU4HoerscreeningEntry> =
    t.recursion("CMRCompositionU4HoerscreeningEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4HoerscreeningEmptyReason {
    coding: Array<CMRCompositionU4HoerscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4HoerscreeningEmptyReason: t.Type<CMRCompositionU4HoerscreeningEmptyReason> =
    t.recursion("CMRCompositionU4HoerscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4HoerscreeningEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU4OrientierendeBeurteilungDerEntwicklungText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEntry: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEntry> =
    t.recursion("CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Development_Assessment|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U6_Indication_for_Abnormality|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieCode {
    coding: Array<
        | CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed
        | CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieCode: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieCode> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed>,
                                t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed,
                            CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU4ScreeningHueftgelenksdysplasieCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * In diesem Element ist mindestens der Titel der Section anzugeben. Zusätzliche Informationen können angegeben werden.
 */
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieText: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieText> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieEntry: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieEntry> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReason {
    coding: Array<CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReason: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReason> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU4PerzentilkurvenCode {
    coding: Array<CMRCompositionU4PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU4PerzentilkurvenCode: t.Type<CMRCompositionU4PerzentilkurvenCode> =
    t.recursion("CMRCompositionU4PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4PerzentilkurvenCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
 */
export interface CMRCompositionU4PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU4PerzentilkurvenText: t.Type<CMRCompositionU4PerzentilkurvenText> =
    t.recursion("CMRCompositionU4PerzentilkurvenText", () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("generated"),
                    div: SCALARXhtml
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
export interface CMRCompositionU4PerzentilkurvenEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU4PerzentilkurvenEntry: t.Type<CMRCompositionU4PerzentilkurvenEntry> =
    t.recursion("CMRCompositionU4PerzentilkurvenEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
 */
export interface CMRCompositionU4PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU4PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU4PerzentilkurvenEmptyReason: t.Type<CMRCompositionU4PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU4PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU4PerzentilkurvenEmptyReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU4U4Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U4 Elterninformation zur Untersuchung vom 3. bis zum 4. Lebensmonat Die meisten Babys werden in diesem Alter immer mobiler und aktiver. Sie beginnen, nach Dingen zu greifen und zu lächeln. Sie reagieren auf ihre Bezugsperson. Außerdem machen sie sich durch bestimmte Laute bemerkbar. Die Ärztin oder der Arzt achtet vor allem darauf, ob sich Ihr Baby körperlich und geistig altersgerecht entwickelt. Unter anderem wird auch beobachtet, wie sich Ihr Baby bewegt. Die Ärztin oder der Arzt prüft, ob Ihr Baby hören und sehen kann. Außerdem interessiert es Ihre Ärztin oder Ihren Arzt, wie Sie und Ihr Baby miteinander im Kontakt sind. Es wird wieder eine körperliche Untersuchung durchgeführt und dabei wird auch kontrolliert, ob die Knochenlücke am Kopf (Fontanelle) ausreichend groß ist, damit der Schädel weiterhin problemlos wachsen kann. Zur U4 werden Wiederholungsimpfungen angeboten. Spätestens jetzt erfolgen die ersten Impfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Verdauung Ihres Babys, Maßnahmen zur Vermeidung des plötzlichen Kindstodes, Unfallverhütung und wie Sie reagieren sollten, wenn Ihr Baby besonders viel schreit und nicht schlafen kann. Weitere Themen sind die Förderung der Sprachentwicklung durch häufiges Sprechen und Singen mit dem Baby sowie die Rachitisprophylaxe mittels Vitamin D und die Kariesprophylaxe mittels Fluorid. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühe Hilfen). Falls der Neugeborenen-Hörtest noch nicht stattgefunden hat, sollte er umgehend erfolgen.";
    id?: string;
}

export const CMRCompositionU4U4Einleitung: t.Type<CMRCompositionU4U4Einleitung> =
    t.recursion("CMRCompositionU4U4Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U4 Elterninformation zur Untersuchung vom 3. bis zum 4. Lebensmonat Die meisten Babys werden in diesem Alter immer mobiler und aktiver. Sie beginnen, nach Dingen zu greifen und zu lächeln. Sie reagieren auf ihre Bezugsperson. Außerdem machen sie sich durch bestimmte Laute bemerkbar. Die Ärztin oder der Arzt achtet vor allem darauf, ob sich Ihr Baby körperlich und geistig altersgerecht entwickelt. Unter anderem wird auch beobachtet, wie sich Ihr Baby bewegt. Die Ärztin oder der Arzt prüft, ob Ihr Baby hören und sehen kann. Außerdem interessiert es Ihre Ärztin oder Ihren Arzt, wie Sie und Ihr Baby miteinander im Kontakt sind. Es wird wieder eine körperliche Untersuchung durchgeführt und dabei wird auch kontrolliert, ob die Knochenlücke am Kopf (Fontanelle) ausreichend groß ist, damit der Schädel weiterhin problemlos wachsen kann. Zur U4 werden Wiederholungsimpfungen angeboten. Spätestens jetzt erfolgen die ersten Impfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Verdauung Ihres Babys, Maßnahmen zur Vermeidung des plötzlichen Kindstodes, Unfallverhütung und wie Sie reagieren sollten, wenn Ihr Baby besonders viel schreit und nicht schlafen kann. Weitere Themen sind die Förderung der Sprachentwicklung durch häufiges Sprechen und Singen mit dem Baby sowie die Rachitisprophylaxe mittels Vitamin D und die Kariesprophylaxe mittels Fluorid. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühe Hilfen). Falls der Neugeborenen-Hörtest noch nicht stattgefunden hat, sollte er umgehend erfolgen."
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
export interface CMRCompositionU4TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "170250008";
    display: "Child 3 month examination (procedure)";
    id?: string;
}

export const CMRCompositionU4TypeCoding: t.Type<CMRCompositionU4TypeCoding> = t.recursion(
    "CMRCompositionU4TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("170250008"),
                    display: Literal("Child 3 month examination (procedure)")
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
export interface CMRCompositionU4CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU4CategoryCoding: t.Type<CMRCompositionU4CategoryCoding> =
    t.recursion("CMRCompositionU4CategoryCoding", () =>
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
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU4AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU4AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU4AktuelleAnamneseDesKindesEntry[];
    emptyReason?: CMRCompositionU4AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU4AktuelleAnamneseDesKindes: t.Type<CMRCompositionU4AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU4AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU4AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU4AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU4AktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU4AktuelleAnamneseDesKindesEntry),
                    emptyReason: CMRCompositionU4AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU4SozialanamneseCode;
    text: CMRCompositionU4SozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU4SozialanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU4SozialanamneseEntry[];
    emptyReason?: CMRCompositionU4SozialanamneseEmptyReason;
}

export const CMRCompositionU4Sozialanamnese: t.Type<CMRCompositionU4Sozialanamnese> =
    t.recursion("CMRCompositionU4Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU4SozialanamneseCode,
                    text: CMRCompositionU4SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU4SozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU4SozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU4SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU4SozialanamneseEntry),
                    emptyReason: CMRCompositionU4SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU4UntersuchungCode;
    text: CMRCompositionU4UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU4UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU4UntersuchungEntry[];
    emptyReason?: CMRCompositionU4UntersuchungEmptyReason;
}

export const CMRCompositionU4Untersuchung: t.Type<CMRCompositionU4Untersuchung> =
    t.recursion("CMRCompositionU4Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU4UntersuchungCode,
                    text: CMRCompositionU4UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU4UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU4UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU4UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU4UntersuchungEntry),
                    emptyReason: CMRCompositionU4UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4Beratung {
    title: "Beratung";
    code: CMRCompositionU4BeratungCode;
    text: CMRCompositionU4BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU4BeratungBeratungAnweisung
        | CMRCompositionU4BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU4BeratungEntry[];
    emptyReason?: CMRCompositionU4BeratungEmptyReason;
}

export const CMRCompositionU4Beratung: t.Type<CMRCompositionU4Beratung> = t.recursion(
    "CMRCompositionU4Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU4BeratungCode,
                    text: CMRCompositionU4BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU4BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU4BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU4BeratungBeratungAnweisung,
                            CMRCompositionU4BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU4BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU4BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU4BeratungEntry),
                    emptyReason: CMRCompositionU4BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU4ErgebnisseCode;
    text: CMRCompositionU4ErgebnisseText;
    section: Array<CMRCompositionU4ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU4ErgebnisseEntry[];
    emptyReason?: CMRCompositionU4ErgebnisseEmptyReason;
}

export const CMRCompositionU4Ergebnisse: t.Type<CMRCompositionU4Ergebnisse> = t.recursion(
    "CMRCompositionU4Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU4ErgebnisseCode,
                    text: CMRCompositionU4ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU4ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU4ErgebnisseEntry),
                    emptyReason: CMRCompositionU4ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4Hoerscreening {
    title: "Neugeborenen-Hörscreening";
    code: CMRCompositionU4HoerscreeningCode;
    text: CMRCompositionU4HoerscreeningText;
    id?: string;
    entry?: CMRCompositionU4HoerscreeningEntry[];
    emptyReason?: CMRCompositionU4HoerscreeningEmptyReason;
}

export const CMRCompositionU4Hoerscreening: t.Type<CMRCompositionU4Hoerscreening> =
    t.recursion("CMRCompositionU4Hoerscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Neugeborenen-Hörscreening"),
                    code: CMRCompositionU4HoerscreeningCode,
                    text: CMRCompositionU4HoerscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU4HoerscreeningEntry),
                    emptyReason: CMRCompositionU4HoerscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
        | CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis
    )[];
    entry?: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEntry[];
    emptyReason?: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU4OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU4OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>,
                                t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                            CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU4OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(
                        CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEntry
                    ),
                    emptyReason:
                        CMRCompositionU4OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4ScreeningHueftgelenksdysplasie {
    title: "Screening auf Hüftgelenksdysplasie und -luxation";
    code: CMRCompositionU4ScreeningHueftgelenksdysplasieCode;
    text: CMRCompositionU4ScreeningHueftgelenksdysplasieText;
    id?: string;
    entry?: CMRCompositionU4ScreeningHueftgelenksdysplasieEntry[];
    emptyReason?: CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReason;
}

export const CMRCompositionU4ScreeningHueftgelenksdysplasie: t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasie> =
    t.recursion("CMRCompositionU4ScreeningHueftgelenksdysplasie", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Screening auf Hüftgelenksdysplasie und -luxation"),
                    code: CMRCompositionU4ScreeningHueftgelenksdysplasieCode,
                    text: CMRCompositionU4ScreeningHueftgelenksdysplasieText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU4ScreeningHueftgelenksdysplasieEntry),
                    emptyReason: CMRCompositionU4ScreeningHueftgelenksdysplasieEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU4Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU4PerzentilkurvenCode;
    text: CMRCompositionU4PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU4PerzentilkurvenEntry>;
    emptyReason?: CMRCompositionU4PerzentilkurvenEmptyReason;
}

export const CMRCompositionU4Perzentilkurven: t.Type<CMRCompositionU4Perzentilkurven> =
    t.recursion("CMRCompositionU4Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU4PerzentilkurvenCode,
                    text: CMRCompositionU4PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU4PerzentilkurvenEntry),
                    emptyReason: CMRCompositionU4PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU4Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U4|1.0.1">;
    id?: string;
}

export const CMRCompositionU4Meta: t.Type<CMRCompositionU4Meta> = t.recursion(
    "CMRCompositionU4Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U4|1.0.1"
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
export interface CMRCompositionU4Type {
    coding: Array<CMRCompositionU4TypeCoding>;
    id?: string;
}

export const CMRCompositionU4Type: t.Type<CMRCompositionU4Type> = t.recursion(
    "CMRCompositionU4Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4TypeCoding)
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
export interface CMRCompositionU4Category {
    coding: Array<CMRCompositionU4CategoryCoding>;
    id?: string;
}

export const CMRCompositionU4Category: t.Type<CMRCompositionU4Category> = t.recursion(
    "CMRCompositionU4Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU4CategoryCoding)
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
export interface CMRCompositionU4Subject {
    reference: string;
    id?: string;
}

export const CMRCompositionU4Subject: t.Type<CMRCompositionU4Subject> = t.recursion(
    "CMRCompositionU4Subject",
    () =>
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
export interface CMRCompositionU4Encounter {
    reference: string;
    id?: string;
}

export const CMRCompositionU4Encounter: t.Type<CMRCompositionU4Encounter> = t.recursion(
    "CMRCompositionU4Encounter",
    () =>
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
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface CMRCompositionU4Author {
    reference: string;
    id?: string;
}

export const CMRCompositionU4Author: t.Type<CMRCompositionU4Author> = t.recursion(
    "CMRCompositionU4Author",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCompositionU4 {
    resourceType: "Composition";
    meta: CMRCompositionU4Meta;
    status: "final";
    type: CMRCompositionU4Type;
    category: Array<CMRCompositionU4Category>;
    subject: CMRCompositionU4Subject;
    encounter: CMRCompositionU4Encounter;
    date: string;
    author: Array<CMRCompositionU4Author>;
    title: "U4";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU4U4Einleitung)[];
    section?: (
        | CMRCompositionU4AktuelleAnamneseDesKindes
        | CMRCompositionU4Sozialanamnese
        | CMRCompositionU4Untersuchung
        | CMRCompositionU4Beratung
        | CMRCompositionU4Ergebnisse
        | CMRCompositionU4Hoerscreening
        | CMRCompositionU4OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU4ScreeningHueftgelenksdysplasie
        | CMRCompositionU4Perzentilkurven
    )[];
}

const CMRCompositionU4: t.Type<CMRCompositionU4> = t.recursion("CMRCompositionU4", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU4Meta,
                status: Literal("final"),
                type: CMRCompositionU4Type,
                category: MinMaxArray(1, 1, CMRCompositionU4Category),
                subject: CMRCompositionU4Subject,
                encounter: CMRCompositionU4Encounter,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU4Author),
                title: Literal("U4")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU4U4Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU4U4Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU4U4Einleitung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                section: ReqArray<
                    t.UnionC<
                        [
                            t.Type<CMRCompositionU4AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU4Sozialanamnese>,
                            t.Type<CMRCompositionU4Untersuchung>,
                            t.Type<CMRCompositionU4Beratung>,
                            t.Type<CMRCompositionU4Ergebnisse>,
                            t.Type<CMRCompositionU4Hoerscreening>,
                            t.Type<CMRCompositionU4OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU4ScreeningHueftgelenksdysplasie>,
                            t.Type<CMRCompositionU4Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU4AktuelleAnamneseDesKindes,
                        CMRCompositionU4Sozialanamnese,
                        CMRCompositionU4Untersuchung,
                        CMRCompositionU4Beratung,
                        CMRCompositionU4Ergebnisse,
                        CMRCompositionU4Hoerscreening,
                        CMRCompositionU4OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU4ScreeningHueftgelenksdysplasie,
                        CMRCompositionU4Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU4AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU4Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU4Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU4Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU4Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU4Hoerscreening,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Neugeborenen-Hörscreening" }
                        },
                        {
                            codec: CMRCompositionU4OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU4ScreeningHueftgelenksdysplasie,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Screening auf Hüftgelenksdysplasie und -luxation"
                            }
                        },
                        {
                            codec: CMRCompositionU4Perzentilkurven,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Perzentilkurven" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    )
);

export default CMRCompositionU4;
