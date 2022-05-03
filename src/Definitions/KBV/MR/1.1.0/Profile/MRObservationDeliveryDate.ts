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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Delivery_Date"

/**
 * Content in other Language.
 */
export interface MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Entbindungstermin (ggf. nach Verlauf korrigiert)";
    id?: string;
}

export const MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Entbindungstermin (ggf. nach Verlauf korrigiert)"
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
export interface MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Entbindungstermin (ggf. nach Verlauf korrigiert)";
    id?: string;
}

export const MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Entbindungstermin (ggf. nach Verlauf korrigiert)"
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
export interface MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                        MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationDeliveryDateCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationDeliveryDateCodeSnomedCTDisplay: t.Type<MRObservationDeliveryDateCodeSnomedCTDisplay> =
    t.recursion("MRObservationDeliveryDateCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationDeliveryDateCodeLoincDisplay {
    id?: string;
    extension?: MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationDeliveryDateCodeLoincDisplay: t.Type<MRObservationDeliveryDateCodeLoincDisplay> =
    t.recursion("MRObservationDeliveryDateCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationDeliveryDateCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "738070007";
    id?: string;
    _display?: MRObservationDeliveryDateCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationDeliveryDateCodeSnomedCT: t.Type<MRObservationDeliveryDateCodeSnomedCT> =
    t.recursion("MRObservationDeliveryDateCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("738070007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDeliveryDateCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationDeliveryDateCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "90368-2";
    id?: string;
    _display?: MRObservationDeliveryDateCodeLoincDisplay;
    display?: string;
}

export const MRObservationDeliveryDateCodeLoinc: t.Type<MRObservationDeliveryDateCodeLoinc> =
    t.recursion("MRObservationDeliveryDateCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("90368-2")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDeliveryDateCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationDeliveryDateMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Delivery_Date|1.1.0">;
    id?: string;
}

export const MRObservationDeliveryDateMeta: t.Type<MRObservationDeliveryDateMeta> =
    t.recursion("MRObservationDeliveryDateMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Delivery_Date|1.1.0"
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
export interface MRObservationDeliveryDateCode {
    coding: Array<
        MRObservationDeliveryDateCodeSnomedCT | MRObservationDeliveryDateCodeLoinc
    >;
    id?: string;
}

export const MRObservationDeliveryDateCode: t.Type<MRObservationDeliveryDateCode> =
    t.recursion("MRObservationDeliveryDateCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationDeliveryDateCodeSnomedCT>,
                                t.Type<MRObservationDeliveryDateCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationDeliveryDateCodeSnomedCT,
                            MRObservationDeliveryDateCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationDeliveryDateCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationDeliveryDateCodeLoinc,
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
export interface MRObservationDeliveryDateSubject {
    reference: string;
    id?: string;
}

export const MRObservationDeliveryDateSubject: t.Type<MRObservationDeliveryDateSubject> =
    t.recursion("MRObservationDeliveryDateSubject", () =>
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
export interface MRObservationDeliveryDateEncounter {
    reference: string;
    id?: string;
}

export const MRObservationDeliveryDateEncounter: t.Type<MRObservationDeliveryDateEncounter> =
    t.recursion("MRObservationDeliveryDateEncounter", () =>
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
export interface MRObservationDeliveryDatePerformer {
    reference: string;
    id?: string;
}

export const MRObservationDeliveryDatePerformer: t.Type<MRObservationDeliveryDatePerformer> =
    t.recursion("MRObservationDeliveryDatePerformer", () =>
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

interface MRObservationDeliveryDate {
    resourceType: "Observation";
    meta: MRObservationDeliveryDateMeta;
    status: "final";
    code: MRObservationDeliveryDateCode;
    subject: MRObservationDeliveryDateSubject;
    encounter: MRObservationDeliveryDateEncounter;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationDeliveryDatePerformer>;
}

const MRObservationDeliveryDate: t.Type<MRObservationDeliveryDate> = t.recursion(
    "MRObservationDeliveryDate",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationDeliveryDateMeta,
                    status: Literal("final"),
                    code: MRObservationDeliveryDateCode,
                    subject: MRObservationDeliveryDateSubject,
                    encounter: MRObservationDeliveryDateEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationDeliveryDatePerformer)
                })
            ])
        )
);

export default MRObservationDeliveryDate;
