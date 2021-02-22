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

// Diese Conceptmap verknüpft Snomed CT Impfstoffcodes mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";
const VaccinationVaccineGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Vaccine_German",
        element: [
            {
                code: "787859002",
                display: "Vaccine product (product)",
                target: [
                    {
                        code: "Impfstoffe",
                        display: "Impfstoffe (unspezifiziert)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37146000",
                display: "Typhus vaccine (product)",
                target: [
                    {
                        code: "Typhus-exanthematicus-Impfstoff",
                        display: "Typhus (exanthematicus)-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407746005",
                display: "Varicella-zoster live attenuated vaccine (product)",
                target: [
                    {
                        code: "Varizellen-Impfstoff",
                        display: "Varizellen-Impfstoff",
                        equivalence: "equivalent"
                    },
                    {
                        code: "Herpes-Zoster-Lebendimpfstoff",
                        display: "Herpes Zoster-Lebendimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "787859002:127489000=412300006",
                display:
                    "Vaccine product (product): Has active ingredient (attribute) = Rubella and mumps vaccine (substance)",
                target: [
                    {
                        code: "Roeteln-Mumps-Impfstoff",
                        display: "Röteln, Mumps-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}{127489000=768365004}{127489000=768366003}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) =  Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Meningococcus group A vaccine (substance) } { Has active ingredient (attribute) = Meningococcus group C vaccine (substance) }",
                target: [
                    {
                        code:
                            "DiphtherieHaemophilus influenzae B-Pertussis-Tetanus-Hepatitis B-Meningokokken A + C-Impfstoff",
                        display:
                            "Diphtherie, Haemophilus influenzae B, Pertussis, Tetanus, Hepatitis B, Meningokokken A + C-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427542001",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)",
                target: [
                    {
                        code:
                            "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff",
                        display:
                            "Diphtherie-Pertussis, Poliomyelitis, Tetanus, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }",
                target: [
                    {
                        code:
                            "Diphtherie-Haemophilus-influenzae-B-Pertussis-Tetanus-Hepatitis-B-Impfstoff",
                        display:
                            "Diphtherie-Haemophilus influenzae B, Pertussis, Tetanus, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333707007",
                display: "Hepatitis A+typhoid vaccine (product)",
                target: [
                    {
                        code: "Typhus-Hepatitis-A-Impfstoff",
                        display: "Typhus-Hepatitis A-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "426842004",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                target: [
                    {
                        code:
                            "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Hepatitis-B-Impfstoff",
                        display:
                            "Diphtherie-Haemophilus influenzae B-Pertussis, Poliomyelitis, Tetanus, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "426971004",
                display:
                    "Haemophilus influenzae Type b + recombinant hepatitis B virus vaccine (product)",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Hepatitis-B-Impfstoff",
                        display: "Haemophilus influenzae B, Hepatitis B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                target: [
                    {
                        code: "Diphtherie-Hepatitis-B-Tetanus-Impfstoff",
                        display: "Diphtherie, Hepatitis B, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414004005",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)",
                target: [
                    {
                        code:
                            "Diphtherie-Haemophilus-influenzae-B-Pertussis-Poliomyelitis-Tetanus-Impfstoff",
                        display:
                            "Diphtherie-Haemophilus influenzae B, Pertussis, Poliomyelitis, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "426081003",
                display:
                    "Diphtheria + tetanus + pertussis + recombinant hepatitis B virus vaccine (product)",
                target: [
                    {
                        code: "Diphtherie-Hepatitis-B-Pertussis-Tetanus-Impfstoff",
                        display: "Diphtherie, Hepatitis B, Pertussis, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "787859002:{127489000=412374001}{127489000=396436004}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Live Poliovirus vaccine (substance) }",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Poliomyelitis-Impfstoff",
                        display: "Haemophilus influenzae B, Poliomyelitis-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}",
                display:
                    "Vaccine product (product):  { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                target: [
                    {
                        code: "Diphtherie-Roeteln-Tetanus-Impfstoff",
                        display: "Diphtherie, Röteln, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414005006",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis vaccine (product)",
                target: [
                    {
                        code: "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Impfstoff",
                        display:
                            "Diphtherie, Pertussis, Poliomyelitis, Tetanus- Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414006007",
                display: "Diphtheria + tetanus + poliomyelitis vaccine (product)",
                target: [
                    {
                        code: "Diphtherie-Poliomyelitis-Tetanus-Impfstoff",
                        display: "Diphtherie, Poliomyelitis, Tetanus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419550004",
                display: "Measles + mumps + rubella + varicella vaccine (product)",
                target: [
                    {
                        code: "Masern-Mumps-Roeteln-Varicella-Impfstoff",
                        display: "Masern, Mumps, Röteln, Varicella-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "787859002:{127489000=396427003}{127489000=396438003}",
                display:
                    "Vaccine product (product):  { Has active ingredient (attribute) = Measles vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) }",
                target: [
                    {
                        code: "Masern-Roeteln-Impfstoff",
                        display: "Masern, Röteln-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61153008",
                display: "Measles, mumps and rubella vaccine (product)",
                target: [
                    {
                        code: "Masern-Mumps-Roeteln-Impfstoff",
                        display: "Masern, Mumps, Röteln (MMR) - Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "785865001",
                display: "Measles and mumps vaccine (product)",
                target: [
                    {
                        code: "Masern-Mumps-Impfstoff",
                        display: "Masern, Mumps-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333702001",
                display: "Hepatitis A+B vaccine (product)",
                target: [
                    {
                        code: "Hepatitis-A-und-B-Impfstoff",
                        display: "Hepatitis A und B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "350327004",
                display: "Diphtheria + tetanus vaccine (product)",
                target: [
                    {
                        code: "Tetanus-Diphtherie-Impfstoff",
                        display: "Tetanus, Diphtherie-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "78785900:{127489000=398730001}{127489000=412374001}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Pneumococcal vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) }",
                target: [
                    {
                        code: "Pneumokokken-Haemophilus-influenzae-B-Impfstoff",
                        display: "Pneumokokken, Haemophilus influenzae B-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423912009",
                display:
                    "Haemophilus influenzae type b + Meningococcal group C vaccine (product)",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Meningokokken-C-Impfstoff",
                        display: "Haemophilus influenzae B, Meningokokken C-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}",
                display:
                    "Vaccine product (product):  { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Toxoid (substance) }",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Pertussis-Impfstoff",
                        display: "Haemophilus influenzae B, Pertussis-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "787859002:{127489000=396422009}{127489000=396441007}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Cholera vaccine (substance) } { Has active ingredient (attribute) = Typhoid vaccine (substance) }",
                target: [
                    {
                        code: "Cholera-Typhus-Impfstoff",
                        display: "Cholera, Typhus-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333697005",
                display: "Japanese B encephalitis vaccine",
                target: [
                    {
                        code: "Japanische-Enzephalitis-Impfstoff",
                        display: "Japanische Enzephalitis-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333699008",
                display: "Tick-borne encephalitis vaccine",
                target: [
                    {
                        code: "FSME-Impfstoff",
                        display: "FSME-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "90043005",
                display: "Mumps live virus vaccine",
                target: [
                    {
                        code: "Mumps-Impfstoff",
                        display: "Mumps-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "111164008",
                display: "Poliovirus vaccine",
                target: [
                    {
                        code: "Polio-Impfstoff",
                        display: "Polio-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116077000",
                display: "Rotavirus vaccine",
                target: [
                    {
                        code: "Rota-Impfstoff",
                        display: "Rota-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333606008",
                display: "Rabies vaccine",
                target: [
                    {
                        code: "Tollwut-Impfstoff",
                        display: "Tollwut-Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407737004",
                display: "Varicella-zoster vaccine",
                target: [
                    {
                        code: "Herpes-Zoster-Totimpfstoff",
                        display: "Herpes Zoster-Totimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "33234009",
                display: "Smallpox vaccine",
                target: [
                    {
                        code: "Pockenimpfstoff",
                        display: "Pockenimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424519000",
                display: "Human papillomavirus vaccine",
                target: [
                    {
                        code: "HPV-Impfstoff",
                        display: "HPV Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56844000",
                display: "Yellow fever vaccine",
                target: [
                    {
                        code: "Gelbfieberimpfstoff",
                        display: "Gelbfieberimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386013003",
                display: "Rubella vaccine",
                target: [
                    {
                        code: "Roetelnimpfstoff",
                        display: "Rötelnimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386012008",
                display: "Measles vaccine",
                target: [
                    {
                        code: "Masernimpfstoff",
                        display: "Masernimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14745005",
                display: "Hepatitis A virus vaccine",
                target: [
                    {
                        code: "Hepatitis-A-Impfstoff",
                        display: "Hepatitis A Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34689006",
                display: "Hepatitis B virus vaccine",
                target: [
                    {
                        code: "Hepatitis-B-Impfstoff",
                        display: "Hepatitis B Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46233009",
                display: "Influenza virus vaccine",
                target: [
                    {
                        code: "Influenzaimpfstoff",
                        display: "Influenzaimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89428009",
                display: "Typhoid vaccine",
                target: [
                    {
                        code: "Typhusimpfstoff",
                        display: "Typhusimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420538001",
                display: "Tuberculosos vaccine",
                target: [
                    {
                        code: "Tuberkuloseimpfstoff",
                        display: "Tuberkuloseimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333621002",
                display: "Tetanus vaccine",
                target: [
                    {
                        code: "Tetanusimpfstoff",
                        display: "Tetanusimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333598008",
                display: "Pneumococcal vaccine",
                target: [
                    {
                        code: "Pneumokokkenimpfstoff",
                        display: "Pneumokokkenimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11866009",
                display: "Plague vaccine",
                target: [
                    {
                        code: "Pestimpfstoff",
                        display: "Pestimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61602008",
                display: "Pertussis vaccine",
                target: [
                    {
                        code: "Pertussisimpfstoff",
                        display: "Pertussisimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423531006",
                display: "Meningococcus vaccine",
                target: [
                    {
                        code: "Meningokokkenimpfstoff",
                        display: "Meningokokkenimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333680004",
                display: "Haemophilus influenzae Type b vaccine",
                target: [
                    {
                        code: "Haemophilus-influenzae-B-Impfstoff",
                        display: "Haemophilus influenzae B Impfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428214002",
                display: "Diphtheria vaccine",
                target: [
                    {
                        code: "Diphtherieimpfstoff",
                        display: "Diphtherieimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "35736007",
                display: "Cholera vaccine",
                target: [
                    {
                        code: "Choleraimpfstoff",
                        display: "Choleraimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7230005",
                display: "Brucella vaccine",
                target: [
                    {
                        code: "Brucelloseimpfstoff",
                        display: "Brucelloseimpfstoff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333521006",
                display: "Anthrax vaccine",
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
                        code: "Immunglobuline-normal-human",
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
                        code: "Anti-D-Immunglobulin",
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
                        code: "Tetanus-Immunglobulin",
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
                        code: "Varicella-Zoster-Immunglobulin",
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
                        code: "Hepatitis-B-Immunglobulin",
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
                        code: "Tollwut-Immunglobulin",
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
                        code: "Cytomegalievirus-Immunglobulin",
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
                display: "Vaccine product (product)",
                target: [
                    {
                        code: "Impfstoffe",
                        display: "Impfstoffe (unspezifiziert)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421245007",
                display: "Diphtheria + pertussis + tetanus vaccine (product)",
                target: [
                    {
                        code: "Pertussis-gereinigtes Antigen-Kombinationen-mit-Toxoiden",
                        display:
                            "Pertussis, gereinigtes Antigen, Kombinationen mit Toxoiden",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationVaccineGerman;
