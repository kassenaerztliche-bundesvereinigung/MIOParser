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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height"

/**
 * Content in other Language.
 */
export interface MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körperlänge";
    id?: string;
}

export const MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körperlänge")
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
export interface MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körperlänge";
    id?: string;
}

export const MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körperlänge")
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
export interface MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                        MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBirthHeightCodeCodeSnomedDisplay {
    id?: string;
    extension?: MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBirthHeightCodeCodeSnomedDisplay: t.Type<MRObservationBirthHeightCodeCodeSnomedDisplay> =
    t.recursion("MRObservationBirthHeightCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBirthHeightCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBirthHeightCodeCodeLoincDisplay {
    id?: string;
    extension?: MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationBirthHeightCodeCodeLoincDisplay: t.Type<MRObservationBirthHeightCodeCodeLoincDisplay> =
    t.recursion("MRObservationBirthHeightCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBirthHeightCodeCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBirthHeightCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "169886007";
    id?: string;
    _display?: MRObservationBirthHeightCodeCodeSnomedDisplay;
    display?: string;
}

export const MRObservationBirthHeightCodeCodeSnomed: t.Type<MRObservationBirthHeightCodeCodeSnomed> =
    t.recursion("MRObservationBirthHeightCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("169886007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBirthHeightCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBirthHeightCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "89269-5";
    id?: string;
    _display?: MRObservationBirthHeightCodeCodeLoincDisplay;
    display?: string;
}

export const MRObservationBirthHeightCodeCodeLoinc: t.Type<MRObservationBirthHeightCodeCodeLoinc> =
    t.recursion("MRObservationBirthHeightCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("89269-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBirthHeightCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBirthHeightValueQuantity {
    value: number;
    unit: "cm";
    system: "http://unitsofmeasure.org";
    code: "cm";
    id?: string;
}

export const MRObservationBirthHeightValueQuantity: t.Type<MRObservationBirthHeightValueQuantity> =
    t.recursion("MRObservationBirthHeightValueQuantity", () =>
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
export interface MRObservationBirthHeightMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height|1.1.0">;
    id?: string;
}

export const MRObservationBirthHeightMeta: t.Type<MRObservationBirthHeightMeta> =
    t.recursion("MRObservationBirthHeightMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height|1.1.0"
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
export interface MRObservationBirthHeightCode {
    coding: Array<
        MRObservationBirthHeightCodeCodeSnomed | MRObservationBirthHeightCodeCodeLoinc
    >;
    id?: string;
}

export const MRObservationBirthHeightCode: t.Type<MRObservationBirthHeightCode> =
    t.recursion("MRObservationBirthHeightCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBirthHeightCodeCodeSnomed>,
                                t.Type<MRObservationBirthHeightCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBirthHeightCodeCodeSnomed,
                            MRObservationBirthHeightCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBirthHeightCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBirthHeightCodeCodeLoinc,
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
export interface MRObservationBirthHeightSubject {
    reference: string;
    id?: string;
}

export const MRObservationBirthHeightSubject: t.Type<MRObservationBirthHeightSubject> =
    t.recursion("MRObservationBirthHeightSubject", () =>
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
export interface MRObservationBirthHeightEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBirthHeightEncounter: t.Type<MRObservationBirthHeightEncounter> =
    t.recursion("MRObservationBirthHeightEncounter", () =>
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
export interface MRObservationBirthHeightPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBirthHeightPerformer: t.Type<MRObservationBirthHeightPerformer> =
    t.recursion("MRObservationBirthHeightPerformer", () =>
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

interface MRObservationBirthHeight {
    resourceType: "Observation";
    meta: MRObservationBirthHeightMeta;
    status: "final";
    code: MRObservationBirthHeightCode;
    subject: MRObservationBirthHeightSubject;
    encounter: MRObservationBirthHeightEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationBirthHeightValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBirthHeightPerformer>;
}

const MRObservationBirthHeight: t.Type<MRObservationBirthHeight> = t.recursion(
    "MRObservationBirthHeight",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBirthHeightMeta,
                    status: Literal("final"),
                    code: MRObservationBirthHeightCode,
                    subject: MRObservationBirthHeightSubject,
                    encounter: MRObservationBirthHeightEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationBirthHeightValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBirthHeightPerformer)
                })
            ])
        )
);

export default MRObservationBirthHeight;
