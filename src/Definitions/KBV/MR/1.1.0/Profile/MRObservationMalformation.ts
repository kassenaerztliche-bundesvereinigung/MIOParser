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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation"

/**
 * Content in other Language.
 */
export interface MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Auffällige Fehlbildung";
    id?: string;
}

export const MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Auffällige Fehlbildung")
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
export interface MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationMalformationCodeCodingDisplay {
    id?: string;
    extension?: MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationMalformationCodeCodingDisplay: t.Type<MRObservationMalformationCodeCodingDisplay> =
    t.recursion("MRObservationMalformationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationMalformationCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationMalformationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "276654001";
    id?: string;
    _display?: MRObservationMalformationCodeCodingDisplay;
    display?: string;
}

export const MRObservationMalformationCodeCoding: t.Type<MRObservationMalformationCodeCoding> =
    t.recursion("MRObservationMalformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("276654001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationMalformationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationMalformationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation|1.1.0">;
    id?: string;
}

export const MRObservationMalformationMeta: t.Type<MRObservationMalformationMeta> =
    t.recursion("MRObservationMalformationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation|1.1.0"
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
export interface MRObservationMalformationCode {
    coding: Array<MRObservationMalformationCodeCoding>;
    id?: string;
}

export const MRObservationMalformationCode: t.Type<MRObservationMalformationCode> =
    t.recursion("MRObservationMalformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationMalformationCodeCoding)
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
export interface MRObservationMalformationSubject {
    reference: string;
    id?: string;
}

export const MRObservationMalformationSubject: t.Type<MRObservationMalformationSubject> =
    t.recursion("MRObservationMalformationSubject", () =>
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
export interface MRObservationMalformationEncounter {
    reference: string;
    id?: string;
}

export const MRObservationMalformationEncounter: t.Type<MRObservationMalformationEncounter> =
    t.recursion("MRObservationMalformationEncounter", () =>
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
export interface MRObservationMalformationPerformer {
    reference: string;
    id?: string;
}

export const MRObservationMalformationPerformer: t.Type<MRObservationMalformationPerformer> =
    t.recursion("MRObservationMalformationPerformer", () =>
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

interface MRObservationMalformation {
    resourceType: "Observation";
    meta: MRObservationMalformationMeta;
    status: "final";
    code: MRObservationMalformationCode;
    subject: MRObservationMalformationSubject;
    encounter: MRObservationMalformationEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationMalformationPerformer>;
}

const MRObservationMalformation: t.Type<MRObservationMalformation> = t.recursion(
    "MRObservationMalformation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationMalformationMeta,
                    status: Literal("final"),
                    code: MRObservationMalformationCode,
                    subject: MRObservationMalformationSubject,
                    encounter: MRObservationMalformationEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationMalformationPerformer)
                })
            ])
        )
);

export default MRObservationMalformation;
