/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/encounter-status

type Encounterstatus =
    | "planned"
    | "arrived"
    | "triaged"
    | "in-progress"
    | "onleave"
    | "finished"
    | "cancelled"
    | "entered-in-error"
    | "unknown";

const Encounterstatus: t.Type<Encounterstatus> = t.union(
    [
        t.literal("planned"),
        t.literal("arrived"),
        t.literal("triaged"),
        t.literal("in-progress"),
        t.literal("onleave"),
        t.literal("finished"),
        t.literal("cancelled"),
        t.literal("entered-in-error"),
        t.literal("unknown")
    ],
    "Encounterstatus"
);

export const EncounterstatusArray: string[] = [
    "planned",
    "arrived",
    "triaged",
    "in-progress",
    "onleave",
    "finished",
    "cancelled",
    "entered-in-error",
    "unknown"
];

export const EncounterstatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/encounter-status",
        concept: []
    }
];

export default Encounterstatus;
