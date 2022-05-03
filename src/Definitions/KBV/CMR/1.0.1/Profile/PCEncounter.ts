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
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import PCPNExaminationNumberVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/PCPNExaminationNumber";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Encounter"

/**
 * Content in other Language.
 */
export interface PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent: t.Type<PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent> =
    t.recursion("PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent", () =>
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
export interface PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent)[];
}

export const PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed: t.Type<PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed> =
    t.recursion("PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed", () =>
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
                                t.Type<PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PCEncounterTypeCodingDisplayAnzeigenameTypeSnomedContent,
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
export interface PCEncounterTypeCodingDisplay {
    id?: string;
    extension?: (Extension | PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed)[];
    value?: string;
}

export const PCEncounterTypeCodingDisplay: t.Type<PCEncounterTypeCodingDisplay> =
    t.recursion("PCEncounterTypeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCEncounterTypeCodingDisplayAnzeigenameTypeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface PCEncounterParticipantTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType";
    version: "2.0.0";
    code: "PPRF";
    display: "primary performer";
    id?: string;
}

export const PCEncounterParticipantTypeCoding: t.Type<PCEncounterParticipantTypeCoding> =
    t.recursion("PCEncounterParticipantTypeCoding", () =>
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
export interface PCEncounterTypeCoding {
    system: string;
    version: string;
    code: PCPNExaminationNumberVS;
    id?: string;
    _display?: PCEncounterTypeCodingDisplay;
    display?: string;
}

export const PCEncounterTypeCoding: t.Type<PCEncounterTypeCoding> = t.recursion(
    "PCEncounterTypeCoding",
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
                    _display: PCEncounterTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Role of participant in encounter.
 */
export interface PCEncounterParticipantType {
    coding: Array<PCEncounterParticipantTypeCoding>;
    id?: string;
}

export const PCEncounterParticipantType: t.Type<PCEncounterParticipantType> = t.recursion(
    "PCEncounterParticipantType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PCEncounterParticipantTypeCoding)
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
export interface PCEncounterParticipantIndividual {
    reference: string;
    id?: string;
}

export const PCEncounterParticipantIndividual: t.Type<PCEncounterParticipantIndividual> =
    t.recursion("PCEncounterParticipantIndividual", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
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
export interface PCEncounterMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Encounter|1.0.1">;
    id?: string;
}

export const PCEncounterMeta: t.Type<PCEncounterMeta> = t.recursion(
    "PCEncounterMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Encounter|1.0.1"
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
export interface PCEncounterClass {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    version: "2.0.0";
    code: "AMB";
    display: "ambulatory";
    id?: string;
}

export const PCEncounterClass: t.Type<PCEncounterClass> = t.recursion(
    "PCEncounterClass",
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
export interface PCEncounterType {
    coding: Array<PCEncounterTypeCoding>;
    id?: string;
}

export const PCEncounterType: t.Type<PCEncounterType> = t.recursion(
    "PCEncounterType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, PCEncounterTypeCoding)
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
export interface PCEncounterSubject {
    reference: string;
    id?: string;
}

export const PCEncounterSubject: t.Type<PCEncounterSubject> = t.recursion(
    "PCEncounterSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
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
export interface PCEncounterParticipant {
    type: Array<PCEncounterParticipantType>;
    individual: PCEncounterParticipantIndividual;
    id?: string;
}

export const PCEncounterParticipant: t.Type<PCEncounterParticipant> = t.recursion(
    "PCEncounterParticipant",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MinMaxArray(1, 1, PCEncounterParticipantType),
                    individual: PCEncounterParticipantIndividual
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
export interface PCEncounterPeriod {
    start: string;
    id?: string;
}

export const PCEncounterPeriod: t.Type<PCEncounterPeriod> = t.recursion(
    "PCEncounterPeriod",
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

/**
 * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
 */
export interface PCEncounterServiceProvider {
    reference: string;
    id?: string;
}

export const PCEncounterServiceProvider: t.Type<PCEncounterServiceProvider> = t.recursion(
    "PCEncounterServiceProvider",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface PCEncounter {
    resourceType: "Encounter";
    meta: PCEncounterMeta;
    status: "finished";
    class: PCEncounterClass;
    type: Array<PCEncounterType>;
    subject: PCEncounterSubject;
    participant: Array<PCEncounterParticipant>;
    period: PCEncounterPeriod;
    id?: string;
    serviceProvider?: PCEncounterServiceProvider;
}

const PCEncounter: t.Type<PCEncounter> = t.recursion("PCEncounter", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Encounter"),
                meta: PCEncounterMeta,
                status: Literal("finished"),
                class: PCEncounterClass,
                type: MinMaxArray(1, 1, PCEncounterType),
                subject: PCEncounterSubject,
                participant: MinMaxArray(1, 1, PCEncounterParticipant),
                period: PCEncounterPeriod
            }),
            t.partial({
                id: SCALARString,
                serviceProvider: PCEncounterServiceProvider
            })
        ])
    )
);

export default PCEncounter;
