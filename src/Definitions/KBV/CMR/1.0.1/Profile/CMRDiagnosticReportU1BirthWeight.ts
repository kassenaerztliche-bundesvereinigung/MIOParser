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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Weight"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpergewicht in g";
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergewicht in g")
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
export interface CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpergewicht in g";
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergewicht in g")
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
export interface CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplay: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplay> =
    t.recursion("CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplay: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplay> =
    t.recursion("CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRDiagnosticReportU1BirthWeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364589006";
    id?: string;
    _display?: CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeSnomed: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomed> =
    t.recursion("CMRDiagnosticReportU1BirthWeightCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364589006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1BirthWeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRDiagnosticReportU1BirthWeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8339-4";
    id?: string;
    _display?: CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1BirthWeightCodeCodeLoinc: t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoinc> =
    t.recursion("CMRDiagnosticReportU1BirthWeightCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("8339-4")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1BirthWeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1BirthWeightMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Weight|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightMeta: t.Type<CMRDiagnosticReportU1BirthWeightMeta> =
    t.recursion("CMRDiagnosticReportU1BirthWeightMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Weight|1.0.1"
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
export interface CMRDiagnosticReportU1BirthWeightCode {
    coding: Array<
        | CMRDiagnosticReportU1BirthWeightCodeCodeSnomed
        | CMRDiagnosticReportU1BirthWeightCodeCodeLoinc
    >;
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightCode: t.Type<CMRDiagnosticReportU1BirthWeightCode> =
    t.recursion("CMRDiagnosticReportU1BirthWeightCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeSnomed>,
                                t.Type<CMRDiagnosticReportU1BirthWeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRDiagnosticReportU1BirthWeightCodeCodeSnomed,
                            CMRDiagnosticReportU1BirthWeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRDiagnosticReportU1BirthWeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRDiagnosticReportU1BirthWeightCodeCodeLoinc,
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
export interface CMRDiagnosticReportU1BirthWeightSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightSubject: t.Type<CMRDiagnosticReportU1BirthWeightSubject> =
    t.recursion("CMRDiagnosticReportU1BirthWeightSubject", () =>
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
export interface CMRDiagnosticReportU1BirthWeightEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightEncounter: t.Type<CMRDiagnosticReportU1BirthWeightEncounter> =
    t.recursion("CMRDiagnosticReportU1BirthWeightEncounter", () =>
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
export interface CMRDiagnosticReportU1BirthWeightPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightPerformer: t.Type<CMRDiagnosticReportU1BirthWeightPerformer> =
    t.recursion("CMRDiagnosticReportU1BirthWeightPerformer", () =>
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
export interface CMRDiagnosticReportU1BirthWeightResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthWeightResult: t.Type<CMRDiagnosticReportU1BirthWeightResult> =
    t.recursion("CMRDiagnosticReportU1BirthWeightResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Weight|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1BirthWeight {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1BirthWeightMeta;
    status: "final";
    code: CMRDiagnosticReportU1BirthWeightCode;
    subject: CMRDiagnosticReportU1BirthWeightSubject;
    encounter: CMRDiagnosticReportU1BirthWeightEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1BirthWeightPerformer>;
    result?: Array<CMRDiagnosticReportU1BirthWeightResult>;
}

const CMRDiagnosticReportU1BirthWeight: t.Type<CMRDiagnosticReportU1BirthWeight> =
    t.recursion("CMRDiagnosticReportU1BirthWeight", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1BirthWeightMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1BirthWeightCode,
                    subject: CMRDiagnosticReportU1BirthWeightSubject,
                    encounter: CMRDiagnosticReportU1BirthWeightEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRDiagnosticReportU1BirthWeightPerformer),
                    result: MaxArray(1, CMRDiagnosticReportU1BirthWeightResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1BirthWeight;
