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

// Diese Conceptmap verknüpft die Codes für impfrelevante durchgemachte Krankheiten mit denen für Impfstoffe und bietet einen deutschen Code.

import { ConceptMap } from "../../../../Interfaces";

const VaccinationVaccineTargetdisease: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://fhir.de/CodeSystem/dimdi/alpha-id",
        element: [
            {
                code: "840539006",
                display:
                    "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)",
                target: [
                    {
                        code: "I130800",
                        display: "COVID-19 o.n.A.",
                        equivalence: "equivalent"
                    }
                ]
            },
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
                        code: "I130676",
                        display: "HPV [Humanes Papillomavirus]-Infektion",
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
                        code: "I130669",
                        display: "Rotaviren-Infektion",
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
                display: "Typhoid fever (disorder)",
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
                        code: "I130672",
                        display: "Pneumokokken-Infektion",
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
                        code: "I130671",
                        display: "Meningokokken-Infektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "709410003",
                display: "Haemophilus influenzae type b infection (disorder)",
                target: [
                    {
                        code: "I130674",
                        display: "Haemophilus-influenzae-Typ-B-Infektion",
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
                code: "39111003",
                display: "Louse-borne typhus (disorder)",
                target: [
                    {
                        code: "I13965",
                        display: "Fleckfieber",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "28944009",
                display: "Cytomegalovirus infection (disorder)",
                target: [
                    {
                        code: "I130677",
                        display: "Zytomegalieviren-Infektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "55735004",
                display: "Respiratory syncytial virus infection (disorder)",
                target: [
                    {
                        code: "I130678",
                        display: "Respiratory-Syncytial-Viren-Infektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "186431008",
                display: "Clostridioides difficile infection (disorder)",
                target: [
                    {
                        code: "I130668",
                        display: "Clostridioides-difficile-Infektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307333004",
                display: "Rhesus isoimmunization due to anti-D (disorder)",
                target: [
                    {
                        code: "I109141",
                        display: "Rh-Unverträglichkeit bei Schwangerschaft",
                        equivalence: "equivalent"
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
                code: "840539006",
                display:
                    "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)",
                target: [
                    {
                        code: "1119305005",
                        display:
                            "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "1119349007",
                        display:
                            "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "67924001",
                display: "Smallpox (disorder)",
                target: [
                    {
                        code: "836389008",
                        display:
                            "Vaccine product containing Vaccinia virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "240532009",
                display: "Human papilomavirus infection (disorder)",
                target: [
                    {
                        code: "836379009",
                        display:
                            "Vaccine product containing Human papillomavirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "16541001",
                display: "Yellow fewer (disorder)",
                target: [
                    {
                        code: "836385002",
                        display:
                            "Vaccine product containing Yellow fever virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "4740000",
                display: "Herpes Zoster (disorder)",
                target: [
                    {
                        code: "836495005",
                        display:
                            "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "2221000221107",
                        display:
                            "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)",
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
                        code: "2221000221107",
                        display:
                            "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871908002",
                        display:
                            "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
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
                        code: "836388000",
                        display:
                            "Vaccine product containing Rubella virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871831003",
                        display:
                            "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836498007+836388000",
                        display:
                            "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836382004 + 836388000",
                        display:
                            "Vaccine product containing Measles morbillivirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871908002",
                        display:
                            "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836388000 + 863911006",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "18624000",
                display: "Disease caused by Rotavirus (disorder)",
                target: [
                    {
                        code: "836387005",
                        display:
                            "Vaccine product containing Rotavirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "14168008",
                display: "Rabies (disorder)",
                target: [
                    {
                        code: "836393002",
                        display:
                            "Vaccine product containing Rabies lyssavirus antigen (medicinal product)",
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
                        code: "1031000221108",
                        display:
                            "Vaccine product containing Human poliovirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871837004",
                        display:
                            "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871878002",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836380007 + 1031000221108",
                        display:
                            "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Human poliovirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871887006",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871895005",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871891001",
                        display:
                            "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "36989005",
                display: "Mumps (disorder)",
                target: [
                    {
                        code: "871738001",
                        display:
                            "Vaccine product containing only live attenuated Mumps orthorubulavirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836498007+836382004",
                        display:
                            "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Measles morbillivirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836498007+836388000",
                        display:
                            "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871831003",
                        display:
                            "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871908002",
                        display:
                            "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "14189004",
                display: "Measles (disorder)",
                target: [
                    {
                        code: "836382004",
                        display:
                            "Vaccine product containing Measles morbillivirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836498007+836382004",
                        display:
                            "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Measles morbillivirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871831003",
                        display:
                            "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836382004 + 836388000",
                        display:
                            "Vaccine product containing Measles morbillivirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871908002",
                        display:
                            "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "40468003",
                display: "Viral hepatitis, type A (disorder)",
                target: [
                    {
                        code: "836375003",
                        display:
                            "Vaccine product containing Hepatitis A virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871803007",
                        display:
                            "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871804001",
                        display:
                            "Vaccine product containing only Hepatitis A virus and Salmonella enterica subspecies enterica serovar Typhi antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "66071002",
                display: "Viral hepatitis, type B (disorder)",
                target: [
                    {
                        code: "836374004",
                        display:
                            "Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871803007",
                        display:
                            "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871806004",
                        display:
                            "Vaccine product containing only Haemophilus influenzae type B and Hepatitis B virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836374004 + 863911006",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871895005",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871891001",
                        display:
                            "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "863911006+836374004+601000221108+836381006",
                        display:
                            "Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004 + 871871008",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
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
                        code: "836377006",
                        display:
                            "Vaccine product containing Influenza virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "52947006",
                display: "Japanese encephalitis virus disease (disorder)",
                target: [
                    {
                        code: "836378001",
                        display:
                            "Vaccine product containing Japanese encephalitis virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)",
                target: [
                    {
                        code: "836403007",
                        display:
                            "Vaccine product containing Tick-borne encephalitis virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "4834000",
                display: "Typhoid fever (disorder)",
                target: [
                    {
                        code: "836390004",
                        display:
                            "Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836383009 + 836390004",
                        display:
                            "Vaccine product containing Vibrio cholerae antigen (medicinal product) + Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871804001",
                        display:
                            "Vaccine product containing only Hepatitis A virus and Salmonella enterica subspecies enterica serovar Typhi antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "56717001",
                display: "Tuberculosis (disorder)",
                target: [
                    {
                        code: "836402002",
                        display:
                            "Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "76902006",
                display: "Tetanus (disorder)",
                target: [
                    {
                        code: "863911006",
                        display:
                            "Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871826000",
                        display:
                            "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871837004",
                        display:
                            "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871891001",
                        display:
                            "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836374004 + 863911006",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871875004",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871878002",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836388000 + 863911006",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "863911006+836374004+601000221108+836381006",
                        display:
                            "Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871887006",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871895005",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004 + 871871008",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
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
                        code: "836398006",
                        display:
                            "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836398006 + 836380007",
                        display:
                            "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "58750007",
                display: "Plague (disorder)",
                target: [
                    {
                        code: "840549009",
                        display:
                            "Vaccine product containing Yersinia pestis antigen (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)",
                target: [
                    {
                        code: "601000221108",
                        display:
                            "Vaccine product containing Bordetella pertussis antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836380007 + 601000221108",
                        display:
                            "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871875004",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871878002",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "863911006+836374004+601000221108+836381006",
                        display:
                            "Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871887006",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871895005",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871891001",
                        display:
                            "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004 + 871871008",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "23511006",
                display: "Meningococcal infectious disease (disorder)",
                target: [
                    {
                        code: "836401009",
                        display:
                            "Vaccine product containing Neisseria meningitidis antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836500008",
                        display:
                            "Vaccine product containing only Haemophilus influenzae type B and Neisseria meningitidis serogroup C antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004 + 871871008",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "709410003",
                display: "Haemophilus influenzae type b infection (disorder)",
                target: [
                    {
                        code: "836380007",
                        display:
                            "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836380007 + 601000221108",
                        display:
                            "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836500008",
                        display:
                            "Vaccine product containing only Haemophilus influenzae type B and Neisseria meningitidis serogroup C antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836398006 + 836380007",
                        display:
                            "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836380007 + 1031000221108",
                        display:
                            "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Human poliovirus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871887006",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871806004",
                        display:
                            "Vaccine product containing only Haemophilus influenzae type B and Hepatitis B virus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871895005",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004 + 871871008",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "397430003",
                display: "Diphtheria caused by Corynebacterium diphtheriae (disorder)",
                target: [
                    {
                        code: "836381006",
                        display:
                            "Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871826000",
                        display:
                            "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871837004",
                        display:
                            "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871875004",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871878002",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836388000 + 863911006",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "863911006+836374004+601000221108+836381006",
                        display:
                            "Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871887006",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836374004 + 863911006",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871895005",
                        display:
                            "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871891001",
                        display:
                            "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "871729003 + 836380007 + 601000221108 + 863911006 + 836374004 + 871871008",
                        display:
                            "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            },
            {
                code: "63650001",
                display: "Cholera (disorder)",
                target: [
                    {
                        code: "836383009",
                        display:
                            "Vaccine product containing Vibrio cholerae antigen (medicinal product)",
                        equivalence: "relatedto"
                    },
                    {
                        code: "836383009 + 836390004",
                        display:
                            "Vaccine product containing Vibrio cholerae antigen (medicinal product) + Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)",
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
                code: "409498004",
                display: "Anthrax (disorder)",
                target: [
                    {
                        code: "836384003",
                        display:
                            "Vaccine product containing Bacillus anthracis antigen (medicinal product)",
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
                code: "307333004",
                display: "Rhesus isoimmunization due to anti-D (disorder)",
                target: [
                    {
                        code: "786224004",
                        display:
                            "Product containing human anti-D immunoglobulin (medicinal product)",
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
                        code: "787859002",
                        display: "Vaccine product (medicinal product)",
                        equivalence: "relatedto"
                    }
                ]
            }
        ]
    }
];

export default VaccinationVaccineTargetdisease;
