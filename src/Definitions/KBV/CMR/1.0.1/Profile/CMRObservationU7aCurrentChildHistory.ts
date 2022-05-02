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
import CMRU7aCurrentChildHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7aCurrentChildHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Current_Child_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7aCurrentChildHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7aCurrentChildHistoryCodeCodingDisplay: t.Type<CMRObservationU7aCurrentChildHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU7aCurrentChildHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7aCurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7aCurrentChildHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU7aCurrentChildHistoryVS;
    id?: string;
    _display?: CMRObservationU7aCurrentChildHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7aCurrentChildHistoryCodeCoding: t.Type<CMRObservationU7aCurrentChildHistoryCodeCoding> =
    t.recursion("CMRObservationU7aCurrentChildHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7aCurrentChildHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7aCurrentChildHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7aCurrentChildHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Current_Child_History|1.0.1">;
    id?: string;
}

export const CMRObservationU7aCurrentChildHistoryMeta: t.Type<CMRObservationU7aCurrentChildHistoryMeta> =
    t.recursion("CMRObservationU7aCurrentChildHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Current_Child_History|1.0.1"
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
export interface CMRObservationU7aCurrentChildHistoryCode {
    coding: Array<CMRObservationU7aCurrentChildHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU7aCurrentChildHistoryCode: t.Type<CMRObservationU7aCurrentChildHistoryCode> =
    t.recursion("CMRObservationU7aCurrentChildHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7aCurrentChildHistoryCodeCoding
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
export interface CMRObservationU7aCurrentChildHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7aCurrentChildHistorySubject: t.Type<CMRObservationU7aCurrentChildHistorySubject> =
    t.recursion("CMRObservationU7aCurrentChildHistorySubject", () =>
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
export interface CMRObservationU7aCurrentChildHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7aCurrentChildHistoryEncounter: t.Type<CMRObservationU7aCurrentChildHistoryEncounter> =
    t.recursion("CMRObservationU7aCurrentChildHistoryEncounter", () =>
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
export interface CMRObservationU7aCurrentChildHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7aCurrentChildHistoryPerformer: t.Type<CMRObservationU7aCurrentChildHistoryPerformer> =
    t.recursion("CMRObservationU7aCurrentChildHistoryPerformer", () =>
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

interface CMRObservationU7aCurrentChildHistory {
    resourceType: "Observation";
    meta: CMRObservationU7aCurrentChildHistoryMeta;
    status: "final";
    code: CMRObservationU7aCurrentChildHistoryCode;
    subject: CMRObservationU7aCurrentChildHistorySubject;
    encounter: CMRObservationU7aCurrentChildHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7aCurrentChildHistoryPerformer>;
}

const CMRObservationU7aCurrentChildHistory: t.Type<CMRObservationU7aCurrentChildHistory> =
    t.recursion("CMRObservationU7aCurrentChildHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7aCurrentChildHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU7aCurrentChildHistoryCode,
                    subject: CMRObservationU7aCurrentChildHistorySubject,
                    encounter: CMRObservationU7aCurrentChildHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU7aCurrentChildHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU7aCurrentChildHistory;
