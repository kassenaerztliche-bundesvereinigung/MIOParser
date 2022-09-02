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
import CMRU2U3PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U3PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U3_Physical_Exam_Eyes

type CMRU2U3PhysicalExamEyes = "737269000" | "307699005" | "400964006";

type CMRU2U3PhysicalExamEyesType = t.KeyofC<{
    "737269000": null;
    "307699005": null;
    "400964006": null;
}>;

const CMRU2U3PhysicalExamEyes: CMRU2U3PhysicalExamEyesType = t.keyof({
    "737269000": null,
    "307699005": null,
    "400964006": null
});
export const CMRU2U3PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006"
];

export const CMRU2U3PhysicalExamEyesValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)"
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)"
            },
            {
                code: "400964006",
                display: "Iris transillumination (finding)"
            }
        ]
    }
];

export { CMRU2U3PhysicalExamEyesGerman as ConceptMap };

export default CMRU2U3PhysicalExamEyes;
