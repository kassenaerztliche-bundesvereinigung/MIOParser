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

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Edema"

/**
 * Content in other Language.
 */
export interface MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ödeme";
    id?: string;
}

export const MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion("MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Ödeme")
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
export interface MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationEdemaCodeCodingDisplay {
    id?: string;
    extension?: MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationEdemaCodeCodingDisplay: t.Type<MRObservationEdemaCodeCodingDisplay> =
    t.recursion("MRObservationEdemaCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationEdemaCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationEdemaCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "423484008";
    id?: string;
    _display?: MRObservationEdemaCodeCodingDisplay;
    display?: string;
}

export const MRObservationEdemaCodeCoding: t.Type<MRObservationEdemaCodeCoding> =
    t.recursion("MRObservationEdemaCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("423484008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationEdemaCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationEdemaMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Edema|1.1.0">;
    id?: string;
}

export const MRObservationEdemaMeta: t.Type<MRObservationEdemaMeta> = t.recursion(
    "MRObservationEdemaMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Edema|1.1.0"
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
export interface MRObservationEdemaCode {
    coding: Array<MRObservationEdemaCodeCoding>;
    id?: string;
}

export const MRObservationEdemaCode: t.Type<MRObservationEdemaCode> = t.recursion(
    "MRObservationEdemaCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationEdemaCodeCoding)
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
export interface MRObservationEdemaSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationEdemaSubjectReference: t.Type<MRObservationEdemaSubjectReference> =
    t.recursion("MRObservationEdemaSubjectReference", () =>
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
export interface MRObservationEdemaEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationEdemaEncounterReference: t.Type<MRObservationEdemaEncounterReference> =
    t.recursion("MRObservationEdemaEncounterReference", () =>
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
export interface MRObservationEdemaPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationEdemaPerformerReference: t.Type<MRObservationEdemaPerformerReference> =
    t.recursion("MRObservationEdemaPerformerReference", () =>
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

interface MRObservationEdema {
    resourceType: "Observation";
    meta: MRObservationEdemaMeta;
    status: "final";
    code: MRObservationEdemaCode;
    subject: MRObservationEdemaSubjectReference;
    encounter: MRObservationEdemaEncounterReference;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationEdemaPerformerReference>;
}

const MRObservationEdema: t.Type<MRObservationEdema> = t.recursion(
    "MRObservationEdema",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationEdemaMeta,
                    status: Literal("final"),
                    code: MRObservationEdemaCode,
                    subject: MRObservationEdemaSubjectReference,
                    encounter: MRObservationEdemaEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationEdemaPerformerReference)
                })
            ])
        )
);

export default MRObservationEdema;
