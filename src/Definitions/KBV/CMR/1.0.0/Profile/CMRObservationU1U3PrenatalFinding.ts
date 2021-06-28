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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:";
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal(
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                    )
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
export interface CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Soweit vorhanden, Befunde einer pränatalen Diagnostik:";
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal(
                        "Soweit vorhanden, Befunde einer pränatalen Diagnostik:"
                    )
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
export interface CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplay: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplay> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplay: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplay> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3PrenatalFindingCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "313199003";
    id?: string;
    _display?: CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRObservationU1U3PrenatalFindingCodeCodeSnomed: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeSnomed> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("313199003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3PrenatalFindingCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3PrenatalFindingCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "57078-8";
    id?: string;
    _display?: CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplay;
    display?: string;
}

export const CMRObservationU1U3PrenatalFindingCodeCodeLoinc: t.Type<CMRObservationU1U3PrenatalFindingCodeCodeLoinc> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCodeCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("57078-8")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3PrenatalFindingCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U3PrenatalFindingMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingMeta: t.Type<CMRObservationU1U3PrenatalFindingMeta> = t.recursion(
    "CMRObservationU1U3PrenatalFindingMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Prenatal_Finding|1.0.0"
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
export interface CMRObservationU1U3PrenatalFindingCode {
    coding: Array<
        | CMRObservationU1U3PrenatalFindingCodeCodeSnomed
        | CMRObservationU1U3PrenatalFindingCodeCodeLoinc
    >;
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingCode: t.Type<CMRObservationU1U3PrenatalFindingCode> = t.recursion(
    "CMRObservationU1U3PrenatalFindingCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU1U3PrenatalFindingCodeCodeSnomed>,
                                t.Type<CMRObservationU1U3PrenatalFindingCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU1U3PrenatalFindingCodeCodeSnomed,
                            CMRObservationU1U3PrenatalFindingCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRObservationU1U3PrenatalFindingCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRObservationU1U3PrenatalFindingCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
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
export interface CMRObservationU1U3PrenatalFindingSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingSubject: t.Type<CMRObservationU1U3PrenatalFindingSubject> = t.recursion(
    "CMRObservationU1U3PrenatalFindingSubject",
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
export interface CMRObservationU1U3PrenatalFindingEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingEncounter: t.Type<CMRObservationU1U3PrenatalFindingEncounter> = t.recursion(
    "CMRObservationU1U3PrenatalFindingEncounter",
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
export interface CMRObservationU1U3PrenatalFindingPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3PrenatalFindingPerformer: t.Type<CMRObservationU1U3PrenatalFindingPerformer> = t.recursion(
    "CMRObservationU1U3PrenatalFindingPerformer",
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

interface CMRObservationU1U3PrenatalFinding {
    resourceType: "Observation";
    meta: CMRObservationU1U3PrenatalFindingMeta;
    status: "final";
    code: CMRObservationU1U3PrenatalFindingCode;
    subject: CMRObservationU1U3PrenatalFindingSubject;
    encounter: CMRObservationU1U3PrenatalFindingEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3PrenatalFindingPerformer>;
}

const CMRObservationU1U3PrenatalFinding: t.Type<CMRObservationU1U3PrenatalFinding> = t.recursion(
    "CMRObservationU1U3PrenatalFinding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3PrenatalFindingMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3PrenatalFindingCode,
                    subject: CMRObservationU1U3PrenatalFindingSubject,
                    encounter: CMRObservationU1U3PrenatalFindingEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1U3PrenatalFindingPerformer)
                })
            ])
        )
);

export default CMRObservationU1U3PrenatalFinding;
