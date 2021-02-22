/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Child_Position

type MRChildPosition = "73161006" | "6096002" | "70028003";

const MRChildPosition: t.Type<MRChildPosition> = t.union(
    [t.literal("73161006"), t.literal("6096002"), t.literal("70028003")],
    "MRChildPosition"
);

export const MRChildPositionArray: string[] = ["73161006", "6096002", "70028003"];

export const MRChildPositionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "73161006",
                display: "Transverse lie (disorder)"
            },
            {
                code: "6096002",
                display: "Breech presentation (finding)"
            },
            {
                code: "70028003",
                display: "Vertex presentation (finding)"
            }
        ]
    }
];

export default MRChildPosition;
