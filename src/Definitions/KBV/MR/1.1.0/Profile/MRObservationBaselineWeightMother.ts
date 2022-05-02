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

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother"

/**
 * Content in other Language.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpergewicht";
    id?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergewicht")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpergewicht";
    id?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpergewicht")
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
export interface MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                        extension: t.array(
                            MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                        extension: t.array(
                            MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeSnomedDisplay: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomedDisplay> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBaselineWeightMotherCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeLoincDisplay: t.Type<MRObservationBaselineWeightMotherCodeCodeLoincDisplay> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBaselineWeightMotherCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "400967004";
    id?: string;
    _display?: MRObservationBaselineWeightMotherCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeSnomed: t.Type<MRObservationBaselineWeightMotherCodeCodeSnomed> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("400967004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBaselineWeightMotherCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBaselineWeightMotherCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "29463-7";
    id?: string;
    _display?: MRObservationBaselineWeightMotherCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationBaselineWeightMotherCodeCodeLoinc: t.Type<MRObservationBaselineWeightMotherCodeCodeLoinc> =
    t.recursion("MRObservationBaselineWeightMotherCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("29463-7")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBaselineWeightMotherCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBaselineWeightMotherValueQuantity {
    value: number;
    unit: "kg";
    system: "http://unitsofmeasure.org";
    code: "kg";
    id?: string;
}

export const MRObservationBaselineWeightMotherValueQuantity: t.Type<MRObservationBaselineWeightMotherValueQuantity> =
    t.recursion("MRObservationBaselineWeightMotherValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("kg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("kg")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationBaselineWeightMotherMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother|1.1.0">;
    id?: string;
}

export const MRObservationBaselineWeightMotherMeta: t.Type<MRObservationBaselineWeightMotherMeta> =
    t.recursion("MRObservationBaselineWeightMotherMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother|1.1.0"
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
export interface MRObservationBaselineWeightMotherCode {
    coding: Array<
        | MRObservationBaselineWeightMotherCodeCodeSnomed
        | MRObservationBaselineWeightMotherCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationBaselineWeightMotherCode: t.Type<MRObservationBaselineWeightMotherCode> =
    t.recursion("MRObservationBaselineWeightMotherCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBaselineWeightMotherCodeCodeSnomed>,
                                t.Type<MRObservationBaselineWeightMotherCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBaselineWeightMotherCodeCodeSnomed,
                            MRObservationBaselineWeightMotherCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBaselineWeightMotherCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBaselineWeightMotherCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
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
export interface MRObservationBaselineWeightMotherSubject {
    reference: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherSubject: t.Type<MRObservationBaselineWeightMotherSubject> =
    t.recursion("MRObservationBaselineWeightMotherSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRObservationBaselineWeightMotherEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherEncounter: t.Type<MRObservationBaselineWeightMotherEncounter> =
    t.recursion("MRObservationBaselineWeightMotherEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRObservationBaselineWeightMotherPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBaselineWeightMotherPerformer: t.Type<MRObservationBaselineWeightMotherPerformer> =
    t.recursion("MRObservationBaselineWeightMotherPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationBaselineWeightMother {
    resourceType: "Observation";
    meta: MRObservationBaselineWeightMotherMeta;
    status: "final";
    code: MRObservationBaselineWeightMotherCode;
    subject: MRObservationBaselineWeightMotherSubject;
    encounter: MRObservationBaselineWeightMotherEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationBaselineWeightMotherValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBaselineWeightMotherPerformer>;
}

const MRObservationBaselineWeightMother: t.Type<MRObservationBaselineWeightMother> =
    t.recursion("MRObservationBaselineWeightMother", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBaselineWeightMotherMeta,
                    status: Literal("final"),
                    code: MRObservationBaselineWeightMotherCode,
                    subject: MRObservationBaselineWeightMotherSubject,
                    encounter: MRObservationBaselineWeightMotherEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationBaselineWeightMotherValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBaselineWeightMotherPerformer)
                })
            ])
        )
    );

export default MRObservationBaselineWeightMother;
