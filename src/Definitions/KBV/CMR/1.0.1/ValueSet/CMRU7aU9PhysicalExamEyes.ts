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
import CMRU7aU9PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aU9PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_U9_Physical_Exam_Eyes

type CMRU7aU9PhysicalExamEyes =
    | "737269000"
    | "307699005"
    | "22066006"
    | "34241000119104"
    | "301937002"
    | "252853008:363713009=263654008"
    | "342061000119102"
    | "336451000119108"
    | "3289004";

type CMRU7aU9PhysicalExamEyesType = t.KeyofC<{
    "737269000": null;
    "307699005": null;
    "22066006": null;
    "34241000119104": null;
    "301937002": null;
    "252853008:363713009=263654008": null;
    "342061000119102": null;
    "336451000119108": null;
    "3289004": null;
}>;

const CMRU7aU9PhysicalExamEyes: CMRU7aU9PhysicalExamEyesType = t.keyof({
    "737269000": null,
    "307699005": null,
    "22066006": null,
    "34241000119104": null,
    "301937002": null,
    "252853008:363713009=263654008": null,
    "342061000119102": null,
    "336451000119108": null,
    "3289004": null
});
export const CMRU7aU9PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "22066006",
    "34241000119104",
    "301937002",
    "252853008:363713009=263654008",
    "342061000119102",
    "336451000119108",
    "3289004"
];

export const CMRU7aU9PhysicalExamEyesValueSet: ValueSet = [
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
                code: "22066006",
                display: "Strabismus (disorder)"
            },
            {
                code: "34241000119104",
                display: "Ocular torticollis (disorder)"
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)"
            },
            {
                code: "252853008:363713009=263654008",
                display:
                    "Stereotests (procedure) : Has interpretation (attribute) = Abnormal (qualifier value)"
            },
            {
                code: "342061000119102",
                display: "Amblyopia of left eye (disorder)"
            },
            {
                code: "336451000119108",
                display: "Amblyopia of right eye (disorder)"
            },
            {
                code: "3289004",
                display: "Anisometropia (disorder)"
            }
        ]
    }
];

export { CMRU7aU9PhysicalExamEyesGerman as ConceptMap };

export default CMRU7aU9PhysicalExamEyes;
