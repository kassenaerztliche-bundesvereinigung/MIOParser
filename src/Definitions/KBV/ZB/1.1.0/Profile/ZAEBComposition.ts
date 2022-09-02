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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition"

/**
 * A reference to a code defined by a terminology system.
 */
export interface ZAEBCompositionTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "371525003";
    display: "Clinical procedure report (record artifact)";
    id?: string;
    userSelected?: boolean;
}

export const ZAEBCompositionTypeCoding: t.Type<ZAEBCompositionTypeCoding> = t.recursion(
    "ZAEBCompositionTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("371525003"),
                    display: Literal("Clinical procedure report (record artifact)")
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to the actual resource from which the narrative in the section is derived.
 */
export interface ZAEBCompositionSectionEntryReference {
    reference: string;
    id?: string;
}

export const ZAEBCompositionSectionEntryReference: t.Type<ZAEBCompositionSectionEntryReference> =
    t.recursion("ZAEBCompositionSectionEntryReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Dental_Check_Up|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Gapless_Documentation|1.1.0"
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
export interface ZAEBCompositionMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition|1.1.0">;
    id?: string;
}

export const ZAEBCompositionMeta: t.Type<ZAEBCompositionMeta> = t.recursion(
    "ZAEBCompositionMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition|1.1.0"
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
export interface ZAEBCompositionType {
    coding: Array<ZAEBCompositionTypeCoding>;
    id?: string;
}

export const ZAEBCompositionType: t.Type<ZAEBCompositionType> = t.recursion(
    "ZAEBCompositionType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, ZAEBCompositionTypeCoding)
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
export interface ZAEBCompositionSubjectReference {
    reference: string;
    id?: string;
}

export const ZAEBCompositionSubjectReference: t.Type<ZAEBCompositionSubjectReference> =
    t.recursion("ZAEBCompositionSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.1.0"
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
export interface ZAEBCompositionAuthorReference {
    reference: string;
    id?: string;
}

export const ZAEBCompositionAuthorReference: t.Type<ZAEBCompositionAuthorReference> =
    t.recursion("ZAEBCompositionAuthorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Organization|1.1.0"
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
export interface ZAEBCompositionSection {
    entry: Array<ZAEBCompositionSectionEntryReference>;
    id?: string;
}

export const ZAEBCompositionSection: t.Type<ZAEBCompositionSection> = t.recursion(
    "ZAEBCompositionSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    entry: MinMaxArray(1, 2, ZAEBCompositionSectionEntryReference)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface ZAEBComposition {
    resourceType: "Composition";
    meta: ZAEBCompositionMeta;
    status: "final";
    type: ZAEBCompositionType;
    subject: ZAEBCompositionSubjectReference;
    date: string;
    author: Array<ZAEBCompositionAuthorReference>;
    title: "Bonushefteintrag";
    section: Array<ZAEBCompositionSection>;
    id?: string;
    text?: Narrative;
}

const ZAEBComposition: t.Type<ZAEBComposition> = t.recursion("ZAEBComposition", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Composition"),
                meta: ZAEBCompositionMeta,
                status: Literal("final"),
                type: ZAEBCompositionType,
                subject: ZAEBCompositionSubjectReference,
                date: SCALARDateTime,
                author: MinMaxArray(1, 1, ZAEBCompositionAuthorReference),
                title: Literal("Bonushefteintrag"),
                section: MinMaxArray(1, 1, ZAEBCompositionSection)
            }),
            t.partial({
                id: SCALARString,
                text: Narrative
            })
        ])
    )
);

export default ZAEBComposition;
