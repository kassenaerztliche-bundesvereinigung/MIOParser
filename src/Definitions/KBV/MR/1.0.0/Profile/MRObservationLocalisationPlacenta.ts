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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRLocalisationPlacentaVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRLocalisationPlacenta";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta"

/**
 * Content in other Language.
 */
export interface MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
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
export interface MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Lokalisation/Struktur der Plazenta";
    id?: string;
}

export const MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Lokalisation/Struktur der Plazenta")
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
export interface MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Angaben zum Fötus/Kind")
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
export interface MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                    t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
export interface MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface MRObservationLocalisationPlacentaCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationLocalisationPlacentaCodeCodingDisplay: t.Type<MRObservationLocalisationPlacentaCodeCodingDisplay> =
    t.recursion("MRObservationLocalisationPlacentaCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationLocalisationPlacentaCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationLocalisationPlacentaValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRLocalisationPlacentaVS;
    id?: string;
    _display?: MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConceptCoding: t.Type<MRObservationLocalisationPlacentaValueCodeableConceptCoding> =
    t.recursion("MRObservationLocalisationPlacentaValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRLocalisationPlacentaVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationLocalisationPlacentaValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationLocalisationPlacentaBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaBodySiteIdentifikation: t.Type<MRObservationLocalisationPlacentaBodySiteIdentifikation> =
    t.recursion("MRObservationLocalisationPlacentaBodySiteIdentifikation", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationLocalisationPlacentaBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationLocalisationPlacentaBodySiteCodingDisplay: t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplay> =
    t.recursion("MRObservationLocalisationPlacentaBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationLocalisationPlacentaBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
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
export interface MRObservationLocalisationPlacentaCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "169952004";
    id?: string;
    _display?: MRObservationLocalisationPlacentaCodeCodingDisplay;
    display?: string;
}

export const MRObservationLocalisationPlacentaCodeCoding: t.Type<MRObservationLocalisationPlacentaCodeCoding> =
    t.recursion("MRObservationLocalisationPlacentaCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("169952004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationLocalisationPlacentaCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationLocalisationPlacentaValueCodeableConcept {
    coding: Array<MRObservationLocalisationPlacentaValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationLocalisationPlacentaValueCodeableConcept: t.Type<MRObservationLocalisationPlacentaValueCodeableConcept> =
    t.recursion("MRObservationLocalisationPlacentaValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationLocalisationPlacentaValueCodeableConceptCoding
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
export interface MRObservationLocalisationPlacentaBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationLocalisationPlacentaBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationLocalisationPlacentaBodySiteCoding: t.Type<MRObservationLocalisationPlacentaBodySiteCoding> =
    t.recursion("MRObservationLocalisationPlacentaBodySiteCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364599001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationLocalisationPlacentaBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationLocalisationPlacentaMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0">;
    id?: string;
}

export const MRObservationLocalisationPlacentaMeta: t.Type<MRObservationLocalisationPlacentaMeta> =
    t.recursion("MRObservationLocalisationPlacentaMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0"
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
export interface MRObservationLocalisationPlacentaCode {
    coding: Array<MRObservationLocalisationPlacentaCodeCoding>;
    id?: string;
}

export const MRObservationLocalisationPlacentaCode: t.Type<MRObservationLocalisationPlacentaCode> =
    t.recursion("MRObservationLocalisationPlacentaCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationLocalisationPlacentaCodeCoding)
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
export interface MRObservationLocalisationPlacentaSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaSubjectReference: t.Type<MRObservationLocalisationPlacentaSubjectReference> =
    t.recursion("MRObservationLocalisationPlacentaSubjectReference", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface MRObservationLocalisationPlacentaEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaEncounterReference: t.Type<MRObservationLocalisationPlacentaEncounterReference> =
    t.recursion("MRObservationLocalisationPlacentaEncounterReference", () =>
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface MRObservationLocalisationPlacentaPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationLocalisationPlacentaPerformerReference: t.Type<MRObservationLocalisationPlacentaPerformerReference> =
    t.recursion("MRObservationLocalisationPlacentaPerformerReference", () =>
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

/**
 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
 */
export interface MRObservationLocalisationPlacentaBodySite {
    coding: Array<MRObservationLocalisationPlacentaBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationLocalisationPlacentaBodySiteIdentifikation)[];
    text?: string;
}

export const MRObservationLocalisationPlacentaBodySite: t.Type<MRObservationLocalisationPlacentaBodySite> =
    t.recursion("MRObservationLocalisationPlacentaBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationLocalisationPlacentaBodySiteCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationLocalisationPlacentaBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationLocalisationPlacentaBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationLocalisationPlacentaBodySiteIdentifikation,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    text: SCALARString
                })
            ])
        )
    );

interface MRObservationLocalisationPlacenta {
    resourceType: "Observation";
    meta: MRObservationLocalisationPlacentaMeta;
    status: "final";
    code: MRObservationLocalisationPlacentaCode;
    subject: MRObservationLocalisationPlacentaSubjectReference;
    encounter: MRObservationLocalisationPlacentaEncounterReference;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationLocalisationPlacentaValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationLocalisationPlacentaPerformerReference>;
    note?: Array<Annotation>;
    bodySite?: MRObservationLocalisationPlacentaBodySite;
}

const MRObservationLocalisationPlacenta: t.Type<MRObservationLocalisationPlacenta> =
    t.recursion("MRObservationLocalisationPlacenta", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationLocalisationPlacentaMeta,
                    status: Literal("final"),
                    code: MRObservationLocalisationPlacentaCode,
                    subject: MRObservationLocalisationPlacentaSubjectReference,
                    encounter: MRObservationLocalisationPlacentaEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        MRObservationLocalisationPlacentaValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationLocalisationPlacentaPerformerReference
                    ),
                    note: MaxArray(1, Annotation),
                    bodySite: MRObservationLocalisationPlacentaBodySite
                })
            ])
        )
    );

export default MRObservationLocalisationPlacenta;
