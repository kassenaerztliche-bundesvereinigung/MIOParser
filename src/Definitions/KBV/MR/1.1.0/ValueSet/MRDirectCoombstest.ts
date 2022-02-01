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
import { ValueSet } from "../../../../Interfaces";
import MRDirectCoombstestGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRDirectCoombstestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Direct_Coombstest

type MRDirectCoombstest = "165773002" | "165772007";

const MRDirectCoombstest: t.Type<MRDirectCoombstest> = t.union(
    [t.literal("165773002"), t.literal("165772007")],
    "MRDirectCoombstest"
);

export const MRDirectCoombstestArray: string[] = ["165773002", "165772007"];

export const MRDirectCoombstestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "165773002",
                display: "Direct Coombs test positive (finding)"
            },
            {
                code: "165772007",
                display: "Direct Coombs test negative (finding)"
            }
        ]
    }
];

export { MRDirectCoombstestGerman as ConceptMap };

export default MRDirectCoombstest;