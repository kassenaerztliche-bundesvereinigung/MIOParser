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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import TerminologyGerman from "../../../../../Definitions/KBVBase/1.1.0/Extension/TerminologyGerman";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Composition"

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Apgar-Score";
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Apgar-Score")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Angaben zum Kind";
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Angaben zum Kind")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Angaben zum Kind";
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Angaben zum Kind")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Laboruntersuchung";
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Laboruntersuchung")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Laboruntersuchung, Ergebnis maskiert";
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Laboruntersuchung, Ergebnis maskiert")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Weitere Ultraschall-Untersuchungen";
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Weitere Ultraschall-Untersuchungen")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Geburt";
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Geburt")
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
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Content in other Language.
 */
export interface MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gestationsdiabetes";
    id?: string;
}

export const MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Gestationsdiabetes")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Gestationsdiabetes";
    id?: string;
}

export const MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Gestationsdiabetes")
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplay: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplay> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplay: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplay> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplay: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplay> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * Content in other Language.
 */
export interface MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Nächster Untersuchungstermin";
    id?: string;
}

export const MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Nächster Untersuchungstermin")
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
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "249228009";
    id?: string;
    _display?: MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCoding: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCoding> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("249228009")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "118188004";
    id?: string;
    _display?: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCoding: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCoding> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("118188004")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "118188004";
    id?: string;
    _display?: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCoding: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCoding> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("118188004")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplay: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplay> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplay: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplay> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplay: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplay> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplay: t.Type<MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplay> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSectionCode {
    coding: Array<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSectionCode: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionCode> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtSectionSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRCompositionUntersuchungenEpikriseGeburtSectionSectionCodeCoding
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
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSectionEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSectionEntryReference: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSectionEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseGeburtSectionSectionEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutterEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutterEntryReference: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutterEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutterEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCode {
    coding: Array<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCode: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCode> =
    t.recursion("MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCodeCoding
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
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindEntryReference: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutterEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutterEntryReference: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutterEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutterEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Protein|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCode {
    coding: Array<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCode: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCode> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCodeCoding
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
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindEntryReference: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3|1.0.0"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Mutterpasseintrag";
    id?: string;
}

export const MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion("MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Mutterpasseintrag")
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
export interface MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "404684003:363714003=108252007";
    id?: string;
    _display?: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCoding: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCoding> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("404684003:363714003=108252007")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "129125009:363589002=(108252007:363702006=442228008)";
    id?: string;
    _display?: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCoding: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCoding> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal(
                            "129125009:363589002=(108252007:363702006=442228008)"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "169220006";
    id?: string;
    _display?: MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCoding: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCoding> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("169220006")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "118215003";
    id?: string;
    _display?: MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplay;
    display?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtCodeCoding: t.Type<MRCompositionUntersuchungenEpikriseGeburtCodeCoding> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("118215003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRCompositionUntersuchungenEpikriseGeburtCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface MRCompositionUntersuchungenEpikriseGeburtSectionEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionEntryReference: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionEntryReference> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtSectionEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Child_Information|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Live_Birth|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenEpikriseGeburtSectionSection {
    title: "Apgar-Score";
    code: MRCompositionUntersuchungenEpikriseGeburtSectionSectionCode;
    id?: string;
    entry?: MRCompositionUntersuchungenEpikriseGeburtSectionSectionEntryReference[];
}

export const MRCompositionUntersuchungenEpikriseGeburtSectionSection: t.Type<MRCompositionUntersuchungenEpikriseGeburtSectionSection> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtSectionSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Apgar-Score"),
                    code: MRCompositionUntersuchungenEpikriseGeburtSectionSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(
                        MRCompositionUntersuchungenEpikriseGeburtSectionSectionEntryReference
                    )
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter {
    title: "Angaben zur Mutter";
    id?: string;
    entry?: MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutterEntryReference[];
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter> =
    t.recursion("MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Angaben zur Mutter")
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(
                        MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutterEntryReference
                    )
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind {
    title: "Angaben zum Kind";
    code: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCode;
    id?: string;
    entry?: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindEntryReference[];
}

export const MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind: t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind> =
    t.recursion("MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Angaben zum Kind"),
                    code: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(
                        MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKindEntryReference
                    )
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter {
    title: "Angaben zur Mutter";
    id?: string;
    entry?: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutterEntryReference[];
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        title: Literal("Angaben zur Mutter")
                    }),
                    t.partial({
                        id: SCALARString,
                        entry: t.array(
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutterEntryReference
                        )
                    })
                ])
            )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind {
    title: "Angaben zum Kind";
    code: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCode;
    id?: string;
    entry?: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindEntryReference[];
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        title: Literal("Angaben zum Kind"),
                        code: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindCode
                    }),
                    t.partial({
                        id: SCALARString,
                        entry: t.array(
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKindEntryReference
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionBesondereBefundeSectionCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionBesondereBefundeSectionCodeSnomedCTDisplay: t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCTDisplay> =
    t.recursion("MRCompositionBesondereBefundeSectionCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRCompositionBesondereBefundeSectionCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionBesondereBefundeSectionCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRCompositionBesondereBefundeSectionCodeLoincDisplay: t.Type<MRCompositionBesondereBefundeSectionCodeLoincDisplay> =
    t.recursion("MRCompositionBesondereBefundeSectionCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRCompositionBesondereBefundeSectionCodeLoincDisplayAnzeigenameCodeLoinc,
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
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCode {
    coding: Array<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCode: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCode> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCodeCoding
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungEntryReference: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCode {
    coding: Array<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCode: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCode> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCodeCoding
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertEntryReference: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenUltraschallUltraschallIEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallUltraschallIEntryReference: t.Type<MRCompositionUntersuchungenUltraschallUltraschallIEntryReference> =
    t.recursion("MRCompositionUntersuchungenUltraschallUltraschallIEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_I|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_General_Information|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenUltraschallUltraschallIIEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallUltraschallIIEntryReference: t.Type<MRCompositionUntersuchungenUltraschallUltraschallIIEntryReference> =
    t.recursion("MRCompositionUntersuchungenUltraschallUltraschallIIEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_II|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenUltraschallUltraschallIIIEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallUltraschallIIIEntryReference: t.Type<MRCompositionUntersuchungenUltraschallUltraschallIIIEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallUltraschallIIIEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_III|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCode {
    coding: Array<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCode: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCode> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCodeCoding
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
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenEntryReference: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Ultrasound_Studies|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenEpikriseSchwangerschaftEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseSchwangerschaftEntryReference: t.Type<MRCompositionUntersuchungenEpikriseSchwangerschaftEntryReference> =
    t.recursion("MRCompositionUntersuchungenEpikriseSchwangerschaftEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Examination_Discharge_Summary|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenEpikriseGeburtCode {
    coding: Array<MRCompositionUntersuchungenEpikriseGeburtCodeCoding>;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtCode: t.Type<MRCompositionUntersuchungenEpikriseGeburtCode> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRCompositionUntersuchungenEpikriseGeburtCodeCoding
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
export interface MRCompositionUntersuchungenEpikriseGeburtEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseGeburtEntryReference: t.Type<MRCompositionUntersuchungenEpikriseGeburtEntryReference> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Delivery_Information|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenEpikriseGeburtSection {
    title: "Angaben zum Kind";
    id?: string;
    entry?: MRCompositionUntersuchungenEpikriseGeburtSectionEntryReference[];
    section?: Array<MRCompositionUntersuchungenEpikriseGeburtSectionSection>;
}

export const MRCompositionUntersuchungenEpikriseGeburtSection: t.Type<MRCompositionUntersuchungenEpikriseGeburtSection> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburtSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Angaben zum Kind")
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(
                        MRCompositionUntersuchungenEpikriseGeburtSectionEntryReference
                    ),
                    section: MaxArray(
                        1,
                        MRCompositionUntersuchungenEpikriseGeburtSectionSection
                    )
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbettEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseWochenbettEntryReference: t.Type<MRCompositionUntersuchungenEpikriseWochenbettEntryReference> =
    t.recursion("MRCompositionUntersuchungenEpikriseWochenbettEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungEntryReference: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Second_Examination_After_Childbirth|1.0.0"
                        ])
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
export interface MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface MRCompositionTermineSectionCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRCompositionTermineSectionCodeCodingDisplay: t.Type<MRCompositionTermineSectionCodeCodingDisplay> =
    t.recursion("MRCompositionTermineSectionCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRCompositionTermineSectionCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRCompositionBesondereBefundeSectionCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "113076002";
    id?: string;
    _display?: MRCompositionBesondereBefundeSectionCodeSnomedCTDisplay;
    display?: string;
}

export const MRCompositionBesondereBefundeSectionCodeSnomedCT: t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCT> =
    t.recursion("MRCompositionBesondereBefundeSectionCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("113076002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRCompositionBesondereBefundeSectionCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionBesondereBefundeSectionCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "21004-7";
    id?: string;
    _display?: MRCompositionBesondereBefundeSectionCodeLoincDisplay;
    display?: string;
}

export const MRCompositionBesondereBefundeSectionCodeLoinc: t.Type<MRCompositionBesondereBefundeSectionCodeLoinc> =
    t.recursion("MRCompositionBesondereBefundeSectionCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("21004-7")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRCompositionBesondereBefundeSectionCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung {
    title: "Laboruntersuchung";
    code: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCode;
    entry: Array<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        title: Literal("Laboruntersuchung"),
                        code: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungCode,
                        entry: MinArray(
                            1,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungEntryReference
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert {
    title: "Laboruntersuchung, Ergebnis maskiert";
    code: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCode;
    entry: Array<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        title: Literal("Laboruntersuchung, Ergebnis maskiert"),
                        code: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertCode,
                        entry: MinArray(
                            1,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiertEntryReference
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
export interface MRCompositionUntersuchungenUltraschallUltraschallI {
    title: "I. Screening";
    entry: Array<MRCompositionUntersuchungenUltraschallUltraschallIEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallUltraschallI: t.Type<MRCompositionUntersuchungenUltraschallUltraschallI> =
    t.recursion("MRCompositionUntersuchungenUltraschallUltraschallI", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("I. Screening"),
                    entry: MinArray(
                        1,
                        MRCompositionUntersuchungenUltraschallUltraschallIEntryReference
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
export interface MRCompositionUntersuchungenUltraschallUltraschallII {
    title: "II. Screening";
    entry: Array<MRCompositionUntersuchungenUltraschallUltraschallIIEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallUltraschallII: t.Type<MRCompositionUntersuchungenUltraschallUltraschallII> =
    t.recursion("MRCompositionUntersuchungenUltraschallUltraschallII", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("II. Screening"),
                    entry: MinArray(
                        1,
                        MRCompositionUntersuchungenUltraschallUltraschallIIEntryReference
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
export interface MRCompositionUntersuchungenUltraschallUltraschallIII {
    title: "III. Screening";
    entry: Array<MRCompositionUntersuchungenUltraschallUltraschallIIIEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallUltraschallIII: t.Type<MRCompositionUntersuchungenUltraschallUltraschallIII> =
    t.recursion("MRCompositionUntersuchungenUltraschallUltraschallIII", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("III. Screening"),
                    entry: MinArray(
                        1,
                        MRCompositionUntersuchungenUltraschallUltraschallIIIEntryReference
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
export interface MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen {
    title: "Weitere Ultraschall-Untersuchungen";
    code: MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCode;
    entry: Array<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen: t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen> =
    t.recursion(
        "MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        title: Literal("Weitere Ultraschall-Untersuchungen"),
                        code: MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenCode,
                        entry: MinMaxArray(
                            1,
                            1,
                            MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungenEntryReference
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
export interface MRCompositionUntersuchungenEpikriseSchwangerschaft {
    title: "Schwangerschaft";
    entry: Array<MRCompositionUntersuchungenEpikriseSchwangerschaftEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenEpikriseSchwangerschaft: t.Type<MRCompositionUntersuchungenEpikriseSchwangerschaft> =
    t.recursion("MRCompositionUntersuchungenEpikriseSchwangerschaft", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Schwangerschaft"),
                    entry: MinArray(
                        1,
                        MRCompositionUntersuchungenEpikriseSchwangerschaftEntryReference
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
export interface MRCompositionUntersuchungenEpikriseGeburt {
    title: "Geburt";
    code: MRCompositionUntersuchungenEpikriseGeburtCode;
    id?: string;
    entry?: Array<MRCompositionUntersuchungenEpikriseGeburtEntryReference>;
    section?: Array<MRCompositionUntersuchungenEpikriseGeburtSection>;
}

export const MRCompositionUntersuchungenEpikriseGeburt: t.Type<MRCompositionUntersuchungenEpikriseGeburt> =
    t.recursion("MRCompositionUntersuchungenEpikriseGeburt", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Geburt"),
                    code: MRCompositionUntersuchungenEpikriseGeburtCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        2,
                        MRCompositionUntersuchungenEpikriseGeburtEntryReference
                    ),
                    section: MaxArray(1, MRCompositionUntersuchungenEpikriseGeburtSection)
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenEpikriseWochenbett {
    title: "Erste Untersuchung nach Entbindung (Wochenbett)";
    id?: string;
    entry?: Array<MRCompositionUntersuchungenEpikriseWochenbettEntryReference>;
    section?: Array<
        | MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter
        | MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind
    >;
}

export const MRCompositionUntersuchungenEpikriseWochenbett: t.Type<MRCompositionUntersuchungenEpikriseWochenbett> =
    t.recursion("MRCompositionUntersuchungenEpikriseWochenbett", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Erste Untersuchung nach Entbindung (Wochenbett)")
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        1,
                        MRCompositionUntersuchungenEpikriseWochenbettEntryReference
                    ),
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter>,
                                t.Type<MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter,
                            MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind
                        ]),
                        [
                            {
                                codec: MRCompositionUntersuchungenEpikriseWochenbettAngabenZurMutter,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Angaben zur Mutter" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseWochenbettAngabenZumKind,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Angaben zum Kind" }
                            }
                        ],
                        ["0", "2"]
                    )
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung {
    title: "Zweite Untersuchung nach Entbindung";
    id?: string;
    entry?: Array<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungEntryReference>;
    section?: Array<
        | MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter
        | MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind
    >;
}

export const MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung: t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung> =
    t.recursion(
        "MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        title: Literal("Zweite Untersuchung nach Entbindung")
                    }),
                    t.partial({
                        id: SCALARString,
                        entry: MaxArray(
                            1,
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungEntryReference
                        ),
                        section: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter>,
                                    t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter,
                                MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind
                            ]),
                            [
                                {
                                    codec: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZurMutter,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "title",
                                        value: "Angaben zur Mutter"
                                    }
                                },
                                {
                                    codec: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindungAngabenZumKind,
                                    occurrence: ["0", "1"],
                                    sliceBy: { path: "title", value: "Angaben zum Kind" }
                                }
                            ],
                            ["0", "2"]
                        )
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionTermineSectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "390840006";
    id?: string;
    _display?: MRCompositionTermineSectionCodeCodingDisplay;
    display?: string;
}

export const MRCompositionTermineSectionCodeCoding: t.Type<MRCompositionTermineSectionCodeCoding> =
    t.recursion("MRCompositionTermineSectionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("390840006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRCompositionTermineSectionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzEntryReference: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzEntryReference> =
    t.recursion(
        "MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzEntryReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Blood_Group_Systems|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Immunization_Status|1.0.0"
                        ])
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
export interface MRCompositionUntersuchungenGravidogrammEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenGravidogrammEntryReference: t.Type<MRCompositionUntersuchungenGravidogrammEntryReference> =
    t.recursion("MRCompositionUntersuchungenGravidogrammEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Chart_Entry|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Mother|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Fundus_Height|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Varicosis|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Edema|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Protein|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Nitrite|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Blood|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Vaginal_Examination|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Sounds_Child|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Movement|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenUltraschallEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenUltraschallEntryReference: t.Type<MRCompositionUntersuchungenUltraschallEntryReference> =
    t.recursion("MRCompositionUntersuchungenUltraschallEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Ultrasound|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenCardiotokographieEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionUntersuchungenCardiotokographieEntryReference: t.Type<MRCompositionUntersuchungenCardiotokographieEntryReference> =
    t.recursion("MRCompositionUntersuchungenCardiotokographieEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Cardiotocography|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRCompositionHinweiseHinweiseSchwangere {
    url: "hinweiseSchwangere";
    id?: string;
    valueString?: "Schwangerschaft und Geburt sind natürliche Vorgänge und stellen keine Krankheit dar. Manchmal können sie allerdings mit einem erhöhten Risiko für Mutter und Kind belastet sein. Eine sorgfältige Schwangerschaftsbetreuung hilft, einen großen Teil dieser Risiken zu vermeiden oder rechtzeitig zu erkennen, um Gefahren abzuwenden. Voraussetzung dafür ist jedoch Ihre regelmäßige Teilnahme an den Vorsorgeuntersuchungen!Die in Ihrem Mutterpass aufgeführten Untersuchungen dienen der Gesunderhaltung von Mutter und Kind und entsprechen langjähriger geburtshilflicher Erfahrung und modernen medizinischen Erkenntnissen. Dieser Mutterpass enthält die während der Schwangerschaft erhobenen wichtigen Befunde. Er wird Ihnen nach jeder Vorsorgeuntersuchung wieder mitgegeben. Die Angaben im Mutterpass dienen der Information von Arzt und Hebamme sowie Ihrer und Ihres Kindes Sicherheit. Der Mutterpass ist Ihr persönliches Dokument. Sie allein entscheiden darüber, wem er zugänglich gemacht werden soll. Andere (z. B. Arbeitgeber, Behörden) dürfen eine Einsichtnahme nicht verlangen.Bitte: ● Nutzen Sie die Ihnen gebotenen Möglichkeiten, um sich und Ihrem Kind Sicherheit zu verschaffen! ● Vergessen Sie nicht, dieses Heft zu jeder ärztlichen Untersuchung während der Schwangerschaft, zur Entbindung und zur Untersuchung des Kindes mitzubringen! ● Lassen Sie sich helfen, wenn Sie Sorgen haben! ● Beraten Sie sich mit Ihrem Arzt und befolgen Sie seine Ratschläge!";
}

export const MRCompositionHinweiseHinweiseSchwangere: t.Type<MRCompositionHinweiseHinweiseSchwangere> =
    t.recursion("MRCompositionHinweiseHinweiseSchwangere", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("hinweiseSchwangere")
                }),
                t.partial({
                    id: SCALARString,
                    valueString: Literal(
                        "Schwangerschaft und Geburt sind natürliche Vorgänge und stellen keine Krankheit dar. Manchmal können sie allerdings mit einem erhöhten Risiko für Mutter und Kind belastet sein. Eine sorgfältige Schwangerschaftsbetreuung hilft, einen großen Teil dieser Risiken zu vermeiden oder rechtzeitig zu erkennen, um Gefahren abzuwenden. Voraussetzung dafür ist jedoch Ihre regelmäßige Teilnahme an den Vorsorgeuntersuchungen!Die in Ihrem Mutterpass aufgeführten Untersuchungen dienen der Gesunderhaltung von Mutter und Kind und entsprechen langjähriger geburtshilflicher Erfahrung und modernen medizinischen Erkenntnissen. Dieser Mutterpass enthält die während der Schwangerschaft erhobenen wichtigen Befunde. Er wird Ihnen nach jeder Vorsorgeuntersuchung wieder mitgegeben. Die Angaben im Mutterpass dienen der Information von Arzt und Hebamme sowie Ihrer und Ihres Kindes Sicherheit. Der Mutterpass ist Ihr persönliches Dokument. Sie allein entscheiden darüber, wem er zugänglich gemacht werden soll. Andere (z. B. Arbeitgeber, Behörden) dürfen eine Einsichtnahme nicht verlangen.Bitte: ● Nutzen Sie die Ihnen gebotenen Möglichkeiten, um sich und Ihrem Kind Sicherheit zu verschaffen! ● Vergessen Sie nicht, dieses Heft zu jeder ärztlichen Untersuchung während der Schwangerschaft, zur Entbindung und zur Untersuchung des Kindes mitzubringen! ● Lassen Sie sich helfen, wenn Sie Sorgen haben! ● Beraten Sie sich mit Ihrem Arzt und befolgen Sie seine Ratschläge!"
                    )
                })
            ])
        )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRCompositionHinweiseHinweiseMutter {
    url: "hinweiseMutter";
    id?: string;
    valueString?: "Nach Schwangerschaft und Geburt beginnt für Sie zwar wieder der Alltag mit neuen Aufgaben, beachten Sie aber bitte Folgendes: ● Gehen Sie etwa 6–8 Wochen nach der Entbindung zur Nachuntersuchung ● Nutzen Sie alle Kinder-Früherkennungsuntersuchungen (U2 – U9) beim Kinder- oder Hausarzt";
}

export const MRCompositionHinweiseHinweiseMutter: t.Type<MRCompositionHinweiseHinweiseMutter> =
    t.recursion("MRCompositionHinweiseHinweiseMutter", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("hinweiseMutter")
                }),
                t.partial({
                    id: SCALARString,
                    valueString: Literal(
                        "Nach Schwangerschaft und Geburt beginnt für Sie zwar wieder der Alltag mit neuen Aufgaben, beachten Sie aber bitte Folgendes: ● Gehen Sie etwa 6–8 Wochen nach der Entbindung zur Nachuntersuchung ● Nutzen Sie alle Kinder-Früherkennungsuntersuchungen (U2 – U9) beim Kinder- oder Hausarzt"
                    )
                })
            ])
        )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRCompositionHinweiseAufbewahrungshinweis {
    url: "aufbewahrungshinweis";
    id?: string;
    valueString?: "Während der Schwangerschaft sollten Sie Ihren Mutterpass immer bei sich haben und zu jeder ärztlichen Untersuchung mitbringen,insbesondere auch zur Entbindung. Ihr Mutterpass gehört zu den Dokumenten, die Sie immer sorgfältig aufbewahren sollten.";
}

export const MRCompositionHinweiseAufbewahrungshinweis: t.Type<MRCompositionHinweiseAufbewahrungshinweis> =
    t.recursion("MRCompositionHinweiseAufbewahrungshinweis", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("aufbewahrungshinweis")
                }),
                t.partial({
                    id: SCALARString,
                    valueString: Literal(
                        "Während der Schwangerschaft sollten Sie Ihren Mutterpass immer bei sich haben und zu jeder ärztlichen Untersuchung mitbringen,insbesondere auch zur Entbindung. Ihr Mutterpass gehört zu den Dokumenten, die Sie immer sorgfältig aufbewahren sollten."
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionTypeSnomedDisplay {
    id?: string;
    extension?: (Extension | MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed)[];
    value?: string;
}

export const MRCompositionTypeSnomedDisplay: t.Type<MRCompositionTypeSnomedDisplay> =
    t.recursion("MRCompositionTypeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRCompositionTypeSnomedDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRCompositionTypeLoincDisplay {
    id?: string;
    extension?: (Extension | TerminologyGerman)[];
    value?: string;
}

export const MRCompositionTypeLoincDisplay: t.Type<MRCompositionTypeLoincDisplay> =
    t.recursion("MRCompositionTypeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<TerminologyGerman>]>,
                    t.Any
                >(
                    t.union([Extension, TerminologyGerman]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: TerminologyGerman,
                            occurrence: ["0", "1"],
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
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface MRCompositionTermineSectionCode {
    coding: Array<MRCompositionTermineSectionCodeCoding>;
    id?: string;
}

export const MRCompositionTermineSectionCode: t.Type<MRCompositionTermineSectionCode> =
    t.recursion("MRCompositionTermineSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRCompositionTermineSectionCodeCoding)
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
export interface MRCompositionTermineSectionEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionTermineSectionEntryReference: t.Type<MRCompositionTermineSectionEntryReference> =
    t.recursion("MRCompositionTermineSectionEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Appointment_Pregnancy|1.0.0"
                    ])
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
export interface MRCompositionBesondereBefundeSectionCode {
    coding: Array<
        | MRCompositionBesondereBefundeSectionCodeSnomedCT
        | MRCompositionBesondereBefundeSectionCodeLoinc
    >;
    id?: string;
}

export const MRCompositionBesondereBefundeSectionCode: t.Type<MRCompositionBesondereBefundeSectionCode> =
    t.recursion("MRCompositionBesondereBefundeSectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionBesondereBefundeSectionCodeSnomedCT>,
                                t.Type<MRCompositionBesondereBefundeSectionCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRCompositionBesondereBefundeSectionCodeSnomedCT,
                            MRCompositionBesondereBefundeSectionCodeLoinc
                        ]),
                        [
                            {
                                codec: MRCompositionBesondereBefundeSectionCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRCompositionBesondereBefundeSectionCodeLoinc,
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
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface MRCompositionBesondereBefundeSectionEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionBesondereBefundeSectionEntryReference: t.Type<MRCompositionBesondereBefundeSectionEntryReference> =
    t.recursion("MRCompositionBesondereBefundeSectionEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Diagnosistest|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Pretest|1.0.0"
                    ])
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
export interface MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz {
    title: "Laboruntersuchungen und Rötelnschutz";
    id?: string;
    entry?: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzEntryReference[];
    section?: (
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert
    )[];
}

export const MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz: t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz> =
    t.recursion("MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Laboruntersuchungen und Rötelnschutz")
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(
                        MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzEntryReference
                    ),
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung>,
                                t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung,
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert
                        ]),
                        [
                            {
                                codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchung,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "title", value: "Laboruntersuchung" }
                            },
                            {
                                codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutzLaboruntersuchungMaskiert,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "title",
                                    value: "Laboruntersuchung, Ergebnis maskiert"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenGravidogramm {
    title: "Gravidogramm";
    entry: Array<MRCompositionUntersuchungenGravidogrammEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenGravidogramm: t.Type<MRCompositionUntersuchungenGravidogramm> =
    t.recursion("MRCompositionUntersuchungenGravidogramm", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Gravidogramm"),
                    entry: MinArray(
                        1,
                        MRCompositionUntersuchungenGravidogrammEntryReference
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
export interface MRCompositionUntersuchungenUltraschall {
    title: "Ultraschall";
    id?: string;
    entry?: Array<MRCompositionUntersuchungenUltraschallEntryReference>;
    section?: (
        | MRCompositionUntersuchungenUltraschallUltraschallI
        | MRCompositionUntersuchungenUltraschallUltraschallII
        | MRCompositionUntersuchungenUltraschallUltraschallIII
        | MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen
    )[];
}

export const MRCompositionUntersuchungenUltraschall: t.Type<MRCompositionUntersuchungenUltraschall> =
    t.recursion("MRCompositionUntersuchungenUltraschall", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Ultraschall")
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(
                        1,
                        MRCompositionUntersuchungenUltraschallEntryReference
                    ),
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionUntersuchungenUltraschallUltraschallI>,
                                t.Type<MRCompositionUntersuchungenUltraschallUltraschallII>,
                                t.Type<MRCompositionUntersuchungenUltraschallUltraschallIII>,
                                t.Type<MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRCompositionUntersuchungenUltraschallUltraschallI,
                            MRCompositionUntersuchungenUltraschallUltraschallII,
                            MRCompositionUntersuchungenUltraschallUltraschallIII,
                            MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen
                        ]),
                        [
                            {
                                codec: MRCompositionUntersuchungenUltraschallUltraschallI,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "I. Screening" }
                            },
                            {
                                codec: MRCompositionUntersuchungenUltraschallUltraschallII,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "II. Screening" }
                            },
                            {
                                codec: MRCompositionUntersuchungenUltraschallUltraschallIII,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "III. Screening" }
                            },
                            {
                                codec: MRCompositionUntersuchungenUltraschallWeitereUltraschallUntersuchungen,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "title",
                                    value: "Weitere Ultraschall-Untersuchungen"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

/**
 * A nested sub-section within this section.
 */
export interface MRCompositionUntersuchungenCardiotokographie {
    title: "Cardiotokographie";
    entry: Array<MRCompositionUntersuchungenCardiotokographieEntryReference>;
    id?: string;
}

export const MRCompositionUntersuchungenCardiotokographie: t.Type<MRCompositionUntersuchungenCardiotokographie> =
    t.recursion("MRCompositionUntersuchungenCardiotokographie", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Cardiotokographie"),
                    entry: MinArray(
                        1,
                        MRCompositionUntersuchungenCardiotokographieEntryReference
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
export interface MRCompositionUntersuchungenEpikrise {
    title: "Abschluss-Untersuchung/Epikrise";
    id?: string;
    section?: (
        | MRCompositionUntersuchungenEpikriseSchwangerschaft
        | MRCompositionUntersuchungenEpikriseGeburt
        | MRCompositionUntersuchungenEpikriseWochenbett
        | MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung
    )[];
}

export const MRCompositionUntersuchungenEpikrise: t.Type<MRCompositionUntersuchungenEpikrise> =
    t.recursion("MRCompositionUntersuchungenEpikrise", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Abschluss-Untersuchung/Epikrise")
                }),
                t.partial({
                    id: SCALARString,
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionUntersuchungenEpikriseSchwangerschaft>,
                                t.Type<MRCompositionUntersuchungenEpikriseGeburt>,
                                t.Type<MRCompositionUntersuchungenEpikriseWochenbett>,
                                t.Type<MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRCompositionUntersuchungenEpikriseSchwangerschaft,
                            MRCompositionUntersuchungenEpikriseGeburt,
                            MRCompositionUntersuchungenEpikriseWochenbett,
                            MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung
                        ]),
                        [
                            {
                                codec: MRCompositionUntersuchungenEpikriseSchwangerschaft,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Schwangerschaft" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseGeburt,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Geburt" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseWochenbett,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Erste Untersuchung nach Entbindung (Wochenbett)"
                                }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikriseZweiteUntersuchungNachEntbindung,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Zweite Untersuchung nach Entbindung"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionTypeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "736377005";
    id?: string;
    _display?: MRCompositionTypeSnomedDisplay;
    display?: string;
}

export const MRCompositionTypeSnomed: t.Type<MRCompositionTypeSnomed> = t.recursion(
    "MRCompositionTypeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("736377005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRCompositionTypeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRCompositionTypeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: string;
    id?: string;
    _display?: MRCompositionTypeLoincDisplay;
    display?: string;
}

export const MRCompositionTypeLoinc: t.Type<MRCompositionTypeLoinc> = t.recursion(
    "MRCompositionTypeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRCompositionTypeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface MRCompositionStempelinformationenEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionStempelinformationenEntryReference: t.Type<MRCompositionStempelinformationenEntryReference> =
    t.recursion("MRCompositionStempelinformationenEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
                    ])
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
export interface MRCompositionTermineEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionTermineEntryReference: t.Type<MRCompositionTermineEntryReference> =
    t.recursion("MRCompositionTermineEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Arrival_Maternity_Hospital|1.0.0"
                    ])
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
export interface MRCompositionTermineSection {
    title: "Nächster Untersuchungstermin";
    code: MRCompositionTermineSectionCode;
    entry: Array<MRCompositionTermineSectionEntryReference>;
    id?: string;
}

export const MRCompositionTermineSection: t.Type<MRCompositionTermineSection> =
    t.recursion("MRCompositionTermineSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Nächster Untersuchungstermin"),
                    code: MRCompositionTermineSectionCode,
                    entry: MinArray(1, MRCompositionTermineSectionEntryReference)
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
export interface MRCompositionTerminbestimmungEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionTerminbestimmungEntryReference: t.Type<MRCompositionTerminbestimmungEntryReference> =
    t.recursion("MRCompositionTerminbestimmungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Determination_Childbirth|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Menstrual_Cycle|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Of_Conception|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Determination_Of_Pregnancy|1.0.0"
                    ])
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
export interface MRCompositionAnamneseUndAllgemeineBefundeEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionAnamneseUndAllgemeineBefundeEntryReference: t.Type<MRCompositionAnamneseUndAllgemeineBefundeEntryReference> =
    t.recursion("MRCompositionAnamneseUndAllgemeineBefundeEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Initial_Examination|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A|1.0.0"
                    ])
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
export interface MRCompositionBesondereBefundeEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionBesondereBefundeEntryReference: t.Type<MRCompositionBesondereBefundeEntryReference> =
    t.recursion("MRCompositionBesondereBefundeEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Special_Findings|1.0.0"
                    ])
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
export interface MRCompositionBesondereBefundeSection {
    title: "Gestationsdiabetes";
    code: MRCompositionBesondereBefundeSectionCode;
    id?: string;
    entry?: Array<MRCompositionBesondereBefundeSectionEntryReference>;
}

export const MRCompositionBesondereBefundeSection: t.Type<MRCompositionBesondereBefundeSection> =
    t.recursion("MRCompositionBesondereBefundeSection", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Gestationsdiabetes"),
                    code: MRCompositionBesondereBefundeSectionCode
                }),
                t.partial({
                    id: SCALARString,
                    entry: MaxArray(2, MRCompositionBesondereBefundeSectionEntryReference)
                })
            ])
        )
    );

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface MRCompositionBeratungEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionBeratungEntryReference: t.Type<MRCompositionBeratungEntryReference> =
    t.recursion("MRCompositionBeratungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Counselling|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_HIV_Test_Performed|1.0.0"
                    ])
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
export interface MRCompositionAntiDProphylaxeEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionAntiDProphylaxeEntryReference: t.Type<MRCompositionAntiDProphylaxeEntryReference> =
    t.recursion("MRCompositionAntiDProphylaxeEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis|1.0.0"
                    ])
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
export interface MRCompositionStationaereBehandlungEntryReference {
    reference: string;
    id?: string;
}

export const MRCompositionStationaereBehandlungEntryReference: t.Type<MRCompositionStationaereBehandlungEntryReference> =
    t.recursion("MRCompositionStationaereBehandlungEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Inpatient_Treatment|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Diese Extension enthält die Klappentexte und Hinweise des Mutterpasses.
 */
export interface MRCompositionHinweise {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Comments";
    id?: string;
    extension?: (
        | Extension
        | MRCompositionHinweiseHinweiseSchwangere
        | MRCompositionHinweiseHinweiseMutter
        | MRCompositionHinweiseAufbewahrungshinweis
    )[];
}

export const MRCompositionHinweise: t.Type<MRCompositionHinweise> = t.recursion(
    "MRCompositionHinweise",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Comments"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRCompositionHinweiseHinweiseSchwangere>,
                                t.Type<MRCompositionHinweiseHinweiseMutter>,
                                t.Type<MRCompositionHinweiseAufbewahrungshinweis>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRCompositionHinweiseHinweiseSchwangere,
                            MRCompositionHinweiseHinweiseMutter,
                            MRCompositionHinweiseAufbewahrungshinweis
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRCompositionHinweiseHinweiseSchwangere,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "hinweiseSchwangere" }
                            },
                            {
                                codec: MRCompositionHinweiseHinweiseMutter,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "hinweiseMutter" }
                            },
                            {
                                codec: MRCompositionHinweiseAufbewahrungshinweis,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "aufbewahrungshinweis" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface MRCompositionStempelinformationen {
    title: "Stempelinformationen des Arztes/der Klinik/der mitbetreuenden Hebamme";
    entry: Array<MRCompositionStempelinformationenEntryReference>;
    id?: string;
}

export const MRCompositionStempelinformationen: t.Type<MRCompositionStempelinformationen> =
    t.recursion("MRCompositionStempelinformationen", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal(
                        "Stempelinformationen des Arztes/der Klinik/der mitbetreuenden Hebamme"
                    ),
                    entry: MinArray(1, MRCompositionStempelinformationenEntryReference)
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
export interface MRCompositionTermine {
    title: "Termine";
    id?: string;
    entry?: MRCompositionTermineEntryReference[];
    section?: Array<MRCompositionTermineSection>;
}

export const MRCompositionTermine: t.Type<MRCompositionTermine> = t.recursion(
    "MRCompositionTermine",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Termine")
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(MRCompositionTermineEntryReference),
                    section: MaxArray(1, MRCompositionTermineSection)
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface MRCompositionTerminbestimmung {
    title: "Terminbestimmung";
    entry: Array<MRCompositionTerminbestimmungEntryReference>;
    id?: string;
}

export const MRCompositionTerminbestimmung: t.Type<MRCompositionTerminbestimmung> =
    t.recursion("MRCompositionTerminbestimmung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Terminbestimmung"),
                    entry: MinArray(1, MRCompositionTerminbestimmungEntryReference)
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
export interface MRCompositionAnamneseUndAllgemeineBefunde {
    title: "Anamnese und allgemeine Befunde";
    entry: Array<MRCompositionAnamneseUndAllgemeineBefundeEntryReference>;
    id?: string;
}

export const MRCompositionAnamneseUndAllgemeineBefunde: t.Type<MRCompositionAnamneseUndAllgemeineBefunde> =
    t.recursion("MRCompositionAnamneseUndAllgemeineBefunde", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Anamnese und allgemeine Befunde"),
                    entry: MinArray(
                        1,
                        MRCompositionAnamneseUndAllgemeineBefundeEntryReference
                    )
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
export interface MRCompositionBesondereBefunde {
    title: "Besondere Befunde";
    id?: string;
    entry?: MRCompositionBesondereBefundeEntryReference[];
    section?: Array<MRCompositionBesondereBefundeSection>;
}

export const MRCompositionBesondereBefunde: t.Type<MRCompositionBesondereBefunde> =
    t.recursion("MRCompositionBesondereBefunde", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Besondere Befunde")
                }),
                t.partial({
                    id: SCALARString,
                    entry: t.array(MRCompositionBesondereBefundeEntryReference),
                    section: MaxArray(1, MRCompositionBesondereBefundeSection)
                })
            ])
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface MRCompositionBeratung {
    title: "Beratung der Schwangeren";
    entry: Array<MRCompositionBeratungEntryReference>;
    id?: string;
}

export const MRCompositionBeratung: t.Type<MRCompositionBeratung> = t.recursion(
    "MRCompositionBeratung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Beratung der Schwangeren"),
                    entry: MinArray(1, MRCompositionBeratungEntryReference)
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
export interface MRCompositionAntiDProphylaxe {
    title: "Anti-D-Prophylaxe";
    entry: Array<MRCompositionAntiDProphylaxeEntryReference>;
    id?: string;
}

export const MRCompositionAntiDProphylaxe: t.Type<MRCompositionAntiDProphylaxe> =
    t.recursion("MRCompositionAntiDProphylaxe", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Anti-D-Prophylaxe"),
                    entry: MinArray(1, MRCompositionAntiDProphylaxeEntryReference)
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
export interface MRCompositionUntersuchungen {
    title: "Untersuchungen";
    section: Array<
        | MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz
        | MRCompositionUntersuchungenGravidogramm
        | MRCompositionUntersuchungenUltraschall
        | MRCompositionUntersuchungenCardiotokographie
        | MRCompositionUntersuchungenEpikrise
    >;
    id?: string;
}

export const MRCompositionUntersuchungen: t.Type<MRCompositionUntersuchungen> =
    t.recursion("MRCompositionUntersuchungen", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Untersuchungen"),
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz>,
                                t.Type<MRCompositionUntersuchungenGravidogramm>,
                                t.Type<MRCompositionUntersuchungenUltraschall>,
                                t.Type<MRCompositionUntersuchungenCardiotokographie>,
                                t.Type<MRCompositionUntersuchungenEpikrise>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz,
                            MRCompositionUntersuchungenGravidogramm,
                            MRCompositionUntersuchungenUltraschall,
                            MRCompositionUntersuchungenCardiotokographie,
                            MRCompositionUntersuchungenEpikrise
                        ]),
                        [
                            {
                                codec: MRCompositionUntersuchungenLaboruntersuchungenUndRoetelnschutz,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Laboruntersuchungen und Rötelnschutz"
                                }
                            },
                            {
                                codec: MRCompositionUntersuchungenGravidogramm,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Gravidogramm" }
                            },
                            {
                                codec: MRCompositionUntersuchungenUltraschall,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Ultraschall" }
                            },
                            {
                                codec: MRCompositionUntersuchungenCardiotokographie,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "title", value: "Cardiotokographie" }
                            },
                            {
                                codec: MRCompositionUntersuchungenEpikrise,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "title",
                                    value: "Abschluss-Untersuchung/Epikrise"
                                }
                            }
                        ],
                        ["1", "*"]
                    )
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
export interface MRCompositionStationaereBehandlung {
    title: "Stationäre Behandlung";
    entry: Array<MRCompositionStationaereBehandlungEntryReference>;
    id?: string;
}

export const MRCompositionStationaereBehandlung: t.Type<MRCompositionStationaereBehandlung> =
    t.recursion("MRCompositionStationaereBehandlung", () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Stationäre Behandlung"),
                    entry: MinArray(1, MRCompositionStationaereBehandlungEntryReference)
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
export interface MRCompositionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Composition|1.0.0">;
    id?: string;
}

export const MRCompositionMeta: t.Type<MRCompositionMeta> = t.recursion(
    "MRCompositionMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Composition|1.0.0"
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
export interface MRCompositionType {
    coding: Array<MRCompositionTypeSnomed | MRCompositionTypeLoinc>;
    id?: string;
}

export const MRCompositionType: t.Type<MRCompositionType> = t.recursion(
    "MRCompositionType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRCompositionTypeSnomed>,
                                t.Type<MRCompositionTypeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([MRCompositionTypeSnomed, MRCompositionTypeLoinc]),
                        [
                            {
                                codec: MRCompositionTypeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRCompositionTypeLoinc,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["1", "2"]
                    )
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
export interface MRCompositionSubjectReference {
    reference: string;
    id?: string;
}

export const MRCompositionSubjectReference: t.Type<MRCompositionSubjectReference> =
    t.recursion("MRCompositionSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRCompositionEncounterReference {
    reference: string;
    id?: string;
}

export const MRCompositionEncounterReference: t.Type<MRCompositionEncounterReference> =
    t.recursion("MRCompositionEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRCompositionAuthorReference {
    reference: string;
    id?: string;
}

export const MRCompositionAuthorReference: t.Type<MRCompositionAuthorReference> =
    t.recursion("MRCompositionAuthorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRComposition {
    resourceType: "Composition";
    meta: MRCompositionMeta;
    status: "final";
    type: MRCompositionType;
    subject: MRCompositionSubjectReference;
    encounter: MRCompositionEncounterReference;
    date: string;
    author: Array<MRCompositionAuthorReference>;
    title: "Mutterpasseintrag";
    section: Array<
        | MRCompositionStempelinformationen
        | MRCompositionTermine
        | MRCompositionTerminbestimmung
        | MRCompositionAnamneseUndAllgemeineBefunde
        | MRCompositionBesondereBefunde
        | MRCompositionBeratung
        | MRCompositionAntiDProphylaxe
        | MRCompositionUntersuchungen
        | MRCompositionStationaereBehandlung
    >;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRCompositionHinweise)[];
}

const MRComposition: t.Type<MRComposition> = t.recursion("MRComposition", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: MRCompositionMeta,
                status: Literal("final"),
                type: MRCompositionType,
                subject: MRCompositionSubjectReference,
                encounter: MRCompositionEncounterReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 2, MRCompositionAuthorReference),
                title: Literal("Mutterpasseintrag"),
                section: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRCompositionStempelinformationen>,
                            t.Type<MRCompositionTermine>,
                            t.Type<MRCompositionTerminbestimmung>,
                            t.Type<MRCompositionAnamneseUndAllgemeineBefunde>,
                            t.Type<MRCompositionBesondereBefunde>,
                            t.Type<MRCompositionBeratung>,
                            t.Type<MRCompositionAntiDProphylaxe>,
                            t.Type<MRCompositionUntersuchungen>,
                            t.Type<MRCompositionStationaereBehandlung>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MRCompositionStempelinformationen,
                        MRCompositionTermine,
                        MRCompositionTerminbestimmung,
                        MRCompositionAnamneseUndAllgemeineBefunde,
                        MRCompositionBesondereBefunde,
                        MRCompositionBeratung,
                        MRCompositionAntiDProphylaxe,
                        MRCompositionUntersuchungen,
                        MRCompositionStationaereBehandlung
                    ]),
                    [
                        {
                            codec: MRCompositionStempelinformationen,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Stempelinformationen des Arztes/der Klinik/der mitbetreuenden Hebamme"
                            }
                        },
                        {
                            codec: MRCompositionTermine,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Termine" }
                        },
                        {
                            codec: MRCompositionTerminbestimmung,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Terminbestimmung" }
                        },
                        {
                            codec: MRCompositionAnamneseUndAllgemeineBefunde,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "title",
                                value: "Anamnese und allgemeine Befunde"
                            }
                        },
                        {
                            codec: MRCompositionBesondereBefunde,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Besondere Befunde" }
                        },
                        {
                            codec: MRCompositionBeratung,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Beratung der Schwangeren" }
                        },
                        {
                            codec: MRCompositionAntiDProphylaxe,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Anti-D-Prophylaxe" }
                        },
                        {
                            codec: MRCompositionUntersuchungen,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Untersuchungen" }
                        },
                        {
                            codec: MRCompositionStationaereBehandlung,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "title", value: "Stationäre Behandlung" }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<MRCompositionHinweise>]>,
                    t.Any
                >(
                    t.union([Extension, MRCompositionHinweise]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRCompositionHinweise,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Comments"
                            }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    )
);

export default MRComposition;
