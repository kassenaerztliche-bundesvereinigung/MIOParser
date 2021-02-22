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

// Diese Conceptmap verknüpft die Codes für Laboruntersuchungen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const MRExaminationLoincGerman: ConceptMap = [
    {
        source: "http://loinc.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Loinc_German",
        element: [
            {
                code: "30954-2",
                display: "Relevant diagnostic tests/laboratory data Narrative",
                target: [
                    {
                        code: "Laboruntersuchungunspezifisch",
                        display: "Laboruntersuchung (unspezifisch)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "890-4",
                display: "Blood group antibody screen [Presence] in Serum or Plasma",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis",
                        display:
                            "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "15343-7",
                display: "Blood group antibody screen [Titer] in Serum or Plasma",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
                        display: "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumNachweis",
                        display: "Röteln Virus Antikörper im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8013-5",
                display: "Rubella virus Ab [Units/volume] in Serum",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen",
                        display:
                            "Röteln Virus Antikörper im Serum, Konzentration IE pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22497-2",
                display: "Rubella virus Ab [Titer] in Serum",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumTiter",
                        display: "Röteln Virus Antikörper im Serum, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "5195-3",
                display: "Hepatitis B virus surface Ag [Presence] in Serum",
                target: [
                    {
                        code: "HBsAntigenimSerumNachweis",
                        display: "HBs-Antigen im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "718-7",
                display: "Hemoglobin [Mass/volume] in Blood",
                target: [
                    {
                        code: "HaemoglobinimBlutMasseproVolumen",
                        display: "Hämoglobin im Blut, Masse pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59260-0",
                display: "Hemoglobin [Moles/volume] in Blood",
                target: [
                    {
                        code: "HaemoglobinimBlutMolproVolumen",
                        display: "Hämoglobin im Blut, Mol pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26453-1",
                display: "Erythrocytes [#/volume] in Blood",
                target: [
                    {
                        code: "ErythrozytenimBlutAnzahlproVolumen",
                        display: "Erythrozyten im Blut, Anzahl pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22587-0",
                display: "Treponema pallidum Ab [Presence] in Serum",
                target: [
                    {
                        code: "LaboruntersuchungLSR",
                        display: "Laboruntersuchung (LSR)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6357-8",
                display:
                    "Chlamydia trachomatis DNA [Presence] in Urine by NAA with probe detection",
                target: [
                    {
                        code:
                            "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis",
                        display:
                            "Chlamydia trachomatis DNA aus einer Urinprobe mittels Nukleinsäure-amplifizierendem Test (NAT), Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRExaminationLoincGerman;
