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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bewegungsapparat (Knochen, Muskeln, Nerven)";
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "106029005";
    id?: string;
    _display?: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCoding", () =>
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
                        CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCode: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemSubject: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemSubject> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemSubject", () =>
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemEncounter: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemEncounter> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemEncounter", () =>
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemPerformer: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemPerformer> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemPerformer", () =>
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
export interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemResult: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemResult> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_Physical_Exam_Musculoskeletal_System|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystem {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCode;
    subject: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemSubject;
    encounter: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemPerformer>;
    result?: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemResult[];
}

const CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystem: t.Type<CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemCode,
                    subject:
                        CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemSubject,
                    encounter:
                        CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystemResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystem;
