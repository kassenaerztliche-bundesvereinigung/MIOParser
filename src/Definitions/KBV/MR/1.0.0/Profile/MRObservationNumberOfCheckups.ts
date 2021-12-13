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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups"

/**
 * Content in other Language.
 */
export interface MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Anzahl der Vorsorgeuntersuchungen";
    id?: string;
}

export const MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Anzahl der Vorsorgeuntersuchungen")
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
export interface MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationNumberOfCheckupsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationNumberOfCheckupsCodeCodingDisplay: t.Type<MRObservationNumberOfCheckupsCodeCodingDisplay> =
    t.recursion("MRObservationNumberOfCheckupsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationNumberOfCheckupsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationNumberOfCheckupsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "3401000175105";
    id?: string;
    _display?: MRObservationNumberOfCheckupsCodeCodingDisplay;
    display?: string;
}

export const MRObservationNumberOfCheckupsCodeCoding: t.Type<MRObservationNumberOfCheckupsCodeCoding> =
    t.recursion("MRObservationNumberOfCheckupsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("3401000175105")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationNumberOfCheckupsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationNumberOfCheckupsValueQuantity {
    value: number;
    system: "http://unitsofmeasure.org";
    code: "1";
    id?: string;
}

export const MRObservationNumberOfCheckupsValueQuantity: t.Type<MRObservationNumberOfCheckupsValueQuantity> =
    t.recursion("MRObservationNumberOfCheckupsValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("1")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationNumberOfCheckupsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.0.0">;
    id?: string;
}

export const MRObservationNumberOfCheckupsMeta: t.Type<MRObservationNumberOfCheckupsMeta> =
    t.recursion("MRObservationNumberOfCheckupsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.0.0"
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
export interface MRObservationNumberOfCheckupsCode {
    coding: Array<MRObservationNumberOfCheckupsCodeCoding>;
    id?: string;
}

export const MRObservationNumberOfCheckupsCode: t.Type<MRObservationNumberOfCheckupsCode> =
    t.recursion("MRObservationNumberOfCheckupsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationNumberOfCheckupsCodeCoding)
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
export interface MRObservationNumberOfCheckupsSubject {
    reference: string;
    id?: string;
}

export const MRObservationNumberOfCheckupsSubject: t.Type<MRObservationNumberOfCheckupsSubject> =
    t.recursion("MRObservationNumberOfCheckupsSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationNumberOfCheckupsEncounter {
    reference: string;
    id?: string;
}

export const MRObservationNumberOfCheckupsEncounter: t.Type<MRObservationNumberOfCheckupsEncounter> =
    t.recursion("MRObservationNumberOfCheckupsEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationNumberOfCheckupsPerformer {
    reference: string;
    id?: string;
}

export const MRObservationNumberOfCheckupsPerformer: t.Type<MRObservationNumberOfCheckupsPerformer> =
    t.recursion("MRObservationNumberOfCheckupsPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationNumberOfCheckups {
    resourceType: "Observation";
    meta: MRObservationNumberOfCheckupsMeta;
    status: "final";
    code: MRObservationNumberOfCheckupsCode;
    subject: MRObservationNumberOfCheckupsSubject;
    encounter: MRObservationNumberOfCheckupsEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationNumberOfCheckupsValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationNumberOfCheckupsPerformer>;
}

const MRObservationNumberOfCheckups: t.Type<MRObservationNumberOfCheckups> = t.recursion(
    "MRObservationNumberOfCheckups",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationNumberOfCheckupsMeta,
                    status: Literal("final"),
                    code: MRObservationNumberOfCheckupsCode,
                    subject: MRObservationNumberOfCheckupsSubject,
                    encounter: MRObservationNumberOfCheckupsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationNumberOfCheckupsValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationNumberOfCheckupsPerformer)
                })
            ])
        )
);

export default MRObservationNumberOfCheckups;
