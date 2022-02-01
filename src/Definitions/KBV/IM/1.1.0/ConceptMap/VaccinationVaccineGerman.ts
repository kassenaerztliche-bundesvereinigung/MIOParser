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

// Diese Conceptmap verknüpft die SNOMED CT® Impfstoffcodes mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const VaccinationVaccineGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Vaccine_German",
        element: [
            {
                code: "1119305005",
                display:
                    "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 antigen (medicinal product)",
                target: [
                    {
                        code: "Covid19Impfstoff",
                        display: "Covid-19-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1119349007",
                display:
                    "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)",
                target: [
                    {
                        code: "Covid19Impfstoff",
                        display: "Covid-19-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871875004",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                target: [
                    {
                        code: "PertussisgereinigtesAntigenKombinationenmitToxoidenPertussisTetanusDiphtherieImpfstoff",
                        display:
                            "Pertussis, gereinigtes Antigen, Kombinationen mit Toxoiden (Pertussis, Tetanus, Diphtherie-Impfstoff))",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37146000",
                display: "Typhus vaccine (product)",
                target: [
                    {
                        code: "TyphusexanthematicusImpfstoff",
                        display: "Typhus (exanthematicus)-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2221000221107",
                display:
                    "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)",
                target: [
                    {
                        code: "VarizellenImpfstoff",
                        display: "Varizellen-Impfstoff",
                        equivalence: "equivalent"
                    },
                    {
                        code: "HerpesZosterLebendimpfstoff",
                        display: "Herpes Zoster-Lebendimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836498007+836388000",
                display:
                    "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)",
                target: [
                    {
                        code: "RoetelnMumpsImpfstoff",
                        display: "Röteln, Mumps-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871729003+836380007+601000221108+863911006+836374004+871871008",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
                target: [
                    {
                        code: "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBMeningokokkenACImpfstoff",
                        display:
                            "Diphtherie, Haemophilus influenzae  B, Pertussis, Tetanus, Hepatitis B, Meningokokken  A + C-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871891001",
                display:
                    "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)",
                target: [
                    {
                        code: "DiphtheriePertussisPoliomyelitisTetanusHepatitisBImpfstoff",
                        display:
                            "Diphtherie-Pertussis, Poliomyelitis, Tetanus, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871729003+836380007+601000221108+863911006+836374004",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                target: [
                    {
                        code: "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBImpfstoff",
                        display:
                            "Diphtherie-Haemophilus influenzae  B, Pertussis, Tetanus, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871804001",
                display:
                    "Vaccine product containing only Hepatitis A virus and Salmonella enterica subspecies enterica serovar Typhi antigens (medicinal product)",
                target: [
                    {
                        code: "TyphusHepatitisAImpfstoff",
                        display: "Typhus-Hepatitis A-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871895005",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                target: [
                    {
                        code: "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusHepatitisBImpfstoff",
                        display:
                            "Diphtherie-Haemophilus influenzae  B-Pertussis, Poliomyelitis, Tetanus, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871806004",
                display:
                    "Vaccine product containing only Haemophilus influenzae type B and Hepatitis B virus antigens (medicinal product)",
                target: [
                    {
                        code: "HaemophilusinfluenzaeBHepatitisBImpfstoff",
                        display: "Haemophilus influenzae B, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871729003+836374004+863911006",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                target: [
                    {
                        code: "DiphtherieHepatitisBTetanusImpfstoff",
                        display: "Diphtherie, Hepatitis B, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871887006",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)",
                target: [
                    {
                        code: "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusImpfstoff",
                        display:
                            "Diphtherie-Haemophilus influenzae  B, Pertussis, Poliomyelitis, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "863911006+836374004+601000221108+836381006",
                display:
                    "Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                target: [
                    {
                        code: "DiphtherieHepatitisBPertussisTetanusImpfstoff",
                        display: "Diphtherie, Hepatitis B, Pertussis, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836380007+1031000221108",
                display:
                    "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Human poliovirus antigen (medicinal product)",
                target: [
                    {
                        code: "HaemophilusinfluenzaeBPoliomyelitisImpfstoff",
                        display: "Haemophilus influenzae B,  Poliomyelitis-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871729003+836388000+863911006",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                target: [
                    {
                        code: "DiphtherieRoetelnTetanusImpfstoff",
                        display: "Diphtherie, Röteln, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871878002",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                target: [
                    {
                        code: "DiphtheriePertussisPoliomyelitisTetanusImpfstoff",
                        display:
                            "Diphtherie, Pertussis, Poliomyelitis, Tetanus- Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871837004",
                display:
                    "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                target: [
                    {
                        code: "DiphtheriePoliomyelitisTetanusImpfstoff",
                        display: "Diphtherie, Poliomyelitis, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871908002",
                display:
                    "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                target: [
                    {
                        code: "MasernMumpsRoetelnVaricellaImpfstoff",
                        display: "Masern, Mumps, Röteln, Varicella-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836382004+836388000",
                display:
                    "Vaccine product containing Measles morbillivirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)",
                target: [
                    {
                        code: "MasernRoetelnImpfstoff",
                        display: "Masern, Röteln-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871831003",
                display:
                    "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                target: [
                    {
                        code: "MasernMumpsRoetelnMMRImpfstoff",
                        display: "Masern, Mumps, Röteln (MMR) - Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836498007+836382004",
                display:
                    "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Measles morbillivirus antigen (medicinal product)",
                target: [
                    {
                        code: "MasernMumpsImpfstoff",
                        display: "Masern, Mumps-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871803007",
                display:
                    "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)",
                target: [
                    {
                        code: "HepatitisAundBImpfstoff",
                        display: "Hepatitis A und B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871826000",
                display:
                    "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                target: [
                    {
                        code: "TetanusDiphtherieImpfstoff",
                        display: "Tetanus, Diphtherie-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836398006+836380007",
                display:
                    "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)",
                target: [
                    {
                        code: "PneumokokkenHaemophilusinfluenzaeBImpfstoff",
                        display: "Pneumokokken, Haemophilus influenzae B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836500008",
                display:
                    "Vaccine product containing only Haemophilus influenzae type B and Neisseria meningitidis serogroup C antigens (medicinal product)",
                target: [
                    {
                        code: "HaemophilusinfluenzaeBMeningokokkenCImpfstoff",
                        display: "Haemophilus influenzae B, Meningokokken C-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836380007+601000221108",
                display:
                    "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product)",
                target: [
                    {
                        code: "HaemophilusinfluenzaeBPertussisImpfstoff",
                        display: "Haemophilus influenzae B, Pertussis-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836383009+836390004",
                display:
                    "Vaccine product containing Vibrio cholerae antigen (medicinal product) + Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)",
                target: [
                    {
                        code: "CholeraTyphusImpfstoff",
                        display: "Cholera, Typhus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836378001",
                display:
                    "Vaccine product containing Japanese encephalitis virus antigen (medicinal product)",
                target: [
                    {
                        code: "JapanischeEnzephalitisImpfstoff",
                        display: "Japanische Enzephalitis-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836403007",
                display:
                    "Vaccine product containing Tick-borne encephalitis virus antigen (medicinal product)",
                target: [
                    {
                        code: "FSMEImpfstoff",
                        display: "FSME-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "871738001",
                display:
                    "Vaccine product containing only live attenuated Mumps orthorubulavirus antigen (medicinal product)",
                target: [
                    {
                        code: "MumpsImpfstoff",
                        display: "Mumps-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1031000221108",
                display:
                    "Vaccine product containing Human poliovirus antigen (medicinal product)",
                target: [
                    {
                        code: "PolioImpfstoff",
                        display: "Polio-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836387005",
                display:
                    "Vaccine product containing Rotavirus antigen (medicinal product)",
                target: [
                    {
                        code: "RotaImpfstoff",
                        display: "Rota-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836393002",
                display:
                    "Vaccine product containing Rabies lyssavirus antigen (medicinal product)",
                target: [
                    {
                        code: "TollwutImpfstoff",
                        display: "Tollwut-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836495005",
                display:
                    "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)",
                target: [
                    {
                        code: "HerpesZosterTotimpfstoff",
                        display: "Herpes Zoster-Totimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836389008",
                display:
                    "Vaccine product containing Vaccinia virus antigen (medicinal product)",
                target: [
                    {
                        code: "Pockenimpfstoff",
                        display: "Pockenimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836379009",
                display:
                    "Vaccine product containing Human papillomavirus antigen (medicinal product)",
                target: [
                    {
                        code: "HPVImpfstoff",
                        display: "HPV Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836385002",
                display:
                    "Vaccine product containing Yellow fever virus antigen (medicinal product)",
                target: [
                    {
                        code: "Gelbfieberimpfstoff",
                        display: "Gelbfieberimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836388000",
                display:
                    "Vaccine product containing Rubella virus antigen (medicinal product)",
                target: [
                    {
                        code: "Roetelnimpfstoff",
                        display: "Rötelnimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836382004",
                display:
                    "Vaccine product containing Measles morbillivirus antigen (medicinal product)",
                target: [
                    {
                        code: "Masernimpfstoff",
                        display: "Masernimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836375003",
                display:
                    "Vaccine product containing Hepatitis A virus antigen (medicinal product)",
                target: [
                    {
                        code: "HepatitisAImpfstoff",
                        display: "Hepatitis A Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836374004",
                display:
                    "Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                target: [
                    {
                        code: "HepatitisBImpfstoff",
                        display: "Hepatitis B Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836377006",
                display:
                    "Vaccine product containing Influenza virus antigen (medicinal product)",
                target: [
                    {
                        code: "Influenzaimpfstoff",
                        display: "Influenzaimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836390004",
                display:
                    "Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)",
                target: [
                    {
                        code: "Typhusimpfstoff",
                        display: "Typhusimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836402002",
                display:
                    "Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)",
                target: [
                    {
                        code: "Tuberkuloseimpfstoff",
                        display: "Tuberkuloseimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "863911006",
                display:
                    "Vaccine product containing Clostridium tetani antigen (medicinal product)",
                target: [
                    {
                        code: "Tetanusimpfstoff",
                        display: "Tetanusimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836398006",
                display:
                    "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product)",
                target: [
                    {
                        code: "Pneumokokkenimpfstoff",
                        display: "Pneumokokkenimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "840549009",
                display:
                    "Vaccine product containing Yersinia pestis antigen (medicinal product)",
                target: [
                    {
                        code: "Pestimpfstoff",
                        display: "Pestimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "601000221108",
                display:
                    "Vaccine product containing Bordetella pertussis antigen (medicinal product)",
                target: [
                    {
                        code: "Pertussisimpfstoff",
                        display: "Pertussisimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836401009",
                display:
                    "Vaccine product containing Neisseria meningitidis antigen (medicinal product)",
                target: [
                    {
                        code: "Meningokokkenimpfstoff",
                        display: "Meningokokkenimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836380007",
                display:
                    "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)",
                target: [
                    {
                        code: "HaemophilusinfluenzaeBImpfstoff",
                        display: "Haemophilus influenzae B Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836381006",
                display:
                    "Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                target: [
                    {
                        code: "Diphtherieimpfstoff",
                        display: "Diphtherieimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836383009",
                display:
                    "Vaccine product containing Vibrio cholerae antigen (medicinal product)",
                target: [
                    {
                        code: "Choleraimpfstoff",
                        display: "Choleraimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "836384003",
                display:
                    "Vaccine product containing Bacillus anthracis antigen (medicinal product)",
                target: [
                    {
                        code: "Milzbrandimpfstoff",
                        display: "Milzbrandimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714569001",
                display:
                    "Product containing normal immunoglobulin human (medicinal product)",
                target: [
                    {
                        code: "Immunglobulinenormalhuman",
                        display: "Immunglobuline (normal human)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "786224004",
                display:
                    "Product containing human anti-D immunoglobulin (medicinal product)|",
                target: [
                    {
                        code: "AntiDrhImmunglobulin",
                        display: "Anti-D(rh)-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384706007",
                display: "Product containing tetanus antitoxin (medicinal product)",
                target: [
                    {
                        code: "TetanusImmunglobulin",
                        display: "Tetanus-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "62294009",
                display:
                    "Product containing Varicella-zoster virus antibody (medicinal product)",
                target: [
                    {
                        code: "VaricellaZosterImmunglobulin",
                        display: "Varicella/Zoster-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "9542007",
                display:
                    "Product containing Hepatitis B surface antigen immunoglobulin (medicinal product)",
                target: [
                    {
                        code: "HepatitisBImmunglobulin",
                        display: "Hepatitis-B-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "80834004",
                display:
                    "Product containing rabies human immune globulin (medicinal product)",
                target: [
                    {
                        code: "TollwutImmunglobulin",
                        display: "Tollwut-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "9778000",
                display:
                    "Product containing Cytomegalovirus antibody (medicinal product)",
                target: [
                    {
                        code: "CytomegalievirusImmunglobulin",
                        display: "Cytomegalievirus-Immunglobulin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108725001",
                display: "Product containing palivizumab (medicinal product)",
                target: [
                    {
                        code: "Palivizumab",
                        display: "Palivizumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "763703008",
                display: "Product containing bezlotoxumab (medicinal product)",
                target: [
                    {
                        code: "Bezlotoxumab",
                        display: "Bezlotoxumab",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "787859002",
                display: "Vaccine product (medicinal product)",
                target: [
                    {
                        code: "SonstigerImpfstoffhiernichtgelistet",
                        display: "Sonstiger Impfstoff (hier nicht gelistet)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7230005",
                display: "Brucella vaccine (product)",
                target: [
                    {
                        code: "Brucelloseimpfstoff",
                        display: "Brucelloseimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    },
    {
        source: "http://fhir.de/CodeSystem/dimdi/atc",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Vaccine_List_German",
        element: [
            {
                code: "J07BK02",
                display: "Zoster Virus, lebend abgeschwächt",
                target: [
                    {
                        code: "HerpesZosterLebendimpfstoff",
                        display: "Herpes Zoster-Lebendimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationVaccineGerman;
