/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Menstrual_Cycle"

/**
 * Content in other Language.
 */
export interface MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Zykluslänge";
    id?: string;
}

export const MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Zykluslänge")
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
export interface MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blutungsdauer";
    id?: string;
}

export const MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blutungsdauer")
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
export interface MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Letzte Periode";
    id?: string;
}

export const MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Letzte Periode")
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
export interface MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Menstruationszyklus";
    id?: string;
}

export const MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Menstruationszyklus")
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
export interface MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationMenstrualCycleZykluslaengeCodeCodingDisplay {
    id?: string;
    extension?: MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationMenstrualCycleZykluslaengeCodeCodingDisplay: t.Type<MRObservationMenstrualCycleZykluslaengeCodeCodingDisplay> =
    t.recursion("MRObservationMenstrualCycleZykluslaengeCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationMenstrualCycleZykluslaengeCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplay {
    id?: string;
    extension?: MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplay: t.Type<MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplay> =
    t.recursion("MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplay {
    id?: string;
    extension?: MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplay: t.Type<MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplay> =
    t.recursion("MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationMenstrualCycleZykluslaengeCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "161716008";
    id?: string;
    _display?: MRObservationMenstrualCycleZykluslaengeCodeCodingDisplay;
    display?: string;
}

export const MRObservationMenstrualCycleZykluslaengeCodeCoding: t.Type<MRObservationMenstrualCycleZykluslaengeCodeCoding> =
    t.recursion("MRObservationMenstrualCycleZykluslaengeCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("161716008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationMenstrualCycleZykluslaengeCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationMenstrualCycleZykluslaengeValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRObservationMenstrualCycleZykluslaengeValueQuantity: t.Type<MRObservationMenstrualCycleZykluslaengeValueQuantity> =
    t.recursion("MRObservationMenstrualCycleZykluslaengeValueQuantity", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationMenstrualCycleBlutungsdauerCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "161715007";
    id?: string;
    _display?: MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplay;
    display?: string;
}

export const MRObservationMenstrualCycleBlutungsdauerCodeCoding: t.Type<MRObservationMenstrualCycleBlutungsdauerCodeCoding> =
    t.recursion("MRObservationMenstrualCycleBlutungsdauerCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("161715007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationMenstrualCycleBlutungsdauerCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationMenstrualCycleBlutungsdauerValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRObservationMenstrualCycleBlutungsdauerValueQuantity: t.Type<MRObservationMenstrualCycleBlutungsdauerValueQuantity> =
    t.recursion("MRObservationMenstrualCycleBlutungsdauerValueQuantity", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationMenstrualCycleLetztePeriodeCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "161713000";
    id?: string;
    _display?: MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplay;
    display?: string;
}

export const MRObservationMenstrualCycleLetztePeriodeCodeCoding: t.Type<MRObservationMenstrualCycleLetztePeriodeCodeCoding> =
    t.recursion("MRObservationMenstrualCycleLetztePeriodeCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("161713000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationMenstrualCycleLetztePeriodeCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationMenstrualCycleCodeCodingDisplay {
    id?: string;
    extension?: MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationMenstrualCycleCodeCodingDisplay: t.Type<MRObservationMenstrualCycleCodeCodingDisplay> =
    t.recursion("MRObservationMenstrualCycleCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationMenstrualCycleCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationMenstrualCycleZykluslaengeCode {
    coding: Array<MRObservationMenstrualCycleZykluslaengeCodeCoding>;
    text: "Zykluslänge";
    id?: string;
}

export const MRObservationMenstrualCycleZykluslaengeCode: t.Type<MRObservationMenstrualCycleZykluslaengeCode> =
    t.recursion("MRObservationMenstrualCycleZykluslaengeCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationMenstrualCycleZykluslaengeCodeCoding
                    ),
                    text: Literal("Zykluslänge")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationMenstrualCycleBlutungsdauerCode {
    coding: Array<MRObservationMenstrualCycleBlutungsdauerCodeCoding>;
    text: "Blutungsdauer";
    id?: string;
}

export const MRObservationMenstrualCycleBlutungsdauerCode: t.Type<MRObservationMenstrualCycleBlutungsdauerCode> =
    t.recursion("MRObservationMenstrualCycleBlutungsdauerCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationMenstrualCycleBlutungsdauerCodeCoding
                    ),
                    text: Literal("Blutungsdauer")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationMenstrualCycleLetztePeriodeCode {
    coding: Array<MRObservationMenstrualCycleLetztePeriodeCodeCoding>;
    text: "Letzte Periode";
    id?: string;
}

export const MRObservationMenstrualCycleLetztePeriodeCode: t.Type<MRObservationMenstrualCycleLetztePeriodeCode> =
    t.recursion("MRObservationMenstrualCycleLetztePeriodeCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationMenstrualCycleLetztePeriodeCodeCoding
                    ),
                    text: Literal("Letzte Periode")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationMenstrualCycleCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "364304004";
    id?: string;
    _display?: MRObservationMenstrualCycleCodeCodingDisplay;
    display?: string;
}

export const MRObservationMenstrualCycleCodeCoding: t.Type<MRObservationMenstrualCycleCodeCoding> =
    t.recursion("MRObservationMenstrualCycleCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("364304004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationMenstrualCycleCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface MRObservationMenstrualCycleZykluslaenge {
    code: MRObservationMenstrualCycleZykluslaengeCode;
    valueQuantity: MRObservationMenstrualCycleZykluslaengeValueQuantity;
    id?: string;
}

export const MRObservationMenstrualCycleZykluslaenge: t.Type<MRObservationMenstrualCycleZykluslaenge> =
    t.recursion("MRObservationMenstrualCycleZykluslaenge", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationMenstrualCycleZykluslaengeCode,
                    valueQuantity: MRObservationMenstrualCycleZykluslaengeValueQuantity
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface MRObservationMenstrualCycleBlutungsdauer {
    code: MRObservationMenstrualCycleBlutungsdauerCode;
    valueQuantity: MRObservationMenstrualCycleBlutungsdauerValueQuantity;
    id?: string;
}

export const MRObservationMenstrualCycleBlutungsdauer: t.Type<MRObservationMenstrualCycleBlutungsdauer> =
    t.recursion("MRObservationMenstrualCycleBlutungsdauer", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationMenstrualCycleBlutungsdauerCode,
                    valueQuantity: MRObservationMenstrualCycleBlutungsdauerValueQuantity
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface MRObservationMenstrualCycleLetztePeriode {
    code: MRObservationMenstrualCycleLetztePeriodeCode;
    valueDateTime: string;
    id?: string;
}

export const MRObservationMenstrualCycleLetztePeriode: t.Type<MRObservationMenstrualCycleLetztePeriode> =
    t.recursion("MRObservationMenstrualCycleLetztePeriode", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationMenstrualCycleLetztePeriodeCode,
                    valueDateTime: SCALARDateTime
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
export interface MRObservationMenstrualCycleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Menstrual_Cycle|1.1.0">;
    id?: string;
}

export const MRObservationMenstrualCycleMeta: t.Type<MRObservationMenstrualCycleMeta> =
    t.recursion("MRObservationMenstrualCycleMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Menstrual_Cycle|1.1.0"
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
export interface MRObservationMenstrualCycleCode {
    coding: Array<MRObservationMenstrualCycleCodeCoding>;
    id?: string;
}

export const MRObservationMenstrualCycleCode: t.Type<MRObservationMenstrualCycleCode> =
    t.recursion("MRObservationMenstrualCycleCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationMenstrualCycleCodeCoding)
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
export interface MRObservationMenstrualCycleSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationMenstrualCycleSubjectReference: t.Type<MRObservationMenstrualCycleSubjectReference> =
    t.recursion("MRObservationMenstrualCycleSubjectReference", () =>
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
export interface MRObservationMenstrualCycleEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationMenstrualCycleEncounterReference: t.Type<MRObservationMenstrualCycleEncounterReference> =
    t.recursion("MRObservationMenstrualCycleEncounterReference", () =>
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
export interface MRObservationMenstrualCyclePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationMenstrualCyclePerformerReference: t.Type<MRObservationMenstrualCyclePerformerReference> =
    t.recursion("MRObservationMenstrualCyclePerformerReference", () =>
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

interface MRObservationMenstrualCycle {
    resourceType: "Observation";
    meta: MRObservationMenstrualCycleMeta;
    status: "final";
    code: MRObservationMenstrualCycleCode;
    subject: MRObservationMenstrualCycleSubjectReference;
    encounter: MRObservationMenstrualCycleEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationMenstrualCyclePerformerReference>;
    component?: Array<
        | MRObservationMenstrualCycleZykluslaenge
        | MRObservationMenstrualCycleBlutungsdauer
        | MRObservationMenstrualCycleLetztePeriode
    >;
}

const MRObservationMenstrualCycle: t.Type<MRObservationMenstrualCycle> = t.recursion(
    "MRObservationMenstrualCycle",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationMenstrualCycleMeta,
                    status: Literal("final"),
                    code: MRObservationMenstrualCycleCode,
                    subject: MRObservationMenstrualCycleSubjectReference,
                    encounter: MRObservationMenstrualCycleEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationMenstrualCyclePerformerReference),
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationMenstrualCycleZykluslaenge>,
                                t.Type<MRObservationMenstrualCycleBlutungsdauer>,
                                t.Type<MRObservationMenstrualCycleLetztePeriode>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationMenstrualCycleZykluslaenge,
                            MRObservationMenstrualCycleBlutungsdauer,
                            MRObservationMenstrualCycleLetztePeriode
                        ]),
                        [
                            {
                                codec: MRObservationMenstrualCycleZykluslaenge,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "Zykluslänge" }
                            },
                            {
                                codec: MRObservationMenstrualCycleBlutungsdauer,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "Blutungsdauer" }
                            },
                            {
                                codec: MRObservationMenstrualCycleLetztePeriode,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "Letzte Periode" }
                            }
                        ],
                        ["0", "3"]
                    )
                })
            ])
        )
);

export default MRObservationMenstrualCycle;
