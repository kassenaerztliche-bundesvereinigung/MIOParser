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
import CMRU5PhysicalExamChestLungRespiratoryTractGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5PhysicalExamChestLungRespiratoryTractGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU5PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "67909005"
    | "298706004";

type CMRU5PhysicalExamChestLungRespiratoryTractType = t.KeyofC<{
    "301272007": null;
    "301273002": null;
    "17077006": null;
    "67909005": null;
    "298706004": null;
}>;

const CMRU5PhysicalExamChestLungRespiratoryTract: CMRU5PhysicalExamChestLungRespiratoryTractType =
    t.keyof({
        "301272007": null,
        "301273002": null,
        "17077006": null,
        "67909005": null,
        "298706004": null
    });
export const CMRU5PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "67909005",
    "298706004"
];

export const CMRU5PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "301272007",
                display: "Chest auscultation finding (finding)"
            },
            {
                code: "301273002",
                display: "Abnormal breath sounds (finding)"
            },
            {
                code: "17077006",
                display: "Abnormal respiratory rate (finding)"
            },
            {
                code: "67909005",
                display: "Chest wall retraction (finding)"
            },
            {
                code: "298706004",
                display: "Finding of appearance of thorax (finding)"
            }
        ]
    }
];

export { CMRU5PhysicalExamChestLungRespiratoryTractGerman as ConceptMap };

export default CMRU5PhysicalExamChestLungRespiratoryTract;
