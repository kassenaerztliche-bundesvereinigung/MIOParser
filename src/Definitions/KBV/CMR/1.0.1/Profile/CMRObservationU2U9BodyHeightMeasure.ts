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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure"

/**
 * Content in other Language.
 */
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körperlänge in cm";
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körperlänge in cm")
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
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körperlänge in cm";
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körperlänge in cm")
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
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplay: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplay> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplay: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplay> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "248334005";
    id?: string;
    _display?: CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("248334005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U9BodyHeightMeasureCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8302-2";
    id?: string;
    _display?: CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc: t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("8302-2")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U9BodyHeightMeasureCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU2U9BodyHeightMeasureValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureValueQuantity: t.Type<CMRObservationU2U9BodyHeightMeasureValueQuantity> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureValueQuantity", () =>
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
export interface CMRObservationU2U9BodyHeightMeasureMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure|1.0.1">;
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureMeta: t.Type<CMRObservationU2U9BodyHeightMeasureMeta> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure|1.0.1"
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
export interface CMRObservationU2U9BodyHeightMeasureCode {
    coding: Array<
        | CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed
        | CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureCode: t.Type<CMRObservationU2U9BodyHeightMeasureCode> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed>,
                                t.Type<CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed,
                            CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU2U9BodyHeightMeasureCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU2U9BodyHeightMeasureCodeCodeLoinc,
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
export interface CMRObservationU2U9BodyHeightMeasureSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureSubject: t.Type<CMRObservationU2U9BodyHeightMeasureSubject> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureSubject", () =>
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
export interface CMRObservationU2U9BodyHeightMeasureEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasureEncounter: t.Type<CMRObservationU2U9BodyHeightMeasureEncounter> =
    t.recursion("CMRObservationU2U9BodyHeightMeasureEncounter", () =>
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
export interface CMRObservationU2U9BodyHeightMeasurePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9BodyHeightMeasurePerformer: t.Type<CMRObservationU2U9BodyHeightMeasurePerformer> =
    t.recursion("CMRObservationU2U9BodyHeightMeasurePerformer", () =>
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

interface CMRObservationU2U9BodyHeightMeasure {
    resourceType: "Observation";
    meta: CMRObservationU2U9BodyHeightMeasureMeta;
    status: "final";
    code: CMRObservationU2U9BodyHeightMeasureCode;
    subject: CMRObservationU2U9BodyHeightMeasureSubject;
    encounter: CMRObservationU2U9BodyHeightMeasureEncounter;
    effectiveDateTime: string;
    valueQuantity: CMRObservationU2U9BodyHeightMeasureValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2U9BodyHeightMeasurePerformer>;
}

const CMRObservationU2U9BodyHeightMeasure: t.Type<CMRObservationU2U9BodyHeightMeasure> =
    t.recursion("CMRObservationU2U9BodyHeightMeasure", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2U9BodyHeightMeasureMeta,
                    status: Literal("final"),
                    code: CMRObservationU2U9BodyHeightMeasureCode,
                    subject: CMRObservationU2U9BodyHeightMeasureSubject,
                    encounter: CMRObservationU2U9BodyHeightMeasureEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: CMRObservationU2U9BodyHeightMeasureValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU2U9BodyHeightMeasurePerformer)
                })
            ])
        )
    );

export default CMRObservationU2U9BodyHeightMeasure;
