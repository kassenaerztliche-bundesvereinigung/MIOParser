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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_TargetDisease_AlphaID

type VaccinationTargetDiseaseAlphaID =
    | "I130800"
    | "I13550"
    | "I13965"
    | "I109141"
    | "I130677"
    | "I130678"
    | "I130668"
    | "I130674"
    | "I13614"
    | "I130676"
    | "I130671"
    | "I15008"
    | "I14609"
    | "I23502"
    | "I23483"
    | "I14036"
    | "I15771"
    | "I15777"
    | "I23144"
    | "I14083"
    | "I1064"
    | "I14685"
    | "I14707"
    | "I14368"
    | "I130672"
    | "I15064"
    | "I14372"
    | "I130669"
    | "I15222"
    | "I15432"
    | "I22407"
    | "I22433"
    | "I22454"
    | "I15579";

type VaccinationTargetDiseaseAlphaIDType = t.KeyofC<{
    I130800: null;
    I13550: null;
    I13965: null;
    I109141: null;
    I130677: null;
    I130678: null;
    I130668: null;
    I130674: null;
    I13614: null;
    I130676: null;
    I130671: null;
    I15008: null;
    I14609: null;
    I23502: null;
    I23483: null;
    I14036: null;
    I15771: null;
    I15777: null;
    I23144: null;
    I14083: null;
    I1064: null;
    I14685: null;
    I14707: null;
    I14368: null;
    I130672: null;
    I15064: null;
    I14372: null;
    I130669: null;
    I15222: null;
    I15432: null;
    I22407: null;
    I22433: null;
    I22454: null;
    I15579: null;
}>;

const VaccinationTargetDiseaseAlphaID: VaccinationTargetDiseaseAlphaIDType = t.keyof({
    I130800: null,
    I13550: null,
    I13965: null,
    I109141: null,
    I130677: null,
    I130678: null,
    I130668: null,
    I130674: null,
    I13614: null,
    I130676: null,
    I130671: null,
    I15008: null,
    I14609: null,
    I23502: null,
    I23483: null,
    I14036: null,
    I15771: null,
    I15777: null,
    I23144: null,
    I14083: null,
    I1064: null,
    I14685: null,
    I14707: null,
    I14368: null,
    I130672: null,
    I15064: null,
    I14372: null,
    I130669: null,
    I15222: null,
    I15432: null,
    I22407: null,
    I22433: null,
    I22454: null,
    I15579: null
});
export const VaccinationTargetDiseaseAlphaIDArray: string[] = [
    "I130800",
    "I13550",
    "I13965",
    "I109141",
    "I130677",
    "I130678",
    "I130668",
    "I130674",
    "I13614",
    "I130676",
    "I130671",
    "I15008",
    "I14609",
    "I23502",
    "I23483",
    "I14036",
    "I15771",
    "I15777",
    "I23144",
    "I14083",
    "I1064",
    "I14685",
    "I14707",
    "I14368",
    "I130672",
    "I15064",
    "I14372",
    "I130669",
    "I15222",
    "I15432",
    "I22407",
    "I22433",
    "I22454",
    "I15579"
];

export const VaccinationTargetDiseaseAlphaIDValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/alpha-id",
        concept: [
            {
                code: "I130800",
                display: "COVID-19 o.n.A."
            },
            {
                code: "I13550",
                display: "Brucellose"
            },
            {
                code: "I13965",
                display: "Fleckfieber"
            },
            {
                code: "I109141",
                display: "Rh-Unverträglichkeit bei Schwangerschaft"
            },
            {
                code: "I130677",
                display: "Zytomegalieviren-Infektion"
            },
            {
                code: "I130678",
                display: "Respiratory-Syncytial-Viren-Infektion"
            },
            {
                code: "I130668",
                display: "Clostridioides-difficile-Infektion"
            },
            {
                code: "I130674",
                display: "Haemophilus-influenzae-Typ-B-Infektion"
            },
            {
                code: "I13614",
                display: "Cholera"
            },
            {
                code: "I130676",
                display: "HPV [Humanes Papillomavirus]-Infektion"
            },
            {
                code: "I130671",
                display: "Meningokokken-Infektion"
            },
            {
                code: "I15008",
                display: "Pest"
            },
            {
                code: "I14609",
                display: "Masern"
            },
            {
                code: "I23502",
                display: "Diphtherie"
            },
            {
                code: "I23483",
                display: "FSME [Zentraleuropäische Frühsommer-Meningoenzephalitis]"
            },
            {
                code: "I14036",
                display: "Gelbfieber"
            },
            {
                code: "I15771",
                display: "Hepatitis A"
            },
            {
                code: "I15777",
                display: "Hepatitis B"
            },
            {
                code: "I23144",
                display: "Herpes zoster"
            },
            {
                code: "I14083",
                display: "Grippe [Influenza]"
            },
            {
                code: "I1064",
                display: "Japanische Enzephalitis"
            },
            {
                code: "I14685",
                display: "Milzbrand"
            },
            {
                code: "I14707",
                display: "Mumps"
            },
            {
                code: "I14368",
                display: "Pertussis"
            },
            {
                code: "I130672",
                display: "Pneumokokken-Infektion"
            },
            {
                code: "I15064",
                display: "Pocken"
            },
            {
                code: "I14372",
                display: "Poliomyelitis"
            },
            {
                code: "I130669",
                display: "Rotaviren-Infektion"
            },
            {
                code: "I15222",
                display: "Röteln"
            },
            {
                code: "I15432",
                display: "Tetanus-Infektion"
            },
            {
                code: "I22407",
                display: "Tollwut"
            },
            {
                code: "I22433",
                display: "Tuberkulose"
            },
            {
                code: "I22454",
                display: "Typhus"
            },
            {
                code: "I15579",
                display: "Windpocken"
            }
        ]
    }
];

export default VaccinationTargetDiseaseAlphaID;
