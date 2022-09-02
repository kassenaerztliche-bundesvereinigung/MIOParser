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
    CustomReference
} from "../../../../CustomTypes";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Appointment_Pregnancy"

/**
 * A Person, Location/HealthcareService or Device that is participating in the appointment.
 */
export interface MRAppointmentPregnancyParticipantActorReference {
    reference: string;
    id?: string;
}

export const MRAppointmentPregnancyParticipantActorReference: t.Type<MRAppointmentPregnancyParticipantActorReference> =
    t.recursion("MRAppointmentPregnancyParticipantActorReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
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
export interface MRAppointmentPregnancyMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Appointment_Pregnancy|1.1.0">;
    id?: string;
}

export const MRAppointmentPregnancyMeta: t.Type<MRAppointmentPregnancyMeta> = t.recursion(
    "MRAppointmentPregnancyMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Appointment_Pregnancy|1.1.0"
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
 * List of participants involved in the appointment.
 */
export interface MRAppointmentPregnancyParticipant {
    actor: MRAppointmentPregnancyParticipantActorReference;
    required: "required";
    status: "accepted";
    id?: string;
}

export const MRAppointmentPregnancyParticipant: t.Type<MRAppointmentPregnancyParticipant> =
    t.recursion("MRAppointmentPregnancyParticipant", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: MRAppointmentPregnancyParticipantActorReference,
                    required: Literal("required"),
                    status: Literal("accepted")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRAppointmentPregnancy {
    resourceType: "Appointment";
    meta: MRAppointmentPregnancyMeta;
    status: "booked";
    start: string;
    participant: Array<MRAppointmentPregnancyParticipant>;
    id?: string;
    text?: Narrative;
    end?: string;
}

const MRAppointmentPregnancy: t.Type<MRAppointmentPregnancy> = t.recursion(
    "MRAppointmentPregnancy",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Appointment"),
                    meta: MRAppointmentPregnancyMeta,
                    status: Literal("booked"),
                    start: SCALARInstant,
                    participant: MinArray(1, MRAppointmentPregnancyParticipant)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    end: SCALARInstant
                })
            ])
        )
);

export default MRAppointmentPregnancy;
