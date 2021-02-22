/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Vaccine_German
type VaccinationVaccineGerman =
    | "Mumps-Impfstoff"
    | "Rota-Impfstoff"
    | "Varizellen-Impfstoff"
    | "Herpes-Zoster-Lebendimpfstoff"
    | "Herpes-Zoster-Totimpfstoff"
    | "Tollwut-Impfstoff"
    | "Polio-Impfstoff"
    | "FSME-Impfstoff"
    | "Japanische-Enzephalitis-Impfstoff"
    | "DiphtherieHaemophilus influenzae B-Pertussis-Tetanus-Hepatitis B-Meningokokken A + C-Impfstoff"
    | "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff"
    | "Diphtherie-Haemophilus-influenzae-B-Pertussis-Tetanus-Hepatitis-B-Impfstoff"
    | "Typhus-Hepatitis-A-Impfstoff"
    | "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff"
    | "Haemophilus-influenzae-B-Hepatitis-B-Impfstoff"
    | "Diphtherie-Hepatitis-B-Tetanus-Impfstoff"
    | "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Impfstoff"
    | "Diphtherie-Hepatitis-B-Pertussis-Tetanus-Impfstoff"
    | "Haemophilus-influenzae-B-Poliomyelitis-Impfstoff"
    | "Diphtherie-Roeteln-Tetanus-Impfstoff"
    | "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Impfstoff"
    | "Diphtherie-Poliomyelitis-Tetanus-Impfstoff"
    | "Roeteln-Mumps-Impfstoff"
    | "Masern-Mumps-Roeteln-Varicella-Impfstoff"
    | "Masern-Roeteln-Impfstoff"
    | "Masern-Mumps-Roeteln-Impfstoff"
    | "Masern-Mumps-Impfstoff"
    | "Hepatitis-A-und-B-Impfstoff"
    | "Tetanus-Diphtherie-Impfstoff"
    | "Pneumokokken-Haemophilus-influenzae-B-Impfstoff"
    | "Haemophilus-influenzae-B-Meningokokken-C-Impfstoff"
    | "Haemophilus-influenzae-B-Pertussis-Impfstoff"
    | "Cholera-Typhus-Impfstoff"
    | "Pockenimpfstoff"
    | "HPV-Impfstoff"
    | "Gelbfieberimpfstoff"
    | "Roetelnimpfstoff"
    | "Masernimpfstoff"
    | "Hepatitis-A-Impfstoff"
    | "Hepatitis-B-Impfstoff"
    | "Influenzaimpfstoff"
    | "Typhusimpfstoff"
    | "Typhus-exanthematicus-Impfstoff"
    | "Tuberkuloseimpfstoff"
    | "Tetanusimpfstoff"
    | "Pneumokokkenimpfstoff"
    | "Pestimpfstoff"
    | "Pertussisimpfstoff"
    | "Pertussis-gereinigtes Antigen-Kombinationen-mit-Toxoiden"
    | "Meningokokkenimpfstoff"
    | "Haemophilus-influenzae-B-Impfstoff"
    | "Diphtherieimpfstoff"
    | "Choleraimpfstoff"
    | "Brucelloseimpfstoff"
    | "Milzbrandimpfstoff"
    | "Immunglobuline-normal-human"
    | "Anti-D-Immunglobulin"
    | "Tetanus-Immunglobulin"
    | "Varicella-Zoster-Immunglobulin"
    | "Hepatitis-B-Immunglobulin"
    | "Tollwut-Immunglobulin"
    | "Cytomegalievirus-Immunglobulin"
    | "Palivizumab"
    | "Bezlotoxumab"
    | "Impfstoffe";

