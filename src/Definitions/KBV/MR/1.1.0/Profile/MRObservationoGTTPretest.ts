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

import MRoGTTPretestVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRoGTTPretest";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Pretest"

/**
 * Content in other Language.
 */
export interface MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Vortest";
    id?: string;
}

export const MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Vortest")
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
export interface MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Vortest";
    id?: string;
}

export const MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Vortest")
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
export interface MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                        MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoincContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                            MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationoGTTPretestCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationoGTTPretestCodeSnomedCTDisplay: t.Type<MRObservationoGTTPretestCodeSnomedCTDisplay> =
    t.recursion("MRObservationoGTTPretestCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationoGTTPretestCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationoGTTPretestCodeLoincDisplay {
    id?: string;
    extension?: MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationoGTTPretestCodeLoincDisplay: t.Type<MRObservationoGTTPretestCodeLoincDisplay> =
    t.recursion("MRObservationoGTTPretestCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationoGTTPretestCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationoGTTPretestValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationoGTTPretestValueCodeableConceptCodingDisplay: t.Type<MRObservationoGTTPretestValueCodeableConceptCodingDisplay> =
    t.recursion("MRObservationoGTTPretestValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationoGTTPretestValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationoGTTPretestCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "442260000";
    id?: string;
    _display?: MRObservationoGTTPretestCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationoGTTPretestCodeSnomedCT: t.Type<MRObservationoGTTPretestCodeSnomedCT> =
    t.recursion("MRObservationoGTTPretestCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("442260000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationoGTTPretestCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationoGTTPretestCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "1551-1";
    id?: string;
    _display?: MRObservationoGTTPretestCodeLoincDisplay;
    display?: string;
}

export const MRObservationoGTTPretestCodeLoinc: t.Type<MRObservationoGTTPretestCodeLoinc> =
    t.recursion("MRObservationoGTTPretestCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("1551-1")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationoGTTPretestCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationoGTTPretestValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRoGTTPretestVS;
    id?: string;
    _display?: MRObservationoGTTPretestValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationoGTTPretestValueCodeableConceptCoding: t.Type<MRObservationoGTTPretestValueCodeableConceptCoding> =
    t.recursion("MRObservationoGTTPretestValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRoGTTPretestVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationoGTTPretestValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationoGTTPretestValueCodeableConcept {
    coding: Array<MRObservationoGTTPretestValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationoGTTPretestValueCodeableConcept: t.Type<MRObservationoGTTPretestValueCodeableConcept> =
    t.recursion("MRObservationoGTTPretestValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationoGTTPretestValueCodeableConceptCoding
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
export interface MRObservationoGTTPretestDataAbsentReasonCoding {
    system: "http://terminology.hl7.org/CodeSystem/data-absent-reason";
    version: "4.0.1";
    code: "not-performed";
    display: "Not Performed";
    id?: string;
}

export const MRObservationoGTTPretestDataAbsentReasonCoding: t.Type<MRObservationoGTTPretestDataAbsentReasonCoding> =
    t.recursion("MRObservationoGTTPretestDataAbsentReasonCoding", () =>
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
export interface MRObservationoGTTPretestMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Pretest|1.1.0">;
    id?: string;
}

export const MRObservationoGTTPretestMeta: t.Type<MRObservationoGTTPretestMeta> =
    t.recursion("MRObservationoGTTPretestMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Pretest|1.1.0"
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
export interface MRObservationoGTTPretestCode {
    coding: Array<
        MRObservationoGTTPretestCodeSnomedCT | MRObservationoGTTPretestCodeLoinc
    >;
    id?: string;
}

export const MRObservationoGTTPretestCode: t.Type<MRObservationoGTTPretestCode> =
    t.recursion("MRObservationoGTTPretestCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationoGTTPretestCodeSnomedCT>,
                                t.Type<MRObservationoGTTPretestCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationoGTTPretestCodeSnomedCT,
                            MRObservationoGTTPretestCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationoGTTPretestCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationoGTTPretestCodeLoinc,
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
export interface MRObservationoGTTPretestSubject {
    reference: string;
    id?: string;
}

export const MRObservationoGTTPretestSubject: t.Type<MRObservationoGTTPretestSubject> =
    t.recursion("MRObservationoGTTPretestSubject", () =>
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
export interface MRObservationoGTTPretestEncounter {
    reference: string;
    id?: string;
}

export const MRObservationoGTTPretestEncounter: t.Type<MRObservationoGTTPretestEncounter> =
    t.recursion("MRObservationoGTTPretestEncounter", () =>
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
export interface MRObservationoGTTPretestPerformer {
    reference: string;
    id?: string;
}

export const MRObservationoGTTPretestPerformer: t.Type<MRObservationoGTTPretestPerformer> =
    t.recursion("MRObservationoGTTPretestPerformer", () =>
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
export interface MRObservationoGTTPretestDataAbsentReason {
    coding: Array<MRObservationoGTTPretestDataAbsentReasonCoding>;
    id?: string;
}

export const MRObservationoGTTPretestDataAbsentReason: t.Type<MRObservationoGTTPretestDataAbsentReason> =
    t.recursion("MRObservationoGTTPretestDataAbsentReason", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationoGTTPretestDataAbsentReasonCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationoGTTPretest {
    resourceType: "Observation";
    meta: MRObservationoGTTPretestMeta;
    status: "final";
    code: MRObservationoGTTPretestCode;
    subject: MRObservationoGTTPretestSubject;
    encounter: MRObservationoGTTPretestEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationoGTTPretestPerformer>;
    valueCodeableConcept?: MRObservationoGTTPretestValueCodeableConcept;
    dataAbsentReason?: MRObservationoGTTPretestDataAbsentReason;
}

const MRObservationoGTTPretest: t.Type<MRObservationoGTTPretest> = t.recursion(
    "MRObservationoGTTPretest",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationoGTTPretestMeta,
                    status: Literal("final"),
                    code: MRObservationoGTTPretestCode,
                    subject: MRObservationoGTTPretestSubject,
                    encounter: MRObservationoGTTPretestEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationoGTTPretestPerformer),
                    valueCodeableConcept: MRObservationoGTTPretestValueCodeableConcept,
                    dataAbsentReason: MRObservationoGTTPretestDataAbsentReason
                })
            ])
        )
);

export default MRObservationoGTTPretest;
