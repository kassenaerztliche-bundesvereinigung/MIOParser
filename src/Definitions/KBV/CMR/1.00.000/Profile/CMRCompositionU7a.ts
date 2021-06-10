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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7a"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU7aErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU7aErgebnisseSectionCodeCoding: t.Type<CMRCompositionU7aErgebnisseSectionCodeCoding> = t.recursion(
    "CMRCompositionU7aErgebnisseSectionCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung",
    () =>
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesCodeCoding> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReasonCoding",
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU7aSozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU7aSozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU7aSozialanamneseAnamneseAnweisung> = t.recursion(
    "CMRCompositionU7aSozialanamneseAnamneseAnweisung",
    () =>
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
export interface CMRCompositionU7aSozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU7aSozialanamneseCodeCoding: t.Type<CMRCompositionU7aSozialanamneseCodeCoding> = t.recursion(
    "CMRCompositionU7aSozialanamneseCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aSozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aSozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU7aSozialanamneseEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aSozialanamneseEmptyReasonCoding",
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU7aUntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU7aUntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU7aUntersuchungUntersuchungAnweisung> = t.recursion(
    "CMRCompositionU7aUntersuchungUntersuchungAnweisung",
    () =>
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
export interface CMRCompositionU7aUntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU7aUntersuchungCodeCoding: t.Type<CMRCompositionU7aUntersuchungCodeCoding> = t.recursion(
    "CMRCompositionU7aUntersuchungCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aUntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aUntersuchungEmptyReasonCoding: t.Type<CMRCompositionU7aUntersuchungEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aUntersuchungEmptyReasonCoding",
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface CMRCompositionU7aBeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU7aBeratungBeratungAnweisung: t.Type<CMRCompositionU7aBeratungBeratungAnweisung> = t.recursion(
    "CMRCompositionU7aBeratungBeratungAnweisung",
    () =>
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
export interface CMRCompositionU7aBeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU7aBeratungBeratungHinweis: t.Type<CMRCompositionU7aBeratungBeratungHinweis> = t.recursion(
    "CMRCompositionU7aBeratungBeratungHinweis",
    () =>
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
export interface CMRCompositionU7aBeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU7aBeratungCodeCoding: t.Type<CMRCompositionU7aBeratungCodeCoding> = t.recursion(
    "CMRCompositionU7aBeratungCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aBeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aBeratungEmptyReasonCoding: t.Type<CMRCompositionU7aBeratungEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aBeratungEmptyReasonCoding",
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
export interface CMRCompositionU7aErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU7aErgebnisseCodeCoding: t.Type<CMRCompositionU7aErgebnisseCodeCoding> = t.recursion(
    "CMRCompositionU7aErgebnisseCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU7aErgebnisseEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aErgebnisseEmptyReasonCoding",
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
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU7aErgebnisseSectionCode {
    coding: Array<CMRCompositionU7aErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aErgebnisseSectionCode: t.Type<CMRCompositionU7aErgebnisseSectionCode> = t.recursion(
    "CMRCompositionU7aErgebnisseSectionCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aErgebnisseSectionCodeCoding
                    )
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
export interface CMRCompositionU7aErgebnisseSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aErgebnisseSectionEntry: t.Type<CMRCompositionU7aErgebnisseSectionEntry> = t.recursion(
    "CMRCompositionU7aErgebnisseSectionEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.0"
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
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCodeCoding> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
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
export interface CMRCompositionU7aPerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU7aPerzentilkurvenCodeCoding: t.Type<CMRCompositionU7aPerzentilkurvenCodeCoding> = t.recursion(
    "CMRCompositionU7aPerzentilkurvenCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aPerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7aPerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU7aPerzentilkurvenEmptyReasonCoding> = t.recursion(
    "CMRCompositionU7aPerzentilkurvenEmptyReasonCoding",
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
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU7aAktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU7aAktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesCode> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aAktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesText: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesText> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesText",
    () =>
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindesEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesEntry: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesEntry> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Current_Child_History|1.0.0"
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReason> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU7aSozialanamneseCode {
    coding: Array<CMRCompositionU7aSozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aSozialanamneseCode: t.Type<CMRCompositionU7aSozialanamneseCode> = t.recursion(
    "CMRCompositionU7aSozialanamneseCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aSozialanamneseCodeCoding)
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
export interface CMRCompositionU7aSozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aSozialanamneseText: t.Type<CMRCompositionU7aSozialanamneseText> = t.recursion(
    "CMRCompositionU7aSozialanamneseText",
    () =>
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
export interface CMRCompositionU7aSozialanamneseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aSozialanamneseEntry: t.Type<CMRCompositionU7aSozialanamneseEntry> = t.recursion(
    "CMRCompositionU7aSozialanamneseEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.0"
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
export interface CMRCompositionU7aSozialanamneseEmptyReason {
    coding: Array<CMRCompositionU7aSozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7aSozialanamneseEmptyReason: t.Type<CMRCompositionU7aSozialanamneseEmptyReason> = t.recursion(
    "CMRCompositionU7aSozialanamneseEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aSozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU7aUntersuchungCode {
    coding: Array<CMRCompositionU7aUntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aUntersuchungCode: t.Type<CMRCompositionU7aUntersuchungCode> = t.recursion(
    "CMRCompositionU7aUntersuchungCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aUntersuchungCodeCoding)
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
export interface CMRCompositionU7aUntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aUntersuchungText: t.Type<CMRCompositionU7aUntersuchungText> = t.recursion(
    "CMRCompositionU7aUntersuchungText",
    () =>
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
export interface CMRCompositionU7aUntersuchungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aUntersuchungEntry: t.Type<CMRCompositionU7aUntersuchungEntry> = t.recursion(
    "CMRCompositionU7aUntersuchungEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Musculoskeletal_System|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_Physical_Exam_Mouth_Nose|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.0"
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
export interface CMRCompositionU7aUntersuchungEmptyReason {
    coding: Array<CMRCompositionU7aUntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7aUntersuchungEmptyReason: t.Type<CMRCompositionU7aUntersuchungEmptyReason> = t.recursion(
    "CMRCompositionU7aUntersuchungEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aUntersuchungEmptyReasonCoding
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
export interface CMRCompositionU7aBeratungCode {
    coding: Array<CMRCompositionU7aBeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aBeratungCode: t.Type<CMRCompositionU7aBeratungCode> = t.recursion(
    "CMRCompositionU7aBeratungCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aBeratungCodeCoding)
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
export interface CMRCompositionU7aBeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aBeratungText: t.Type<CMRCompositionU7aBeratungText> = t.recursion(
    "CMRCompositionU7aBeratungText",
    () =>
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
export interface CMRCompositionU7aBeratungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aBeratungEntry: t.Type<CMRCompositionU7aBeratungEntry> = t.recursion(
    "CMRCompositionU7aBeratungEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7a_Consultation|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
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
export interface CMRCompositionU7aBeratungEmptyReason {
    coding: Array<CMRCompositionU7aBeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7aBeratungEmptyReason: t.Type<CMRCompositionU7aBeratungEmptyReason> = t.recursion(
    "CMRCompositionU7aBeratungEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aBeratungEmptyReasonCoding)
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
export interface CMRCompositionU7aErgebnisseCode {
    coding: Array<CMRCompositionU7aErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aErgebnisseCode: t.Type<CMRCompositionU7aErgebnisseCode> = t.recursion(
    "CMRCompositionU7aErgebnisseCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aErgebnisseCodeCoding)
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
export interface CMRCompositionU7aErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aErgebnisseText: t.Type<CMRCompositionU7aErgebnisseText> = t.recursion(
    "CMRCompositionU7aErgebnisseText",
    () =>
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
export interface CMRCompositionU7aErgebnisseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aErgebnisseEntry: t.Type<CMRCompositionU7aErgebnisseEntry> = t.recursion(
    "CMRCompositionU7aErgebnisseEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Comments|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Appointment|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U2_U9_Result|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.0"
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
export interface CMRCompositionU7aErgebnisseEmptyReason {
    coding: Array<CMRCompositionU7aErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7aErgebnisseEmptyReason: t.Type<CMRCompositionU7aErgebnisseEmptyReason> = t.recursion(
    "CMRCompositionU7aErgebnisseEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aErgebnisseEmptyReasonCoding
                    )
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
export interface CMRCompositionU7aErgebnisseSection {
    title: "Prüfung und Aufklärung";
    code: CMRCompositionU7aErgebnisseSectionCode;
    id?: string;
    entry?: Array<CMRCompositionU7aErgebnisseSectionEntry>;
}

export const CMRCompositionU7aErgebnisseSection: t.Type<CMRCompositionU7aErgebnisseSection> = t.recursion(
    "CMRCompositionU7aErgebnisseSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Prüfung und Aufklärung"),
                    code: CMRCompositionU7aErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU7aErgebnisseSectionEntry)
                })
            ])
        )
);

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCode> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCodeCoding
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
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungText> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungText",
    () =>
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
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEntry: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEntry> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Development_Assessment|1.0.0"
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
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<
        CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
    >;
    id?: string;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReason> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
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
export interface CMRCompositionU7aPerzentilkurvenCode {
    coding: Array<CMRCompositionU7aPerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU7aPerzentilkurvenCode: t.Type<CMRCompositionU7aPerzentilkurvenCode> = t.recursion(
    "CMRCompositionU7aPerzentilkurvenCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aPerzentilkurvenCodeCoding)
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
export interface CMRCompositionU7aPerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7aPerzentilkurvenText: t.Type<CMRCompositionU7aPerzentilkurvenText> = t.recursion(
    "CMRCompositionU7aPerzentilkurvenText",
    () =>
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
export interface CMRCompositionU7aPerzentilkurvenEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aPerzentilkurvenEntry: t.Type<CMRCompositionU7aPerzentilkurvenEntry> = t.recursion(
    "CMRCompositionU7aPerzentilkurvenEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
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
export interface CMRCompositionU7aPerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU7aPerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7aPerzentilkurvenEmptyReason: t.Type<CMRCompositionU7aPerzentilkurvenEmptyReason> = t.recursion(
    "CMRCompositionU7aPerzentilkurvenEmptyReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7aPerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU7aU7aEinleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U7a Elterninformation zur Untersuchung vom 34. bis zum 36. Lebensmonat Ihr Kind ist jetzt etwa drei Jahre alt. Die meisten Kinder sprechen von sich in der Ich-Form und möchten mit kleinen Handreichungen im Haushalt helfen. Sie haben Freude daran, mit anderen Kindern zu spielen und dabei in andere Rollen zu schlüpfen. Ihr Kind hat vielleicht einen großen Bewegungsdrang, kann schon Stufen im „Erwachsenenschritt“ steigen und von unteren Treppenstufen herabspringen. Die Ärztin oder der Arzt achtet bei der U7a wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Sehtests durchgeführt. Außerdem sieht sich die Ärztin oder der Arzt bei der U7a die Beschaffenheit der Zähne und die Entwicklung des Kiefers an. Eine besondere Aufmerksamkeit gilt der sprachlichen Entwicklung Ihres Kindes. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Die Ärztin oder der Arzt bespricht mit Ihnen Themen wie die Ernährung und Bewegung Ihres Kindes sowie Maßnahmen zur Unfallverhütung. Die Förderung der Sprachentwicklung sowie die Rolle von Medien (z. B. TV, Spielekonsolen, Internet und Ähnlichem) im Alltag des Kindes sind weitere Themen. Ihre Ärztin oder Ihr Arzt verweist Sie zur zahnärztlichen Früherkennungsuntersuchung.";
    id?: string;
}

export const CMRCompositionU7aU7aEinleitung: t.Type<CMRCompositionU7aU7aEinleitung> = t.recursion(
    "CMRCompositionU7aU7aEinleitung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U7a Elterninformation zur Untersuchung vom 34. bis zum 36. Lebensmonat Ihr Kind ist jetzt etwa drei Jahre alt. Die meisten Kinder sprechen von sich in der Ich-Form und möchten mit kleinen Handreichungen im Haushalt helfen. Sie haben Freude daran, mit anderen Kindern zu spielen und dabei in andere Rollen zu schlüpfen. Ihr Kind hat vielleicht einen großen Bewegungsdrang, kann schon Stufen im „Erwachsenenschritt“ steigen und von unteren Treppenstufen herabspringen. Die Ärztin oder der Arzt achtet bei der U7a wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Sehtests durchgeführt. Außerdem sieht sich die Ärztin oder der Arzt bei der U7a die Beschaffenheit der Zähne und die Entwicklung des Kiefers an. Eine besondere Aufmerksamkeit gilt der sprachlichen Entwicklung Ihres Kindes. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Die Ärztin oder der Arzt bespricht mit Ihnen Themen wie die Ernährung und Bewegung Ihres Kindes sowie Maßnahmen zur Unfallverhütung. Die Förderung der Sprachentwicklung sowie die Rolle von Medien (z. B. TV, Spielekonsolen, Internet und Ähnlichem) im Alltag des Kindes sind weitere Themen. Ihre Ärztin oder Ihr Arzt verweist Sie zur zahnärztlichen Früherkennungsuntersuchung."
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
export interface CMRCompositionU7aTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "170281004";
    display: "Child 3 year examination (procedure)";
    id?: string;
}

export const CMRCompositionU7aTypeCoding: t.Type<CMRCompositionU7aTypeCoding> = t.recursion(
    "CMRCompositionU7aTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("170281004"),
                    display: Literal("Child 3 year examination (procedure)")
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
export interface CMRCompositionU7aCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU7aCategoryCoding: t.Type<CMRCompositionU7aCategoryCoding> = t.recursion(
    "CMRCompositionU7aCategoryCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
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
export interface CMRCompositionU7aAktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU7aAktuelleAnamneseDesKindesCode;
    text: CMRCompositionU7aAktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU7aAktuelleAnamneseDesKindesEntry[];
    emptyReason?: CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU7aAktuelleAnamneseDesKindes: t.Type<CMRCompositionU7aAktuelleAnamneseDesKindes> = t.recursion(
    "CMRCompositionU7aAktuelleAnamneseDesKindes",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU7aAktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU7aAktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7aAktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7aAktuelleAnamneseDesKindesEntry),
                    emptyReason: CMRCompositionU7aAktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7aSozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU7aSozialanamneseCode;
    text: CMRCompositionU7aSozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU7aSozialanamneseAnamneseAnweisung)[];
    entry?: Array<CMRCompositionU7aSozialanamneseEntry>;
    emptyReason?: CMRCompositionU7aSozialanamneseEmptyReason;
}

export const CMRCompositionU7aSozialanamnese: t.Type<CMRCompositionU7aSozialanamnese> = t.recursion(
    "CMRCompositionU7aSozialanamnese",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU7aSozialanamneseCode,
                    text: CMRCompositionU7aSozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7aSozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7aSozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7aSozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: MaxArray(1, CMRCompositionU7aSozialanamneseEntry),
                    emptyReason: CMRCompositionU7aSozialanamneseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7aUntersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU7aUntersuchungCode;
    text: CMRCompositionU7aUntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU7aUntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU7aUntersuchungEntry[];
    emptyReason?: CMRCompositionU7aUntersuchungEmptyReason;
}

export const CMRCompositionU7aUntersuchung: t.Type<CMRCompositionU7aUntersuchung> = t.recursion(
    "CMRCompositionU7aUntersuchung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU7aUntersuchungCode,
                    text: CMRCompositionU7aUntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7aUntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7aUntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7aUntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7aUntersuchungEntry),
                    emptyReason: CMRCompositionU7aUntersuchungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7aBeratung {
    title: "Beratung";
    code: CMRCompositionU7aBeratungCode;
    text: CMRCompositionU7aBeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU7aBeratungBeratungAnweisung
        | CMRCompositionU7aBeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU7aBeratungEntry[];
    emptyReason?: CMRCompositionU7aBeratungEmptyReason;
}

export const CMRCompositionU7aBeratung: t.Type<CMRCompositionU7aBeratung> = t.recursion(
    "CMRCompositionU7aBeratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU7aBeratungCode,
                    text: CMRCompositionU7aBeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7aBeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU7aBeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7aBeratungBeratungAnweisung,
                            CMRCompositionU7aBeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7aBeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU7aBeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7aBeratungEntry),
                    emptyReason: CMRCompositionU7aBeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7aErgebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU7aErgebnisseCode;
    text: CMRCompositionU7aErgebnisseText;
    section: Array<CMRCompositionU7aErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU7aErgebnisseEntry[];
    emptyReason?: CMRCompositionU7aErgebnisseEmptyReason;
}

export const CMRCompositionU7aErgebnisse: t.Type<CMRCompositionU7aErgebnisse> = t.recursion(
    "CMRCompositionU7aErgebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU7aErgebnisseCode,
                    text: CMRCompositionU7aErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU7aErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU7aErgebnisseEntry),
                    emptyReason: CMRCompositionU7aErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
    )[];
    entry?: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEntry[];
    emptyReason?: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung> = t.recursion(
    "CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(
                        CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEntry
                    ),
                    emptyReason: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7aPerzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU7aPerzentilkurvenCode;
    text: CMRCompositionU7aPerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU7aPerzentilkurvenEntry>;
    emptyReason?: CMRCompositionU7aPerzentilkurvenEmptyReason;
}

export const CMRCompositionU7aPerzentilkurven: t.Type<CMRCompositionU7aPerzentilkurven> = t.recursion(
    "CMRCompositionU7aPerzentilkurven",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU7aPerzentilkurvenCode,
                    text: CMRCompositionU7aPerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU7aPerzentilkurvenEntry),
                    emptyReason: CMRCompositionU7aPerzentilkurvenEmptyReason
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU7aMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7a|1.0.0"
    >;
    id?: string;
}

export const CMRCompositionU7aMeta: t.Type<CMRCompositionU7aMeta> = t.recursion(
    "CMRCompositionU7aMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7a|1.0.0"
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
export interface CMRCompositionU7aType {
    coding: Array<CMRCompositionU7aTypeCoding>;
    id?: string;
}

export const CMRCompositionU7aType: t.Type<CMRCompositionU7aType> = t.recursion(
    "CMRCompositionU7aType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aTypeCoding)
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
export interface CMRCompositionU7aCategory {
    coding: Array<CMRCompositionU7aCategoryCoding>;
    id?: string;
}

export const CMRCompositionU7aCategory: t.Type<CMRCompositionU7aCategory> = t.recursion(
    "CMRCompositionU7aCategory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7aCategoryCoding)
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
export interface CMRCompositionU7aSubject {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aSubject: t.Type<CMRCompositionU7aSubject> = t.recursion(
    "CMRCompositionU7aSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
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
export interface CMRCompositionU7aEncounter {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aEncounter: t.Type<CMRCompositionU7aEncounter> = t.recursion(
    "CMRCompositionU7aEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMRCompositionU7aAuthor {
    reference: string;
    id?: string;
}

export const CMRCompositionU7aAuthor: t.Type<CMRCompositionU7aAuthor> = t.recursion(
    "CMRCompositionU7aAuthor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCompositionU7a {
    resourceType: "Composition";
    meta: CMRCompositionU7aMeta;
    status: "final";
    type: CMRCompositionU7aType;
    category: Array<CMRCompositionU7aCategory>;
    subject: CMRCompositionU7aSubject;
    encounter: CMRCompositionU7aEncounter;
    date: string;
    author: Array<CMRCompositionU7aAuthor>;
    title: "U7a";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU7aU7aEinleitung)[];
    section?: (
        | CMRCompositionU7aAktuelleAnamneseDesKindes
        | CMRCompositionU7aSozialanamnese
        | CMRCompositionU7aUntersuchung
        | CMRCompositionU7aBeratung
        | CMRCompositionU7aErgebnisse
        | CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU7aPerzentilkurven
    )[];
}

const CMRCompositionU7a: t.Type<CMRCompositionU7a> = t.recursion(
    "CMRCompositionU7a",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionU7aMeta,
                    status: Literal("final"),
                    type: CMRCompositionU7aType,
                    category: MinMaxArray(1, 1, CMRCompositionU7aCategory),
                    subject: CMRCompositionU7aSubject,
                    encounter: CMRCompositionU7aEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 2, CMRCompositionU7aAuthor),
                    title: Literal("U7a")
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [t.Type<Extension>, t.Type<CMRCompositionU7aU7aEinleitung>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, CMRCompositionU7aU7aEinleitung]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7aU7aEinleitung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRCompositionU7aAktuelleAnamneseDesKindes>,
                                t.Type<CMRCompositionU7aSozialanamnese>,
                                t.Type<CMRCompositionU7aUntersuchung>,
                                t.Type<CMRCompositionU7aBeratung>,
                                t.Type<CMRCompositionU7aErgebnisse>,
                                t.Type<
                                    CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung
                                >,
                                t.Type<CMRCompositionU7aPerzentilkurven>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRCompositionU7aAktuelleAnamneseDesKindes,
                            CMRCompositionU7aSozialanamnese,
                            CMRCompositionU7aUntersuchung,
                            CMRCompositionU7aBeratung,
                            CMRCompositionU7aErgebnisse,
                            CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung,
                            CMRCompositionU7aPerzentilkurven
                        ]),
                        [
                            {
                                codec: CMRCompositionU7aAktuelleAnamneseDesKindes,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "423374008" }
                            },
                            {
                                codec: CMRCompositionU7aSozialanamnese,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "281575007" }
                            },
                            {
                                codec: CMRCompositionU7aUntersuchung,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "425044008" }
                            },
                            {
                                codec: CMRCompositionU7aBeratung,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "409066002" }
                            },
                            {
                                codec: CMRCompositionU7aErgebnisse,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "423100009" }
                            },
                            {
                                codec: CMRCompositionU7aOrientierendeBeurteilungDerEntwicklung,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.coding.code", value: "406207000" }
                            },
                            {
                                codec: CMRCompositionU7aPerzentilkurven,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "129822005" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

export default CMRCompositionU7a;
