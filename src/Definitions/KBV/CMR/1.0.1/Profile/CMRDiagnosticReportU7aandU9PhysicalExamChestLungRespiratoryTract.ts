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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Thorax, Lunge, Atemwege";
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364048003";
    id?: string;
    _display?: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding",
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
                            CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractMeta> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractMeta",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        profile: MinMaxArray(
                            1,
                            1,
                            Literal(
                                "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCode> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractSubject> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractSubject",
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractEncounter> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractEncounter",
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractPerformer> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractPerformer",
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
export interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractResult: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractResult> =
    t.recursion(
        "CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractResult",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTract {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractPerformer>;
    result?: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractResult[];
}

const CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTract: t.Type<CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTract> =
    t.recursion("CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTract", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractCode,
                    subject:
                        CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractSubject,
                    encounter:
                        CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTractResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTract;
