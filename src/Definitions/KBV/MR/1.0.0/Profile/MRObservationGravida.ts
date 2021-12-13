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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida"

/**
 * Content in other Language.
 */
export interface MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gravida";
    id?: string;
}

export const MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion("MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Gravida")
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
export interface MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationGravidaCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationGravidaCodeCodingDisplay: t.Type<MRObservationGravidaCodeCodingDisplay> =
    t.recursion("MRObservationGravidaCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationGravidaCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationGravidaCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "161732006";
    id?: string;
    _display?: MRObservationGravidaCodeCodingDisplay;
    display?: string;
}

export const MRObservationGravidaCodeCoding: t.Type<MRObservationGravidaCodeCoding> =
    t.recursion("MRObservationGravidaCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("161732006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationGravidaCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationGravidaValueQuantity {
    value: number;
    system: "http://unitsofmeasure.org";
    code: "1";
    id?: string;
    unit?: string;
}

export const MRObservationGravidaValueQuantity: t.Type<MRObservationGravidaValueQuantity> =
    t.recursion("MRObservationGravidaValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("1")
                }),
                t.partial({
                    id: SCALARString,
                    unit: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationGravidaMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0">;
    id?: string;
}

export const MRObservationGravidaMeta: t.Type<MRObservationGravidaMeta> = t.recursion(
    "MRObservationGravidaMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0"
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
export interface MRObservationGravidaCode {
    coding: Array<MRObservationGravidaCodeCoding>;
    id?: string;
}

export const MRObservationGravidaCode: t.Type<MRObservationGravidaCode> = t.recursion(
    "MRObservationGravidaCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationGravidaCodeCoding)
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
export interface MRObservationGravidaSubject {
    reference: string;
    id?: string;
}

export const MRObservationGravidaSubject: t.Type<MRObservationGravidaSubject> =
    t.recursion("MRObservationGravidaSubject", () =>
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
export interface MRObservationGravidaEncounter {
    reference: string;
    id?: string;
}

export const MRObservationGravidaEncounter: t.Type<MRObservationGravidaEncounter> =
    t.recursion("MRObservationGravidaEncounter", () =>
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
export interface MRObservationGravidaPerformer {
    reference: string;
    id?: string;
}

export const MRObservationGravidaPerformer: t.Type<MRObservationGravidaPerformer> =
    t.recursion("MRObservationGravidaPerformer", () =>
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

interface MRObservationGravida {
    resourceType: "Observation";
    meta: MRObservationGravidaMeta;
    status: "final";
    code: MRObservationGravidaCode;
    subject: MRObservationGravidaSubject;
    encounter: MRObservationGravidaEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationGravidaValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationGravidaPerformer>;
}

const MRObservationGravida: t.Type<MRObservationGravida> = t.recursion(
    "MRObservationGravida",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationGravidaMeta,
                    status: Literal("final"),
                    code: MRObservationGravidaCode,
                    subject: MRObservationGravidaSubject,
                    encounter: MRObservationGravidaEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationGravidaValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationGravidaPerformer)
                })
            ])
        )
);

export default MRObservationGravida;
