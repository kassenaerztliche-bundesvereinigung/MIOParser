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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRMorphologyVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRMorphology";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology"

/**
 * Content in other Language.
 */
export interface MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                    t.Type<MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
export interface MRObservationMorphologyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationMorphologyCodeCodingDisplay: t.Type<MRObservationMorphologyCodeCodingDisplay> =
    t.recursion("MRObservationMorphologyCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationMorphologyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationMorphologyBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationMorphologyBodySiteIdentifikation: t.Type<MRObservationMorphologyBodySiteIdentifikation> =
    t.recursion("MRObservationMorphologyBodySiteIdentifikation", () =>
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
export interface MRObservationMorphologyBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationMorphologyBodySiteCodingDisplay: t.Type<MRObservationMorphologyBodySiteCodingDisplay> =
    t.recursion("MRObservationMorphologyBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationMorphologyBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
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
export interface MRObservationMorphologyCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRMorphologyVS;
    id?: string;
    _display?: MRObservationMorphologyCodeCodingDisplay;
    display?: string;
}

export const MRObservationMorphologyCodeCoding: t.Type<MRObservationMorphologyCodeCoding> =
    t.recursion("MRObservationMorphologyCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRMorphologyVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationMorphologyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationMorphologyBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationMorphologyBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationMorphologyBodySiteCoding: t.Type<MRObservationMorphologyBodySiteCoding> =
    t.recursion("MRObservationMorphologyBodySiteCoding", () =>
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
                    _display: MRObservationMorphologyBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationMorphologyMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology|1.0.0">;
    id?: string;
}

export const MRObservationMorphologyMeta: t.Type<MRObservationMorphologyMeta> =
    t.recursion("MRObservationMorphologyMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology|1.0.0"
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
export interface MRObservationMorphologyCode {
    coding: Array<MRObservationMorphologyCodeCoding>;
    id?: string;
}

export const MRObservationMorphologyCode: t.Type<MRObservationMorphologyCode> =
    t.recursion("MRObservationMorphologyCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationMorphologyCodeCoding)
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
export interface MRObservationMorphologySubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationMorphologySubjectReference: t.Type<MRObservationMorphologySubjectReference> =
    t.recursion("MRObservationMorphologySubjectReference", () =>
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
export interface MRObservationMorphologyEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationMorphologyEncounterReference: t.Type<MRObservationMorphologyEncounterReference> =
    t.recursion("MRObservationMorphologyEncounterReference", () =>
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
export interface MRObservationMorphologyPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationMorphologyPerformerReference: t.Type<MRObservationMorphologyPerformerReference> =
    t.recursion("MRObservationMorphologyPerformerReference", () =>
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
export interface MRObservationMorphologyBodySite {
    coding: Array<MRObservationMorphologyBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationMorphologyBodySiteIdentifikation)[];
    text?: string;
}

export const MRObservationMorphologyBodySite: t.Type<MRObservationMorphologyBodySite> =
    t.recursion("MRObservationMorphologyBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationMorphologyBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationMorphologyBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationMorphologyBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationMorphologyBodySiteIdentifikation,
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

interface MRObservationMorphology {
    resourceType: "Observation";
    meta: MRObservationMorphologyMeta;
    status: "final";
    code: MRObservationMorphologyCode;
    subject: MRObservationMorphologySubjectReference;
    encounter: MRObservationMorphologyEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationMorphologyPerformerReference>;
    bodySite?: MRObservationMorphologyBodySite;
}

const MRObservationMorphology: t.Type<MRObservationMorphology> = t.recursion(
    "MRObservationMorphology",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationMorphologyMeta,
                    status: Literal("final"),
                    code: MRObservationMorphologyCode,
                    subject: MRObservationMorphologySubjectReference,
                    encounter: MRObservationMorphologyEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationMorphologyPerformerReference),
                    bodySite: MRObservationMorphologyBodySite
                })
            ])
        )
);

export default MRObservationMorphology;
