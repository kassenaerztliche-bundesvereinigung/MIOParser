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
import CMRU1ApgarScoreIdentifierGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU1ApgarScoreIdentifierGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_Apgar_Score_Identifier

type CMRU1ApgarScoreIdentifier = "169922007" | "169909004";

type CMRU1ApgarScoreIdentifierType = t.KeyofC<{ "169922007": null; "169909004": null }>;

const CMRU1ApgarScoreIdentifier: CMRU1ApgarScoreIdentifierType = t.keyof({
    "169922007": null,
    "169909004": null
});
export const CMRU1ApgarScoreIdentifierArray: string[] = ["169922007", "169909004"];

export const CMRU1ApgarScoreIdentifierValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169922007",
                display: "Apgar score at 10 minutes (observable entity)"
            },
            {
                code: "169909004",
                display: "Apgar score at 5 minutes (observable entity)"
            }
        ]
    }
];

export { CMRU1ApgarScoreIdentifierGerman as ConceptMap };

export default CMRU1ApgarScoreIdentifier;
