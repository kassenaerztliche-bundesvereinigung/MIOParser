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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed"

/**
 * Content in other Language.
 */
export interface MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "U3 durchgeführt";
    id?: string;
}

export const MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("U3 durchgeführt")
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
export interface MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationU3PerformedCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationU3PerformedCodeCodingDisplay: t.Type<MRObservationU3PerformedCodeCodingDisplay> =
    t.recursion("MRObservationU3PerformedCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationU3PerformedCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationU3PerformedCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "713020001";
    id?: string;
    _display?: MRObservationU3PerformedCodeCodingDisplay;
    display?: string;
}

export const MRObservationU3PerformedCodeCoding: t.Type<MRObservationU3PerformedCodeCoding> =
    t.recursion("MRObservationU3PerformedCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("713020001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationU3PerformedCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationU3PerformedMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.0.0">;
    id?: string;
}

export const MRObservationU3PerformedMeta: t.Type<MRObservationU3PerformedMeta> =
    t.recursion("MRObservationU3PerformedMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed|1.0.0"
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
export interface MRObservationU3PerformedCode {
    coding: Array<MRObservationU3PerformedCodeCoding>;
    id?: string;
}

export const MRObservationU3PerformedCode: t.Type<MRObservationU3PerformedCode> =
    t.recursion("MRObservationU3PerformedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationU3PerformedCodeCoding)
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
export interface MRObservationU3PerformedSubject {
    reference: string;
    id?: string;
}

export const MRObservationU3PerformedSubject: t.Type<MRObservationU3PerformedSubject> =
    t.recursion("MRObservationU3PerformedSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
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
export interface MRObservationU3PerformedEncounter {
    reference: string;
    id?: string;
}

export const MRObservationU3PerformedEncounter: t.Type<MRObservationU3PerformedEncounter> =
    t.recursion("MRObservationU3PerformedEncounter", () =>
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
export interface MRObservationU3PerformedPerformer {
    reference: string;
    id?: string;
}

export const MRObservationU3PerformedPerformer: t.Type<MRObservationU3PerformedPerformer> =
    t.recursion("MRObservationU3PerformedPerformer", () =>
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

interface MRObservationU3Performed {
    resourceType: "Observation";
    meta: MRObservationU3PerformedMeta;
    status: "final";
    code: MRObservationU3PerformedCode;
    subject: MRObservationU3PerformedSubject;
    encounter: MRObservationU3PerformedEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationU3PerformedPerformer>;
}

const MRObservationU3Performed: t.Type<MRObservationU3Performed> = t.recursion(
    "MRObservationU3Performed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationU3PerformedMeta,
                    status: Literal("final"),
                    code: MRObservationU3PerformedCode,
                    subject: MRObservationU3PerformedSubject,
                    encounter: MRObservationU3PerformedEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationU3PerformedPerformer)
                })
            ])
        )
);

export default MRObservationU3Performed;
