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
import CMRHipHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHipHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hip_History

type CMRHipHistory = "407613009" | "700191004" | "73573004";

type CMRHipHistoryType = t.KeyofC<{
    "407613009": null;
    "700191004": null;
    "73573004": null;
}>;

const CMRHipHistory: CMRHipHistoryType = t.keyof({
    "407613009": null,
    "700191004": null,
    "73573004": null
});
export const CMRHipHistoryArray: string[] = ["407613009", "700191004", "73573004"];

export const CMRHipHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "407613009",
                display: "Born by breech delivery (situation)"
            },
            {
                code: "700191004",
                display: "Family history of congenital hip dysplasia (situation)"
            },
            {
                code: "73573004",
                display: "Congenital anomaly of musculoskeletal system (disorder)"
            }
        ]
    }
];

export { CMRHipHistoryGerman as ConceptMap };

export default CMRHipHistory;
