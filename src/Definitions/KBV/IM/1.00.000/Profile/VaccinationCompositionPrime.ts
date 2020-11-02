/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import {
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    Req,
    ReqArray
} from "../../../../util";
import SCALARCanonical from "../../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";
import CodeableConcept from "../../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import CompositionstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Compositionstatus";
import ListmodeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Listmode";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import NarrativestatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Narrativestatus";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Prime"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationCompositionPrimeRecordPrimeCodeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    code: "IMMUNIZ";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationCompositionPrimeRecordPrimeCodeCoding: t.Type<VaccinationCompositionPrimeRecordPrimeCodeCoding> = t.recursion(
    "VaccinationCompositionPrimeRecordPrimeCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-ActCode"),
                    code: Literal("IMMUNIZ")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationCompositionPrimeObservationCodeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    code: "COBSCAT";
    id?: string;
    version?: string;
}

export const VaccinationCompositionPrimeObservationCodeCoding: t.Type<VaccinationCompositionPrimeObservationCodeCoding> = t.recursion(
    "VaccinationCompositionPrimeObservationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-ActCode"),
                    code: Literal("COBSCAT")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationCompositionPrimeConditionCodeCoding {
    system: "http://loinc.org";
    code: "11348-0";
    id?: string;
    version?: string;
}

export const VaccinationCompositionPrimeConditionCodeCoding: t.Type<VaccinationCompositionPrimeConditionCodeCoding> = t.recursion(
    "VaccinationCompositionPrimeConditionCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    code: Literal("11348-0")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
);

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface VaccinationCompositionPrimeConditionSectionEntry {
    reference: string;
    id?: string;
}

export const VaccinationCompositionPrimeConditionSectionEntry: t.Type<VaccinationCompositionPrimeConditionSectionEntry> = t.recursion(
    "VaccinationCompositionPrimeConditionSectionEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface VaccinationCompositionPrimeRecordPrimeCode {
    coding: Array<VaccinationCompositionPrimeRecordPrimeCodeCoding>;
    id?: string;
}

export const VaccinationCompositionPrimeRecordPrimeCode: t.Type<VaccinationCompositionPrimeRecordPrimeCode> = t.recursion(
    "VaccinationCompositionPrimeRecordPrimeCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationCompositionPrimeRecordPrimeCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface VaccinationCompositionPrimeRecordPrimeEntry {
    reference: string;
    id?: string;
}

