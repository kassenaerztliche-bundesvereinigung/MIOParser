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
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import MRBreastfeedingBehaviorVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRBreastfeedingBehavior";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior"

/**
 * Content in other Language.
 */
export interface MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
 * Content in other Language.
 */
export interface MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Stillverhalten der Mutter";
    id?: string;
}

export const MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Stillverhalten der Mutter")
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
export interface MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                            MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplay: t.Type<MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBreastfeedingBehaviorCodeCodingDisplay {
    id?: string;
    extension?: MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBreastfeedingBehaviorCodeCodingDisplay: t.Type<MRObservationBreastfeedingBehaviorCodeCodingDisplay> =
    t.recursion("MRObservationBreastfeedingBehaviorCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBreastfeedingBehaviorCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBreastfeedingBehaviorValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRBreastfeedingBehaviorVS;
    id?: string;
    _display?: MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBreastfeedingBehaviorValueCodeableConceptCoding: t.Type<MRObservationBreastfeedingBehaviorValueCodeableConceptCoding> =
    t.recursion("MRObservationBreastfeedingBehaviorValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRBreastfeedingBehaviorVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        MRObservationBreastfeedingBehaviorValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBreastfeedingBehaviorCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "33769005";
    id?: string;
    _display?: MRObservationBreastfeedingBehaviorCodeCodingDisplay;
    display?: string;
}

export const MRObservationBreastfeedingBehaviorCodeCoding: t.Type<MRObservationBreastfeedingBehaviorCodeCoding> =
    t.recursion("MRObservationBreastfeedingBehaviorCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("33769005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBreastfeedingBehaviorCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBreastfeedingBehaviorValueCodeableConcept {
    coding: Array<MRObservationBreastfeedingBehaviorValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorValueCodeableConcept: t.Type<MRObservationBreastfeedingBehaviorValueCodeableConcept> =
    t.recursion("MRObservationBreastfeedingBehaviorValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBreastfeedingBehaviorValueCodeableConceptCoding
                    )
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
export interface MRObservationBreastfeedingBehaviorMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior|1.1.0">;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorMeta: t.Type<MRObservationBreastfeedingBehaviorMeta> =
    t.recursion("MRObservationBreastfeedingBehaviorMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior|1.1.0"
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
export interface MRObservationBreastfeedingBehaviorCode {
    coding: Array<MRObservationBreastfeedingBehaviorCodeCoding>;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorCode: t.Type<MRObservationBreastfeedingBehaviorCode> =
    t.recursion("MRObservationBreastfeedingBehaviorCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBreastfeedingBehaviorCodeCoding
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
export interface MRObservationBreastfeedingBehaviorSubject {
    reference: string;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorSubject: t.Type<MRObservationBreastfeedingBehaviorSubject> =
    t.recursion("MRObservationBreastfeedingBehaviorSubject", () =>
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
export interface MRObservationBreastfeedingBehaviorEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorEncounter: t.Type<MRObservationBreastfeedingBehaviorEncounter> =
    t.recursion("MRObservationBreastfeedingBehaviorEncounter", () =>
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
export interface MRObservationBreastfeedingBehaviorPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBreastfeedingBehaviorPerformer: t.Type<MRObservationBreastfeedingBehaviorPerformer> =
    t.recursion("MRObservationBreastfeedingBehaviorPerformer", () =>
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

interface MRObservationBreastfeedingBehavior {
    resourceType: "Observation";
    meta: MRObservationBreastfeedingBehaviorMeta;
    status: "final";
    code: MRObservationBreastfeedingBehaviorCode;
    subject: MRObservationBreastfeedingBehaviorSubject;
    encounter: MRObservationBreastfeedingBehaviorEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationBreastfeedingBehaviorValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBreastfeedingBehaviorPerformer>;
}

const MRObservationBreastfeedingBehavior: t.Type<MRObservationBreastfeedingBehavior> =
    t.recursion("MRObservationBreastfeedingBehavior", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBreastfeedingBehaviorMeta,
                    status: Literal("final"),
                    code: MRObservationBreastfeedingBehaviorCode,
                    subject: MRObservationBreastfeedingBehaviorSubject,
                    encounter: MRObservationBreastfeedingBehaviorEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        MRObservationBreastfeedingBehaviorValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBreastfeedingBehaviorPerformer)
                })
            ])
        )
    );

export default MRObservationBreastfeedingBehavior;
