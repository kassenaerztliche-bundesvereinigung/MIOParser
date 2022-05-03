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

// Canonical URL for ValueSet: http://fhir.de/ValueSet/gender-amtlich-de

type Genderamtlichde = "X" | "D";

const Genderamtlichde: t.Type<Genderamtlichde> = t.union(
    [t.literal("X"), t.literal("D")],
    "Genderamtlichde"
);

export const GenderamtlichdeArray: string[] = ["X", "D"];

export const GenderamtlichdeValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/gender-amtlich-de",
        concept: [
            {
                code: "X",
                display: "unbestimmt"
            },
            {
                code: "D",
                display: "divers"
            }
        ]
    }
];

export default Genderamtlichde;