const VaccinationVaccineGerman: t.Type<VaccinationVaccineGerman> = t.union([
    t.literal("Mumps-Impfstoff"),
    t.literal("Rota-Impfstoff"),
    t.literal("Varizellen-Impfstoff"),
    t.literal("Herpes-Zoster-Lebendimpfstoff"),
    t.literal("Herpes-Zoster-Totimpfstoff"),
    t.literal("Tollwut-Impfstoff"),
    t.literal("Polio-Impfstoff"),
    t.literal("FSME-Impfstoff"),
    t.literal("Japanische-Enzephalitis-Impfstoff"),
    t.literal(
        "DiphtherieHaemophilus influenzae B-Pertussis-Tetanus-Hepatitis B-Meningokokken A + C-Impfstoff"
    ),
    t.literal("Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff"),
    t.literal(
        "Diphtherie-Haemophilus-influenzae-B-Pertussis-Tetanus-Hepatitis-B-Impfstoff"
    ),
    t.literal("Typhus-Hepatitis-A-Impfstoff"),
    t.literal(
        "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff"
    ),
    t.literal("Haemophilus-influenzae-B-Hepatitis-B-Impfstoff"),
    t.literal("Diphtherie-Hepatitis-B-Tetanus-Impfstoff"),
    t.literal(
        "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Impfstoff"
    ),
    t.literal("Diphtherie-Hepatitis-B-Pertussis-Tetanus-Impfstoff"),
    t.literal("Haemophilus-influenzae-B-Poliomyelitis-Impfstoff"),
    t.literal("Diphtherie-Roeteln-Tetanus-Impfstoff"),
    t.literal("Diphtherie-Pertussis-Poliomyelitis-Tetanus-Impfstoff"),
    t.literal("Diphtherie-Poliomyelitis-Tetanus-Impfstoff"),
    t.literal("Roeteln-Mumps-Impfstoff"),
    t.literal("Masern-Mumps-Roeteln-Varicella-Impfstoff"),
    t.literal("Masern-Roeteln-Impfstoff"),
    t.literal("Masern-Mumps-Roeteln-Impfstoff"),
    t.literal("Masern-Mumps-Impfstoff"),
    t.literal("Hepatitis-A-und-B-Impfstoff"),
    t.literal("Tetanus-Diphtherie-Impfstoff"),
    t.literal("Pneumokokken-Haemophilus-influenzae-B-Impfstoff"),
    t.literal("Haemophilus-influenzae-B-Meningokokken-C-Impfstoff"),
    t.literal("Haemophilus-influenzae-B-Pertussis-Impfstoff"),
    t.literal("Cholera-Typhus-Impfstoff"),
    t.literal("Pockenimpfstoff"),
    t.literal("HPV-Impfstoff"),
    t.literal("Gelbfieberimpfstoff"),
    t.literal("Roetelnimpfstoff"),
    t.literal("Masernimpfstoff"),
    t.literal("Hepatitis-A-Impfstoff"),
    t.literal("Hepatitis-B-Impfstoff"),
    t.literal("Influenzaimpfstoff"),
    t.literal("Typhusimpfstoff"),
    t.literal("Typhus-exanthematicus-Impfstoff"),
    t.literal("Tuberkuloseimpfstoff"),
    t.literal("Tetanusimpfstoff"),
    t.literal("Pneumokokkenimpfstoff"),
    t.literal("Pestimpfstoff"),
    t.literal("Pertussisimpfstoff"),
    t.literal("Pertussis-gereinigtes Antigen-Kombinationen-mit-Toxoiden"),
    t.literal("Meningokokkenimpfstoff"),
    t.literal("Haemophilus-influenzae-B-Impfstoff"),
    t.literal("Diphtherieimpfstoff"),
    t.literal("Choleraimpfstoff"),
    t.literal("Brucelloseimpfstoff"),
    t.literal("Milzbrandimpfstoff"),
    t.literal("Immunglobuline-normal-human"),
    t.literal("Anti-D-Immunglobulin"),
    t.literal("Tetanus-Immunglobulin"),
    t.literal("Varicella-Zoster-Immunglobulin"),
    t.literal("Hepatitis-B-Immunglobulin"),
    t.literal("Tollwut-Immunglobulin"),
    t.literal("Cytomegalievirus-Immunglobulin"),
    t.literal("Palivizumab"),
    t.literal("Bezlotoxumab"),
    t.literal("Impfstoffe")
]);

export const VaccinationVaccineGermanArray: string[] = [
    "Mumps-Impfstoff",
    "Rota-Impfstoff",
    "Varizellen-Impfstoff",
    "Herpes-Zoster-Lebendimpfstoff",
    "Herpes-Zoster-Totimpfstoff",
    "Tollwut-Impfstoff",
    "Polio-Impfstoff",
    "FSME-Impfstoff",
    "Japanische-Enzephalitis-Impfstoff",
    "DiphtherieHaemophilus influenzae B-Pertussis-Tetanus-Hepatitis B-Meningokokken A + C-Impfstoff",
    "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff",
    "Diphtherie-Haemophilus-influenzae-B-Pertussis-Tetanus-Hepatitis-B-Impfstoff",
    "Typhus-Hepatitis-A-Impfstoff",
    "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff",
    "Haemophilus-influenzae-B-Hepatitis-B-Impfstoff",
    "Diphtherie-Hepatitis-B-Tetanus-Impfstoff",
    "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Impfstoff",
    "Diphtherie-Hepatitis-B-Pertussis-Tetanus-Impfstoff",
    "Haemophilus-influenzae-B-Poliomyelitis-Impfstoff",
    "Diphtherie-Roeteln-Tetanus-Impfstoff",
    "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Impfstoff",
    "Diphtherie-Poliomyelitis-Tetanus-Impfstoff",
    "Roeteln-Mumps-Impfstoff",
    "Masern-Mumps-Roeteln-Varicella-Impfstoff",
    "Masern-Roeteln-Impfstoff",
    "Masern-Mumps-Roeteln-Impfstoff",
    "Masern-Mumps-Impfstoff",
    "Hepatitis-A-und-B-Impfstoff",
    "Tetanus-Diphtherie-Impfstoff",
    "Pneumokokken-Haemophilus-influenzae-B-Impfstoff",
    "Haemophilus-influenzae-B-Meningokokken-C-Impfstoff",
    "Haemophilus-influenzae-B-Pertussis-Impfstoff",
    "Cholera-Typhus-Impfstoff",
    "Pockenimpfstoff",
    "HPV-Impfstoff",
    "Gelbfieberimpfstoff",
    "Roetelnimpfstoff",
    "Masernimpfstoff",
    "Hepatitis-A-Impfstoff",
    "Hepatitis-B-Impfstoff",
    "Influenzaimpfstoff",
    "Typhusimpfstoff",
    "Typhus-exanthematicus-Impfstoff",
    "Tuberkuloseimpfstoff",
    "Tetanusimpfstoff",
    "Pneumokokkenimpfstoff",
    "Pestimpfstoff",
    "Pertussisimpfstoff",
    "Pertussis-gereinigtes Antigen-Kombinationen-mit-Toxoiden",
    "Meningokokkenimpfstoff",
    "Haemophilus-influenzae-B-Impfstoff",
    "Diphtherieimpfstoff",
    "Choleraimpfstoff",
    "Brucelloseimpfstoff",
    "Milzbrandimpfstoff",
    "Immunglobuline-normal-human",
    "Anti-D-Immunglobulin",
    "Tetanus-Immunglobulin",
    "Varicella-Zoster-Immunglobulin",
    "Hepatitis-B-Immunglobulin",
    "Tollwut-Immunglobulin",
    "Cytomegalievirus-Immunglobulin",
    "Palivizumab",
    "Bezlotoxumab",
    "Impfstoffe"
];

export default VaccinationVaccineGerman;
