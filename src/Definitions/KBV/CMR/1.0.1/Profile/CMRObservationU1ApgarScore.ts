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
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import ApgarScoreIdentifierLoincVS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/ApgarScoreIdentifierLoinc";
import ApgarScoreIdentifierSnomedVS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/ApgarScoreIdentifierSnomed";
import ApgarScoreValueVS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/ApgarScoreValue";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Apgar_Score"

/**
 * Content in other Language.
 */
export interface CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    t.Type<CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface CMRObservationU1ApgarScoreCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1ApgarScoreCodeCodeSnomedDisplay: t.Type<CMRObservationU1ApgarScoreCodeCodeSnomedDisplay> =
    t.recursion("CMRObservationU1ApgarScoreCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1ApgarScoreCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1ApgarScoreCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRObservationU1ApgarScoreCodeCodeLoincDisplay: t.Type<CMRObservationU1ApgarScoreCodeCodeLoincDisplay> =
    t.recursion("CMRObservationU1ApgarScoreCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1ApgarScoreCodeCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["0", "*"],
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
export interface CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplay: t.Type<CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplay> =
    t.recursion("CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface CMRObservationU1ApgarScoreCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: ApgarScoreIdentifierSnomedVS;
    id?: string;
    _display?: CMRObservationU1ApgarScoreCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU1ApgarScoreCodeCodeSnomed: t.Type<CMRObservationU1ApgarScoreCodeCodeSnomed> =
    t.recursion("CMRObservationU1ApgarScoreCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: ApgarScoreIdentifierSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1ApgarScoreCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1ApgarScoreCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: ApgarScoreIdentifierLoincVS;
    id?: string;
    _display?: CMRObservationU1ApgarScoreCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU1ApgarScoreCodeCodeLoinc: t.Type<CMRObservationU1ApgarScoreCodeCodeLoinc> =
    t.recursion("CMRObservationU1ApgarScoreCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: ApgarScoreIdentifierLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1ApgarScoreCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1ApgarScoreValueCodeableConceptCoding {
    system: string;
    version: string;
    code: ApgarScoreValueVS;
    id?: string;
    _display?: CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRObservationU1ApgarScoreValueCodeableConceptCoding: t.Type<CMRObservationU1ApgarScoreValueCodeableConceptCoding> =
    t.recursion("CMRObservationU1ApgarScoreValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: ApgarScoreValueVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1ApgarScoreValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1ApgarScoreValueCodeableConcept {
    coding: Array<CMRObservationU1ApgarScoreValueCodeableConceptCoding>;
    id?: string;
}

export const CMRObservationU1ApgarScoreValueCodeableConcept: t.Type<CMRObservationU1ApgarScoreValueCodeableConcept> =
    t.recursion("CMRObservationU1ApgarScoreValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1ApgarScoreValueCodeableConceptCoding
                    )
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
export interface CMRObservationU1ApgarScoreMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Apgar_Score|1.0.1">;
    id?: string;
}

export const CMRObservationU1ApgarScoreMeta: t.Type<CMRObservationU1ApgarScoreMeta> =
    t.recursion("CMRObservationU1ApgarScoreMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Apgar_Score|1.0.1"
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
export interface CMRObservationU1ApgarScoreCode {
    coding: Array<
        CMRObservationU1ApgarScoreCodeCodeSnomed | CMRObservationU1ApgarScoreCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU1ApgarScoreCode: t.Type<CMRObservationU1ApgarScoreCode> =
    t.recursion("CMRObservationU1ApgarScoreCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU1ApgarScoreCodeCodeSnomed>,
                                t.Type<CMRObservationU1ApgarScoreCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU1ApgarScoreCodeCodeSnomed,
                            CMRObservationU1ApgarScoreCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU1ApgarScoreCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU1ApgarScoreCodeCodeLoinc,
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
export interface CMRObservationU1ApgarScoreSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1ApgarScoreSubject: t.Type<CMRObservationU1ApgarScoreSubject> =
    t.recursion("CMRObservationU1ApgarScoreSubject", () =>
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
export interface CMRObservationU1ApgarScoreEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1ApgarScoreEncounter: t.Type<CMRObservationU1ApgarScoreEncounter> =
    t.recursion("CMRObservationU1ApgarScoreEncounter", () =>
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
export interface CMRObservationU1ApgarScorePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1ApgarScorePerformer: t.Type<CMRObservationU1ApgarScorePerformer> =
    t.recursion("CMRObservationU1ApgarScorePerformer", () =>
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

interface CMRObservationU1ApgarScore {
    resourceType: "Observation";
    meta: CMRObservationU1ApgarScoreMeta;
    status: "final";
    code: CMRObservationU1ApgarScoreCode;
    subject: CMRObservationU1ApgarScoreSubject;
    encounter: CMRObservationU1ApgarScoreEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: CMRObservationU1ApgarScoreValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1ApgarScorePerformer>;
}

const CMRObservationU1ApgarScore: t.Type<CMRObservationU1ApgarScore> = t.recursion(
    "CMRObservationU1ApgarScore",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1ApgarScoreMeta,
                    status: Literal("final"),
                    code: CMRObservationU1ApgarScoreCode,
                    subject: CMRObservationU1ApgarScoreSubject,
                    encounter: CMRObservationU1ApgarScoreEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept: CMRObservationU1ApgarScoreValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1ApgarScorePerformer)
                })
            ])
        )
);

export default CMRObservationU1ApgarScore;
