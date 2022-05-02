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
import CMRU8CurrentChildHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU8CurrentChildHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Current_Child_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU8CurrentChildHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU8CurrentChildHistoryCodeCodingDisplay: t.Type<CMRObservationU8CurrentChildHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU8CurrentChildHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU8CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU8CurrentChildHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU8CurrentChildHistoryVS;
    id?: string;
    _display?: CMRObservationU8CurrentChildHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU8CurrentChildHistoryCodeCoding: t.Type<CMRObservationU8CurrentChildHistoryCodeCoding> =
    t.recursion("CMRObservationU8CurrentChildHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU8CurrentChildHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU8CurrentChildHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU8CurrentChildHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Current_Child_History|1.0.1">;
    id?: string;
}

export const CMRObservationU8CurrentChildHistoryMeta: t.Type<CMRObservationU8CurrentChildHistoryMeta> =
    t.recursion("CMRObservationU8CurrentChildHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Current_Child_History|1.0.1"
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
export interface CMRObservationU8CurrentChildHistoryCode {
    coding: Array<CMRObservationU8CurrentChildHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU8CurrentChildHistoryCode: t.Type<CMRObservationU8CurrentChildHistoryCode> =
    t.recursion("CMRObservationU8CurrentChildHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU8CurrentChildHistoryCodeCoding
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
export interface CMRObservationU8CurrentChildHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU8CurrentChildHistorySubject: t.Type<CMRObservationU8CurrentChildHistorySubject> =
    t.recursion("CMRObservationU8CurrentChildHistorySubject", () =>
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
export interface CMRObservationU8CurrentChildHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU8CurrentChildHistoryEncounter: t.Type<CMRObservationU8CurrentChildHistoryEncounter> =
    t.recursion("CMRObservationU8CurrentChildHistoryEncounter", () =>
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
export interface CMRObservationU8CurrentChildHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU8CurrentChildHistoryPerformer: t.Type<CMRObservationU8CurrentChildHistoryPerformer> =
    t.recursion("CMRObservationU8CurrentChildHistoryPerformer", () =>
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

interface CMRObservationU8CurrentChildHistory {
    resourceType: "Observation";
    meta: CMRObservationU8CurrentChildHistoryMeta;
    status: "final";
    code: CMRObservationU8CurrentChildHistoryCode;
    subject: CMRObservationU8CurrentChildHistorySubject;
    encounter: CMRObservationU8CurrentChildHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU8CurrentChildHistoryPerformer>;
}

const CMRObservationU8CurrentChildHistory: t.Type<CMRObservationU8CurrentChildHistory> =
    t.recursion("CMRObservationU8CurrentChildHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU8CurrentChildHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU8CurrentChildHistoryCode,
                    subject: CMRObservationU8CurrentChildHistorySubject,
                    encounter: CMRObservationU8CurrentChildHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU8CurrentChildHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU8CurrentChildHistory;
