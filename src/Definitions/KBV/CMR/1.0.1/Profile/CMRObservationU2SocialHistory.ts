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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Social_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "(unter Berücksichtigung der Schwangerschafts und Geburtsanamnese):";
    id?: string;
}

export const CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "(unter Berücksichtigung der Schwangerschafts und Geburtsanamnese):"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner.
 */
export interface CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2SocialHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2SocialHistoryCodeCodingDisplay: t.Type<CMRObservationU2SocialHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU2SocialHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2SocialHistoryCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281575007";
    id?: string;
    _display?: CMRObservationU2SocialHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2SocialHistoryCodeCoding: t.Type<CMRObservationU2SocialHistoryCodeCoding> =
    t.recursion("CMRObservationU2SocialHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("281575007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2SocialHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2SocialHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Social_History|1.0.1">;
    id?: string;
}

export const CMRObservationU2SocialHistoryMeta: t.Type<CMRObservationU2SocialHistoryMeta> =
    t.recursion("CMRObservationU2SocialHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Social_History|1.0.1"
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
export interface CMRObservationU2SocialHistoryCode {
    coding: Array<CMRObservationU2SocialHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU2SocialHistoryCode: t.Type<CMRObservationU2SocialHistoryCode> =
    t.recursion("CMRObservationU2SocialHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU2SocialHistoryCodeCoding)
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
export interface CMRObservationU2SocialHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2SocialHistorySubject: t.Type<CMRObservationU2SocialHistorySubject> =
    t.recursion("CMRObservationU2SocialHistorySubject", () =>
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
export interface CMRObservationU2SocialHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2SocialHistoryEncounter: t.Type<CMRObservationU2SocialHistoryEncounter> =
    t.recursion("CMRObservationU2SocialHistoryEncounter", () =>
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
export interface CMRObservationU2SocialHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2SocialHistoryPerformer: t.Type<CMRObservationU2SocialHistoryPerformer> =
    t.recursion("CMRObservationU2SocialHistoryPerformer", () =>
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

interface CMRObservationU2SocialHistory {
    resourceType: "Observation";
    meta: CMRObservationU2SocialHistoryMeta;
    status: "final";
    code: CMRObservationU2SocialHistoryCode;
    subject: CMRObservationU2SocialHistorySubject;
    encounter: CMRObservationU2SocialHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2SocialHistoryPerformer>;
}

const CMRObservationU2SocialHistory: t.Type<CMRObservationU2SocialHistory> = t.recursion(
    "CMRObservationU2SocialHistory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2SocialHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU2SocialHistoryCode,
                    subject: CMRObservationU2SocialHistorySubject,
                    encounter: CMRObservationU2SocialHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU2SocialHistoryPerformer)
                })
            ])
        )
);

export default CMRObservationU2SocialHistory;
