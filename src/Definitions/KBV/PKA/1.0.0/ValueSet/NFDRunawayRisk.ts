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
import NFDRunawayRiskGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDRunawayRiskGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_Runaway_Risk

type NFDRunawayRisk =
    | "50239007 : 363713009 = 723509005"
    | "50239007 : 363713009 = 261665006";

type NFDRunawayRiskType = t.KeyofC<{
    "50239007 : 363713009 = 723509005": null;
    "50239007 : 363713009 = 261665006": null;
}>;

const NFDRunawayRisk: NFDRunawayRiskType = t.keyof({
    "50239007 : 363713009 = 723509005": null,
    "50239007 : 363713009 = 261665006": null
});
export const NFDRunawayRiskArray: string[] = [
    "50239007 : 363713009 = 723509005",
    "50239007 : 363713009 = 261665006"
];

export const NFDRunawayRiskValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "50239007 : 363713009 = 723509005",
                display:
                    "Wandering (finding) : Has interpretation (attribute) = High risk (qualifier value)"
            },
            {
                code: "50239007 : 363713009 = 261665006",
                display:
                    "Wandering (finding) : Has interpretation (attribute) = Unknown (qualifier value)"
            }
        ]
    }
];

export { NFDRunawayRiskGerman as ConceptMap };

export default NFDRunawayRisk;
