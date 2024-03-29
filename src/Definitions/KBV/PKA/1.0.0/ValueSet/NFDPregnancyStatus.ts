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
import NFDPregnancyStatusGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDPregnancyStatusGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_Pregnancy_Status

type NFDPregnancyStatus = "LA15173-0" | "LA4489-6";

type NFDPregnancyStatusType = t.KeyofC<{ "LA15173-0": null; "LA4489-6": null }>;

const NFDPregnancyStatus: NFDPregnancyStatusType = t.keyof({
    "LA15173-0": null,
    "LA4489-6": null
});
export const NFDPregnancyStatusArray: string[] = ["LA15173-0", "LA4489-6"];

export const NFDPregnancyStatusValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "LA15173-0",
                display: "Pregnant"
            },
            {
                code: "LA4489-6",
                display: "Unknown"
            }
        ]
    }
];

export { NFDPregnancyStatusGerman as ConceptMap };

export default NFDPregnancyStatus;
