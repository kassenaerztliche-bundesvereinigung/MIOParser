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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Snomed

type BodyWeightSnomed =
    | "1230277003"
    | "1162421003"
    | "1162420002"
    | "1162416001"
    | "1162414003"
    | "1162389000"
    | "1162388008"
    | "784399000"
    | "735395000"
    | "445541000"
    | "443245006"
    | "425024002"
    | "424927000"
    | "400967004"
    | "364589006"
    | "363808001"
    | "248351003"
    | "27113001";

type BodyWeightSnomedType = t.KeyofC<{
    "1230277003": null;
    "1162421003": null;
    "1162420002": null;
    "1162416001": null;
    "1162414003": null;
    "1162389000": null;
    "1162388008": null;
    "784399000": null;
    "735395000": null;
    "445541000": null;
    "443245006": null;
    "425024002": null;
    "424927000": null;
    "400967004": null;
    "364589006": null;
    "363808001": null;
    "248351003": null;
    "27113001": null;
}>;

const BodyWeightSnomed: BodyWeightSnomedType = t.keyof({
    "1230277003": null,
    "1162421003": null,
    "1162420002": null,
    "1162416001": null,
    "1162414003": null,
    "1162389000": null,
    "1162388008": null,
    "784399000": null,
    "735395000": null,
    "445541000": null,
    "443245006": null,
    "425024002": null,
    "424927000": null,
    "400967004": null,
    "364589006": null,
    "363808001": null,
    "248351003": null,
    "27113001": null
});
export const BodyWeightSnomedArray: string[] = [
    "1230277003",
    "1162421003",
    "1162420002",
    "1162416001",
    "1162414003",
    "1162389000",
    "1162388008",
    "784399000",
    "735395000",
    "445541000",
    "443245006",
    "425024002",
    "424927000",
    "400967004",
    "364589006",
    "363808001",
    "248351003",
    "27113001"
];

export const BodyWeightSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "1230277003",
                display: "Self reported peak body weight"
            },
            {
                code: "1162421003",
                display: "Pre-dialysis body weight"
            },
            {
                code: "1162420002",
                display: "Post-dialysis body weight"
            },
            {
                code: "1162416001",
                display: "Pre-amputation measured body weight"
            },
            {
                code: "1162414003",
                display: "Pre-amputation estimated body weight"
            },
            {
                code: "1162389000",
                display: "Stated pre-pregnancy body weight"
            },
            {
                code: "1162388008",
                display: "Dosing body weight"
            },
            {
                code: "784399000",
                display: "Self reported body weight"
            },
            {
                code: "735395000",
                display: "Current body weight"
            },
            {
                code: "445541000",
                display: "Dry weight"
            },
            {
                code: "443245006",
                display:
                    "Estimated weight using Broselow Luten pediatric weight estimation"
            },
            {
                code: "425024002",
                display: "Barefoot body weight"
            },
            {
                code: "424927000",
                display: "Body weight with shoes"
            },
            {
                code: "400967004",
                display: "Baseline weight"
            },
            {
                code: "364589006",
                display: "Birth weight"
            },
            {
                code: "363808001",
                display: "Measured body weight"
            },
            {
                code: "248351003",
                display: "Previous well-weight"
            },
            {
                code: "27113001",
                display: "Body weight"
            }
        ]
    }
];

export default BodyWeightSnomed;
