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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy"

/**
 * Content in other Language.
 */
export interface MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kind lebt und ist gesund";
    id?: string;
}

export const MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kind lebt und ist gesund")
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
export interface MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationChildIsHealthyCodeCodingDisplay {
    id?: string;
    extension?: MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationChildIsHealthyCodeCodingDisplay: t.Type<MRObservationChildIsHealthyCodeCodingDisplay> =
    t.recursion("MRObservationChildIsHealthyCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationChildIsHealthyCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationChildIsHealthyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "170118008";
    id?: string;
    _display?: MRObservationChildIsHealthyCodeCodingDisplay;
    display?: string;
}

export const MRObservationChildIsHealthyCodeCoding: t.Type<MRObservationChildIsHealthyCodeCoding> =
    t.recursion("MRObservationChildIsHealthyCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("170118008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationChildIsHealthyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationChildIsHealthyMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy|1.1.0">;
    id?: string;
}

export const MRObservationChildIsHealthyMeta: t.Type<MRObservationChildIsHealthyMeta> =
    t.recursion("MRObservationChildIsHealthyMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy|1.1.0"
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
export interface MRObservationChildIsHealthyCode {
    coding: Array<MRObservationChildIsHealthyCodeCoding>;
    id?: string;
}

export const MRObservationChildIsHealthyCode: t.Type<MRObservationChildIsHealthyCode> =
    t.recursion("MRObservationChildIsHealthyCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationChildIsHealthyCodeCoding)
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
export interface MRObservationChildIsHealthySubject {
    reference: string;
    id?: string;
}

export const MRObservationChildIsHealthySubject: t.Type<MRObservationChildIsHealthySubject> =
    t.recursion("MRObservationChildIsHealthySubject", () =>
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
export interface MRObservationChildIsHealthyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationChildIsHealthyEncounter: t.Type<MRObservationChildIsHealthyEncounter> =
    t.recursion("MRObservationChildIsHealthyEncounter", () =>
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
export interface MRObservationChildIsHealthyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationChildIsHealthyPerformer: t.Type<MRObservationChildIsHealthyPerformer> =
    t.recursion("MRObservationChildIsHealthyPerformer", () =>
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

interface MRObservationChildIsHealthy {
    resourceType: "Observation";
    meta: MRObservationChildIsHealthyMeta;
    status: "final";
    code: MRObservationChildIsHealthyCode;
    subject: MRObservationChildIsHealthySubject;
    encounter: MRObservationChildIsHealthyEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationChildIsHealthyPerformer>;
}

const MRObservationChildIsHealthy: t.Type<MRObservationChildIsHealthy> = t.recursion(
    "MRObservationChildIsHealthy",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationChildIsHealthyMeta,
                    status: Literal("final"),
                    code: MRObservationChildIsHealthyCode,
                    subject: MRObservationChildIsHealthySubject,
                    encounter: MRObservationChildIsHealthyEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationChildIsHealthyPerformer)
                })
            ])
        )
);

export default MRObservationChildIsHealthy;
