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
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Extended_Newborn_Screening"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionExtendedNewbornScreeningTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "738796001:363702006=428447008";
    display: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)";
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningTypeCoding: t.Type<CMRCompositionExtendedNewbornScreeningTypeCoding> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("738796001:363702006=428447008"),
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)"
                    )
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
export interface CMRCompositionExtendedNewbornScreeningCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningCategoryCoding: t.Type<CMRCompositionExtendedNewbornScreeningCategoryCoding> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningCategoryCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("243788004"),
                    display: Literal("Child examination (procedure)")
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
export interface CMRCompositionExtendedNewbornScreeningSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningSectionEntry: t.Type<CMRCompositionExtendedNewbornScreeningSectionEntry> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningSectionEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_U1_U3_Newborn_Blood_Spot_Screening|1.0.0"
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
export interface CMRCompositionExtendedNewbornScreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Extended_Newborn_Screening|1.0.0"
    >;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningMeta: t.Type<CMRCompositionExtendedNewbornScreeningMeta> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Extended_Newborn_Screening|1.0.0"
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
export interface CMRCompositionExtendedNewbornScreeningType {
    coding: Array<CMRCompositionExtendedNewbornScreeningTypeCoding>;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningType: t.Type<CMRCompositionExtendedNewbornScreeningType> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionExtendedNewbornScreeningTypeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
 */
export interface CMRCompositionExtendedNewbornScreeningCategory {
    coding: Array<CMRCompositionExtendedNewbornScreeningCategoryCoding>;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningCategory: t.Type<CMRCompositionExtendedNewbornScreeningCategory> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningCategory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCompositionExtendedNewbornScreeningCategoryCoding
                    )
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
export interface CMRCompositionExtendedNewbornScreeningSubject {
    reference: string;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningSubject: t.Type<CMRCompositionExtendedNewbornScreeningSubject> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Describes the clinical encounter or type of care this documentation is associated with.
 */
export interface CMRCompositionExtendedNewbornScreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningEncounter: t.Type<CMRCompositionExtendedNewbornScreeningEncounter> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMRCompositionExtendedNewbornScreeningAuthor {
    reference: string;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningAuthor: t.Type<CMRCompositionExtendedNewbornScreeningAuthor> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningAuthor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.0"
                    ])
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
export interface CMRCompositionExtendedNewbornScreeningSection {
    title: "Erweitertes Neugeborenen-Screening";
    entry: Array<CMRCompositionExtendedNewbornScreeningSectionEntry>;
    id?: string;
}

export const CMRCompositionExtendedNewbornScreeningSection: t.Type<CMRCompositionExtendedNewbornScreeningSection> = t.recursion(
    "CMRCompositionExtendedNewbornScreeningSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Erweitertes Neugeborenen-Screening"),
                    entry: MinMaxArray(
                        1,
                        1,
                        CMRCompositionExtendedNewbornScreeningSectionEntry
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCompositionExtendedNewbornScreening {
    resourceType: "Composition";
    meta: CMRCompositionExtendedNewbornScreeningMeta;
    status: "final";
    type: CMRCompositionExtendedNewbornScreeningType;
    category: Array<CMRCompositionExtendedNewbornScreeningCategory>;
    subject: CMRCompositionExtendedNewbornScreeningSubject;
    encounter: CMRCompositionExtendedNewbornScreeningEncounter;
    date: string;
    author: Array<CMRCompositionExtendedNewbornScreeningAuthor>;
    title: "Erweitertes Neugeborenen-Screening";
    section: Array<CMRCompositionExtendedNewbornScreeningSection>;
    id?: string;
    text?: Narrative;
}

const CMRCompositionExtendedNewbornScreening: t.Type<CMRCompositionExtendedNewbornScreening> = t.recursion(
    "CMRCompositionExtendedNewbornScreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionExtendedNewbornScreeningMeta,
                    status: Literal("final"),
                    type: CMRCompositionExtendedNewbornScreeningType,
                    category: MinMaxArray(
                        1,
                        1,
                        CMRCompositionExtendedNewbornScreeningCategory
                    ),
                    subject: CMRCompositionExtendedNewbornScreeningSubject,
                    encounter: CMRCompositionExtendedNewbornScreeningEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(
                        1,
                        2,
                        CMRCompositionExtendedNewbornScreeningAuthor
                    ),
                    title: Literal("Erweitertes Neugeborenen-Screening"),
                    section: MinMaxArray(
                        1,
                        1,
                        CMRCompositionExtendedNewbornScreeningSection
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default CMRCompositionExtendedNewbornScreening;
