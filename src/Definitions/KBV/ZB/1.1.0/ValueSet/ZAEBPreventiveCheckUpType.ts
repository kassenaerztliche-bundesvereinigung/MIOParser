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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_ZAEB_Preventive_Check_Up_Type

type ZAEBPreventiveCheckUpType = "2115003" | "63963009";

const ZAEBPreventiveCheckUpType: t.Type<ZAEBPreventiveCheckUpType> = t.union(
    [t.literal("2115003"), t.literal("63963009")],
    "ZAEBPreventiveCheckUpType"
);

export const ZAEBPreventiveCheckUpTypeArray: string[] = ["2115003", "63963009"];

export const ZAEBPreventiveCheckUpTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "2115003",
                display: "Dental prophylaxis, children (procedure)"
            },
            {
                code: "63963009",
                display: "Dental prophylaxis, adult (procedure)"
            }
        ]
    }
];

export default ZAEBPreventiveCheckUpType;
