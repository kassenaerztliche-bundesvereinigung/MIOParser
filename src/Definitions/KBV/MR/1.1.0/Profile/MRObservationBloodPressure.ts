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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure"

/**
 * Content in other Language.
 */
export interface MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "systolischer Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("systolischer Blutdruck")
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
export interface MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "systolischer Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("systolischer Blutdruck")
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
export interface MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "diastolischer Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("diastolischer Blutdruck")
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
export interface MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "diastolischer Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("diastolischer Blutdruck")
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
export interface MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blutdruck")
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
export interface MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blutdruck")
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
export interface MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                        MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureSystolicBPCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBloodPressureSystolicBPCodeLoincDisplay: t.Type<MRObservationBloodPressureSystolicBPCodeLoincDisplay> =
    t.recursion("MRObservationBloodPressureSystolicBPCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodPressureSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplay: t.Type<MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplay> =
    t.recursion("MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureDiastolicBPCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBloodPressureDiastolicBPCodeLoincDisplay: t.Type<MRObservationBloodPressureDiastolicBPCodeLoincDisplay> =
    t.recursion("MRObservationBloodPressureDiastolicBPCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodPressureDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplay: t.Type<MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplay> =
    t.recursion("MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureSystolicBPCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8480-6";
    display: "Systolic blood pressure";
    id?: string;
    _display?: MRObservationBloodPressureSystolicBPCodeLoincDisplay;
}

export const MRObservationBloodPressureSystolicBPCodeLoinc: t.Type<MRObservationBloodPressureSystolicBPCodeLoinc> =
    t.recursion("MRObservationBloodPressureSystolicBPCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("8480-6"),
                    display: Literal("Systolic blood pressure")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureSystolicBPCodeLoincDisplay
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureSystolicBPCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200131";
    code: "271649006";
    display: "Systolic blood pressure (observable entity)";
    id?: string;
    _display?: MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplay;
    userSelected?: boolean;
}

export const MRObservationBloodPressureSystolicBPCodeCodeSnomed: t.Type<MRObservationBloodPressureSystolicBPCodeCodeSnomed> =
    t.recursion("MRObservationBloodPressureSystolicBPCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200131"
                    ),
                    code: Literal("271649006"),
                    display: Literal("Systolic blood pressure (observable entity)")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureSystolicBPCodeCodeSnomedDisplay,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureDiastolicBPCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "8462-4";
    display: "Diastolic blood pressure";
    id?: string;
    _display?: MRObservationBloodPressureDiastolicBPCodeLoincDisplay;
}

export const MRObservationBloodPressureDiastolicBPCodeLoinc: t.Type<MRObservationBloodPressureDiastolicBPCodeLoinc> =
    t.recursion("MRObservationBloodPressureDiastolicBPCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("8462-4"),
                    display: Literal("Diastolic blood pressure")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureDiastolicBPCodeLoincDisplay
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureDiastolicBPCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200131";
    code: "271650006";
    display: "Diastolic blood pressure (observable entity)";
    id?: string;
    _display?: MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplay;
}

export const MRObservationBloodPressureDiastolicBPCodeCodeSnomed: t.Type<MRObservationBloodPressureDiastolicBPCodeCodeSnomed> =
    t.recursion("MRObservationBloodPressureDiastolicBPCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200131"
                    ),
                    code: Literal("271650006"),
                    display: Literal("Diastolic blood pressure (observable entity)")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureDiastolicBPCodeCodeSnomedDisplay
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBloodPressureCodeCodeSnomedDisplay: t.Type<MRObservationBloodPressureCodeCodeSnomedDisplay> =
    t.recursion("MRObservationBloodPressureCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBloodPressureCodeLoincDisplay: t.Type<MRObservationBloodPressureCodeLoincDisplay> =
    t.recursion("MRObservationBloodPressureCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodPressureSystolicBPValueQuantity {
    value: number;
    unit: "mm Hg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
}

export const MRObservationBloodPressureSystolicBPValueQuantity: t.Type<MRObservationBloodPressureSystolicBPValueQuantity> =
    t.recursion("MRObservationBloodPressureSystolicBPValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mm Hg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm[Hg]")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodPressureDiastolicBPValueQuantity {
    value: number;
    unit: "mm Hg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
}

export const MRObservationBloodPressureDiastolicBPValueQuantity: t.Type<MRObservationBloodPressureDiastolicBPValueQuantity> =
    t.recursion("MRObservationBloodPressureDiastolicBPValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mm Hg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm[Hg]")
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
export interface MRObservationBloodPressureCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200131";
    code: "75367002";
    display: "Blood pressure (observable entity)";
    id?: string;
    _display?: MRObservationBloodPressureCodeCodeSnomedDisplay;
}

export const MRObservationBloodPressureCodeCodeSnomed: t.Type<MRObservationBloodPressureCodeCodeSnomed> =
    t.recursion("MRObservationBloodPressureCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200131"
                    ),
                    code: Literal("75367002"),
                    display: Literal("Blood pressure (observable entity)")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureCodeCodeSnomedDisplay
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "85354-9";
    display: "Blood pressure panel with all children optional";
    id?: string;
    _display?: MRObservationBloodPressureCodeLoincDisplay;
}

export const MRObservationBloodPressureCodeLoinc: t.Type<MRObservationBloodPressureCodeLoinc> =
    t.recursion("MRObservationBloodPressureCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("85354-9"),
                    display: Literal("Blood pressure panel with all children optional")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureCodeLoincDisplay
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationBloodPressureSystolicBPCode {
    coding: Array<
        | MRObservationBloodPressureSystolicBPCodeLoinc
        | MRObservationBloodPressureSystolicBPCodeCodeSnomed
    >;
    text: "systolisch";
    id?: string;
}

export const MRObservationBloodPressureSystolicBPCode: t.Type<MRObservationBloodPressureSystolicBPCode> =
    t.recursion("MRObservationBloodPressureSystolicBPCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureSystolicBPCodeLoinc>,
                                t.Type<MRObservationBloodPressureSystolicBPCodeCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureSystolicBPCodeLoinc,
                            MRObservationBloodPressureSystolicBPCodeCodeSnomed
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureSystolicBPCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        version: "2.69",
                                        display: "Systolic blood pressure"
                                    }
                                }
                            },
                            {
                                codec: MRObservationBloodPressureSystolicBPCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        system: "http://snomed.info/sct",
                                        version:
                                            "http://snomed.info/sct/900000000000207008/version/20200131",
                                        code: "271649006",
                                        display:
                                            "Systolic blood pressure (observable entity)"
                                    }
                                }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("systolisch")
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
export interface MRObservationBloodPressureDiastolicBPCode {
    coding: Array<
        | MRObservationBloodPressureDiastolicBPCodeLoinc
        | MRObservationBloodPressureDiastolicBPCodeCodeSnomed
    >;
    text: "diastolisch";
    id?: string;
}

