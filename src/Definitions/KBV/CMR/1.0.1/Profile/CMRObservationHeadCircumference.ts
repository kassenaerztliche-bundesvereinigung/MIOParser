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

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Head_Circumference"

/**
 * Content in other Language.
 */
export interface CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kopfumfang in cm";
    id?: string;
}

export const CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kopfumfang in cm")
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
export interface CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Kopfumfang in cm";
    id?: string;
}

export const CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kopfumfang in cm")
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
export interface CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationHeadCircumferenceCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationHeadCircumferenceCodeCodeSnomedDisplay: t.Type<CMRObservationHeadCircumferenceCodeCodeSnomedDisplay> =
    t.recursion("CMRObservationHeadCircumferenceCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationHeadCircumferenceCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationHeadCircumferenceCodeCodeLoincDisplay: t.Type<CMRObservationHeadCircumferenceCodeCodeLoincDisplay> =
    t.recursion("CMRObservationHeadCircumferenceCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRObservationHeadCircumferenceCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363812007";
    id?: string;
    _display?: CMRObservationHeadCircumferenceCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationHeadCircumferenceCodeCodeSnomed: t.Type<CMRObservationHeadCircumferenceCodeCodeSnomed> =
    t.recursion("CMRObservationHeadCircumferenceCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("363812007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationHeadCircumferenceCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationHeadCircumferenceCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "9843-4";
    id?: string;
    _display?: CMRObservationHeadCircumferenceCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationHeadCircumferenceCodeCodeLoinc: t.Type<CMRObservationHeadCircumferenceCodeCodeLoinc> =
    t.recursion("CMRObservationHeadCircumferenceCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("9843-4")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationHeadCircumferenceCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationHeadCircumferenceValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const CMRObservationHeadCircumferenceValueQuantity: t.Type<CMRObservationHeadCircumferenceValueQuantity> =
    t.recursion("CMRObservationHeadCircumferenceValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("cm"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("cm")
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
export interface CMRObservationHeadCircumferenceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Head_Circumference|1.0.1">;
    id?: string;
}

export const CMRObservationHeadCircumferenceMeta: t.Type<CMRObservationHeadCircumferenceMeta> =
    t.recursion("CMRObservationHeadCircumferenceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Head_Circumference|1.0.1"
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
export interface CMRObservationHeadCircumferenceCode {
    coding: Array<
        | CMRObservationHeadCircumferenceCodeCodeSnomed
        | CMRObservationHeadCircumferenceCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationHeadCircumferenceCode: t.Type<CMRObservationHeadCircumferenceCode> =
    t.recursion("CMRObservationHeadCircumferenceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationHeadCircumferenceCodeCodeSnomed>,
                                t.Type<CMRObservationHeadCircumferenceCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationHeadCircumferenceCodeCodeSnomed,
                            CMRObservationHeadCircumferenceCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationHeadCircumferenceCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationHeadCircumferenceCodeCodeLoinc,
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
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface CMRObservationHeadCircumferenceSubject {
    reference: string;
    id?: string;
}

export const CMRObservationHeadCircumferenceSubject: t.Type<CMRObservationHeadCircumferenceSubject> =
    t.recursion("CMRObservationHeadCircumferenceSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
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
export interface CMRObservationHeadCircumferenceEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationHeadCircumferenceEncounter: t.Type<CMRObservationHeadCircumferenceEncounter> =
    t.recursion("CMRObservationHeadCircumferenceEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
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
export interface CMRObservationHeadCircumferencePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationHeadCircumferencePerformer: t.Type<CMRObservationHeadCircumferencePerformer> =
    t.recursion("CMRObservationHeadCircumferencePerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationHeadCircumference {
    resourceType: "Observation";
    meta: CMRObservationHeadCircumferenceMeta;
    status: "final";
    code: CMRObservationHeadCircumferenceCode;
    subject: CMRObservationHeadCircumferenceSubject;
    encounter: CMRObservationHeadCircumferenceEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationHeadCircumferenceValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationHeadCircumferencePerformer>;
}

const CMRObservationHeadCircumference: t.Type<CMRObservationHeadCircumference> =
    t.recursion("CMRObservationHeadCircumference", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationHeadCircumferenceMeta,
                    status: Literal("final"),
                    code: CMRObservationHeadCircumferenceCode,
                    subject: CMRObservationHeadCircumferenceSubject,
                    encounter: CMRObservationHeadCircumferenceEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationHeadCircumferenceValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationHeadCircumferencePerformer)
                })
            ])
        )
    );

export default CMRObservationHeadCircumference;
