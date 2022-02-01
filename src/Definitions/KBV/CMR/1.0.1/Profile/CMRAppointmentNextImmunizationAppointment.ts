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
    MinArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment"

/**
 * Content in other Language.
 */
export interface CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent {
    url: "content";
    valueString: "nächster Impftermin am:";
    id?: string;
}

export const CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent: t.Type<CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent> =
    t.recursion(
        "CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("nächster Impftermin am:")
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
export interface CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent
    )[];
}

export const CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed: t.Type<CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed> =
    t.recursion(
        "CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed",
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
                                    t.Type<CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomedContent,
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
export interface CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed
    )[];
    value?: string;
}

export const CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplay: t.Type<CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplay> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplayAnzeigenameServiceTypeSnomed,
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
export interface CMRAppointmentNextImmunizationAppointmentServiceTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "390840006:42752001=127785005";
    id?: string;
    _display?: CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplay;
    display?: string;
}

export const CMRAppointmentNextImmunizationAppointmentServiceTypeCoding: t.Type<CMRAppointmentNextImmunizationAppointmentServiceTypeCoding> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentServiceTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("390840006:42752001=127785005")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRAppointmentNextImmunizationAppointmentServiceTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A Person, Location/HealthcareService or Device that is participating in the appointment.
 */
export interface CMRAppointmentNextImmunizationAppointmentParticipantActor {
    reference: string;
    id?: string;
}

export const CMRAppointmentNextImmunizationAppointmentParticipantActor: t.Type<CMRAppointmentNextImmunizationAppointmentParticipantActor> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentParticipantActor", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1",
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
export interface CMRAppointmentNextImmunizationAppointmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.1">;
    id?: string;
}

export const CMRAppointmentNextImmunizationAppointmentMeta: t.Type<CMRAppointmentNextImmunizationAppointmentMeta> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Appointment_Next_Immunization_Appointment|1.0.1"
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
 * The specific service that is to be performed during this appointment.
 */
export interface CMRAppointmentNextImmunizationAppointmentServiceType {
    coding: Array<CMRAppointmentNextImmunizationAppointmentServiceTypeCoding>;
    id?: string;
}

export const CMRAppointmentNextImmunizationAppointmentServiceType: t.Type<CMRAppointmentNextImmunizationAppointmentServiceType> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentServiceType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentNextImmunizationAppointmentServiceTypeCoding
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
export interface CMRAppointmentNextImmunizationAppointmentParticipant {
    actor: CMRAppointmentNextImmunizationAppointmentParticipantActor;
    status: "accepted";
    id?: string;
}

export const CMRAppointmentNextImmunizationAppointmentParticipant: t.Type<CMRAppointmentNextImmunizationAppointmentParticipant> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentParticipant", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: CMRAppointmentNextImmunizationAppointmentParticipantActor,
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
export interface CMRAppointmentNextImmunizationAppointmentRequestedPeriod {
    start: string;
    id?: string;
}

export const CMRAppointmentNextImmunizationAppointmentRequestedPeriod: t.Type<CMRAppointmentNextImmunizationAppointmentRequestedPeriod> =
    t.recursion("CMRAppointmentNextImmunizationAppointmentRequestedPeriod", () =>
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

interface CMRAppointmentNextImmunizationAppointment {
    resourceType: "Appointment";
    meta: CMRAppointmentNextImmunizationAppointmentMeta;
    status: "proposed";
    serviceType: Array<CMRAppointmentNextImmunizationAppointmentServiceType>;
    participant: Array<CMRAppointmentNextImmunizationAppointmentParticipant>;
    requestedPeriod: Array<CMRAppointmentNextImmunizationAppointmentRequestedPeriod>;
    id?: string;
    text?: Narrative;
}

const CMRAppointmentNextImmunizationAppointment: t.Type<CMRAppointmentNextImmunizationAppointment> =
    t.recursion("CMRAppointmentNextImmunizationAppointment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Appointment"),
                    meta: CMRAppointmentNextImmunizationAppointmentMeta,
                    status: Literal("proposed"),
                    serviceType: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentNextImmunizationAppointmentServiceType
                    ),
                    participant: MinArray(
                        1,
                        CMRAppointmentNextImmunizationAppointmentParticipant
                    ),
                    requestedPeriod: MinMaxArray(
                        1,
                        1,
                        CMRAppointmentNextImmunizationAppointmentRequestedPeriod
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
    );

export default CMRAppointmentNextImmunizationAppointment;
