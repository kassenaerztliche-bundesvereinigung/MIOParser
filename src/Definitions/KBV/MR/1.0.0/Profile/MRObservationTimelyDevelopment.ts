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
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development"

/**
 * Content in other Language.
 */
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Zeitgerechte Entwicklung kontrollbedürftig";
    id?: string;
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Zeitgerechte Entwicklung kontrollbedürftig")
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
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplay: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "129125009:408730004=410525008";
    id?: string;
    _display?: MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCoding: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("129125009:408730004=410525008")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Zeitgerechte Entwicklung liegt vor";
    id?: string;
}

export const MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Zeitgerechte Entwicklung liegt vor")
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
export interface MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConcept {
    coding: Array<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConcept: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConcept> =
    t.recursion(
        "MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConceptCoding
                        )
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
export interface MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                    t.Type<MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKode {
    url: "kode";
    valueCodeableConcept: MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConcept;
    id?: string;
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKode: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKode> =
    t.recursion("MRObservationTimelyDevelopmentKontrollbeduerftigKode", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept:
                        MRObservationTimelyDevelopmentKontrollbeduerftigKodeValueCodeableConcept
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
export interface MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig {
    url: "kontrollbeduerftig";
    valueBoolean: boolean;
    id?: string;
}

export const MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig> =
    t.recursion(
        "MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kontrollbeduerftig"),
                        valueBoolean: SCALARBoolean
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
export interface MRObservationTimelyDevelopmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationTimelyDevelopmentCodeCodingDisplay: t.Type<MRObservationTimelyDevelopmentCodeCodingDisplay> =
    t.recursion("MRObservationTimelyDevelopmentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationTimelyDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationTimelyDevelopmentBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationTimelyDevelopmentBodySiteIdentifikation: t.Type<MRObservationTimelyDevelopmentBodySiteIdentifikation> =
    t.recursion("MRObservationTimelyDevelopmentBodySiteIdentifikation", () =>
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
export interface MRObservationTimelyDevelopmentBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationTimelyDevelopmentBodySiteCodingDisplay: t.Type<MRObservationTimelyDevelopmentBodySiteCodingDisplay> =
    t.recursion("MRObservationTimelyDevelopmentBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationTimelyDevelopmentBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
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
 * In dieser Extension kann dokumentiert werden, ob eine Untersuchung kontrollbedürftig ist.
 */
export interface MRObservationTimelyDevelopmentKontrollbeduerftig {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed";
    id?: string;
    extension?: (
        | Extension
        | MRObservationTimelyDevelopmentKontrollbeduerftigKode
        | MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig
    )[];
}

export const MRObservationTimelyDevelopmentKontrollbeduerftig: t.Type<MRObservationTimelyDevelopmentKontrollbeduerftig> =
    t.recursion("MRObservationTimelyDevelopmentKontrollbeduerftig", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKode>,
                                t.Type<MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationTimelyDevelopmentKontrollbeduerftigKode,
                            MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationTimelyDevelopmentKontrollbeduerftigKode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kode" }
                            },
                            {
                                codec: MRObservationTimelyDevelopmentKontrollbeduerftigKontrollbeduerftig,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kontrollbeduerftig" }
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
export interface MRObservationTimelyDevelopmentCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "169663003";
    id?: string;
    _display?: MRObservationTimelyDevelopmentCodeCodingDisplay;
    display?: string;
}

export const MRObservationTimelyDevelopmentCodeCoding: t.Type<MRObservationTimelyDevelopmentCodeCoding> =
    t.recursion("MRObservationTimelyDevelopmentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("169663003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationTimelyDevelopmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationTimelyDevelopmentBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationTimelyDevelopmentBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationTimelyDevelopmentBodySiteCoding: t.Type<MRObservationTimelyDevelopmentBodySiteCoding> =
    t.recursion("MRObservationTimelyDevelopmentBodySiteCoding", () =>
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
                    _display: MRObservationTimelyDevelopmentBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationTimelyDevelopmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0">;
    id?: string;
}

export const MRObservationTimelyDevelopmentMeta: t.Type<MRObservationTimelyDevelopmentMeta> =
    t.recursion("MRObservationTimelyDevelopmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0"
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
export interface MRObservationTimelyDevelopmentCode {
    coding: Array<MRObservationTimelyDevelopmentCodeCoding>;
    id?: string;
}

export const MRObservationTimelyDevelopmentCode: t.Type<MRObservationTimelyDevelopmentCode> =
    t.recursion("MRObservationTimelyDevelopmentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationTimelyDevelopmentCodeCoding)
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
export interface MRObservationTimelyDevelopmentSubject {
    reference: string;
    id?: string;
}

export const MRObservationTimelyDevelopmentSubject: t.Type<MRObservationTimelyDevelopmentSubject> =
    t.recursion("MRObservationTimelyDevelopmentSubject", () =>
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
export interface MRObservationTimelyDevelopmentEncounter {
    reference: string;
    id?: string;
}

export const MRObservationTimelyDevelopmentEncounter: t.Type<MRObservationTimelyDevelopmentEncounter> =
    t.recursion("MRObservationTimelyDevelopmentEncounter", () =>
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
export interface MRObservationTimelyDevelopmentPerformer {
    reference: string;
    id?: string;
}

export const MRObservationTimelyDevelopmentPerformer: t.Type<MRObservationTimelyDevelopmentPerformer> =
    t.recursion("MRObservationTimelyDevelopmentPerformer", () =>
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
export interface MRObservationTimelyDevelopmentBodySite {
    coding: Array<MRObservationTimelyDevelopmentBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationTimelyDevelopmentBodySiteIdentifikation)[];
    text?: string;
}

export const MRObservationTimelyDevelopmentBodySite: t.Type<MRObservationTimelyDevelopmentBodySite> =
    t.recursion("MRObservationTimelyDevelopmentBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationTimelyDevelopmentBodySiteCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationTimelyDevelopmentBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationTimelyDevelopmentBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationTimelyDevelopmentBodySiteIdentifikation,
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

interface MRObservationTimelyDevelopment {
    resourceType: "Observation";
    meta: MRObservationTimelyDevelopmentMeta;
    status: "final";
    code: MRObservationTimelyDevelopmentCode;
    subject: MRObservationTimelyDevelopmentSubject;
    encounter: MRObservationTimelyDevelopmentEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRObservationTimelyDevelopmentKontrollbeduerftig)[];
    performer?: Array<MRObservationTimelyDevelopmentPerformer>;
    bodySite?: MRObservationTimelyDevelopmentBodySite;
}

const MRObservationTimelyDevelopment: t.Type<MRObservationTimelyDevelopment> =
    t.recursion("MRObservationTimelyDevelopment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationTimelyDevelopmentMeta,
                    status: Literal("final"),
                    code: MRObservationTimelyDevelopmentCode,
                    subject: MRObservationTimelyDevelopmentSubject,
                    encounter: MRObservationTimelyDevelopmentEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationTimelyDevelopmentKontrollbeduerftig>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationTimelyDevelopmentKontrollbeduerftig
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationTimelyDevelopmentKontrollbeduerftig,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    performer: MaxArray(1, MRObservationTimelyDevelopmentPerformer),
                    bodySite: MRObservationTimelyDevelopmentBodySite
                })
            ])
        )
    );

export default MRObservationTimelyDevelopment;
