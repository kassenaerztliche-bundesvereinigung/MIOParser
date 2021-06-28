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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRHearscreeningResultVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRHearscreeningResult";
import CMRObservationStatusVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRObservationStatus";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Pediatric_Diagnostic_Audiology_Service"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Pädaudiologische Diagnostik";
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Pädaudiologische Diagnostik")
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent {
    url: "content";
    valueString: "Eltern wünschen keine Untersuchung";
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Eltern wünschen keine Untersuchung")
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
    )[];
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed",
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
                                    CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent,
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplay: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplay> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCoding {
    system: string;
    version: string;
    code: CMRHearscreeningResultVS;
    id?: string;
    _display?: CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCoding: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCoding> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRHearscreeningResultVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplay: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplay> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed,
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "306210008";
    id?: string;
    _display?: CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCoding: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCoding> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("306210008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConcept {
    coding: Array<
        CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCoding
    >;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConcept: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConcept> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConceptCoding
                    )
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "183948000:363589002=417491009";
    id?: string;
    _display?: CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCoding: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCoding> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("183948000:363589002=417491009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceMeta: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceMeta> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.0"
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceCode {
    coding: Array<CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCoding>;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceCode: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceCode> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServiceCodeCoding
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceSubject: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceSubject> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceEncounter: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceEncounter> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServicePerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServicePerformer: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServicePerformer> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServicePerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Provides a reason why the expected value in the element Observation.value[x] is missing.
 */
export interface CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReason {
    coding: Array<
        CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCoding
    >;
    id?: string;
}

export const CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReason: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReason> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRObservationU1U5PediatricDiagnosticAudiologyService {
    resourceType: "Observation";
    meta: CMRObservationU1U5PediatricDiagnosticAudiologyServiceMeta;
    status: CMRObservationStatusVS;
    code: CMRObservationU1U5PediatricDiagnosticAudiologyServiceCode;
    subject: CMRObservationU1U5PediatricDiagnosticAudiologyServiceSubject;
    encounter: CMRObservationU1U5PediatricDiagnosticAudiologyServiceEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U5PediatricDiagnosticAudiologyServicePerformer>;
    valueCodeableConcept?: CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConcept;
    dataAbsentReason?: CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReason;
}

const CMRObservationU1U5PediatricDiagnosticAudiologyService: t.Type<CMRObservationU1U5PediatricDiagnosticAudiologyService> = t.recursion(
    "CMRObservationU1U5PediatricDiagnosticAudiologyService",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U5PediatricDiagnosticAudiologyServiceMeta,
                    status: CMRObservationStatusVS,
                    code: CMRObservationU1U5PediatricDiagnosticAudiologyServiceCode,
                    subject: CMRObservationU1U5PediatricDiagnosticAudiologyServiceSubject,
                    encounter: CMRObservationU1U5PediatricDiagnosticAudiologyServiceEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U5PediatricDiagnosticAudiologyServicePerformer
                    ),
                    valueCodeableConcept: CMRObservationU1U5PediatricDiagnosticAudiologyServiceValueCodeableConcept,
                    dataAbsentReason: CMRObservationU1U5PediatricDiagnosticAudiologyServiceDataAbsentReason
                })
            ])
        )
);

export default CMRObservationU1U5PediatricDiagnosticAudiologyService;
