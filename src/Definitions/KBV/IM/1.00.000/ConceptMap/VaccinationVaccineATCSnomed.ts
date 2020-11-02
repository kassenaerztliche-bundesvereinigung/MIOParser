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

// Diese Conceptmap verknüpft Snomed CT Impfstoffcodes mit den entsprechenden ATC Codes

import { ConceptMap } from "../../../../Interfaces";
const VaccinationVaccineATCSnomed: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://fhir.de/CodeSystem/dimdi/atc",
        element: [
            {
                code: "90043005",
                display: "Mumps live virus vaccine",
                target: [
                    {
                        code: "J07BE",
                        display: "Mumps-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116077000",
                display: "Rotavirus vaccine (product)",
                target: [
                    {
                        code: "J07BH",
                        display: "Rotavirus-Diarrhoe-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407737004",
                display: "Varicella-zoster vaccine (product)",
                target: [
                    {
                        code: "J07BK01",
                        display: "Varicella, lebend abgeschwächt",
                        equivalence: "equivalent"
                    },
                    {
                        code: "J07BK03",
                        display: "Zoster Virus, gereinigtes Antigen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333606008",
                display: "Rabies vaccine (product)",
                target: [
                    {
                        code: "J07BG",
                        display: "Tollwut-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "111164008",
                display: "Poliovirus vaccine (product)",
                target: [
                    {
                        code: "J07BF",
                        display: "Poliomyelitis-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333699008",
                display: "Tick-borne encephalitis vaccine (product)",
                target: [
                    {
                        code: "J07BA01",
                        display: "FSME, inaktiviert, ganzes Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333697005",
                display: "Japanese B encephalitis vaccine",
                target: [
                    {
                        code: "J07BA02",
                        display: "Encephalitis, japanische, inaktiviert, ganzes Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "787859002:127489000=428126001,412374001,396433007,412375000,396424005,768365004,768366003",
                display:
                    "Vaccine product (product): Has active ingredient (attribute) = Diphtheria vaccine (substance), Haemophilus influenzae type b vaccine (substance), Pertussis vaccine (substance), Tetanus vaccine (substance), Hepatitis B virus vaccine (substance), Meningococcus group A vaccine (substance), Meningococcus group C vaccine (substance)",
                target: [
                    {
                        code: "J07CA13",
                        display:
                            "Diphtherie-Haemophilus influenzae B-Pertussis-Tetanus-Hepatitis B-Meningokokken A + C",
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
                        code: "J07CA12",
                        display: "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis B",
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
                        code: "J07CA11",
                        display:
                            "Diphtherie-Haemophilus influenzae B-Pertussis-Tetanus-Hepatitis B",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333707007",
                display: "Hepatitis A+typhoid vaccine (product)",
                target: [
                    {
                        code: "J07CA10",
                        display: "Typhus-Hepatitis A",
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
                        code: "J07CA09",
                        display:
                            "Diphtherie-Haemophilus influenzae B-Pertussis-Poliomyelitis-Tetanus-Hepatitis B",
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
                        code: "J07CA08",
                        display: "Haemophilus influenzae B und Hepatitis B",
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
                        code: "J07CA07",
                        display: "Diphtherie-Hepatitis B-Tetanus",
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
                        code: "J07CA06",
                        display:
                            "Diphtherie-Haemophilus influenzae B-Pertussis-Poliomyelitis-Tetanus",
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
                        code: "J07CA05",
                        display: "Diphtherie-Hepatitis B-Pertussis-Tetanus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "71181003:127489000=412374001,396436004",
                display:
                    "Product containing vaccine (product):Has active ingredient (attribute)=Haemophilus influenzae type b vaccine (substance),Live Poliovirus vaccine (substance)",
                target: [
                    {
                        code: "J07CA04",
                        display: "Haemophilus influenzae B und Poliomyelitis",
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
                        code: "J07CA03",
                        display: "Diphtherie-Röteln-Tetanus",
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
                        code: "J07CA02",
                        display: "Diphtherie-Pertussis-Poliomyelitis-Tetanus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414006007",
                display: "Diphtheria + tetanus + poliomyelitis vaccine (product)",
                target: [
                    {
                        code: "J07CA01",
                        display: "Diphtherie-Poliomyelitis-Tetanus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419550004",
                display: "Measles + mumps + rubella + varicella vaccine (product)",
                target: [
                    {
                        code: "J07BD54",
                        display:
                            "Masern, Kombinationen mit Mumps, Röteln und Varicella,  lebend abgeschwächt",
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
                        code: "J07BD53",
                        display: "Masern, Kombinationen mit Röteln, lebend abgeschwächt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61153008",
                display: "Measles, mumps and rubella vaccine (product)",
                target: [
                    {
                        code: "J07BD52",
                        display:
                            "Masern, Kombinationen mit Mumps und Röteln,  lebend abgeschwächt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "785865001",
                display: "Measles and mumps vaccine (product)",
                target: [
                    {
                        code: "J07BD51",
                        display: "Masern, Kombinationen mit Mumps, lebend abgeschwächt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333702001",
                display: "Hepatitis A+B vaccine (product)",
                target: [
                    {
                        code: "J07BC20",
                        display: "Kombinationen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "350327004",
                display: "Diphtheria + tetanus vaccine (product)",
                target: [
                    {
                        code: "J07AM51",
                        display: "Tetanus-Toxoid, Kombinationen mit Diphtherie-Toxoid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "71181003:127489000=398730001,412374001",
                display:
                    "Product containing vaccine (product):Has active ingredient (attribute)=Pneumococcal vaccine (substance), Haemophilus influenzae type b vaccine (substance)",
                target: [
                    {
                        code: "J07AL52",
                        display:
                            "Pneumokokken, gereinigtes Polysaccharid-Antigen  und Haemophilus influenzae B, konjugiert",
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
                        code: "J07AG53",
                        display:
                            "Haemophilus influenzae B, Kombinationen mit  Meningokokken C, konjugiert",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "71181003:127489000=412374001,396433007,396411005",
                display:
                    "Product containing vaccine (product):Has active ingredient (attribute)=Haemophilus influenzae type b vaccine (substance),Pertussis vaccine (substance),Toxoid (substance)",
                target: [
                    {
                        code: "J07AG52",
                        display:
                            "Haemophilus influenzae B, Kombinationen mit Pertussis und Toxoiden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "71181003:127489000=396422009,398777006",
                display:
                    "Product containing vaccine (product):Has active ingredient (attribute)=Cholera vaccine (substance),Typhus vaccine (substance)",
                target: [
                    {
                        code: "J07AE51",
                        display:
                            "Cholera, Kombinationen mit Typhus-Impfstoff,  inaktiviert, ganze Zelle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "33234009",
                display: "Smallpox vaccine (product)",
                target: [
                    {
                        code: "J07BX01",
                        display: "Pocken-Impfstoff, lebend, modifiziert",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424519000",
                display: "Human papillomavirus vaccine (product)",
                target: [
                    {
                        code: "J07BM",
                        display: "Papillomvirus-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56844000",
                display: "Yellow fever vaccine (product)",
                target: [
                    {
                        code: "J07BL",
                        display: "Gelbfieber-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386013003",
                display: "Rubella vaccine (product)",
                target: [
                    {
                        code: "J07BJ",
                        display: "Röteln-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386012008",
                display: "Measles vaccine (product)",
                target: [
                    {
                        code: "J07BD",
                        display: "Masern-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14745005",
                display: "Hepatitis A virus vaccine (product)",
                target: [
                    {
                        code: "J07BC02",
                        display: "Hepatitis A, inaktiviert, ganzes Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34689006",
                display: "Hepatitis B virus vaccine (product)",
                target: [
                    {
                        code: "J07BC01",
                        display: "Hepatitis B, gereinigtes Antigen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46233009",
                display: "Influenza virus vaccine (product)",
                target: [
                    {
                        code: "J07BB",
                        display: "Influenza-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89428009",
                display: "Typhoid vaccine (product)",
                target: [
                    {
                        code: "J07AP",
                        display: "Typhus-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420538001",
                display: "Tuberculosos vaccine (product)",
                target: [
                    {
                        code: "J07AN",
                        display: "Tuberkulose-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333621002",
                display: "Tetanus vaccine (product)",
                target: [
                    {
                        code: "J07AM",
                        display: "Tetanus-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333598008",
                display: "Pneumococcal vaccine (product)",
                target: [
                    {
                        code: "J07AL",
                        display: "Pneumokokken-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11866009",
                display: "Plague vaccine (product)",
                target: [
                    {
                        code: "J07AK",
                        display: "Pest-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61602008",
                display: "Pertussis vaccine (product)",
                target: [
                    {
                        code: "J07AJ",
                        display: "Pertussis-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421245007",
                display: "Diphtheria + pertussis + tetanus vaccine (product)",
                target: [
                    {
                        code: "J07AJ52",
                        display:
                            "Pertussis, gereinigtes Antigen, Kombinationen mit Toxoiden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423531006",
                display: "Meningococcus vaccine (product)",
                target: [
                    {
                        code: "J07AH",
                        display: "Meningokokken-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333680004",
                display: "Haemophilus influenzae Type b vaccine (product)",
                target: [
                    {
                        code: "J07AG",
                        display: "Haemophilus influenzae B-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428214002",
                display: "Diphtheria vaccine (product)",
                target: [
                    {
                        code: "J07AF",
                        display: "Diphtherie-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "35736007",
                display: "Cholera vaccine (product)",
                target: [
                    {
                        code: "J07AE",
                        display: "Cholera-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7230005",
                display: "Brucella vaccine (product)",
                target: [
                    {
                        code: "J07AD",
                        display: "Brucellose-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "333521006",
                display: "Anthrax vaccine (product)",
                target: [
                    {
                        code: "J07AC",
                        display: "Milzbrand-Impfstoffe",
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
                        code: "J06BA",
                        display: "Immunglobuline, normal human",
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
                        code: "J06BB01",
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
                        code: "J06BB02",
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
                        code: "J06BB03",
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
                        code: "J06BB04",
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
                        code: "J06BB05",
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
                        code: "J06BB09",
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
                        code: "J06BB16",
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
                        code: "J06BB21",
                        display: "Bezlotoxumab",
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
                        code: "J07BJ51",
                        display: "Röteln, Kombinationen mit Mumps, lebend abgeschwächt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37146000",
                display: "Typhus vaccine (product)",
                target: [
                    {
                        code: "J07AR",
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
                        code: "J07BK02",
                        display: "Zoster Virus, lebend abgeschwächt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationVaccineATCSnomed;
