/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Prior_Disease_German
type VaccinationPriorDiseaseGerman =
    | "Nicht-aufgefuehrt-unspezifiziert"
    | "Pertussis/Keuchhusten"
    | "Gelbfieber"
    | "FSME-Fruehsommer-Meningoenzephalitis"
    | "Hepatitis-B"
    | "Hepatitis-A"
    | "Roeteln"
    | "Mumps"
    | "Masern"
    | "Varizellen-Windpocken";

const VaccinationPriorDiseaseGerman: t.Type<VaccinationPriorDiseaseGerman> = t.union([
    t.literal("Nicht-aufgefuehrt-unspezifiziert"),
    t.literal("Pertussis/Keuchhusten"),
    t.literal("Gelbfieber"),
    t.literal("FSME-Fruehsommer-Meningoenzephalitis"),
    t.literal("Hepatitis-B"),
    t.literal("Hepatitis-A"),
    t.literal("Roeteln"),
    t.literal("Mumps"),
    t.literal("Masern"),
    t.literal("Varizellen-Windpocken")
]);

export const VaccinationPriorDiseaseGermanArray: string[] = [
    "Nicht-aufgefuehrt-unspezifiziert",
    "Pertussis/Keuchhusten",
    "Gelbfieber",
    "FSME-Fruehsommer-Meningoenzephalitis",
    "Hepatitis-B",
    "Hepatitis-A",
    "Roeteln",
    "Mumps",
    "Masern",
    "Varizellen-Windpocken"
];

export default VaccinationPriorDiseaseGerman;
