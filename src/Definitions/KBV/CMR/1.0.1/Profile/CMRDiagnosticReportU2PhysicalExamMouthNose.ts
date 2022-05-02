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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Mundhöhle, Kiefer, Nase";
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Mundhöhle, Kiefer, Nase")
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "271914002+364111005";
    id?: string;
    _display?: CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCoding: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCoding> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("271914002+364111005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Mouth_Nose|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseMeta: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseMeta> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Mouth_Nose|1.0.1"
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseCode {
    coding: Array<CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseCode: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseCode> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2PhysicalExamMouthNoseCodeCoding
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseSubject: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseSubject> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseSubject", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseEncounter: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseEncounter> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseEncounter", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNosePerformer: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNosePerformer> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNosePerformer", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamMouthNoseResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamMouthNoseResult: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNoseResult> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNoseResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Mouth_Nose|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2PhysicalExamMouthNose {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRDiagnosticReportU2PhysicalExamMouthNoseCode;
    subject: CMRDiagnosticReportU2PhysicalExamMouthNoseSubject;
    encounter: CMRDiagnosticReportU2PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2PhysicalExamMouthNosePerformer>;
    result?: CMRDiagnosticReportU2PhysicalExamMouthNoseResult[];
}

const CMRDiagnosticReportU2PhysicalExamMouthNose: t.Type<CMRDiagnosticReportU2PhysicalExamMouthNose> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamMouthNose", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2PhysicalExamMouthNoseCode,
                    subject: CMRDiagnosticReportU2PhysicalExamMouthNoseSubject,
                    encounter: CMRDiagnosticReportU2PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2PhysicalExamMouthNosePerformer
                    ),
                    result: t.array(CMRDiagnosticReportU2PhysicalExamMouthNoseResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU2PhysicalExamMouthNose;
