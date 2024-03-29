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
import MRChildPositionGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRChildPositionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Child_Position

type MRChildPosition = "70028003" | "6096002" | "73161006";

type MRChildPositionType = t.KeyofC<{
    "70028003": null;
    "6096002": null;
    "73161006": null;
}>;

const MRChildPosition: MRChildPositionType = t.keyof({
    "70028003": null,
    "6096002": null,
    "73161006": null
});
export const MRChildPositionArray: string[] = ["70028003", "6096002", "73161006"];

export const MRChildPositionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "70028003",
                display: "Vertex presentation (finding)"
            },
            {
                code: "6096002",
                display: "Breech presentation (finding)"
            },
            {
                code: "73161006",
                display: "Transverse lie (disorder)"
            }
        ]
    }
];

export { MRChildPositionGerman as ConceptMap };

export default MRChildPosition;
