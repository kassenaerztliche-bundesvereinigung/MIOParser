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
import CMRU9CurrentChildHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU9CurrentChildHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Current_Child_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU9CurrentChildHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU9CurrentChildHistoryCodeCodingDisplay: t.Type<CMRObservationU9CurrentChildHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU9CurrentChildHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU9CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU9CurrentChildHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU9CurrentChildHistoryVS;
    id?: string;
    _display?: CMRObservationU9CurrentChildHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU9CurrentChildHistoryCodeCoding: t.Type<CMRObservationU9CurrentChildHistoryCodeCoding> =
    t.recursion("CMRObservationU9CurrentChildHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU9CurrentChildHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU9CurrentChildHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU9CurrentChildHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Current_Child_History|1.0.1">;
    id?: string;
}

export const CMRObservationU9CurrentChildHistoryMeta: t.Type<CMRObservationU9CurrentChildHistoryMeta> =
    t.recursion("CMRObservationU9CurrentChildHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U9_Current_Child_History|1.0.1"
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
export interface CMRObservationU9CurrentChildHistoryCode {
    coding: Array<CMRObservationU9CurrentChildHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU9CurrentChildHistoryCode: t.Type<CMRObservationU9CurrentChildHistoryCode> =
    t.recursion("CMRObservationU9CurrentChildHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU9CurrentChildHistoryCodeCoding
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
export interface CMRObservationU9CurrentChildHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU9CurrentChildHistorySubject: t.Type<CMRObservationU9CurrentChildHistorySubject> =
    t.recursion("CMRObservationU9CurrentChildHistorySubject", () =>
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
export interface CMRObservationU9CurrentChildHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU9CurrentChildHistoryEncounter: t.Type<CMRObservationU9CurrentChildHistoryEncounter> =
    t.recursion("CMRObservationU9CurrentChildHistoryEncounter", () =>
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
export interface CMRObservationU9CurrentChildHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU9CurrentChildHistoryPerformer: t.Type<CMRObservationU9CurrentChildHistoryPerformer> =
    t.recursion("CMRObservationU9CurrentChildHistoryPerformer", () =>
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

interface CMRObservationU9CurrentChildHistory {
    resourceType: "Observation";
    meta: CMRObservationU9CurrentChildHistoryMeta;
    status: "final";
    code: CMRObservationU9CurrentChildHistoryCode;
    subject: CMRObservationU9CurrentChildHistorySubject;
    encounter: CMRObservationU9CurrentChildHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU9CurrentChildHistoryPerformer>;
}

const CMRObservationU9CurrentChildHistory: t.Type<CMRObservationU9CurrentChildHistory> =
    t.recursion("CMRObservationU9CurrentChildHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU9CurrentChildHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU9CurrentChildHistoryCode,
                    subject: CMRObservationU9CurrentChildHistorySubject,
                    encounter: CMRObservationU9CurrentChildHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU9CurrentChildHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU9CurrentChildHistory;
