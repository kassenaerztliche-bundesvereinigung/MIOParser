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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake"

/**
 * Content in other Language.
 */
export interface MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Beratung über ausreichende Jodzufuhr während der Stillzeit erfolgt";
    id?: string;
}

export const MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Beratung über ausreichende Jodzufuhr während der Stillzeit erfolgt"
                        )
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
export interface MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationAdviceOnIodineIntakeCodeCodingDisplay {
    id?: string;
    extension?: MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationAdviceOnIodineIntakeCodeCodingDisplay: t.Type<MRObservationAdviceOnIodineIntakeCodeCodingDisplay> =
    t.recursion("MRObservationAdviceOnIodineIntakeCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationAdviceOnIodineIntakeCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationAdviceOnIodineIntakeCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "1157300007";
    id?: string;
    _display?: MRObservationAdviceOnIodineIntakeCodeCodingDisplay;
    display?: string;
}

export const MRObservationAdviceOnIodineIntakeCodeCoding: t.Type<MRObservationAdviceOnIodineIntakeCodeCoding> =
    t.recursion("MRObservationAdviceOnIodineIntakeCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("1157300007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationAdviceOnIodineIntakeCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationAdviceOnIodineIntakeMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake|1.1.0">;
    id?: string;
}

export const MRObservationAdviceOnIodineIntakeMeta: t.Type<MRObservationAdviceOnIodineIntakeMeta> =
    t.recursion("MRObservationAdviceOnIodineIntakeMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake|1.1.0"
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
export interface MRObservationAdviceOnIodineIntakeCode {
    coding: Array<MRObservationAdviceOnIodineIntakeCodeCoding>;
    id?: string;
}

export const MRObservationAdviceOnIodineIntakeCode: t.Type<MRObservationAdviceOnIodineIntakeCode> =
    t.recursion("MRObservationAdviceOnIodineIntakeCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationAdviceOnIodineIntakeCodeCoding)
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
export interface MRObservationAdviceOnIodineIntakeSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationAdviceOnIodineIntakeSubjectReference: t.Type<MRObservationAdviceOnIodineIntakeSubjectReference> =
    t.recursion("MRObservationAdviceOnIodineIntakeSubjectReference", () =>
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
export interface MRObservationAdviceOnIodineIntakeEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationAdviceOnIodineIntakeEncounterReference: t.Type<MRObservationAdviceOnIodineIntakeEncounterReference> =
    t.recursion("MRObservationAdviceOnIodineIntakeEncounterReference", () =>
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
export interface MRObservationAdviceOnIodineIntakePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationAdviceOnIodineIntakePerformerReference: t.Type<MRObservationAdviceOnIodineIntakePerformerReference> =
    t.recursion("MRObservationAdviceOnIodineIntakePerformerReference", () =>
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

interface MRObservationAdviceOnIodineIntake {
    resourceType: "Observation";
    meta: MRObservationAdviceOnIodineIntakeMeta;
    status: "final";
    code: MRObservationAdviceOnIodineIntakeCode;
    subject: MRObservationAdviceOnIodineIntakeSubjectReference;
    encounter: MRObservationAdviceOnIodineIntakeEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationAdviceOnIodineIntakePerformerReference>;
}

const MRObservationAdviceOnIodineIntake: t.Type<MRObservationAdviceOnIodineIntake> =
    t.recursion("MRObservationAdviceOnIodineIntake", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationAdviceOnIodineIntakeMeta,
                    status: Literal("final"),
                    code: MRObservationAdviceOnIodineIntakeCode,
                    subject: MRObservationAdviceOnIodineIntakeSubjectReference,
                    encounter: MRObservationAdviceOnIodineIntakeEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationAdviceOnIodineIntakePerformerReference
                    )
                })
            ])
        )
    );

export default MRObservationAdviceOnIodineIntake;
