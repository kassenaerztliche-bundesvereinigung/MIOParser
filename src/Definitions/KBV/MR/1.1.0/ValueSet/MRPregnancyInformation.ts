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
import MRPregnancyInformationGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRPregnancyInformationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Pregnancy_Information

type MRPregnancyInformation = "370383002" | "370386005" | "459167000";

type MRPregnancyInformationType = t.KeyofC<{
    "370383002": null;
    "370386005": null;
    "459167000": null;
}>;

const MRPregnancyInformation: MRPregnancyInformationType = t.keyof({
    "370383002": null,
    "370386005": null,
    "459167000": null
});
export const MRPregnancyInformationArray: string[] = [
    "370383002",
    "370386005",
    "459167000"
];

export const MRPregnancyInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "370383002",
                display: "Antenatal ultrasound confirms intrauterine pregnancy (finding)"
            },
            {
                code: "370386005",
                display: "Ultrasound scan - multiple fetus (finding)"
            },
            {
                code: "459167000",
                display: "Monochorionic twin pregnancy (disorder)"
            }
        ]
    }
];

export { MRPregnancyInformationGerman as ConceptMap };

export default MRPregnancyInformation;
