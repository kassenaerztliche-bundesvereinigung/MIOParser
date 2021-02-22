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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position"

/**
 * Content in other Language.
 */
export interface MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kindslage";
    id?: string;
}

export const MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Kindslage")
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
export interface MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> = t.recursion(
    "MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed> = t.recursion(
    "MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                t.Type<
                                    MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
export interface MRObservationChildPositionCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationChildPositionCodeCodingDisplay: t.Type<MRObservationChildPositionCodeCodingDisplay> = t.recursion(
    "MRObservationChildPositionCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationChildPositionCodeCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface MRObservationChildPositionBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationChildPositionBodySiteIdentifikation: t.Type<MRObservationChildPositionBodySiteIdentifikation> = t.recursion(
    "MRObservationChildPositionBodySiteIdentifikation",
    () =>
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
export interface MRObservationChildPositionBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationChildPositionBodySiteCodingDisplay: t.Type<MRObservationChildPositionBodySiteCodingDisplay> = t.recursion(
    "MRObservationChildPositionBodySiteCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationChildPositionBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface MRObservationChildPositionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364607000";
    id?: string;
    _display?: MRObservationChildPositionCodeCodingDisplay;
    display?: string;
}

export const MRObservationChildPositionCodeCoding: t.Type<MRObservationChildPositionCodeCoding> = t.recursion(
    "MRObservationChildPositionCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364607000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationChildPositionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationChildPositionBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationChildPositionBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationChildPositionBodySiteCoding: t.Type<MRObservationChildPositionBodySiteCoding> = t.recursion(
    "MRObservationChildPositionBodySiteCoding",
    () =>
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
                    _display: MRObservationChildPositionBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationChildPositionMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0"
    >;
    id?: string;
}

export const MRObservationChildPositionMeta: t.Type<MRObservationChildPositionMeta> = t.recursion(
    "MRObservationChildPositionMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position|1.0.0"
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
export interface MRObservationChildPositionCode {
    coding: Array<MRObservationChildPositionCodeCoding>;
    id?: string;
}

export const MRObservationChildPositionCode: t.Type<MRObservationChildPositionCode> = t.recursion(
    "MRObservationChildPositionCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationChildPositionCodeCoding)
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
export interface MRObservationChildPositionSubject {
    reference: string;
    id?: string;
}

export const MRObservationChildPositionSubject: t.Type<MRObservationChildPositionSubject> = t.recursion(
    "MRObservationChildPositionSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationChildPositionEncounter {
    reference: string;
    id?: string;
}

export const MRObservationChildPositionEncounter: t.Type<MRObservationChildPositionEncounter> = t.recursion(
    "MRObservationChildPositionEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationChildPositionPerformer {
    reference: string;
    id?: string;
}

export const MRObservationChildPositionPerformer: t.Type<MRObservationChildPositionPerformer> = t.recursion(
    "MRObservationChildPositionPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationChildPositionBodySite {
    coding: Array<MRObservationChildPositionBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationChildPositionBodySiteIdentifikation)[];
    text?: string;
}

export const MRObservationChildPositionBodySite: t.Type<MRObservationChildPositionBodySite> = t.recursion(
    "MRObservationChildPositionBodySite",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationChildPositionBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationChildPositionBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationChildPositionBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationChildPositionBodySiteIdentifikation,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
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

interface MRObservationChildPosition {
    meta: MRObservationChildPositionMeta;
    status: "final";
    code: MRObservationChildPositionCode;
    subject: MRObservationChildPositionSubject;
    encounter: MRObservationChildPositionEncounter;
    effectiveDateTime: string;
    valueString: string;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationChildPositionPerformer>;
    bodySite?: MRObservationChildPositionBodySite;
}

const MRObservationChildPosition: t.Type<MRObservationChildPosition> = t.recursion(
    "MRObservationChildPosition",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationChildPositionMeta,
                    status: Literal("final"),
                    code: MRObservationChildPositionCode,
                    subject: MRObservationChildPositionSubject,
                    encounter: MRObservationChildPositionEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationChildPositionPerformer),
                    bodySite: MRObservationChildPositionBodySite
                })
            ])
        )
);

export default MRObservationChildPosition;
