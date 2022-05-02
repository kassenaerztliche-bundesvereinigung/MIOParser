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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Abdomen, Genitale (inkl. Analregion)";
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364446009";
    id?: string;
    _display?: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCoding> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCoding", () =>
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
                        CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsMeta: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsMeta> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.1"
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCode: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCode> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsSubject: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsSubject> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsSubject", () =>
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsEncounter: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsEncounter> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsEncounter", () =>
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsPerformer: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsPerformer> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsPerformer", () =>
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
export interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsResult: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsResult> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U3_Physical_Exam_Abdomen_Genitals|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitals {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCode;
    subject: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsSubject;
    encounter: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsPerformer>;
    result?: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsResult[];
}

const CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitals: t.Type<CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitals> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitals", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsCode,
                    subject: CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsSubject,
                    encounter:
                        CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitalsResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitals;
