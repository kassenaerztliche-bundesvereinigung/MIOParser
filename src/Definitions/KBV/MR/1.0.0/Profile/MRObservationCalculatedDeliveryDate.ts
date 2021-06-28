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
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date"

/**
 * Content in other Language.
 */
export interface MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Berechneter Entbindungstermin";
    id?: string;
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> = t.recursion(
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

export const MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
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
    extension?: (
        | Extension
        | MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed> = t.recursion(
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
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
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
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay> = t.recursion(
    "MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationCalculatedDeliveryDateCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationCalculatedDeliveryDateCodeLoincDisplay: t.Type<MRObservationCalculatedDeliveryDateCodeLoincDisplay> = t.recursion(
    "MRObservationCalculatedDeliveryDateCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationCalculatedDeliveryDateCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationCalculatedDeliveryDateCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "161714006";
    id?: string;
    _display?: MRObservationCalculatedDeliveryDateCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationCalculatedDeliveryDateCodeSnomedCT: t.Type<MRObservationCalculatedDeliveryDateCodeSnomedCT> = t.recursion(
    "MRObservationCalculatedDeliveryDateCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("161714006")
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
    version: "2.68";
    code: "11778-8";
    id?: string;
    _display?: MRObservationCalculatedDeliveryDateCodeLoincDisplay;
    display?: string;
}

export const MRObservationCalculatedDeliveryDateCodeLoinc: t.Type<MRObservationCalculatedDeliveryDateCodeLoinc> = t.recursion(
    "MRObservationCalculatedDeliveryDateCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("11778-8")
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
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date|1.0.0"
    >;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateMeta: t.Type<MRObservationCalculatedDeliveryDateMeta> = t.recursion(
    "MRObservationCalculatedDeliveryDateMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date|1.0.0"
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

export const MRObservationCalculatedDeliveryDateCode: t.Type<MRObservationCalculatedDeliveryDateCode> = t.recursion(
    "MRObservationCalculatedDeliveryDateCode",
    () =>
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
export interface MRObservationCalculatedDeliveryDateSubject {
    reference: string;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateSubject: t.Type<MRObservationCalculatedDeliveryDateSubject> = t.recursion(
    "MRObservationCalculatedDeliveryDateSubject",
    () =>
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
export interface MRObservationCalculatedDeliveryDateEncounter {
    reference: string;
    id?: string;
}

export const MRObservationCalculatedDeliveryDateEncounter: t.Type<MRObservationCalculatedDeliveryDateEncounter> = t.recursion(
    "MRObservationCalculatedDeliveryDateEncounter",
    () =>
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
export interface MRObservationCalculatedDeliveryDatePerformer {
    reference: string;
    id?: string;
}

export const MRObservationCalculatedDeliveryDatePerformer: t.Type<MRObservationCalculatedDeliveryDatePerformer> = t.recursion(
    "MRObservationCalculatedDeliveryDatePerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
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
    status: ObservationstatusVS;
    code: MRObservationCalculatedDeliveryDateCode;
    subject: MRObservationCalculatedDeliveryDateSubject;
    encounter: MRObservationCalculatedDeliveryDateEncounter;
    effectiveDateTime: string;
    valueDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationCalculatedDeliveryDatePerformer>;
}

const MRObservationCalculatedDeliveryDate: t.Type<MRObservationCalculatedDeliveryDate> = t.recursion(
    "MRObservationCalculatedDeliveryDate",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationCalculatedDeliveryDateMeta,
                    status: ObservationstatusVS,
                    code: MRObservationCalculatedDeliveryDateCode,
                    subject: MRObservationCalculatedDeliveryDateSubject,
                    encounter: MRObservationCalculatedDeliveryDateEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationCalculatedDeliveryDatePerformer)
                })
            ])
        )
);

export default MRObservationCalculatedDeliveryDate;
