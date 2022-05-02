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
import CMRU3U4PhysicalExamSkinVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU3U4PhysicalExamSkin";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Skin"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U4PhysicalExamSkinCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4PhysicalExamSkinCodeCodingDisplay: t.Type<CMRObservationU3U4PhysicalExamSkinCodeCodingDisplay> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U4PhysicalExamSkinCodeCoding {
    system: string;
    version: string;
    code: CMRU3U4PhysicalExamSkinVS;
    id?: string;
    _display?: CMRObservationU3U4PhysicalExamSkinCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4PhysicalExamSkinCodeCoding: t.Type<CMRObservationU3U4PhysicalExamSkinCodeCoding> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU3U4PhysicalExamSkinVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4PhysicalExamSkinCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U4PhysicalExamSkinMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Skin|1.0.1">;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamSkinMeta: t.Type<CMRObservationU3U4PhysicalExamSkinMeta> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Skin|1.0.1"
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
export interface CMRObservationU3U4PhysicalExamSkinCode {
    coding: Array<CMRObservationU3U4PhysicalExamSkinCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamSkinCode: t.Type<CMRObservationU3U4PhysicalExamSkinCode> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4PhysicalExamSkinCodeCoding
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
export interface CMRObservationU3U4PhysicalExamSkinSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamSkinSubject: t.Type<CMRObservationU3U4PhysicalExamSkinSubject> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinSubject", () =>
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
export interface CMRObservationU3U4PhysicalExamSkinEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamSkinEncounter: t.Type<CMRObservationU3U4PhysicalExamSkinEncounter> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinEncounter", () =>
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
export interface CMRObservationU3U4PhysicalExamSkinPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4PhysicalExamSkinPerformer: t.Type<CMRObservationU3U4PhysicalExamSkinPerformer> =
    t.recursion("CMRObservationU3U4PhysicalExamSkinPerformer", () =>
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

interface CMRObservationU3U4PhysicalExamSkin {
    resourceType: "Observation";
    meta: CMRObservationU3U4PhysicalExamSkinMeta;
    status: "final";
    code: CMRObservationU3U4PhysicalExamSkinCode;
    subject: CMRObservationU3U4PhysicalExamSkinSubject;
    encounter: CMRObservationU3U4PhysicalExamSkinEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U4PhysicalExamSkinPerformer>;
}

const CMRObservationU3U4PhysicalExamSkin: t.Type<CMRObservationU3U4PhysicalExamSkin> =
    t.recursion("CMRObservationU3U4PhysicalExamSkin", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U4PhysicalExamSkinMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U4PhysicalExamSkinCode,
                    subject: CMRObservationU3U4PhysicalExamSkinSubject,
                    encounter: CMRObservationU3U4PhysicalExamSkinEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU3U4PhysicalExamSkinPerformer)
                })
            ])
        )
    );

export default CMRObservationU3U4PhysicalExamSkin;
