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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRU6PhysicalExamEyesVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU6PhysicalExamEyes";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
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
export interface CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU6PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU6PhysicalExamEyesCodeCodingDisplay: t.Type<CMRObservationU6PhysicalExamEyesCodeCodingDisplay> =
    t.recursion("CMRObservationU6PhysicalExamEyesCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU6PhysicalExamEyesCodeCoding {
    system: string;
    version: string;
    code: CMRU6PhysicalExamEyesVS;
    id?: string;
    _display?: CMRObservationU6PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU6PhysicalExamEyesCodeCoding: t.Type<CMRObservationU6PhysicalExamEyesCodeCoding> =
    t.recursion("CMRObservationU6PhysicalExamEyesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU6PhysicalExamEyesVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU6PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU6PhysicalExamEyesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Physical_Exam_Eyes|1.0.1">;
    id?: string;
}

export const CMRObservationU6PhysicalExamEyesMeta: t.Type<CMRObservationU6PhysicalExamEyesMeta> =
    t.recursion("CMRObservationU6PhysicalExamEyesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Physical_Exam_Eyes|1.0.1"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface CMRObservationU6PhysicalExamEyesCode {
    coding: Array<CMRObservationU6PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRObservationU6PhysicalExamEyesCode: t.Type<CMRObservationU6PhysicalExamEyesCode> =
    t.recursion("CMRObservationU6PhysicalExamEyesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU6PhysicalExamEyesCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface CMRObservationU6PhysicalExamEyesSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU6PhysicalExamEyesSubject: t.Type<CMRObservationU6PhysicalExamEyesSubject> =
    t.recursion("CMRObservationU6PhysicalExamEyesSubject", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU6PhysicalExamEyesEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU6PhysicalExamEyesEncounter: t.Type<CMRObservationU6PhysicalExamEyesEncounter> =
    t.recursion("CMRObservationU6PhysicalExamEyesEncounter", () =>
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU6PhysicalExamEyesPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU6PhysicalExamEyesPerformer: t.Type<CMRObservationU6PhysicalExamEyesPerformer> =
    t.recursion("CMRObservationU6PhysicalExamEyesPerformer", () =>
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

interface CMRObservationU6PhysicalExamEyes {
    resourceType: "Observation";
    meta: CMRObservationU6PhysicalExamEyesMeta;
    status: "final";
    code: CMRObservationU6PhysicalExamEyesCode;
    subject: CMRObservationU6PhysicalExamEyesSubject;
    encounter: CMRObservationU6PhysicalExamEyesEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU6PhysicalExamEyesPerformer>;
}

const CMRObservationU6PhysicalExamEyes: t.Type<CMRObservationU6PhysicalExamEyes> =
    t.recursion("CMRObservationU6PhysicalExamEyes", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU6PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRObservationU6PhysicalExamEyesCode,
                    subject: CMRObservationU6PhysicalExamEyesSubject,
                    encounter: CMRObservationU6PhysicalExamEyesEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU6PhysicalExamEyesPerformer)
                })
            ])
        )
    );

export default CMRObservationU6PhysicalExamEyes;
