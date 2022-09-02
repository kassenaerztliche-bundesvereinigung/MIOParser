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
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARId from "../../../../../Definitions/FHIR/4.0.1/Scalar/Id";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Composition_DPE"

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface DPECompositionDPEAuthorReferenceDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const DPECompositionDPEAuthorReferenceDataabsentreason: t.Type<DPECompositionDPEAuthorReferenceDataabsentreason> =
    t.recursion("DPECompositionDPEAuthorReferenceDataabsentreason", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                    ),
                    valueCode: Literal("unknown")
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
export interface DPECompositionDPESectionCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "371538006";
    display: "Advance directive report (record artifact)";
    id?: string;
}

export const DPECompositionDPESectionCodeCoding: t.Type<DPECompositionDPESectionCodeCoding> =
    t.recursion("DPECompositionDPESectionCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("371538006"),
                    display: Literal("Advance directive report (record artifact)")
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
export interface DPECompositionDPETypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "408403008";
    display: "Patient held record (record artifact)";
    id?: string;
}

export const DPECompositionDPETypeCoding: t.Type<DPECompositionDPETypeCoding> =
    t.recursion("DPECompositionDPETypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("408403008"),
                    display: Literal("Patient held record (record artifact)")
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
export interface DPECompositionDPESectionCode {
    coding: Array<DPECompositionDPESectionCodeCoding>;
    id?: string;
}

export const DPECompositionDPESectionCode: t.Type<DPECompositionDPESectionCode> =
    t.recursion("DPECompositionDPESectionCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, DPECompositionDPESectionCodeCoding)
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
export interface DPECompositionDPESectionEntryReference {
    reference: string;
    id?: string;
}

export const DPECompositionDPESectionEntryReference: t.Type<DPECompositionDPESectionEntryReference> =
    t.recursion("DPECompositionDPESectionEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Consent_Personal_Consent|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Consent_Active_Advance_Directive|1.0.0"
                    ])
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
export interface DPECompositionDPEMeta {
    versionId: string;
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Composition_DPE|1.0.0">;
    id?: string;
}

export const DPECompositionDPEMeta: t.Type<DPECompositionDPEMeta> = t.recursion(
    "DPECompositionDPEMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    versionId: SCALARId,
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Composition_DPE|1.0.0"
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
 * Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
 */
export interface DPECompositionDPEType {
    coding: Array<DPECompositionDPETypeCoding>;
    id?: string;
}

export const DPECompositionDPEType: t.Type<DPECompositionDPEType> = t.recursion(
    "DPECompositionDPEType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, DPECompositionDPETypeCoding)
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
export interface DPECompositionDPESubjectReference {
    reference: string;
    id?: string;
}

export const DPECompositionDPESubjectReference: t.Type<DPECompositionDPESubjectReference> =
    t.recursion("DPECompositionDPESubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface DPECompositionDPEAuthorReference {
    id?: string;
    extension?: DPECompositionDPEAuthorReferenceDataabsentreason[];
}

export const DPECompositionDPEAuthorReference: t.Type<DPECompositionDPEAuthorReference> =
    t.recursion("DPECompositionDPEAuthorReference", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(DPECompositionDPEAuthorReferenceDataabsentreason)
            })
        )
    );

/**
 * The root of the sections that make up the composition.
 */
export interface DPECompositionDPESection {
    title: "Persönliche Erklärungen";
    code: DPECompositionDPESectionCode;
    entry: Array<DPECompositionDPESectionEntryReference>;
    id?: string;
}

export const DPECompositionDPESection: t.Type<DPECompositionDPESection> = t.recursion(
    "DPECompositionDPESection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Persönliche Erklärungen"),
                    code: DPECompositionDPESectionCode,
                    entry: MinMaxArray(2, 2, DPECompositionDPESectionEntryReference)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface DPECompositionDPE {
    resourceType: "Composition";
    meta: DPECompositionDPEMeta;
    status: "final";
    type: DPECompositionDPEType;
    subject: DPECompositionDPESubjectReference;
    date: string;
    author: Array<DPECompositionDPEAuthorReference>;
    title: "DPE";
    section: Array<DPECompositionDPESection>;
    id?: string;
}

const DPECompositionDPE: t.Type<DPECompositionDPE> = t.recursion(
    "DPECompositionDPE",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: DPECompositionDPEMeta,
                    status: Literal("final"),
                    type: DPECompositionDPEType,
                    subject: DPECompositionDPESubjectReference,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 1, DPECompositionDPEAuthorReference),
                    title: Literal("DPE"),
                    section: MinMaxArray(1, 1, DPECompositionDPESection)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default DPECompositionDPE;
