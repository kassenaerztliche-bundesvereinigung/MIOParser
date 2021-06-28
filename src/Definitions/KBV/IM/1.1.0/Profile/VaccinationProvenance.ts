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
    MinArray,
    MinMaxArray,
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import VaccinationSourceofInformationVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationSourceofInformation";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance"

/**
 * Content in other Language.
 */
export interface VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed: t.Type<VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed",
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
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationProvenanceAgentRoleCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationProvenanceAgentRoleCodingDisplay: t.Type<VaccinationProvenanceAgentRoleCodingDisplay> = t.recursion(
    "VaccinationProvenanceAgentRoleCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["0", "*"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
);

/**
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface VaccinationProvenanceAgentWhoDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const VaccinationProvenanceAgentWhoDataabsentreason: t.Type<VaccinationProvenanceAgentWhoDataabsentreason> = t.recursion(
    "VaccinationProvenanceAgentWhoDataabsentreason",
    () =>
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
export interface VaccinationProvenanceAgentRoleCoding {
    system: string;
    code: VaccinationSourceofInformationVS;
    id?: string;
    version?: string;
    _display?: VaccinationProvenanceAgentRoleCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationProvenanceAgentRoleCoding: t.Type<VaccinationProvenanceAgentRoleCoding> = t.recursion(
    "VaccinationProvenanceAgentRoleCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    code: VaccinationSourceofInformationVS
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    _display: VaccinationProvenanceAgentRoleCodingDisplay,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Quelle der Information
 */
export interface VaccinationProvenanceAgentRole {
    coding: Array<VaccinationProvenanceAgentRoleCoding>;
    id?: string;
}

export const VaccinationProvenanceAgentRole: t.Type<VaccinationProvenanceAgentRole> = t.recursion(
    "VaccinationProvenanceAgentRole",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, VaccinationProvenanceAgentRoleCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The individual, device or organization that participated in the event.
 */
export interface VaccinationProvenanceAgentWho {
    display: "unknown";
    id?: string;
    extension?: (Extension | VaccinationProvenanceAgentWhoDataabsentreason)[];
}

export const VaccinationProvenanceAgentWho: t.Type<VaccinationProvenanceAgentWho> = t.recursion(
    "VaccinationProvenanceAgentWho",
    () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("unknown")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationProvenanceAgentWhoDataabsentreason>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationProvenanceAgentWhoDataabsentreason
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationProvenanceAgentWhoDataabsentreason,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationProvenanceMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance|1.1.0"
    >;
    id?: string;
}

export const VaccinationProvenanceMeta: t.Type<VaccinationProvenanceMeta> = t.recursion(
    "VaccinationProvenanceMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance|1.1.0"
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
 * The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
 */
export interface VaccinationProvenanceTarget {
    reference: string;
    id?: string;
}

export const VaccinationProvenanceTarget: t.Type<VaccinationProvenanceTarget> = t.recursion(
    "VaccinationProvenanceTarget",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Condition|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place.
 */
export interface VaccinationProvenanceAgent {
    role: Array<VaccinationProvenanceAgentRole>;
    who: VaccinationProvenanceAgentWho;
    id?: string;
}

export const VaccinationProvenanceAgent: t.Type<VaccinationProvenanceAgent> = t.recursion(
    "VaccinationProvenanceAgent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    role: MinMaxArray(1, 1, VaccinationProvenanceAgentRole),
                    who: VaccinationProvenanceAgentWho
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationProvenance {
    resourceType: "Provenance";
    meta: VaccinationProvenanceMeta;
    target: Array<VaccinationProvenanceTarget>;
    recorded: string;
    agent: Array<VaccinationProvenanceAgent>;
    id?: string;
    text?: Narrative;
}

const VaccinationProvenance: t.Type<VaccinationProvenance> = t.recursion(
    "VaccinationProvenance",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Provenance"),
                    meta: VaccinationProvenanceMeta,
                    target: MinArray(1, VaccinationProvenanceTarget),
                    recorded: SCALARInstant,
                    agent: MinMaxArray(1, 1, VaccinationProvenanceAgent)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default VaccinationProvenance;
