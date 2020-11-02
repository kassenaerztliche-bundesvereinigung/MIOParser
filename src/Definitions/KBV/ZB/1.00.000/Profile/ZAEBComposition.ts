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
import CompositionstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Compositionstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition"

/**
 * A reference to a code defined by a terminology system.
 */
export interface ZAEBCompositionTypeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200309";
    code: "371525003";
    display: "Clinical procedure report (record artifact)";
    id?: string;
}

export const ZAEBCompositionTypeSnomed: t.Type<ZAEBCompositionTypeSnomed> = t.recursion(
    "ZAEBCompositionTypeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200309"
                    ),
                    code: Literal("371525003"),
                    display: Literal("Clinical procedure report (record artifact)")
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
export interface ZAEBCompositionTypeLoinc {
    system: "http://loinc.org";
    code: "28618-7";
    display: "Dentistry Note";
    id?: string;
    version?: string;
}

export const ZAEBCompositionTypeLoinc: t.Type<ZAEBCompositionTypeLoinc> = t.recursion(
    "ZAEBCompositionTypeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    code: Literal("28618-7"),
                    display: Literal("Dentistry Note")
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
export interface ZAEBCompositionSectionEntry {
    reference: string;
    id?: string;
}

export const ZAEBCompositionSectionEntry: t.Type<ZAEBCompositionSectionEntry> = t.recursion(
    "ZAEBCompositionSectionEntry",
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface ZAEBCompositionMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition|1.00.000"
    >;
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
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition|1.00.000"
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
    coding: Array<ZAEBCompositionTypeSnomed | ZAEBCompositionTypeLoinc>;
    id?: string;
}

export const ZAEBCompositionType: t.Type<ZAEBCompositionType> = t.recursion(
    "ZAEBCompositionType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<ZAEBCompositionTypeSnomed>,
                                t.Type<ZAEBCompositionTypeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([ZAEBCompositionTypeSnomed, ZAEBCompositionTypeLoinc]),
                        [
                            {
                                codec: ZAEBCompositionTypeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: ZAEBCompositionTypeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
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
export interface ZAEBCompositionSubject {
    reference: string;
    id?: string;
}

export const ZAEBCompositionSubject: t.Type<ZAEBCompositionSubject> = t.recursion(
    "ZAEBCompositionSubject",
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
 * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
 */
export interface ZAEBCompositionAuthor {
    reference: string;
    id?: string;
}

export const ZAEBCompositionAuthor: t.Type<ZAEBCompositionAuthor> = t.recursion(
    "ZAEBCompositionAuthor",
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
 * The root of the sections that make up the composition.
 */
export interface ZAEBCompositionSection {
    entry: Array<ZAEBCompositionSectionEntry>;
    id?: string;
}

export const ZAEBCompositionSection: t.Type<ZAEBCompositionSection> = t.recursion(
    "ZAEBCompositionSection",
    () =>
        Excess(
            t.intersection([
                t.type({
                    entry: MinMaxArray(1, 2, ZAEBCompositionSectionEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface ZAEBComposition {
    meta: ZAEBCompositionMeta;
    status: "final";
    type: ZAEBCompositionType;
    subject: ZAEBCompositionSubject;
    date: string;
    author: Array<ZAEBCompositionAuthor>;
    title: "Bonushefteintrag";
    section: Array<ZAEBCompositionSection>;
    resourceType?: string;
    id?: string;
}

const ZAEBComposition: t.Type<ZAEBComposition> = t.recursion("ZAEBComposition", () =>
    Excess(
        t.intersection([
            t.type({
                meta: ZAEBCompositionMeta,
                status: Literal("final"),
                type: ZAEBCompositionType,
                subject: ZAEBCompositionSubject,
                date: SCALARDateTime,
                author: MinMaxArray(1, 1, ZAEBCompositionAuthor),
                title: Literal("Bonushefteintrag"),
                section: MinMaxArray(1, 1, ZAEBCompositionSection)
            }),
            t.partial({
                resourceType: t.string,
                id: SCALARString
            })
        ])
    )
);

export default ZAEBComposition;
