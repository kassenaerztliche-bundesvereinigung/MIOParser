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
import CMRU5U9PhysicalExamSkinGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5U9PhysicalExamSkinGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_U9_Physical_Exam_Skin

type CMRU5U9PhysicalExamSkin =
    | "267029006"
    | "781645001"
    | "106076001:116676008=708039003";

type CMRU5U9PhysicalExamSkinType = t.KeyofC<{
    "267029006": null;
    "781645001": null;
    "106076001:116676008=708039003": null;
}>;

const CMRU5U9PhysicalExamSkin: CMRU5U9PhysicalExamSkinType = t.keyof({
    "267029006": null,
    "781645001": null,
    "106076001:116676008=708039003": null
});
export const CMRU5U9PhysicalExamSkinArray: string[] = [
    "267029006",
    "781645001",
    "106076001:116676008=708039003"
];

export const CMRU5U9PhysicalExamSkinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)"
            },
            {
                code: "781645001",
                display: "Injury to skin caused by trauma (finding)"
            },
            {
                code: "106076001:116676008=708039003",
                display:
                    "Skin finding (finding) : Associated morphology (attribute) = Inflammatory lesion (morphologic abnormality)"
            }
        ]
    }
];

export { CMRU5U9PhysicalExamSkinGerman as ConceptMap };

export default CMRU5U9PhysicalExamSkin;
