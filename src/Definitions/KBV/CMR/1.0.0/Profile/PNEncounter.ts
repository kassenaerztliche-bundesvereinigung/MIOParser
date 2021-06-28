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
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import PCPNExaminationNumberVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/PCPNExaminationNumber";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Encounter"

/**
 * Content in other Language.
 */
export interface PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent: t.Type<PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent> = t.recursion(
    "PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent",
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
export interface PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent)[];
}

export const PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed: t.Type<PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed> = t.recursion(
    "PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed",
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
                                    PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PNEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent,
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
export interface PNEncounterTypeCodingDisplay {
    id?: string;
    extension?: (Extension | PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed)[];
    value?: string;
}

export const PNEncounterTypeCodingDisplay: t.Type<PNEncounterTypeCodingDisplay> = t.recursion(
    "PNEncounterTypeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PNEncounterTypeCodingDisplayAnzeigenameTypeSnomed,
                            occurrence: ["1", "1"],
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
 * A reference to a code defined by a terminology system.
 */
export interface PNEncounterParticipantTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType";
    version: "2.0.0";
    code: "PPRF";
    display: "primary performer";
    id?: string;
}

export const PNEncounterParticipantTypeCoding: t.Type<PNEncounterParticipantTypeCoding> = t.recursion(
    "PNEncounterParticipantTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
                    ),
                    version: Literal("2.0.0"),
                    code: Literal("PPRF"),
                    display: Literal("primary performer")
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
export interface PNEncounterTypeCoding {
    system: string;
    version: string;
    code: PCPNExaminationNumberVS;
    id?: string;
    _display?: PNEncounterTypeCodingDisplay;
    display?: string;
}

export const PNEncounterTypeCoding: t.Type<PNEncounterTypeCoding> = t.recursion(
    "PNEncounterTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: PCPNExaminationNumberVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: PNEncounterTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Role of participant in encounter.
 */
export interface PNEncounterParticipantType {
    coding: Array<PNEncounterParticipantTypeCoding>;
    id?: string;
}

export const PNEncounterParticipantType: t.Type<PNEncounterParticipantType> = t.recursion(
    "PNEncounterParticipantType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PNEncounterParticipantTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Persons involved in the encounter other than the patient.
 */
export interface PNEncounterParticipantIndividual {
    reference: string;
    id?: string;
}

export const PNEncounterParticipantIndividual: t.Type<PNEncounterParticipantIndividual> = t.recursion(
    "PNEncounterParticipantIndividual",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
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
export interface PNEncounterMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Encounter|1.0.0"
    >;
    id?: string;
}

export const PNEncounterMeta: t.Type<PNEncounterMeta> = t.recursion(
    "PNEncounterMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Encounter|1.0.0"
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
 * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
 */
export interface PNEncounterClass {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    version: "2.0.0";
    code: "AMB";
    display: "ambulatory";
    id?: string;
}

export const PNEncounterClass: t.Type<PNEncounterClass> = t.recursion(
    "PNEncounterClass",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-ActCode"),
                    version: Literal("2.0.0"),
                    code: Literal("AMB"),
                    display: Literal("ambulatory")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
 */
export interface PNEncounterType {
    coding: Array<PNEncounterTypeCoding>;
    id?: string;
}

export const PNEncounterType: t.Type<PNEncounterType> = t.recursion(
    "PNEncounterType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PNEncounterTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient or group present at the encounter.
 */
export interface PNEncounterSubject {
    reference: string;
    id?: string;
}

export const PNEncounterSubject: t.Type<PNEncounterSubject> = t.recursion(
    "PNEncounterSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The list of people responsible for providing the service.
 */
export interface PNEncounterParticipant {
    type: Array<PNEncounterParticipantType>;
    individual: PNEncounterParticipantIndividual;
    id?: string;
}

export const PNEncounterParticipant: t.Type<PNEncounterParticipant> = t.recursion(
    "PNEncounterParticipant",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MinMaxArray(1, 1, PNEncounterParticipantType),
                    individual: PNEncounterParticipantIndividual
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The start and end time of the encounter.
 */
export interface PNEncounterPeriod {
    start: string;
    id?: string;
}

export const PNEncounterPeriod: t.Type<PNEncounterPeriod> = t.recursion(
    "PNEncounterPeriod",
    () =>
        Excess(
            t.intersection([
                t.type({
                    start: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface PNEncounter {
    resourceType: "Encounter";
    meta: PNEncounterMeta;
    status: "finished";
    class: PNEncounterClass;
    type: Array<PNEncounterType>;
    subject: PNEncounterSubject;
    participant: Array<PNEncounterParticipant>;
    period: PNEncounterPeriod;
    id?: string;
}

const PNEncounter: t.Type<PNEncounter> = t.recursion("PNEncounter", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Encounter"),
                meta: PNEncounterMeta,
                status: Literal("finished"),
                class: PNEncounterClass,
                type: MinMaxArray(1, 1, PNEncounterType),
                subject: PNEncounterSubject,
                participant: MinMaxArray(1, 1, PNEncounterParticipant),
                period: PNEncounterPeriod
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default PNEncounter;
