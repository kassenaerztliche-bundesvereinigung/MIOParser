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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Body_Measures"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpermaße";
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpermaße")
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
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpermaße";
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpermaße")
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
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplay: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplay> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplay: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplay> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "248326004";
    id?: string;
    _display?: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("248326004")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "29275-5";
    id?: string;
    _display?: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplay;
    display?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("29275-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Body_Measures|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresMeta: t.Type<CMRDiagnosticReportPercentileBodyMeasuresMeta> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Body_Measures|1.0.1"
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
 * A code or name that describes this diagnostic report.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresCode {
    coding: Array<
        | CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed
        | CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc
    >;
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresCode: t.Type<CMRDiagnosticReportPercentileBodyMeasuresCode> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed>,
                                t.Type<CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed,
                            CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRDiagnosticReportPercentileBodyMeasuresCodeCodeLoinc,
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
 * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresSubject: t.Type<CMRDiagnosticReportPercentileBodyMeasuresSubject> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresSubject", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresEncounter: t.Type<CMRDiagnosticReportPercentileBodyMeasuresEncounter> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresEncounter", () =>
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
 * The diagnostic service that is responsible for issuing the report.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresPerformer: t.Type<CMRDiagnosticReportPercentileBodyMeasuresPerformer> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresPerformer", () =>
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
 * [Observations](observation.html)  that are part of this diagnostic report.
 */
export interface CMRDiagnosticReportPercentileBodyMeasuresResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileBodyMeasuresResult: t.Type<CMRDiagnosticReportPercentileBodyMeasuresResult> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasuresResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Head_Circumference|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Body_Weight|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Body_Weight|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_BMI|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportPercentileBodyMeasures {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportPercentileBodyMeasuresMeta;
    status: "final";
    code: CMRDiagnosticReportPercentileBodyMeasuresCode;
    subject: CMRDiagnosticReportPercentileBodyMeasuresSubject;
    encounter: CMRDiagnosticReportPercentileBodyMeasuresEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportPercentileBodyMeasuresPerformer>;
    result?: CMRDiagnosticReportPercentileBodyMeasuresResult[];
}

const CMRDiagnosticReportPercentileBodyMeasures: t.Type<CMRDiagnosticReportPercentileBodyMeasures> =
    t.recursion("CMRDiagnosticReportPercentileBodyMeasures", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportPercentileBodyMeasuresMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportPercentileBodyMeasuresCode,
                    subject: CMRDiagnosticReportPercentileBodyMeasuresSubject,
                    encounter: CMRDiagnosticReportPercentileBodyMeasuresEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportPercentileBodyMeasuresPerformer
                    ),
                    result: t.array(CMRDiagnosticReportPercentileBodyMeasuresResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportPercentileBodyMeasures;
