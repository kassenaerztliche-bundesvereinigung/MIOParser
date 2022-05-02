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
import CMRU3U4PhysicalExamMouthNoseVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU3U4PhysicalExamMouthNose";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplay> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U4PhysicalExamMouthNoseCodeCoding {
    system: string;
    version: string;
    code: CMRU3U4PhysicalExamMouthNoseVS;
    id?: string;
    _display?: CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseCodeCoding: t.Type<CMRObservationU3U4PhysicalExamMouthNoseCodeCoding> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNoseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU3U4PhysicalExamMouthNoseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U4PhysicalExamMouthNoseMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Mouth_Nose|1.0.1">;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseMeta: t.Type<CMRObservationU3U4PhysicalExamMouthNoseMeta> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNoseMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Mouth_Nose|1.0.1"
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
export interface CMRObservationU3U4PhysicalExamMouthNoseCode {
    coding: Array<CMRObservationU3U4PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseCode: t.Type<CMRObservationU3U4PhysicalExamMouthNoseCode> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4PhysicalExamMouthNoseCodeCoding
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
export interface CMRObservationU3U4PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseSubject: t.Type<CMRObservationU3U4PhysicalExamMouthNoseSubject> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNoseSubject", () =>
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
export interface CMRObservationU3U4PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNoseEncounter: t.Type<CMRObservationU3U4PhysicalExamMouthNoseEncounter> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNoseEncounter", () =>
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
export interface CMRObservationU3U4PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamMouthNosePerformer: t.Type<CMRObservationU3U4PhysicalExamMouthNosePerformer> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNosePerformer", () =>
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

interface CMRObservationU3U4PhysicalExamMouthNose {
    resourceType: "Observation";
    meta: CMRObservationU3U4PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRObservationU3U4PhysicalExamMouthNoseCode;
    subject: CMRObservationU3U4PhysicalExamMouthNoseSubject;
    encounter: CMRObservationU3U4PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U4PhysicalExamMouthNosePerformer>;
}

const CMRObservationU3U4PhysicalExamMouthNose: t.Type<CMRObservationU3U4PhysicalExamMouthNose> =
    t.recursion("CMRObservationU3U4PhysicalExamMouthNose", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U4PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U4PhysicalExamMouthNoseCode,
                    subject: CMRObservationU3U4PhysicalExamMouthNoseSubject,
                    encounter: CMRObservationU3U4PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU3U4PhysicalExamMouthNosePerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU3U4PhysicalExamMouthNose;
