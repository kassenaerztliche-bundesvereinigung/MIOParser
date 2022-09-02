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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U5"

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "- Neugeborenen-Hörscreening";
    id?: string;
}

export const CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis: t.Type<CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis> =
    t.recursion("CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal("- Neugeborenen-Hörscreening")
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
export interface CMRCompositionU5ErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU5ErgebnisseSectionCodeCoding: t.Type<CMRCompositionU5ErgebnisseSectionCodeCoding> =
    t.recursion("CMRCompositionU5ErgebnisseSectionCodeCoding", () =>
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
export interface CMRCompositionU5HoerscreeningCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252957005";
    display: "Children's hearing test (procedure)";
    id?: string;
}

export const CMRCompositionU5HoerscreeningCodeCodeSnomed: t.Type<CMRCompositionU5HoerscreeningCodeCodeSnomed> =
    t.recursion("CMRCompositionU5HoerscreeningCodeCodeSnomed", () =>
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
export interface CMRCompositionU5HoerscreeningCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "54111-0";
    display: "Newborn hearing screening panel";
    id?: string;
}

export const CMRCompositionU5HoerscreeningCodeCodeLoinc: t.Type<CMRCompositionU5HoerscreeningCodeCodeLoinc> =
    t.recursion("CMRCompositionU5HoerscreeningCodeCodeLoinc", () =>
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
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
export interface CMRCompositionU5AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesCodeCoding", () =>
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
export interface CMRCompositionU5AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
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
export interface CMRCompositionU5SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU5SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU5SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU5SozialanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU5SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU5SozialanamneseCodeCoding: t.Type<CMRCompositionU5SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU5SozialanamneseCodeCoding", () =>
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
export interface CMRCompositionU5SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU5SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU5SozialanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU5UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU5UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU5UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU5UntersuchungUntersuchungAnweisung", () =>
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
export interface CMRCompositionU5UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU5UntersuchungCodeCoding: t.Type<CMRCompositionU5UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU5UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU5UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU5UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU5UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU5BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU5BeratungBeratungAnweisung: t.Type<CMRCompositionU5BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU5BeratungBeratungAnweisung", () =>
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
export interface CMRCompositionU5BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU5BeratungBeratungHinweis: t.Type<CMRCompositionU5BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU5BeratungBeratungHinweis", () =>
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
export interface CMRCompositionU5BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU5BeratungCodeCoding: t.Type<CMRCompositionU5BeratungCodeCoding> =
    t.recursion("CMRCompositionU5BeratungCodeCoding", () =>
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
export interface CMRCompositionU5BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5BeratungEmptyReasonCoding: t.Type<CMRCompositionU5BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU5BeratungEmptyReasonCoding", () =>
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
export interface CMRCompositionU5ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU5ErgebnisseCodeCoding: t.Type<CMRCompositionU5ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU5ErgebnisseCodeCoding", () =>
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
export interface CMRCompositionU5ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU5ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU5ErgebnisseEmptyReasonCoding", () =>
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
export interface CMRCompositionU5ErgebnisseSectionCode {
    coding: Array<CMRCompositionU5ErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU5ErgebnisseSectionCode: t.Type<CMRCompositionU5ErgebnisseSectionCode> =
    t.recursion("CMRCompositionU5ErgebnisseSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5ErgebnisseSectionCodeCoding)
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
export interface CMRCompositionU5ErgebnisseSectionEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5ErgebnisseSectionEntryReference: t.Type<CMRCompositionU5ErgebnisseSectionEntryReference> =
    t.recursion("CMRCompositionU5ErgebnisseSectionEntryReference", () =>
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
export interface CMRCompositionU5HoerscreeningEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5HoerscreeningEmptyReasonCoding: t.Type<CMRCompositionU5HoerscreeningEmptyReasonCoding> =
    t.recursion("CMRCompositionU5HoerscreeningEmptyReasonCoding", () =>
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beobachtung der Interaktion: Insbesondere die folgenden Reaktionen des Kindes können der Ärztin oder dem Arzt als Hinweis zur Einschätzung von Stimmung, Kommunikations- und Regulationsmöglichkeiten des Kindes im Kontakt mit seiner primären Bezugsperson und als weitere Grundlage für das Ärztin- oder Arzt-Elterngespräch dienen:";
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis> =
    t.recursion(
        "CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis",
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
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
export interface CMRCompositionU5PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU5PerzentilkurvenCodeCoding: t.Type<CMRCompositionU5PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU5PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU5PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU5PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU5PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU5PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU5AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU5AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5AktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU5AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesText", () =>
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
export interface CMRCompositionU5AktuelleAnamneseDesKindesEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesEntryReference: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesEntryReference> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Current_Child_History|1.0.1"
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
export interface CMRCompositionU5AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU5AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU5AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5AktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU5SozialanamneseCode {
    coding: Array<CMRCompositionU5SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU5SozialanamneseCode: t.Type<CMRCompositionU5SozialanamneseCode> =
    t.recursion("CMRCompositionU5SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5SozialanamneseCodeCoding)
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
export interface CMRCompositionU5SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5SozialanamneseText: t.Type<CMRCompositionU5SozialanamneseText> =
    t.recursion("CMRCompositionU5SozialanamneseText", () =>
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
export interface CMRCompositionU5SozialanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5SozialanamneseEntryReference: t.Type<CMRCompositionU5SozialanamneseEntryReference> =
    t.recursion("CMRCompositionU5SozialanamneseEntryReference", () =>
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
export interface CMRCompositionU5SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU5SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5SozialanamneseEmptyReason: t.Type<CMRCompositionU5SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU5SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5SozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU5UntersuchungCode {
    coding: Array<CMRCompositionU5UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU5UntersuchungCode: t.Type<CMRCompositionU5UntersuchungCode> =
    t.recursion("CMRCompositionU5UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5UntersuchungCodeCoding)
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
export interface CMRCompositionU5UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5UntersuchungText: t.Type<CMRCompositionU5UntersuchungText> =
    t.recursion("CMRCompositionU5UntersuchungText", () =>
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
export interface CMRCompositionU5UntersuchungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5UntersuchungEntryReference: t.Type<CMRCompositionU5UntersuchungEntryReference> =
    t.recursion("CMRCompositionU5UntersuchungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Mouth_Nose|1.0.1",
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
export interface CMRCompositionU5UntersuchungEmptyReason {
    coding: Array<CMRCompositionU5UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5UntersuchungEmptyReason: t.Type<CMRCompositionU5UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU5UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU5BeratungCode {
    coding: Array<CMRCompositionU5BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU5BeratungCode: t.Type<CMRCompositionU5BeratungCode> =
    t.recursion("CMRCompositionU5BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5BeratungCodeCoding)
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
export interface CMRCompositionU5BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5BeratungText: t.Type<CMRCompositionU5BeratungText> =
    t.recursion("CMRCompositionU5BeratungText", () =>
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
export interface CMRCompositionU5BeratungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5BeratungEntryReference: t.Type<CMRCompositionU5BeratungEntryReference> =
    t.recursion("CMRCompositionU5BeratungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U5_Consultation|1.0.1",
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
export interface CMRCompositionU5BeratungEmptyReason {
    coding: Array<CMRCompositionU5BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5BeratungEmptyReason: t.Type<CMRCompositionU5BeratungEmptyReason> =
    t.recursion("CMRCompositionU5BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5BeratungEmptyReasonCoding)
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
export interface CMRCompositionU5ErgebnisseCode {
    coding: Array<CMRCompositionU5ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU5ErgebnisseCode: t.Type<CMRCompositionU5ErgebnisseCode> =
    t.recursion("CMRCompositionU5ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5ErgebnisseCodeCoding)
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
export interface CMRCompositionU5ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5ErgebnisseText: t.Type<CMRCompositionU5ErgebnisseText> =
    t.recursion("CMRCompositionU5ErgebnisseText", () =>
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
export interface CMRCompositionU5ErgebnisseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5ErgebnisseEntryReference: t.Type<CMRCompositionU5ErgebnisseEntryReference> =
    t.recursion("CMRCompositionU5ErgebnisseEntryReference", () =>
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
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.1"
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
export interface CMRCompositionU5ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU5ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5ErgebnisseEmptyReason: t.Type<CMRCompositionU5ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU5ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5ErgebnisseEmptyReasonCoding)
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
export interface CMRCompositionU5ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    code: CMRCompositionU5ErgebnisseSectionCode;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis
    )[];
    entry?: Array<CMRCompositionU5ErgebnisseSectionEntryReference>;
}

export const CMRCompositionU5ErgebnisseSection: t.Type<CMRCompositionU5ErgebnisseSection> =
    t.recursion("CMRCompositionU5ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    ),
                    code: CMRCompositionU5ErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU5ErgebnisseSectionPruefungAufklaerungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU5ErgebnisseSectionEntryReference)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU5HoerscreeningCode {
    coding: Array<
        | CMRCompositionU5HoerscreeningCodeCodeSnomed
        | CMRCompositionU5HoerscreeningCodeCodeLoinc
    >;
    id?: string;
}

export const CMRCompositionU5HoerscreeningCode: t.Type<CMRCompositionU5HoerscreeningCode> =
    t.recursion("CMRCompositionU5HoerscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU5HoerscreeningCodeCodeSnomed>,
                                t.Type<CMRCompositionU5HoerscreeningCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU5HoerscreeningCodeCodeSnomed,
                            CMRCompositionU5HoerscreeningCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRCompositionU5HoerscreeningCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRCompositionU5HoerscreeningCodeCodeLoinc,
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
export interface CMRCompositionU5HoerscreeningText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5HoerscreeningText: t.Type<CMRCompositionU5HoerscreeningText> =
    t.recursion("CMRCompositionU5HoerscreeningText", () =>
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
export interface CMRCompositionU5HoerscreeningEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5HoerscreeningEntryReference: t.Type<CMRCompositionU5HoerscreeningEntryReference> =
    t.recursion("CMRCompositionU5HoerscreeningEntryReference", () =>
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
export interface CMRCompositionU5HoerscreeningEmptyReason {
    coding: Array<CMRCompositionU5HoerscreeningEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5HoerscreeningEmptyReason: t.Type<CMRCompositionU5HoerscreeningEmptyReason> =
    t.recursion("CMRCompositionU5HoerscreeningEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5HoerscreeningEmptyReasonCoding
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCodeCoding
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU5OrientierendeBeurteilungDerEntwicklungText", () =>
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEntryReference: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEntryReference> =
    t.recursion(
        "CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Development_Assessment|1.0.1",
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
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
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
export interface CMRCompositionU5PerzentilkurvenCode {
    coding: Array<CMRCompositionU5PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU5PerzentilkurvenCode: t.Type<CMRCompositionU5PerzentilkurvenCode> =
    t.recursion("CMRCompositionU5PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU5PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU5PerzentilkurvenText: t.Type<CMRCompositionU5PerzentilkurvenText> =
    t.recursion("CMRCompositionU5PerzentilkurvenText", () =>
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
export interface CMRCompositionU5PerzentilkurvenEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5PerzentilkurvenEntryReference: t.Type<CMRCompositionU5PerzentilkurvenEntryReference> =
    t.recursion("CMRCompositionU5PerzentilkurvenEntryReference", () =>
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
export interface CMRCompositionU5PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU5PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU5PerzentilkurvenEmptyReason: t.Type<CMRCompositionU5PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU5PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU5PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU5U5Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U5 Elterninformation zur Untersuchung vom 6. bis zum 7. Lebensmonat Ihr Baby entwickelt sich weiter. Die meisten Babys können ihren Oberkörper auf den gestützten Armen anheben. Sie lachen, wenn sie geneckt werden und sie versuchen vielleicht schon, sich mit mehrsilbigen Lautketten wie „dei-dei-dei“ mitzuteilen. Bei einigen Babys setzt jetzt das „Fremdeln“ ein, Ihr Baby unterscheidet also in seinem Verhalten zwischen bekannten und unbekannten Personen. Typisch für dieses Alter ist auch, dass Gegenstände in die Hand genommen und in den Mund gesteckt werden. Die Ärztin oder der Arzt achtet bei der U5 insbesondere darauf, ob es bei Ihrem Baby Hinweise auf Entwicklungsverzögerungen oder -risiken gibt. Ihr Baby wird körperlich untersucht. Um Hinweise auf Sehstörungen zu bekommen, werden zur Untersuchung der Augen bestimmte Tests durchgeführt. Die Ärztin oder der Arzt beobachtet, wie beweglich Ihr Baby ist und wie es seinen Körper beherrscht. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Baby. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Verdauung Ihres Babys sowie über Maßnahmen zur Vermeidung des plötzlichen Kindstodes. Sehr wichtig ist das Gespräch über Unfallverhütung, Ihr Verhalten, wenn das Baby schreit und die Vermeidung von Schlafstörungen. Die Förderung der Sprachentwicklung ist ein weiteres Thema. Weiterhin werden die Rachitisprophylaxe mittels Vitamin D und die Kariesprophylaxe mittels Fluorid besprochen. Sie erhalten von der Ärztin oder dem Arzt Rat zur kindlichen Mundhygiene. Zur Abklärung von Auffälligkeiten an den Zähnen oder der Mundschleimhaut bei Ihrem Baby werden Sie zur Zahnärztin oder zum Zahnarzt verwiesen. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühen Hilfen).";
    id?: string;
}

export const CMRCompositionU5U5Einleitung: t.Type<CMRCompositionU5U5Einleitung> =
    t.recursion("CMRCompositionU5U5Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U5 Elterninformation zur Untersuchung vom 6. bis zum 7. Lebensmonat Ihr Baby entwickelt sich weiter. Die meisten Babys können ihren Oberkörper auf den gestützten Armen anheben. Sie lachen, wenn sie geneckt werden und sie versuchen vielleicht schon, sich mit mehrsilbigen Lautketten wie „dei-dei-dei“ mitzuteilen. Bei einigen Babys setzt jetzt das „Fremdeln“ ein, Ihr Baby unterscheidet also in seinem Verhalten zwischen bekannten und unbekannten Personen. Typisch für dieses Alter ist auch, dass Gegenstände in die Hand genommen und in den Mund gesteckt werden. Die Ärztin oder der Arzt achtet bei der U5 insbesondere darauf, ob es bei Ihrem Baby Hinweise auf Entwicklungsverzögerungen oder -risiken gibt. Ihr Baby wird körperlich untersucht. Um Hinweise auf Sehstörungen zu bekommen, werden zur Untersuchung der Augen bestimmte Tests durchgeführt. Die Ärztin oder der Arzt beobachtet, wie beweglich Ihr Baby ist und wie es seinen Körper beherrscht. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Baby. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Verdauung Ihres Babys sowie über Maßnahmen zur Vermeidung des plötzlichen Kindstodes. Sehr wichtig ist das Gespräch über Unfallverhütung, Ihr Verhalten, wenn das Baby schreit und die Vermeidung von Schlafstörungen. Die Förderung der Sprachentwicklung ist ein weiteres Thema. Weiterhin werden die Rachitisprophylaxe mittels Vitamin D und die Kariesprophylaxe mittels Fluorid besprochen. Sie erhalten von der Ärztin oder dem Arzt Rat zur kindlichen Mundhygiene. Zur Abklärung von Auffälligkeiten an den Zähnen oder der Mundschleimhaut bei Ihrem Baby werden Sie zur Zahnärztin oder zum Zahnarzt verwiesen. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühen Hilfen)."
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
export interface CMRCompositionU5TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "170263002";
    display: "Child 6 month examination (procedure)";
    id?: string;
}

export const CMRCompositionU5TypeCoding: t.Type<CMRCompositionU5TypeCoding> = t.recursion(
    "CMRCompositionU5TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("170263002"),
                    display: Literal("Child 6 month examination (procedure)")
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
export interface CMRCompositionU5CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU5CategoryCoding: t.Type<CMRCompositionU5CategoryCoding> =
    t.recursion("CMRCompositionU5CategoryCoding", () =>
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
export interface CMRCompositionU5AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU5AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU5AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU5AktuelleAnamneseDesKindesEntryReference[];
    emptyReason?: CMRCompositionU5AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU5AktuelleAnamneseDesKindes: t.Type<CMRCompositionU5AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU5AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU5AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU5AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU5AktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(
                        CMRCompositionU5AktuelleAnamneseDesKindesEntryReference
                    ),
                    emptyReason: CMRCompositionU5AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU5SozialanamneseCode;
    text: CMRCompositionU5SozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU5SozialanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU5SozialanamneseEntryReference[];
    emptyReason?: CMRCompositionU5SozialanamneseEmptyReason;
}

export const CMRCompositionU5Sozialanamnese: t.Type<CMRCompositionU5Sozialanamnese> =
    t.recursion("CMRCompositionU5Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU5SozialanamneseCode,
                    text: CMRCompositionU5SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU5SozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU5SozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU5SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU5SozialanamneseEntryReference),
                    emptyReason: CMRCompositionU5SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU5UntersuchungCode;
    text: CMRCompositionU5UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU5UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU5UntersuchungEntryReference[];
    emptyReason?: CMRCompositionU5UntersuchungEmptyReason;
}

export const CMRCompositionU5Untersuchung: t.Type<CMRCompositionU5Untersuchung> =
    t.recursion("CMRCompositionU5Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU5UntersuchungCode,
                    text: CMRCompositionU5UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU5UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU5UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU5UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU5UntersuchungEntryReference),
                    emptyReason: CMRCompositionU5UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5Beratung {
    title: "Beratung";
    code: CMRCompositionU5BeratungCode;
    text: CMRCompositionU5BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU5BeratungBeratungAnweisung
        | CMRCompositionU5BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU5BeratungEntryReference[];
    emptyReason?: CMRCompositionU5BeratungEmptyReason;
}

export const CMRCompositionU5Beratung: t.Type<CMRCompositionU5Beratung> = t.recursion(
    "CMRCompositionU5Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU5BeratungCode,
                    text: CMRCompositionU5BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU5BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU5BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU5BeratungBeratungAnweisung,
                            CMRCompositionU5BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU5BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU5BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU5BeratungEntryReference),
                    emptyReason: CMRCompositionU5BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU5ErgebnisseCode;
    text: CMRCompositionU5ErgebnisseText;
    section: Array<CMRCompositionU5ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU5ErgebnisseEntryReference[];
    emptyReason?: CMRCompositionU5ErgebnisseEmptyReason;
}

export const CMRCompositionU5Ergebnisse: t.Type<CMRCompositionU5Ergebnisse> = t.recursion(
    "CMRCompositionU5Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU5ErgebnisseCode,
                    text: CMRCompositionU5ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU5ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU5ErgebnisseEntryReference),
                    emptyReason: CMRCompositionU5ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5Hoerscreening {
    title: "Neugeborenen-Hörscreening";
    code: CMRCompositionU5HoerscreeningCode;
    text: CMRCompositionU5HoerscreeningText;
    id?: string;
    entry?: CMRCompositionU5HoerscreeningEntryReference[];
    emptyReason?: CMRCompositionU5HoerscreeningEmptyReason;
}

export const CMRCompositionU5Hoerscreening: t.Type<CMRCompositionU5Hoerscreening> =
    t.recursion("CMRCompositionU5Hoerscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Neugeborenen-Hörscreening"),
                    code: CMRCompositionU5HoerscreeningCode,
                    text: CMRCompositionU5HoerscreeningText
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU5HoerscreeningEntryReference),
                    emptyReason: CMRCompositionU5HoerscreeningEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
        | CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis
    )[];
    entry?: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEntryReference[];
    emptyReason?: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU5OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU5OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>,
                                t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                            CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU5OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis,
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
                        CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEntryReference
                    ),
                    emptyReason:
                        CMRCompositionU5OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU5Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU5PerzentilkurvenCode;
    text: CMRCompositionU5PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU5PerzentilkurvenEntryReference>;
    emptyReason?: CMRCompositionU5PerzentilkurvenEmptyReason;
}

export const CMRCompositionU5Perzentilkurven: t.Type<CMRCompositionU5Perzentilkurven> =
    t.recursion("CMRCompositionU5Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU5PerzentilkurvenCode,
                    text: CMRCompositionU5PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU5PerzentilkurvenEntryReference),
                    emptyReason: CMRCompositionU5PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU5Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U5|1.0.1">;
    id?: string;
}

export const CMRCompositionU5Meta: t.Type<CMRCompositionU5Meta> = t.recursion(
    "CMRCompositionU5Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U5|1.0.1"
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
export interface CMRCompositionU5Type {
    coding: Array<CMRCompositionU5TypeCoding>;
    id?: string;
}

export const CMRCompositionU5Type: t.Type<CMRCompositionU5Type> = t.recursion(
    "CMRCompositionU5Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5TypeCoding)
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
export interface CMRCompositionU5Category {
    coding: Array<CMRCompositionU5CategoryCoding>;
    id?: string;
}

export const CMRCompositionU5Category: t.Type<CMRCompositionU5Category> = t.recursion(
    "CMRCompositionU5Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU5CategoryCoding)
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
export interface CMRCompositionU5SubjectReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5SubjectReference: t.Type<CMRCompositionU5SubjectReference> =
    t.recursion("CMRCompositionU5SubjectReference", () =>
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
export interface CMRCompositionU5EncounterReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5EncounterReference: t.Type<CMRCompositionU5EncounterReference> =
    t.recursion("CMRCompositionU5EncounterReference", () =>
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
export interface CMRCompositionU5AuthorReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU5AuthorReference: t.Type<CMRCompositionU5AuthorReference> =
    t.recursion("CMRCompositionU5AuthorReference", () =>
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

interface CMRCompositionU5 {
    resourceType: "Composition";
    meta: CMRCompositionU5Meta;
    status: "final";
    type: CMRCompositionU5Type;
    category: Array<CMRCompositionU5Category>;
    subject: CMRCompositionU5SubjectReference;
    encounter: CMRCompositionU5EncounterReference;
    date: string;
    author: Array<CMRCompositionU5AuthorReference>;
    title: "U5";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU5U5Einleitung)[];
    section?: (
        | CMRCompositionU5AktuelleAnamneseDesKindes
        | CMRCompositionU5Sozialanamnese
        | CMRCompositionU5Untersuchung
        | CMRCompositionU5Beratung
        | CMRCompositionU5Ergebnisse
        | CMRCompositionU5Hoerscreening
        | CMRCompositionU5OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU5Perzentilkurven
    )[];
}

const CMRCompositionU5: t.Type<CMRCompositionU5> = t.recursion("CMRCompositionU5", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU5Meta,
                status: Literal("final"),
                type: CMRCompositionU5Type,
                category: MinMaxArray(1, 1, CMRCompositionU5Category),
                subject: CMRCompositionU5SubjectReference,
                encounter: CMRCompositionU5EncounterReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU5AuthorReference),
                title: Literal("U5")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU5U5Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU5U5Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU5U5Einleitung,
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
                            t.Type<CMRCompositionU5AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU5Sozialanamnese>,
                            t.Type<CMRCompositionU5Untersuchung>,
                            t.Type<CMRCompositionU5Beratung>,
                            t.Type<CMRCompositionU5Ergebnisse>,
                            t.Type<CMRCompositionU5Hoerscreening>,
                            t.Type<CMRCompositionU5OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU5Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU5AktuelleAnamneseDesKindes,
                        CMRCompositionU5Sozialanamnese,
                        CMRCompositionU5Untersuchung,
                        CMRCompositionU5Beratung,
                        CMRCompositionU5Ergebnisse,
                        CMRCompositionU5Hoerscreening,
                        CMRCompositionU5OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU5Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU5AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU5Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU5Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU5Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU5Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU5Hoerscreening,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Neugeborenen-Hörscreening" }
                        },
                        {
                            codec: CMRCompositionU5OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU5Perzentilkurven,
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

export default CMRCompositionU5;
