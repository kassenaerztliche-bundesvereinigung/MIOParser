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

import MRoGTTDiagnosistestVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRoGTTDiagnosistest";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Diagnosistest"

/**
 * Content in other Language.
 */
export interface MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Diagnosetest";
    id?: string;
}

export const MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Diagnosetest")
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
export interface MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Diagnosetest";
    id?: string;
}

export const MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Diagnosetest")
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
export interface MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                            MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                            MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationoGTTDiagnosistestCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationoGTTDiagnosistestCodeSnomedCTDisplay: t.Type<MRObservationoGTTDiagnosistestCodeSnomedCTDisplay> =
    t.recursion("MRObservationoGTTDiagnosistestCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationoGTTDiagnosistestCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationoGTTDiagnosistestCodeLoincDisplay {
    id?: string;
    extension?: MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationoGTTDiagnosistestCodeLoincDisplay: t.Type<MRObservationoGTTDiagnosistestCodeLoincDisplay> =
    t.recursion("MRObservationoGTTDiagnosistestCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationoGTTDiagnosistestCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplay: t.Type<MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplay> =
    t.recursion("MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationoGTTDiagnosistestCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "699731004";
    id?: string;
    _display?: MRObservationoGTTDiagnosistestCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationoGTTDiagnosistestCodeSnomedCT: t.Type<MRObservationoGTTDiagnosistestCodeSnomedCT> =
    t.recursion("MRObservationoGTTDiagnosistestCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("699731004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationoGTTDiagnosistestCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationoGTTDiagnosistestCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "81324-6";
    id?: string;
    _display?: MRObservationoGTTDiagnosistestCodeLoincDisplay;
    display?: string;
}

export const MRObservationoGTTDiagnosistestCodeLoinc: t.Type<MRObservationoGTTDiagnosistestCodeLoinc> =
    t.recursion("MRObservationoGTTDiagnosistestCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("81324-6")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationoGTTDiagnosistestCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationoGTTDiagnosistestValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRoGTTDiagnosistestVS;
    id?: string;
    _display?: MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationoGTTDiagnosistestValueCodeableConceptCoding: t.Type<MRObservationoGTTDiagnosistestValueCodeableConceptCoding> =
    t.recursion("MRObservationoGTTDiagnosistestValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRoGTTDiagnosistestVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationoGTTDiagnosistestValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationoGTTDiagnosistestValueCodeableConcept {
    coding: Array<MRObservationoGTTDiagnosistestValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationoGTTDiagnosistestValueCodeableConcept: t.Type<MRObservationoGTTDiagnosistestValueCodeableConcept> =
    t.recursion("MRObservationoGTTDiagnosistestValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationoGTTDiagnosistestValueCodeableConceptCoding
                    )
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
export interface MRObservationoGTTDiagnosistestDataAbsentReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason";
    version: "4.0.1";
    code: "not-performed";
    display: "Not Performed";
    id?: string;
}

export const MRObservationoGTTDiagnosistestDataAbsentReasonCoding: t.Type<MRObservationoGTTDiagnosistestDataAbsentReasonCoding> =
    t.recursion("MRObservationoGTTDiagnosistestDataAbsentReasonCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/data-absent-reason"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("not-performed"),
                    display: Literal("Not Performed")
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
export interface MRObservationoGTTDiagnosistestMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Diagnosistest|1.1.0">;
    id?: string;
}

export const MRObservationoGTTDiagnosistestMeta: t.Type<MRObservationoGTTDiagnosistestMeta> =
    t.recursion("MRObservationoGTTDiagnosistestMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Diagnosistest|1.1.0"
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
export interface MRObservationoGTTDiagnosistestCode {
    coding: Array<
        | MRObservationoGTTDiagnosistestCodeSnomedCT
        | MRObservationoGTTDiagnosistestCodeLoinc
    >;
    id?: string;
}

export const MRObservationoGTTDiagnosistestCode: t.Type<MRObservationoGTTDiagnosistestCode> =
    t.recursion("MRObservationoGTTDiagnosistestCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationoGTTDiagnosistestCodeSnomedCT>,
                                t.Type<MRObservationoGTTDiagnosistestCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationoGTTDiagnosistestCodeSnomedCT,
                            MRObservationoGTTDiagnosistestCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationoGTTDiagnosistestCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationoGTTDiagnosistestCodeLoinc,
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
export interface MRObservationoGTTDiagnosistestSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationoGTTDiagnosistestSubjectReference: t.Type<MRObservationoGTTDiagnosistestSubjectReference> =
    t.recursion("MRObservationoGTTDiagnosistestSubjectReference", () =>
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
export interface MRObservationoGTTDiagnosistestEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationoGTTDiagnosistestEncounterReference: t.Type<MRObservationoGTTDiagnosistestEncounterReference> =
    t.recursion("MRObservationoGTTDiagnosistestEncounterReference", () =>
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
export interface MRObservationoGTTDiagnosistestPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationoGTTDiagnosistestPerformerReference: t.Type<MRObservationoGTTDiagnosistestPerformerReference> =
    t.recursion("MRObservationoGTTDiagnosistestPerformerReference", () =>
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
export interface MRObservationoGTTDiagnosistestDataAbsentReason {
    coding: Array<MRObservationoGTTDiagnosistestDataAbsentReasonCoding>;
    id?: string;
}

export const MRObservationoGTTDiagnosistestDataAbsentReason: t.Type<MRObservationoGTTDiagnosistestDataAbsentReason> =
    t.recursion("MRObservationoGTTDiagnosistestDataAbsentReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationoGTTDiagnosistestDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationoGTTDiagnosistest {
    resourceType: "Observation";
    meta: MRObservationoGTTDiagnosistestMeta;
    status: "final";
    code: MRObservationoGTTDiagnosistestCode;
    subject: MRObservationoGTTDiagnosistestSubjectReference;
    encounter: MRObservationoGTTDiagnosistestEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationoGTTDiagnosistestPerformerReference>;
    valueCodeableConcept?: MRObservationoGTTDiagnosistestValueCodeableConcept;
    dataAbsentReason?: MRObservationoGTTDiagnosistestDataAbsentReason;
}

const MRObservationoGTTDiagnosistest: t.Type<MRObservationoGTTDiagnosistest> =
    t.recursion("MRObservationoGTTDiagnosistest", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationoGTTDiagnosistestMeta,
                    status: Literal("final"),
                    code: MRObservationoGTTDiagnosistestCode,
                    subject: MRObservationoGTTDiagnosistestSubjectReference,
                    encounter: MRObservationoGTTDiagnosistestEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationoGTTDiagnosistestPerformerReference
                    ),
                    valueCodeableConcept:
                        MRObservationoGTTDiagnosistestValueCodeableConcept,
                    dataAbsentReason: MRObservationoGTTDiagnosistestDataAbsentReason
                })
            ])
        )
    );

export default MRObservationoGTTDiagnosistest;
