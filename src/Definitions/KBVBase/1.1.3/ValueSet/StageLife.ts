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
import { ValueSet } from "../../../Interfaces";
import StageLifeGerman from "../../../../Definitions/KBVBase/1.1.3/ConceptMap/StageLifeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Stage_Life

type StageLife =
    | "41847000"
    | "263659003"
    | "255398004"
    | "713153009"
    | "3658006"
    | "255407002"
    | "271872005";

type StageLifeType = t.KeyofC<{
    "41847000": null;
    "263659003": null;
    "255398004": null;
    "713153009": null;
    "3658006": null;
    "255407002": null;
    "271872005": null;
}>;

const StageLife: StageLifeType = t.keyof({
    "41847000": null,
    "263659003": null,
    "255398004": null,
    "713153009": null,
    "3658006": null,
    "255407002": null,
    "271872005": null
});
export const StageLifeArray: string[] = [
    "41847000",
    "263659003",
    "255398004",
    "713153009",
    "3658006",
    "255407002",
    "271872005"
];

export const StageLifeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "41847000",
                display: "Adulthood (qualifier value)"
            },
            {
                code: "263659003",
                display: "Adolescence (qualifier value)"
            },
            {
                code: "255398004",
                display: "Childhood (qualifier value)"
            },
            {
                code: "713153009",
                display: "Toddler (qualifier value)"
            },
            {
                code: "3658006",
                display: "Infancy (qualifier value)"
            },
            {
                code: "255407002",
                display: "Neonatal (qualifier value)"
            },
            {
                code: "271872005",
                display: "Old age (qualifier value)"
            }
        ]
    }
];

export { StageLifeGerman as ConceptMap };

export default StageLife;
