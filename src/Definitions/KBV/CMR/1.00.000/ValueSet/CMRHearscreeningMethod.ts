/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hearscreening_Method

type CMRHearscreeningMethod =
    | "446077009"
    | "252616000:246513007=261422002"
    | "252616000:246513007=261426004";

const CMRHearscreeningMethod: t.Type<CMRHearscreeningMethod> = t.union(
    [
        t.literal("446077009"),
        t.literal("252616000:246513007=261422002"),
        t.literal("252616000:246513007=261426004")
    ],
    "CMRHearscreeningMethod"
);

export const CMRHearscreeningMethodArray: string[] = [
    "446077009",
    "252616000:246513007=261422002",
    "252616000:246513007=261426004"
];

export const CMRHearscreeningMethodValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "446077009",
                display: "Automated otoacoustic emission test (procedure)"
            },
            {
                code: "252616000:246513007=261422002",
                display:
                    "Auditory brainstem electric response audiometry (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)"
            },
            {
                code: "252616000:246513007=261426004",
                display:
                    "Auditory brainstem electric response audiometry (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)"
            }
        ]
    }
];

export default CMRHearscreeningMethod;
