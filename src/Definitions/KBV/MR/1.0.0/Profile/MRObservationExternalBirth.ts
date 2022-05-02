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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth"

/**
 * Content in other Language.
 */
export interface MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Extern entbunden";
    id?: string;
}

export const MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Extern entbunden")
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
export interface MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationExternalBirthCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationExternalBirthCodeCodingDisplay: t.Type<MRObservationExternalBirthCodeCodingDisplay> =
    t.recursion("MRObservationExternalBirthCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationExternalBirthCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationExternalBirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "60059000";
    id?: string;
    _display?: MRObservationExternalBirthCodeCodingDisplay;
    display?: string;
}

export const MRObservationExternalBirthCodeCoding: t.Type<MRObservationExternalBirthCodeCoding> =
    t.recursion("MRObservationExternalBirthCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("60059000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExternalBirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationExternalBirthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.0.0">;
    id?: string;
}

export const MRObservationExternalBirthMeta: t.Type<MRObservationExternalBirthMeta> =
    t.recursion("MRObservationExternalBirthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.0.0"
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
export interface MRObservationExternalBirthCode {
    coding: Array<MRObservationExternalBirthCodeCoding>;
    id?: string;
}

export const MRObservationExternalBirthCode: t.Type<MRObservationExternalBirthCode> =
    t.recursion("MRObservationExternalBirthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationExternalBirthCodeCoding)
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
export interface MRObservationExternalBirthSubject {
    reference: string;
    id?: string;
}

export const MRObservationExternalBirthSubject: t.Type<MRObservationExternalBirthSubject> =
    t.recursion("MRObservationExternalBirthSubject", () =>
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
export interface MRObservationExternalBirthEncounter {
    reference: string;
    id?: string;
}

export const MRObservationExternalBirthEncounter: t.Type<MRObservationExternalBirthEncounter> =
    t.recursion("MRObservationExternalBirthEncounter", () =>
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
export interface MRObservationExternalBirthPerformer {
    reference: string;
    id?: string;
}

export const MRObservationExternalBirthPerformer: t.Type<MRObservationExternalBirthPerformer> =
    t.recursion("MRObservationExternalBirthPerformer", () =>
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

interface MRObservationExternalBirth {
    resourceType: "Observation";
    meta: MRObservationExternalBirthMeta;
    status: "final";
    code: MRObservationExternalBirthCode;
    subject: MRObservationExternalBirthSubject;
    encounter: MRObservationExternalBirthEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationExternalBirthPerformer>;
}

const MRObservationExternalBirth: t.Type<MRObservationExternalBirth> = t.recursion(
    "MRObservationExternalBirth",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationExternalBirthMeta,
                    status: Literal("final"),
                    code: MRObservationExternalBirthCode,
                    subject: MRObservationExternalBirthSubject,
                    encounter: MRObservationExternalBirthEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationExternalBirthPerformer)
                })
            ])
        )
);

export default MRObservationExternalBirth;