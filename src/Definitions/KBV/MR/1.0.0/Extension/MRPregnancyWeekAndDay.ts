import * as t from "io-ts";
import { Literal, Excess, ReqArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import TerminologyGerman from "../../../../../Definitions/KBVBase/1.1.0/Extension/TerminologyGerman";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day"

/**
 * Content in other Language.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage (korrigiert)";
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Schwangerschaftswoche+Tage (korrigiert)")
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: TerminologyGerman[];
    value?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(TerminologyGerman),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: string;
    id?: string;
    _display?: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: SCALARCode
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006:246501002=278395004";
    id?: string;
    _display?: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("57036006:246501002=278395004")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTageValueQuantity> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConcept> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConceptCoding
                        )
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity",
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity",
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept {
    coding: Array<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding>;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswoche")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueQuantity:
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage> =
    t.recursion("MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("ergaenzendeTage"),
                    valueQuantity:
                        MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur> =
    t.recursion("MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur", () =>
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode> =
    t.recursion("MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept:
                        MRPregnancyWeekAndDaySchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert {
    url: "schwangerschaftswocheKorrigiert";
    valueQuantity: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswocheKorrigiert"),
                        valueQuantity:
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert {
    url: "ergaenzendeTageKorrigiert";
    valueQuantity: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTageKorrigiert"),
                        valueQuantity:
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert {
    url: "korrekturKorrigiert";
    id?: string;
    valueBoolean?: true;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("korrekturKorrigiert")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueBoolean: Literal(true)
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert {
    url: "kodeKorrigiert";
    valueCodeableConcept: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept;
    id?: string;
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert> =
    t.recursion(
        "MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kodeKorrigiert"),
                        valueCodeableConcept:
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept
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
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode
    )[];
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunkt: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunkt> =
    t.recursion("MRPregnancyWeekAndDaySchwangerschaftszeitpunkt", () =>
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
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode
                        ]),
                        [
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktSchwangerschaftswoche,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "schwangerschaftswoche" }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktErgaenzendeTage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "ergaenzendeTage" }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrektur,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrektur" }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKode,
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
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert {
    url: "schwangerschaftszeitpunktKorrigiert";
    id?: string;
    extension?: (
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert
    )[];
}

export const MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert: t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert> =
    t.recursion("MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("schwangerschaftszeitpunktKorrigiert")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert
                        ]),
                        [
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "schwangerschaftswocheKorrigiert"
                                }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "ergaenzendeTageKorrigiert"
                                }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrekturKorrigiert" }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiertKodeKorrigiert,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kodeKorrigiert" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
    );

interface MRPregnancyWeekAndDay {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunkt
        | MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert
    )[];
}

const MRPregnancyWeekAndDay: t.Type<MRPregnancyWeekAndDay> = t.recursion(
    "MRPregnancyWeekAndDay",
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
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunkt>,
                                t.Type<MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunkt,
                            MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert
                        ]),
                        [
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunkt,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "schwangerschaftszeitpunkt"
                                }
                            },
                            {
                                codec: MRPregnancyWeekAndDaySchwangerschaftszeitpunktKorrigiert,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "schwangerschaftszeitpunktKorrigiert"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

export default MRPregnancyWeekAndDay;
