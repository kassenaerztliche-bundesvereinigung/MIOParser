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
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination_Masked"

/**
 * Content in other Language.
 */
export interface MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Laboruntersuchung (LSR)";
    id?: string;
}

export const MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Laboruntersuchung (LSR)")
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
export interface MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Laboruntersuchung (LSR)";
    id?: string;
}

export const MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Laboruntersuchung (LSR)")
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
export interface MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                            MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationMaskedCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationExaminationMaskedCodeSnomedCTDisplay: t.Type<MRObservationExaminationMaskedCodeSnomedCTDisplay> =
    t.recursion("MRObservationExaminationMaskedCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExaminationMaskedCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationMaskedCodeLoincDisplay {
    id?: string;
    extension?: MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationExaminationMaskedCodeLoincDisplay: t.Type<MRObservationExaminationMaskedCodeLoincDisplay> =
    t.recursion("MRObservationExaminationMaskedCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExaminationMaskedCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationMaskedCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003";
    id?: string;
    _display?: MRObservationExaminationMaskedCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationExaminationMaskedCodeSnomedCT: t.Type<MRObservationExaminationMaskedCodeSnomedCT> =
    t.recursion("MRObservationExaminationMaskedCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal(
                        "363787002:246093002=120723002,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationMaskedCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationMaskedCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "22587-0";
    id?: string;
    _display?: MRObservationExaminationMaskedCodeLoincDisplay;
    display?: string;
}

export const MRObservationExaminationMaskedCodeLoinc: t.Type<MRObservationExaminationMaskedCodeLoinc> =
    t.recursion("MRObservationExaminationMaskedCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("22587-0")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationMaskedCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationMaskedDataAbsentReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason";
    code: "masked";
    display: "Masked";
    id?: string;
    version?: string;
}

export const MRObservationExaminationMaskedDataAbsentReasonCoding: t.Type<MRObservationExaminationMaskedDataAbsentReasonCoding> =
    t.recursion("MRObservationExaminationMaskedDataAbsentReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/data-absent-reason"
                    ),
                    code: Literal("masked"),
                    display: Literal("Masked")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationExaminationMaskedMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination_Masked|1.1.0">;
    id?: string;
}

export const MRObservationExaminationMaskedMeta: t.Type<MRObservationExaminationMaskedMeta> =
    t.recursion("MRObservationExaminationMaskedMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination_Masked|1.1.0"
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
 * A unique identifier assigned to this observation.
 */
export interface MRObservationExaminationMaskedIdentifier {
    system: string;
    value: string;
    id?: string;
}

export const MRObservationExaminationMaskedIdentifier: t.Type<MRObservationExaminationMaskedIdentifier> =
    t.recursion("MRObservationExaminationMaskedIdentifier", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    value: SCALARString
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
export interface MRObservationExaminationMaskedCode {
    coding: Array<
        | MRObservationExaminationMaskedCodeSnomedCT
        | MRObservationExaminationMaskedCodeLoinc
    >;
    id?: string;
}

export const MRObservationExaminationMaskedCode: t.Type<MRObservationExaminationMaskedCode> =
    t.recursion("MRObservationExaminationMaskedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationExaminationMaskedCodeSnomedCT>,
                                t.Type<MRObservationExaminationMaskedCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationExaminationMaskedCodeSnomedCT,
                            MRObservationExaminationMaskedCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationExaminationMaskedCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationExaminationMaskedCodeLoinc,
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
export interface MRObservationExaminationMaskedSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationExaminationMaskedSubjectReference: t.Type<MRObservationExaminationMaskedSubjectReference> =
    t.recursion("MRObservationExaminationMaskedSubjectReference", () =>
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
export interface MRObservationExaminationMaskedEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationExaminationMaskedEncounterReference: t.Type<MRObservationExaminationMaskedEncounterReference> =
    t.recursion("MRObservationExaminationMaskedEncounterReference", () =>
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
export interface MRObservationExaminationMaskedPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationExaminationMaskedPerformerReference: t.Type<MRObservationExaminationMaskedPerformerReference> =
    t.recursion("MRObservationExaminationMaskedPerformerReference", () =>
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

/**
 * Provides a reason why the expected value in the element Observation.value[x] is missing.
 */
export interface MRObservationExaminationMaskedDataAbsentReason {
    coding: Array<MRObservationExaminationMaskedDataAbsentReasonCoding>;
    id?: string;
}

export const MRObservationExaminationMaskedDataAbsentReason: t.Type<MRObservationExaminationMaskedDataAbsentReason> =
    t.recursion("MRObservationExaminationMaskedDataAbsentReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationExaminationMaskedDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationExaminationMasked {
    resourceType: "Observation";
    meta: MRObservationExaminationMaskedMeta;
    status: "final";
    code: MRObservationExaminationMaskedCode;
    subject: MRObservationExaminationMaskedSubjectReference;
    encounter: MRObservationExaminationMaskedEncounterReference;
    effectiveDateTime: string;
    dataAbsentReason: MRObservationExaminationMaskedDataAbsentReason;
    id?: string;
    text?: Narrative;
    identifier?: Array<MRObservationExaminationMaskedIdentifier>;
    performer?: Array<MRObservationExaminationMaskedPerformerReference>;
}

const MRObservationExaminationMasked: t.Type<MRObservationExaminationMasked> =
    t.recursion("MRObservationExaminationMasked", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationExaminationMaskedMeta,
                    status: Literal("final"),
                    code: MRObservationExaminationMaskedCode,
                    subject: MRObservationExaminationMaskedSubjectReference,
                    encounter: MRObservationExaminationMaskedEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    dataAbsentReason: MRObservationExaminationMaskedDataAbsentReason
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    identifier: MaxArray(1, MRObservationExaminationMaskedIdentifier),
                    performer: MaxArray(
                        1,
                        MRObservationExaminationMaskedPerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationExaminationMasked;
