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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Thorax, Lunge, Atemwege";
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Thorax, Lunge, Atemwege")
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364048003";
    id?: string;
    _display?: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCoding> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("364048003")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractMeta> =
    t.recursion("CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCode> =
    t.recursion("CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractSubject> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractSubject",
        () =>
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractEncounter> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractEncounter",
        () =>
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractPerformer> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractPerformer",
        () =>
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
export interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractResult: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractResult> =
    t.recursion(
        "CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractResult",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTract {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractPerformer>;
    result?: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractResult[];
}

const CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTract: t.Type<CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTract> =
    t.recursion("CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTract", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractCode,
                    subject:
                        CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractSubject,
                    encounter:
                        CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTractResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTract;
