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
import CMRU3U9AgeAppropriateDevelopmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3U9AgeAppropriateDevelopmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_U9_Age_Appropriate_Development

type CMRU3U9AgeAppropriateDevelopment = "23397005" | "409033001";

const CMRU3U9AgeAppropriateDevelopment: t.Type<CMRU3U9AgeAppropriateDevelopment> =
    t.union(
        [t.literal("23397005"), t.literal("409033001")],
        "CMRU3U9AgeAppropriateDevelopment"
    );

export const CMRU3U9AgeAppropriateDevelopmentArray: string[] = ["23397005", "409033001"];

export const CMRU3U9AgeAppropriateDevelopmentValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "23397005",
                display: "Normal growth and development for age (finding)"
            },
            {
                code: "409033001",
                display: "Altered growth and development (finding)"
            }
        ]
    }
];

export { CMRU3U9AgeAppropriateDevelopmentGerman as ConceptMap };

export default CMRU3U9AgeAppropriateDevelopment;
