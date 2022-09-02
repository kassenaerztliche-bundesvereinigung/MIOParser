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
import CMRU3PhysicalExamHeadGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3PhysicalExamHeadGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Physical_Exam_Head

type CMRU3PhysicalExamHead =
    | "111235007"
    | "253978002"
    | "248387005"
    | "206200000"
    | "366372002"
    | "23149001:363698007=783207002"
    | "293291000119108";

type CMRU3PhysicalExamHeadType = t.KeyofC<{
    "111235007": null;
    "253978002": null;
    "248387005": null;
    "206200000": null;
    "366372002": null;
    "23149001:363698007=783207002": null;
    "293291000119108": null;
}>;

const CMRU3PhysicalExamHead: CMRU3PhysicalExamHeadType = t.keyof({
    "111235007": null,
    "253978002": null,
    "248387005": null,
    "206200000": null,
    "366372002": null,
    "23149001:363698007=783207002": null,
    "293291000119108": null
});
export const CMRU3PhysicalExamHeadArray: string[] = [
    "111235007",
    "253978002",
    "248387005",
    "206200000",
    "366372002",
    "23149001:363698007=783207002",
    "293291000119108"
];

export const CMRU3PhysicalExamHeadValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "111235007",
                display: "Musculoskeletal disorder of the neck (disorder)"
            },
            {
                code: "253978002",
                display: "Dysmorphic features (finding)"
            },
            {
                code: "248387005",
                display: "Cranial suture finding (finding)"
            },
            {
                code: "206200000",
                display: "Cephalhematoma due to birth trauma (disorder)"
            },
            {
                code: "366372002",
                display: "Finding of level of fontanelle (finding)"
            },
            {
                code: "23149001:363698007=783207002",
                display:
                    "Bone crepitus (finding) : Finding site (attribute) = Bone and/or joint structure of cranium (body structure)"
            },
            {
                code: "293291000119108",
                display: "Acquired postural plagiocephaly (disorder)"
            }
        ]
    }
];

export { CMRU3PhysicalExamHeadGerman as ConceptMap };

export default CMRU3PhysicalExamHead;
