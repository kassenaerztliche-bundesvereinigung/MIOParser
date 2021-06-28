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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "SSW (Wochen + Tage)";
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("SSW (Wochen + Tage)")
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
export interface CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenValueQuantity {
    value: number;
    unit: "Week";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenValueQuantity: t.Type<CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenValueQuantity> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenValueQuantity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("Week"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("wk")
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
export interface CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageValueQuantity {
    value: number;
    unit: "Day";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageValueQuantity: t.Type<CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageValueQuantity> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageValueQuantity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("Day"),
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplay: t.Type<CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplay> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenCode {
    text: "schwangerschaftswochen";
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenCode: t.Type<CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenCode> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal("schwangerschaftswochen")
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
export interface CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageCode {
    text: "schwangerschaftstage";
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageCode: t.Type<CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageCode> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal("schwangerschaftstage")
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
export interface CMRObservationU1U3LengthGestationAtBirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "412726003";
    id?: string;
    _display?: CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthCodeCoding: t.Type<CMRObservationU1U3LengthGestationAtBirthCodeCoding> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("412726003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3LengthGestationAtBirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen {
    code: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenCode;
    valueQuantity: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenValueQuantity;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen: t.Type<CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenCode,
                    valueQuantity: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochenValueQuantity
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
export interface CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage {
    code: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageCode;
    valueQuantity: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageValueQuantity;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage: t.Type<CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageCode,
                    valueQuantity: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstageValueQuantity
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
export interface CMRObservationU1U3LengthGestationAtBirthMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthMeta: t.Type<CMRObservationU1U3LengthGestationAtBirthMeta> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Length_Gestation_At_Birth|1.0.0"
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
export interface CMRObservationU1U3LengthGestationAtBirthCode {
    coding: Array<CMRObservationU1U3LengthGestationAtBirthCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthCode: t.Type<CMRObservationU1U3LengthGestationAtBirthCode> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3LengthGestationAtBirthCodeCoding
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
export interface CMRObservationU1U3LengthGestationAtBirthSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthSubject: t.Type<CMRObservationU1U3LengthGestationAtBirthSubject> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthSubject",
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
export interface CMRObservationU1U3LengthGestationAtBirthEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthEncounter: t.Type<CMRObservationU1U3LengthGestationAtBirthEncounter> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthEncounter",
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
export interface CMRObservationU1U3LengthGestationAtBirthPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3LengthGestationAtBirthPerformer: t.Type<CMRObservationU1U3LengthGestationAtBirthPerformer> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirthPerformer",
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

interface CMRObservationU1U3LengthGestationAtBirth {
    resourceType: "Observation";
    meta: CMRObservationU1U3LengthGestationAtBirthMeta;
    status: "final";
    code: CMRObservationU1U3LengthGestationAtBirthCode;
    subject: CMRObservationU1U3LengthGestationAtBirthSubject;
    encounter: CMRObservationU1U3LengthGestationAtBirthEncounter;
    effectiveDateTime: string;
    component: Array<
        | CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen
        | CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage
    >;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3LengthGestationAtBirthPerformer>;
}

const CMRObservationU1U3LengthGestationAtBirth: t.Type<CMRObservationU1U3LengthGestationAtBirth> = t.recursion(
    "CMRObservationU1U3LengthGestationAtBirth",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3LengthGestationAtBirthMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3LengthGestationAtBirthCode,
                    subject: CMRObservationU1U3LengthGestationAtBirthSubject,
                    encounter: CMRObservationU1U3LengthGestationAtBirthEncounter,
                    effectiveDateTime: SCALARDateTime,
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<
                                    CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen
                                >,
                                t.Type<
                                    CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen,
                            CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage
                        ]),
                        [
                            {
                                codec: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftswochen,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "code.text",
                                    value: "schwangerschaftswochen"
                                }
                            },
                            {
                                codec: CMRObservationU1U3LengthGestationAtBirthSchwangerschaftstage,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "code.text",
                                    value: "schwangerschaftstage"
                                }
                            }
                        ],
                        ["1", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U3LengthGestationAtBirthPerformer
                    )
                })
            ])
        )
);

export default CMRObservationU1U3LengthGestationAtBirth;
