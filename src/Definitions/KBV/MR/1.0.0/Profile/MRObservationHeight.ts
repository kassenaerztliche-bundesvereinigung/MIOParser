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

import BodyHeightLoincVS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/BodyHeightLoinc";
import BodyHeightSnomedVS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/BodyHeightSnomed";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height"

/**
 * Content in other Language.
 */
export interface MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
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
export interface MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                                t.Type<MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationHeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationHeightCodeCodeSnomedDisplay: t.Type<MRObservationHeightCodeCodeSnomedDisplay> =
    t.recursion("MRObservationHeightCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface MRObservationHeightCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationHeightCodeCodeLoincDisplay: t.Type<MRObservationHeightCodeCodeLoincDisplay> =
    t.recursion("MRObservationHeightCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface MRObservationHeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: string;
    code: BodyHeightSnomedVS;
    id?: string;
    _display?: MRObservationHeightCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationHeightCodeCodeSnomed: t.Type<MRObservationHeightCodeCodeSnomed> =
    t.recursion("MRObservationHeightCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: BodyHeightSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: BodyHeightLoincVS;
    id?: string;
    _display?: MRObservationHeightCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationHeightCodeCodeLoinc: t.Type<MRObservationHeightCodeCodeLoinc> =
    t.recursion("MRObservationHeightCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: BodyHeightLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationHeightValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const MRObservationHeightValueQuantity: t.Type<MRObservationHeightValueQuantity> =
    t.recursion("MRObservationHeightValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("cm"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("cm")
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
export interface MRObservationHeightMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height|1.0.0">;
    id?: string;
}

export const MRObservationHeightMeta: t.Type<MRObservationHeightMeta> = t.recursion(
    "MRObservationHeightMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height|1.0.0"
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
export interface MRObservationHeightCode {
    coding: Array<MRObservationHeightCodeCodeSnomed | MRObservationHeightCodeCodeLoinc>;
    id?: string;
}

export const MRObservationHeightCode: t.Type<MRObservationHeightCode> = t.recursion(
    "MRObservationHeightCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationHeightCodeCodeSnomed>,
                                t.Type<MRObservationHeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationHeightCodeCodeSnomed,
                            MRObservationHeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationHeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationHeightCodeCodeLoinc,
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
export interface MRObservationHeightSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationHeightSubjectReference: t.Type<MRObservationHeightSubjectReference> =
    t.recursion("MRObservationHeightSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationHeightEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationHeightEncounterReference: t.Type<MRObservationHeightEncounterReference> =
    t.recursion("MRObservationHeightEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationHeightPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationHeightPerformerReference: t.Type<MRObservationHeightPerformerReference> =
    t.recursion("MRObservationHeightPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationHeight {
    resourceType: "Observation";
    meta: MRObservationHeightMeta;
    status: "final";
    code: MRObservationHeightCode;
    subject: MRObservationHeightSubjectReference;
    encounter: MRObservationHeightEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationHeightValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeightPerformerReference>;
}

const MRObservationHeight: t.Type<MRObservationHeight> = t.recursion(
    "MRObservationHeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeightMeta,
                    status: Literal("final"),
                    code: MRObservationHeightCode,
                    subject: MRObservationHeightSubjectReference,
                    encounter: MRObservationHeightEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationHeightValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationHeightPerformerReference)
                })
            ])
        )
);

export default MRObservationHeight;
