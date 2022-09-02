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
import CMRU2PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Physical_Exam_Mouth_Nose

type CMRU2PhysicalExamMouthNose =
    | "300255008"
    | "449790007"
    | "125593007"
    | "65476007:363698007=21974007"
    | "232209000";

type CMRU2PhysicalExamMouthNoseType = t.KeyofC<{
    "300255008": null;
    "449790007": null;
    "125593007": null;
    "65476007:363698007=21974007": null;
    "232209000": null;
}>;

const CMRU2PhysicalExamMouthNose: CMRU2PhysicalExamMouthNoseType = t.keyof({
    "300255008": null,
    "449790007": null,
    "125593007": null,
    "65476007:363698007=21974007": null,
    "232209000": null
});
export const CMRU2PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "449790007",
    "125593007",
    "65476007:363698007=21974007",
    "232209000"
];

export const CMRU2PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "449790007",
                display: "Orofacial cleft (disorder)"
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            },
            {
                code: "65476007:363698007=21974007",
                display:
                    "Abnormal size (finding) : Finding site (attribute) = Tongue structure (body structure)"
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)"
            }
        ]
    }
];

export { CMRU2PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU2PhysicalExamMouthNose;
