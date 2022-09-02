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

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Note"

/**
 * Content in other Language.
 */
export interface NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent {
    url: "content";
    valueString: "Hinweis";
    id?: string;
}

export const NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent: t.Type<NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent> =
    t.recursion("NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Hinweis")
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
export interface NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent
    )[];
}

export const NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed: t.Type<NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed> =
    t.recursion("NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed", () =>
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
                                t.Type<NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDObservationNoteCodeCodingDisplayAnzeigenameSnomedContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface NFDObservationNoteValueCodeableConceptSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDObservationNoteValueCodeableConceptSnomedCode: t.Type<NFDObservationNoteValueCodeableConceptSnomedCode> =
    t.recursion("NFDObservationNoteValueCodeableConceptSnomedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
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
export interface NFDObservationNoteCodeCodingDisplay {
    id?: string;
    extension?: (Extension | NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed)[];
    value?: string;
}

export const NFDObservationNoteCodeCodingDisplay: t.Type<NFDObservationNoteCodeCodingDisplay> =
    t.recursion("NFDObservationNoteCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDObservationNoteCodeCodingDisplayAnzeigenameSnomed,
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
export interface NFDObservationNoteCodeCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "34878-9";
    display: "Emergency medicine Note";
    id?: string;
    _display?: NFDObservationNoteCodeCodingDisplay;
}

export const NFDObservationNoteCodeCoding: t.Type<NFDObservationNoteCodeCoding> =
    t.recursion("NFDObservationNoteCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("34878-9"),
                    display: Literal("Emergency medicine Note")
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDObservationNoteCodeCodingDisplay
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface NFDObservationNoteValueCodeableConcept {
    id?: string;
    coding?: NFDObservationNoteValueCodeableConceptSnomedCode[];
}

export const NFDObservationNoteValueCodeableConcept: t.Type<NFDObservationNoteValueCodeableConcept> =
    t.recursion("NFDObservationNoteValueCodeableConcept", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: t.array(NFDObservationNoteValueCodeableConceptSnomedCode)
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDObservationNoteMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Note|1.0.0">;
    id?: string;
}

export const NFDObservationNoteMeta: t.Type<NFDObservationNoteMeta> = t.recursion(
    "NFDObservationNoteMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Note|1.0.0"
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
export interface NFDObservationNoteCode {
    coding: Array<NFDObservationNoteCodeCoding>;
    id?: string;
}

export const NFDObservationNoteCode: t.Type<NFDObservationNoteCode> = t.recursion(
    "NFDObservationNoteCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDObservationNoteCodeCoding)
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
export interface NFDObservationNoteSubjectReference {
    reference: string;
    id?: string;
}

export const NFDObservationNoteSubjectReference: t.Type<NFDObservationNoteSubjectReference> =
    t.recursion("NFDObservationNoteSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
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
export interface NFDObservationNotePerformerReference {
    reference: string;
    id?: string;
}

export const NFDObservationNotePerformerReference: t.Type<NFDObservationNotePerformerReference> =
    t.recursion("NFDObservationNotePerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDObservationNote {
    resourceType: "Observation";
    meta: NFDObservationNoteMeta;
    status: "final";
    code: NFDObservationNoteCode;
    subject: NFDObservationNoteSubjectReference;
    id?: string;
    performer?: Array<NFDObservationNotePerformerReference>;
    valueString?: string;
    valueCodeableConcept?: NFDObservationNoteValueCodeableConcept;
}

const NFDObservationNote: t.Type<NFDObservationNote> = t.recursion(
    "NFDObservationNote",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: NFDObservationNoteMeta,
                    status: Literal("final"),
                    code: NFDObservationNoteCode,
                    subject: NFDObservationNoteSubjectReference
                }),
                t.partial({
                    id: SCALARString,
                    performer: MaxArray(1, NFDObservationNotePerformerReference),
                    valueString: SCALARString,
                    valueCodeableConcept: NFDObservationNoteValueCodeableConcept
                })
            ])
        )
);

export default NFDObservationNote;
