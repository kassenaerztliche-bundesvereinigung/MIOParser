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
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Calculated_Delivery_Date"

/**
 * Content in other Language.
 */
export interface NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: "Errechneter Entbindungstermin";
    id?: string;
}

export const NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCodeContent: t.Type<NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCodeContent> =
    t.recursion(
        "NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCodeContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Errechneter Entbindungstermin")
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
export interface NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCodeContent[];
}

export const NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode: t.Type<NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode> =
    t.recursion(
        "NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode",
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
                        extension: t.array(
                            NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCodeContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode
    )[];
    value?: string;
}

export const NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplay: t.Type<NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplay> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplayAnzeigenameCode,
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
export interface NFDObservationPregnancyCalculatedDeliveryDateCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "161714006";
    display: "Estimated date of delivery (observable entity)";
    id?: string;
    _display?: NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplay;
}

export const NFDObservationPregnancyCalculatedDeliveryDateCodeCoding: t.Type<NFDObservationPregnancyCalculatedDeliveryDateCodeCoding> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDateCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("161714006"),
                    display: Literal("Estimated date of delivery (observable entity)")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        NFDObservationPregnancyCalculatedDeliveryDateCodeCodingDisplay
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDObservationPregnancyCalculatedDeliveryDateMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Calculated_Delivery_Date|1.0.0">;
    id?: string;
}

export const NFDObservationPregnancyCalculatedDeliveryDateMeta: t.Type<NFDObservationPregnancyCalculatedDeliveryDateMeta> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDateMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Calculated_Delivery_Date|1.0.0"
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
export interface NFDObservationPregnancyCalculatedDeliveryDateCode {
    coding: Array<NFDObservationPregnancyCalculatedDeliveryDateCodeCoding>;
    id?: string;
}

export const NFDObservationPregnancyCalculatedDeliveryDateCode: t.Type<NFDObservationPregnancyCalculatedDeliveryDateCode> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDateCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDObservationPregnancyCalculatedDeliveryDateCodeCoding
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
export interface NFDObservationPregnancyCalculatedDeliveryDateSubjectReference {
    reference: string;
    id?: string;
}

export const NFDObservationPregnancyCalculatedDeliveryDateSubjectReference: t.Type<NFDObservationPregnancyCalculatedDeliveryDateSubjectReference> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDateSubjectReference", () =>
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
export interface NFDObservationPregnancyCalculatedDeliveryDatePerformerReference {
    reference: string;
    id?: string;
}

export const NFDObservationPregnancyCalculatedDeliveryDatePerformerReference: t.Type<NFDObservationPregnancyCalculatedDeliveryDatePerformerReference> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDatePerformerReference", () =>
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

interface NFDObservationPregnancyCalculatedDeliveryDate {
    resourceType: "Observation";
    meta: NFDObservationPregnancyCalculatedDeliveryDateMeta;
    status: "final";
    code: NFDObservationPregnancyCalculatedDeliveryDateCode;
    subject: NFDObservationPregnancyCalculatedDeliveryDateSubjectReference;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<NFDObservationPregnancyCalculatedDeliveryDatePerformerReference>;
}

const NFDObservationPregnancyCalculatedDeliveryDate: t.Type<NFDObservationPregnancyCalculatedDeliveryDate> =
    t.recursion("NFDObservationPregnancyCalculatedDeliveryDate", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: NFDObservationPregnancyCalculatedDeliveryDateMeta,
                    status: Literal("final"),
                    code: NFDObservationPregnancyCalculatedDeliveryDateCode,
                    subject:
                        NFDObservationPregnancyCalculatedDeliveryDateSubjectReference,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        NFDObservationPregnancyCalculatedDeliveryDatePerformerReference
                    )
                })
            ])
        )
    );

export default NFDObservationPregnancyCalculatedDeliveryDate;
