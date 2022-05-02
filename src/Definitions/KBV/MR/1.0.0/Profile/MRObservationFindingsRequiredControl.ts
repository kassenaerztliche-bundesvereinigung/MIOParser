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
import MRFindingsRequiredControlVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRFindingsRequiredControl";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control"

/**
 * Content in other Language.
 */
export interface MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent: t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent> =
    t.recursion(
        "MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent",
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
export interface MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
    )[];
}

export const MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed: t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed> =
    t.recursion(
        "MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed",
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
                                    t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomedContent,
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
export interface MRObservationFindingsRequiredControlCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationFindingsRequiredControlCodeCodingDisplay: t.Type<MRObservationFindingsRequiredControlCodeCodingDisplay> =
    t.recursion("MRObservationFindingsRequiredControlCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationFindingsRequiredControlCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationFindingsRequiredControlBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlBodySiteIdentifikation: t.Type<MRObservationFindingsRequiredControlBodySiteIdentifikation> =
    t.recursion("MRObservationFindingsRequiredControlBodySiteIdentifikation", () =>
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
export interface MRObservationFindingsRequiredControlBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed
    )[];
    value?: string;
}

export const MRObservationFindingsRequiredControlBodySiteCodingDisplay: t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplay> =
    t.recursion("MRObservationFindingsRequiredControlBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationFindingsRequiredControlBodySiteCodingDisplayAnzeigenameBodysiteSnomed,
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
export interface MRObservationFindingsRequiredControlCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRFindingsRequiredControlVS;
    id?: string;
    _display?: MRObservationFindingsRequiredControlCodeCodingDisplay;
    display?: string;
}

export const MRObservationFindingsRequiredControlCodeCoding: t.Type<MRObservationFindingsRequiredControlCodeCoding> =
    t.recursion("MRObservationFindingsRequiredControlCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRFindingsRequiredControlVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationFindingsRequiredControlCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationFindingsRequiredControlBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationFindingsRequiredControlBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationFindingsRequiredControlBodySiteCoding: t.Type<MRObservationFindingsRequiredControlBodySiteCoding> =
    t.recursion("MRObservationFindingsRequiredControlBodySiteCoding", () =>
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
                    _display: MRObservationFindingsRequiredControlBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationFindingsRequiredControlMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0">;
    id?: string;
}

export const MRObservationFindingsRequiredControlMeta: t.Type<MRObservationFindingsRequiredControlMeta> =
    t.recursion("MRObservationFindingsRequiredControlMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0"
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
export interface MRObservationFindingsRequiredControlCode {
    coding: Array<MRObservationFindingsRequiredControlCodeCoding>;
    id?: string;
}

export const MRObservationFindingsRequiredControlCode: t.Type<MRObservationFindingsRequiredControlCode> =
    t.recursion("MRObservationFindingsRequiredControlCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationFindingsRequiredControlCodeCoding
                    )
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
export interface MRObservationFindingsRequiredControlSubject {
    reference: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlSubject: t.Type<MRObservationFindingsRequiredControlSubject> =
    t.recursion("MRObservationFindingsRequiredControlSubject", () =>
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
export interface MRObservationFindingsRequiredControlEncounter {
    reference: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlEncounter: t.Type<MRObservationFindingsRequiredControlEncounter> =
    t.recursion("MRObservationFindingsRequiredControlEncounter", () =>
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
export interface MRObservationFindingsRequiredControlPerformer {
    reference: string;
    id?: string;
}

export const MRObservationFindingsRequiredControlPerformer: t.Type<MRObservationFindingsRequiredControlPerformer> =
    t.recursion("MRObservationFindingsRequiredControlPerformer", () =>
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
export interface MRObservationFindingsRequiredControlBodySite {
    coding: Array<MRObservationFindingsRequiredControlBodySiteCoding>;
    id?: string;
    extension?: (
        | Extension
        | MRObservationFindingsRequiredControlBodySiteIdentifikation
    )[];
    text?: string;
}

export const MRObservationFindingsRequiredControlBodySite: t.Type<MRObservationFindingsRequiredControlBodySite> =
    t.recursion("MRObservationFindingsRequiredControlBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationFindingsRequiredControlBodySiteCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationFindingsRequiredControlBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationFindingsRequiredControlBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationFindingsRequiredControlBodySiteIdentifikation,
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

interface MRObservationFindingsRequiredControl {
    resourceType: "Observation";
    meta: MRObservationFindingsRequiredControlMeta;
    status: "final";
    code: MRObservationFindingsRequiredControlCode;
    subject: MRObservationFindingsRequiredControlSubject;
    encounter: MRObservationFindingsRequiredControlEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationFindingsRequiredControlPerformer>;
    bodySite?: MRObservationFindingsRequiredControlBodySite;
}

const MRObservationFindingsRequiredControl: t.Type<MRObservationFindingsRequiredControl> =
    t.recursion("MRObservationFindingsRequiredControl", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationFindingsRequiredControlMeta,
                    status: Literal("final"),
                    code: MRObservationFindingsRequiredControlCode,
                    subject: MRObservationFindingsRequiredControlSubject,
                    encounter: MRObservationFindingsRequiredControlEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationFindingsRequiredControlPerformer),
                    bodySite: MRObservationFindingsRequiredControlBodySite
                })
            ])
        )
    );

export default MRObservationFindingsRequiredControl;
