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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_TargetDisease

type VaccinationTargetDisease =
    | "840539006"
    | "67924001"
    | "240532009"
    | "16541001"
    | "4740000"
    | "38907003"
    | "36653000"
    | "18624000"
    | "14168008"
    | "398102009"
    | "36989005"
    | "14189004"
    | "40468003"
    | "66071002"
    | "6142004"
    | "52947006"
    | "16901001"
    | "4834000"
    | "56717001"
    | "76902006"
    | "16814004"
    | "58750007"
    | "27836007"
    | "23511006"
    | "709410003"
    | "397430003"
    | "63650001"
    | "75702008"
    | "409498004"
    | "39111003"
    | "28944009"
    | "55735004"
    | "186431008"
    | "307333004"
    | "64572001"
    | "40733004";

type VaccinationTargetDiseaseType = t.KeyofC<{
    "840539006": null;
    "67924001": null;
    "240532009": null;
    "16541001": null;
    "4740000": null;
    "38907003": null;
    "36653000": null;
    "18624000": null;
    "14168008": null;
    "398102009": null;
    "36989005": null;
    "14189004": null;
    "40468003": null;
    "66071002": null;
    "6142004": null;
    "52947006": null;
    "16901001": null;
    "4834000": null;
    "56717001": null;
    "76902006": null;
    "16814004": null;
    "58750007": null;
    "27836007": null;
    "23511006": null;
    "709410003": null;
    "397430003": null;
    "63650001": null;
    "75702008": null;
    "409498004": null;
    "39111003": null;
    "28944009": null;
    "55735004": null;
    "186431008": null;
    "307333004": null;
    "64572001": null;
    "40733004": null;
}>;

const VaccinationTargetDisease: VaccinationTargetDiseaseType = t.keyof({
    "840539006": null,
    "67924001": null,
    "240532009": null,
    "16541001": null,
    "4740000": null,
    "38907003": null,
    "36653000": null,
    "18624000": null,
    "14168008": null,
    "398102009": null,
    "36989005": null,
    "14189004": null,
    "40468003": null,
    "66071002": null,
    "6142004": null,
    "52947006": null,
    "16901001": null,
    "4834000": null,
    "56717001": null,
    "76902006": null,
    "16814004": null,
    "58750007": null,
    "27836007": null,
    "23511006": null,
    "709410003": null,
    "397430003": null,
    "63650001": null,
    "75702008": null,
    "409498004": null,
    "39111003": null,
    "28944009": null,
    "55735004": null,
    "186431008": null,
    "307333004": null,
    "64572001": null,
    "40733004": null
});
export const VaccinationTargetDiseaseArray: string[] = [
    "840539006",
    "67924001",
    "240532009",
    "16541001",
    "4740000",
    "38907003",
    "36653000",
    "18624000",
    "14168008",
    "398102009",
    "36989005",
    "14189004",
    "40468003",
    "66071002",
    "6142004",
    "52947006",
    "16901001",
    "4834000",
    "56717001",
    "76902006",
    "16814004",
    "58750007",
    "27836007",
    "23511006",
    "709410003",
    "397430003",
    "63650001",
    "75702008",
    "409498004",
    "39111003",
    "28944009",
    "55735004",
    "186431008",
    "307333004",
    "64572001",
    "40733004"
];

export const VaccinationTargetDiseaseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "840539006",
                display:
                    "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
            },
            {
                code: "67924001",
                display: "Smallpox (disorder)"
            },
            {
                code: "240532009",
                display: "Human papillomavirus infection (disorder)"
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)"
            },
            {
                code: "4740000",
                display: "Herpes zoster (disorder)"
            },
            {
                code: "38907003",
                display: "Varicella (disorder)"
            },
            {
                code: "36653000",
                display: "Rubella (disorder)"
            },
            {
                code: "18624000",
                display: "Disease caused by Rotavirus (disorder)"
            },
            {
                code: "14168008",
                display: "Rabies (disorder)"
            },
            {
                code: "398102009",
                display: "Acute poliomyelitis (disorder)"
            },
            {
                code: "36989005",
                display: "Mumps (disorder)"
            },
            {
                code: "14189004",
                display: "Measles (disorder)"
            },
            {
                code: "40468003",
                display: "Viral hepatitis, type A (disorder)"
            },
            {
                code: "66071002",
                display: "Viral hepatitis type B (disorder)"
            },
            {
                code: "6142004",
                display: "Influenza (disorder)"
            },
            {
                code: "52947006",
                display: "Japanese encephalitis virus disease (disorder)"
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)"
            },
            {
                code: "4834000",
                display: "Typhoid fever (disorder)"
            },
            {
                code: "56717001",
                display: "Tuberculosis (disorder)"
            },
            {
                code: "76902006",
                display: "Tetanus (disorder)"
            },
            {
                code: "16814004",
                display: "Pneumococcal infectious disease (disorder)"
            },
            {
                code: "58750007",
                display: "Plague (disorder)"
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)"
            },
            {
                code: "23511006",
                display: "Meningococcal infectious disease (disorder)"
            },
            {
                code: "709410003",
                display: "Haemophilus influenzae type b infection (disorder)"
            },
            {
                code: "397430003",
                display: "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
            },
            {
                code: "63650001",
                display: "Cholera (disorder)"
            },
            {
                code: "75702008",
                display: "Brucellosis (disorder)"
            },
            {
                code: "409498004",
                display: "Anthrax (disorder)"
            },
            {
                code: "39111003",
                display: "Louse-borne typhus (disorder)"
            },
            {
                code: "28944009",
                display: "Cytomegalovirus infection (disorder)"
            },
            {
                code: "55735004",
                display: "Respiratory syncytial virus infection (disorder)"
            },
            {
                code: "186431008",
                display: "Clostridioides difficile infection (disorder)"
            },
            {
                code: "307333004",
                display: "Rhesus isoimmunization due to anti-D (disorder)"
            },
            {
                code: "64572001",
                display: "Disease (disorder)"
            },
            {
                code: "40733004",
                display: "Infectious disease (disorder)"
            }
        ]
    }
];

export default VaccinationTargetDisease;
