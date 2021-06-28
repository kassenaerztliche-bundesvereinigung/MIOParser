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
import CMRHearscreeningMethodVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRHearscreeningMethod";
import CMRHearscreeningResultVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRHearscreeningResult";
import CMRObservationStatusVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRObservationStatus";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Neonatal_Hearscreening"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent {
    url: "content";
    valueString: "Eltern wünschen keine Untersuchung";
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent: t.Type<CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent",
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
export interface CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
    )[];
}

export const CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed: t.Type<CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed",
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
                                    CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomedContent,
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
export interface CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplay: t.Type<CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplay> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplay: t.Type<CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplay> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCoding {
    system: string;
    version: string;
    code: CMRHearscreeningResultVS;
    id?: string;
    _display?: CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCoding: t.Type<CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCoding> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCoding",
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
                    _display: CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplay: t.Type<CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplay> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplayAnzeigenameDataAbsentReasonSnomed,
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
export interface CMRObservationU1U5NeonatalHearscreeningCodeCoding {
    system: string;
    version: string;
    code: CMRHearscreeningMethodVS;
    id?: string;
    _display?: CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningCodeCoding: t.Type<CMRObservationU1U5NeonatalHearscreeningCodeCoding> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRHearscreeningMethodVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U5NeonatalHearscreeningCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U5NeonatalHearscreeningValueCodeableConcept {
    coding: Array<CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCoding>;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningValueCodeableConcept: t.Type<CMRObservationU1U5NeonatalHearscreeningValueCodeableConcept> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5NeonatalHearscreeningValueCodeableConceptCoding
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
export interface CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "183948000:363589002=417491009";
    id?: string;
    _display?: CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCoding: t.Type<CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCoding> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCoding",
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
                    _display: CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U5NeonatalHearscreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Neonatal_Hearscreening|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningMeta: t.Type<CMRObservationU1U5NeonatalHearscreeningMeta> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Neonatal_Hearscreening|1.0.0"
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
export interface CMRObservationU1U5NeonatalHearscreeningCode {
    coding: Array<CMRObservationU1U5NeonatalHearscreeningCodeCoding>;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningCode: t.Type<CMRObservationU1U5NeonatalHearscreeningCode> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5NeonatalHearscreeningCodeCoding
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
export interface CMRObservationU1U5NeonatalHearscreeningSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningSubject: t.Type<CMRObservationU1U5NeonatalHearscreeningSubject> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningSubject",
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
export interface CMRObservationU1U5NeonatalHearscreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningEncounter: t.Type<CMRObservationU1U5NeonatalHearscreeningEncounter> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningEncounter",
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
export interface CMRObservationU1U5NeonatalHearscreeningPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningPerformer: t.Type<CMRObservationU1U5NeonatalHearscreeningPerformer> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningPerformer",
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
export interface CMRObservationU1U5NeonatalHearscreeningDataAbsentReason {
    coding: Array<CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCoding>;
    id?: string;
}

export const CMRObservationU1U5NeonatalHearscreeningDataAbsentReason: t.Type<CMRObservationU1U5NeonatalHearscreeningDataAbsentReason> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreeningDataAbsentReason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5NeonatalHearscreeningDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRObservationU1U5NeonatalHearscreening {
    resourceType: "Observation";
    meta: CMRObservationU1U5NeonatalHearscreeningMeta;
    status: CMRObservationStatusVS;
    code: CMRObservationU1U5NeonatalHearscreeningCode;
    subject: CMRObservationU1U5NeonatalHearscreeningSubject;
    encounter: CMRObservationU1U5NeonatalHearscreeningEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U5NeonatalHearscreeningPerformer>;
    valueCodeableConcept?: CMRObservationU1U5NeonatalHearscreeningValueCodeableConcept;
    dataAbsentReason?: CMRObservationU1U5NeonatalHearscreeningDataAbsentReason;
}

const CMRObservationU1U5NeonatalHearscreening: t.Type<CMRObservationU1U5NeonatalHearscreening> = t.recursion(
    "CMRObservationU1U5NeonatalHearscreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U5NeonatalHearscreeningMeta,
                    status: CMRObservationStatusVS,
                    code: CMRObservationU1U5NeonatalHearscreeningCode,
                    subject: CMRObservationU1U5NeonatalHearscreeningSubject,
                    encounter: CMRObservationU1U5NeonatalHearscreeningEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U5NeonatalHearscreeningPerformer
                    ),
                    valueCodeableConcept: CMRObservationU1U5NeonatalHearscreeningValueCodeableConcept,
                    dataAbsentReason: CMRObservationU1U5NeonatalHearscreeningDataAbsentReason
                })
            ])
        )
);

export default CMRObservationU1U5NeonatalHearscreening;
