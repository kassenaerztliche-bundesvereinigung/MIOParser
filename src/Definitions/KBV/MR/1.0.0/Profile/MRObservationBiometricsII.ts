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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRBiometricsIIIIIVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRBiometricsIIIII";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II"

/**
 * Content in other Language.
 */
export interface MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent: t.Type<MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent> =
    t.recursion(
        "MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent",
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
export interface MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
    )[];
}

export const MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed: t.Type<MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed> =
    t.recursion(
        "MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed",
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
                                    t.Type<MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent,
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
export interface MRObservationBiometricsIICodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBiometricsIICodeCodingDisplay: t.Type<MRObservationBiometricsIICodeCodingDisplay> =
    t.recursion("MRObservationBiometricsIICodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBiometricsIICodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBiometricsIIBodySiteIdentifikation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRObservationBiometricsIIBodySiteIdentifikation: t.Type<MRObservationBiometricsIIBodySiteIdentifikation> =
    t.recursion("MRObservationBiometricsIIBodySiteIdentifikation", () =>
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
export interface MRObservationBiometricsIIBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed
    )[];
    value?: string;
}

export const MRObservationBiometricsIIBodySiteCodingDisplay: t.Type<MRObservationBiometricsIIBodySiteCodingDisplay> =
    t.recursion("MRObservationBiometricsIIBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBiometricsIIBodySiteCodingDisplayAnzeigenameBodySiteSnomed,
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
export interface MRObservationBiometricsIICodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRBiometricsIIIIIVS;
    id?: string;
    _display?: MRObservationBiometricsIICodeCodingDisplay;
    display?: string;
}

export const MRObservationBiometricsIICodeCoding: t.Type<MRObservationBiometricsIICodeCoding> =
    t.recursion("MRObservationBiometricsIICodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRBiometricsIIIIIVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBiometricsIICodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBiometricsIIValueQuantity {
    value: number;
    unit: "mm";
    system: "http://unitsofmeasure.org";
    code: "mm";
    id?: string;
}

export const MRObservationBiometricsIIValueQuantity: t.Type<MRObservationBiometricsIIValueQuantity> =
    t.recursion("MRObservationBiometricsIIValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mm"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm")
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
export interface MRObservationBiometricsIIBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationBiometricsIIBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationBiometricsIIBodySiteCoding: t.Type<MRObservationBiometricsIIBodySiteCoding> =
    t.recursion("MRObservationBiometricsIIBodySiteCoding", () =>
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
                    _display: MRObservationBiometricsIIBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationBiometricsIIMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II|1.0.0">;
    id?: string;
}

export const MRObservationBiometricsIIMeta: t.Type<MRObservationBiometricsIIMeta> =
    t.recursion("MRObservationBiometricsIIMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II|1.0.0"
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
export interface MRObservationBiometricsIICode {
    coding: Array<MRObservationBiometricsIICodeCoding>;
    id?: string;
}

export const MRObservationBiometricsIICode: t.Type<MRObservationBiometricsIICode> =
    t.recursion("MRObservationBiometricsIICode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBiometricsIICodeCoding)
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
export interface MRObservationBiometricsIISubject {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIISubject: t.Type<MRObservationBiometricsIISubject> =
    t.recursion("MRObservationBiometricsIISubject", () =>
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
export interface MRObservationBiometricsIIEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIIEncounter: t.Type<MRObservationBiometricsIIEncounter> =
    t.recursion("MRObservationBiometricsIIEncounter", () =>
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
export interface MRObservationBiometricsIIPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIIPerformer: t.Type<MRObservationBiometricsIIPerformer> =
    t.recursion("MRObservationBiometricsIIPerformer", () =>
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
export interface MRObservationBiometricsIIBodySite {
    coding: Array<MRObservationBiometricsIIBodySiteCoding>;
    id?: string;
    extension?: (Extension | MRObservationBiometricsIIBodySiteIdentifikation)[];
    text?: string;
}

export const MRObservationBiometricsIIBodySite: t.Type<MRObservationBiometricsIIBodySite> =
    t.recursion("MRObservationBiometricsIIBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBiometricsIIBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationBiometricsIIBodySiteIdentifikation>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBiometricsIIBodySiteIdentifikation
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBiometricsIIBodySiteIdentifikation,
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

interface MRObservationBiometricsII {
    resourceType: "Observation";
    meta: MRObservationBiometricsIIMeta;
    status: "final";
    code: MRObservationBiometricsIICode;
    subject: MRObservationBiometricsIISubject;
    encounter: MRObservationBiometricsIIEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationBiometricsIIValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBiometricsIIPerformer>;
    bodySite?: MRObservationBiometricsIIBodySite;
}

const MRObservationBiometricsII: t.Type<MRObservationBiometricsII> = t.recursion(
    "MRObservationBiometricsII",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBiometricsIIMeta,
                    status: Literal("final"),
                    code: MRObservationBiometricsIICode,
                    subject: MRObservationBiometricsIISubject,
                    encounter: MRObservationBiometricsIIEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationBiometricsIIValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBiometricsIIPerformer),
                    bodySite: MRObservationBiometricsIIBodySite
                })
            ])
        )
);

export default MRObservationBiometricsII;
