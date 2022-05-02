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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpermaße:";
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpermaße:")
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpermaße:";
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpermaße:")
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplay: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplay> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplay: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplay> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "248326004";
    id?: string;
    _display?: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed", () =>
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
                    _display: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "29275-5";
    id?: string;
    _display?: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("29275-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2U6BodyMeasuresMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresMeta: t.Type<CMRDiagnosticReportU2U6BodyMeasuresMeta> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Body_Measures|1.0.1"
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
export interface CMRDiagnosticReportU2U6BodyMeasuresCode {
    coding: Array<
        | CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed
        | CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc
    >;
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresCode: t.Type<CMRDiagnosticReportU2U6BodyMeasuresCode> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed>,
                                t.Type<CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed,
                            CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRDiagnosticReportU2U6BodyMeasuresCodeCodeLoinc,
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
export interface CMRDiagnosticReportU2U6BodyMeasuresSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresSubject: t.Type<CMRDiagnosticReportU2U6BodyMeasuresSubject> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresSubject", () =>
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
export interface CMRDiagnosticReportU2U6BodyMeasuresEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresEncounter: t.Type<CMRDiagnosticReportU2U6BodyMeasuresEncounter> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresEncounter", () =>
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
export interface CMRDiagnosticReportU2U6BodyMeasuresPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresPerformer: t.Type<CMRDiagnosticReportU2U6BodyMeasuresPerformer> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresPerformer", () =>
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
export interface CMRDiagnosticReportU2U6BodyMeasuresResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6BodyMeasuresResult: t.Type<CMRDiagnosticReportU2U6BodyMeasuresResult> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasuresResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Head_Circumference|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Body_Weight|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2U6BodyMeasures {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2U6BodyMeasuresMeta;
    status: "final";
    code: CMRDiagnosticReportU2U6BodyMeasuresCode;
    subject: CMRDiagnosticReportU2U6BodyMeasuresSubject;
    encounter: CMRDiagnosticReportU2U6BodyMeasuresEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2U6BodyMeasuresPerformer>;
    result?: CMRDiagnosticReportU2U6BodyMeasuresResult[];
}

const CMRDiagnosticReportU2U6BodyMeasures: t.Type<CMRDiagnosticReportU2U6BodyMeasures> =
    t.recursion("CMRDiagnosticReportU2U6BodyMeasures", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2U6BodyMeasuresMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2U6BodyMeasuresCode,
                    subject: CMRDiagnosticReportU2U6BodyMeasuresSubject,
                    encounter: CMRDiagnosticReportU2U6BodyMeasuresEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRDiagnosticReportU2U6BodyMeasuresPerformer),
                    result: t.array(CMRDiagnosticReportU2U6BodyMeasuresResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU2U6BodyMeasures;
