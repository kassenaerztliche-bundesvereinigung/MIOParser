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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Graf_Hip_Ultrasound_Classification

type CMRGrafHipUltrasoundClassification = "1ab" | "2a" | "2cd" | "3a" | "3b" | "4";

const CMRGrafHipUltrasoundClassification: t.Type<CMRGrafHipUltrasoundClassification> = t.union(
    [
        t.literal("1ab"),
        t.literal("2a"),
        t.literal("2cd"),
        t.literal("3a"),
        t.literal("3b"),
        t.literal("4")
    ],
    "CMRGrafHipUltrasoundClassification"
);

export const CMRGrafHipUltrasoundClassificationArray: string[] = [
    "1ab",
    "2a",
    "2cd",
    "3a",
    "3b",
    "4"
];

export const CMRGrafHipUltrasoundClassificationValueSet: ValueSet = [
    {
        system:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification",
        concept: [
            {
                code: "1ab",
                display: "Graf Ia/Ib"
            },
            {
                code: "2a",
                display: "Graf IIa"
            },
            {
                code: "2cd",
                display: "Graf IIc/D"
            },
            {
                code: "3a",
                display: "Graf IIIa"
            },
            {
                code: "3b",
                display: "Graf IIIb"
            },
            {
                code: "4",
                display: "Graf IV"
            }
        ]
    },
    {
        system:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification",
        concept: [
            { code: "1ab", display: "Graf Ia/Ib" },
            { code: "2a", display: "Graf IIa" },
            { code: "2cd", display: "Graf IIc/D" },
            { code: "3a", display: "Graf IIIa" },
            { code: "3b", display: "Graf IIIb" },
            { code: "4", display: "Graf IV" }
        ]
    }
];

export default CMRGrafHipUltrasoundClassification;
