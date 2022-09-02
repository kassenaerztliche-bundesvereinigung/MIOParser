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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/narrative-status

type Narrativestatus = "generated" | "extensions" | "additional" | "empty";

type NarrativestatusType = t.KeyofC<{
    generated: null;
    extensions: null;
    additional: null;
    empty: null;
}>;

const Narrativestatus: NarrativestatusType = t.keyof({
    generated: null,
    extensions: null,
    additional: null,
    empty: null
});
export const NarrativestatusArray: string[] = [
    "generated",
    "extensions",
    "additional",
    "empty"
];

export const NarrativestatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/narrative-status",
        concept: [
            {
                code: "generated",
                display: "Generated"
            },
            {
                code: "extensions",
                display: "Extensions"
            },
            {
                code: "additional",
                display: "Additional"
            },
            {
                code: "empty",
                display: "Empty"
            }
        ]
    }
];

export default Narrativestatus;
