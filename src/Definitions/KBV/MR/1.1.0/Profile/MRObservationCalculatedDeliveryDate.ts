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

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date"

/**
 * Content in other Language.
 */
export interface MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Berechneter Entbindungstermin";
    id?: string;
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Berechneter Entbindungstermin")
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
export interface MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Berechneter Entbindungstermin";
    id?: string;
}

export const MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Berechneter Entbindungstermin")
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
export interface MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                            MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay> =
    t.recursion("MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationCalculatedDeliveryDateCodeLoincDisplay {
    id?: string;
    extension?: MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationCalculatedDeliveryDateCodeLoincDisplay: t.Type<MRObservationCalculatedDeliveryDateCodeLoincDisplay> =
    t.recursion("MRObservationCalculatedDeliveryDateCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationCalculatedDeliveryDateCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "289206005";
    id?: string;
    _display?: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCT: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCT> =
    t.recursion("MRObservationCalculatedDeliveryDateCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("289206005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationCalculatedDeliveryDateCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "11779-6";
    id?: string;
    _display?: MRObservationCalculatedDeliveryDateCodeLoincDisplay;
    display?: string;
}

export const MRObservationCalculatedDeliveryDateCodeLoinc: t.Type<MRObservationCalculatedDeliveryDateCodeLoinc> =
    t.recursion("MRObservationCalculatedDeliveryDateCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("11779-6")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationCalculatedDeliveryDateCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationCalculatedDeliveryDateMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date|1.1.0">;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateMeta: t.Type<MRObservationCalculatedDeliveryDateMeta> =
    t.recursion("MRObservationCalculatedDeliveryDateMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date|1.1.0"
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
export interface MRObservationCalculatedDeliveryDateCode {
    coding: Array<
        | MRObservationCalculatedDeliveryDateCodeSnomedCT
        | MRObservationCalculatedDeliveryDateCodeLoinc
    >;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateCode: t.Type<MRObservationCalculatedDeliveryDateCode> =
    t.recursion("MRObservationCalculatedDeliveryDateCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCT>,
                                t.Type<MRObservationCalculatedDeliveryDateCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationCalculatedDeliveryDateCodeSnomedCT,
                            MRObservationCalculatedDeliveryDateCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationCalculatedDeliveryDateCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationCalculatedDeliveryDateCodeLoinc,
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
export interface MRObservationCalculatedDeliveryDateSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateSubjectReference: t.Type<MRObservationCalculatedDeliveryDateSubjectReference> =
    t.recursion("MRObservationCalculatedDeliveryDateSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRObservationCalculatedDeliveryDateEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateEncounterReference: t.Type<MRObservationCalculatedDeliveryDateEncounterReference> =
    t.recursion("MRObservationCalculatedDeliveryDateEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRObservationCalculatedDeliveryDatePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationCalculatedDeliveryDatePerformerReference: t.Type<MRObservationCalculatedDeliveryDatePerformerReference> =
    t.recursion("MRObservationCalculatedDeliveryDatePerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationCalculatedDeliveryDate {
    resourceType: "Observation";
    meta: MRObservationCalculatedDeliveryDateMeta;
    status: "final";
    code: MRObservationCalculatedDeliveryDateCode;
    subject: MRObservationCalculatedDeliveryDateSubjectReference;
    encounter: MRObservationCalculatedDeliveryDateEncounterReference;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationCalculatedDeliveryDatePerformerReference>;
}

const MRObservationCalculatedDeliveryDate: t.Type<MRObservationCalculatedDeliveryDate> =
    t.recursion("MRObservationCalculatedDeliveryDate", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationCalculatedDeliveryDateMeta,
                    status: Literal("final"),
                    code: MRObservationCalculatedDeliveryDateCode,
                    subject: MRObservationCalculatedDeliveryDateSubjectReference,
                    encounter: MRObservationCalculatedDeliveryDateEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationCalculatedDeliveryDatePerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationCalculatedDeliveryDate;
