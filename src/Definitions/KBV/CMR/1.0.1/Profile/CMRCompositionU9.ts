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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U9"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionU9ErgebnisseSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "722448004";
    display: "Treatment plan report (record artifact)";
    id?: string;
}

export const CMRCompositionU9ErgebnisseSectionCodeCoding: t.Type<CMRCompositionU9ErgebnisseSectionCodeCoding> =
    t.recursion("CMRCompositionU9ErgebnisseSectionCodeCoding", () =>
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung", () =>
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423374008";
    display: "Review of systems section (record artifact)";
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesCodeCoding: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesCodeCoding> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesCodeCoding", () =>
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesEmptyReasonCoding: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesEmptyReasonCoding> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesEmptyReasonCoding", () =>
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
export interface CMRCompositionU9SozialanamneseAnamneseAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Zutreffendes bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU9SozialanamneseAnamneseAnweisung: t.Type<CMRCompositionU9SozialanamneseAnamneseAnweisung> =
    t.recursion("CMRCompositionU9SozialanamneseAnamneseAnweisung", () =>
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
export interface CMRCompositionU9SozialanamneseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    display: "Family social history (situation)";
    id?: string;
}

export const CMRCompositionU9SozialanamneseCodeCoding: t.Type<CMRCompositionU9SozialanamneseCodeCoding> =
    t.recursion("CMRCompositionU9SozialanamneseCodeCoding", () =>
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
export interface CMRCompositionU9SozialanamneseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9SozialanamneseEmptyReasonCoding: t.Type<CMRCompositionU9SozialanamneseEmptyReasonCoding> =
    t.recursion("CMRCompositionU9SozialanamneseEmptyReasonCoding", () =>
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
export interface CMRCompositionU9UntersuchungUntersuchungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur Auffälligkeiten ankreuzen!";
    id?: string;
}

export const CMRCompositionU9UntersuchungUntersuchungAnweisung: t.Type<CMRCompositionU9UntersuchungUntersuchungAnweisung> =
    t.recursion("CMRCompositionU9UntersuchungUntersuchungAnweisung", () =>
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
export interface CMRCompositionU9UntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "425044008";
    display: "Physical exam section (record artifact)";
    id?: string;
}

export const CMRCompositionU9UntersuchungCodeCoding: t.Type<CMRCompositionU9UntersuchungCodeCoding> =
    t.recursion("CMRCompositionU9UntersuchungCodeCoding", () =>
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
export interface CMRCompositionU9UntersuchungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9UntersuchungEmptyReasonCoding: t.Type<CMRCompositionU9UntersuchungEmptyReasonCoding> =
    t.recursion("CMRCompositionU9UntersuchungEmptyReasonCoding", () =>
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
export interface CMRCompositionU9BeratungBeratungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Bei erweitertem Beratungsbedarf bitte ankreuzen!";
    id?: string;
}

export const CMRCompositionU9BeratungBeratungAnweisung: t.Type<CMRCompositionU9BeratungBeratungAnweisung> =
    t.recursion("CMRCompositionU9BeratungBeratungAnweisung", () =>
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
export interface CMRCompositionU9BeratungBeratungHinweis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "Beratung vor allem zu folgenden Themen:";
    id?: string;
}

export const CMRCompositionU9BeratungBeratungHinweis: t.Type<CMRCompositionU9BeratungBeratungHinweis> =
    t.recursion("CMRCompositionU9BeratungBeratungHinweis", () =>
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
export interface CMRCompositionU9BeratungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "409066002";
    display: "Education, guidance and counseling (procedure)";
    id?: string;
}

export const CMRCompositionU9BeratungCodeCoding: t.Type<CMRCompositionU9BeratungCodeCoding> =
    t.recursion("CMRCompositionU9BeratungCodeCoding", () =>
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
export interface CMRCompositionU9BeratungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9BeratungEmptyReasonCoding: t.Type<CMRCompositionU9BeratungEmptyReasonCoding> =
    t.recursion("CMRCompositionU9BeratungEmptyReasonCoding", () =>
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
export interface CMRCompositionU9ErgebnisseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "423100009";
    display: "Results section (record artifact)";
    id?: string;
}

export const CMRCompositionU9ErgebnisseCodeCoding: t.Type<CMRCompositionU9ErgebnisseCodeCoding> =
    t.recursion("CMRCompositionU9ErgebnisseCodeCoding", () =>
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
export interface CMRCompositionU9ErgebnisseEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9ErgebnisseEmptyReasonCoding: t.Type<CMRCompositionU9ErgebnisseEmptyReasonCoding> =
    t.recursion("CMRCompositionU9ErgebnisseEmptyReasonCoding", () =>
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
export interface CMRCompositionU9ErgebnisseSectionCode {
    coding: Array<CMRCompositionU9ErgebnisseSectionCodeCoding>;
    id?: string;
}

export const CMRCompositionU9ErgebnisseSectionCode: t.Type<CMRCompositionU9ErgebnisseSectionCode> =
    t.recursion("CMRCompositionU9ErgebnisseSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9ErgebnisseSectionCodeCoding)
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
export interface CMRCompositionU9ErgebnisseSectionEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9ErgebnisseSectionEntryReference: t.Type<CMRCompositionU9ErgebnisseSectionEntryReference> =
    t.recursion("CMRCompositionU9ErgebnisseSectionEntryReference", () =>
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
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: "Nur ankreuzen, wenn die Items NICHT erfüllt werden!";
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung> =
    t.recursion(
        "CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung",
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
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    display: "Child development by age (observable entity)";
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCodeCoding: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCodeCoding> =
    t.recursion("CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCodeCoding", () =>
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
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding> =
    t.recursion(
        "CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding",
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
export interface CMRCompositionU9PerzentilkurvenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionU9PerzentilkurvenCodeCoding: t.Type<CMRCompositionU9PerzentilkurvenCodeCoding> =
    t.recursion("CMRCompositionU9PerzentilkurvenCodeCoding", () =>
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
export interface CMRCompositionU9PerzentilkurvenEmptyReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/list-empty-reason";
    version: "4.0.1";
    code: "closed";
    display: "Closed";
    id?: string;
}

export const CMRCompositionU9PerzentilkurvenEmptyReasonCoding: t.Type<CMRCompositionU9PerzentilkurvenEmptyReasonCoding> =
    t.recursion("CMRCompositionU9PerzentilkurvenEmptyReasonCoding", () =>
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesCode {
    coding: Array<CMRCompositionU9AktuelleAnamneseDesKindesCodeCoding>;
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesCode: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesCode> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9AktuelleAnamneseDesKindesCodeCoding
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesText: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesText> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesText", () =>
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesEntryReference: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesEntryReference> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Current_Child_History|1.0.1"
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
export interface CMRCompositionU9AktuelleAnamneseDesKindesEmptyReason {
    coding: Array<CMRCompositionU9AktuelleAnamneseDesKindesEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9AktuelleAnamneseDesKindesEmptyReason: t.Type<CMRCompositionU9AktuelleAnamneseDesKindesEmptyReason> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindesEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9AktuelleAnamneseDesKindesEmptyReasonCoding
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
export interface CMRCompositionU9SozialanamneseCode {
    coding: Array<CMRCompositionU9SozialanamneseCodeCoding>;
    id?: string;
}

export const CMRCompositionU9SozialanamneseCode: t.Type<CMRCompositionU9SozialanamneseCode> =
    t.recursion("CMRCompositionU9SozialanamneseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9SozialanamneseCodeCoding)
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
export interface CMRCompositionU9SozialanamneseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9SozialanamneseText: t.Type<CMRCompositionU9SozialanamneseText> =
    t.recursion("CMRCompositionU9SozialanamneseText", () =>
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
export interface CMRCompositionU9SozialanamneseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9SozialanamneseEntryReference: t.Type<CMRCompositionU9SozialanamneseEntryReference> =
    t.recursion("CMRCompositionU9SozialanamneseEntryReference", () =>
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
export interface CMRCompositionU9SozialanamneseEmptyReason {
    coding: Array<CMRCompositionU9SozialanamneseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9SozialanamneseEmptyReason: t.Type<CMRCompositionU9SozialanamneseEmptyReason> =
    t.recursion("CMRCompositionU9SozialanamneseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9SozialanamneseEmptyReasonCoding
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
export interface CMRCompositionU9UntersuchungCode {
    coding: Array<CMRCompositionU9UntersuchungCodeCoding>;
    id?: string;
}

export const CMRCompositionU9UntersuchungCode: t.Type<CMRCompositionU9UntersuchungCode> =
    t.recursion("CMRCompositionU9UntersuchungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9UntersuchungCodeCoding)
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
export interface CMRCompositionU9UntersuchungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9UntersuchungText: t.Type<CMRCompositionU9UntersuchungText> =
    t.recursion("CMRCompositionU9UntersuchungText", () =>
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
export interface CMRCompositionU9UntersuchungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9UntersuchungEntryReference: t.Type<CMRCompositionU9UntersuchungEntryReference> =
    t.recursion("CMRCompositionU9UntersuchungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U9_Physical_Exam_Abdomen_Genitals|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Musculoskeletal_System|1.0.1",
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
export interface CMRCompositionU9UntersuchungEmptyReason {
    coding: Array<CMRCompositionU9UntersuchungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9UntersuchungEmptyReason: t.Type<CMRCompositionU9UntersuchungEmptyReason> =
    t.recursion("CMRCompositionU9UntersuchungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9UntersuchungEmptyReasonCoding
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
export interface CMRCompositionU9BeratungCode {
    coding: Array<CMRCompositionU9BeratungCodeCoding>;
    id?: string;
}

export const CMRCompositionU9BeratungCode: t.Type<CMRCompositionU9BeratungCode> =
    t.recursion("CMRCompositionU9BeratungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9BeratungCodeCoding)
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
export interface CMRCompositionU9BeratungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9BeratungText: t.Type<CMRCompositionU9BeratungText> =
    t.recursion("CMRCompositionU9BeratungText", () =>
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
export interface CMRCompositionU9BeratungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9BeratungEntryReference: t.Type<CMRCompositionU9BeratungEntryReference> =
    t.recursion("CMRCompositionU9BeratungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U9_Consultation|1.0.1",
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
export interface CMRCompositionU9BeratungEmptyReason {
    coding: Array<CMRCompositionU9BeratungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9BeratungEmptyReason: t.Type<CMRCompositionU9BeratungEmptyReason> =
    t.recursion("CMRCompositionU9BeratungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9BeratungEmptyReasonCoding)
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
export interface CMRCompositionU9ErgebnisseCode {
    coding: Array<CMRCompositionU9ErgebnisseCodeCoding>;
    id?: string;
}

export const CMRCompositionU9ErgebnisseCode: t.Type<CMRCompositionU9ErgebnisseCode> =
    t.recursion("CMRCompositionU9ErgebnisseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9ErgebnisseCodeCoding)
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
export interface CMRCompositionU9ErgebnisseText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9ErgebnisseText: t.Type<CMRCompositionU9ErgebnisseText> =
    t.recursion("CMRCompositionU9ErgebnisseText", () =>
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
export interface CMRCompositionU9ErgebnisseEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9ErgebnisseEntryReference: t.Type<CMRCompositionU9ErgebnisseEntryReference> =
    t.recursion("CMRCompositionU9ErgebnisseEntryReference", () =>
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
export interface CMRCompositionU9ErgebnisseEmptyReason {
    coding: Array<CMRCompositionU9ErgebnisseEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9ErgebnisseEmptyReason: t.Type<CMRCompositionU9ErgebnisseEmptyReason> =
    t.recursion("CMRCompositionU9ErgebnisseEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9ErgebnisseEmptyReasonCoding)
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
export interface CMRCompositionU9ErgebnisseSection {
    title: "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:";
    code: CMRCompositionU9ErgebnisseSectionCode;
    id?: string;
    entry?: Array<CMRCompositionU9ErgebnisseSectionEntryReference>;
}

export const CMRCompositionU9ErgebnisseSection: t.Type<CMRCompositionU9ErgebnisseSection> =
    t.recursion("CMRCompositionU9ErgebnisseSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Prüfung, Aufklärung und ggf. Veranlassung der Durchführung von:"
                    ),
                    code: CMRCompositionU9ErgebnisseSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU9ErgebnisseSectionEntryReference)
                })
            ])
        )
    );

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCode {
    coding: Array<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCodeCoding>;
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCode: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCode> =
    t.recursion("CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCodeCoding
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
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungText: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungText> =
    t.recursion("CMRCompositionU9OrientierendeBeurteilungDerEntwicklungText", () =>
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
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEntryReference: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEntryReference> =
    t.recursion(
        "CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Development_Assessment|1.0.1"
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
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReason {
    coding: Array<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReason: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReason> =
    t.recursion("CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReasonCoding
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
export interface CMRCompositionU9PerzentilkurvenCode {
    coding: Array<CMRCompositionU9PerzentilkurvenCodeCoding>;
    id?: string;
}

export const CMRCompositionU9PerzentilkurvenCode: t.Type<CMRCompositionU9PerzentilkurvenCode> =
    t.recursion("CMRCompositionU9PerzentilkurvenCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9PerzentilkurvenCodeCoding)
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
export interface CMRCompositionU9PerzentilkurvenText {
    status: "generated";
    div: string;
    id?: string;
}

export const CMRCompositionU9PerzentilkurvenText: t.Type<CMRCompositionU9PerzentilkurvenText> =
    t.recursion("CMRCompositionU9PerzentilkurvenText", () =>
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
export interface CMRCompositionU9PerzentilkurvenEntryReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9PerzentilkurvenEntryReference: t.Type<CMRCompositionU9PerzentilkurvenEntryReference> =
    t.recursion("CMRCompositionU9PerzentilkurvenEntryReference", () =>
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
export interface CMRCompositionU9PerzentilkurvenEmptyReason {
    coding: Array<CMRCompositionU9PerzentilkurvenEmptyReasonCoding>;
    id?: string;
}

export const CMRCompositionU9PerzentilkurvenEmptyReason: t.Type<CMRCompositionU9PerzentilkurvenEmptyReason> =
    t.recursion("CMRCompositionU9PerzentilkurvenEmptyReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionU9PerzentilkurvenEmptyReasonCoding
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
export interface CMRCompositionU9U9Einleitung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: "U9 Elterninformation zur Untersuchung vom 60. bis zum 64. Lebensmonat Ihr Kind ist jetzt etwa fünf Jahre alt. Viele Kinder haben in diesem Alter einen großen Bewegungsdrang, klettern gern und stellen viele Fragen. In der Regel entwickeln die Kinder in Rollenspielen mit anderen viel Fantasie und haben Freude am Malen mit Buntstiften oder am Schneiden mit einer Schere. Sollte Ihr Kind noch nicht alle Laute fehlerfrei aussprechen, bitten Sie Ihre Ärztin oder Ihren Arzt, darauf besonders zu achten und Sie dazu zu beraten. Die Ärztin oder der Arzt achtet bei der U9 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden wieder Sehtests durchgeführt. Die Ärztin oder der Arzt testet, wie beweglich und wie geschickt Ihr Kind ist und wie gut es spricht. Außerdem möchte die Ärztin oder der Arzt wissen, woran Ihr Kind Interesse und Freude hat oder wovor es sich möglicherweise ängstigt. Ihr Kind kommt bald in die Schule. Damit die Ärztin oder der Arzt Sie gegebenenfalls rechtzeitig unterstützen kann, sind diese Informationen wichtig. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Zudem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Bewegung Ihres Kindes, Maßnahmen zur Unfallverhütung, die Förderung der Sprachentwicklung und den verantwortungsbewussten Gebrauch von Medien (z. B. TV, Spielekonsolen, Internet und Ähnlichem) im Alltag Ihres Kindes. Sie werden nochmals auf eine Kariesprophylaxe mittels Fluorid aufmerksam gemacht. Ihre Ärztin oder Ihr Arzt verweist Sie zur zahnärztlichen Früherkennungsuntersuchung.";
    id?: string;
}

export const CMRCompositionU9U9Einleitung: t.Type<CMRCompositionU9U9Einleitung> =
    t.recursion("CMRCompositionU9U9Einleitung", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                    ),
                    valueString: Literal(
                        "U9 Elterninformation zur Untersuchung vom 60. bis zum 64. Lebensmonat Ihr Kind ist jetzt etwa fünf Jahre alt. Viele Kinder haben in diesem Alter einen großen Bewegungsdrang, klettern gern und stellen viele Fragen. In der Regel entwickeln die Kinder in Rollenspielen mit anderen viel Fantasie und haben Freude am Malen mit Buntstiften oder am Schneiden mit einer Schere. Sollte Ihr Kind noch nicht alle Laute fehlerfrei aussprechen, bitten Sie Ihre Ärztin oder Ihren Arzt, darauf besonders zu achten und Sie dazu zu beraten. Die Ärztin oder der Arzt achtet bei der U9 wieder besonders auf Entwicklungsauffälligkeiten. Ihr Kind wird körperlich untersucht. Zum Erkennen von Sehstörungen werden wieder Sehtests durchgeführt. Die Ärztin oder der Arzt testet, wie beweglich und wie geschickt Ihr Kind ist und wie gut es spricht. Außerdem möchte die Ärztin oder der Arzt wissen, woran Ihr Kind Interesse und Freude hat oder wovor es sich möglicherweise ängstigt. Ihr Kind kommt bald in die Schule. Damit die Ärztin oder der Arzt Sie gegebenenfalls rechtzeitig unterstützen kann, sind diese Informationen wichtig. Außerdem interessiert sich Ihre Ärztin oder Ihr Arzt für den Kontakt zwischen Ihnen und Ihrem Kind. Ihre Ärztin oder Ihr Arzt berät Sie zu den laut Impfkalender empfohlenen Schutzimpfungen. Zudem spricht die Ärztin oder der Arzt mit Ihnen über Themen wie die Ernährung und Bewegung Ihres Kindes, Maßnahmen zur Unfallverhütung, die Förderung der Sprachentwicklung und den verantwortungsbewussten Gebrauch von Medien (z. B. TV, Spielekonsolen, Internet und Ähnlichem) im Alltag Ihres Kindes. Sie werden nochmals auf eine Kariesprophylaxe mittels Fluorid aufmerksam gemacht. Ihre Ärztin oder Ihr Arzt verweist Sie zur zahnärztlichen Früherkennungsuntersuchung."
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
export interface CMRCompositionU9TypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004:370131001=410602000";
    display: "Child examination (procedure) : Recipient category (attribute) = Preschool child (person)";
    id?: string;
}

export const CMRCompositionU9TypeCoding: t.Type<CMRCompositionU9TypeCoding> = t.recursion(
    "CMRCompositionU9TypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("243788004:370131001=410602000"),
                    display: Literal(
                        "Child examination (procedure) : Recipient category (attribute) = Preschool child (person)"
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
export interface CMRCompositionU9CategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionU9CategoryCoding: t.Type<CMRCompositionU9CategoryCoding> =
    t.recursion("CMRCompositionU9CategoryCoding", () =>
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
export interface CMRCompositionU9AktuelleAnamneseDesKindes {
    title: "Aktuelle Anamnese des Kindes";
    code: CMRCompositionU9AktuelleAnamneseDesKindesCode;
    text: CMRCompositionU9AktuelleAnamneseDesKindesText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung
    )[];
    entry?: CMRCompositionU9AktuelleAnamneseDesKindesEntryReference[];
    emptyReason?: CMRCompositionU9AktuelleAnamneseDesKindesEmptyReason;
}

export const CMRCompositionU9AktuelleAnamneseDesKindes: t.Type<CMRCompositionU9AktuelleAnamneseDesKindes> =
    t.recursion("CMRCompositionU9AktuelleAnamneseDesKindes", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Aktuelle Anamnese des Kindes"),
                    code: CMRCompositionU9AktuelleAnamneseDesKindesCode,
                    text: CMRCompositionU9AktuelleAnamneseDesKindesText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU9AktuelleAnamneseDesKindesAnamneseAnweisung,
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
                        CMRCompositionU9AktuelleAnamneseDesKindesEntryReference
                    ),
                    emptyReason: CMRCompositionU9AktuelleAnamneseDesKindesEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU9Sozialanamnese {
    title: "Sozialanamnese";
    code: CMRCompositionU9SozialanamneseCode;
    text: CMRCompositionU9SozialanamneseText;
    id?: string;
    extension?: (Extension | CMRCompositionU9SozialanamneseAnamneseAnweisung)[];
    entry?: CMRCompositionU9SozialanamneseEntryReference[];
    emptyReason?: CMRCompositionU9SozialanamneseEmptyReason;
}

export const CMRCompositionU9Sozialanamnese: t.Type<CMRCompositionU9Sozialanamnese> =
    t.recursion("CMRCompositionU9Sozialanamnese", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Sozialanamnese"),
                    code: CMRCompositionU9SozialanamneseCode,
                    text: CMRCompositionU9SozialanamneseText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU9SozialanamneseAnamneseAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU9SozialanamneseAnamneseAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU9SozialanamneseAnamneseAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU9SozialanamneseEntryReference),
                    emptyReason: CMRCompositionU9SozialanamneseEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU9Untersuchung {
    title: "Körperliche Untersuchung";
    code: CMRCompositionU9UntersuchungCode;
    text: CMRCompositionU9UntersuchungText;
    id?: string;
    extension?: (Extension | CMRCompositionU9UntersuchungUntersuchungAnweisung)[];
    entry?: CMRCompositionU9UntersuchungEntryReference[];
    emptyReason?: CMRCompositionU9UntersuchungEmptyReason;
}

export const CMRCompositionU9Untersuchung: t.Type<CMRCompositionU9Untersuchung> =
    t.recursion("CMRCompositionU9Untersuchung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körperliche Untersuchung"),
                    code: CMRCompositionU9UntersuchungCode,
                    text: CMRCompositionU9UntersuchungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU9UntersuchungUntersuchungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU9UntersuchungUntersuchungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU9UntersuchungUntersuchungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU9UntersuchungEntryReference),
                    emptyReason: CMRCompositionU9UntersuchungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU9Beratung {
    title: "Beratung";
    code: CMRCompositionU9BeratungCode;
    text: CMRCompositionU9BeratungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU9BeratungBeratungAnweisung
        | CMRCompositionU9BeratungBeratungHinweis
    )[];
    entry?: CMRCompositionU9BeratungEntryReference[];
    emptyReason?: CMRCompositionU9BeratungEmptyReason;
}

export const CMRCompositionU9Beratung: t.Type<CMRCompositionU9Beratung> = t.recursion(
    "CMRCompositionU9Beratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung"),
                    code: CMRCompositionU9BeratungCode,
                    text: CMRCompositionU9BeratungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU9BeratungBeratungAnweisung>,
                                t.Type<CMRCompositionU9BeratungBeratungHinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU9BeratungBeratungAnweisung,
                            CMRCompositionU9BeratungBeratungHinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU9BeratungBeratungAnweisung,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                                }
                            },
                            {
                                codec: CMRCompositionU9BeratungBeratungHinweis,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    entry: t.array(CMRCompositionU9BeratungEntryReference),
                    emptyReason: CMRCompositionU9BeratungEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU9Ergebnisse {
    title: "Ergebnisse";
    code: CMRCompositionU9ErgebnisseCode;
    text: CMRCompositionU9ErgebnisseText;
    section: Array<CMRCompositionU9ErgebnisseSection>;
    id?: string;
    entry?: CMRCompositionU9ErgebnisseEntryReference[];
    emptyReason?: CMRCompositionU9ErgebnisseEmptyReason;
}

export const CMRCompositionU9Ergebnisse: t.Type<CMRCompositionU9Ergebnisse> = t.recursion(
    "CMRCompositionU9Ergebnisse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ergebnisse"),
                    code: CMRCompositionU9ErgebnisseCode,
                    text: CMRCompositionU9ErgebnisseText,
                    section: MinMaxArray(1, 1, CMRCompositionU9ErgebnisseSection)
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(CMRCompositionU9ErgebnisseEntryReference),
                    emptyReason: CMRCompositionU9ErgebnisseEmptyReason
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU9OrientierendeBeurteilungDerEntwicklung {
    title: "Orientierende Beurteilung der Entwicklung";
    code: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCode;
    text: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungText;
    id?: string;
    extension?: (
        | Extension
        | CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
    )[];
    entry?: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEntryReference[];
    emptyReason?: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReason;
}

export const CMRCompositionU9OrientierendeBeurteilungDerEntwicklung: t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklung> =
    t.recursion("CMRCompositionU9OrientierendeBeurteilungDerEntwicklung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Orientierende Beurteilung der Entwicklung"),
                    code: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungCode,
                    text: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungText
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCompositionU9OrientierendeBeurteilungDerEntwicklungBeurteilungAnweisung,
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
                        CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEntryReference
                    ),
                    emptyReason:
                        CMRCompositionU9OrientierendeBeurteilungDerEntwicklungEmptyReason
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface CMRCompositionU9Perzentilkurven {
    title: "Perzentilkurven";
    code: CMRCompositionU9PerzentilkurvenCode;
    text: CMRCompositionU9PerzentilkurvenText;
    id?: string;
    entry?: Array<CMRCompositionU9PerzentilkurvenEntryReference>;
    emptyReason?: CMRCompositionU9PerzentilkurvenEmptyReason;
}

export const CMRCompositionU9Perzentilkurven: t.Type<CMRCompositionU9Perzentilkurven> =
    t.recursion("CMRCompositionU9Perzentilkurven", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Perzentilkurven"),
                    code: CMRCompositionU9PerzentilkurvenCode,
                    text: CMRCompositionU9PerzentilkurvenText
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(1, CMRCompositionU9PerzentilkurvenEntryReference),
                    emptyReason: CMRCompositionU9PerzentilkurvenEmptyReason
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRCompositionU9Meta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U9|1.0.1">;
    id?: string;
}

export const CMRCompositionU9Meta: t.Type<CMRCompositionU9Meta> = t.recursion(
    "CMRCompositionU9Meta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_U9|1.0.1"
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
export interface CMRCompositionU9Type {
    coding: Array<CMRCompositionU9TypeCoding>;
    id?: string;
}

export const CMRCompositionU9Type: t.Type<CMRCompositionU9Type> = t.recursion(
    "CMRCompositionU9Type",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9TypeCoding)
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
export interface CMRCompositionU9Category {
    coding: Array<CMRCompositionU9CategoryCoding>;
    id?: string;
}

export const CMRCompositionU9Category: t.Type<CMRCompositionU9Category> = t.recursion(
    "CMRCompositionU9Category",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionU9CategoryCoding)
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
export interface CMRCompositionU9SubjectReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9SubjectReference: t.Type<CMRCompositionU9SubjectReference> =
    t.recursion("CMRCompositionU9SubjectReference", () =>
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
export interface CMRCompositionU9EncounterReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9EncounterReference: t.Type<CMRCompositionU9EncounterReference> =
    t.recursion("CMRCompositionU9EncounterReference", () =>
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
export interface CMRCompositionU9AuthorReference {
    reference: string;
    id?: string;
}

export const CMRCompositionU9AuthorReference: t.Type<CMRCompositionU9AuthorReference> =
    t.recursion("CMRCompositionU9AuthorReference", () =>
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

interface CMRCompositionU9 {
    resourceType: "Composition";
    meta: CMRCompositionU9Meta;
    status: "final";
    type: CMRCompositionU9Type;
    category: Array<CMRCompositionU9Category>;
    subject: CMRCompositionU9SubjectReference;
    encounter: CMRCompositionU9EncounterReference;
    date: string;
    author: Array<CMRCompositionU9AuthorReference>;
    title: "U9";
    id?: string;
    text?: Narrative;
    extension?: (Extension | CMRCompositionU9U9Einleitung)[];
    section?: (
        | CMRCompositionU9AktuelleAnamneseDesKindes
        | CMRCompositionU9Sozialanamnese
        | CMRCompositionU9Untersuchung
        | CMRCompositionU9Beratung
        | CMRCompositionU9Ergebnisse
        | CMRCompositionU9OrientierendeBeurteilungDerEntwicklung
        | CMRCompositionU9Perzentilkurven
    )[];
}

const CMRCompositionU9: t.Type<CMRCompositionU9> = t.recursion("CMRCompositionU9", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: CMRCompositionU9Meta,
                status: Literal("final"),
                type: CMRCompositionU9Type,
                category: MinMaxArray(1, 1, CMRCompositionU9Category),
                subject: CMRCompositionU9SubjectReference,
                encounter: CMRCompositionU9EncounterReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, CMRCompositionU9AuthorReference),
                title: Literal("U9")
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<CMRCompositionU9U9Einleitung>]>,
                    t.Any
                >(
                    t.union([Extension, CMRCompositionU9U9Einleitung]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCompositionU9U9Einleitung,
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
                            t.Type<CMRCompositionU9AktuelleAnamneseDesKindes>,
                            t.Type<CMRCompositionU9Sozialanamnese>,
                            t.Type<CMRCompositionU9Untersuchung>,
                            t.Type<CMRCompositionU9Beratung>,
                            t.Type<CMRCompositionU9Ergebnisse>,
                            t.Type<CMRCompositionU9OrientierendeBeurteilungDerEntwicklung>,
                            t.Type<CMRCompositionU9Perzentilkurven>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMRCompositionU9AktuelleAnamneseDesKindes,
                        CMRCompositionU9Sozialanamnese,
                        CMRCompositionU9Untersuchung,
                        CMRCompositionU9Beratung,
                        CMRCompositionU9Ergebnisse,
                        CMRCompositionU9OrientierendeBeurteilungDerEntwicklung,
                        CMRCompositionU9Perzentilkurven
                    ]),
                    [
                        {
                            codec: CMRCompositionU9AktuelleAnamneseDesKindes,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Aktuelle Anamnese des Kindes"
                            }
                        },
                        {
                            codec: CMRCompositionU9Sozialanamnese,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Sozialanamnese" }
                        },
                        {
                            codec: CMRCompositionU9Untersuchung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Körperliche Untersuchung" }
                        },
                        {
                            codec: CMRCompositionU9Beratung,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Beratung" }
                        },
                        {
                            codec: CMRCompositionU9Ergebnisse,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "title", value: "Ergebnisse" }
                        },
                        {
                            codec: CMRCompositionU9OrientierendeBeurteilungDerEntwicklung,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Orientierende Beurteilung der Entwicklung"
                            }
                        },
                        {
                            codec: CMRCompositionU9Perzentilkurven,
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

export default CMRCompositionU9;
