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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal"

/**
 * Content in other Language.
 */
export interface MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Wochenbett normal";
    id?: string;
}

export const MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Wochenbett normal")
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
export interface MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationPuerperiumNormalCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationPuerperiumNormalCodeCodingDisplay: t.Type<MRObservationPuerperiumNormalCodeCodingDisplay> =
    t.recursion("MRObservationPuerperiumNormalCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationPuerperiumNormalCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "169784003";
    id?: string;
    _display?: MRObservationPuerperiumNormalCodeCodingDisplay;
    display?: string;
}

export const MRObservationPuerperiumNormalCodeCoding: t.Type<MRObservationPuerperiumNormalCodeCoding> =
    t.recursion("MRObservationPuerperiumNormalCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("169784003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPuerperiumNormalCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPuerperiumNormalMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.0.0">;
    id?: string;
}

export const MRObservationPuerperiumNormalMeta: t.Type<MRObservationPuerperiumNormalMeta> =
    t.recursion("MRObservationPuerperiumNormalMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.0.0"
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
export interface MRObservationPuerperiumNormalCode {
    coding: Array<MRObservationPuerperiumNormalCodeCoding>;
    id?: string;
}

export const MRObservationPuerperiumNormalCode: t.Type<MRObservationPuerperiumNormalCode> =
    t.recursion("MRObservationPuerperiumNormalCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPuerperiumNormalCodeCoding)
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
export interface MRObservationPuerperiumNormalSubject {
    reference: string;
    id?: string;
}

export const MRObservationPuerperiumNormalSubject: t.Type<MRObservationPuerperiumNormalSubject> =
    t.recursion("MRObservationPuerperiumNormalSubject", () =>
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
export interface MRObservationPuerperiumNormalEncounter {
    reference: string;
    id?: string;
}

export const MRObservationPuerperiumNormalEncounter: t.Type<MRObservationPuerperiumNormalEncounter> =
    t.recursion("MRObservationPuerperiumNormalEncounter", () =>
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
export interface MRObservationPuerperiumNormalPerformer {
    reference: string;
    id?: string;
}

export const MRObservationPuerperiumNormalPerformer: t.Type<MRObservationPuerperiumNormalPerformer> =
    t.recursion("MRObservationPuerperiumNormalPerformer", () =>
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

interface MRObservationPuerperiumNormal {
    resourceType: "Observation";
    meta: MRObservationPuerperiumNormalMeta;
    status: "final";
    code: MRObservationPuerperiumNormalCode;
    subject: MRObservationPuerperiumNormalSubject;
    encounter: MRObservationPuerperiumNormalEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPuerperiumNormalPerformer>;
}

const MRObservationPuerperiumNormal: t.Type<MRObservationPuerperiumNormal> = t.recursion(
    "MRObservationPuerperiumNormal",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPuerperiumNormalMeta,
                    status: Literal("final"),
                    code: MRObservationPuerperiumNormalCode,
                    subject: MRObservationPuerperiumNormalSubject,
                    encounter: MRObservationPuerperiumNormalEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationPuerperiumNormalPerformer)
                })
            ])
        )
);

export default MRObservationPuerperiumNormal;
