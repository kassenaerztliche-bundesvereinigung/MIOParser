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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Nitrite"

/**
 * Content in other Language.
 */
export interface MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Nitrit";
    id?: string;
}

export const MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Nitrit")
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
export interface MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationUrineNitriteCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationUrineNitriteCodeCodingDisplay: t.Type<MRObservationUrineNitriteCodeCodingDisplay> =
    t.recursion("MRObservationUrineNitriteCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationUrineNitriteCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationUrineNitriteCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "167585009";
    id?: string;
    _display?: MRObservationUrineNitriteCodeCodingDisplay;
    display?: string;
}

export const MRObservationUrineNitriteCodeCoding: t.Type<MRObservationUrineNitriteCodeCoding> =
    t.recursion("MRObservationUrineNitriteCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("167585009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationUrineNitriteCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationUrineNitriteMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Nitrite|1.0.0">;
    id?: string;
}

export const MRObservationUrineNitriteMeta: t.Type<MRObservationUrineNitriteMeta> =
    t.recursion("MRObservationUrineNitriteMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Nitrite|1.0.0"
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
export interface MRObservationUrineNitriteCode {
    coding: Array<MRObservationUrineNitriteCodeCoding>;
    id?: string;
}

export const MRObservationUrineNitriteCode: t.Type<MRObservationUrineNitriteCode> =
    t.recursion("MRObservationUrineNitriteCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationUrineNitriteCodeCoding)
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
export interface MRObservationUrineNitriteSubject {
    reference: string;
    id?: string;
}

export const MRObservationUrineNitriteSubject: t.Type<MRObservationUrineNitriteSubject> =
    t.recursion("MRObservationUrineNitriteSubject", () =>
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
export interface MRObservationUrineNitriteEncounter {
    reference: string;
    id?: string;
}

export const MRObservationUrineNitriteEncounter: t.Type<MRObservationUrineNitriteEncounter> =
    t.recursion("MRObservationUrineNitriteEncounter", () =>
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
export interface MRObservationUrineNitritePerformer {
    reference: string;
    id?: string;
}

export const MRObservationUrineNitritePerformer: t.Type<MRObservationUrineNitritePerformer> =
    t.recursion("MRObservationUrineNitritePerformer", () =>
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

interface MRObservationUrineNitrite {
    resourceType: "Observation";
    meta: MRObservationUrineNitriteMeta;
    status: "final";
    code: MRObservationUrineNitriteCode;
    subject: MRObservationUrineNitriteSubject;
    encounter: MRObservationUrineNitriteEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationUrineNitritePerformer>;
}

const MRObservationUrineNitrite: t.Type<MRObservationUrineNitrite> = t.recursion(
    "MRObservationUrineNitrite",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationUrineNitriteMeta,
                    status: Literal("final"),
                    code: MRObservationUrineNitriteCode,
                    subject: MRObservationUrineNitriteSubject,
                    encounter: MRObservationUrineNitriteEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationUrineNitritePerformer)
                })
            ])
        )
);

export default MRObservationUrineNitrite;
