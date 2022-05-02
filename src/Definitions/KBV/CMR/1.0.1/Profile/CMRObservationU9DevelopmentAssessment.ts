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
import CMRU9DevelopmentAssessmentVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU9DevelopmentAssessment";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Development_Assessment"

/**
 * Content in other Language.
 */
export interface CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU9DevelopmentAssessmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU9DevelopmentAssessmentCodeCodingDisplay: t.Type<CMRObservationU9DevelopmentAssessmentCodeCodingDisplay> =
    t.recursion("CMRObservationU9DevelopmentAssessmentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU9DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU9DevelopmentAssessmentCodeCoding {
    system: string;
    version: string;
    code: CMRU9DevelopmentAssessmentVS;
    id?: string;
    _display?: CMRObservationU9DevelopmentAssessmentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU9DevelopmentAssessmentCodeCoding: t.Type<CMRObservationU9DevelopmentAssessmentCodeCoding> =
    t.recursion("CMRObservationU9DevelopmentAssessmentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU9DevelopmentAssessmentVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU9DevelopmentAssessmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU9DevelopmentAssessmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Development_Assessment|1.0.1">;
    id?: string;
}

export const CMRObservationU9DevelopmentAssessmentMeta: t.Type<CMRObservationU9DevelopmentAssessmentMeta> =
    t.recursion("CMRObservationU9DevelopmentAssessmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Development_Assessment|1.0.1"
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
export interface CMRObservationU9DevelopmentAssessmentCode {
    coding: Array<CMRObservationU9DevelopmentAssessmentCodeCoding>;
    id?: string;
}

export const CMRObservationU9DevelopmentAssessmentCode: t.Type<CMRObservationU9DevelopmentAssessmentCode> =
    t.recursion("CMRObservationU9DevelopmentAssessmentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU9DevelopmentAssessmentCodeCoding
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
export interface CMRObservationU9DevelopmentAssessmentSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU9DevelopmentAssessmentSubject: t.Type<CMRObservationU9DevelopmentAssessmentSubject> =
    t.recursion("CMRObservationU9DevelopmentAssessmentSubject", () =>
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
export interface CMRObservationU9DevelopmentAssessmentEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU9DevelopmentAssessmentEncounter: t.Type<CMRObservationU9DevelopmentAssessmentEncounter> =
    t.recursion("CMRObservationU9DevelopmentAssessmentEncounter", () =>
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
export interface CMRObservationU9DevelopmentAssessmentPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU9DevelopmentAssessmentPerformer: t.Type<CMRObservationU9DevelopmentAssessmentPerformer> =
    t.recursion("CMRObservationU9DevelopmentAssessmentPerformer", () =>
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

interface CMRObservationU9DevelopmentAssessment {
    resourceType: "Observation";
    meta: CMRObservationU9DevelopmentAssessmentMeta;
    status: "final";
    code: CMRObservationU9DevelopmentAssessmentCode;
    subject: CMRObservationU9DevelopmentAssessmentSubject;
    encounter: CMRObservationU9DevelopmentAssessmentEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU9DevelopmentAssessmentPerformer>;
}

const CMRObservationU9DevelopmentAssessment: t.Type<CMRObservationU9DevelopmentAssessment> =
    t.recursion("CMRObservationU9DevelopmentAssessment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU9DevelopmentAssessmentMeta,
                    status: Literal("final"),
                    code: CMRObservationU9DevelopmentAssessmentCode,
                    subject: CMRObservationU9DevelopmentAssessmentSubject,
                    encounter: CMRObservationU9DevelopmentAssessmentEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU9DevelopmentAssessmentPerformer)
                })
            ])
        )
    );

export default CMRObservationU9DevelopmentAssessment;
