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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_U7a_Physical_Exam_Abdomen_Genitals_German
type CMRU7U7aPhysicalExamAbdomenGenitalsGerman =
    | "Hodenhochstandrechtslinks"
    | "Hernien"
    | "LeberundMilzgroesse";

const CMRU7U7aPhysicalExamAbdomenGenitalsGerman: t.Type<CMRU7U7aPhysicalExamAbdomenGenitalsGerman> =
    t.union([
        t.literal("Hodenhochstandrechtslinks"),
        t.literal("Hernien"),
        t.literal("LeberundMilzgroesse")
    ]);

export const CMRU7U7aPhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "Hodenhochstandrechtslinks",
    "Hernien",
    "LeberundMilzgroesse"
];

export default CMRU7U7aPhysicalExamAbdomenGenitalsGerman;
