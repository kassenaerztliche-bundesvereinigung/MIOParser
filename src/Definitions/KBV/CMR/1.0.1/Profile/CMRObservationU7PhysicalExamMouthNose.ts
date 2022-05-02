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
import CMRU7PhysicalExamMouthNoseVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7PhysicalExamMouthNose";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7PhysicalExamMouthNoseCodeCoding {
    system: string;
    version: string;
    code: CMRU7PhysicalExamMouthNoseVS;
    id?: string;
    _display?: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCoding: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCoding> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7PhysicalExamMouthNoseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7PhysicalExamMouthNoseMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Mouth_Nose|1.0.1">;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseMeta: t.Type<CMRObservationU7PhysicalExamMouthNoseMeta> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Mouth_Nose|1.0.1"
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
export interface CMRObservationU7PhysicalExamMouthNoseCode {
    coding: Array<CMRObservationU7PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCode: t.Type<CMRObservationU7PhysicalExamMouthNoseCode> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7PhysicalExamMouthNoseCodeCoding
                    )
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
export interface CMRObservationU7PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseSubject: t.Type<CMRObservationU7PhysicalExamMouthNoseSubject> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseSubject", () =>
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
export interface CMRObservationU7PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseEncounter: t.Type<CMRObservationU7PhysicalExamMouthNoseEncounter> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseEncounter", () =>
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
export interface CMRObservationU7PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNosePerformer: t.Type<CMRObservationU7PhysicalExamMouthNosePerformer> =
    t.recursion("CMRObservationU7PhysicalExamMouthNosePerformer", () =>
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

interface CMRObservationU7PhysicalExamMouthNose {
    resourceType: "Observation";
    meta: CMRObservationU7PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRObservationU7PhysicalExamMouthNoseCode;
    subject: CMRObservationU7PhysicalExamMouthNoseSubject;
    encounter: CMRObservationU7PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7PhysicalExamMouthNosePerformer>;
}

const CMRObservationU7PhysicalExamMouthNose: t.Type<CMRObservationU7PhysicalExamMouthNose> =
    t.recursion("CMRObservationU7PhysicalExamMouthNose", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRObservationU7PhysicalExamMouthNoseCode,
                    subject: CMRObservationU7PhysicalExamMouthNoseSubject,
                    encounter: CMRObservationU7PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU7PhysicalExamMouthNosePerformer)
                })
            ])
        )
    );

export default CMRObservationU7PhysicalExamMouthNose;
