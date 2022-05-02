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
import HeadCircumferenceSnomedVS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/HeadCircumferenceSnomed";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference"

/**
 * Content in other Language.
 */
export interface MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationHeadCircumferenceCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationHeadCircumferenceCodeCodeSnomedDisplay: t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplay> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationHeadCircumferenceCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationHeadCircumferenceCodeCodeLoincDisplay: t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplay> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationHeadCircumferenceCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: HeadCircumferenceSnomedVS;
    id?: string;
    _display?: MRObservationHeadCircumferenceCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationHeadCircumferenceCodeCodeSnomed: t.Type<MRObservationHeadCircumferenceCodeCodeSnomed> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: HeadCircumferenceSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeadCircumferenceCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeadCircumferenceCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "9843-4";
    id?: string;
    _display?: MRObservationHeadCircumferenceCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationHeadCircumferenceCodeCodeLoinc: t.Type<MRObservationHeadCircumferenceCodeCodeLoinc> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("9843-4")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeadCircumferenceCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationHeadCircumferenceValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const MRObservationHeadCircumferenceValueQuantity: t.Type<MRObservationHeadCircumferenceValueQuantity> =
    t.recursion("MRObservationHeadCircumferenceValueQuantity", () =>
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
export interface MRObservationHeadCircumferenceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.0.0">;
    id?: string;
}

export const MRObservationHeadCircumferenceMeta: t.Type<MRObservationHeadCircumferenceMeta> =
    t.recursion("MRObservationHeadCircumferenceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.0.0"
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
export interface MRObservationHeadCircumferenceCode {
    coding: Array<
        | MRObservationHeadCircumferenceCodeCodeSnomed
        | MRObservationHeadCircumferenceCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationHeadCircumferenceCode: t.Type<MRObservationHeadCircumferenceCode> =
    t.recursion("MRObservationHeadCircumferenceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationHeadCircumferenceCodeCodeSnomed>,
                                t.Type<MRObservationHeadCircumferenceCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationHeadCircumferenceCodeCodeSnomed,
                            MRObservationHeadCircumferenceCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationHeadCircumferenceCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationHeadCircumferenceCodeCodeLoinc,
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
export interface MRObservationHeadCircumferenceSubject {
    reference: string;
    id?: string;
}

export const MRObservationHeadCircumferenceSubject: t.Type<MRObservationHeadCircumferenceSubject> =
    t.recursion("MRObservationHeadCircumferenceSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
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
export interface MRObservationHeadCircumferenceEncounter {
    reference: string;
    id?: string;
}

export const MRObservationHeadCircumferenceEncounter: t.Type<MRObservationHeadCircumferenceEncounter> =
    t.recursion("MRObservationHeadCircumferenceEncounter", () =>
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
export interface MRObservationHeadCircumferencePerformer {
    reference: string;
    id?: string;
}

export const MRObservationHeadCircumferencePerformer: t.Type<MRObservationHeadCircumferencePerformer> =
    t.recursion("MRObservationHeadCircumferencePerformer", () =>
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

interface MRObservationHeadCircumference {
    resourceType: "Observation";
    meta: MRObservationHeadCircumferenceMeta;
    status: "final";
    code: MRObservationHeadCircumferenceCode;
    subject: MRObservationHeadCircumferenceSubject;
    encounter: MRObservationHeadCircumferenceEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationHeadCircumferenceValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeadCircumferencePerformer>;
}

const MRObservationHeadCircumference: t.Type<MRObservationHeadCircumference> =
    t.recursion("MRObservationHeadCircumference", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeadCircumferenceMeta,
                    status: Literal("final"),
                    code: MRObservationHeadCircumferenceCode,
                    subject: MRObservationHeadCircumferenceSubject,
                    encounter: MRObservationHeadCircumferenceEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationHeadCircumferenceValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationHeadCircumferencePerformer)
                })
            ])
        )
    );

export default MRObservationHeadCircumference;
