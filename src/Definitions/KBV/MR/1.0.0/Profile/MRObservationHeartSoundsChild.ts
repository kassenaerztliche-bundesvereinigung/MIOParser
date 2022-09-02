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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Sounds_Child"

/**
 * Content in other Language.
 */
export interface MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Herztöne";
    id?: string;
}

export const MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Herztöne")
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
export interface MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                    t.Type<MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
export interface MRObservationHeartSoundsChildCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationHeartSoundsChildCodeCodingDisplay: t.Type<MRObservationHeartSoundsChildCodeCodingDisplay> =
    t.recursion("MRObservationHeartSoundsChildCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeartSoundsChildCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationHeartSoundsChildBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationHeartSoundsChildBodySiteIdentifikation: t.Type<MRObservationHeartSoundsChildBodySiteIdentifikation> =
    t.recursion("MRObservationHeartSoundsChildBodySiteIdentifikation", () =>
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
export interface MRObservationHeartSoundsChildBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationHeartSoundsChildBodySiteCodingDisplay: t.Type<MRObservationHeartSoundsChildBodySiteCodingDisplay> =
    t.recursion("MRObservationHeartSoundsChildBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeartSoundsChildBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
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
export interface MRObservationHeartSoundsChildCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364620002";
    id?: string;
    _display?: MRObservationHeartSoundsChildCodeCodingDisplay;
    display?: string;
}

export const MRObservationHeartSoundsChildCodeCoding: t.Type<MRObservationHeartSoundsChildCodeCoding> =
    t.recursion("MRObservationHeartSoundsChildCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364620002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeartSoundsChildCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeartSoundsChildBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationHeartSoundsChildBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationHeartSoundsChildBodySiteCoding: t.Type<MRObservationHeartSoundsChildBodySiteCoding> =
    t.recursion("MRObservationHeartSoundsChildBodySiteCoding", () =>
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
                    _display: MRObservationHeartSoundsChildBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationHeartSoundsChildMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Sounds_Child|1.0.0">;
    id?: string;
}

export const MRObservationHeartSoundsChildMeta: t.Type<MRObservationHeartSoundsChildMeta> =
    t.recursion("MRObservationHeartSoundsChildMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Sounds_Child|1.0.0"
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
export interface MRObservationHeartSoundsChildCode {
    coding: Array<MRObservationHeartSoundsChildCodeCoding>;
    id?: string;
}

export const MRObservationHeartSoundsChildCode: t.Type<MRObservationHeartSoundsChildCode> =
    t.recursion("MRObservationHeartSoundsChildCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHeartSoundsChildCodeCoding)
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
export interface MRObservationHeartSoundsChildSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationHeartSoundsChildSubjectReference: t.Type<MRObservationHeartSoundsChildSubjectReference> =
    t.recursion("MRObservationHeartSoundsChildSubjectReference", () =>
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
export interface MRObservationHeartSoundsChildEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationHeartSoundsChildEncounterReference: t.Type<MRObservationHeartSoundsChildEncounterReference> =
    t.recursion("MRObservationHeartSoundsChildEncounterReference", () =>
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
export interface MRObservationHeartSoundsChildPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationHeartSoundsChildPerformerReference: t.Type<MRObservationHeartSoundsChildPerformerReference> =
    t.recursion("MRObservationHeartSoundsChildPerformerReference", () =>
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
export interface MRObservationHeartSoundsChildBodySite {
    coding: Array<MRObservationHeartSoundsChildBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationHeartSoundsChildBodySiteIdentifikation)[];
}

export const MRObservationHeartSoundsChildBodySite: t.Type<MRObservationHeartSoundsChildBodySite> =
    t.recursion("MRObservationHeartSoundsChildBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHeartSoundsChildBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationHeartSoundsChildBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationHeartSoundsChildBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationHeartSoundsChildBodySiteIdentifikation,
                                occurrence: ["0", "1"],
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

interface MRObservationHeartSoundsChild {
    resourceType: "Observation";
    meta: MRObservationHeartSoundsChildMeta;
    status: "final";
    code: MRObservationHeartSoundsChildCode;
    subject: MRObservationHeartSoundsChildSubjectReference;
    encounter: MRObservationHeartSoundsChildEncounterReference;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeartSoundsChildPerformerReference>;
    bodySite?: MRObservationHeartSoundsChildBodySite;
}

const MRObservationHeartSoundsChild: t.Type<MRObservationHeartSoundsChild> = t.recursion(
    "MRObservationHeartSoundsChild",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeartSoundsChildMeta,
                    status: Literal("final"),
                    code: MRObservationHeartSoundsChildCode,
                    subject: MRObservationHeartSoundsChildSubjectReference,
                    encounter: MRObservationHeartSoundsChildEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationHeartSoundsChildPerformerReference
                    ),
                    bodySite: MRObservationHeartSoundsChildBodySite
                })
            ])
        )
);

export default MRObservationHeartSoundsChild;
