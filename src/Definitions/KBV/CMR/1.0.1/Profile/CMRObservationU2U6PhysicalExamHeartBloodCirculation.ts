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
import CMRU2U6PhysicalExamHeartBloodCirculationVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU2U6PhysicalExamHeartBloodCirculation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Physical_Exam_Heart_Blood_Circulation"

/**
 * Content in other Language.
 */
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCoding {
    system: string;
    version: string;
    code: CMRU2U6PhysicalExamHeartBloodCirculationVS;
    id?: string;
    _display?: CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCoding: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCoding> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2U6PhysicalExamHeartBloodCirculationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1">;
    id?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationMeta: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationMeta> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1"
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationCode {
    coding: Array<CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCoding>;
    id?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationCode: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationCode> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU2U6PhysicalExamHeartBloodCirculationCodeCoding
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationSubject: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationSubject> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculationSubject", () =>
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationEncounter: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationEncounter> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculationEncounter", () =>
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
export interface CMRObservationU2U6PhysicalExamHeartBloodCirculationPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2U6PhysicalExamHeartBloodCirculationPerformer: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculationPerformer> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculationPerformer", () =>
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

interface CMRObservationU2U6PhysicalExamHeartBloodCirculation {
    resourceType: "Observation";
    meta: CMRObservationU2U6PhysicalExamHeartBloodCirculationMeta;
    status: "final";
    code: CMRObservationU2U6PhysicalExamHeartBloodCirculationCode;
    subject: CMRObservationU2U6PhysicalExamHeartBloodCirculationSubject;
    encounter: CMRObservationU2U6PhysicalExamHeartBloodCirculationEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2U6PhysicalExamHeartBloodCirculationPerformer>;
}

const CMRObservationU2U6PhysicalExamHeartBloodCirculation: t.Type<CMRObservationU2U6PhysicalExamHeartBloodCirculation> =
    t.recursion("CMRObservationU2U6PhysicalExamHeartBloodCirculation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2U6PhysicalExamHeartBloodCirculationMeta,
                    status: Literal("final"),
                    code: CMRObservationU2U6PhysicalExamHeartBloodCirculationCode,
                    subject: CMRObservationU2U6PhysicalExamHeartBloodCirculationSubject,
                    encounter:
                        CMRObservationU2U6PhysicalExamHeartBloodCirculationEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU2U6PhysicalExamHeartBloodCirculationPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU2U6PhysicalExamHeartBloodCirculation;
