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
import MRBiometricsIIIIIGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRBiometricsIIIIIGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Biometrics_II_III

type MRBiometricsIIIII =
    | "281688001"
    | "363812007"
    | "304602002:704327008=3332001"
    | "439984002:704327008=302553009"
    | "249676004"
    | "396552003:704321009=268445003"
    | "396551005";

const MRBiometricsIIIII: t.Type<MRBiometricsIIIII> = t.union(
    [
        t.literal("281688001"),
        t.literal("363812007"),
        t.literal("304602002:704327008=3332001"),
        t.literal("439984002:704327008=302553009"),
        t.literal("249676004"),
        t.literal("396552003:704321009=268445003"),
        t.literal("396551005")
    ],
    "MRBiometricsIIIII"
);

export const MRBiometricsIIIIIArray: string[] = [
    "281688001",
    "363812007",
    "304602002:704327008=3332001",
    "439984002:704327008=302553009",
    "249676004",
    "396552003:704321009=268445003",
    "396551005"
];

export const MRBiometricsIIIIIValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "281688001",
                display: "Biparietal diameter (observable entity)"
            },
            {
                code: "363812007",
                display: "Head circumference (observable entity)"
            },
            {
                code: "304602002:704327008=3332001",
                display:
                    "Antenatal ultrasound finding (observable entity) : Direct site (attribute) = Occipitofrontal diameter of head (body structure)"
            },
            {
                code: "439984002:704327008=302553009",
                display:
                    "Diameter of structure by imaging measurement (observable entity):Direct site (attribute)=Entire abdomen (body structure)"
            },
            {
                code: "249676004",
                display: "Anteroposterior diameter of chest (observable entity)"
            },
            {
                code: "396552003:704321009=268445003",
                display:
                    "Abdominal circumference (observable entity) : Characterizes (attribute) = Ultrasound scan - obstetric (procedure)"
            },
            {
                code: "396551005",
                display: "Femur length (observable entity)"
            }
        ]
    }
];

export { MRBiometricsIIIIIGerman as ConceptMap };

export default MRBiometricsIIIII;
