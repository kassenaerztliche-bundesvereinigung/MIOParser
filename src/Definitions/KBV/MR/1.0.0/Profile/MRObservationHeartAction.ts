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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action"

/**
 * Content in other Language.
 */
export interface MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Herzaktion";
    id?: string;
}

export const MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Herzaktion")
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
export interface MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                    t.Type<MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
export interface MRObservationHeartActionCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationHeartActionCodeCodingDisplay: t.Type<MRObservationHeartActionCodeCodingDisplay> =
    t.recursion("MRObservationHeartActionCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeartActionCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationHeartActionBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationHeartActionBodySiteIdentifikation: t.Type<MRObservationHeartActionBodySiteIdentifikation> =
    t.recursion("MRObservationHeartActionBodySiteIdentifikation", () =>
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
export interface MRObservationHeartActionBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationHeartActionBodySiteCodingDisplay: t.Type<MRObservationHeartActionBodySiteCodingDisplay> =
    t.recursion("MRObservationHeartActionBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeartActionBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
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
export interface MRObservationHeartActionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "277766008";
    id?: string;
    _display?: MRObservationHeartActionCodeCodingDisplay;
    display?: string;
}

export const MRObservationHeartActionCodeCoding: t.Type<MRObservationHeartActionCodeCoding> =
    t.recursion("MRObservationHeartActionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("277766008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeartActionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeartActionBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationHeartActionBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationHeartActionBodySiteCoding: t.Type<MRObservationHeartActionBodySiteCoding> =
    t.recursion("MRObservationHeartActionBodySiteCoding", () =>
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
                    _display: MRObservationHeartActionBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationHeartActionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0">;
    id?: string;
}

export const MRObservationHeartActionMeta: t.Type<MRObservationHeartActionMeta> =
    t.recursion("MRObservationHeartActionMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0"
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
export interface MRObservationHeartActionCode {
    coding: Array<MRObservationHeartActionCodeCoding>;
    id?: string;
}

export const MRObservationHeartActionCode: t.Type<MRObservationHeartActionCode> =
    t.recursion("MRObservationHeartActionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHeartActionCodeCoding)
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
export interface MRObservationHeartActionSubject {
    reference: string;
    id?: string;
}

export const MRObservationHeartActionSubject: t.Type<MRObservationHeartActionSubject> =
    t.recursion("MRObservationHeartActionSubject", () =>
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
export interface MRObservationHeartActionEncounter {
    reference: string;
    id?: string;
}

export const MRObservationHeartActionEncounter: t.Type<MRObservationHeartActionEncounter> =
    t.recursion("MRObservationHeartActionEncounter", () =>
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
export interface MRObservationHeartActionPerformer {
    reference: string;
    id?: string;
}

export const MRObservationHeartActionPerformer: t.Type<MRObservationHeartActionPerformer> =
    t.recursion("MRObservationHeartActionPerformer", () =>
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
export interface MRObservationHeartActionBodySite {
    coding: Array<MRObservationHeartActionBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationHeartActionBodySiteIdentifikation)[];
}

export const MRObservationHeartActionBodySite: t.Type<MRObservationHeartActionBodySite> =
    t.recursion("MRObservationHeartActionBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationHeartActionBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationHeartActionBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationHeartActionBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationHeartActionBodySiteIdentifikation,
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

interface MRObservationHeartAction {
    resourceType: "Observation";
    meta: MRObservationHeartActionMeta;
    status: "final";
    code: MRObservationHeartActionCode;
    subject: MRObservationHeartActionSubject;
    encounter: MRObservationHeartActionEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeartActionPerformer>;
    bodySite?: MRObservationHeartActionBodySite;
}

const MRObservationHeartAction: t.Type<MRObservationHeartAction> = t.recursion(
    "MRObservationHeartAction",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeartActionMeta,
                    status: Literal("final"),
                    code: MRObservationHeartActionCode,
                    subject: MRObservationHeartActionSubject,
                    encounter: MRObservationHeartActionEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationHeartActionPerformer),
                    bodySite: MRObservationHeartActionBodySite
                })
            ])
        )
);

export default MRObservationHeartAction;
