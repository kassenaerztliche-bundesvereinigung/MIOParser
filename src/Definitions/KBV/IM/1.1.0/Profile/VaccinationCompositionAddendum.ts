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
    MinArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARXhtml from "../../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Addendum"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationCompositionAddendumRecordAddendumCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "713404003";
    display: "Vaccination given (situation)";
    id?: string;
}

export const VaccinationCompositionAddendumRecordAddendumCodeCoding: t.Type<VaccinationCompositionAddendumRecordAddendumCodeCoding> =
    t.recursion("VaccinationCompositionAddendumRecordAddendumCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("713404003"),
                    display: Literal("Vaccination given (situation)")
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
export interface VaccinationCompositionAddendumRecordAddendumCode {
    coding: Array<VaccinationCompositionAddendumRecordAddendumCodeCoding>;
    id?: string;
}

export const VaccinationCompositionAddendumRecordAddendumCode: t.Type<VaccinationCompositionAddendumRecordAddendumCode> =
    t.recursion("VaccinationCompositionAddendumRecordAddendumCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationCompositionAddendumRecordAddendumCodeCoding
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
export interface VaccinationCompositionAddendumRecordAddendumEntryReference {
    reference: string;
    id?: string;
}

export const VaccinationCompositionAddendumRecordAddendumEntryReference: t.Type<VaccinationCompositionAddendumRecordAddendumEntryReference> =
    t.recursion("VaccinationCompositionAddendumRecordAddendumEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum|1.1.0"
                    ])
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
export interface VaccinationCompositionAddendumTypeCoding {
    system: "http://loinc.org";
    code: "11369-6";
    display: "History of Immunization Narrative";
    id?: string;
    version?: string;
}

export const VaccinationCompositionAddendumTypeCoding: t.Type<VaccinationCompositionAddendumTypeCoding> =
    t.recursion("VaccinationCompositionAddendumTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    code: Literal("11369-6"),
                    display: Literal("History of Immunization Narrative")
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
export interface VaccinationCompositionAddendumRecordAddendum {
    code: VaccinationCompositionAddendumRecordAddendumCode;
    entry: Array<VaccinationCompositionAddendumRecordAddendumEntryReference>;
    id?: string;
}

export const VaccinationCompositionAddendumRecordAddendum: t.Type<VaccinationCompositionAddendumRecordAddendum> =
    t.recursion("VaccinationCompositionAddendumRecordAddendum", () =>
        Excess(
            t.intersection([
                t.type({
                    code: VaccinationCompositionAddendumRecordAddendumCode,
                    entry: MinArray(
                        1,
                        VaccinationCompositionAddendumRecordAddendumEntryReference
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
export interface VaccinationCompositionAddendumMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Addendum|1.1.0">;
    id?: string;
}

export const VaccinationCompositionAddendumMeta: t.Type<VaccinationCompositionAddendumMeta> =
    t.recursion("VaccinationCompositionAddendumMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Addendum|1.1.0"
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
export interface VaccinationCompositionAddendumText {
    status: "extensions";
    div: string;
    id?: string;
}

export const VaccinationCompositionAddendumText: t.Type<VaccinationCompositionAddendumText> =
    t.recursion("VaccinationCompositionAddendumText", () =>
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
export interface VaccinationCompositionAddendumType {
    coding: Array<VaccinationCompositionAddendumTypeCoding>;
    id?: string;
}

export const VaccinationCompositionAddendumType: t.Type<VaccinationCompositionAddendumType> =
    t.recursion("VaccinationCompositionAddendumType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationCompositionAddendumTypeCoding)
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
export interface VaccinationCompositionAddendumSubjectReference {
    reference: string;
    id?: string;
}

export const VaccinationCompositionAddendumSubjectReference: t.Type<VaccinationCompositionAddendumSubjectReference> =
    t.recursion("VaccinationCompositionAddendumSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Die Person, die den Eintrag der Impfung erstellt hat.
 */
export interface VaccinationCompositionAddendumAuthorReference {
    reference: string;
    id?: string;
}

export const VaccinationCompositionAddendumAuthorReference: t.Type<VaccinationCompositionAddendumAuthorReference> =
    t.recursion("VaccinationCompositionAddendumAuthorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface VaccinationCompositionAddendum {
    resourceType: "Composition";
    meta: VaccinationCompositionAddendumMeta;
    status: "final";
    type: VaccinationCompositionAddendumType;
    subject: VaccinationCompositionAddendumSubjectReference;
    date: string;
    author: Array<VaccinationCompositionAddendumAuthorReference>;
    title: string;
    section: Array<VaccinationCompositionAddendumRecordAddendum>;
    id?: string;
    text?: VaccinationCompositionAddendumText;
}

const VaccinationCompositionAddendum: t.Type<VaccinationCompositionAddendum> =
    t.recursion("VaccinationCompositionAddendum", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: VaccinationCompositionAddendumMeta,
                    status: Literal("final"),
                    type: VaccinationCompositionAddendumType,
                    subject: VaccinationCompositionAddendumSubjectReference,
                    date: SCALARDateTime,
                    author: MinMaxArray(
                        1,
                        1,
                        VaccinationCompositionAddendumAuthorReference
                    ),
                    title: SCALARString,
                    section: MinMaxArray(
                        1,
                        1,
                        VaccinationCompositionAddendumRecordAddendum
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: VaccinationCompositionAddendumText
                })
            ])
        )
    );

export default VaccinationCompositionAddendum;
