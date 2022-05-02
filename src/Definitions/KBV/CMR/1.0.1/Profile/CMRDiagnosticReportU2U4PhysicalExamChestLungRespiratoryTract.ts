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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Thorax, Lunge, Atemwege";
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364048003";
    id?: string;
    _display?: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCoding> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCoding",
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
                            CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractMeta> =
    t.recursion("CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCode> =
    t.recursion("CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractSubject> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractSubject",
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractEncounter> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractEncounter",
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractPerformer> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractPerformer",
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
export interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractResult: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractResult> =
    t.recursion(
        "CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractResult",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTract {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractPerformer>;
    result?: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractResult[];
}

const CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTract: t.Type<CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTract> =
    t.recursion("CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTract", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractCode,
                    subject:
                        CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractSubject,
                    encounter:
                        CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTractResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTract;
