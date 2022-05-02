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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bewegungsapparat (Knochen, Muskeln, Nerven)";
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Bewegungsapparat (Knochen, Muskeln, Nerven)"
                        )
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "106029005";
    id?: string;
    _display?: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("106029005")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCode: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemSubject: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemSubject> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemSubject", () =>
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemEncounter: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemEncounter> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemEncounter", () =>
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemPerformer: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemPerformer> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemPerformer", () =>
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
export interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemResult: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemResult> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Musculoskeletal_System|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystem {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCode;
    subject: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemSubject;
    encounter: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemPerformer>;
    result?: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemResult[];
}

const CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystem: t.Type<CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemCode,
                    subject:
                        CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemSubject,
                    encounter:
                        CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystemResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystem;