export const VaccinationCompositionPrimeRecordPrimeEntry: t.Type<VaccinationCompositionPrimeRecordPrimeEntry> = t.recursion(
    "VaccinationCompositionPrimeRecordPrimeEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A code identifying the kind of content contained within the section. This must be consistent with the section title.
 */
export interface VaccinationCompositionPrimeObservationCode {
    coding: Array<VaccinationCompositionPrimeObservationCodeCoding>;
    id?: string;
}

export const VaccinationCompositionPrimeObservationCode: t.Type<VaccinationCompositionPrimeObservationCode> = t.recursion(
    "VaccinationCompositionPrimeObservationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationCompositionPrimeObservationCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface VaccinationCompositionPrimeObservationEntry {
    reference: string;
    id?: string;
}

export const VaccinationCompositionPrimeObservationEntry: t.Type<VaccinationCompositionPrimeObservationEntry> = t.recursion(
    "VaccinationCompositionPrimeObservationEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
* Möglicherweise noch ändern auf IHE IC
11450-4 R PROBLEM LIST
11348-0 R HISTORY OF PAST ILLNESS

MEDCCAT http://terminology.hl7.org/CodeSystem/v3-ActCode
*/
export interface VaccinationCompositionPrimeConditionCode {
    coding: Array<VaccinationCompositionPrimeConditionCodeCoding>;
    id?: string;
}

export const VaccinationCompositionPrimeConditionCode: t.Type<VaccinationCompositionPrimeConditionCode> = t.recursion(
    "VaccinationCompositionPrimeConditionCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationCompositionPrimeConditionCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface VaccinationCompositionPrimeConditionEntry {
    reference: string;
    id?: string;
}

export const VaccinationCompositionPrimeConditionEntry: t.Type<VaccinationCompositionPrimeConditionEntry> = t.recursion(
    "VaccinationCompositionPrimeConditionEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A nested sub-section within this section.
 */
export interface VaccinationCompositionPrimeConditionSection {
    entry: Array<VaccinationCompositionPrimeConditionSectionEntry>;
    id?: string;
}

export const VaccinationCompositionPrimeConditionSection: t.Type<VaccinationCompositionPrimeConditionSection> = t.recursion(
    "VaccinationCompositionPrimeConditionSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    entry: MinArray(1, VaccinationCompositionPrimeConditionSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationCompositionPrimeTypeCoding {
    system: "http://loinc.org";
    code: "11369-6";
    display: "HISTORY OF IMMUNIZATIONS";
    id?: string;
    version?: string;
}

export const VaccinationCompositionPrimeTypeCoding: t.Type<VaccinationCompositionPrimeTypeCoding> = t.recursion(
    "VaccinationCompositionPrimeTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    code: Literal("11369-6"),
                    display: Literal("HISTORY OF IMMUNIZATIONS")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface VaccinationCompositionPrimeRecordPrime {
    code: VaccinationCompositionPrimeRecordPrimeCode;
    entry: Array<VaccinationCompositionPrimeRecordPrimeEntry>;
    id?: string;
}

export const VaccinationCompositionPrimeRecordPrime: t.Type<VaccinationCompositionPrimeRecordPrime> = t.recursion(
    "VaccinationCompositionPrimeRecordPrime",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: VaccinationCompositionPrimeRecordPrimeCode,
                    entry: MinArray(1, VaccinationCompositionPrimeRecordPrimeEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface VaccinationCompositionPrimeObservation {
    code: VaccinationCompositionPrimeObservationCode;
    entry: Array<VaccinationCompositionPrimeObservationEntry>;
    id?: string;
}

export const VaccinationCompositionPrimeObservation: t.Type<VaccinationCompositionPrimeObservation> = t.recursion(
    "VaccinationCompositionPrimeObservation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: VaccinationCompositionPrimeObservationCode,
                    entry: MinArray(1, VaccinationCompositionPrimeObservationEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The root of the sections that make up the composition.
 */
export interface VaccinationCompositionPrimeCondition {
    code: VaccinationCompositionPrimeConditionCode;
    entry: Array<VaccinationCompositionPrimeConditionEntry>;
    id?: string;
    section?: Array<VaccinationCompositionPrimeConditionSection>;
}

export const VaccinationCompositionPrimeCondition: t.Type<VaccinationCompositionPrimeCondition> = t.recursion(
    "VaccinationCompositionPrimeCondition",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: VaccinationCompositionPrimeConditionCode,
                    entry: MinArray(1, VaccinationCompositionPrimeConditionEntry)
                }),
                t.partial({
                    id: SCALARString,
                    section: MaxArray(1, VaccinationCompositionPrimeConditionSection)
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationCompositionPrimeMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Prime|1.00.000"
    >;
    id?: string;
}

export const VaccinationCompositionPrimeMeta: t.Type<VaccinationCompositionPrimeMeta> = t.recursion(
    "VaccinationCompositionPrimeMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Prime|1.00.000"
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
 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
 */
export interface VaccinationCompositionPrimeText {
    status: "extensions";
    div: string;
    id?: string;
}

export const VaccinationCompositionPrimeText: t.Type<VaccinationCompositionPrimeText> = t.recursion(
    "VaccinationCompositionPrimeText",
    () =>
        Excess(
            t.intersection([
                t.type({
                    status: Literal("extensions"),
                    div: SCALARXhtml
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Code aus dem Profil IHE Immunization Content (IC) zur Beschreibung der History of Immunization
 */
export interface VaccinationCompositionPrimeType {
    coding: Array<VaccinationCompositionPrimeTypeCoding>;
    id?: string;
}

export const VaccinationCompositionPrimeType: t.Type<VaccinationCompositionPrimeType> = t.recursion(
    "VaccinationCompositionPrimeType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationCompositionPrimeTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
 */
export interface VaccinationCompositionPrimeSubject {
    reference: string;
    id?: string;
}

export const VaccinationCompositionPrimeSubject: t.Type<VaccinationCompositionPrimeSubject> = t.recursion(
    "VaccinationCompositionPrimeSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Die Person, die den Eintrag der Impfung erstellt hat. Sollte keine eintragende Person vorhanden sein, so kann die Nullflavor-Extension genutzt werden.
 */
export interface VaccinationCompositionPrimeAuthor {
    reference: string;
    id?: string;
}

export const VaccinationCompositionPrimeAuthor: t.Type<VaccinationCompositionPrimeAuthor> = t.recursion(
    "VaccinationCompositionPrimeAuthor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationCompositionPrime {
    id: string;
    meta: VaccinationCompositionPrimeMeta;
    status: "final";
    type: VaccinationCompositionPrimeType;
    subject: VaccinationCompositionPrimeSubject;
    date: string;
    author: Array<VaccinationCompositionPrimeAuthor>;
    title: string;
    section: Array<
        | VaccinationCompositionPrimeRecordPrime
        | VaccinationCompositionPrimeObservation
        | VaccinationCompositionPrimeCondition
    >;
    resourceType?: string;
    text?: VaccinationCompositionPrimeText;
}

const VaccinationCompositionPrime: t.Type<VaccinationCompositionPrime> = t.recursion(
    "VaccinationCompositionPrime",
    () =>
        Excess(
            t.intersection([
                t.type({
                    id: SCALARString,
                    meta: VaccinationCompositionPrimeMeta,
                    status: Literal("final"),
                    type: VaccinationCompositionPrimeType,
                    subject: VaccinationCompositionPrimeSubject,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 1, VaccinationCompositionPrimeAuthor),
                    title: SCALARString,
                    section: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationCompositionPrimeRecordPrime>,
                                t.Type<VaccinationCompositionPrimeObservation>,
                                t.Type<VaccinationCompositionPrimeCondition>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationCompositionPrimeRecordPrime,
                            VaccinationCompositionPrimeObservation,
                            VaccinationCompositionPrimeCondition
                        ]),
                        [
                            {
                                codec: VaccinationCompositionPrimeRecordPrime,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "IMMUNIZ" }
                            },
                            {
                                codec: VaccinationCompositionPrimeObservation,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "COBSCAT" }
                            },
                            {
                                codec: VaccinationCompositionPrimeCondition,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.coding.code", value: "11348-0" }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    resourceType: t.string,
                    text: VaccinationCompositionPrimeText
                })
            ])
        )
);

export default VaccinationCompositionPrime;
