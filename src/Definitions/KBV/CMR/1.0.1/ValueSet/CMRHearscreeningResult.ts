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
import CMRHearscreeningResultGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHearscreeningResultGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hearscreening_Result

type CMRHearscreeningResult = "275727004" | "134376008" | "134375007";

type CMRHearscreeningResultType = t.KeyofC<{
    "275727004": null;
    "134376008": null;
    "134375007": null;
}>;

const CMRHearscreeningResult: CMRHearscreeningResultType = t.keyof({
    "275727004": null,
    "134376008": null,
    "134375007": null
});
export const CMRHearscreeningResultArray: string[] = [
    "275727004",
    "134376008",
    "134375007"
];

export const CMRHearscreeningResultValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "275727004",
                display: "Hearing test normal (finding)"
            },
            {
                code: "134376008",
                display: "Hearing test right abnormality (finding)"
            },
            {
                code: "134375007",
                display: "Hearing test left abnormality (finding)"
            }
        ]
    }
];

export { CMRHearscreeningResultGerman as ConceptMap };

export default CMRHearscreeningResult;
