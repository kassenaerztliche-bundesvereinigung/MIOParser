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
import MRBirthModeGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRBirthModeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Birth_Mode

type MRBirthMode = "236974004" | "11466000" | "177184002";

const MRBirthMode: t.Type<MRBirthMode> = t.union(
    [t.literal("236974004"), t.literal("11466000"), t.literal("177184002")],
    "MRBirthMode"
);

export const MRBirthModeArray: string[] = ["236974004", "11466000", "177184002"];

export const MRBirthModeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "236974004",
                display: "Instrumental delivery (procedure)"
            },
            {
                code: "11466000",
                display: "Cesarean section (procedure)"
            },
            {
                code: "177184002",
                display: "Normal delivery procedure (procedure)"
            }
        ]
    }
];

export { MRBirthModeGerman as ConceptMap };

export default MRBirthMode;
