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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference"

/**
 * Content in other Language.
 */
export interface MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kopfumfang";
    id?: string;
}

export const MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kopfumfang")
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
export interface MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Kopfumfang";
    id?: string;
}

export const MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kopfumfang")
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
export interface MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                            MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                            MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationHeadCircumferenceCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationHeadCircumferenceCodeCodeSnomedDisplay: t.Type<MRObservationHeadCircumferenceCodeCodeSnomedDisplay> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHeadCircumferenceCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationHeadCircumferenceCodeCodeLoincDisplay {
    id?: string;
    extension?: MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationHeadCircumferenceCodeCodeLoincDisplay: t.Type<MRObservationHeadCircumferenceCodeCodeLoincDisplay> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationHeadCircumferenceCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeadCircumferenceCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "169876006";
    id?: string;
    _display?: MRObservationHeadCircumferenceCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationHeadCircumferenceCodeCodeSnomed: t.Type<MRObservationHeadCircumferenceCodeCodeSnomed> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("169876006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeadCircumferenceCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationHeadCircumferenceCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "9843-4";
    id?: string;
    _display?: MRObservationHeadCircumferenceCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationHeadCircumferenceCodeCodeLoinc: t.Type<MRObservationHeadCircumferenceCodeCodeLoinc> =
    t.recursion("MRObservationHeadCircumferenceCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("9843-4")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationHeadCircumferenceCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationHeadCircumferenceValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const MRObservationHeadCircumferenceValueQuantity: t.Type<MRObservationHeadCircumferenceValueQuantity> =
    t.recursion("MRObservationHeadCircumferenceValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("cm"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("cm")
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
export interface MRObservationHeadCircumferenceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.1.0">;
    id?: string;
}

export const MRObservationHeadCircumferenceMeta: t.Type<MRObservationHeadCircumferenceMeta> =
    t.recursion("MRObservationHeadCircumferenceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference|1.1.0"
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
export interface MRObservationHeadCircumferenceCode {
    coding: Array<
        | MRObservationHeadCircumferenceCodeCodeSnomed
        | MRObservationHeadCircumferenceCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationHeadCircumferenceCode: t.Type<MRObservationHeadCircumferenceCode> =
    t.recursion("MRObservationHeadCircumferenceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationHeadCircumferenceCodeCodeSnomed>,
                                t.Type<MRObservationHeadCircumferenceCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationHeadCircumferenceCodeCodeSnomed,
                            MRObservationHeadCircumferenceCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationHeadCircumferenceCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationHeadCircumferenceCodeCodeLoinc,
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
export interface MRObservationHeadCircumferenceSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationHeadCircumferenceSubjectReference: t.Type<MRObservationHeadCircumferenceSubjectReference> =
    t.recursion("MRObservationHeadCircumferenceSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRObservationHeadCircumferenceEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationHeadCircumferenceEncounterReference: t.Type<MRObservationHeadCircumferenceEncounterReference> =
    t.recursion("MRObservationHeadCircumferenceEncounterReference", () =>
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
export interface MRObservationHeadCircumferencePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationHeadCircumferencePerformerReference: t.Type<MRObservationHeadCircumferencePerformerReference> =
    t.recursion("MRObservationHeadCircumferencePerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationHeadCircumference {
    resourceType: "Observation";
    meta: MRObservationHeadCircumferenceMeta;
    status: "final";
    code: MRObservationHeadCircumferenceCode;
    subject: MRObservationHeadCircumferenceSubjectReference;
    encounter: MRObservationHeadCircumferenceEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationHeadCircumferenceValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationHeadCircumferencePerformerReference>;
}

const MRObservationHeadCircumference: t.Type<MRObservationHeadCircumference> =
    t.recursion("MRObservationHeadCircumference", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationHeadCircumferenceMeta,
                    status: Literal("final"),
                    code: MRObservationHeadCircumferenceCode,
                    subject: MRObservationHeadCircumferenceSubjectReference,
                    encounter: MRObservationHeadCircumferenceEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationHeadCircumferenceValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationHeadCircumferencePerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationHeadCircumference;
