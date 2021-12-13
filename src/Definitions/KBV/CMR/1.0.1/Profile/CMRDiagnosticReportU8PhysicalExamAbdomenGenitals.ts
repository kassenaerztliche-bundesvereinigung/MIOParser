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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Abdomen, Genitale (inkl. Analregion)";
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Abdomen, Genitale (inkl. Analregion)")
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364446009";
    id?: string;
    _display?: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCoding> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364446009")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Abdomen_Genitals|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsMeta: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsMeta> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Abdomen_Genitals|1.0.1"
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCode: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCode> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsSubject: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsSubject> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsSubject", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsEncounter: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsEncounter> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsEncounter", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsPerformer: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsPerformer> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsPerformer", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsResult: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsResult> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Abdomen_Genitals|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU8PhysicalExamAbdomenGenitals {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCode;
    subject: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsSubject;
    encounter: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsPerformer>;
    result?: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsResult[];
}

const CMRDiagnosticReportU8PhysicalExamAbdomenGenitals: t.Type<CMRDiagnosticReportU8PhysicalExamAbdomenGenitals> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamAbdomenGenitals", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsCode,
                    subject: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsSubject,
                    encounter: CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU8PhysicalExamAbdomenGenitalsResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU8PhysicalExamAbdomenGenitals;
