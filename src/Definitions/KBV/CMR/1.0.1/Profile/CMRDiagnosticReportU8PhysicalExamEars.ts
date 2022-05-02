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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ohren";
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Ohren")
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "47078008";
    id?: string;
    _display?: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCoding: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCoding> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("47078008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU8PhysicalExamEarsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsMeta: t.Type<CMRDiagnosticReportU8PhysicalExamEarsMeta> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears|1.0.1"
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCode {
    coding: Array<CMRDiagnosticReportU8PhysicalExamEarsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCode: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCode> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU8PhysicalExamEarsCodeCoding
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
export interface CMRDiagnosticReportU8PhysicalExamEarsSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsSubject: t.Type<CMRDiagnosticReportU8PhysicalExamEarsSubject> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsSubject", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamEarsEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsEncounter: t.Type<CMRDiagnosticReportU8PhysicalExamEarsEncounter> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsEncounter", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamEarsPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsPerformer: t.Type<CMRDiagnosticReportU8PhysicalExamEarsPerformer> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsPerformer", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamEarsResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsResult: t.Type<CMRDiagnosticReportU8PhysicalExamEarsResult> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Ears|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU8PhysicalExamEars {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU8PhysicalExamEarsMeta;
    status: "final";
    code: CMRDiagnosticReportU8PhysicalExamEarsCode;
    subject: CMRDiagnosticReportU8PhysicalExamEarsSubject;
    encounter: CMRDiagnosticReportU8PhysicalExamEarsEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU8PhysicalExamEarsPerformer>;
    result?: CMRDiagnosticReportU8PhysicalExamEarsResult[];
}

const CMRDiagnosticReportU8PhysicalExamEars: t.Type<CMRDiagnosticReportU8PhysicalExamEars> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEars", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU8PhysicalExamEarsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU8PhysicalExamEarsCode,
                    subject: CMRDiagnosticReportU8PhysicalExamEarsSubject,
                    encounter: CMRDiagnosticReportU8PhysicalExamEarsEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU8PhysicalExamEarsPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU8PhysicalExamEarsResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU8PhysicalExamEars;
