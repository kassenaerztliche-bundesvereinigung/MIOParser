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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_Tuberculin

type VaccinationLabImmuneReactionTestPresenceTuberculin =
    | "268376005"
    | "268375009"
    | "440662009"
    | "440661002";

type VaccinationLabImmuneReactionTestPresenceTuberculinType = t.KeyofC<{
    "268376005": null;
    "268375009": null;
    "440662009": null;
    "440661002": null;
}>;

const VaccinationLabImmuneReactionTestPresenceTuberculin: VaccinationLabImmuneReactionTestPresenceTuberculinType =
    t.keyof({
        "268376005": null,
        "268375009": null,
        "440662009": null,
        "440661002": null
    });
export const VaccinationLabImmuneReactionTestPresenceTuberculinArray: string[] = [
    "268376005",
    "268375009",
    "440662009",
    "440661002"
];

export const VaccinationLabImmuneReactionTestPresenceTuberculinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "268376005",
                display: "Mantoux: positive (finding)"
            },
            {
                code: "268375009",
                display: "Mantoux: negative (finding)"
            },
            {
                code: "440662009",
                display: "Interferon gamma assay positive (finding)"
            },
            {
                code: "440661002",
                display: "Interferon gamma assay negative (finding)"
            }
        ]
    }
];

export default VaccinationLabImmuneReactionTestPresenceTuberculin;
