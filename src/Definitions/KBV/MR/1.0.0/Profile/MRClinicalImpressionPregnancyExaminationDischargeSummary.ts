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
import MRRiskCharacteristicsDischargeSummaryVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRRiskCharacteristicsDischargeSummary";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Examination_Discharge_Summary"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Erst-Untersuchung in SSW";
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Erst-Untersuchung in SSW")
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "424441002";
    id?: string;
    _display?: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("424441002")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: Literal("Wochen"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("wk")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: Literal("Tage"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("d")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswoche")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueQuantity:
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTage"),
                        valueQuantity:
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("korrektur")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueBoolean: Literal(false)
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kode"),
                        valueCodeableConcept:
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
 * Content in other Language.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaft";
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Schwangerschaft")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
    )[];
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftszeitpunkt")
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche>,
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage>,
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur>,
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                    occurrence: ["1", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftswoche"
                                    }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                    occurrence: ["0", "1"],
                                    sliceBy: { path: "url", value: "ergaenzendeTage" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "korrektur" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "kode" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * In dieser Extension können Schwangerschaftswoche und ergänzende Tage dokumentiert werden.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
    )[];
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftszeitpunkt"
                                    }
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplay: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRRiskCharacteristicsDischargeSummaryVS;
    id?: string;
    _display?: MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCoding: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCoding> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: SCALARString,
                        code: MRRiskCharacteristicsDischargeSummaryVS
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "721923008";
    id?: string;
    _display?: MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCoding: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCoding> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("721923008")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The point in time or period over which the subject was assessed.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTime {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTime: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTime> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTime",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTimeZeitpunktDerUntersuchung,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    value: SCALARDateTime
                })
            )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationCode {
    text: "Abschlussuntersuchungen zur Schwangerschaft";
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationCode: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationCode> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        text: Literal("Abschlussuntersuchungen zur Schwangerschaft")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A record of a specific investigation that was undertaken.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationItem {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationItem: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationItem> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationItem",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic|1.0.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy|1.0.0"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConcept {
    coding: Array<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCoding>;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConcept: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConcept> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConceptCoding
                        )
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
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Examination_Discharge_Summary|1.0.0">;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryMeta: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryMeta> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummaryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Examination_Discharge_Summary|1.0.0"
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
 * Categorizes the type of clinical assessment performed.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryCode {
    coding: Array<MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryCode: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryCode> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummaryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient or group of individuals assessed as part of this record.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummarySubject {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummarySubject: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummarySubject> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummarySubject", () =>
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
 * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryEncounter {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryEncounter: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryEncounter> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummaryEncounter", () =>
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
 * The clinician performing the assessment.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryAssessor {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryAssessor: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryAssessor> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummaryAssessor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigation {
    code: MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationCode;
    id?: string;
    item?: MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationItem[];
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigation: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigation> =
    t.recursion(
        "MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigation",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        code: MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationCode
                    }),
                    t.partial({
                        id: SCALARString,
                        item: t.array(
                            MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigationItem
                        )
                    })
                ])
            )
    );

/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export interface MRClinicalImpressionPregnancyExaminationDischargeSummaryFinding {
    itemCodeableConcept: MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionPregnancyExaminationDischargeSummaryFinding: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummaryFinding> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummaryFinding", () =>
        Excess(
            t.intersection([
                t.type({
                    itemCodeableConcept:
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryFindingItemCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRClinicalImpressionPregnancyExaminationDischargeSummary {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionPregnancyExaminationDischargeSummaryMeta;
    status: "completed";
    code: MRClinicalImpressionPregnancyExaminationDischargeSummaryCode;
    subject: MRClinicalImpressionPregnancyExaminationDischargeSummarySubject;
    encounter: MRClinicalImpressionPregnancyExaminationDischargeSummaryEncounter;
    id?: string;
    text?: Narrative;
    _effectiveDateTime?: MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTime;
    effectiveDateTime?: string;
    assessor?: MRClinicalImpressionPregnancyExaminationDischargeSummaryAssessor;
    investigation?: Array<MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigation>;
    finding?: MRClinicalImpressionPregnancyExaminationDischargeSummaryFinding[];
}

const MRClinicalImpressionPregnancyExaminationDischargeSummary: t.Type<MRClinicalImpressionPregnancyExaminationDischargeSummary> =
    t.recursion("MRClinicalImpressionPregnancyExaminationDischargeSummary", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionPregnancyExaminationDischargeSummaryMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionPregnancyExaminationDischargeSummaryCode,
                    subject:
                        MRClinicalImpressionPregnancyExaminationDischargeSummarySubject,
                    encounter:
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryEncounter
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    _effectiveDateTime:
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    assessor:
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryAssessor,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryInvestigation
                    ),
                    finding: t.array(
                        MRClinicalImpressionPregnancyExaminationDischargeSummaryFinding
                    )
                })
            ])
        )
    );

export default MRClinicalImpressionPregnancyExaminationDischargeSummary;
