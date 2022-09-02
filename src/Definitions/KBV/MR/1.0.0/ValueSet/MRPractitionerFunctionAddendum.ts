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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Practitioner_Function_Addendum

type MRPractitionerFunctionAddendum =
    | "309343006"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192";

type MRPractitionerFunctionAddendumType = t.KeyofC<{
    "309343006": null;
    "140": null;
    "143": null;
    "160": null;
    "161": null;
    "171": null;
    "192": null;
}>;

const MRPractitionerFunctionAddendum: MRPractitionerFunctionAddendumType = t.keyof({
    "309343006": null,
    "140": null,
    "143": null,
    "160": null,
    "161": null,
    "171": null,
    "192": null
});
export const MRPractitionerFunctionAddendumArray: string[] = [
    "309343006",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192"
];

export const MRPractitionerFunctionAddendumValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "309343006",
                display: "Physician (occupation)"
            }
        ]
    },
    {
        system: "urn:oid:1.2.276.0.76.5.114",
        concept: [
            {
                code: "140",
                display: "FA Nervenheilkunde"
            },
            {
                code: "143",
                display: "Psychotherapeutisch tätiger Arzt"
            },
            {
                code: "160",
                display: "FA Orthopädie"
            },
            {
                code: "161",
                display: "SP Rheumatologie"
            },
            {
                code: "171",
                display: "TG Neuropathologie"
            },
            {
                code: "192",
                display: "TG Neuroradiologie"
            }
        ]
    }
];

export default MRPractitionerFunctionAddendum;
