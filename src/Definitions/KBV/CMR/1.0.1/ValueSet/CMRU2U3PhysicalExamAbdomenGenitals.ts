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
import CMRU2U3PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U3PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U3_Physical_Exam_Abdomen_Genitals

type CMRU2U3PhysicalExamAbdomenGenitals =
    | "822987005:{116676008=49755003,363698007=818987002}"
    | "249537008"
    | "65476007:{363698007=10200004,363698007=78961009}"
    | "128545000";

type CMRU2U3PhysicalExamAbdomenGenitalsType = t.KeyofC<{
    "822987005:{116676008=49755003,363698007=818987002}": null;
    "249537008": null;
    "65476007:{363698007=10200004,363698007=78961009}": null;
    "128545000": null;
}>;

const CMRU2U3PhysicalExamAbdomenGenitals: CMRU2U3PhysicalExamAbdomenGenitalsType =
    t.keyof({
        "822987005:{116676008=49755003,363698007=818987002}": null,
        "249537008": null,
        "65476007:{363698007=10200004,363698007=78961009}": null,
        "128545000": null
    });
export const CMRU2U3PhysicalExamAbdomenGenitalsArray: string[] = [
    "822987005:{116676008=49755003,363698007=818987002}",
    "249537008",
    "65476007:{363698007=10200004,363698007=78961009}",
    "128545000"
];

export const CMRU2U3PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "822987005:{116676008=49755003,363698007=818987002}",
                display:
                    "Finding of abdominopelvic segment of trunk (finding) : {Associated morphology (attribute)  = Developmental anomaly (morphologic abnormality) , Finding site (attribute) = Structure of abdominopelvic cavity (body structure) }"
            },
            {
                code: "249537008",
                display: "Umbilicus finding (finding)"
            },
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

export { CMRU2U3PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU2U3PhysicalExamAbdomenGenitals;
