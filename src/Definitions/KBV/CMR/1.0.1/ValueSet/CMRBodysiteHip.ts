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
import CMRBodysiteHipGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRBodysiteHipGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Bodysite_Hip

type CMRBodysiteHip = "362906008" | "362905007";

type CMRBodysiteHipType = t.KeyofC<{ "362906008": null; "362905007": null }>;

const CMRBodysiteHip: CMRBodysiteHipType = t.keyof({
    "362906008": null,
    "362905007": null
});
export const CMRBodysiteHipArray: string[] = ["362906008", "362905007"];

export const CMRBodysiteHipValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "362906008",
                display: "Entire right hip joint (body structure)"
            },
            {
                code: "362905007",
                display: "Entire left hip joint (body structure)"
            }
        ]
    }
];

export { CMRBodysiteHipGerman as ConceptMap };

export default CMRBodysiteHip;
