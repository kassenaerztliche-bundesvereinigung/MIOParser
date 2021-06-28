/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

import MRBirthModeVS from "../../../../../Definitions/KBV/MR/1.0.0/ValueSet/MRBirthMode";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode"

/**
 * Content in other Language.
 */
export interface MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Geburtsmodus";
    id?: string;
}

export const MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Geburtsmodus")
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
export interface MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                        MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                    )
                })
            ])
        )
);

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomed",
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
                        MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBirthModeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationBirthModeValueCodeableConceptCodingDisplay: t.Type<MRObservationBirthModeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationBirthModeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBirthModeValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                ),
                value: SCALARString
            })
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBirthModeCodeCodingDisplay {
    id?: string;
    extension?: MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationBirthModeCodeCodingDisplay: t.Type<MRObservationBirthModeCodeCodingDisplay> = t.recursion(
    "MRObservationBirthModeCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationBirthModeCodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBirthModeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRBirthModeVS;
    id?: string;
    _display?: MRObservationBirthModeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBirthModeValueCodeableConceptCoding: t.Type<MRObservationBirthModeValueCodeableConceptCoding> = t.recursion(
    "MRObservationBirthModeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRBirthModeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBirthModeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBirthModeCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "118215003";
    id?: string;
    _display?: MRObservationBirthModeCodeCodingDisplay;
    display?: string;
}

export const MRObservationBirthModeCodeCoding: t.Type<MRObservationBirthModeCodeCoding> = t.recursion(
    "MRObservationBirthModeCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("118215003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBirthModeCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBirthModeValueCodeableConcept {
    coding: Array<MRObservationBirthModeValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationBirthModeValueCodeableConcept: t.Type<MRObservationBirthModeValueCodeableConcept> = t.recursion(
    "MRObservationBirthModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBirthModeValueCodeableConceptCoding
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
export interface MRObservationBirthModeMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode|1.0.0"
    >;
    id?: string;
}

export const MRObservationBirthModeMeta: t.Type<MRObservationBirthModeMeta> = t.recursion(
    "MRObservationBirthModeMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode|1.0.0"
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
export interface MRObservationBirthModeCode {
    coding: Array<MRObservationBirthModeCodeCoding>;
    id?: string;
}

export const MRObservationBirthModeCode: t.Type<MRObservationBirthModeCode> = t.recursion(
    "MRObservationBirthModeCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBirthModeCodeCoding)
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
export interface MRObservationBirthModeSubject {
    reference: string;
    id?: string;
}

export const MRObservationBirthModeSubject: t.Type<MRObservationBirthModeSubject> = t.recursion(
    "MRObservationBirthModeSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.0.0"
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
export interface MRObservationBirthModeEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBirthModeEncounter: t.Type<MRObservationBirthModeEncounter> = t.recursion(
    "MRObservationBirthModeEncounter",
    () =>
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
export interface MRObservationBirthModePerformer {
    reference: string;
    id?: string;
}

export const MRObservationBirthModePerformer: t.Type<MRObservationBirthModePerformer> = t.recursion(
    "MRObservationBirthModePerformer",
    () =>
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

interface MRObservationBirthMode {
    resourceType: "Observation";
    meta: MRObservationBirthModeMeta;
    status: "final";
    code: MRObservationBirthModeCode;
    subject: MRObservationBirthModeSubject;
    encounter: MRObservationBirthModeEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: MRObservationBirthModeValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBirthModePerformer>;
}

const MRObservationBirthMode: t.Type<MRObservationBirthMode> = t.recursion(
    "MRObservationBirthMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBirthModeMeta,
                    status: Literal("final"),
                    code: MRObservationBirthModeCode,
                    subject: MRObservationBirthModeSubject,
                    encounter: MRObservationBirthModeEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept: MRObservationBirthModeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBirthModePerformer)
                })
            ])
        )
);

export default MRObservationBirthMode;