export const MRObservationBloodPressureDiastolicBPCode: t.Type<MRObservationBloodPressureDiastolicBPCode> =
    t.recursion("MRObservationBloodPressureDiastolicBPCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureDiastolicBPCodeLoinc>,
                                t.Type<MRObservationBloodPressureDiastolicBPCodeCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureDiastolicBPCodeLoinc,
                            MRObservationBloodPressureDiastolicBPCodeCodeSnomed
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureDiastolicBPCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        version: "2.69",
                                        display: "Diastolic blood pressure"
                                    }
                                }
                            },
                            {
                                codec: MRObservationBloodPressureDiastolicBPCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        system: "http://snomed.info/sct",
                                        version:
                                            "http://snomed.info/sct/900000000000207008/version/20200131",
                                        code: "271650006",
                                        display:
                                            "Diastolic blood pressure (observable entity)"
                                    }
                                }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("diastolisch")
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
export interface MRObservationBloodPressureSystolicBP {
    code: MRObservationBloodPressureSystolicBPCode;
    valueQuantity: MRObservationBloodPressureSystolicBPValueQuantity;
    id?: string;
}

export const MRObservationBloodPressureSystolicBP: t.Type<MRObservationBloodPressureSystolicBP> =
    t.recursion("MRObservationBloodPressureSystolicBP", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodPressureSystolicBPCode,
                    valueQuantity: MRObservationBloodPressureSystolicBPValueQuantity
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
export interface MRObservationBloodPressureDiastolicBP {
    code: MRObservationBloodPressureDiastolicBPCode;
    valueQuantity: MRObservationBloodPressureDiastolicBPValueQuantity;
    id?: string;
}

export const MRObservationBloodPressureDiastolicBP: t.Type<MRObservationBloodPressureDiastolicBP> =
    t.recursion("MRObservationBloodPressureDiastolicBP", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodPressureDiastolicBPCode,
                    valueQuantity: MRObservationBloodPressureDiastolicBPValueQuantity
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
export interface MRObservationBloodPressureMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.1.0">;
    id?: string;
}

export const MRObservationBloodPressureMeta: t.Type<MRObservationBloodPressureMeta> =
    t.recursion("MRObservationBloodPressureMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.1.0"
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
export interface MRObservationBloodPressureCode {
    coding: Array<
        MRObservationBloodPressureCodeCodeSnomed | MRObservationBloodPressureCodeLoinc
    >;
    id?: string;
}

export const MRObservationBloodPressureCode: t.Type<MRObservationBloodPressureCode> =
    t.recursion("MRObservationBloodPressureCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureCodeCodeSnomed>,
                                t.Type<MRObservationBloodPressureCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureCodeCodeSnomed,
                            MRObservationBloodPressureCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        system: "http://snomed.info/sct",
                                        version:
                                            "http://snomed.info/sct/900000000000207008/version/20200131",
                                        code: "75367002",
                                        display: "Blood pressure (observable entity)"
                                    }
                                }
                            },
                            {
                                codec: MRObservationBloodPressureCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        system: "http://loinc.org",
                                        version: "2.69",
                                        code: "85354-9",
                                        display:
                                            "Blood pressure panel with all children optional"
                                    }
                                }
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
export interface MRObservationBloodPressureSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationBloodPressureSubjectReference: t.Type<MRObservationBloodPressureSubjectReference> =
    t.recursion("MRObservationBloodPressureSubjectReference", () =>
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
export interface MRObservationBloodPressureEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationBloodPressureEncounterReference: t.Type<MRObservationBloodPressureEncounterReference> =
    t.recursion("MRObservationBloodPressureEncounterReference", () =>
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
export interface MRObservationBloodPressurePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationBloodPressurePerformerReference: t.Type<MRObservationBloodPressurePerformerReference> =
    t.recursion("MRObservationBloodPressurePerformerReference", () =>
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

interface MRObservationBloodPressure {
    resourceType: "Observation";
    meta: MRObservationBloodPressureMeta;
    status: "final";
    code: MRObservationBloodPressureCode;
    subject: MRObservationBloodPressureSubjectReference;
    encounter: MRObservationBloodPressureEncounterReference;
    effectiveDateTime: string;
    component: Array<
        MRObservationBloodPressureSystolicBP | MRObservationBloodPressureDiastolicBP
    >;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBloodPressurePerformerReference>;
}

const MRObservationBloodPressure: t.Type<MRObservationBloodPressure> = t.recursion(
    "MRObservationBloodPressure",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBloodPressureMeta,
                    status: Literal("final"),
                    code: MRObservationBloodPressureCode,
                    subject: MRObservationBloodPressureSubjectReference,
                    encounter: MRObservationBloodPressureEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureSystolicBP>,
                                t.Type<MRObservationBloodPressureDiastolicBP>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureSystolicBP,
                            MRObservationBloodPressureDiastolicBP
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureSystolicBP,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.text", value: "systolisch" }
                            },
                            {
                                codec: MRObservationBloodPressureDiastolicBP,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "code.text", value: "diastolisch" }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBloodPressurePerformerReference)
                })
            ])
        )
);

export default MRObservationBloodPressure;
