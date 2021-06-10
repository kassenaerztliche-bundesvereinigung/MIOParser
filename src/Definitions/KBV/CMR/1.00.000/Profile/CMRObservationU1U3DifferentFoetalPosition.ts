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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "andere Kindslage";
    id?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("andere Kindslage")
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
export interface CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplay: t.Type<CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplay> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3DifferentFoetalPositionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364607000";
    id?: string;
    _display?: CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionCodeCoding: t.Type<CMRObservationU1U3DifferentFoetalPositionCodeCoding> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364607000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3DifferentFoetalPositionCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U3DifferentFoetalPositionMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionMeta: t.Type<CMRObservationU1U3DifferentFoetalPositionMeta> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Different_Foetal_Position|1.0.0"
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
export interface CMRObservationU1U3DifferentFoetalPositionCode {
    coding: Array<CMRObservationU1U3DifferentFoetalPositionCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionCode: t.Type<CMRObservationU1U3DifferentFoetalPositionCode> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3DifferentFoetalPositionCodeCoding
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
export interface CMRObservationU1U3DifferentFoetalPositionSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionSubject: t.Type<CMRObservationU1U3DifferentFoetalPositionSubject> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionSubject",
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
export interface CMRObservationU1U3DifferentFoetalPositionEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionEncounter: t.Type<CMRObservationU1U3DifferentFoetalPositionEncounter> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionEncounter",
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
export interface CMRObservationU1U3DifferentFoetalPositionPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3DifferentFoetalPositionPerformer: t.Type<CMRObservationU1U3DifferentFoetalPositionPerformer> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPositionPerformer",
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

interface CMRObservationU1U3DifferentFoetalPosition {
    resourceType: "Observation";
    meta: CMRObservationU1U3DifferentFoetalPositionMeta;
    status: "final";
    code: CMRObservationU1U3DifferentFoetalPositionCode;
    subject: CMRObservationU1U3DifferentFoetalPositionSubject;
    encounter: CMRObservationU1U3DifferentFoetalPositionEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3DifferentFoetalPositionPerformer>;
}

const CMRObservationU1U3DifferentFoetalPosition: t.Type<CMRObservationU1U3DifferentFoetalPosition> = t.recursion(
    "CMRObservationU1U3DifferentFoetalPosition",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3DifferentFoetalPositionMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3DifferentFoetalPositionCode,
                    subject: CMRObservationU1U3DifferentFoetalPositionSubject,
                    encounter: CMRObservationU1U3DifferentFoetalPositionEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U3DifferentFoetalPositionPerformer
                    )
                })
            ])
        )
);

export default CMRObservationU1U3DifferentFoetalPosition;
