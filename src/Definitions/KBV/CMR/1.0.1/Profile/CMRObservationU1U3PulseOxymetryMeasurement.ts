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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRObservationStatusVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRObservationStatus";
import CMRPulseOxymetryScreeningDataAbsentReasonVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRPulseOxymetryScreeningDataAbsentReason";
import CMRPulseOxymetryScreeningMeasurementTypeVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRPulseOxymetryScreeningMeasurementType";
import CMRU1U3PulseOxymetryMeasurementVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU1U3PulseOxymetryMeasurement";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pulse_Oxymetry_Measurement"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent: t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent",
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
export interface CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent: t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent",
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
export interface CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
    )[];
}

export const CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed: t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed",
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
                                    t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent,
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
export interface CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent
    )[];
}

export const CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed: t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed",
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
                                    t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent,
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
export interface CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplay: t.Type<CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplay> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplay: t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplay> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed,
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
export interface CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplay: t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplay> =
    t.recursion(
        "CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplayAnzeigenameInterpretationSnomed,
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
export interface CMRObservationU1U3PulseOxymetryMeasurementCodeCoding {
    system: string;
    version: string;
    code: CMRPulseOxymetryScreeningMeasurementTypeVS;
    id?: string;
    _display?: CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementCodeCoding: t.Type<CMRObservationU1U3PulseOxymetryMeasurementCodeCoding> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRPulseOxymetryScreeningMeasurementTypeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3PulseOxymetryMeasurementCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U3PulseOxymetryMeasurementValueQuantity {
    value: number;
    unit: "%";
    system: "http://unitsofmeasure.org";
    code: "%";
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementValueQuantity: t.Type<CMRObservationU1U3PulseOxymetryMeasurementValueQuantity> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("%"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("%")
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
export interface CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCoding {
    system: string;
    version: string;
    code: CMRPulseOxymetryScreeningDataAbsentReasonVS;
    id?: string;
    _display?: CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCoding: t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCoding> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRPulseOxymetryScreeningDataAbsentReasonVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3PulseOxymetryMeasurementInterpretationCoding {
    system: string;
    version: string;
    code: CMRU1U3PulseOxymetryMeasurementVS;
    id?: string;
    _display?: CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementInterpretationCoding: t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCoding> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementInterpretationCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU1U3PulseOxymetryMeasurementVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU1U3PulseOxymetryMeasurementInterpretationCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U3PulseOxymetryMeasurementMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pulse_Oxymetry_Measurement|1.0.1">;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementMeta: t.Type<CMRObservationU1U3PulseOxymetryMeasurementMeta> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pulse_Oxymetry_Measurement|1.0.1"
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
export interface CMRObservationU1U3PulseOxymetryMeasurementCode {
    coding: Array<CMRObservationU1U3PulseOxymetryMeasurementCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementCode: t.Type<CMRObservationU1U3PulseOxymetryMeasurementCode> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3PulseOxymetryMeasurementCodeCoding
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
export interface CMRObservationU1U3PulseOxymetryMeasurementSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementSubject: t.Type<CMRObservationU1U3PulseOxymetryMeasurementSubject> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementSubject", () =>
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
export interface CMRObservationU1U3PulseOxymetryMeasurementEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementEncounter: t.Type<CMRObservationU1U3PulseOxymetryMeasurementEncounter> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementEncounter", () =>
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
export interface CMRObservationU1U3PulseOxymetryMeasurementPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementPerformer: t.Type<CMRObservationU1U3PulseOxymetryMeasurementPerformer> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementPerformer", () =>
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

/**
 * Provides a reason why the expected value in the element Observation.value[x] is missing.
 */
export interface CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReason {
    coding: Array<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCoding>;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReason: t.Type<CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReason> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A categorical assessment of an observation value.  For example, high, low, normal.
 */
export interface CMRObservationU1U3PulseOxymetryMeasurementInterpretation {
    coding: Array<CMRObservationU1U3PulseOxymetryMeasurementInterpretationCoding>;
    id?: string;
}

export const CMRObservationU1U3PulseOxymetryMeasurementInterpretation: t.Type<CMRObservationU1U3PulseOxymetryMeasurementInterpretation> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurementInterpretation", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3PulseOxymetryMeasurementInterpretationCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU1U3PulseOxymetryMeasurement {
    resourceType: "Observation";
    meta: CMRObservationU1U3PulseOxymetryMeasurementMeta;
    status: CMRObservationStatusVS;
    code: CMRObservationU1U3PulseOxymetryMeasurementCode;
    subject: CMRObservationU1U3PulseOxymetryMeasurementSubject;
    encounter: CMRObservationU1U3PulseOxymetryMeasurementEncounter;
    effectiveDateTime: string;
    interpretation: Array<CMRObservationU1U3PulseOxymetryMeasurementInterpretation>;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3PulseOxymetryMeasurementPerformer>;
    valueQuantity?: CMRObservationU1U3PulseOxymetryMeasurementValueQuantity;
    dataAbsentReason?: CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReason;
}

const CMRObservationU1U3PulseOxymetryMeasurement: t.Type<CMRObservationU1U3PulseOxymetryMeasurement> =
    t.recursion("CMRObservationU1U3PulseOxymetryMeasurement", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3PulseOxymetryMeasurementMeta,
                    status: CMRObservationStatusVS,
                    code: CMRObservationU1U3PulseOxymetryMeasurementCode,
                    subject: CMRObservationU1U3PulseOxymetryMeasurementSubject,
                    encounter: CMRObservationU1U3PulseOxymetryMeasurementEncounter,
                    effectiveDateTime: SCALARDateTime,
                    interpretation: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3PulseOxymetryMeasurementInterpretation
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U3PulseOxymetryMeasurementPerformer
                    ),
                    valueQuantity:
                        CMRObservationU1U3PulseOxymetryMeasurementValueQuantity,
                    dataAbsentReason:
                        CMRObservationU1U3PulseOxymetryMeasurementDataAbsentReason
                })
            ])
        )
    );

export default CMRObservationU1U3PulseOxymetryMeasurement;
