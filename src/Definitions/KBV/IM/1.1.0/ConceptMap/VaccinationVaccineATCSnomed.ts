// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_Vaccination_Vaccine_ATC_Snomed
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at â€‹http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap dient dem Mapping der Impfstoffcodes zwischen Snomed CT und ATC

import { ConceptMap } from "../../../../Interfaces";

const VaccinationVaccineATCSnomed: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://fhir.de/CodeSystem/dimdi/atc",
        element: [
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
                    "Product containing human anti-D immunoglobulin (medicinal product)",
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
                code: "1119305005",
                display:
                    "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 antigen (medicinal product)",
                target: [
                    {
                        code: "J07BX03",
                        display: "Covid-19-Impfstoffe",
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
                        code: "J07BX03",
                        display: "Covid-19-Impfstoffe",
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
                        code: "J07AJ52",
                        display:
                            "Pertussis, gereinigtes Antigen, Kombinationen mit Toxoiden",
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
                code: "2221000221107",
                display:
                    "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)",
                target: [
                    {
                        code: "J07BK01",
                        display: "Varicella, lebend abgeschwächt",
                        equivalence: "equivalent"
                    },
                    {
                        code: "J07BK02",
                        display: "Zoster Virus, lebend abgeschwächt",
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
                        code: "J07BJ51",
                        display: "Röteln, Kombinationen mit Mumps, lebend abgeschwächt",
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
                        code: "J07CA13",
                        display:
                            "Diphtherie-Haemophilus influenzae  B-Pertussis-Tetanus-Hepatitis B-Meningokokken  A + C",
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
                        code: "J07CA12",
                        display: "Diphtherie-Pertussis-Poliomyelitis-Tetanus-Hepatitis B",
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
                        code: "J07CA11",
                        display:
                            "Diphtherie-Haemophilus influenzae  B-Pertussis-Tetanus-Hepatitis B",
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
                        code: "J07CA10",
                        display: "Typhus-Hepatitis A",
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
                        code: "J07CA09",
                        display:
                            "Diphtherie-Haemophilus influenzae  B-Pertussis-Poliomyelitis-Tetanus-Hepatitis B",
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
                        code: "J07CA08",
                        display: "Haemophilus influenzae B und Hepatitis B",
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
                        code: "J07CA07",
                        display: "Diphtherie-Hepatitis B-Tetanus",
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
                        code: "J07CA06",
                        display:
                            "Diphtherie-Haemophilus influenzae  B-Pertussis-Poliomyelitis-Tetanus",
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
                        code: "J07CA05",
                        display: "Diphtherie-Hepatitis B-Pertussis-Tetanus",
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
                        code: "J07CA04",
                        display: "Haemophilus influenzae B und Poliomyelitis",
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
                        code: "J07CA03",
                        display: "Diphtherie-Röteln-Tetanus",
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
                        code: "J07CA02",
                        display: "Diphtherie-Pertussis-Poliomyelitis-Tetanus",
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
                        code: "J07CA01",
                        display: "Diphtherie-Poliomyelitis-Tetanus",
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
                        code: "J07BD54",
                        display:
                            "Masern, Kombinationen mit Mumps, Röteln und Varicella,  lebend abgeschwächt",
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
                        code: "J07BD53",
                        display: "Masern, Kombinationen mit Röteln, lebend abgeschwächt",
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
                        code: "J07BD52",
                        display:
                            "Masern, Kombinationen mit Mumps und Röteln,  lebend abgeschwächt",
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
                        code: "J07BD51",
                        display: "Masern, Kombinationen mit Mumps, lebend abgeschwächt",
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
                        code: "J07BC20",
                        display: "Kombinationen",
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
                        code: "J07AM51",
                        display: "Tetanus-Toxoid, Kombinationen mit Diphtherie-Toxoid",
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
                        code: "J07AL52",
                        display:
                            "Pneumokokken, gereinigtes Polysaccharid-Antigen  und Haemophilus influenzae B, konjugiert",
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
                        code: "J07AG53",
                        display:
                            "Haemophilus influenzae B, Kombinationen mit  Meningokokken C, konjugiert",
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
                        code: "J07AG52",
                        display:
                            "Haemophilus influenzae B, Kombinationen mit Pertussis und Toxoiden",
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
                        code: "J07AE51",
                        display:
                            "Cholera, Kombinationen mit Typhus-Impfstoff,  inaktiviert, ganze Zelle",
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
                        code: "J07BA02",
                        display: "Encephalitis, japanische, inaktiviert, ganzes Virus",
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
                        code: "J07BA01",
                        display: "FSME, inaktiviert, ganzes Virus",
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
                        code: "J07BE",
                        display: "Mumps-Impfstoffe",
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
                        code: "J07BF",
                        display: "Poliomyelitis-Impfstoffe",
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
                        code: "J07BH",
                        display: "Rotavirus-Diarrhoe-Impfstoffe",
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
                        code: "J07BG",
                        display: "Tollwut-Impfstoffe",
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
                        code: "J07BK03",
                        display: "Zoster Virus, gereinigtes Antigen",
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
                        code: "J07BX01",
                        display: "Pocken-Impfstoff, lebend, modifiziert",
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
                        code: "J07BM",
                        display: "Papillomvirus-Impfstoffe",
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
                        code: "J07BL",
                        display: "Gelbfieber-Impfstoffe",
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
                        code: "J07BJ",
                        display: "Röteln-Impfstoffe",
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
                        code: "J07BD",
                        display: "Masern-Impfstoffe",
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
                        code: "J07BC02",
                        display: "Hepatitis A, inaktiviert, ganzes Virus",
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
                        code: "J07BC01",
                        display: "Hepatitis B, gereinigtes Antigen",
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
                        code: "J07BB",
                        display: "Influenza-Impfstoffe",
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
                        code: "J07AP",
                        display: "Typhus-Impfstoffe",
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
                        code: "J07AN",
                        display: "Tuberkulose-Impfstoffe",
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
                        code: "J07AM",
                        display: "Tetanus-Impfstoffe",
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
                        code: "J07AL",
                        display: "Pneumokokken-Impfstoffe",
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
                        code: "J07AK",
                        display: "Pest-Impfstoffe",
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
                        code: "J07AJ",
                        display: "Pertussis-Impfstoffe",
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
                        code: "J07AH",
                        display: "Meningokokken-Impfstoffe",
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
                        code: "J07AG",
                        display: "Haemophilus influenzae B-Impfstoffe",
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
                        code: "J07AF",
                        display: "Diphtherie-Impfstoffe",
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
                        code: "J07AE",
                        display: "Cholera-Impfstoffe",
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
                        code: "J07AC",
                        display: "Milzbrand-Impfstoffe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "7230005",
                display: "Brucella vaccine (product)",
                target: [
                    {
                        code: "J07AD01",
                        display: "Brucella-Antigen",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationVaccineATCSnomed;
