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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Head_Circumference_BodySite_Snomed

type HeadCircumferenceBodySiteSnomed = "302548004" | "362865009";

type HeadCircumferenceBodySiteSnomedType = t.KeyofC<{
    "302548004": null;
    "362865009": null;
}>;

const HeadCircumferenceBodySiteSnomed: HeadCircumferenceBodySiteSnomedType = t.keyof({
    "302548004": null,
    "362865009": null
});
export const HeadCircumferenceBodySiteSnomedArray: string[] = ["302548004", "362865009"];

export const HeadCircumferenceBodySiteSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "302548004",
                display: "Entire head (body structure)"
            },
            {
                code: "362865009",
                display: "Entire fetal head (body structure)"
            }
        ]
    }
];

export default HeadCircumferenceBodySiteSnomed;
