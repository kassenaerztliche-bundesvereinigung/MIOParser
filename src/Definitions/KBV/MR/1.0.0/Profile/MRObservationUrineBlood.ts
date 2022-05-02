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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Blood"

/**
 * Content in other Language.
 */
export interface MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blut";
    id?: string;
}

export const MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blut")
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
export interface MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationUrineBloodCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationUrineBloodCodeCodingDisplay: t.Type<MRObservationUrineBloodCodeCodingDisplay> =
    t.recursion("MRObservationUrineBloodCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationUrineBloodCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationUrineBloodCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "307821001";
    id?: string;
    _display?: MRObservationUrineBloodCodeCodingDisplay;
    display?: string;
}

export const MRObservationUrineBloodCodeCoding: t.Type<MRObservationUrineBloodCodeCoding> =
    t.recursion("MRObservationUrineBloodCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("307821001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationUrineBloodCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationUrineBloodMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Blood|1.0.0">;
    id?: string;
}

export const MRObservationUrineBloodMeta: t.Type<MRObservationUrineBloodMeta> =
    t.recursion("MRObservationUrineBloodMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Blood|1.0.0"
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
export interface MRObservationUrineBloodCode {
    coding: Array<MRObservationUrineBloodCodeCoding>;
    id?: string;
}

export const MRObservationUrineBloodCode: t.Type<MRObservationUrineBloodCode> =
    t.recursion("MRObservationUrineBloodCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationUrineBloodCodeCoding)
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
export interface MRObservationUrineBloodSubject {
    reference: string;
    id?: string;
}

export const MRObservationUrineBloodSubject: t.Type<MRObservationUrineBloodSubject> =
    t.recursion("MRObservationUrineBloodSubject", () =>
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
export interface MRObservationUrineBloodEncounter {
    reference: string;
    id?: string;
}

export const MRObservationUrineBloodEncounter: t.Type<MRObservationUrineBloodEncounter> =
    t.recursion("MRObservationUrineBloodEncounter", () =>
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
export interface MRObservationUrineBloodPerformer {
    reference: string;
    id?: string;
}

export const MRObservationUrineBloodPerformer: t.Type<MRObservationUrineBloodPerformer> =
    t.recursion("MRObservationUrineBloodPerformer", () =>
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

interface MRObservationUrineBlood {
    resourceType: "Observation";
    meta: MRObservationUrineBloodMeta;
    status: "final";
    code: MRObservationUrineBloodCode;
    subject: MRObservationUrineBloodSubject;
    encounter: MRObservationUrineBloodEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationUrineBloodPerformer>;
}

const MRObservationUrineBlood: t.Type<MRObservationUrineBlood> = t.recursion(
    "MRObservationUrineBlood",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationUrineBloodMeta,
                    status: Literal("final"),
                    code: MRObservationUrineBloodCode,
                    subject: MRObservationUrineBloodSubject,
                    encounter: MRObservationUrineBloodEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationUrineBloodPerformer)
                })
            ])
        )
);

export default MRObservationUrineBlood;
