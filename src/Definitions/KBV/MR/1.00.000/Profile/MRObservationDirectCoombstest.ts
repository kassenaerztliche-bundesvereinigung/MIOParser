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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRDirectCoombstestVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRDirectCoombstest";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest"

/**
 * Content in other Language.
 */
export interface MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Direkter Coombstest";
    id?: string;
}

export const MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Direkter Coombstest")
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
export interface MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationDirectCoombstestValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const MRObservationDirectCoombstestValueCodeableConceptCodingDisplay: t.Type<MRObservationDirectCoombstestValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationDirectCoombstestValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationDirectCoombstestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface MRObservationDirectCoombstestCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationDirectCoombstestCodeCodingDisplay: t.Type<MRObservationDirectCoombstestCodeCodingDisplay> = t.recursion(
    "MRObservationDirectCoombstestCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationDirectCoombstestCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationDirectCoombstestValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRDirectCoombstestVS;
    id?: string;
    _display?: MRObservationDirectCoombstestValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationDirectCoombstestValueCodeableConceptCoding: t.Type<MRObservationDirectCoombstestValueCodeableConceptCoding> = t.recursion(
    "MRObservationDirectCoombstestValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRDirectCoombstestVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDirectCoombstestValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationDirectCoombstestCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "77020008";
    id?: string;
    _display?: MRObservationDirectCoombstestCodeCodingDisplay;
    display?: string;
}

export const MRObservationDirectCoombstestCodeCoding: t.Type<MRObservationDirectCoombstestCodeCoding> = t.recursion(
    "MRObservationDirectCoombstestCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("77020008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDirectCoombstestCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationDirectCoombstestValueCodeableConcept {
    coding: Array<MRObservationDirectCoombstestValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationDirectCoombstestValueCodeableConcept: t.Type<MRObservationDirectCoombstestValueCodeableConcept> = t.recursion(
    "MRObservationDirectCoombstestValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationDirectCoombstestValueCodeableConceptCoding
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
export interface MRObservationDirectCoombstestMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest|1.0.0"
    >;
    id?: string;
}

export const MRObservationDirectCoombstestMeta: t.Type<MRObservationDirectCoombstestMeta> = t.recursion(
    "MRObservationDirectCoombstestMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest|1.0.0"
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
export interface MRObservationDirectCoombstestCode {
    coding: Array<MRObservationDirectCoombstestCodeCoding>;
    id?: string;
}

export const MRObservationDirectCoombstestCode: t.Type<MRObservationDirectCoombstestCode> = t.recursion(
    "MRObservationDirectCoombstestCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationDirectCoombstestCodeCoding)
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
export interface MRObservationDirectCoombstestSubject {
    reference: string;
    id?: string;
}

export const MRObservationDirectCoombstestSubject: t.Type<MRObservationDirectCoombstestSubject> = t.recursion(
    "MRObservationDirectCoombstestSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationDirectCoombstestEncounter {
    reference: string;
    id?: string;
}

export const MRObservationDirectCoombstestEncounter: t.Type<MRObservationDirectCoombstestEncounter> = t.recursion(
    "MRObservationDirectCoombstestEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationDirectCoombstestPerformer {
    reference: string;
    id?: string;
}

export const MRObservationDirectCoombstestPerformer: t.Type<MRObservationDirectCoombstestPerformer> = t.recursion(
    "MRObservationDirectCoombstestPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRObservationDirectCoombstest {
    meta: MRObservationDirectCoombstestMeta;
    status: "final";
    code: MRObservationDirectCoombstestCode;
    subject: MRObservationDirectCoombstestSubject;
    encounter: MRObservationDirectCoombstestEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationDirectCoombstestValueCodeableConcept;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationDirectCoombstestPerformer>;
}

const MRObservationDirectCoombstest: t.Type<MRObservationDirectCoombstest> = t.recursion(
    "MRObservationDirectCoombstest",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationDirectCoombstestMeta,
                    status: Literal("final"),
                    code: MRObservationDirectCoombstestCode,
                    subject: MRObservationDirectCoombstestSubject,
                    encounter: MRObservationDirectCoombstestEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept: MRObservationDirectCoombstestValueCodeableConcept
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationDirectCoombstestPerformer)
                })
            ])
        )
);

export default MRObservationDirectCoombstest;
