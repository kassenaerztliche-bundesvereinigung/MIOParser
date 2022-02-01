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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-kind

type Careplanactivitykind =
    | "Appointment"
    | "CommunicationRequest"
    | "DeviceRequest"
    | "MedicationRequest"
    | "NutritionOrder"
    | "Task"
    | "ServiceRequest"
    | "VisionPrescription";

const Careplanactivitykind: t.Type<Careplanactivitykind> = t.union(
    [
        t.literal("Appointment"),
        t.literal("CommunicationRequest"),
        t.literal("DeviceRequest"),
        t.literal("MedicationRequest"),
        t.literal("NutritionOrder"),
        t.literal("Task"),
        t.literal("ServiceRequest"),
        t.literal("VisionPrescription")
    ],
    "Careplanactivitykind"
);

export const CareplanactivitykindArray: string[] = [
    "Appointment",
    "CommunicationRequest",
    "DeviceRequest",
    "MedicationRequest",
    "NutritionOrder",
    "Task",
    "ServiceRequest",
    "VisionPrescription"
];

export const CareplanactivitykindValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            {
                code: "Appointment",
                display: ""
            },
            {
                code: "CommunicationRequest",
                display: ""
            },
            {
                code: "DeviceRequest",
                display: ""
            },
            {
                code: "MedicationRequest",
                display: ""
            },
            {
                code: "NutritionOrder",
                display: ""
            },
            {
                code: "Task",
                display: ""
            },
            {
                code: "ServiceRequest",
                display: ""
            },
            {
                code: "VisionPrescription",
                display: ""
            }
        ]
    }
];

export default Careplanactivitykind;
