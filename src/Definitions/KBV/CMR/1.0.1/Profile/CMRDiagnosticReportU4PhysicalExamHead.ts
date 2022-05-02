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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kopf";
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kopf")
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364404000";
    id?: string;
    _display?: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCoding: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCoding> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364404000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU4PhysicalExamHeadMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadMeta: t.Type<CMRDiagnosticReportU4PhysicalExamHeadMeta> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head|1.0.1"
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCode {
    coding: Array<CMRDiagnosticReportU4PhysicalExamHeadCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCode: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCode> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU4PhysicalExamHeadCodeCoding
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
export interface CMRDiagnosticReportU4PhysicalExamHeadSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadSubject: t.Type<CMRDiagnosticReportU4PhysicalExamHeadSubject> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadSubject", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamHeadEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadEncounter: t.Type<CMRDiagnosticReportU4PhysicalExamHeadEncounter> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadEncounter", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamHeadPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadPerformer: t.Type<CMRDiagnosticReportU4PhysicalExamHeadPerformer> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadPerformer", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamHeadResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadResult: t.Type<CMRDiagnosticReportU4PhysicalExamHeadResult> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Head|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU4PhysicalExamHead {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU4PhysicalExamHeadMeta;
    status: "final";
    code: CMRDiagnosticReportU4PhysicalExamHeadCode;
    subject: CMRDiagnosticReportU4PhysicalExamHeadSubject;
    encounter: CMRDiagnosticReportU4PhysicalExamHeadEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU4PhysicalExamHeadPerformer>;
    result?: CMRDiagnosticReportU4PhysicalExamHeadResult[];
}

const CMRDiagnosticReportU4PhysicalExamHead: t.Type<CMRDiagnosticReportU4PhysicalExamHead> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHead", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU4PhysicalExamHeadMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU4PhysicalExamHeadCode,
                    subject: CMRDiagnosticReportU4PhysicalExamHeadSubject,
                    encounter: CMRDiagnosticReportU4PhysicalExamHeadEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU4PhysicalExamHeadPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU4PhysicalExamHeadResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU4PhysicalExamHead;
