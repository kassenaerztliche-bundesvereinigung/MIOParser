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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_of_Newborn"

/**
 * Content in other Language.
 */
export interface CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ödeme";
    id?: string;
}

export const CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Ödeme")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1EdemaofNewbornCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1EdemaofNewbornCodeCodingDisplay: t.Type<CMRObservationU1EdemaofNewbornCodeCodingDisplay> = t.recursion(
    "CMRObservationU1EdemaofNewbornCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1EdemaofNewbornCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1EdemaofNewbornCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "78913002";
    id?: string;
    _display?: CMRObservationU1EdemaofNewbornCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1EdemaofNewbornCodeCoding: t.Type<CMRObservationU1EdemaofNewbornCodeCoding> = t.recursion(
    "CMRObservationU1EdemaofNewbornCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("78913002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1EdemaofNewbornCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1EdemaofNewbornMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_of_Newborn|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU1EdemaofNewbornMeta: t.Type<CMRObservationU1EdemaofNewbornMeta> = t.recursion(
    "CMRObservationU1EdemaofNewbornMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_of_Newborn|1.0.0"
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
export interface CMRObservationU1EdemaofNewbornCode {
    coding: Array<CMRObservationU1EdemaofNewbornCodeCoding>;
    id?: string;
}

export const CMRObservationU1EdemaofNewbornCode: t.Type<CMRObservationU1EdemaofNewbornCode> = t.recursion(
    "CMRObservationU1EdemaofNewbornCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU1EdemaofNewbornCodeCoding)
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
export interface CMRObservationU1EdemaofNewbornSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1EdemaofNewbornSubject: t.Type<CMRObservationU1EdemaofNewbornSubject> = t.recursion(
    "CMRObservationU1EdemaofNewbornSubject",
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
export interface CMRObservationU1EdemaofNewbornEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1EdemaofNewbornEncounter: t.Type<CMRObservationU1EdemaofNewbornEncounter> = t.recursion(
    "CMRObservationU1EdemaofNewbornEncounter",
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
export interface CMRObservationU1EdemaofNewbornPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1EdemaofNewbornPerformer: t.Type<CMRObservationU1EdemaofNewbornPerformer> = t.recursion(
    "CMRObservationU1EdemaofNewbornPerformer",
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

interface CMRObservationU1EdemaofNewborn {
    resourceType: "Observation";
    meta: CMRObservationU1EdemaofNewbornMeta;
    status: "final";
    code: CMRObservationU1EdemaofNewbornCode;
    subject: CMRObservationU1EdemaofNewbornSubject;
    encounter: CMRObservationU1EdemaofNewbornEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1EdemaofNewbornPerformer>;
}

const CMRObservationU1EdemaofNewborn: t.Type<CMRObservationU1EdemaofNewborn> = t.recursion(
    "CMRObservationU1EdemaofNewborn",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1EdemaofNewbornMeta,
                    status: Literal("final"),
                    code: CMRObservationU1EdemaofNewbornCode,
                    subject: CMRObservationU1EdemaofNewbornSubject,
                    encounter: CMRObservationU1EdemaofNewbornEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1EdemaofNewbornPerformer)
                })
            ])
        )
);

export default CMRObservationU1EdemaofNewborn;
