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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_oGTT_Pretest

type MRoGTTPretest =
    | "404684003:{363714003=442260000,363713009=394844007}"
    | "404684003:{363714003=442260000,363713009=281301001}";

const MRoGTTPretest: t.Type<MRoGTTPretest> = t.union(
    [
        t.literal("404684003:{363714003=442260000,363713009=394844007}"),
        t.literal("404684003:{363714003=442260000,363713009=281301001}")
    ],
    "MRoGTTPretest"
);

export const MRoGTTPretestArray: string[] = [
    "404684003:{363714003=442260000,363713009=394844007}",
    "404684003:{363714003=442260000,363713009=281301001}"
];

export const MRoGTTPretestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "404684003:{363714003=442260000,363713009=394844007}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Outside reference range (qualifier value)}"
            },
            {
                code: "404684003:{363714003=442260000,363713009=281301001}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Within reference range (qualifier value)}"
            }
        ]
    }
];

export default MRoGTTPretest;
