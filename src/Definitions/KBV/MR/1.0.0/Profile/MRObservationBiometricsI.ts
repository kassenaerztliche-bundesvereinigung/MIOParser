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

import AdditionalComment from "../../../../../Definitions/KBVBase/1.1.0/Extension/AdditionalComment";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRBiometricsIVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRBiometricsI";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I"

/**
 * Content in other Language.
 */
export interface MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent {
    url: "content";
    valueString: "Angaben zum Fötus/Kind";
    id?: string;
}

export const MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent: t.Type<MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent> =
    t.recursion(
        "MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent",
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
export interface MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
    )[];
}

export const MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed: t.Type<MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed> =
    t.recursion(
        "MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed",
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
                                    t.Type<MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent,
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
export interface MRObservationBiometricsICodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBiometricsICodeCodingDisplay: t.Type<MRObservationBiometricsICodeCodingDisplay> =
    t.recursion("MRObservationBiometricsICodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBiometricsICodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBiometricsIBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed
    )[];
    value?: string;
}

export const MRObservationBiometricsIBodySiteCodingDisplay: t.Type<MRObservationBiometricsIBodySiteCodingDisplay> =
    t.recursion("MRObservationBiometricsIBodySiteCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBiometricsIBodySiteCodingDisplayAnzeigenameBodySiteSnomed,
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
export interface MRObservationBiometricsICodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRBiometricsIVS;
    id?: string;
    _display?: MRObservationBiometricsICodeCodingDisplay;
    display?: string;
}

export const MRObservationBiometricsICodeCoding: t.Type<MRObservationBiometricsICodeCoding> =
    t.recursion("MRObservationBiometricsICodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRBiometricsIVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBiometricsICodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBiometricsIValueQuantity {
    value: number;
    unit: "mm";
    system: "http://unitsofmeasure.org";
    code: "mm";
    id?: string;
}

export const MRObservationBiometricsIValueQuantity: t.Type<MRObservationBiometricsIValueQuantity> =
    t.recursion("MRObservationBiometricsIValueQuantity", () =>
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
export interface MRObservationBiometricsIBodySiteCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364599001";
    id?: string;
    _display?: MRObservationBiometricsIBodySiteCodingDisplay;
    display?: string;
}

export const MRObservationBiometricsIBodySiteCoding: t.Type<MRObservationBiometricsIBodySiteCoding> =
    t.recursion("MRObservationBiometricsIBodySiteCoding", () =>
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
                    _display: MRObservationBiometricsIBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationBiometricsIMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I|1.0.0">;
    id?: string;
}

export const MRObservationBiometricsIMeta: t.Type<MRObservationBiometricsIMeta> =
    t.recursion("MRObservationBiometricsIMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I|1.0.0"
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
export interface MRObservationBiometricsICode {
    coding: Array<MRObservationBiometricsICodeCoding>;
    id?: string;
}

export const MRObservationBiometricsICode: t.Type<MRObservationBiometricsICode> =
    t.recursion("MRObservationBiometricsICode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBiometricsICodeCoding)
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
export interface MRObservationBiometricsISubject {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsISubject: t.Type<MRObservationBiometricsISubject> =
    t.recursion("MRObservationBiometricsISubject", () =>
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
export interface MRObservationBiometricsIEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIEncounter: t.Type<MRObservationBiometricsIEncounter> =
    t.recursion("MRObservationBiometricsIEncounter", () =>
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
export interface MRObservationBiometricsIPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBiometricsIPerformer: t.Type<MRObservationBiometricsIPerformer> =
    t.recursion("MRObservationBiometricsIPerformer", () =>
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
export interface MRObservationBiometricsIBodySite {
    coding: Array<MRObservationBiometricsIBodySiteCoding>;
    id?: string;
    extension?: (Extension | AdditionalComment)[];
    text?: string;
}

export const MRObservationBiometricsIBodySite: t.Type<MRObservationBiometricsIBodySite> =
    t.recursion("MRObservationBiometricsIBodySite", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBiometricsIBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<[t.Type<Extension>, t.Type<AdditionalComment>]>,
                        t.Any
                    >(
                        t.union([Extension, AdditionalComment]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: AdditionalComment,
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

interface MRObservationBiometricsI {
    resourceType: "Observation";
    meta: MRObservationBiometricsIMeta;
    status: "final";
    code: MRObservationBiometricsICode;
    subject: MRObservationBiometricsISubject;
    encounter: MRObservationBiometricsIEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationBiometricsIValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBiometricsIPerformer>;
    bodySite?: MRObservationBiometricsIBodySite;
}

const MRObservationBiometricsI: t.Type<MRObservationBiometricsI> = t.recursion(
    "MRObservationBiometricsI",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBiometricsIMeta,
                    status: Literal("final"),
                    code: MRObservationBiometricsICode,
                    subject: MRObservationBiometricsISubject,
                    encounter: MRObservationBiometricsIEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationBiometricsIValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBiometricsIPerformer),
                    bodySite: MRObservationBiometricsIBodySite
                })
            ])
        )
);

export default MRObservationBiometricsI;
