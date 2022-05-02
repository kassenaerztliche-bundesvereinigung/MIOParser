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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Length"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körperlänge in cm";
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körperlänge in cm";
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplay: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplay> =
    t.recursion("CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplay: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplay> =
    t.recursion("CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRDiagnosticReportU1BirthLengthCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "169886007";
    id?: string;
    _display?: CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeSnomed: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomed> =
    t.recursion("CMRDiagnosticReportU1BirthLengthCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("169886007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1BirthLengthCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRDiagnosticReportU1BirthLengthCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "89269-5";
    id?: string;
    _display?: CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1BirthLengthCodeCodeLoinc: t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoinc> =
    t.recursion("CMRDiagnosticReportU1BirthLengthCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("89269-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1BirthLengthCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1BirthLengthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Length|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthMeta: t.Type<CMRDiagnosticReportU1BirthLengthMeta> =
    t.recursion("CMRDiagnosticReportU1BirthLengthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Length|1.0.1"
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
export interface CMRDiagnosticReportU1BirthLengthCode {
    coding: Array<
        | CMRDiagnosticReportU1BirthLengthCodeCodeSnomed
        | CMRDiagnosticReportU1BirthLengthCodeCodeLoinc
    >;
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthCode: t.Type<CMRDiagnosticReportU1BirthLengthCode> =
    t.recursion("CMRDiagnosticReportU1BirthLengthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeSnomed>,
                                t.Type<CMRDiagnosticReportU1BirthLengthCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRDiagnosticReportU1BirthLengthCodeCodeSnomed,
                            CMRDiagnosticReportU1BirthLengthCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRDiagnosticReportU1BirthLengthCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRDiagnosticReportU1BirthLengthCodeCodeLoinc,
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
export interface CMRDiagnosticReportU1BirthLengthSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthSubject: t.Type<CMRDiagnosticReportU1BirthLengthSubject> =
    t.recursion("CMRDiagnosticReportU1BirthLengthSubject", () =>
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
export interface CMRDiagnosticReportU1BirthLengthEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthEncounter: t.Type<CMRDiagnosticReportU1BirthLengthEncounter> =
    t.recursion("CMRDiagnosticReportU1BirthLengthEncounter", () =>
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
export interface CMRDiagnosticReportU1BirthLengthPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthPerformer: t.Type<CMRDiagnosticReportU1BirthLengthPerformer> =
    t.recursion("CMRDiagnosticReportU1BirthLengthPerformer", () =>
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
export interface CMRDiagnosticReportU1BirthLengthResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthLengthResult: t.Type<CMRDiagnosticReportU1BirthLengthResult> =
    t.recursion("CMRDiagnosticReportU1BirthLengthResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Length|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1BirthLength {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1BirthLengthMeta;
    status: "final";
    code: CMRDiagnosticReportU1BirthLengthCode;
    subject: CMRDiagnosticReportU1BirthLengthSubject;
    encounter: CMRDiagnosticReportU1BirthLengthEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1BirthLengthPerformer>;
    result?: CMRDiagnosticReportU1BirthLengthResult[];
}

const CMRDiagnosticReportU1BirthLength: t.Type<CMRDiagnosticReportU1BirthLength> =
    t.recursion("CMRDiagnosticReportU1BirthLength", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1BirthLengthMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1BirthLengthCode,
                    subject: CMRDiagnosticReportU1BirthLengthSubject,
                    encounter: CMRDiagnosticReportU1BirthLengthEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRDiagnosticReportU1BirthLengthPerformer),
                    result: t.array(CMRDiagnosticReportU1BirthLengthResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1BirthLength;
