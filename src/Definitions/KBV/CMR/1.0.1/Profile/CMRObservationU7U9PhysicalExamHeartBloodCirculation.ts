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
import CMRU7U9PhysicalExamHeartBloodCirculationVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7U9PhysicalExamHeartBloodCirculation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Physical_Exam_Heart_Blood_Circulation"

/**
 * Content in other Language.
 */
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCoding {
    system: string;
    version: string;
    code: CMRU7U9PhysicalExamHeartBloodCirculationVS;
    id?: string;
    _display?: CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCoding: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCoding> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7U9PhysicalExamHeartBloodCirculationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1">;
    id?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationMeta: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationMeta> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1"
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationCode {
    coding: Array<CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCoding>;
    id?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationCode: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationCode> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7U9PhysicalExamHeartBloodCirculationCodeCoding
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationSubject: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationSubject> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculationSubject", () =>
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationEncounter: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationEncounter> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculationEncounter", () =>
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
export interface CMRObservationU7U9PhysicalExamHeartBloodCirculationPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7U9PhysicalExamHeartBloodCirculationPerformer: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculationPerformer> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculationPerformer", () =>
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

interface CMRObservationU7U9PhysicalExamHeartBloodCirculation {
    resourceType: "Observation";
    meta: CMRObservationU7U9PhysicalExamHeartBloodCirculationMeta;
    status: "final";
    code: CMRObservationU7U9PhysicalExamHeartBloodCirculationCode;
    subject: CMRObservationU7U9PhysicalExamHeartBloodCirculationSubject;
    encounter: CMRObservationU7U9PhysicalExamHeartBloodCirculationEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7U9PhysicalExamHeartBloodCirculationPerformer>;
}

const CMRObservationU7U9PhysicalExamHeartBloodCirculation: t.Type<CMRObservationU7U9PhysicalExamHeartBloodCirculation> =
    t.recursion("CMRObservationU7U9PhysicalExamHeartBloodCirculation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7U9PhysicalExamHeartBloodCirculationMeta,
                    status: Literal("final"),
                    code: CMRObservationU7U9PhysicalExamHeartBloodCirculationCode,
                    subject: CMRObservationU7U9PhysicalExamHeartBloodCirculationSubject,
                    encounter:
                        CMRObservationU7U9PhysicalExamHeartBloodCirculationEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU7U9PhysicalExamHeartBloodCirculationPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU7U9PhysicalExamHeartBloodCirculation;
