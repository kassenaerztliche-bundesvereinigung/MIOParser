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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para"

/**
 * Content in other Language.
 */
export interface MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Para";
    id?: string;
}

export const MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion("MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomedContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Para")
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
export interface MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomed", () =>
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
                        MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationParaCodeCodingDisplay {
    id?: string;
    extension?: MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationParaCodeCodingDisplay: t.Type<MRObservationParaCodeCodingDisplay> =
    t.recursion("MRObservationParaCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationParaCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationParaCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364325004";
    id?: string;
    _display?: MRObservationParaCodeCodingDisplay;
    display?: string;
}

export const MRObservationParaCodeCoding: t.Type<MRObservationParaCodeCoding> =
    t.recursion("MRObservationParaCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364325004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationParaCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationParaValueQuantity {
    value: number;
    system: "http://unitsofmeasure.org";
    code: "1";
    id?: string;
    unit?: string;
}

export const MRObservationParaValueQuantity: t.Type<MRObservationParaValueQuantity> =
    t.recursion("MRObservationParaValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("1")
                }),
                t.partial({
                    id: SCALARString,
                    unit: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationParaMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0">;
    id?: string;
}

export const MRObservationParaMeta: t.Type<MRObservationParaMeta> = t.recursion(
    "MRObservationParaMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para|1.0.0"
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
export interface MRObservationParaCode {
    coding: Array<MRObservationParaCodeCoding>;
    id?: string;
}

export const MRObservationParaCode: t.Type<MRObservationParaCode> = t.recursion(
    "MRObservationParaCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationParaCodeCoding)
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
export interface MRObservationParaSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationParaSubjectReference: t.Type<MRObservationParaSubjectReference> =
    t.recursion("MRObservationParaSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationParaEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationParaEncounterReference: t.Type<MRObservationParaEncounterReference> =
    t.recursion("MRObservationParaEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationParaPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationParaPerformerReference: t.Type<MRObservationParaPerformerReference> =
    t.recursion("MRObservationParaPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationPara {
    resourceType: "Observation";
    meta: MRObservationParaMeta;
    status: "final";
    code: MRObservationParaCode;
    subject: MRObservationParaSubjectReference;
    encounter: MRObservationParaEncounterReference;
    effectiveDateTime: string;
    valueQuantity: MRObservationParaValueQuantity;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationParaPerformerReference>;
}

const MRObservationPara: t.Type<MRObservationPara> = t.recursion(
    "MRObservationPara",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationParaMeta,
                    status: Literal("final"),
                    code: MRObservationParaCode,
                    subject: MRObservationParaSubjectReference,
                    encounter: MRObservationParaEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueQuantity: MRObservationParaValueQuantity
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationParaPerformerReference)
                })
            ])
        )
);

export default MRObservationPara;
