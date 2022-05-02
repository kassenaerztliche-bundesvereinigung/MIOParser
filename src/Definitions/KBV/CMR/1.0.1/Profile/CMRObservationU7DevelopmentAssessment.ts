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
import CMRU7DevelopmentAssessmentVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7DevelopmentAssessment";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Development_Assessment"

/**
 * Content in other Language.
 */
export interface CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7DevelopmentAssessmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7DevelopmentAssessmentCodeCodingDisplay: t.Type<CMRObservationU7DevelopmentAssessmentCodeCodingDisplay> =
    t.recursion("CMRObservationU7DevelopmentAssessmentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7DevelopmentAssessmentCodeCoding {
    system: string;
    version: string;
    code: CMRU7DevelopmentAssessmentVS;
    id?: string;
    _display?: CMRObservationU7DevelopmentAssessmentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7DevelopmentAssessmentCodeCoding: t.Type<CMRObservationU7DevelopmentAssessmentCodeCoding> =
    t.recursion("CMRObservationU7DevelopmentAssessmentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7DevelopmentAssessmentVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7DevelopmentAssessmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7DevelopmentAssessmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Development_Assessment|1.0.1">;
    id?: string;
}

export const CMRObservationU7DevelopmentAssessmentMeta: t.Type<CMRObservationU7DevelopmentAssessmentMeta> =
    t.recursion("CMRObservationU7DevelopmentAssessmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Development_Assessment|1.0.1"
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
export interface CMRObservationU7DevelopmentAssessmentCode {
    coding: Array<CMRObservationU7DevelopmentAssessmentCodeCoding>;
    id?: string;
}

export const CMRObservationU7DevelopmentAssessmentCode: t.Type<CMRObservationU7DevelopmentAssessmentCode> =
    t.recursion("CMRObservationU7DevelopmentAssessmentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7DevelopmentAssessmentCodeCoding
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
export interface CMRObservationU7DevelopmentAssessmentSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7DevelopmentAssessmentSubject: t.Type<CMRObservationU7DevelopmentAssessmentSubject> =
    t.recursion("CMRObservationU7DevelopmentAssessmentSubject", () =>
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
export interface CMRObservationU7DevelopmentAssessmentEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7DevelopmentAssessmentEncounter: t.Type<CMRObservationU7DevelopmentAssessmentEncounter> =
    t.recursion("CMRObservationU7DevelopmentAssessmentEncounter", () =>
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
export interface CMRObservationU7DevelopmentAssessmentPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7DevelopmentAssessmentPerformer: t.Type<CMRObservationU7DevelopmentAssessmentPerformer> =
    t.recursion("CMRObservationU7DevelopmentAssessmentPerformer", () =>
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

interface CMRObservationU7DevelopmentAssessment {
    resourceType: "Observation";
    meta: CMRObservationU7DevelopmentAssessmentMeta;
    status: "final";
    code: CMRObservationU7DevelopmentAssessmentCode;
    subject: CMRObservationU7DevelopmentAssessmentSubject;
    encounter: CMRObservationU7DevelopmentAssessmentEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7DevelopmentAssessmentPerformer>;
}

const CMRObservationU7DevelopmentAssessment: t.Type<CMRObservationU7DevelopmentAssessment> =
    t.recursion("CMRObservationU7DevelopmentAssessment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7DevelopmentAssessmentMeta,
                    status: Literal("final"),
                    code: CMRObservationU7DevelopmentAssessmentCode,
                    subject: CMRObservationU7DevelopmentAssessmentSubject,
                    encounter: CMRObservationU7DevelopmentAssessmentEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU7DevelopmentAssessmentPerformer)
                })
            ])
        )
    );

export default CMRObservationU7DevelopmentAssessment;
