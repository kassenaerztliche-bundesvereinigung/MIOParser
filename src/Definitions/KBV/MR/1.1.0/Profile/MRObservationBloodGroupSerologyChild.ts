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

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import MRAB0SystemFirstExaminationAfterChildbirthVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRAB0SystemFirstExaminationAfterChildbirth";
import MRRhesusSystemVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRRhesusSystem";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child"

/**
 * Content in other Language.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "AB0-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("AB0-System")
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
export interface MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "AB0-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("AB0-System")
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
export interface MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Rhesus-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Rhesus-System")
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
export interface MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Rhesus-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Rhesus-System")
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
export interface MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blutgruppenzugehörigkeit";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blutgruppenzugehörigkeit")
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplay: t.Type<MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplay> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeLoincDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildAB0CodeLoincDisplay: t.Type<MRObservationBloodGroupSerologyChildAB0CodeLoincDisplay> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0CodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyChildAB0CodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplay: t.Type<MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplay: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplay> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplay: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplay> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplay: t.Type<MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,370130000=410656007,246093002=106202009";
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildAB0CodeSnomedCT: t.Type<MRObservationBloodGroupSerologyChildAB0CodeSnomedCT> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0CodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal(
                        "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,370130000=410656007,246093002=106202009"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyChildAB0CodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyChildAB0CodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "883-9";
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildAB0CodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildAB0CodeLoinc: t.Type<MRObservationBloodGroupSerologyChildAB0CodeLoinc> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0CodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("883-9")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyChildAB0CodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRAB0SystemFirstExaminationAfterChildbirthVS;
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCoding: t.Type<MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCoding> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRAB0SystemFirstExaminationAfterChildbirthVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,370130000=410656007,246093002=16951006";
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal(
                        "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,370130000=410656007,246093002=16951006"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationBloodGroupSerologyChildRhesusCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyChildRhesusCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "10331-7";
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCodeLoinc: t.Type<MRObservationBloodGroupSerologyChildRhesusCodeLoinc> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesusCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("10331-7")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyChildRhesusCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRRhesusSystemVS;
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCoding: t.Type<MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCoding> =
    t.recursion(
        "MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: SCALARString,
                        code: MRRhesusSystemVS
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodGroupSerologyChildAB0ValueCodeableConcept {
    coding: Array<MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const MRObservationBloodGroupSerologyChildAB0ValueCodeableConcept: t.Type<MRObservationBloodGroupSerologyChildAB0ValueCodeableConcept> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0ValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyChildAB0ValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodGroupSerologyChildRhesusValueCodeableConcept {
    coding: Array<MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusValueCodeableConcept: t.Type<MRObservationBloodGroupSerologyChildRhesusValueCodeableConcept> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesusValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyChildRhesusValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyChildCodeCodingDisplay {
    id?: string;
    extension?: MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodGroupSerologyChildCodeCodingDisplay: t.Type<MRObservationBloodGroupSerologyChildCodeCodingDisplay> =
    t.recursion("MRObservationBloodGroupSerologyChildCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodGroupSerologyChildCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationBloodGroupSerologyChildAB0Code {
    coding: Array<
        | MRObservationBloodGroupSerologyChildAB0CodeSnomedCT
        | MRObservationBloodGroupSerologyChildAB0CodeLoinc
    >;
    text: "AB0";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildAB0Code: t.Type<MRObservationBloodGroupSerologyChildAB0Code> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0Code", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyChildAB0CodeSnomedCT>,
                                t.Type<MRObservationBloodGroupSerologyChildAB0CodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyChildAB0CodeSnomedCT,
                            MRObservationBloodGroupSerologyChildAB0CodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyChildAB0CodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyChildAB0CodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("AB0")
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
export interface MRObservationBloodGroupSerologyChildRhesusCode {
    coding: Array<
        | MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT
        | MRObservationBloodGroupSerologyChildRhesusCodeLoinc
    >;
    text: "Rhesus";
    id?: string;
}

export const MRObservationBloodGroupSerologyChildRhesusCode: t.Type<MRObservationBloodGroupSerologyChildRhesusCode> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT>,
                                t.Type<MRObservationBloodGroupSerologyChildRhesusCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT,
                            MRObservationBloodGroupSerologyChildRhesusCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyChildRhesusCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyChildRhesusCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("Rhesus")
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
export interface MRObservationBloodGroupSerologyChildCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "365638007+118188004";
    id?: string;
    _display?: MRObservationBloodGroupSerologyChildCodeCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyChildCodeCoding: t.Type<MRObservationBloodGroupSerologyChildCodeCoding> =
    t.recursion("MRObservationBloodGroupSerologyChildCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("365638007+118188004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyChildCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface MRObservationBloodGroupSerologyChildAB0 {
    code: MRObservationBloodGroupSerologyChildAB0Code;
    valueCodeableConcept: MRObservationBloodGroupSerologyChildAB0ValueCodeableConcept;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildAB0: t.Type<MRObservationBloodGroupSerologyChildAB0> =
    t.recursion("MRObservationBloodGroupSerologyChildAB0", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodGroupSerologyChildAB0Code,
                    valueCodeableConcept:
                        MRObservationBloodGroupSerologyChildAB0ValueCodeableConcept
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
export interface MRObservationBloodGroupSerologyChildRhesus {
    code: MRObservationBloodGroupSerologyChildRhesusCode;
    valueCodeableConcept: MRObservationBloodGroupSerologyChildRhesusValueCodeableConcept;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildRhesus: t.Type<MRObservationBloodGroupSerologyChildRhesus> =
    t.recursion("MRObservationBloodGroupSerologyChildRhesus", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodGroupSerologyChildRhesusCode,
                    valueCodeableConcept:
                        MRObservationBloodGroupSerologyChildRhesusValueCodeableConcept
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
export interface MRObservationBloodGroupSerologyChildMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child|1.1.0">;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildMeta: t.Type<MRObservationBloodGroupSerologyChildMeta> =
    t.recursion("MRObservationBloodGroupSerologyChildMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child|1.1.0"
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
export interface MRObservationBloodGroupSerologyChildCode {
    coding: Array<MRObservationBloodGroupSerologyChildCodeCoding>;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildCode: t.Type<MRObservationBloodGroupSerologyChildCode> =
    t.recursion("MRObservationBloodGroupSerologyChildCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyChildCodeCoding
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
export interface MRObservationBloodGroupSerologyChildSubject {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildSubject: t.Type<MRObservationBloodGroupSerologyChildSubject> =
    t.recursion("MRObservationBloodGroupSerologyChildSubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRObservationBloodGroupSerologyChildEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildEncounter: t.Type<MRObservationBloodGroupSerologyChildEncounter> =
    t.recursion("MRObservationBloodGroupSerologyChildEncounter", () =>
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
export interface MRObservationBloodGroupSerologyChildPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyChildPerformer: t.Type<MRObservationBloodGroupSerologyChildPerformer> =
    t.recursion("MRObservationBloodGroupSerologyChildPerformer", () =>
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

interface MRObservationBloodGroupSerologyChild {
    resourceType: "Observation";
    meta: MRObservationBloodGroupSerologyChildMeta;
    status: "final";
    code: MRObservationBloodGroupSerologyChildCode;
    subject: MRObservationBloodGroupSerologyChildSubject;
    encounter: MRObservationBloodGroupSerologyChildEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBloodGroupSerologyChildPerformer>;
    component?: Array<
        | MRObservationBloodGroupSerologyChildAB0
        | MRObservationBloodGroupSerologyChildRhesus
    >;
}

const MRObservationBloodGroupSerologyChild: t.Type<MRObservationBloodGroupSerologyChild> =
    t.recursion("MRObservationBloodGroupSerologyChild", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBloodGroupSerologyChildMeta,
                    status: Literal("final"),
                    code: MRObservationBloodGroupSerologyChildCode,
                    subject: MRObservationBloodGroupSerologyChildSubject,
                    encounter: MRObservationBloodGroupSerologyChildEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBloodGroupSerologyChildPerformer),
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyChildAB0>,
                                t.Type<MRObservationBloodGroupSerologyChildRhesus>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyChildAB0,
                            MRObservationBloodGroupSerologyChildRhesus
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyChildAB0,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "AB0" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyChildRhesus,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "Rhesus" }
                            }
                        ],
                        ["0", "2"]
                    )
                })
            ])
        )
    );

export default MRObservationBloodGroupSerologyChild;
