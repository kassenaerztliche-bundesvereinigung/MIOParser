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

// Diese Conceptmap verknüpft die Codes für impfrelevante durchgemachte Krankheiten mit denen für Impfstoffe und bietet einen deutschen Codes dazu

import { ConceptMap } from "../../../../Interfaces";
const VaccinationVaccineTargetdisease: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://fhir.de/CodeSystem/dimdi/alpha-id",
        element: [
            {
                code: "67924001",
                display: "Smallpox (disorder)",
                target: [
                    {
                        code: "I15064",
                        display: "Pocken",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "240532009",
                display: "Human papilomavirus infection (disorder)",
                target: [
                    {
                        code: "I21515",
                        display: "Infektion durch humanes Papillomavirus [HPV]",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16541001",
                display: "Yellow fewer (disorder)",
                target: [
                    {
                        code: "I14036",
                        display: "Gelbfieber",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "4740000",
                display: "Herpes Zoster (disorder)",
                target: [
                    {
                        code: "I23144",
                        display: "Herpes zoster",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38907003",
                display: "Varicella (disorder)",
                target: [
                    {
                        code: "I15579",
                        display: "Windpocken",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36653000",
                display: "Rubella (disorder)",
                target: [
                    {
                        code: "I15222",
                        display: "Röteln",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18624000",
                display: "Disease caused by Rotavirus (disorder)",
                target: [
                    {
                        code: "I110761",
                        display: "Infektion durch Rotaviren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14168008",
                display: "Rabies (disorder)",
                target: [
                    {
                        code: "I22407",
                        display: "Tollwut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "398102009",
                display: "Acute Poliomyelitis (disorder)",
                target: [
                    {
                        code: "I14372",
                        display: "Poliomyelitis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36989005",
                display: "Mumps (disorder)",
                target: [
                    {
                        code: "I14707",
                        display: "Mumps",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14189004",
                display: "Measles (disorder)",
                target: [
                    {
                        code: "I14609",
                        display: "Masern",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "40468003",
                display: "Viral hepatitis, type A (disorder)",
                target: [
                    {
                        code: "I15771",
                        display: "Hepatitis A",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "66071002",
                display: "Viral hepatitis, type B (disorder)",
                target: [
                    {
                        code: "I15777",
                        display: "Hepatitis B",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6142004",
                display: "Influenza (disorder)",
                target: [
                    {
                        code: "I14083",
                        display: "Grippe [Influenza]",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52947006",
                display: "Japanese encephalitis virus disease (disorder)",
                target: [
                    {
                        code: "I1064",
                        display: "Japanische Enzephalitis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)",
                target: [
                    {
                        code: "I23483",
                        display:
                            "FSME [Zentraleuropäische Frühsommer-Meningoenzephalitis]",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "4834000",
                display: "Thyphoid fever (disorder)",
                target: [
                    {
                        code: "I22454",
                        display: "Typhus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56717001",
                display: "Tuberculosis (disorder)",
                target: [
                    {
                        code: "I22433",
                        display: "Tuberkulose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76902006",
                display: "Tetanus (disorder)",
                target: [
                    {
                        code: "I15432",
                        display: "Tetanus-Infektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16814004",
                display: "Pneumococcal infectious disease (disorder)",
                target: [
                    {
                        code: "I73861",
                        display: "Infektion durch Pneumokokken a.n.k.",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "58750007",
                display: "Plague (disorder)",
                target: [
                    {
                        code: "I15008",
                        display: "Pest",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)",
                target: [
                    {
                        code: "I14368",
                        display: "Pertussis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "23511006",
                display: "Meningococcal infectious disease (disorder)",
                target: [
                    {
                        code: "I27534",
                        display: "Infektion durch Meningokokken",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397430003",
                display: "Diphtheria caused by Corynebacterium diphtheriae (disorder)",
                target: [
                    {
                        code: "I23502",
                        display: "Diphtherie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "63650001",
                display: "Cholera (disorder)",
                target: [
                    {
                        code: "I13614",
                        display: "Cholera",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409498004",
                display: "Anthrax (disorder)",
                target: [
                    {
                        code: "I14685",
                        display: "Milzbrand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "709410003",
                display: "Haemophilus influenzae type b infection (disorder)",
                target: [
                    {
                        code: "I11467",
                        display: "Haemophilus-influenzae-Infektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "75702008",
                display: "Brucellosis (disorder)",
                target: [
                    {
                        code: "I13550",
                        display: "Brucellose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "39111003",
                display: "Louse-borne typhus (disorder)",
                target: [
                    {
                        code: "I13965",
                        display: "Fleckfieber",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "186431008",
                display: "Clostridioides difficile infection (disorder)",
                target: [
                    {
                        code: "I116469",
                        display: "Infektion durch Clostridium difficile",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "55735004",
                display: "Respiratory syncytial virus infection (disorder)",
                target: [
                    {
                        code: "I5031",
                        display: "Pneumonie durch Respiratory-Syncytial-Viren [RS-Viren]",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "28944009",
                display: "Cytomegalovirus infection (disorder)",
                target: [
                    {
                        code: "I15735",
                        display: "Infektion durch Zytomegalieviren",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "307333004",
                display: "Rhesus isoimmunization due to anti-D (disorder)",
                target: [
                    {
                        code: "I97396",
                        display: "Blutgruppenunverträglichkeit beim Neugeborenen",
                        equivalence: "relatedto"
                    }
                ]
            }
        ]
    },
    {
        source: "http://snomed.info/sct",
        target: "http://snomed.info/sct",
        element: [
            {
                code: "709410003",
                display: "Haemophilus influenzae type b infection (disorder)",
                target: [
                    {
                        code: "333680004",
                        display: "Haemophilus influenzae Type b vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Toxoid (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "423912009",
                        display:
                            "Haemophilus influenzae type b + Meningococcal group C vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=398730001}{127489000=412374001}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Pneumococcal vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=412374001}{127489000=396436004}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Live Poliovirus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414004005",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426971004",
                        display:
                            "Haemophilus influenzae Type b + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426842004",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:127489000=428126001,412374001,396433007,412375000,396424005,768365004,768366003",
                        display:
                            "Vaccine product (product): Has active ingredient (attribute) = Diphtheria vaccine (substance), Haemophilus influenzae type b vaccine (substance), Pertussis vaccine (substance), Tetanus vaccine (substance), Hepatitis B virus vaccine (substance), Meningococcus group A vaccine (substance), Meningococcus group C vaccine (substance)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "75702008",
                display: "Brucellosis (disorder)",
                target: [
                    {
                        code: "7230005",
                        display: "Brucella vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "67924001",
                display: "Smallpox (disorder)",
                target: [
                    {
                        code: "33234009",
                        display: "Smallpox vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "240532009",
                display: "Human papilomavirus infection (disorder)",
                target: [
                    {
                        code: "424519000",
                        display: "Human papillomavirus vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "16541001",
                display: "Yellow fewer (disorder)",
                target: [
                    {
                        code: "56844000",
                        display: "Yellow fever vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "4740000",
                display: "Herpes Zoster (disorder)",
                target: [
                    {
                        code: "407746005",
                        display: "Varicella-zoster live attenuated vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "407737004",
                        display: "Varicella-zoster vaccine",
                        equivalence: "relatedto"
                    },
                    {
                        code: "62294009",
                        display:
                            "Product containing Varicella-zoster virus antibody (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "38907003",
                display: "Varicella (disorder)",
                target: [
                    {
                        code: "407746005",
                        display: "Varicella-zoster live attenuated vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "419550004",
                        display:
                            "Measles + mumps + rubella + varicella vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "62294009",
                        display:
                            "Product containing Varicella-zoster virus antibody (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "36653000",
                display: "Rubella (disorder)",
                target: [
                    {
                        code: "386013003",
                        display: "Rubella vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "61153008",
                        display: "Measles, mumps and rubella vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=396427003}{127489000=396438003}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Measles vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "419550004",
                        display:
                            "Measles + mumps + rubella + varicella vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "18624000",
                display: "Disease caused by Rotavirus (disorder)",
                target: [
                    {
                        code: "116077000",
                        display: "Rotavirus vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "14168008",
                display: "Rabies (disorder)",
                target: [
                    {
                        code: "333606008",
                        display: "Rabies vaccine",
                        equivalence: "relatedto"
                    },
                    {
                        code: "80834004",
                        display:
                            "Product containing rabies human immune globulin (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "398102009",
                display: "Acute Poliomyelitis (disorder)",
                target: [
                    {
                        code: "111164008",
                        display: "Poliovirus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414006007",
                        display: "Diphtheria + tetanus + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414005006",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=412374001}{127489000=396436004}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Live Poliovirus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414004005",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426842004",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "427542001",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "36989005",
                display: "Mumps (disorder)",
                target: [
                    {
                        code: "90043005",
                        display: "Mumps live virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "785865001",
                        display: "Measles and mumps vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "61153008",
                        display: "Measles, mumps and rubella vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=396427003}{127489000=396438003}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Measles vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "419550004",
                        display:
                            "Measles + mumps + rubella + varicella vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "14189004",
                display: "Measles (disorder)",
                target: [
                    {
                        code: "386012008",
                        display: "Measles vaccine",
                        equivalence: "relatedto"
                    },
                    {
                        code: "785865001",
                        display: "Measles, mumps and rubella vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=396427003}{127489000=396438003}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Measles vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "419550004",
                        display:
                            "Measles + mumps + rubella + varicella vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "40468003",
                display: "Viral hepatitis, type A (disorder)",
                target: [
                    {
                        code: "14745005",
                        display: "Hepatitis A virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "333702001",
                        display: "Hepatitis A+B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426081003",
                        display:
                            "Diphtheria + tetanus + pertussis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "333707007",
                        display: "Hepatitis A+typhoid vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "66071002",
                display: "Viral hepatitis, type B (disorder)",
                target: [
                    {
                        code: "34689006",
                        display: "Hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "333702001",
                        display: "Hepatitis A+B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426971004",
                        display:
                            "Haemophilus influenzae Type b + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426842004",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "427542001",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:127489000=428126001,412374001,396433007,412375000,396424005,768365004,768366003",
                        display:
                            "Vaccine product (product): Has active ingredient (attribute) = Diphtheria vaccine (substance), Haemophilus influenzae type b vaccine (substance), Pertussis vaccine (substance), Tetanus vaccine (substance), Hepatitis B virus vaccine (substance), Meningococcus group A vaccine (substance), Meningococcus group C vaccine (substance)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "9542007",
                        display:
                            "Product containing Hepatitis B surface antigen immunoglobulin (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "6142004",
                display: "Influenza (disorder)",
                target: [
                    {
                        code: "46233009",
                        display: "Influenza virus vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "52947006",
                display: "Japanese encephalitis virus disease (disorder)",
                target: [
                    {
                        code: "333697005",
                        display: "Japanese B encephalitis vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)",
                target: [
                    {
                        code: "333699008",
                        display: "Tick-borne encephalitis vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "4834000",
                display: "Thyphoid fever (disorder)",
                target: [
                    {
                        code: "89428009",
                        display: "Typhoid vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=396422009}{127489000=396441007}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Cholera vaccine (substance) } { Has active ingredient (attribute) = Typhoid vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "333707007",
                        display: "Hepatitis A+typhoid vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "56717001",
                display: "Tuberculosis (disorder)",
                target: [
                    {
                        code: "420538001",
                        display: "Tuberculosos vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "76902006",
                display: "Tetanus (disorder)",
                target: [
                    {
                        code: "333621002",
                        display: "Tetanus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "350327004",
                        display: "Diphtheria + tetanus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414006007",
                        display: "Diphtheria + tetanus + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414005006",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426081003",
                        display:
                            "Diphtheria + tetanus + pertussis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414004005",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426842004",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "427542001",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:127489000=28126001,412374001,396433007,398777006,396424005,768365004,768366003",
                        display:
                            "Vaccine product (product):Has active ingredient (attribute)=Diphtheria vaccine (substance),Haemophilus influenzae type b vaccine (substance),Pertussis vaccine (substance),Tetanus vaccine (substance),Hepatitis B virus vaccine (substance),Meningococcus group A vaccine (substance),Meningococcus group C vaccine (substance)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "384706007",
                        display:
                            "Product containing tetanus antitoxin (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "16814004",
                display: "Pneumococcal infectious disease (disorder)",
                target: [
                    {
                        code: "333598008",
                        display: "Pneumococcal vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=398730001}{127489000=412374001}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Pneumococcal vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) }",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "58750007",
                display: "Plague (disorder)",
                target: [
                    {
                        code: "11866009",
                        display: "Plague vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)",
                target: [
                    {
                        code: "61602008",
                        display: "Pertussis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Toxoid (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414005006",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426081003",
                        display:
                            "Diphtheria + tetanus + pertussis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414004005",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426842004",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "427542001",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:127489000=428126001,412374001,396433007,412375000,396424005,768365004,768366003",
                        display:
                            "Vaccine product (product): Has active ingredient (attribute) = Diphtheria vaccine (substance), Haemophilus influenzae type b vaccine (substance), Pertussis vaccine (substance), Tetanus vaccine (substance), Hepatitis B virus vaccine (substance), Meningococcus group A vaccine (substance), Meningococcus group C vaccine (substance)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "23511006",
                display: "Meningococcal infectious disease (disorder)",
                target: [
                    {
                        code: "423531006",
                        display: "Meningococcus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "423912009",
                        display:
                            "Haemophilus influenzae type b + Meningococcal group C vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}{127489000=768365004}{127489000=768366003}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) =  Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Meningococcus group A vaccine (substance) } { Has active ingredient (attribute) = Meningococcus group C vaccine (substance) }",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "397430003",
                display: "Diphtheria caused by Corynebacterium diphtheriae (disorder)",
                target: [
                    {
                        code: "428214002",
                        display: "Diphtheria vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "350327004",
                        display: "Diphtheria + tetanus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414006007",
                        display: "Diphtheria + tetanus + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414005006",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}",
                        display:
                            "Vaccine product (product):  { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426081003",
                        display:
                            "Diphtheria + tetanus + pertussis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "414004005",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "426842004",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }",
                        equivalence: "relatedto"
                    },
                    {
                        code: "427542001",
                        display:
                            "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code:
                            "787859002:127489000=428126001,412374001,396433007,412375000,396424005,768365004,768366003",
                        display:
                            "Vaccine product (product): Has active ingredient (attribute) = Diphtheria vaccine (substance), Haemophilus influenzae type b vaccine (substance), Pertussis vaccine (substance), Tetanus vaccine (substance), Hepatitis B virus vaccine (substance), Meningococcus group A vaccine (substance), Meningococcus group C vaccine (substance)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "63650001",
                display: "Cholera (disorder)",
                target: [
                    {
                        code: "35736007",
                        display: "Cholera vaccine (product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "787859002:{127489000=396422009}{127489000=396441007}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Cholera vaccine (substance) } { Has active ingredient (attribute) = Typhoid vaccine (substance) }",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "409498004",
                display: "Anthrax (disorder)",
                target: [
                    {
                        code: "333521006",
                        display: "Anthrax vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "39111003",
                display: "Louse-borne typhus (disorder)",
                target: [
                    {
                        code: "37146000",
                        display: "Typhus vaccine (product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "186431008",
                display: "Clostridioides difficile infection (disorder)",
                target: [
                    {
                        code: "763703008",
                        display: "Product containing bezlotoxumab (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "55735004",
                display: "Respiratory syncytial virus infection (disorder)",
                target: [
                    {
                        code: "108725001",
                        display: "Product containing palivizumab (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "28944009",
                display: "Cytomegalovirus infection (disorder)",
                target: [
                    {
                        code: "9778000",
                        display:
                            "Product containing Cytomegalovirus antibody (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "307333004",
                display: "Rhesus isoimmunization due to anti-D (disorder)",
                target: [
                    {
                        code: "786224004",
                        display:
                            "Product containing human anti-D immunoglobulin (medicinal product)|",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "64572001",
                display: "Disease (disorder)",
                target: [
                    {
                        code: "714569001",
                        display:
                            "Product containing normal immunoglobulin human (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "40733004",
                display: "Infectious disease (disorder)",
                target: [
                    {
                        code: "787859002:{127489000=396422009}{127489000=396441007}",
                        display:
                            "Vaccine product (product): { Has active ingredient (attribute) = Cholera vaccine (substance) } { Has active ingredient (attribute) = Typhoid vaccine (substance) }",
                        equivalence: "relatedto"
                    }
                ]
            }
        ]
    },
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Targetdisease_German",
        element: [
            {
                code: "64572001",
                display: "Disease (disorder)",
                target: [
                    {
                        code: "Notwendigkeit-Immunglobulingabe",
                        display: "Notwendigkeit für Immunglobulingabe (normal, human)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "40733004",
                display: "Infectious disease (disorder)",
                target: [
                    {
                        code: "Infektionskrankheit-unspezifiziert",
                        display: "Infektionskrankheit (unspezifiziert)",
                        equivalence: "relatedto"
                    }
                ]
            }
        ]
    }
];

export default VaccinationVaccineTargetdisease;
