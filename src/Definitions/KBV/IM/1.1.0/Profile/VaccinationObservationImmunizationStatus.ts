/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import VaccinationLabImmuneReactionTestPresenceSnomedAllVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationLabImmuneReactionTestPresenceSnomedAll";
import VaccinationLabImmuneReactionTestPresenceVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationLabImmuneReactionTestPresence";
import VaccinationLabTiterImmunityVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationLabTiterImmunity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status"

/**
 * Content in other Language.
 */
export interface VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
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
export interface VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                t.Type<
                                    VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed: t.Type<VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface VaccinationObservationImmunizationStatusCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationObservationImmunizationStatusCodeSnomedCTDisplay: t.Type<VaccinationObservationImmunizationStatusCodeSnomedCTDisplay> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface VaccinationObservationImmunizationStatusCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const VaccinationObservationImmunizationStatusCodeLoincDisplay: t.Type<VaccinationObservationImmunizationStatusCodeLoincDisplay> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface VaccinationObservationImmunizationStatusCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: VaccinationLabImmuneReactionTestPresenceSnomedAllVS;
    id?: string;
    _display?: VaccinationObservationImmunizationStatusCodeSnomedCTDisplay;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationObservationImmunizationStatusCodeSnomedCT: t.Type<VaccinationObservationImmunizationStatusCodeSnomedCT> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: VaccinationLabImmuneReactionTestPresenceSnomedAllVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationObservationImmunizationStatusCodeSnomedCTDisplay,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationObservationImmunizationStatusCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: VaccinationLabImmuneReactionTestPresenceVS;
    id?: string;
    _display?: VaccinationObservationImmunizationStatusCodeLoincDisplay;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationObservationImmunizationStatusCodeLoinc: t.Type<VaccinationObservationImmunizationStatusCodeLoinc> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: VaccinationLabImmuneReactionTestPresenceVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationObservationImmunizationStatusCodeLoincDisplay,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationObservationImmunizationStatusInterpretationCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationObservationImmunizationStatusInterpretationCodingDisplay: t.Type<VaccinationObservationImmunizationStatusInterpretationCodingDisplay> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretationCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface VaccinationObservationImmunizationStatusInterpretationCoding {
    system: string;
    version: string;
    code: VaccinationLabTiterImmunityVS;
    id?: string;
    _display?: VaccinationObservationImmunizationStatusInterpretationCodingDisplay;
    display?: string;
}

export const VaccinationObservationImmunizationStatusInterpretationCoding: t.Type<VaccinationObservationImmunizationStatusInterpretationCoding> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretationCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: VaccinationLabTiterImmunityVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationObservationImmunizationStatusInterpretationCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationObservationImmunizationStatusMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status|1.1.0"
    >;
    id?: string;
}

export const VaccinationObservationImmunizationStatusMeta: t.Type<VaccinationObservationImmunizationStatusMeta> = t.recursion(
    "VaccinationObservationImmunizationStatusMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status|1.1.0"
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
export interface VaccinationObservationImmunizationStatusCode {
    coding: Array<
        | VaccinationObservationImmunizationStatusCodeSnomedCT
        | VaccinationObservationImmunizationStatusCodeLoinc
    >;
    id?: string;
}

export const VaccinationObservationImmunizationStatusCode: t.Type<VaccinationObservationImmunizationStatusCode> = t.recursion(
    "VaccinationObservationImmunizationStatusCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<
                                    VaccinationObservationImmunizationStatusCodeSnomedCT
                                >,
                                t.Type<VaccinationObservationImmunizationStatusCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationObservationImmunizationStatusCodeSnomedCT,
                            VaccinationObservationImmunizationStatusCodeLoinc
                        ]),
                        [
                            {
                                codec: VaccinationObservationImmunizationStatusCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: VaccinationObservationImmunizationStatusCodeLoinc,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["1", "2"]
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
export interface VaccinationObservationImmunizationStatusSubject {
    reference: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusSubject: t.Type<VaccinationObservationImmunizationStatusSubject> = t.recursion(
    "VaccinationObservationImmunizationStatusSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Die Nachweisbarkeit beschreibt das Erreichen der Nachweisgrenze und damit das Ergebnis des Tests. Das Ergebnis ist im Sinne von Positiv/Negativ anzugeben, dazu ist ein Code der LOINC Answer-List zu verwenden. Das Ergebnis erlaubt noch keine Aussage über die Immunität.
 */
export interface VaccinationObservationImmunizationStatusInterpretation {
    coding: Array<VaccinationObservationImmunizationStatusInterpretationCoding>;
    id?: string;
}

export const VaccinationObservationImmunizationStatusInterpretation: t.Type<VaccinationObservationImmunizationStatusInterpretation> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationObservationImmunizationStatusInterpretationCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Ergänzende Angaben zur Titerbestimmung
 */
export interface VaccinationObservationImmunizationStatusNote {
    text: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusNote: t.Type<VaccinationObservationImmunizationStatusNote> = t.recursion(
    "VaccinationObservationImmunizationStatusNote",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARMarkdown
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationObservationImmunizationStatus {
    resourceType: "Observation";
    meta: VaccinationObservationImmunizationStatusMeta;
    status: "final";
    code: VaccinationObservationImmunizationStatusCode;
    subject: VaccinationObservationImmunizationStatusSubject;
    issued: string;
    id?: string;
    text?: Narrative;
    interpretation?: Array<VaccinationObservationImmunizationStatusInterpretation>;
    note?: Array<VaccinationObservationImmunizationStatusNote>;
}

const VaccinationObservationImmunizationStatus: t.Type<VaccinationObservationImmunizationStatus> = t.recursion(
    "VaccinationObservationImmunizationStatus",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: VaccinationObservationImmunizationStatusMeta,
                    status: Literal("final"),
                    code: VaccinationObservationImmunizationStatusCode,
                    subject: VaccinationObservationImmunizationStatusSubject,
                    issued: SCALARInstant
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    interpretation: MaxArray(
                        1,
                        VaccinationObservationImmunizationStatusInterpretation
                    ),
                    note: MaxArray(1, VaccinationObservationImmunizationStatusNote)
                })
            ])
        )
);

export default VaccinationObservationImmunizationStatus;
