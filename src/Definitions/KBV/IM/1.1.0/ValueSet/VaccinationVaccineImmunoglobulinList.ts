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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_Immunoglobulin_List

type VaccinationVaccineImmunoglobulinList =
    | "714569001"
    | "786224004"
    | "384706007"
    | "62294009"
    | "9542007"
    | "80834004"
    | "9778000"
    | "108725001"
    | "763703008";

type VaccinationVaccineImmunoglobulinListType = t.KeyofC<{
    "714569001": null;
    "786224004": null;
    "384706007": null;
    "62294009": null;
    "9542007": null;
    "80834004": null;
    "9778000": null;
    "108725001": null;
    "763703008": null;
}>;

const VaccinationVaccineImmunoglobulinList: VaccinationVaccineImmunoglobulinListType =
    t.keyof({
        "714569001": null,
        "786224004": null,
        "384706007": null,
        "62294009": null,
        "9542007": null,
        "80834004": null,
        "9778000": null,
        "108725001": null,
        "763703008": null
    });
export const VaccinationVaccineImmunoglobulinListArray: string[] = [
    "714569001",
    "786224004",
    "384706007",
    "62294009",
    "9542007",
    "80834004",
    "9778000",
    "108725001",
    "763703008"
];

export const VaccinationVaccineImmunoglobulinListValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "714569001",
                display:
                    "Product containing normal immunoglobulin human (medicinal product)"
            },
            {
                code: "786224004",
                display:
                    "Product containing human anti-D immunoglobulin (medicinal product)|"
            },
            {
                code: "384706007",
                display: "Product containing tetanus antitoxin (medicinal product)"
            },
            {
                code: "62294009",
                display:
                    "Product containing Varicella-zoster virus antibody (medicinal product)"
            },
            {
                code: "9542007",
                display:
                    "Product containing Hepatitis B surface antigen immunoglobulin (medicinal product)"
            },
            {
                code: "80834004",
                display:
                    "Product containing rabies human immune globulin (medicinal product)"
            },
            {
                code: "9778000",
                display: "Product containing Cytomegalovirus antibody (medicinal product)"
            },
            {
                code: "108725001",
                display: "Product containing palivizumab (medicinal product)"
            },
            {
                code: "763703008",
                display: "Product containing bezlotoxumab (medicinal product)"
            }
        ]
    }
];

export default VaccinationVaccineImmunoglobulinList;
