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
import MRCounsellingGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRCounsellingGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Counselling

type MRCounselling =
    | "171054004+440670004+313071005"
    | "313080005+171056002+439816006"
    | "370995009"
    | "409013000"
    | "1156103008"
    | "1156102003"
    | "243085009";

type MRCounsellingType = t.KeyofC<{
    "171054004+440670004+313071005": null;
    "313080005+171056002+439816006": null;
    "370995009": null;
    "409013000": null;
    "1156103008": null;
    "1156102003": null;
    "243085009": null;
}>;

const MRCounselling: MRCounsellingType = t.keyof({
    "171054004+440670004+313071005": null,
    "313080005+171056002+439816006": null,
    "370995009": null,
    "409013000": null,
    "1156103008": null,
    "1156102003": null,
    "243085009": null
});
export const MRCounsellingArray: string[] = [
    "171054004+440670004+313071005",
    "313080005+171056002+439816006",
    "370995009",
    "409013000",
    "1156103008",
    "1156102003",
    "243085009"
];

export const MRCounsellingValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "171054004+440670004+313071005",
                display:
                    "Pregnancy diet education (procedure) + Education about medication intake during pregnancy (procedure) + Counseling for substance abuse (procedure)"
            },
            {
                code: "313080005+171056002+439816006",
                display:
                    "Work-related counseling (procedure) + Pregnancy exercise education (procedure) + Education about travel during pregnancy (procedure)"
            },
            {
                code: "370995009",
                display: "Health risks education (procedure)"
            },
            {
                code: "409013000",
                display: "Delivery care education (procedure)"
            },
            {
                code: "1156103008",
                display: "Education about screening for malignant neoplasm (procedure)"
            },
            {
                code: "1156102003",
                display:
                    "Education about screening for human immunodeficiency virus (procedure)"
            },
            {
                code: "243085009",
                display: "Oral health education (procedure)"
            }
        ]
    }
];

export { MRCounsellingGerman as ConceptMap };

export default MRCounselling;
