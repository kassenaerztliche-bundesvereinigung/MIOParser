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
import CMRU2PhysicalExamSkinGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2PhysicalExamSkinGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Physical_Exam_Skin

type CMRU2PhysicalExamSkin =
    | "267029006"
    | "3415004"
    | "18165001"
    | "400210000"
    | "21119008"
    | "267038008"
    | "781645001"
    | "251839006";

const CMRU2PhysicalExamSkin: t.Type<CMRU2PhysicalExamSkin> = t.union(
    [
        t.literal("267029006"),
        t.literal("3415004"),
        t.literal("18165001"),
        t.literal("400210000"),
        t.literal("21119008"),
        t.literal("267038008"),
        t.literal("781645001"),
        t.literal("251839006")
    ],
    "CMRU2PhysicalExamSkin"
);

export const CMRU2PhysicalExamSkinArray: string[] = [
    "267029006",
    "3415004",
    "18165001",
    "400210000",
    "21119008",
    "267038008",
    "781645001",
    "251839006"
];

export const CMRU2PhysicalExamSkinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)"
            },
            {
                code: "3415004",
                display: "Cyanosis (finding)"
            },
            {
                code: "18165001",
                display: "Jaundice (finding)"
            },
            {
                code: "400210000",
                display: "Hemangioma (disorder)"
            },
            {
                code: "21119008",
                display:
                    "Pigmented nevus, no International Classification of Diseases for Oncology subtype (morphologic abnormality)"
            },
            {
                code: "267038008",
                display: "Edema (finding)"
            },
            {
                code: "781645001",
                display: "Injury to skin caused by trauma (finding)"
            },
            {
                code: "251839006",
                display: "Fluid balance finding (finding)"
            }
        ]
    }
];

export { CMRU2PhysicalExamSkinGerman as ConceptMap };

export default CMRU2PhysicalExamSkin;
