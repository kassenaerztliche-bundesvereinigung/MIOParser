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
import MRBreastfeedingBehaviorGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRBreastfeedingBehaviorGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Breastfeeding_Behavior

type MRBreastfeedingBehavior = "69840006" | "289083006" | "169746009";

const MRBreastfeedingBehavior: t.Type<MRBreastfeedingBehavior> = t.union(
    [t.literal("69840006"), t.literal("289083006"), t.literal("169746009")],
    "MRBreastfeedingBehavior"
);

export const MRBreastfeedingBehaviorArray: string[] = [
    "69840006",
    "289083006",
    "169746009"
];

export const MRBreastfeedingBehaviorValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "69840006",
                display: "Normal breast feeding (finding)"
            },
            {
                code: "289083006",
                display: "Does not perform breast-feeding (finding)"
            },
            {
                code: "169746009",
                display: "Breastfeeding stopped (finding)"
            }
        ]
    }
];

export { MRBreastfeedingBehaviorGerman as ConceptMap };

export default MRBreastfeedingBehavior;
