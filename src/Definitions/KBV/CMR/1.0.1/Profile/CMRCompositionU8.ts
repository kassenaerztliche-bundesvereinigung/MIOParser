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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U8"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU8ErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU8ErgebnisseSectionCodeCoding: t.Type<CMRCompositionU8ErgebnisseSectionCodeCoding> =
    t.recursion("CMRCompositionU8ErgebnisseSectionCodeCoding", () =>
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesCodeCoding", () =>
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
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
export interface CMRCompositionU8SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU8SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU8SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU8SozialanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU8SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU8SozialanamneseCodeCoding: t.Type<CMRCompositionU8SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU8SozialanamneseCodeCoding", () =>
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
export interface CMRCompositionU8SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU8SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU8SozialanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU8UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU8UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU8UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU8UntersuchungUntersuchungAnweisung", () =>
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
export interface CMRCompositionU8UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU8UntersuchungCodeCoding: t.Type<CMRCompositionU8UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU8UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU8UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU8UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU8UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU8BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU8BeratungBeratungAnweisung: t.Type<CMRCompositionU8BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU8BeratungBeratungAnweisung", () =>
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
export interface CMRCompositionU8BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU8BeratungBeratungHinweis: t.Type<CMRCompositionU8BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU8BeratungBeratungHinweis", () =>
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
export interface CMRCompositionU8BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU8BeratungCodeCoding: t.Type<CMRCompositionU8BeratungCodeCoding> =
    t.recursion("CMRCompositionU8BeratungCodeCoding", () =>
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
export interface CMRCompositionU8BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8BeratungEmptyReasonCoding: t.Type<CMRCompositionU8BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU8BeratungEmptyReasonCoding", () =>
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
export interface CMRCompositionU8ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU8ErgebnisseCodeCoding: t.Type<CMRCompositionU8ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU8ErgebnisseCodeCoding", () =>
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
export interface CMRCompositionU8ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU8ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU8ErgebnisseEmptyReasonCoding", () =>
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
export interface CMRCompositionU8ErgebnisseSectionCode {
    coding: Array<CMRCompositionU8ErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU8ErgebnisseSectionCode: t.Type<CMRCompositionU8ErgebnisseSectionCode> =
    t.recursion("CMRCompositionU8ErgebnisseSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8ErgebnisseSectionCodeCoding)
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
export interface CMRCompositionU8ErgebnisseSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8ErgebnisseSectionEntry: t.Type<CMRCompositionU8ErgebnisseSectionEntry> =
    t.recursion("CMRCompositionU8ErgebnisseSectionEntry", () =>
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
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
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
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
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
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
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
export interface CMRCompositionU8PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU8PerzentilkurvenCodeCoding: t.Type<CMRCompositionU8PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU8PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU8PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU8PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU8PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU8PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU8AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8AktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesText", () =>
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesEntry: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesEntry> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Current_Child_History|1.0.1"
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
export interface CMRCompositionU8AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU8AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU8AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8AktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU8SozialanamneseCode {
    coding: Array<CMRCompositionU8SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU8SozialanamneseCode: t.Type<CMRCompositionU8SozialanamneseCode> =
    t.recursion("CMRCompositionU8SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8SozialanamneseCodeCoding)
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
export interface CMRCompositionU8SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8SozialanamneseText: t.Type<CMRCompositionU8SozialanamneseText> =
    t.recursion("CMRCompositionU8SozialanamneseText", () =>
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
export interface CMRCompositionU8SozialanamneseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8SozialanamneseEntry: t.Type<CMRCompositionU8SozialanamneseEntry> =
    t.recursion("CMRCompositionU8SozialanamneseEntry", () =>
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
export interface CMRCompositionU8SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU8SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8SozialanamneseEmptyReason: t.Type<CMRCompositionU8SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU8SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8SozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU8UntersuchungCode {
    coding: Array<CMRCompositionU8UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU8UntersuchungCode: t.Type<CMRCompositionU8UntersuchungCode> =
    t.recursion("CMRCompositionU8UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8UntersuchungCodeCoding)
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
export interface CMRCompositionU8UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8UntersuchungText: t.Type<CMRCompositionU8UntersuchungText> =
    t.recursion("CMRCompositionU8UntersuchungText", () =>
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
export interface CMRCompositionU8UntersuchungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8UntersuchungEntry: t.Type<CMRCompositionU8UntersuchungEntry> =
    t.recursion("CMRCompositionU8UntersuchungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Musculoskeletal_System|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_U9_Physical_Exam_Mouth_Nose|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.1",
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
export interface CMRCompositionU8UntersuchungEmptyReason {
    coding: Array<CMRCompositionU8UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8UntersuchungEmptyReason: t.Type<CMRCompositionU8UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU8UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU8BeratungCode {
    coding: Array<CMRCompositionU8BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU8BeratungCode: t.Type<CMRCompositionU8BeratungCode> =
    t.recursion("CMRCompositionU8BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8BeratungCodeCoding)
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
export interface CMRCompositionU8BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8BeratungText: t.Type<CMRCompositionU8BeratungText> =
    t.recursion("CMRCompositionU8BeratungText", () =>
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
export interface CMRCompositionU8BeratungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8BeratungEntry: t.Type<CMRCompositionU8BeratungEntry> =
    t.recursion("CMRCompositionU8BeratungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U8_Consultation|1.0.1",
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
export interface CMRCompositionU8BeratungEmptyReason {
    coding: Array<CMRCompositionU8BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8BeratungEmptyReason: t.Type<CMRCompositionU8BeratungEmptyReason> =
    t.recursion("CMRCompositionU8BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8BeratungEmptyReasonCoding)
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
export interface CMRCompositionU8ErgebnisseCode {
    coding: Array<CMRCompositionU8ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU8ErgebnisseCode: t.Type<CMRCompositionU8ErgebnisseCode> =
    t.recursion("CMRCompositionU8ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8ErgebnisseCodeCoding)
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
export interface CMRCompositionU8ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8ErgebnisseText: t.Type<CMRCompositionU8ErgebnisseText> =
    t.recursion("CMRCompositionU8ErgebnisseText", () =>
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
export interface CMRCompositionU8ErgebnisseEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8ErgebnisseEntry: t.Type<CMRCompositionU8ErgebnisseEntry> =
    t.recursion("CMRCompositionU8ErgebnisseEntry", () =>
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
export interface CMRCompositionU8ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU8ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8ErgebnisseEmptyReason: t.Type<CMRCompositionU8ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU8ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8ErgebnisseEmptyReasonCoding)
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
export interface CMRCompositionU8ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    code: CMRCompositionU8ErgebnisseSectionCode;
    id?: string;
    entry?: Array<CMRCompositionU8ErgebnisseSectionEntry>;
}

export const CMRCompositionU8ErgebnisseSection: t.Type<CMRCompositionU8ErgebnisseSection> =
    t.recursion("CMRCompositionU8ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    ),
                    code: CMRCompositionU8ErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU8ErgebnisseSectionEntry)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCodeCoding
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
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU8OrientierendeBeurteilungDerEntwicklungText", () =>
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
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEntry: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEntry> =
    t.recursion("CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Development_Assessment|1.0.1"
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
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
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
export interface CMRCompositionU8PerzentilkurvenCode {
    coding: Array<CMRCompositionU8PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU8PerzentilkurvenCode: t.Type<CMRCompositionU8PerzentilkurvenCode> =
    t.recursion("CMRCompositionU8PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU8PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU8PerzentilkurvenText: t.Type<CMRCompositionU8PerzentilkurvenText> =
    t.recursion("CMRCompositionU8PerzentilkurvenText", () =>
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
export interface CMRCompositionU8PerzentilkurvenEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionU8PerzentilkurvenEntry: t.Type<CMRCompositionU8PerzentilkurvenEntry> =
    t.recursion("CMRCompositionU8PerzentilkurvenEntry", () =>
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
export interface CMRCompositionU8PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU8PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU8PerzentilkurvenEmptyReason: t.Type<CMRCompositionU8PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU8PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU8PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU8U8Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U8 Elterninformation zur Untersuchung vom 46. bis zum 48. Lebensmonat Ihr Kind ist jetzt fast vier Jahre alt. Die meisten Kinder können sich in diesem Alter schon selbst an- und ausziehen. Ihre Sprache ist schon so weit entwickelt, dass sie vielleicht kleine Geschichten erzählen können und viele Fragen nach dem Warum, Wie, Wo oder Wann stellen. Die Ärztin oder der Arzt achtet bei der U8 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Sehtests durchgeführt. Das Hörvermögen Ihres Kindes wird ebenfalls geprüft. Die Ärztin oder der Arzt untersucht die Beschaffenheit der Zähne und die Entwicklung des Kiefers. Während der Untersuchung testet die Ärztin oder der Arzt, wie beweglich und geschickt Ihr Kind ist, ob es sich alleine beschäftigen kann und wie gut es spricht. Sie werden gefragt, wie sich Ihr Kind beim Spielen, in der Familie oder in einer Gruppe von Kindern verhält. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Bewegung Ihres Kindes, Maßnahmen zur Unfallverhütung, die Förderung der Sprachentwicklung und den verantwortungsbewussten Gebrauch von Medien (z. B. TV, Spielekonsolen, Internet und Ähnlichem) im Alltag Ihres Kindes. Ihre Ärztin oder Ihr Arzt verweist Sie zur zahnärztlichen Früherkennungsuntersuchung.";
    id?: string;
}

export const CMRCompositionU8U8Einleitung: t.Type<CMRCompositionU8U8Einleitung> =
    t.recursion("CMRCompositionU8U8Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U8 Elterninformation zur Untersuchung vom 46. bis zum 48. Lebensmonat Ihr Kind ist jetzt fast vier Jahre alt. Die meisten Kinder können sich in diesem Alter schon selbst an- und ausziehen. Ihre Sprache ist schon so weit entwickelt, dass sie vielleicht kleine Geschichten erzählen können und viele Fragen nach dem Warum, Wie, Wo oder Wann stellen. Die Ärztin oder der Arzt achtet bei der U8 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden Sehtests durchgeführt. Das Hörvermögen Ihres Kindes wird ebenfalls geprüft. Die Ärztin oder der Arzt untersucht die Beschaffenheit der Zähne und die Entwicklung des Kiefers. Während der Untersuchung testet die Ärztin oder der Arzt, wie beweglich und geschickt Ihr Kind ist, ob es sich alleine beschäftigen kann und wie gut es spricht. Sie werden gefragt, wie sich Ihr Kind beim Spielen, in der Familie oder in einer Gruppe von Kindern verhält. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Außerdem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Bewegung Ihres Kindes, Maßnahmen zur Unfallverhütung, die Förderung der Sprachentwicklung und den verantwortungsbewussten Gebrauch von Medien (z. B. TV, Spielekonsolen, Internet und Ähnlichem) im Alltag Ihres Kindes. Ihre Ärztin oder Ihr Arzt verweist Sie zur zahnärztlichen Früherkennungsuntersuchung."
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
export interface CMRCompositionU8TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "410635005";
    display: "Child 4 year examination (procedure)";
    id?: string;
}

export const CMRCompositionU8TypeCoding: t.Type<CMRCompositionU8TypeCoding> = t.recursion(
    "CMRCompositionU8TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("410635005"),
                    display: Literal("Child 4 year examination (procedure)")
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
export interface CMRCompositionU8CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU8CategoryCoding: t.Type<CMRCompositionU8CategoryCoding> =
    t.recursion("CMRCompositionU8CategoryCoding", () =>
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
export interface CMRCompositionU8AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU8AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU8AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU8AktuelleAnamneseDesKindesEntry[];
    emptyReason?: CMRCompositionU8AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU8AktuelleAnamneseDesKindes: t.Type<CMRCompositionU8AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU8AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU8AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU8AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU8AktuelleAnamneseDesKindesAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU8AktuelleAnamneseDesKindesEntry),
                    emptyReason: CMRCompositionU8AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU8Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU8SozialanamneseCode;
    text: CMRCompositionU8SozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU8SozialanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU8SozialanamneseEntry[];
    emptyReason?: CMRCompositionU8SozialanamneseEmptyReason;
}

export const CMRCompositionU8Sozialanamnese: t.Type<CMRCompositionU8Sozialanamnese> =
    t.recursion("CMRCompositionU8Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU8SozialanamneseCode,
                    text: CMRCompositionU8SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU8SozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU8SozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU8SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU8SozialanamneseEntry),
                    emptyReason: CMRCompositionU8SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU8Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU8UntersuchungCode;
    text: CMRCompositionU8UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU8UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU8UntersuchungEntry[];
    emptyReason?: CMRCompositionU8UntersuchungEmptyReason;
}

export const CMRCompositionU8Untersuchung: t.Type<CMRCompositionU8Untersuchung> =
    t.recursion("CMRCompositionU8Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU8UntersuchungCode,
                    text: CMRCompositionU8UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU8UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU8UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU8UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU8UntersuchungEntry),
                    emptyReason: CMRCompositionU8UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU8Beratung {
    title: "Beratung";
    code: CMRCompositionU8BeratungCode;
    text: CMRCompositionU8BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU8BeratungBeratungAnweisung
        | CMRCompositionU8BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU8BeratungEntry[];
    emptyReason?: CMRCompositionU8BeratungEmptyReason;
}

export const CMRCompositionU8Beratung: t.Type<CMRCompositionU8Beratung> = t.recursion(
    "CMRCompositionU8Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU8BeratungCode,
                    text: CMRCompositionU8BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU8BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU8BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU8BeratungBeratungAnweisung,
                            CMRCompositionU8BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU8BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU8BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU8BeratungEntry),
                    emptyReason: CMRCompositionU8BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU8Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU8ErgebnisseCode;
    text: CMRCompositionU8ErgebnisseText;
    section: Array<CMRCompositionU8ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU8ErgebnisseEntry[];
    emptyReason?: CMRCompositionU8ErgebnisseEmptyReason;
}

export const CMRCompositionU8Ergebnisse: t.Type<CMRCompositionU8Ergebnisse> = t.recursion(
    "CMRCompositionU8Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU8ErgebnisseCode,
                    text: CMRCompositionU8ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU8ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU8ErgebnisseEntry),
                    emptyReason: CMRCompositionU8ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU8OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
    )[];
    entry?: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEntry[];
    emptyReason?: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU8OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU8OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU8OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
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
                        CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEntry
                    ),
                    emptyReason:
                        CMRCompositionU8OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU8Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU8PerzentilkurvenCode;
    text: CMRCompositionU8PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU8PerzentilkurvenEntry>;
    emptyReason?: CMRCompositionU8PerzentilkurvenEmptyReason;
}

export const CMRCompositionU8Perzentilkurven: t.Type<CMRCompositionU8Perzentilkurven> =
    t.recursion("CMRCompositionU8Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU8PerzentilkurvenCode,
                    text: CMRCompositionU8PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU8PerzentilkurvenEntry),
                    emptyReason: CMRCompositionU8PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU8Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U8|1.0.1">;
    id?: string;
}

export const CMRCompositionU8Meta: t.Type<CMRCompositionU8Meta> = t.recursion(
    "CMRCompositionU8Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U8|1.0.1"
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
export interface CMRCompositionU8Type {
    coding: Array<CMRCompositionU8TypeCoding>;
    id?: string;
}

export const CMRCompositionU8Type: t.Type<CMRCompositionU8Type> = t.recursion(
    "CMRCompositionU8Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8TypeCoding)
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
export interface CMRCompositionU8Category {
    coding: Array<CMRCompositionU8CategoryCoding>;
    id?: string;
}

export const CMRCompositionU8Category: t.Type<CMRCompositionU8Category> = t.recursion(
    "CMRCompositionU8Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU8CategoryCoding)
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
export interface CMRCompositionU8Subject {
    reference: string;
    id?: string;
}

export const CMRCompositionU8Subject: t.Type<CMRCompositionU8Subject> = t.recursion(
    "CMRCompositionU8Subject",
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
export interface CMRCompositionU8Encounter {
    reference: string;
    id?: string;
}

export const CMRCompositionU8Encounter: t.Type<CMRCompositionU8Encounter> = t.recursion(
    "CMRCompositionU8Encounter",
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
export interface CMRCompositionU8Author {
    reference: string;
    id?: string;
}

export const CMRCompositionU8Author: t.Type<CMRCompositionU8Author> = t.recursion(
    "CMRCompositionU8Author",
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

interface CMRCompositionU8 {
    resourceType: "Composition";
    meta: CMRCompositionU8Meta;
    status: "final";
    type: CMRCompositionU8Type;
    category: Array<CMRCompositionU8Category>;
    subject: CMRCompositionU8Subject;
    encounter: CMRCompositionU8Encounter;
    date: string;
    author: Array<CMRCompositionU8Author>;
    title: "U8";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU8U8Einleitung)[];
    section?: (
        | CMRCompositionU8AktuelleAnamneseDesKindes
        | CMRCompositionU8Sozialanamnese
        | CMRCompositionU8Untersuchung
        | CMRCompositionU8Beratung
        | CMRCompositionU8Ergebnisse
        | CMRCompositionU8OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU8Perzentilkurven
    )[];
}

const CMRCompositionU8: t.Type<CMRCompositionU8> = t.recursion("CMRCompositionU8", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU8Meta,
                status: Literal("final"),
                type: CMRCompositionU8Type,
                category: MinMaxArray(1, 1, CMRCompositionU8Category),
                subject: CMRCompositionU8Subject,
                encounter: CMRCompositionU8Encounter,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU8Author),
                title: Literal("U8")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU8U8Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU8U8Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU8U8Einleitung,
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
                            t.Type<CMRCompositionU8AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU8Sozialanamnese>,
                            t.Type<CMRCompositionU8Untersuchung>,
                            t.Type<CMRCompositionU8Beratung>,
                            t.Type<CMRCompositionU8Ergebnisse>,
                            t.Type<CMRCompositionU8OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU8Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU8AktuelleAnamneseDesKindes,
                        CMRCompositionU8Sozialanamnese,
                        CMRCompositionU8Untersuchung,
                        CMRCompositionU8Beratung,
                        CMRCompositionU8Ergebnisse,
                        CMRCompositionU8OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU8Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU8AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU8Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU8Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU8Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU8Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU8OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU8Perzentilkurven,
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

export default CMRCompositionU8;
