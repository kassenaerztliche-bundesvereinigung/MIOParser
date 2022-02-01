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
import MRRhesusSystemFetusGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRRhesusSystemFetusGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Rhesus_System_Fetus

type MRRhesusSystemFetus = "365645007+165747007" | "365645007+165746003";

const MRRhesusSystemFetus: t.Type<MRRhesusSystemFetus> = t.union(
    [t.literal("365645007+165747007"), t.literal("365645007+165746003")],
    "MRRhesusSystemFetus"
);

export const MRRhesusSystemFetusArray: string[] = [
    "365645007+165747007",
    "365645007+165746003"
];

export const MRRhesusSystemFetusValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "365645007+165747007",
                display: "Finding of Rh genotype (finding) + RhD positive (finding)"
            },
            {
                code: "365645007+165746003",
                display: "Finding of Rh genotype (finding) + RhD negative (finding)"
            }
        ]
    }
];

export { MRRhesusSystemFetusGerman as ConceptMap };

export default MRRhesusSystemFetus;
