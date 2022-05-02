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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Delivery_Information"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Schwangerschaftswoche+Tage")
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "412726003";
    id?: string;
    _display?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210731"
                        ),
                        code: Literal("412726003")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswoche")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueQuantity:
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTage"),
                        valueQuantity:
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: boolean;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("korrektur")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueBoolean: SCALARBoolean
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kode"),
                        valueCodeableConcept:
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Abschluss-Untersuchung/Epikrise-Geburt";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Abschluss-Untersuchung/Epikrise-Geburt")
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage
        | MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur
        | MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
    )[];
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt",
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
                                    t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche>,
                                    t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage>,
                                    t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur>,
                                    t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche,
                                MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage,
                                MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur,
                                MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
                            ]),
                            [
                                {
                                    codec: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche,
                                    occurrence: ["1", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftswoche"
                                    }
                                },
                                {
                                    codec: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage,
                                    occurrence: ["0", "1"],
                                    sliceBy: { path: "url", value: "ergaenzendeTage" }
                                },
                                {
                                    codec: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "korrektur" }
                                },
                                {
                                    codec: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode,
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * In dieser Extension können Schwangerschaftswoche und ergänzende Tage dokumentiert werden.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunkt {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt[];
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunkt: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunkt> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunkt",
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
                        extension: t.array(
                            MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplay: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "118215003";
    id?: string;
    _display?: MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationCodeCoding: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationCodeCoding> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("118215003")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRClinicalImpressionBirthExaminationDeliveryInformationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The point in time or period over which the subject was assessed.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTime {
    id?: string;
    extension?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunkt[];
    value?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTime: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTime> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTime",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTimeSchwangerschaftszeitpunkt
                    ),
                    value: SCALARDateTime
                })
            )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationCode {
    text: "Angaben zur Entbindung";
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationCode: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationCode> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationCode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        text: Literal("Angaben zur Entbindung")
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationItem {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationItem: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationItem> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationItem",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth|1.1.0"
                        ])
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Delivery_Information|1.1.0">;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationMeta: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationMeta> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Delivery_Information|1.1.0"
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationCode {
    coding: Array<MRClinicalImpressionBirthExaminationDeliveryInformationCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationCode: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationCode> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionBirthExaminationDeliveryInformationCodeCoding
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationSubject {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationSubject: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationSubject> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformationSubject", () =>
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
 * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationEncounter {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationEncounter: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationEncounter> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformationEncounter", () =>
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
 * The clinician performing the assessment.
 */
export interface MRClinicalImpressionBirthExaminationDeliveryInformationAssessor {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationAssessor: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationAssessor> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformationAssessor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
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
export interface MRClinicalImpressionBirthExaminationDeliveryInformationInvestigation {
    code: MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationCode;
    id?: string;
    item?: Array<MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationItem>;
}

export const MRClinicalImpressionBirthExaminationDeliveryInformationInvestigation: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformationInvestigation> =
    t.recursion(
        "MRClinicalImpressionBirthExaminationDeliveryInformationInvestigation",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        code: MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationCode
                    }),
                    t.partial({
                        id: SCALARString,
                        item: MaxArray(
                            1,
                            MRClinicalImpressionBirthExaminationDeliveryInformationInvestigationItem
                        )
                    })
                ])
            )
    );

interface MRClinicalImpressionBirthExaminationDeliveryInformation {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionBirthExaminationDeliveryInformationMeta;
    status: "completed";
    code: MRClinicalImpressionBirthExaminationDeliveryInformationCode;
    subject: MRClinicalImpressionBirthExaminationDeliveryInformationSubject;
    encounter: MRClinicalImpressionBirthExaminationDeliveryInformationEncounter;
    id?: string;
    text?: Narrative;
    _effectiveDateTime?: MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTime;
    effectiveDateTime?: string;
    assessor?: MRClinicalImpressionBirthExaminationDeliveryInformationAssessor;
    investigation?: Array<MRClinicalImpressionBirthExaminationDeliveryInformationInvestigation>;
    note?: Array<Annotation>;
}

const MRClinicalImpressionBirthExaminationDeliveryInformation: t.Type<MRClinicalImpressionBirthExaminationDeliveryInformation> =
    t.recursion("MRClinicalImpressionBirthExaminationDeliveryInformation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionBirthExaminationDeliveryInformationMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionBirthExaminationDeliveryInformationCode,
                    subject:
                        MRClinicalImpressionBirthExaminationDeliveryInformationSubject,
                    encounter:
                        MRClinicalImpressionBirthExaminationDeliveryInformationEncounter
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    _effectiveDateTime:
                        MRClinicalImpressionBirthExaminationDeliveryInformationEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    assessor:
                        MRClinicalImpressionBirthExaminationDeliveryInformationAssessor,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionBirthExaminationDeliveryInformationInvestigation
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRClinicalImpressionBirthExaminationDeliveryInformation;
