import * as t from "io-ts";
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment"

/**
 * Content in other Language.
 */
export interface MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Sediment unauffällig";
    id?: string;
}

export const MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Sediment unauffällig")
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
export interface MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationUrineSedimentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationUrineSedimentCodeCodingDisplay: t.Type<MRObservationUrineSedimentCodeCodingDisplay> =
    t.recursion("MRObservationUrineSedimentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationUrineSedimentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationUrineSedimentCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "167332001";
    id?: string;
    _display?: MRObservationUrineSedimentCodeCodingDisplay;
    display?: string;
}

export const MRObservationUrineSedimentCodeCoding: t.Type<MRObservationUrineSedimentCodeCoding> =
    t.recursion("MRObservationUrineSedimentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("167332001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationUrineSedimentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationUrineSedimentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment|1.0.0">;
    id?: string;
}

export const MRObservationUrineSedimentMeta: t.Type<MRObservationUrineSedimentMeta> =
    t.recursion("MRObservationUrineSedimentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment|1.0.0"
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
export interface MRObservationUrineSedimentCode {
    coding: Array<MRObservationUrineSedimentCodeCoding>;
    id?: string;
}

export const MRObservationUrineSedimentCode: t.Type<MRObservationUrineSedimentCode> =
    t.recursion("MRObservationUrineSedimentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationUrineSedimentCodeCoding)
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
export interface MRObservationUrineSedimentSubject {
    reference: string;
    id?: string;
}

export const MRObservationUrineSedimentSubject: t.Type<MRObservationUrineSedimentSubject> =
    t.recursion("MRObservationUrineSedimentSubject", () =>
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
export interface MRObservationUrineSedimentEncounter {
    reference: string;
    id?: string;
}

export const MRObservationUrineSedimentEncounter: t.Type<MRObservationUrineSedimentEncounter> =
    t.recursion("MRObservationUrineSedimentEncounter", () =>
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
export interface MRObservationUrineSedimentPerformer {
    reference: string;
    id?: string;
}

export const MRObservationUrineSedimentPerformer: t.Type<MRObservationUrineSedimentPerformer> =
    t.recursion("MRObservationUrineSedimentPerformer", () =>
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

interface MRObservationUrineSediment {
    resourceType: "Observation";
    meta: MRObservationUrineSedimentMeta;
    status: "final";
    code: MRObservationUrineSedimentCode;
    subject: MRObservationUrineSedimentSubject;
    encounter: MRObservationUrineSedimentEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationUrineSedimentPerformer>;
}

const MRObservationUrineSediment: t.Type<MRObservationUrineSediment> = t.recursion(
    "MRObservationUrineSediment",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationUrineSedimentMeta,
                    status: Literal("final"),
                    code: MRObservationUrineSedimentCode,
                    subject: MRObservationUrineSedimentSubject,
                    encounter: MRObservationUrineSedimentEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationUrineSedimentPerformer)
                })
            ])
        )
);

export default MRObservationUrineSediment;
