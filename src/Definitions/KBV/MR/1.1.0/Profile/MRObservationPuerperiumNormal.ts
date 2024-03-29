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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal"

/**
 * Content in other Language.
 */
export interface MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Wochenbett normal";
    id?: string;
}

export const MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Wochenbett normal")
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
export interface MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationPuerperiumNormalCodeCodingDisplay {
    id?: string;
    extension?: MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationPuerperiumNormalCodeCodingDisplay: t.Type<MRObservationPuerperiumNormalCodeCodingDisplay> =
    t.recursion("MRObservationPuerperiumNormalCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationPuerperiumNormalCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationPuerperiumNormalCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "169784003";
    id?: string;
    _display?: MRObservationPuerperiumNormalCodeCodingDisplay;
    display?: string;
}

export const MRObservationPuerperiumNormalCodeCoding: t.Type<MRObservationPuerperiumNormalCodeCoding> =
    t.recursion("MRObservationPuerperiumNormalCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("169784003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationPuerperiumNormalCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationPuerperiumNormalMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.1.0">;
    id?: string;
}

export const MRObservationPuerperiumNormalMeta: t.Type<MRObservationPuerperiumNormalMeta> =
    t.recursion("MRObservationPuerperiumNormalMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.1.0"
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
export interface MRObservationPuerperiumNormalCode {
    coding: Array<MRObservationPuerperiumNormalCodeCoding>;
    id?: string;
}

export const MRObservationPuerperiumNormalCode: t.Type<MRObservationPuerperiumNormalCode> =
    t.recursion("MRObservationPuerperiumNormalCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationPuerperiumNormalCodeCoding)
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
export interface MRObservationPuerperiumNormalSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationPuerperiumNormalSubjectReference: t.Type<MRObservationPuerperiumNormalSubjectReference> =
    t.recursion("MRObservationPuerperiumNormalSubjectReference", () =>
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
export interface MRObservationPuerperiumNormalEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationPuerperiumNormalEncounterReference: t.Type<MRObservationPuerperiumNormalEncounterReference> =
    t.recursion("MRObservationPuerperiumNormalEncounterReference", () =>
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
export interface MRObservationPuerperiumNormalPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationPuerperiumNormalPerformerReference: t.Type<MRObservationPuerperiumNormalPerformerReference> =
    t.recursion("MRObservationPuerperiumNormalPerformerReference", () =>
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

interface MRObservationPuerperiumNormal {
    resourceType: "Observation";
    meta: MRObservationPuerperiumNormalMeta;
    status: "final";
    code: MRObservationPuerperiumNormalCode;
    subject: MRObservationPuerperiumNormalSubjectReference;
    encounter: MRObservationPuerperiumNormalEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationPuerperiumNormalPerformerReference>;
}

const MRObservationPuerperiumNormal: t.Type<MRObservationPuerperiumNormal> = t.recursion(
    "MRObservationPuerperiumNormal",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationPuerperiumNormalMeta,
                    status: Literal("final"),
                    code: MRObservationPuerperiumNormalCode,
                    subject: MRObservationPuerperiumNormalSubjectReference,
                    encounter: MRObservationPuerperiumNormalEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        MRObservationPuerperiumNormalPerformerReference
                    )
                })
            ])
        )
);

export default MRObservationPuerperiumNormal;
