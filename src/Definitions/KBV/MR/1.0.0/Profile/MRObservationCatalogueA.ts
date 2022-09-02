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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRCatalogueAVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRCatalogueA";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A"

/**
 * Content in other Language.
 */
export interface MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                                t.Type<MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationCatalogueACodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationCatalogueACodeCodingDisplay: t.Type<MRObservationCatalogueACodeCodingDisplay> =
    t.recursion("MRObservationCatalogueACodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationCatalogueACodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationCatalogueACodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRCatalogueAVS;
    id?: string;
    _display?: MRObservationCatalogueACodeCodingDisplay;
    display?: string;
}

export const MRObservationCatalogueACodeCoding: t.Type<MRObservationCatalogueACodeCoding> =
    t.recursion("MRObservationCatalogueACodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRCatalogueAVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationCatalogueACodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationCatalogueAMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A|1.0.0">;
    id?: string;
}

export const MRObservationCatalogueAMeta: t.Type<MRObservationCatalogueAMeta> =
    t.recursion("MRObservationCatalogueAMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A|1.0.0"
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
export interface MRObservationCatalogueACode {
    coding: Array<MRObservationCatalogueACodeCoding>;
    id?: string;
}

export const MRObservationCatalogueACode: t.Type<MRObservationCatalogueACode> =
    t.recursion("MRObservationCatalogueACode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationCatalogueACodeCoding)
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
export interface MRObservationCatalogueASubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationCatalogueASubjectReference: t.Type<MRObservationCatalogueASubjectReference> =
    t.recursion("MRObservationCatalogueASubjectReference", () =>
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
export interface MRObservationCatalogueAEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationCatalogueAEncounterReference: t.Type<MRObservationCatalogueAEncounterReference> =
    t.recursion("MRObservationCatalogueAEncounterReference", () =>
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
export interface MRObservationCatalogueAPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationCatalogueAPerformerReference: t.Type<MRObservationCatalogueAPerformerReference> =
    t.recursion("MRObservationCatalogueAPerformerReference", () =>
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

interface MRObservationCatalogueA {
    resourceType: "Observation";
    meta: MRObservationCatalogueAMeta;
    status: "final";
    code: MRObservationCatalogueACode;
    subject: MRObservationCatalogueASubjectReference;
    encounter: MRObservationCatalogueAEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationCatalogueAPerformerReference>;
    note?: Array<Annotation>;
}

const MRObservationCatalogueA: t.Type<MRObservationCatalogueA> = t.recursion(
    "MRObservationCatalogueA",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationCatalogueAMeta,
                    status: Literal("final"),
                    code: MRObservationCatalogueACode,
                    subject: MRObservationCatalogueASubjectReference,
                    encounter: MRObservationCatalogueAEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationCatalogueAPerformerReference),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRObservationCatalogueA;
