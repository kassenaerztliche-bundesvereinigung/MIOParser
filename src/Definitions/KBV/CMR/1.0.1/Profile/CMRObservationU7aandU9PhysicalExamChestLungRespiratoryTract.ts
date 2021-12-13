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
import CMRU7aandU9PhysicalExamChestLungRespiratoryTractVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7aandU9PhysicalExamChestLungRespiratoryTract";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: string;
    version: string;
    code: CMRU7aandU9PhysicalExamChestLungRespiratoryTractVS;
    id?: string;
    _display?: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: SCALARUri,
                        version: SCALARString,
                        code: CMRU7aandU9PhysicalExamChestLungRespiratoryTractVS
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1">;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractMeta> =
    t.recursion("CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.1"
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCode> =
    t.recursion("CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractSubject> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractSubject",
        () =>
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractEncounter> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractEncounter",
        () =>
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
export interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractPerformer> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractPerformer",
        () =>
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

interface CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTract {
    resourceType: "Observation";
    meta: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractPerformer>;
}

const CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTract: t.Type<CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTract> =
    t.recursion("CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTract", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractCode,
                    subject:
                        CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractSubject,
                    encounter:
                        CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTractPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTract;
