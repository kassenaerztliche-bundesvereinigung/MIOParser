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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U6"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU6ErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU6ErgebnisseSectionCodeCoding: t.Type<CMRCompositionU6ErgebnisseSectionCodeCoding> =
    t.recursion("CMRCompositionU6ErgebnisseSectionCodeCoding", () =>
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
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
export interface CMRCompositionU6AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesCodeCoding", () =>
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
export interface CMRCompositionU6AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
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
export interface CMRCompositionU6SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU6SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU6SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU6SozialanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU6SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU6SozialanamneseCodeCoding: t.Type<CMRCompositionU6SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU6SozialanamneseCodeCoding", () =>
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
export interface CMRCompositionU6SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU6SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU6SozialanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU6UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU6UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU6UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU6UntersuchungUntersuchungAnweisung", () =>
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
export interface CMRCompositionU6UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU6UntersuchungCodeCoding: t.Type<CMRCompositionU6UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU6UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU6UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU6UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU6UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU6BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU6BeratungBeratungAnweisung: t.Type<CMRCompositionU6BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU6BeratungBeratungAnweisung", () =>
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
export interface CMRCompositionU6BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU6BeratungBeratungHinweis: t.Type<CMRCompositionU6BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU6BeratungBeratungHinweis", () =>
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
export interface CMRCompositionU6BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU6BeratungCodeCoding: t.Type<CMRCompositionU6BeratungCodeCoding> =
    t.recursion("CMRCompositionU6BeratungCodeCoding", () =>
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
export interface CMRCompositionU6BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6BeratungEmptyReasonCoding: t.Type<CMRCompositionU6BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU6BeratungEmptyReasonCoding", () =>
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
export interface CMRCompositionU6ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU6ErgebnisseCodeCoding: t.Type<CMRCompositionU6ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU6ErgebnisseCodeCoding", () =>
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
export interface CMRCompositionU6ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU6ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU6ErgebnisseEmptyReasonCoding", () =>
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
export interface CMRCompositionU6ErgebnisseSectionCode {
    coding: Array<CMRCompositionU6ErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU6ErgebnisseSectionCode: t.Type<CMRCompositionU6ErgebnisseSectionCode> =
    t.recursion("CMRCompositionU6ErgebnisseSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6ErgebnisseSectionCodeCoding)
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
export interface CMRCompositionU6ErgebnisseSectionEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6ErgebnisseSectionEntryReference: t.Type<CMRCompositionU6ErgebnisseSectionEntryReference> =
    t.recursion("CMRCompositionU6ErgebnisseSectionEntryReference", () =>
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
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
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beobachtung der Interaktion: Insbesondere die folgenden Reaktionen des Kindes können der Ärztin oder dem Arzt als Hinweis zur Einschätzung von Stimmung, Kommunikations- und Regulationsmöglichkeiten des Kindes im Kontakt mit seiner primären Bezugsperson und als weitere Grundlage für das Ärztin- oder Arzt-Elterngespräch dienen:";
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis> =
    t.recursion(
        "CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis",
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
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
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
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
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
export interface CMRCompositionU6PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU6PerzentilkurvenCodeCoding: t.Type<CMRCompositionU6PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU6PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU6PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU6PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU6PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU6PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU6AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU6AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6AktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU6AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesText", () =>
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
export interface CMRCompositionU6AktuelleAnamneseDesKindesEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesEntryReference: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesEntryReference> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Current_Child_History|1.0.1"
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
export interface CMRCompositionU6AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU6AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU6AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6AktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU6SozialanamneseCode {
    coding: Array<CMRCompositionU6SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU6SozialanamneseCode: t.Type<CMRCompositionU6SozialanamneseCode> =
    t.recursion("CMRCompositionU6SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6SozialanamneseCodeCoding)
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
export interface CMRCompositionU6SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6SozialanamneseText: t.Type<CMRCompositionU6SozialanamneseText> =
    t.recursion("CMRCompositionU6SozialanamneseText", () =>
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
export interface CMRCompositionU6SozialanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6SozialanamneseEntryReference: t.Type<CMRCompositionU6SozialanamneseEntryReference> =
    t.recursion("CMRCompositionU6SozialanamneseEntryReference", () =>
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
export interface CMRCompositionU6SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU6SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6SozialanamneseEmptyReason: t.Type<CMRCompositionU6SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU6SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6SozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU6UntersuchungCode {
    coding: Array<CMRCompositionU6UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU6UntersuchungCode: t.Type<CMRCompositionU6UntersuchungCode> =
    t.recursion("CMRCompositionU6UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6UntersuchungCodeCoding)
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
export interface CMRCompositionU6UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6UntersuchungText: t.Type<CMRCompositionU6UntersuchungText> =
    t.recursion("CMRCompositionU6UntersuchungText", () =>
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
export interface CMRCompositionU6UntersuchungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6UntersuchungEntryReference: t.Type<CMRCompositionU6UntersuchungEntryReference> =
    t.recursion("CMRCompositionU6UntersuchungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Mouth_Nose|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Eyes|1.0.1",
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
export interface CMRCompositionU6UntersuchungEmptyReason {
    coding: Array<CMRCompositionU6UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6UntersuchungEmptyReason: t.Type<CMRCompositionU6UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU6UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU6BeratungCode {
    coding: Array<CMRCompositionU6BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU6BeratungCode: t.Type<CMRCompositionU6BeratungCode> =
    t.recursion("CMRCompositionU6BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6BeratungCodeCoding)
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
export interface CMRCompositionU6BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6BeratungText: t.Type<CMRCompositionU6BeratungText> =
    t.recursion("CMRCompositionU6BeratungText", () =>
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
export interface CMRCompositionU6BeratungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6BeratungEntryReference: t.Type<CMRCompositionU6BeratungEntryReference> =
    t.recursion("CMRCompositionU6BeratungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U6_Consultation|1.0.1",
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
export interface CMRCompositionU6BeratungEmptyReason {
    coding: Array<CMRCompositionU6BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6BeratungEmptyReason: t.Type<CMRCompositionU6BeratungEmptyReason> =
    t.recursion("CMRCompositionU6BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6BeratungEmptyReasonCoding)
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
export interface CMRCompositionU6ErgebnisseCode {
    coding: Array<CMRCompositionU6ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU6ErgebnisseCode: t.Type<CMRCompositionU6ErgebnisseCode> =
    t.recursion("CMRCompositionU6ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6ErgebnisseCodeCoding)
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
export interface CMRCompositionU6ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6ErgebnisseText: t.Type<CMRCompositionU6ErgebnisseText> =
    t.recursion("CMRCompositionU6ErgebnisseText", () =>
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
export interface CMRCompositionU6ErgebnisseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6ErgebnisseEntryReference: t.Type<CMRCompositionU6ErgebnisseEntryReference> =
    t.recursion("CMRCompositionU6ErgebnisseEntryReference", () =>
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
export interface CMRCompositionU6ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU6ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6ErgebnisseEmptyReason: t.Type<CMRCompositionU6ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU6ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6ErgebnisseEmptyReasonCoding)
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
export interface CMRCompositionU6ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    code: CMRCompositionU6ErgebnisseSectionCode;
    id?: string;
    text?: Narrative;
    entry?: Array<CMRCompositionU6ErgebnisseSectionEntryReference>;
}

export const CMRCompositionU6ErgebnisseSection: t.Type<CMRCompositionU6ErgebnisseSection> =
    t.recursion("CMRCompositionU6ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    ),
                    code: CMRCompositionU6ErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    entry: MaxArray(1, CMRCompositionU6ErgebnisseSectionEntryReference)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCodeCoding
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
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU6OrientierendeBeurteilungDerEntwicklungText", () =>
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
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEntryReference: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEntryReference> =
    t.recursion(
        "CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Development_Assessment|1.0.1",
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
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
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
export interface CMRCompositionU6PerzentilkurvenCode {
    coding: Array<CMRCompositionU6PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU6PerzentilkurvenCode: t.Type<CMRCompositionU6PerzentilkurvenCode> =
    t.recursion("CMRCompositionU6PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU6PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU6PerzentilkurvenText: t.Type<CMRCompositionU6PerzentilkurvenText> =
    t.recursion("CMRCompositionU6PerzentilkurvenText", () =>
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
export interface CMRCompositionU6PerzentilkurvenEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6PerzentilkurvenEntryReference: t.Type<CMRCompositionU6PerzentilkurvenEntryReference> =
    t.recursion("CMRCompositionU6PerzentilkurvenEntryReference", () =>
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
export interface CMRCompositionU6PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU6PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU6PerzentilkurvenEmptyReason: t.Type<CMRCompositionU6PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU6PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU6PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU6U6Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U6 Elterninformation zur Untersuchung vom 10. bis zum 12. Lebensmonat Ihr Kind ist jetzt fast ein Jahr alt. Es kann wahrscheinlich schon robben oder krabbeln und sich an Möbeln in den Stand hochziehen. Mit Unterstützung geht es möglicherweise sogar schon ein paar Schritte. Ihr Kind wird fingerfertiger, so dass es mit etwas Hilfe auch schon aus einem Becher trinken kann. Die meisten Kinder ahmen in diesem Alter Laute nach und können Doppelsilben wie „da-da“ bilden. Wenn Sie Ihr Kind dazu auffordern, reicht es Ihnen vielleicht schon einen Gegenstand. Die Ärztin oder der Arzt achtet bei der U6 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Untersuchungen der Augen durchgeführt. Die Ärztin oder der Arzt schaut, wie beweglich Ihr Kind ist und wie es seinen Körper beherrscht. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Die Ärztin oder der Arzt bespricht mit Ihnen Themen wie die Ernährung Ihres Kindes und Maßnahmen zur Unfallverhütung. Die Förderung der Sprachentwicklung sind weitere Themen, ebenso die Rachitisprophylaxe mittels Vitamin D und Kariesprophylaxe mittels Fluorid. Sie erhalten von der Ärztin oder dem Arzt Hinweise zur kindlichen Mundhygiene. Zur Abklärung von Auffälligkeiten an den Zähnen oder der Mundschleimhaut bei Ihrem Kind werden Sie zur Zahnärztin oder zum Zahnarzt verwiesen. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühe Hilfen).";
    id?: string;
}

export const CMRCompositionU6U6Einleitung: t.Type<CMRCompositionU6U6Einleitung> =
    t.recursion("CMRCompositionU6U6Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U6 Elterninformation zur Untersuchung vom 10. bis zum 12. Lebensmonat Ihr Kind ist jetzt fast ein Jahr alt. Es kann wahrscheinlich schon robben oder krabbeln und sich an Möbeln in den Stand hochziehen. Mit Unterstützung geht es möglicherweise sogar schon ein paar Schritte. Ihr Kind wird fingerfertiger, so dass es mit etwas Hilfe auch schon aus einem Becher trinken kann. Die meisten Kinder ahmen in diesem Alter Laute nach und können Doppelsilben wie „da-da“ bilden. Wenn Sie Ihr Kind dazu auffordern, reicht es Ihnen vielleicht schon einen Gegenstand. Die Ärztin oder der Arzt achtet bei der U6 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Untersuchungen der Augen durchgeführt. Die Ärztin oder der Arzt schaut, wie beweglich Ihr Kind ist und wie es seinen Körper beherrscht. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Die Ärztin oder der Arzt bespricht mit Ihnen Themen wie die Ernährung Ihres Kindes und Maßnahmen zur Unfallverhütung. Die Förderung der Sprachentwicklung sind weitere Themen, ebenso die Rachitisprophylaxe mittels Vitamin D und Kariesprophylaxe mittels Fluorid. Sie erhalten von der Ärztin oder dem Arzt Hinweise zur kindlichen Mundhygiene. Zur Abklärung von Auffälligkeiten an den Zähnen oder der Mundschleimhaut bei Ihrem Kind werden Sie zur Zahnärztin oder zum Zahnarzt verwiesen. Sie erhalten Informationen zu regionalen Unterstützungsangeboten (z. B. Eltern-Kind-Hilfen, Frühe Hilfen)."
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
export interface CMRCompositionU6TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "170254004";
    display: "Child 1 year examination (procedure)";
    id?: string;
}

export const CMRCompositionU6TypeCoding: t.Type<CMRCompositionU6TypeCoding> = t.recursion(
    "CMRCompositionU6TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("170254004"),
                    display: Literal("Child 1 year examination (procedure)")
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
export interface CMRCompositionU6CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU6CategoryCoding: t.Type<CMRCompositionU6CategoryCoding> =
    t.recursion("CMRCompositionU6CategoryCoding", () =>
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
export interface CMRCompositionU6AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU6AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU6AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU6AktuelleAnamneseDesKindesEntryReference[];
    emptyReason?: CMRCompositionU6AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU6AktuelleAnamneseDesKindes: t.Type<CMRCompositionU6AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU6AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU6AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU6AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU6AktuelleAnamneseDesKindesAnamneseAnweisung,
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
                        CMRCompositionU6AktuelleAnamneseDesKindesEntryReference
                    ),
                    emptyReason: CMRCompositionU6AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU6Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU6SozialanamneseCode;
    text: CMRCompositionU6SozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU6SozialanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU6SozialanamneseEntryReference[];
    emptyReason?: CMRCompositionU6SozialanamneseEmptyReason;
}

export const CMRCompositionU6Sozialanamnese: t.Type<CMRCompositionU6Sozialanamnese> =
    t.recursion("CMRCompositionU6Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU6SozialanamneseCode,
                    text: CMRCompositionU6SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU6SozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU6SozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU6SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU6SozialanamneseEntryReference),
                    emptyReason: CMRCompositionU6SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU6Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU6UntersuchungCode;
    text: CMRCompositionU6UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU6UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU6UntersuchungEntryReference[];
    emptyReason?: CMRCompositionU6UntersuchungEmptyReason;
}

export const CMRCompositionU6Untersuchung: t.Type<CMRCompositionU6Untersuchung> =
    t.recursion("CMRCompositionU6Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU6UntersuchungCode,
                    text: CMRCompositionU6UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU6UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU6UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU6UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU6UntersuchungEntryReference),
                    emptyReason: CMRCompositionU6UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU6Beratung {
    title: "Beratung";
    code: CMRCompositionU6BeratungCode;
    text: CMRCompositionU6BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU6BeratungBeratungAnweisung
        | CMRCompositionU6BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU6BeratungEntryReference[];
    emptyReason?: CMRCompositionU6BeratungEmptyReason;
}

export const CMRCompositionU6Beratung: t.Type<CMRCompositionU6Beratung> = t.recursion(
    "CMRCompositionU6Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU6BeratungCode,
                    text: CMRCompositionU6BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU6BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU6BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU6BeratungBeratungAnweisung,
                            CMRCompositionU6BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU6BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU6BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU6BeratungEntryReference),
                    emptyReason: CMRCompositionU6BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU6Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU6ErgebnisseCode;
    text: CMRCompositionU6ErgebnisseText;
    section: Array<CMRCompositionU6ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU6ErgebnisseEntryReference[];
    emptyReason?: CMRCompositionU6ErgebnisseEmptyReason;
}

export const CMRCompositionU6Ergebnisse: t.Type<CMRCompositionU6Ergebnisse> = t.recursion(
    "CMRCompositionU6Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU6ErgebnisseCode,
                    text: CMRCompositionU6ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU6ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU6ErgebnisseEntryReference),
                    emptyReason: CMRCompositionU6ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU6OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
        | CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis
    )[];
    entry?: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEntryReference[];
    emptyReason?: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU6OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU6OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>,
                                t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                            CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU6OrientierendeBeurteilungDerEntwicklungBeurteilungHinweis,
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
                        CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEntryReference
                    ),
                    emptyReason:
                        CMRCompositionU6OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU6Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU6PerzentilkurvenCode;
    text: CMRCompositionU6PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU6PerzentilkurvenEntryReference>;
    emptyReason?: CMRCompositionU6PerzentilkurvenEmptyReason;
}

export const CMRCompositionU6Perzentilkurven: t.Type<CMRCompositionU6Perzentilkurven> =
    t.recursion("CMRCompositionU6Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU6PerzentilkurvenCode,
                    text: CMRCompositionU6PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU6PerzentilkurvenEntryReference),
                    emptyReason: CMRCompositionU6PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU6Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U6|1.0.1">;
    id?: string;
}

export const CMRCompositionU6Meta: t.Type<CMRCompositionU6Meta> = t.recursion(
    "CMRCompositionU6Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U6|1.0.1"
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
export interface CMRCompositionU6Type {
    coding: Array<CMRCompositionU6TypeCoding>;
    id?: string;
}

export const CMRCompositionU6Type: t.Type<CMRCompositionU6Type> = t.recursion(
    "CMRCompositionU6Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6TypeCoding)
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
export interface CMRCompositionU6Category {
    coding: Array<CMRCompositionU6CategoryCoding>;
    id?: string;
}

export const CMRCompositionU6Category: t.Type<CMRCompositionU6Category> = t.recursion(
    "CMRCompositionU6Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU6CategoryCoding)
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
export interface CMRCompositionU6SubjectReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6SubjectReference: t.Type<CMRCompositionU6SubjectReference> =
    t.recursion("CMRCompositionU6SubjectReference", () =>
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
export interface CMRCompositionU6EncounterReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6EncounterReference: t.Type<CMRCompositionU6EncounterReference> =
    t.recursion("CMRCompositionU6EncounterReference", () =>
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
export interface CMRCompositionU6AuthorReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU6AuthorReference: t.Type<CMRCompositionU6AuthorReference> =
    t.recursion("CMRCompositionU6AuthorReference", () =>
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

interface CMRCompositionU6 {
    resourceType: "Composition";
    meta: CMRCompositionU6Meta;
    status: "final";
    type: CMRCompositionU6Type;
    category: Array<CMRCompositionU6Category>;
    subject: CMRCompositionU6SubjectReference;
    encounter: CMRCompositionU6EncounterReference;
    date: string;
    author: Array<CMRCompositionU6AuthorReference>;
    title: "U6";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU6U6Einleitung)[];
    section?: (
        | CMRCompositionU6AktuelleAnamneseDesKindes
        | CMRCompositionU6Sozialanamnese
        | CMRCompositionU6Untersuchung
        | CMRCompositionU6Beratung
        | CMRCompositionU6Ergebnisse
        | CMRCompositionU6OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU6Perzentilkurven
    )[];
}

const CMRCompositionU6: t.Type<CMRCompositionU6> = t.recursion("CMRCompositionU6", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU6Meta,
                status: Literal("final"),
                type: CMRCompositionU6Type,
                category: MinMaxArray(1, 1, CMRCompositionU6Category),
                subject: CMRCompositionU6SubjectReference,
                encounter: CMRCompositionU6EncounterReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU6AuthorReference),
                title: Literal("U6")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU6U6Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU6U6Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU6U6Einleitung,
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
                            t.Type<CMRCompositionU6AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU6Sozialanamnese>,
                            t.Type<CMRCompositionU6Untersuchung>,
                            t.Type<CMRCompositionU6Beratung>,
                            t.Type<CMRCompositionU6Ergebnisse>,
                            t.Type<CMRCompositionU6OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU6Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU6AktuelleAnamneseDesKindes,
                        CMRCompositionU6Sozialanamnese,
                        CMRCompositionU6Untersuchung,
                        CMRCompositionU6Beratung,
                        CMRCompositionU6Ergebnisse,
                        CMRCompositionU6OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU6Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU6AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU6Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU6Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU6Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU6Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU6OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU6Perzentilkurven,
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

export default CMRCompositionU6;
