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

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Determination_Childbirth"

/**
 * Content in other Language.
 */
export interface MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Terminbestimmung";
    id?: string;
}

export const MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Terminbestimmung")
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
export interface MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationDateDeterminationChildbirthCodeCodingDisplay {
    id?: string;
    extension?: MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationDateDeterminationChildbirthCodeCodingDisplay: t.Type<MRObservationDateDeterminationChildbirthCodeCodingDisplay> =
    t.recursion("MRObservationDateDeterminationChildbirthCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationDateDeterminationChildbirthCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationDateDeterminationChildbirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "161714006";
    id?: string;
    _display?: MRObservationDateDeterminationChildbirthCodeCodingDisplay;
    display?: string;
}

export const MRObservationDateDeterminationChildbirthCodeCoding: t.Type<MRObservationDateDeterminationChildbirthCodeCoding> =
    t.recursion("MRObservationDateDeterminationChildbirthCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("161714006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDateDeterminationChildbirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationDateDeterminationChildbirthMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Determination_Childbirth|1.1.0">;
    id?: string;
}

export const MRObservationDateDeterminationChildbirthMeta: t.Type<MRObservationDateDeterminationChildbirthMeta> =
    t.recursion("MRObservationDateDeterminationChildbirthMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Determination_Childbirth|1.1.0"
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
export interface MRObservationDateDeterminationChildbirthCode {
    coding: Array<MRObservationDateDeterminationChildbirthCodeCoding>;
    id?: string;
}

export const MRObservationDateDeterminationChildbirthCode: t.Type<MRObservationDateDeterminationChildbirthCode> =
    t.recursion("MRObservationDateDeterminationChildbirthCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationDateDeterminationChildbirthCodeCoding
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
export interface MRObservationDateDeterminationChildbirthSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationDateDeterminationChildbirthSubjectReference: t.Type<MRObservationDateDeterminationChildbirthSubjectReference> =
    t.recursion("MRObservationDateDeterminationChildbirthSubjectReference", () =>
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
export interface MRObservationDateDeterminationChildbirthEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationDateDeterminationChildbirthEncounterReference: t.Type<MRObservationDateDeterminationChildbirthEncounterReference> =
    t.recursion("MRObservationDateDeterminationChildbirthEncounterReference", () =>
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
export interface MRObservationDateDeterminationChildbirthPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationDateDeterminationChildbirthPerformerReference: t.Type<MRObservationDateDeterminationChildbirthPerformerReference> =
    t.recursion("MRObservationDateDeterminationChildbirthPerformerReference", () =>
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

interface MRObservationDateDeterminationChildbirth {
    resourceType: "Observation";
    meta: MRObservationDateDeterminationChildbirthMeta;
    status: ObservationstatusVS;
    code: MRObservationDateDeterminationChildbirthCode;
    subject: MRObservationDateDeterminationChildbirthSubjectReference;
    encounter: MRObservationDateDeterminationChildbirthEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationDateDeterminationChildbirthPerformerReference>;
    note?: Array<Annotation>;
}

const MRObservationDateDeterminationChildbirth: t.Type<MRObservationDateDeterminationChildbirth> =
    t.recursion("MRObservationDateDeterminationChildbirth", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationDateDeterminationChildbirthMeta,
                    status: ObservationstatusVS,
                    code: MRObservationDateDeterminationChildbirthCode,
                    subject: MRObservationDateDeterminationChildbirthSubjectReference,
                    encounter: MRObservationDateDeterminationChildbirthEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationDateDeterminationChildbirthPerformerReference
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRObservationDateDeterminationChildbirth;
