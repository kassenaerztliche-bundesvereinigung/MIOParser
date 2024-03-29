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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/trigger-type

type Triggertype =
    | "named-event"
    | "periodic"
    | "data-changed"
    | "data-added"
    | "data-modified"
    | "data-removed"
    | "data-accessed"
    | "data-access-ended";

type TriggertypeType = t.KeyofC<{
    "named-event": null;
    periodic: null;
    "data-changed": null;
    "data-added": null;
    "data-modified": null;
    "data-removed": null;
    "data-accessed": null;
    "data-access-ended": null;
}>;

const Triggertype: TriggertypeType = t.keyof({
    "named-event": null,
    periodic: null,
    "data-changed": null,
    "data-added": null,
    "data-modified": null,
    "data-removed": null,
    "data-accessed": null,
    "data-access-ended": null
});
export const TriggertypeArray: string[] = [
    "named-event",
    "periodic",
    "data-changed",
    "data-added",
    "data-modified",
    "data-removed",
    "data-accessed",
    "data-access-ended"
];

export const TriggertypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/trigger-type",
        concept: [
            {
                code: "named-event",
                display: "Named Event"
            },
            {
                code: "periodic",
                display: "Periodic"
            },
            {
                code: "data-changed",
                display: "Data Changed"
            },
            {
                code: "data-added",
                display: "Data Added"
            },
            {
                code: "data-modified",
                display: "Data Updated"
            },
            {
                code: "data-removed",
                display: "Data Removed"
            },
            {
                code: "data-accessed",
                display: "Data Accessed"
            },
            {
                code: "data-access-ended",
                display: "Data Access Ended"
            }
        ]
    }
];

export default Triggertype;
