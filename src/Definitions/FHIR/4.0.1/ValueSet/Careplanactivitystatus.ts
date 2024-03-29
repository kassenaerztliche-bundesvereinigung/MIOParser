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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-status

type Careplanactivitystatus =
    | "not-started"
    | "scheduled"
    | "in-progress"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "stopped"
    | "unknown"
    | "entered-in-error";

type CareplanactivitystatusType = t.KeyofC<{
    "not-started": null;
    scheduled: null;
    "in-progress": null;
    "on-hold": null;
    completed: null;
    cancelled: null;
    stopped: null;
    unknown: null;
    "entered-in-error": null;
}>;

const Careplanactivitystatus: CareplanactivitystatusType = t.keyof({
    "not-started": null,
    scheduled: null,
    "in-progress": null,
    "on-hold": null,
    completed: null,
    cancelled: null,
    stopped: null,
    unknown: null,
    "entered-in-error": null
});
export const CareplanactivitystatusArray: string[] = [
    "not-started",
    "scheduled",
    "in-progress",
    "on-hold",
    "completed",
    "cancelled",
    "stopped",
    "unknown",
    "entered-in-error"
];

export const CareplanactivitystatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/care-plan-activity-status",
        concept: [
            {
                code: "not-started",
                display: "Not Started"
            },
            {
                code: "scheduled",
                display: "Scheduled"
            },
            {
                code: "in-progress",
                display: "In Progress"
            },
            {
                code: "on-hold",
                display: "On Hold"
            },
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "cancelled",
                display: "Cancelled"
            },
            {
                code: "stopped",
                display: "Stopped"
            },
            {
                code: "unknown",
                display: "Unknown"
            },
            {
                code: "entered-in-error",
                display: "Entered in Error"
            }
        ]
    }
];

export default Careplanactivitystatus;
