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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Participation_Period"

/**
 * Content in other Language.
 */
export interface CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent: t.Type<CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent> =
    t.recursion(
        "CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent",
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
export interface CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent
    )[];
}

export const CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed: t.Type<CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed> =
    t.recursion(
        "CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed",
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
                                    t.Type<CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent,
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
export interface CMRAppointmentParticipationPeriodServiceTypeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed
    )[];
    value?: string;
}

export const CMRAppointmentParticipationPeriodServiceTypeCodingDisplay: t.Type<CMRAppointmentParticipationPeriodServiceTypeCodingDisplay> =
    t.recursion("CMRAppointmentParticipationPeriodServiceTypeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRAppointmentParticipationPeriodServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed,
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
export interface CMRAppointmentParticipationPeriodServiceCategoryCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "243788004";
    display: "Child examination (procedure)";
    id?: string;
}

export const CMRAppointmentParticipationPeriodServiceCategoryCoding: t.Type<CMRAppointmentParticipationPeriodServiceCategoryCoding> =
    t.recursion("CMRAppointmentParticipationPeriodServiceCategoryCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
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
 * A reference to a code defined by a terminology system.
 */
export interface CMRAppointmentParticipationPeriodServiceTypeCoding {
    system: string;
    version: string;
    code: PCPNExaminationNumberVS;
    id?: string;
    _display?: CMRAppointmentParticipationPeriodServiceTypeCodingDisplay;
    display?: string;
}

export const CMRAppointmentParticipationPeriodServiceTypeCoding: t.Type<CMRAppointmentParticipationPeriodServiceTypeCoding> =
    t.recursion("CMRAppointmentParticipationPeriodServiceTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: PCPNExaminationNumberVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRAppointmentParticipationPeriodServiceTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A Person, Location/HealthcareService or Device that is participating in the appointment.
 */
export interface CMRAppointmentParticipationPeriodParticipantActor {
    reference: string;
    id?: string;
}

export const CMRAppointmentParticipationPeriodParticipantActor: t.Type<CMRAppointmentParticipationPeriodParticipantActor> =
    t.recursion("CMRAppointmentParticipationPeriodParticipantActor", () =>
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRAppointmentParticipationPeriodMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Participation_Period|1.0.1">;
    id?: string;
}

export const CMRAppointmentParticipationPeriodMeta: t.Type<CMRAppointmentParticipationPeriodMeta> =
    t.recursion("CMRAppointmentParticipationPeriodMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Participation_Period|1.0.1"
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
 * A broad categorization of the service that is to be performed during this appointment.
 */
export interface CMRAppointmentParticipationPeriodServiceCategory {
    coding: Array<CMRAppointmentParticipationPeriodServiceCategoryCoding>;
    id?: string;
}

export const CMRAppointmentParticipationPeriodServiceCategory: t.Type<CMRAppointmentParticipationPeriodServiceCategory> =
    t.recursion("CMRAppointmentParticipationPeriodServiceCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentParticipationPeriodServiceCategoryCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The specific service that is to be performed during this appointment.
 */
export interface CMRAppointmentParticipationPeriodServiceType {
    coding: Array<CMRAppointmentParticipationPeriodServiceTypeCoding>;
    id?: string;
}

export const CMRAppointmentParticipationPeriodServiceType: t.Type<CMRAppointmentParticipationPeriodServiceType> =
    t.recursion("CMRAppointmentParticipationPeriodServiceType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentParticipationPeriodServiceTypeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * List of participants involved in the appointment.
 */
export interface CMRAppointmentParticipationPeriodParticipant {
    actor: CMRAppointmentParticipationPeriodParticipantActor;
    status: "accepted";
    id?: string;
}

export const CMRAppointmentParticipationPeriodParticipant: t.Type<CMRAppointmentParticipationPeriodParticipant> =
    t.recursion("CMRAppointmentParticipationPeriodParticipant", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: CMRAppointmentParticipationPeriodParticipantActor,
                    status: Literal("accepted")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
* A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.

The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
*/
export interface CMRAppointmentParticipationPeriodRequestedPeriod {
    start: string;
    end: string;
    id?: string;
}

export const CMRAppointmentParticipationPeriodRequestedPeriod: t.Type<CMRAppointmentParticipationPeriodRequestedPeriod> =
    t.recursion("CMRAppointmentParticipationPeriodRequestedPeriod", () =>
        Excess(
            t.intersection([
                t.type({
                    start: SCALARDateTime,
                    end: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRAppointmentParticipationPeriod {
    resourceType: "Appointment";
    meta: CMRAppointmentParticipationPeriodMeta;
    status: "proposed";
    serviceCategory: Array<CMRAppointmentParticipationPeriodServiceCategory>;
    serviceType: Array<CMRAppointmentParticipationPeriodServiceType>;
    participant: Array<CMRAppointmentParticipationPeriodParticipant>;
    requestedPeriod: Array<CMRAppointmentParticipationPeriodRequestedPeriod>;
    id?: string;
}

const CMRAppointmentParticipationPeriod: t.Type<CMRAppointmentParticipationPeriod> =
    t.recursion("CMRAppointmentParticipationPeriod", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Appointment"),
                    meta: CMRAppointmentParticipationPeriodMeta,
                    status: Literal("proposed"),
                    serviceCategory: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentParticipationPeriodServiceCategory
                    ),
                    serviceType: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentParticipationPeriodServiceType
                    ),
                    participant: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentParticipationPeriodParticipant
                    ),
                    requestedPeriod: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentParticipationPeriodRequestedPeriod
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

export default CMRAppointmentParticipationPeriod;
