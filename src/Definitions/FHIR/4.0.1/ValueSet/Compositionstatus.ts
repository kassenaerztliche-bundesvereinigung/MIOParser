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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/composition-status

type Compositionstatus = "preliminary" | "final" | "amended" | "entered-in-error";

const Compositionstatus: t.Type<Compositionstatus> = t.union(
    [
        t.literal("preliminary"),
        t.literal("final"),
        t.literal("amended"),
        t.literal("entered-in-error")
    ],
    "Compositionstatus"
);

export const CompositionstatusArray: string[] = [
    "preliminary",
    "final",
    "amended",
    "entered-in-error"
];

export const CompositionstatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/composition-status",
        concept: []
    }
];

export default Compositionstatus;
