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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Neonatal_Jaundice"

/**
 * Content in other Language.
 */
export interface CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gelbsucht";
    id?: string;
}

export const CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Gelbsucht")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1NeonatalJaundiceCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1NeonatalJaundiceCodeCodingDisplay: t.Type<CMRObservationU1NeonatalJaundiceCodeCodingDisplay> =
    t.recursion("CMRObservationU1NeonatalJaundiceCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1NeonatalJaundiceCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "387712008";
    id?: string;
    _display?: CMRObservationU1NeonatalJaundiceCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1NeonatalJaundiceCodeCoding: t.Type<CMRObservationU1NeonatalJaundiceCodeCoding> =
    t.recursion("CMRObservationU1NeonatalJaundiceCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("387712008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1NeonatalJaundiceCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1NeonatalJaundiceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Neonatal_Jaundice|1.0.1">;
    id?: string;
}

export const CMRObservationU1NeonatalJaundiceMeta: t.Type<CMRObservationU1NeonatalJaundiceMeta> =
    t.recursion("CMRObservationU1NeonatalJaundiceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Neonatal_Jaundice|1.0.1"
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
export interface CMRObservationU1NeonatalJaundiceCode {
    coding: Array<CMRObservationU1NeonatalJaundiceCodeCoding>;
    id?: string;
}

export const CMRObservationU1NeonatalJaundiceCode: t.Type<CMRObservationU1NeonatalJaundiceCode> =
    t.recursion("CMRObservationU1NeonatalJaundiceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1NeonatalJaundiceCodeCoding)
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
export interface CMRObservationU1NeonatalJaundiceSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1NeonatalJaundiceSubject: t.Type<CMRObservationU1NeonatalJaundiceSubject> =
    t.recursion("CMRObservationU1NeonatalJaundiceSubject", () =>
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
export interface CMRObservationU1NeonatalJaundiceEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1NeonatalJaundiceEncounter: t.Type<CMRObservationU1NeonatalJaundiceEncounter> =
    t.recursion("CMRObservationU1NeonatalJaundiceEncounter", () =>
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
export interface CMRObservationU1NeonatalJaundicePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1NeonatalJaundicePerformer: t.Type<CMRObservationU1NeonatalJaundicePerformer> =
    t.recursion("CMRObservationU1NeonatalJaundicePerformer", () =>
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

interface CMRObservationU1NeonatalJaundice {
    resourceType: "Observation";
    meta: CMRObservationU1NeonatalJaundiceMeta;
    status: "final";
    code: CMRObservationU1NeonatalJaundiceCode;
    subject: CMRObservationU1NeonatalJaundiceSubject;
    encounter: CMRObservationU1NeonatalJaundiceEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1NeonatalJaundicePerformer>;
}

const CMRObservationU1NeonatalJaundice: t.Type<CMRObservationU1NeonatalJaundice> =
    t.recursion("CMRObservationU1NeonatalJaundice", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1NeonatalJaundiceMeta,
                    status: Literal("final"),
                    code: CMRObservationU1NeonatalJaundiceCode,
                    subject: CMRObservationU1NeonatalJaundiceSubject,
                    encounter: CMRObservationU1NeonatalJaundiceEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1NeonatalJaundicePerformer)
                })
            ])
        )
    );

export default CMRObservationU1NeonatalJaundice;
