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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age"

/**
 * Content in other Language.
 */
export interface MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Alter";
    id?: string;
}

export const MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion("MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Alter")
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
export interface MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationAgeCodeCodingDisplay {
    id?: string;
    extension?: MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationAgeCodeCodingDisplay: t.Type<MRObservationAgeCodeCodingDisplay> =
    t.recursion("MRObservationAgeCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationAgeCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationAgeCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "424144002";
    id?: string;
    _display?: MRObservationAgeCodeCodingDisplay;
    display?: string;
}

export const MRObservationAgeCodeCoding: t.Type<MRObservationAgeCodeCoding> = t.recursion(
    "MRObservationAgeCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("424144002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationAgeCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationAgeValueQuantity {
    value: number;
    unit: "Jahre";
    system: "http://unitsofmeasure.org";
    code: "a";
    id?: string;
}

export const MRObservationAgeValueQuantity: t.Type<MRObservationAgeValueQuantity> =
    t.recursion("MRObservationAgeValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("Jahre"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("a")
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
export interface MRObservationAgeMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.1.0">;
    id?: string;
}

export const MRObservationAgeMeta: t.Type<MRObservationAgeMeta> = t.recursion(
    "MRObservationAgeMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age|1.1.0"
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
export interface MRObservationAgeCode {
    coding: Array<MRObservationAgeCodeCoding>;
    id?: string;
}

export const MRObservationAgeCode: t.Type<MRObservationAgeCode> = t.recursion(
    "MRObservationAgeCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationAgeCodeCoding)
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
export interface MRObservationAgeSubject {
    reference: string;
    id?: string;
}

export const MRObservationAgeSubject: t.Type<MRObservationAgeSubject> = t.recursion(
    "MRObservationAgeSubject",
    () =>
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
export interface MRObservationAgeEncounter {
    reference: string;
    id?: string;
}

export const MRObservationAgeEncounter: t.Type<MRObservationAgeEncounter> = t.recursion(
    "MRObservationAgeEncounter",
    () =>
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
export interface MRObservationAgePerformer {
    reference: string;
    id?: string;
}

export const MRObservationAgePerformer: t.Type<MRObservationAgePerformer> = t.recursion(
    "MRObservationAgePerformer",
    () =>
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

interface MRObservationAge {
    resourceType: "Observation";
    meta: MRObservationAgeMeta;
    status: "final";
    code: MRObservationAgeCode;
    subject: MRObservationAgeSubject;
    encounter: MRObservationAgeEncounter;
    effectiveDateTime: string;
    valueQuantity: MRObservationAgeValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationAgePerformer>;
}

const MRObservationAge: t.Type<MRObservationAge> = t.recursion("MRObservationAge", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Observation"),
                meta: MRObservationAgeMeta,
                status: Literal("final"),
                code: MRObservationAgeCode,
                subject: MRObservationAgeSubject,
                encounter: MRObservationAgeEncounter,
                effectiveDateTime: SCALARDateTime,
                valueQuantity: MRObservationAgeValueQuantity
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                performer: MaxArray(1, MRObservationAgePerformer)
            })
        ])
    )
);

export default MRObservationAge;
