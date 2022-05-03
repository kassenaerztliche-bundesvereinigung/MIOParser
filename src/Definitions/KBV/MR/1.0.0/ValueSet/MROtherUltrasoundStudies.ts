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
import MROtherUltrasoundStudiesGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MROtherUltrasoundStudiesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Other_Ultrasound_Studies

type MROtherUltrasoundStudies = "89343007" | "373671009" | "418090003";

const MROtherUltrasoundStudies: t.Type<MROtherUltrasoundStudies> = t.union(
    [t.literal("89343007"), t.literal("373671009"), t.literal("418090003")],
    "MROtherUltrasoundStudies"
);

export const MROtherUltrasoundStudiesArray: string[] = [
    "89343007",
    "373671009",
    "418090003"
];

export const MROtherUltrasoundStudiesValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "89343007",
                display: "Ultrasound study follow-up (procedure)"
            },
            {
                code: "373671009",
                display: "Specific ultrasound studies (procedure)"
            },
            {
                code: "418090003",
                display: "Ultrasound obstetric doppler (procedure)"
            }
        ]
    }
];

export { MROtherUltrasoundStudiesGerman as ConceptMap };

export default MROtherUltrasoundStudies;
