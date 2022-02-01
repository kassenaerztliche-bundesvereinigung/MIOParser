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

// Diese Conceptmap verknüpft die Codes für Laboruntersuchungen mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRExaminationSnomedGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Snomed_German",
        element: [
            {
                code: "15220000",
                display: "Laboratory test (procedure)",
                target: [
                    {
                        code: "Laboruntersuchungunspezifisch",
                        display: "Laboruntersuchung (unspezifisch)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,704327008=122592007,246093002=19830006,370132008=117363000,704319004=50863008,370130000=705057003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Acellular blood (serum or plasma) specimen (specimen) , Component (attribute) = Blood group antibody (substance) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Plasma (substance) , Property (attribute) = Presence (property) (qualifier value)",
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
                code: "363787002:370130000=118590008,370134009=123029007,704327008=122592007,370132008=30766002,246093002=19830006,704319004=50863008",
                display:
                    "Observable entity (observable entity) : Property (attribute) = Dilution factor expressed as titer (property) (qualifier value) , Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Acellular blood (serum or plasma) specimen (specimen) , Scale type (attribute) = Quantitative (qualifier value) , Component (attribute) = Blood group antibody (substance) , Inheres in (attribute) = Blood group antibody (substance)",
                target: [
                    {
                        code: "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
                        display: "Blutgruppen Antikörper-Suchtest im Serum/Plasma, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=117363000,704319004=50863008,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumNachweis",
                        display: "Röteln Virus Antikörper im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=120737006,370134009=123029007,370132008=30766002,370130000=118569000,704319004=50863008,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Property (attribute) = Arbitrary concentration (property) (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Direct site (attribute) = Serum specimen (specimen)",
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
                code: "363787002:246093002=120737006,370130000=118590008,370134009=123029007,370132008=30766002,704319004=50863008,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Component (attribute) = Rubella virus antibody (substance) , Property (attribute) = Dilution factor expressed as titer (property) (qualifier value) , Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Quantitative (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "RoetelnVirusAntikoerperimSerumTiter",
                        display: "Röteln Virus Antikörper im Serum, Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:246093002=121181000,370134009=123029007,704327008=122575003,246501002=702675006,370132008=117363000,370130000=705057003,704319004=78014005",
                display:
                    "Observable entity (observable entity) : Component (attribute) =  Deoxyribonucleic acid of Chlamydia trachomatis (substance) , Time aspect (attribute) = Single point in time (qualifier value) , Direct site (attribute) = Urine specimen (specimen) , Technique (attribute) = Probe with target amplification technique (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Property (attribute) = Presence (property) (qualifier value) , Inheres in (attribute) =  Urine (substance)",
                target: [
                    {
                        code: "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis",
                        display:
                            "Chlamydia trachomatis DNA aus einer Urinprobe mittels Nukleinsäure-amplifizierendem Test (NAT), Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:370134009=123029007,370132008=117363000,704319004=50863008,246093002=22290004,370130000=705057003,704327008=119364003",
                display:
                    "Observable entity (observable entity) : Time aspect (attribute) = Single point in time (qualifier value) , Scale type (attribute) = Ordinal value (qualifier value) , Inheres in (attribute) = Blood group antibody (substance) , Component (attribute) = Antigen of Hepatitis B virus surface protein (substance) , Property (attribute) = Presence (property) (qualifier value) , Direct site (attribute) = Serum specimen (specimen)",
                target: [
                    {
                        code: "HBsAntigenimSerumNachweis",
                        display: "HBs-Antigen im Serum, Nachweis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:704319004=87612001,370130000=118539007,704327008=119297000,370134009=123029007,246093002=38082009,370132008=30766002",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Property (attribute) = Mass concentration (property) (qualifier value) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Hemoglobin (substance) , Scale type (attribute) = Quantitative (qualifier value)",
                target: [
                    {
                        code: "HaemoglobinimBlutMasseproVolumen",
                        display: "Hämoglobin im Blut, Masse pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,246093002=703062004,370132008=30766002,370130000=118550005",
                display:
                    "Observable entity (observable entity) : Inheres in (attribute) = Blood (substance) , Direct site (attribute) = Blood specimen (specimen) , Time aspect (attribute) = Single point in time (qualifier value) , Component (attribute) = Population of all erythrocytes in portion of fluid (body structure) , Scale type (attribute) = Quantitative (qualifier value) , Property (attribute) = Number concentration (property) (qualifier value)",
                target: [
                    {
                        code: "ErythrozytenimBlutAnzahlproVolumen",
                        display: "Erythrozyten im Blut, Anzahl pro Volumen",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRExaminationSnomedGerman;
