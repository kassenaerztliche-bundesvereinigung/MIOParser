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
import MRRhesusSystemGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRRhesusSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Rhesus_System

type MRRhesusSystem = "165747007" | "165746003";

type MRRhesusSystemType = t.KeyofC<{ "165747007": null; "165746003": null }>;

const MRRhesusSystem: MRRhesusSystemType = t.keyof({
    "165747007": null,
    "165746003": null
});
export const MRRhesusSystemArray: string[] = ["165747007", "165746003"];

export const MRRhesusSystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "165747007",
                display: "RhD positive (finding)"
            },
            {
                code: "165746003",
                display: "RhD negative (finding)"
            }
        ]
    }
];

export { MRRhesusSystemGerman as ConceptMap };

export default MRRhesusSystem;
