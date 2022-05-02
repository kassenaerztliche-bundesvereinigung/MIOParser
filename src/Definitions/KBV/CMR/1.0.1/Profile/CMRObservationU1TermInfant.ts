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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Term_Infant"

/**
 * Content in other Language.
 */
export interface CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Reifezeichen:";
    id?: string;
}

export const CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Reifezeichen:")
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
export interface CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1TermInfantCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1TermInfantCodeCodingDisplay: t.Type<CMRObservationU1TermInfantCodeCodingDisplay> =
    t.recursion("CMRObservationU1TermInfantCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1TermInfantCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364739001";
    id?: string;
    _display?: CMRObservationU1TermInfantCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1TermInfantCodeCoding: t.Type<CMRObservationU1TermInfantCodeCoding> =
    t.recursion("CMRObservationU1TermInfantCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364739001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1TermInfantCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1TermInfantMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Term_Infant|1.0.1">;
    id?: string;
}

export const CMRObservationU1TermInfantMeta: t.Type<CMRObservationU1TermInfantMeta> =
    t.recursion("CMRObservationU1TermInfantMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Term_Infant|1.0.1"
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
export interface CMRObservationU1TermInfantCode {
    coding: Array<CMRObservationU1TermInfantCodeCoding>;
    id?: string;
}

export const CMRObservationU1TermInfantCode: t.Type<CMRObservationU1TermInfantCode> =
    t.recursion("CMRObservationU1TermInfantCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1TermInfantCodeCoding)
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
export interface CMRObservationU1TermInfantSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1TermInfantSubject: t.Type<CMRObservationU1TermInfantSubject> =
    t.recursion("CMRObservationU1TermInfantSubject", () =>
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
export interface CMRObservationU1TermInfantEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1TermInfantEncounter: t.Type<CMRObservationU1TermInfantEncounter> =
    t.recursion("CMRObservationU1TermInfantEncounter", () =>
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
export interface CMRObservationU1TermInfantPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1TermInfantPerformer: t.Type<CMRObservationU1TermInfantPerformer> =
    t.recursion("CMRObservationU1TermInfantPerformer", () =>
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

interface CMRObservationU1TermInfant {
    resourceType: "Observation";
    meta: CMRObservationU1TermInfantMeta;
    status: "final";
    code: CMRObservationU1TermInfantCode;
    subject: CMRObservationU1TermInfantSubject;
    encounter: CMRObservationU1TermInfantEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1TermInfantPerformer>;
}

const CMRObservationU1TermInfant: t.Type<CMRObservationU1TermInfant> = t.recursion(
    "CMRObservationU1TermInfant",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1TermInfantMeta,
                    status: Literal("final"),
                    code: CMRObservationU1TermInfantCode,
                    subject: CMRObservationU1TermInfantSubject,
                    encounter: CMRObservationU1TermInfantEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1TermInfantPerformer)
                })
            ])
        )
);

export default CMRObservationU1TermInfant;
