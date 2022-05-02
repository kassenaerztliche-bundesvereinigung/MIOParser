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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Skin"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Haut";
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Haut")
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
export interface CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplay: t.Type<CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2PhysicalExamSkinCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364528001";
    id?: string;
    _display?: CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinCodeCoding: t.Type<CMRDiagnosticReportU2PhysicalExamSkinCodeCoding> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364528001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU2PhysicalExamSkinCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2PhysicalExamSkinMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Skin|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinMeta: t.Type<CMRDiagnosticReportU2PhysicalExamSkinMeta> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_Physical_Exam_Skin|1.0.1"
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
export interface CMRDiagnosticReportU2PhysicalExamSkinCode {
    coding: Array<CMRDiagnosticReportU2PhysicalExamSkinCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinCode: t.Type<CMRDiagnosticReportU2PhysicalExamSkinCode> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2PhysicalExamSkinCodeCoding
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
export interface CMRDiagnosticReportU2PhysicalExamSkinSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinSubject: t.Type<CMRDiagnosticReportU2PhysicalExamSkinSubject> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinSubject", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamSkinEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinEncounter: t.Type<CMRDiagnosticReportU2PhysicalExamSkinEncounter> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinEncounter", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamSkinPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinPerformer: t.Type<CMRDiagnosticReportU2PhysicalExamSkinPerformer> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinPerformer", () =>
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
export interface CMRDiagnosticReportU2PhysicalExamSkinResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2PhysicalExamSkinResult: t.Type<CMRDiagnosticReportU2PhysicalExamSkinResult> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkinResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Skin|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2PhysicalExamSkin {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2PhysicalExamSkinMeta;
    status: "final";
    code: CMRDiagnosticReportU2PhysicalExamSkinCode;
    subject: CMRDiagnosticReportU2PhysicalExamSkinSubject;
    encounter: CMRDiagnosticReportU2PhysicalExamSkinEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2PhysicalExamSkinPerformer>;
    result?: CMRDiagnosticReportU2PhysicalExamSkinResult[];
}

const CMRDiagnosticReportU2PhysicalExamSkin: t.Type<CMRDiagnosticReportU2PhysicalExamSkin> =
    t.recursion("CMRDiagnosticReportU2PhysicalExamSkin", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2PhysicalExamSkinMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2PhysicalExamSkinCode,
                    subject: CMRDiagnosticReportU2PhysicalExamSkinSubject,
                    encounter: CMRDiagnosticReportU2PhysicalExamSkinEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2PhysicalExamSkinPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU2PhysicalExamSkinResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU2PhysicalExamSkin;
