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
import CMRU7U7aPhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7U7aPhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_U7a_Physical_Exam_Abdomen_Genitals

type CMRU7U7aPhysicalExamAbdomenGenitals =
    | "204878001"
    | "128545000"
    | "65476007:{363698007=10200004,363698007=78961009}";

type CMRU7U7aPhysicalExamAbdomenGenitalsType = t.KeyofC<{
    "204878001": null;
    "128545000": null;
    "65476007:{363698007=10200004,363698007=78961009}": null;
}>;

const CMRU7U7aPhysicalExamAbdomenGenitals: CMRU7U7aPhysicalExamAbdomenGenitalsType =
    t.keyof({
        "204878001": null,
        "128545000": null,
        "65476007:{363698007=10200004,363698007=78961009}": null
    });
export const CMRU7U7aPhysicalExamAbdomenGenitalsArray: string[] = [
    "204878001",
    "128545000",
    "65476007:{363698007=10200004,363698007=78961009}"
];

export const CMRU7U7aPhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "204878001",
                display: "Undescended testicle (disorder)"
            },
            {
                code: "128545000",
                display: "Hernia of abdominal wall (disorder)"
            },
            {
                code: "65476007:{363698007=10200004,363698007=78961009}",
                display:
                    "Abnormal size (finding) : {Finding site (attribute) = Liver structure (body structure) , Finding site (attribute) = Splenic structure (body structure)}"
            }
        ]
    }
];

export { CMRU7U7aPhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU7U7aPhysicalExamAbdomenGenitals;
