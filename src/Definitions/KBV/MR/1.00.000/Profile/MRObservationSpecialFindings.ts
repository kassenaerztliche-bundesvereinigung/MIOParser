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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRSpecialFindingsVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRSpecialFindings";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Special_Findings"

/**
 * Content in other Language.
 */
export interface MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Besondere Befunde im Schwangerschaftsverlauf";
    id?: string;
}

export const MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Besondere Befunde im Schwangerschaftsverlauf")
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
export interface MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationSpecialFindingsValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const MRObservationSpecialFindingsValueCodeableConceptCodingDisplay: t.Type<MRObservationSpecialFindingsValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationSpecialFindingsValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationSpecialFindingsValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface MRObservationSpecialFindingsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationSpecialFindingsCodeCodingDisplay: t.Type<MRObservationSpecialFindingsCodeCodingDisplay> = t.recursion(
    "MRObservationSpecialFindingsCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationSpecialFindingsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationSpecialFindingsValueCodeableConceptCoding {
    system: string;
    version: string;
    code: MRSpecialFindingsVS;
    id?: string;
    _display?: MRObservationSpecialFindingsValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationSpecialFindingsValueCodeableConceptCoding: t.Type<MRObservationSpecialFindingsValueCodeableConceptCoding> = t.recursion(
    "MRObservationSpecialFindingsValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: MRSpecialFindingsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationSpecialFindingsValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationSpecialFindingsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "118185001";
    id?: string;
    _display?: MRObservationSpecialFindingsCodeCodingDisplay;
    display?: string;
}

export const MRObservationSpecialFindingsCodeCoding: t.Type<MRObservationSpecialFindingsCodeCoding> = t.recursion(
    "MRObservationSpecialFindingsCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("118185001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationSpecialFindingsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationSpecialFindingsValueCodeableConcept {
    coding: Array<MRObservationSpecialFindingsValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationSpecialFindingsValueCodeableConcept: t.Type<MRObservationSpecialFindingsValueCodeableConcept> = t.recursion(
    "MRObservationSpecialFindingsValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationSpecialFindingsValueCodeableConceptCoding
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
export interface MRObservationSpecialFindingsMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Special_Findings|1.0.0"
    >;
    id?: string;
}

export const MRObservationSpecialFindingsMeta: t.Type<MRObservationSpecialFindingsMeta> = t.recursion(
    "MRObservationSpecialFindingsMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Special_Findings|1.0.0"
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
export interface MRObservationSpecialFindingsCode {
    coding: Array<MRObservationSpecialFindingsCodeCoding>;
    id?: string;
}

export const MRObservationSpecialFindingsCode: t.Type<MRObservationSpecialFindingsCode> = t.recursion(
    "MRObservationSpecialFindingsCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationSpecialFindingsCodeCoding)
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
export interface MRObservationSpecialFindingsSubject {
    reference: string;
    id?: string;
}

export const MRObservationSpecialFindingsSubject: t.Type<MRObservationSpecialFindingsSubject> = t.recursion(
    "MRObservationSpecialFindingsSubject",
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
export interface MRObservationSpecialFindingsEncounter {
    reference: string;
    id?: string;
}

export const MRObservationSpecialFindingsEncounter: t.Type<MRObservationSpecialFindingsEncounter> = t.recursion(
    "MRObservationSpecialFindingsEncounter",
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
export interface MRObservationSpecialFindingsPerformer {
    reference: string;
    id?: string;
}

export const MRObservationSpecialFindingsPerformer: t.Type<MRObservationSpecialFindingsPerformer> = t.recursion(
    "MRObservationSpecialFindingsPerformer",
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

interface MRObservationSpecialFindings {
    meta: MRObservationSpecialFindingsMeta;
    status: "final";
    code: MRObservationSpecialFindingsCode;
    subject: MRObservationSpecialFindingsSubject;
    encounter: MRObservationSpecialFindingsEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationSpecialFindingsValueCodeableConcept;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationSpecialFindingsPerformer>;
    note?: Array<Annotation>;
}

const MRObservationSpecialFindings: t.Type<MRObservationSpecialFindings> = t.recursion(
    "MRObservationSpecialFindings",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationSpecialFindingsMeta,
                    status: Literal("final"),
                    code: MRObservationSpecialFindingsCode,
                    subject: MRObservationSpecialFindingsSubject,
                    encounter: MRObservationSpecialFindingsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept: MRObservationSpecialFindingsValueCodeableConcept
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationSpecialFindingsPerformer),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRObservationSpecialFindings;
