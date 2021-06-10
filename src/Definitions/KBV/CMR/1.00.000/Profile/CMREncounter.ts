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
import CMRExaminationNumberVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRExaminationNumber";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter"

/**
 * Content in other Language.
 */
export interface CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent: t.Type<CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent> = t.recursion(
    "CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent",
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
export interface CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent)[];
}

export const CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed: t.Type<CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed> = t.recursion(
    "CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed",
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
                                    CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMREncounterTypeCodingDisplayAnzeigenameTypeSnomedContent,
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
export interface CMREncounterTypeCodingDisplay {
    id?: string;
    extension?: (Extension | CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed)[];
    value?: string;
}

export const CMREncounterTypeCodingDisplay: t.Type<CMREncounterTypeCodingDisplay> = t.recursion(
    "CMREncounterTypeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMREncounterTypeCodingDisplayAnzeigenameTypeSnomed,
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
export interface CMREncounterParticipantTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType";
    version: "2.0.0";
    code: "PPRF";
    display: "primary performer";
    id?: string;
}

export const CMREncounterParticipantTypeCoding: t.Type<CMREncounterParticipantTypeCoding> = t.recursion(
    "CMREncounterParticipantTypeCoding",
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
export interface CMREncounterTypeCoding {
    system: string;
    version: string;
    code: CMRExaminationNumberVS;
    id?: string;
    _display?: CMREncounterTypeCodingDisplay;
    display?: string;
}

export const CMREncounterTypeCoding: t.Type<CMREncounterTypeCoding> = t.recursion(
    "CMREncounterTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRExaminationNumberVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMREncounterTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Role of participant in encounter.
 */
export interface CMREncounterParticipantType {
    coding: Array<CMREncounterParticipantTypeCoding>;
    id?: string;
}

export const CMREncounterParticipantType: t.Type<CMREncounterParticipantType> = t.recursion(
    "CMREncounterParticipantType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMREncounterParticipantTypeCoding)
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
export interface CMREncounterParticipantIndividual {
    reference: string;
    id?: string;
}

export const CMREncounterParticipantIndividual: t.Type<CMREncounterParticipantIndividual> = t.recursion(
    "CMREncounterParticipantIndividual",
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
export interface CMREncounterMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
    >;
    id?: string;
}

export const CMREncounterMeta: t.Type<CMREncounterMeta> = t.recursion(
    "CMREncounterMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMREncounterClass {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    version: "2.0.0";
    code: "AMB";
    display: "ambulatory";
    id?: string;
}

export const CMREncounterClass: t.Type<CMREncounterClass> = t.recursion(
    "CMREncounterClass",
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
export interface CMREncounterType {
    coding: Array<CMREncounterTypeCoding>;
    id?: string;
}

export const CMREncounterType: t.Type<CMREncounterType> = t.recursion(
    "CMREncounterType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMREncounterTypeCoding)
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
export interface CMREncounterSubject {
    reference: string;
    id?: string;
}

export const CMREncounterSubject: t.Type<CMREncounterSubject> = t.recursion(
    "CMREncounterSubject",
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
 * The list of people responsible for providing the service.
 */
export interface CMREncounterParticipant {
    type: Array<CMREncounterParticipantType>;
    individual: CMREncounterParticipantIndividual;
    id?: string;
}

export const CMREncounterParticipant: t.Type<CMREncounterParticipant> = t.recursion(
    "CMREncounterParticipant",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: MinMaxArray(1, 1, CMREncounterParticipantType),
                    individual: CMREncounterParticipantIndividual
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
export interface CMREncounterPeriod {
    start: string;
    id?: string;
}

export const CMREncounterPeriod: t.Type<CMREncounterPeriod> = t.recursion(
    "CMREncounterPeriod",
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
export interface CMREncounterServiceProvider {
    reference: string;
    id?: string;
}

export const CMREncounterServiceProvider: t.Type<CMREncounterServiceProvider> = t.recursion(
    "CMREncounterServiceProvider",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMREncounter {
    resourceType: "Encounter";
    meta: CMREncounterMeta;
    status: "finished";
    class: CMREncounterClass;
    type: Array<CMREncounterType>;
    subject: CMREncounterSubject;
    participant: Array<CMREncounterParticipant>;
    period: CMREncounterPeriod;
    id?: string;
    serviceProvider?: CMREncounterServiceProvider;
}

const CMREncounter: t.Type<CMREncounter> = t.recursion("CMREncounter", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Encounter"),
                meta: CMREncounterMeta,
                status: Literal("finished"),
                class: CMREncounterClass,
                type: MinMaxArray(1, 1, CMREncounterType),
                subject: CMREncounterSubject,
                participant: MinMaxArray(1, 1, CMREncounterParticipant),
                period: CMREncounterPeriod
            }),
            t.partial({
                id: SCALARString,
                serviceProvider: CMREncounterServiceProvider
            })
        ])
    )
);

export default CMREncounter;
