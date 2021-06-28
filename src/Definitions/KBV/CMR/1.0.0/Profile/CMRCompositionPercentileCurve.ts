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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Percentile_Curve"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRCompositionPercentileCurveTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "129822005";
    display: "Childhood growth AND/OR development finding (finding)";
    id?: string;
}

export const CMRCompositionPercentileCurveTypeCoding: t.Type<CMRCompositionPercentileCurveTypeCoding> = t.recursion(
    "CMRCompositionPercentileCurveTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("129822005"),
                    display: Literal(
                        "Childhood growth AND/OR development finding (finding)"
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
export interface CMRCompositionPercentileCurveCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRCompositionPercentileCurveCategoryCoding: t.Type<CMRCompositionPercentileCurveCategoryCoding> = t.recursion(
    "CMRCompositionPercentileCurveCategoryCoding",
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
export interface CMRCompositionPercentileCurveSectionEntry {
    reference: string;
    id?: string;
}

export const CMRCompositionPercentileCurveSectionEntry: t.Type<CMRCompositionPercentileCurveSectionEntry> = t.recursion(
    "CMRCompositionPercentileCurveSectionEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Body_Measures|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
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
export interface CMRCompositionPercentileCurveMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Percentile_Curve|1.0.0"
    >;
    id?: string;
}

export const CMRCompositionPercentileCurveMeta: t.Type<CMRCompositionPercentileCurveMeta> = t.recursion(
    "CMRCompositionPercentileCurveMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Composition_Percentile_Curve|1.0.0"
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
export interface CMRCompositionPercentileCurveType {
    coding: Array<CMRCompositionPercentileCurveTypeCoding>;
    id?: string;
}

export const CMRCompositionPercentileCurveType: t.Type<CMRCompositionPercentileCurveType> = t.recursion(
    "CMRCompositionPercentileCurveType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionPercentileCurveTypeCoding)
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
export interface CMRCompositionPercentileCurveCategory {
    coding: Array<CMRCompositionPercentileCurveCategoryCoding>;
    id?: string;
}

export const CMRCompositionPercentileCurveCategory: t.Type<CMRCompositionPercentileCurveCategory> = t.recursion(
    "CMRCompositionPercentileCurveCategory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRCompositionPercentileCurveCategoryCoding)
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
export interface CMRCompositionPercentileCurveSubject {
    reference: string;
    id?: string;
}

export const CMRCompositionPercentileCurveSubject: t.Type<CMRCompositionPercentileCurveSubject> = t.recursion(
    "CMRCompositionPercentileCurveSubject",
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
export interface CMRCompositionPercentileCurveEncounter {
    reference: string;
    id?: string;
}

export const CMRCompositionPercentileCurveEncounter: t.Type<CMRCompositionPercentileCurveEncounter> = t.recursion(
    "CMRCompositionPercentileCurveEncounter",
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
export interface CMRCompositionPercentileCurveAuthor {
    reference: string;
    id?: string;
}

export const CMRCompositionPercentileCurveAuthor: t.Type<CMRCompositionPercentileCurveAuthor> = t.recursion(
    "CMRCompositionPercentileCurveAuthor",
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
export interface CMRCompositionPercentileCurveSection {
    title: "Körpermaße";
    entry: Array<CMRCompositionPercentileCurveSectionEntry>;
    id?: string;
}

export const CMRCompositionPercentileCurveSection: t.Type<CMRCompositionPercentileCurveSection> = t.recursion(
    "CMRCompositionPercentileCurveSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    title: Literal("Körpermaße"),
                    entry: MinMaxArray(2, 2, CMRCompositionPercentileCurveSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCompositionPercentileCurve {
    resourceType: "Composition";
    meta: CMRCompositionPercentileCurveMeta;
    status: "final";
    type: CMRCompositionPercentileCurveType;
    category: Array<CMRCompositionPercentileCurveCategory>;
    subject: CMRCompositionPercentileCurveSubject;
    encounter: CMRCompositionPercentileCurveEncounter;
    date: string;
    author: Array<CMRCompositionPercentileCurveAuthor>;
    title: "Perzentilkurven";
    section: Array<CMRCompositionPercentileCurveSection>;
    id?: string;
    text?: Narrative;
}

const CMRCompositionPercentileCurve: t.Type<CMRCompositionPercentileCurve> = t.recursion(
    "CMRCompositionPercentileCurve",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Composition"),
                    meta: CMRCompositionPercentileCurveMeta,
                    status: Literal("final"),
                    type: CMRCompositionPercentileCurveType,
                    category: MinMaxArray(1, 1, CMRCompositionPercentileCurveCategory),
                    subject: CMRCompositionPercentileCurveSubject,
                    encounter: CMRCompositionPercentileCurveEncounter,
                    date: SCALARDateTime,
                    author: MinMaxArray(1, 2, CMRCompositionPercentileCurveAuthor),
                    title: Literal("Perzentilkurven"),
                    section: MinMaxArray(1, 1, CMRCompositionPercentileCurveSection)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default CMRCompositionPercentileCurve;
