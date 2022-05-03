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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU7ErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU7ErgebnisseSectionCodeCoding: t.Type<CMRCompositionU7ErgebnisseSectionCodeCoding> =
    t.recursion("CMRCompositionU7ErgebnisseSectionCodeCoding", () =>
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesCodeCoding", () =>
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
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
export interface CMRCompositionU7SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU7SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU7SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU7SozialanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU7SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU7SozialanamneseCodeCoding: t.Type<CMRCompositionU7SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU7SozialanamneseCodeCoding", () =>
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
export interface CMRCompositionU7SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU7SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU7SozialanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU7UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU7UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU7UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU7UntersuchungUntersuchungAnweisung", () =>
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
export interface CMRCompositionU7UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU7UntersuchungCodeCoding: t.Type<CMRCompositionU7UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU7UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU7UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU7UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU7UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU7BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU7BeratungBeratungAnweisung: t.Type<CMRCompositionU7BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU7BeratungBeratungAnweisung", () =>
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
export interface CMRCompositionU7BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU7BeratungBeratungHinweis: t.Type<CMRCompositionU7BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU7BeratungBeratungHinweis", () =>
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
export interface CMRCompositionU7BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU7BeratungCodeCoding: t.Type<CMRCompositionU7BeratungCodeCoding> =
    t.recursion("CMRCompositionU7BeratungCodeCoding", () =>
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
export interface CMRCompositionU7BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7BeratungEmptyReasonCoding: t.Type<CMRCompositionU7BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU7BeratungEmptyReasonCoding", () =>
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
export interface CMRCompositionU7ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU7ErgebnisseCodeCoding: t.Type<CMRCompositionU7ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU7ErgebnisseCodeCoding", () =>
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
export interface CMRCompositionU7ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU7ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU7ErgebnisseEmptyReasonCoding", () =>
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
export interface CMRCompositionU7ErgebnisseSectionCode {
    coding: Array<CMRCompositionU7ErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU7ErgebnisseSectionCode: t.Type<CMRCompositionU7ErgebnisseSectionCode> =
    t.recursion("CMRCompositionU7ErgebnisseSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7ErgebnisseSectionCodeCoding)
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
export interface CMRCompositionU7ErgebnisseSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7ErgebnisseSectionEntry: t.Type<CMRCompositionU7ErgebnisseSectionEntry> =
    t.recursion("CMRCompositionU7ErgebnisseSectionEntry", () =>
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
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
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
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
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
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
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
export interface CMRCompositionU7PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU7PerzentilkurvenCodeCoding: t.Type<CMRCompositionU7PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU7PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU7PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU7PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU7PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU7PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU7AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7AktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesText", () =>
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesEntry: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesEntry> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Current_Child_History|1.0.1"
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
export interface CMRCompositionU7AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU7AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU7AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7AktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU7SozialanamneseCode {
    coding: Array<CMRCompositionU7SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU7SozialanamneseCode: t.Type<CMRCompositionU7SozialanamneseCode> =
    t.recursion("CMRCompositionU7SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7SozialanamneseCodeCoding)
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
export interface CMRCompositionU7SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7SozialanamneseText: t.Type<CMRCompositionU7SozialanamneseText> =
    t.recursion("CMRCompositionU7SozialanamneseText", () =>
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
export interface CMRCompositionU7SozialanamneseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7SozialanamneseEntry: t.Type<CMRCompositionU7SozialanamneseEntry> =
    t.recursion("CMRCompositionU7SozialanamneseEntry", () =>
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
export interface CMRCompositionU7SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU7SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7SozialanamneseEmptyReason: t.Type<CMRCompositionU7SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU7SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7SozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU7UntersuchungCode {
    coding: Array<CMRCompositionU7UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU7UntersuchungCode: t.Type<CMRCompositionU7UntersuchungCode> =
    t.recursion("CMRCompositionU7UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7UntersuchungCodeCoding)
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
export interface CMRCompositionU7UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7UntersuchungText: t.Type<CMRCompositionU7UntersuchungText> =
    t.recursion("CMRCompositionU7UntersuchungText", () =>
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
export interface CMRCompositionU7UntersuchungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7UntersuchungEntry: t.Type<CMRCompositionU7UntersuchungEntry> =
    t.recursion("CMRCompositionU7UntersuchungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Mouth_Nose|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Eyes|1.0.1",
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
export interface CMRCompositionU7UntersuchungEmptyReason {
    coding: Array<CMRCompositionU7UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7UntersuchungEmptyReason: t.Type<CMRCompositionU7UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU7UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU7BeratungCode {
    coding: Array<CMRCompositionU7BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU7BeratungCode: t.Type<CMRCompositionU7BeratungCode> =
    t.recursion("CMRCompositionU7BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7BeratungCodeCoding)
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
export interface CMRCompositionU7BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7BeratungText: t.Type<CMRCompositionU7BeratungText> =
    t.recursion("CMRCompositionU7BeratungText", () =>
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
export interface CMRCompositionU7BeratungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7BeratungEntry: t.Type<CMRCompositionU7BeratungEntry> =
    t.recursion("CMRCompositionU7BeratungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U7_Consultation|1.0.1",
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
export interface CMRCompositionU7BeratungEmptyReason {
    coding: Array<CMRCompositionU7BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7BeratungEmptyReason: t.Type<CMRCompositionU7BeratungEmptyReason> =
    t.recursion("CMRCompositionU7BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7BeratungEmptyReasonCoding)
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
export interface CMRCompositionU7ErgebnisseCode {
    coding: Array<CMRCompositionU7ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU7ErgebnisseCode: t.Type<CMRCompositionU7ErgebnisseCode> =
    t.recursion("CMRCompositionU7ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7ErgebnisseCodeCoding)
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
export interface CMRCompositionU7ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7ErgebnisseText: t.Type<CMRCompositionU7ErgebnisseText> =
    t.recursion("CMRCompositionU7ErgebnisseText", () =>
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
export interface CMRCompositionU7ErgebnisseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7ErgebnisseEntry: t.Type<CMRCompositionU7ErgebnisseEntry> =
    t.recursion("CMRCompositionU7ErgebnisseEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.1",
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
export interface CMRCompositionU7ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU7ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7ErgebnisseEmptyReason: t.Type<CMRCompositionU7ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU7ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7ErgebnisseEmptyReasonCoding)
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
export interface CMRCompositionU7ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    code: CMRCompositionU7ErgebnisseSectionCode;
    id?: string;
    entry?: Array<CMRCompositionU7ErgebnisseSectionEntry>;
}

export const CMRCompositionU7ErgebnisseSection: t.Type<CMRCompositionU7ErgebnisseSection> =
    t.recursion("CMRCompositionU7ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    ),
                    code: CMRCompositionU7ErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU7ErgebnisseSectionEntry)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCodeCoding
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
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU7OrientierendeBeurteilungDerEntwicklungText", () =>
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
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEntry: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEntry> =
    t.recursion("CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Development_Assessment|1.0.1"
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
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
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
export interface CMRCompositionU7PerzentilkurvenCode {
    coding: Array<CMRCompositionU7PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU7PerzentilkurvenCode: t.Type<CMRCompositionU7PerzentilkurvenCode> =
    t.recursion("CMRCompositionU7PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU7PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU7PerzentilkurvenText: t.Type<CMRCompositionU7PerzentilkurvenText> =
    t.recursion("CMRCompositionU7PerzentilkurvenText", () =>
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
export interface CMRCompositionU7PerzentilkurvenEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU7PerzentilkurvenEntry: t.Type<CMRCompositionU7PerzentilkurvenEntry> =
    t.recursion("CMRCompositionU7PerzentilkurvenEntry", () =>
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
export interface CMRCompositionU7PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU7PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU7PerzentilkurvenEmptyReason: t.Type<CMRCompositionU7PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU7PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU7PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU7U7Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U7 Elterninformation zur Untersuchung vom 21. bis zum 24. Lebensmonat Ihr Kind ist jetzt fast zwei Jahre alt. Es kann nun wahrscheinlich schon über längere Zeit frei und sicher laufen und auch schon Treppenstufen hinuntergehen. Bei den meisten Kindern wächst der Wortschatz schnell. Sie sagen gerne „Nein“ und probieren aus, was sie mit ihrem Verhalten bewirken. Die letzte Untersuchung liegt etwa ein Jahr zurück. Die Ärztin oder der Arzt achtet bei der U7 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Untersuchungen der Augen durchgeführt. Die Ärztin oder der Arzt prüft, ob Ihr Kind einfache Wörter und Sätze versteht. Sie werden gefragt, wie sich Ihr Kind zum Beispiel beim Spielen, in der Familie oder in einer Gruppe von Kindern verhält. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung Ihres Kindes, Maßnahmen zur Unfallverhütung, die Förderung der Sprachentwicklung und die Kariesprophylaxe mittels Fluorid. Sie erhalten von der Ärztin oder dem Arzt Hinweise zur kindlichen Mundhygiene. Zur Abklärung von Auffälligkeiten beim Kieferwachstum, an den Zähnen oder der Mundschleimhaut bei Ihrem Kind werden Sie zur Zahnärztin oder zum Zahnarzt verwiesen.";
    id?: string;
}

export const CMRCompositionU7U7Einleitung: t.Type<CMRCompositionU7U7Einleitung> =
    t.recursion("CMRCompositionU7U7Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U7 Elterninformation zur Untersuchung vom 21. bis zum 24. Lebensmonat Ihr Kind ist jetzt fast zwei Jahre alt. Es kann nun wahrscheinlich schon über längere Zeit frei und sicher laufen und auch schon Treppenstufen hinuntergehen. Bei den meisten Kindern wächst der Wortschatz schnell. Sie sagen gerne „Nein“ und probieren aus, was sie mit ihrem Verhalten bewirken. Die letzte Untersuchung liegt etwa ein Jahr zurück. Die Ärztin oder der Arzt achtet bei der U7 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Untersuchungen der Augen durchgeführt. Die Ärztin oder der Arzt prüft, ob Ihr Kind einfache Wörter und Sätze versteht. Sie werden gefragt, wie sich Ihr Kind zum Beispiel beim Spielen, in der Familie oder in einer Gruppe von Kindern verhält. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung Ihres Kindes, Maßnahmen zur Unfallverhütung, die Förderung der Sprachentwicklung und die Kariesprophylaxe mittels Fluorid. Sie erhalten von der Ärztin oder dem Arzt Hinweise zur kindlichen Mundhygiene. Zur Abklärung von Auffälligkeiten beim Kieferwachstum, an den Zähnen oder der Mundschleimhaut bei Ihrem Kind werden Sie zur Zahnärztin oder zum Zahnarzt verwiesen."
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
export interface CMRCompositionU7TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "401140000";
    display: "Child 2 year examination (procedure)";
    id?: string;
}

export const CMRCompositionU7TypeCoding: t.Type<CMRCompositionU7TypeCoding> = t.recursion(
    "CMRCompositionU7TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("401140000"),
                    display: Literal("Child 2 year examination (procedure)")
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
export interface CMRCompositionU7CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU7CategoryCoding: t.Type<CMRCompositionU7CategoryCoding> =
    t.recursion("CMRCompositionU7CategoryCoding", () =>
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
export interface CMRCompositionU7AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU7AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU7AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU7AktuelleAnamneseDesKindesEntry[];
    emptyReason?: CMRCompositionU7AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU7AktuelleAnamneseDesKindes: t.Type<CMRCompositionU7AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU7AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU7AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU7AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7AktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7AktuelleAnamneseDesKindesEntry),
                    emptyReason: CMRCompositionU7AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU7SozialanamneseCode;
    text: CMRCompositionU7SozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU7SozialanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU7SozialanamneseEntry[];
    emptyReason?: CMRCompositionU7SozialanamneseEmptyReason;
}

export const CMRCompositionU7Sozialanamnese: t.Type<CMRCompositionU7Sozialanamnese> =
    t.recursion("CMRCompositionU7Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU7SozialanamneseCode,
                    text: CMRCompositionU7SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7SozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7SozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7SozialanamneseEntry),
                    emptyReason: CMRCompositionU7SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU7UntersuchungCode;
    text: CMRCompositionU7UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU7UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU7UntersuchungEntry[];
    emptyReason?: CMRCompositionU7UntersuchungEmptyReason;
}

export const CMRCompositionU7Untersuchung: t.Type<CMRCompositionU7Untersuchung> =
    t.recursion("CMRCompositionU7Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU7UntersuchungCode,
                    text: CMRCompositionU7UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7UntersuchungEntry),
                    emptyReason: CMRCompositionU7UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7Beratung {
    title: "Beratung";
    code: CMRCompositionU7BeratungCode;
    text: CMRCompositionU7BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU7BeratungBeratungAnweisung
        | CMRCompositionU7BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU7BeratungEntry[];
    emptyReason?: CMRCompositionU7BeratungEmptyReason;
}

export const CMRCompositionU7Beratung: t.Type<CMRCompositionU7Beratung> = t.recursion(
    "CMRCompositionU7Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU7BeratungCode,
                    text: CMRCompositionU7BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU7BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7BeratungBeratungAnweisung,
                            CMRCompositionU7BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU7BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU7BeratungEntry),
                    emptyReason: CMRCompositionU7BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU7ErgebnisseCode;
    text: CMRCompositionU7ErgebnisseText;
    section: Array<CMRCompositionU7ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU7ErgebnisseEntry[];
    emptyReason?: CMRCompositionU7ErgebnisseEmptyReason;
}

export const CMRCompositionU7Ergebnisse: t.Type<CMRCompositionU7Ergebnisse> = t.recursion(
    "CMRCompositionU7Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU7ErgebnisseCode,
                    text: CMRCompositionU7ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU7ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU7ErgebnisseEntry),
                    emptyReason: CMRCompositionU7ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
    )[];
    entry?: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEntry[];
    emptyReason?: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU7OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU7OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU7OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
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
                        CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEntry
                    ),
                    emptyReason:
                        CMRCompositionU7OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU7Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU7PerzentilkurvenCode;
    text: CMRCompositionU7PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU7PerzentilkurvenEntry>;
    emptyReason?: CMRCompositionU7PerzentilkurvenEmptyReason;
}

export const CMRCompositionU7Perzentilkurven: t.Type<CMRCompositionU7Perzentilkurven> =
    t.recursion("CMRCompositionU7Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU7PerzentilkurvenCode,
                    text: CMRCompositionU7PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU7PerzentilkurvenEntry),
                    emptyReason: CMRCompositionU7PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU7Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7|1.0.1">;
    id?: string;
}

export const CMRCompositionU7Meta: t.Type<CMRCompositionU7Meta> = t.recursion(
    "CMRCompositionU7Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U7|1.0.1"
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
export interface CMRCompositionU7Type {
    coding: Array<CMRCompositionU7TypeCoding>;
    id?: string;
}

export const CMRCompositionU7Type: t.Type<CMRCompositionU7Type> = t.recursion(
    "CMRCompositionU7Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7TypeCoding)
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
export interface CMRCompositionU7Category {
    coding: Array<CMRCompositionU7CategoryCoding>;
    id?: string;
}

export const CMRCompositionU7Category: t.Type<CMRCompositionU7Category> = t.recursion(
    "CMRCompositionU7Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU7CategoryCoding)
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
export interface CMRCompositionU7Subject {
    reference: string;
    id?: string;
}

export const CMRCompositionU7Subject: t.Type<CMRCompositionU7Subject> = t.recursion(
    "CMRCompositionU7Subject",
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
export interface CMRCompositionU7Encounter {
    reference: string;
    id?: string;
}

export const CMRCompositionU7Encounter: t.Type<CMRCompositionU7Encounter> = t.recursion(
    "CMRCompositionU7Encounter",
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
export interface CMRCompositionU7Author {
    reference: string;
    id?: string;
}

export const CMRCompositionU7Author: t.Type<CMRCompositionU7Author> = t.recursion(
    "CMRCompositionU7Author",
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

interface CMRCompositionU7 {
    resourceType: "Composition";
    meta: CMRCompositionU7Meta;
    status: "final";
    type: CMRCompositionU7Type;
    category: Array<CMRCompositionU7Category>;
    subject: CMRCompositionU7Subject;
    encounter: CMRCompositionU7Encounter;
    date: string;
    author: Array<CMRCompositionU7Author>;
    title: "U7";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU7U7Einleitung)[];
    section?: (
        | CMRCompositionU7AktuelleAnamneseDesKindes
        | CMRCompositionU7Sozialanamnese
        | CMRCompositionU7Untersuchung
        | CMRCompositionU7Beratung
        | CMRCompositionU7Ergebnisse
        | CMRCompositionU7OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU7Perzentilkurven
    )[];
}

const CMRCompositionU7: t.Type<CMRCompositionU7> = t.recursion("CMRCompositionU7", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU7Meta,
                status: Literal("final"),
                type: CMRCompositionU7Type,
                category: MinMaxArray(1, 1, CMRCompositionU7Category),
                subject: CMRCompositionU7Subject,
                encounter: CMRCompositionU7Encounter,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU7Author),
                title: Literal("U7")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU7U7Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU7U7Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU7U7Einleitung,
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
                            t.Type<CMRCompositionU7AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU7Sozialanamnese>,
                            t.Type<CMRCompositionU7Untersuchung>,
                            t.Type<CMRCompositionU7Beratung>,
                            t.Type<CMRCompositionU7Ergebnisse>,
                            t.Type<CMRCompositionU7OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU7Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU7AktuelleAnamneseDesKindes,
                        CMRCompositionU7Sozialanamnese,
                        CMRCompositionU7Untersuchung,
                        CMRCompositionU7Beratung,
                        CMRCompositionU7Ergebnisse,
                        CMRCompositionU7OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU7Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU7AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU7Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU7Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU7Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU7Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU7OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU7Perzentilkurven,
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

export default CMRCompositionU7;
