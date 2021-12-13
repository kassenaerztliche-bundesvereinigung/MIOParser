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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy"

/**
 * Content in other Language.
 */
export interface MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Angaben zu vorangegangenen Schwangerschaften";
    id?: string;
}

export const MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Angaben zu vorangegangenen Schwangerschaften"
                        )
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
export interface MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationPreviousPregnancyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationPreviousPregnancyCodeCodingDisplay: t.Type<MRObservationPreviousPregnancyCodeCodingDisplay> =
    t.recursion("MRObservationPreviousPregnancyCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationPreviousPregnancyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationPreviousPregnancyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "127362006";
    id?: string;
    _display?: MRObservationPreviousPregnancyCodeCodingDisplay;
    display?: string;
}

export const MRObservationPreviousPregnancyCodeCoding: t.Type<MRObservationPreviousPregnancyCodeCoding> =
    t.recursion("MRObservationPreviousPregnancyCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("127362006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPreviousPregnancyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPreviousPregnancyMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy|1.0.0">;
    id?: string;
}

export const MRObservationPreviousPregnancyMeta: t.Type<MRObservationPreviousPregnancyMeta> =
    t.recursion("MRObservationPreviousPregnancyMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy|1.0.0"
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
export interface MRObservationPreviousPregnancyCode {
    coding: Array<MRObservationPreviousPregnancyCodeCoding>;
    id?: string;
}

export const MRObservationPreviousPregnancyCode: t.Type<MRObservationPreviousPregnancyCode> =
    t.recursion("MRObservationPreviousPregnancyCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPreviousPregnancyCodeCoding)
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
export interface MRObservationPreviousPregnancySubject {
    reference: string;
    id?: string;
}

export const MRObservationPreviousPregnancySubject: t.Type<MRObservationPreviousPregnancySubject> =
    t.recursion("MRObservationPreviousPregnancySubject", () =>
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
export interface MRObservationPreviousPregnancyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPreviousPregnancyEncounter: t.Type<MRObservationPreviousPregnancyEncounter> =
    t.recursion("MRObservationPreviousPregnancyEncounter", () =>
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
export interface MRObservationPreviousPregnancyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationPreviousPregnancyPerformer: t.Type<MRObservationPreviousPregnancyPerformer> =
    t.recursion("MRObservationPreviousPregnancyPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationPreviousPregnancy {
    resourceType: "Observation";
    meta: MRObservationPreviousPregnancyMeta;
    status: ObservationstatusVS;
    code: MRObservationPreviousPregnancyCode;
    subject: MRObservationPreviousPregnancySubject;
    encounter: MRObservationPreviousPregnancyEncounter;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPreviousPregnancyPerformer>;
    note?: Array<Annotation>;
}

const MRObservationPreviousPregnancy: t.Type<MRObservationPreviousPregnancy> =
    t.recursion("MRObservationPreviousPregnancy", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPreviousPregnancyMeta,
                    status: ObservationstatusVS,
                    code: MRObservationPreviousPregnancyCode,
                    subject: MRObservationPreviousPregnancySubject,
                    encounter: MRObservationPreviousPregnancyEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationPreviousPregnancyPerformer),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRObservationPreviousPregnancy;
