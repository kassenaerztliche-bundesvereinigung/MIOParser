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
import ApgarScoreValueGerman from "../../../../Definitions/KBVBase/1.1.0/ConceptMap/ApgarScoreValueGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Apgar_Score_Value

type ApgarScoreValue =
    | "77714001"
    | "43610007"
    | "39910003"
    | "26635001"
    | "38107004"
    | "24388001"
    | "10318004"
    | "13323003"
    | "12431004"
    | "64198003"
    | "49544001";

type ApgarScoreValueType = t.KeyofC<{
    "77714001": null;
    "43610007": null;
    "39910003": null;
    "26635001": null;
    "38107004": null;
    "24388001": null;
    "10318004": null;
    "13323003": null;
    "12431004": null;
    "64198003": null;
    "49544001": null;
}>;

const ApgarScoreValue: ApgarScoreValueType = t.keyof({
    "77714001": null,
    "43610007": null,
    "39910003": null,
    "26635001": null,
    "38107004": null,
    "24388001": null,
    "10318004": null,
    "13323003": null,
    "12431004": null,
    "64198003": null,
    "49544001": null
});
export const ApgarScoreValueArray: string[] = [
    "77714001",
    "43610007",
    "39910003",
    "26635001",
    "38107004",
    "24388001",
    "10318004",
    "13323003",
    "12431004",
    "64198003",
    "49544001"
];

export const ApgarScoreValueValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "77714001",
                display: "Apgar score 0 (finding)"
            },
            {
                code: "43610007",
                display: "Apgar score 1 (finding)"
            },
            {
                code: "39910003",
                display: "Apgar score 2 (finding)"
            },
            {
                code: "26635001",
                display: "Apgar score 3 (finding)"
            },
            {
                code: "38107004",
                display: "Apgar score 4 (finding)"
            },
            {
                code: "24388001",
                display: "Apgar score 5 (finding)"
            },
            {
                code: "10318004",
                display: "Apgar score 6 (finding)"
            },
            {
                code: "13323003",
                display: "Apgar score 7 (finding)"
            },
            {
                code: "12431004",
                display: "Apgar score 8 (finding)"
            },
            {
                code: "64198003",
                display: "Apgar score 9 (finding)"
            },
            {
                code: "49544001",
                display: "Apgar score 10 (finding)"
            }
        ]
    }
];

export { ApgarScoreValueGerman as ConceptMap };

export default ApgarScoreValue;
