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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bewegungsapparat (Knochen, Muskeln, Nerven)";
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "106029005";
    id?: string;
    _display?: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCoding", () =>
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
                        CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCode: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemSubject: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemSubject> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemSubject", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemEncounter: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemEncounter> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemEncounter", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemPerformer: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemPerformer> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemPerformer", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemResult: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemResult> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Musculoskeletal_System|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystem {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCode;
    subject: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemSubject;
    encounter: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemPerformer>;
    result?: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemResult[];
}

const CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystem: t.Type<CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemCode,
                    subject:
                        CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemSubject,
                    encounter:
                        CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystemResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystem;
