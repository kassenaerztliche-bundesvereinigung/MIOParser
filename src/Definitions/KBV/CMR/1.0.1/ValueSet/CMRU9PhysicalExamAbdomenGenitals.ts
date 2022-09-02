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
import CMRU9PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU9PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U9_Physical_Exam_Abdomen_Genitals

type CMRU9PhysicalExamAbdomenGenitals =
    | "65476007:{363698007=10200004,363698007=78961009}"
    | "128545000";

type CMRU9PhysicalExamAbdomenGenitalsType = t.KeyofC<{
    "65476007:{363698007=10200004,363698007=78961009}": null;
    "128545000": null;
}>;

const CMRU9PhysicalExamAbdomenGenitals: CMRU9PhysicalExamAbdomenGenitalsType = t.keyof({
    "65476007:{363698007=10200004,363698007=78961009}": null,
    "128545000": null
});
export const CMRU9PhysicalExamAbdomenGenitalsArray: string[] = [
    "65476007:{363698007=10200004,363698007=78961009}",
    "128545000"
];

export const CMRU9PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "65476007:{363698007=10200004,363698007=78961009}",
                display:
                    "Abnormal size (finding) : {Finding site (attribute) = Liver structure (body structure) , Finding site (attribute) = Splenic structure (body structure)}"
            },
            {
                code: "128545000",
                display: "Hernia of abdominal wall (disorder)"
            }
        ]
    }
];

export { CMRU9PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU9PhysicalExamAbdomenGenitals;
