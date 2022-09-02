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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import VaccinationVaccineGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationVaccineGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine

type VaccinationVaccine =
    | "1119305005"
    | "1119349007"
    | "871875004"
    | "787859002"
    | "37146000"
    | "2221000221107"
    | "836498007+836388000"
    | "871729003+836380007+601000221108+863911006+836374004+871871008"
    | "871891001"
    | "871729003+836380007+601000221108+863911006+836374004"
    | "871804001"
    | "871895005"
    | "871806004"
    | "871729003+836374004+863911006"
    | "871887006"
    | "863911006+836374004+601000221108+836381006"
    | "836380007+1031000221108"
    | "871729003+836388000+863911006"
    | "871878002"
    | "871837004"
    | "871908002"
    | "836382004+836388000"
    | "871831003"
    | "836498007+836382004"
    | "871803007"
    | "871826000"
    | "836398006+836380007"
    | "836500008"
    | "836380007+601000221108"
    | "836383009+836390004"
    | "836378001"
    | "836403007"
    | "871738001"
    | "1031000221108"
    | "836387005"
    | "836393002"
    | "836495005"
    | "836389008"
    | "836379009"
    | "836385002"
    | "836388000"
    | "836382004"
    | "836375003"
    | "836374004"
    | "836377006"
    | "836390004"
    | "836402002"
    | "863911006"
    | "836398006"
    | "840549009"
    | "601000221108"
    | "836401009"
    | "836380007"
    | "836381006"
    | "836383009"
    | "836384003"
    | "714569001"
    | "786224004"
    | "384706007"
    | "62294009"
    | "9542007"
    | "80834004"
    | "9778000"
    | "108725001"
    | "763703008"
    | "7230005";

type VaccinationVaccineType = t.KeyofC<{
    "1119305005": null;
    "1119349007": null;
    "871875004": null;
    "787859002": null;
    "37146000": null;
    "2221000221107": null;
    "836498007+836388000": null;
    "871729003+836380007+601000221108+863911006+836374004+871871008": null;
    "871891001": null;
    "871729003+836380007+601000221108+863911006+836374004": null;
    "871804001": null;
    "871895005": null;
    "871806004": null;
    "871729003+836374004+863911006": null;
    "871887006": null;
    "863911006+836374004+601000221108+836381006": null;
    "836380007+1031000221108": null;
    "871729003+836388000+863911006": null;
    "871878002": null;
    "871837004": null;
    "871908002": null;
    "836382004+836388000": null;
    "871831003": null;
    "836498007+836382004": null;
    "871803007": null;
    "871826000": null;
    "836398006+836380007": null;
    "836500008": null;
    "836380007+601000221108": null;
    "836383009+836390004": null;
    "836378001": null;
    "836403007": null;
    "871738001": null;
    "1031000221108": null;
    "836387005": null;
    "836393002": null;
    "836495005": null;
    "836389008": null;
    "836379009": null;
    "836385002": null;
    "836388000": null;
    "836382004": null;
    "836375003": null;
    "836374004": null;
    "836377006": null;
    "836390004": null;
    "836402002": null;
    "863911006": null;
    "836398006": null;
    "840549009": null;
    "601000221108": null;
    "836401009": null;
    "836380007": null;
    "836381006": null;
    "836383009": null;
    "836384003": null;
    "714569001": null;
    "786224004": null;
    "384706007": null;
    "62294009": null;
    "9542007": null;
    "80834004": null;
    "9778000": null;
    "108725001": null;
    "763703008": null;
    "7230005": null;
}>;

const VaccinationVaccine: VaccinationVaccineType = t.keyof({
    "1119305005": null,
    "1119349007": null,
    "871875004": null,
    "787859002": null,
    "37146000": null,
    "2221000221107": null,
    "836498007+836388000": null,
    "871729003+836380007+601000221108+863911006+836374004+871871008": null,
    "871891001": null,
    "871729003+836380007+601000221108+863911006+836374004": null,
    "871804001": null,
    "871895005": null,
    "871806004": null,
    "871729003+836374004+863911006": null,
    "871887006": null,
    "863911006+836374004+601000221108+836381006": null,
    "836380007+1031000221108": null,
    "871729003+836388000+863911006": null,
    "871878002": null,
    "871837004": null,
    "871908002": null,
    "836382004+836388000": null,
    "871831003": null,
    "836498007+836382004": null,
    "871803007": null,
    "871826000": null,
    "836398006+836380007": null,
    "836500008": null,
    "836380007+601000221108": null,
    "836383009+836390004": null,
    "836378001": null,
    "836403007": null,
    "871738001": null,
    "1031000221108": null,
    "836387005": null,
    "836393002": null,
    "836495005": null,
    "836389008": null,
    "836379009": null,
    "836385002": null,
    "836388000": null,
    "836382004": null,
    "836375003": null,
    "836374004": null,
    "836377006": null,
    "836390004": null,
    "836402002": null,
    "863911006": null,
    "836398006": null,
    "840549009": null,
    "601000221108": null,
    "836401009": null,
    "836380007": null,
    "836381006": null,
    "836383009": null,
    "836384003": null,
    "714569001": null,
    "786224004": null,
    "384706007": null,
    "62294009": null,
    "9542007": null,
    "80834004": null,
    "9778000": null,
    "108725001": null,
    "763703008": null,
    "7230005": null
});
export const VaccinationVaccineArray: string[] = [
    "1119305005",
    "1119349007",
    "871875004",
    "787859002",
    "37146000",
    "2221000221107",
    "836498007+836388000",
    "871729003+836380007+601000221108+863911006+836374004+871871008",
    "871891001",
    "871729003+836380007+601000221108+863911006+836374004",
    "871804001",
    "871895005",
    "871806004",
    "871729003+836374004+863911006",
    "871887006",
    "863911006+836374004+601000221108+836381006",
    "836380007+1031000221108",
    "871729003+836388000+863911006",
    "871878002",
    "871837004",
    "871908002",
    "836382004+836388000",
    "871831003",
    "836498007+836382004",
    "871803007",
    "871826000",
    "836398006+836380007",
    "836500008",
    "836380007+601000221108",
    "836383009+836390004",
    "836378001",
    "836403007",
    "871738001",
    "1031000221108",
    "836387005",
    "836393002",
    "836495005",
    "836389008",
    "836379009",
    "836385002",
    "836388000",
    "836382004",
    "836375003",
    "836374004",
    "836377006",
    "836390004",
    "836402002",
    "863911006",
    "836398006",
    "840549009",
    "601000221108",
    "836401009",
    "836380007",
    "836381006",
    "836383009",
    "836384003",
    "714569001",
    "786224004",
    "384706007",
    "62294009",
    "9542007",
    "80834004",
    "9778000",
    "108725001",
    "763703008",
    "7230005"
];

export const VaccinationVaccineValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "1119305005",
                display:
                    "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 antigen (medicinal product)"
            },
            {
                code: "1119349007",
                display:
                    "Vaccine product containing only Severe acute respiratory syndrome coronavirus 2 messenger ribonucleic acid (medicinal product)"
            },
            {
                code: "871875004",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
            },
            {
                code: "787859002",
                display: "Vaccine product (medicinal product)"
            },
            {
                code: "37146000",
                display: "Typhus vaccine (product)"
            },
            {
                code: "2221000221107",
                display:
                    "Vaccine product containing only live attenuated Human alphaherpesvirus 3 antigen (medicinal product)"
            },
            {
                code: "836498007+836388000",
                display:
                    "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)"
            },
            {
                code: "871729003+836380007+601000221108+863911006+836374004+871871008",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing only Neisseria meningitidis serogroup A and C antigens (medicinal product)"
            },
            {
                code: "871891001",
                display:
                    "Vaccine product containing only acellular Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Hepatitis B virus and inactivated whole Human poliovirus antigens (medicinal product)"
            },
            {
                code: "871729003+836380007+601000221108+863911006+836374004",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product)"
            },
            {
                code: "871804001",
                display:
                    "Vaccine product containing only Hepatitis A virus and Salmonella enterica subspecies enterica serovar Typhi antigens (medicinal product)"
            },
            {
                code: "871895005",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Hepatitis B virus and Human poliovirus antigens (medicinal product)"
            },
            {
                code: "871806004",
                display:
                    "Vaccine product containing only Haemophilus influenzae type B and Hepatitis B virus antigens (medicinal product)"
            },
            {
                code: "871729003+836374004+863911006",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)"
            },
            {
                code: "871887006",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Haemophilus influenzae type B and Human poliovirus antigens (medicinal product)"
            },
            {
                code: "863911006+836374004+601000221108+836381006",
                display:
                    "Vaccine product containing Clostridium tetani antigen (medicinal product) + Vaccine product containing Hepatitis B virus antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product) + Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)"
            },
            {
                code: "836380007+1031000221108",
                display:
                    "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Human poliovirus antigen (medicinal product)"
            },
            {
                code: "871729003+836388000+863911006",
                display:
                    "Vaccine product containing only Corynebacterium diphtheriae antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product) + Vaccine product containing Clostridium tetani antigen (medicinal product)"
            },
            {
                code: "871878002",
                display:
                    "Vaccine product containing only Bordetella pertussis and Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
            },
            {
                code: "871837004",
                display:
                    "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae and Human poliovirus antigens (medicinal product)"
            },
            {
                code: "871908002",
                display:
                    "Vaccine product containing only Human alphaherpesvirus 3 and Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
            },
            {
                code: "836382004+836388000",
                display:
                    "Vaccine product containing Measles morbillivirus antigen (medicinal product) + Vaccine product containing Rubella virus antigen (medicinal product)"
            },
            {
                code: "871831003",
                display:
                    "Vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (medicinal product)"
            },
            {
                code: "836498007+836382004",
                display:
                    "Vaccine product containing Mumps orthorubulavirus antigen (medicinal product) + Vaccine product containing Measles morbillivirus antigen (medicinal product)"
            },
            {
                code: "871803007",
                display:
                    "Vaccine product containing only Hepatitis A and Hepatitis B virus antigens (medicinal product)"
            },
            {
                code: "871826000",
                display:
                    "Vaccine product containing only Clostridium tetani and Corynebacterium diphtheriae antigens (medicinal product)"
            },
            {
                code: "836398006+836380007",
                display:
                    "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product) + Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)"
            },
            {
                code: "836500008",
                display:
                    "Vaccine product containing only Haemophilus influenzae type B and Neisseria meningitidis serogroup C antigens (medicinal product)"
            },
            {
                code: "836380007+601000221108",
                display:
                    "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product) + Vaccine product containing Bordetella pertussis antigen (medicinal product)"
            },
            {
                code: "836383009+836390004",
                display:
                    "Vaccine product containing Vibrio cholerae antigen (medicinal product) + Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
            },
            {
                code: "836378001",
                display:
                    "Vaccine product containing Japanese encephalitis virus antigen (medicinal product)"
            },
            {
                code: "836403007",
                display:
                    "Vaccine product containing Tick-borne encephalitis virus antigen (medicinal product)"
            },
            {
                code: "871738001",
                display:
                    "Vaccine product containing only live attenuated Mumps orthorubulavirus antigen (medicinal product)"
            },
            {
                code: "1031000221108",
                display:
                    "Vaccine product containing Human poliovirus antigen (medicinal product)"
            },
            {
                code: "836387005",
                display:
                    "Vaccine product containing Rotavirus antigen (medicinal product)"
            },
            {
                code: "836393002",
                display:
                    "Vaccine product containing Rabies lyssavirus antigen (medicinal product)"
            },
            {
                code: "836495005",
                display:
                    "Vaccine product containing Human alphaherpesvirus 3 antigen (medicinal product)"
            },
            {
                code: "836389008",
                display:
                    "Vaccine product containing Vaccinia virus antigen (medicinal product)"
            },
            {
                code: "836379009",
                display:
                    "Vaccine product containing Human papillomavirus antigen (medicinal product)"
            },
            {
                code: "836385002",
                display:
                    "Vaccine product containing Yellow fever virus antigen (medicinal product)"
            },
            {
                code: "836388000",
                display:
                    "Vaccine product containing Rubella virus antigen (medicinal product)"
            },
            {
                code: "836382004",
                display:
                    "Vaccine product containing Measles morbillivirus antigen (medicinal product)"
            },
            {
                code: "836375003",
                display:
                    "Vaccine product containing Hepatitis A virus antigen (medicinal product)"
            },
            {
                code: "836374004",
                display:
                    "Vaccine product containing Hepatitis B virus antigen (medicinal product)"
            },
            {
                code: "836377006",
                display:
                    "Vaccine product containing Influenza virus antigen (medicinal product)"
            },
            {
                code: "836390004",
                display:
                    "Vaccine product containing Salmonella enterica subspecies enterica serovar Typhi antigen (medicinal product)"
            },
            {
                code: "836402002",
                display:
                    "Vaccine product containing live attenuated Mycobacterium bovis antigen (medicinal product)"
            },
            {
                code: "863911006",
                display:
                    "Vaccine product containing Clostridium tetani antigen (medicinal product)"
            },
            {
                code: "836398006",
                display:
                    "Vaccine product containing Streptococcus pneumoniae antigen (medicinal product)"
            },
            {
                code: "840549009",
                display:
                    "Vaccine product containing Yersinia pestis antigen (medicinal product)"
            },
            {
                code: "601000221108",
                display:
                    "Vaccine product containing Bordetella pertussis antigen (medicinal product)"
            },
            {
                code: "836401009",
                display:
                    "Vaccine product containing Neisseria meningitidis antigen (medicinal product)"
            },
            {
                code: "836380007",
                display:
                    "Vaccine product containing Haemophilus influenzae type B antigen (medicinal product)"
            },
            {
                code: "836381006",
                display:
                    "Vaccine product containing Corynebacterium diphtheriae antigen (medicinal product)"
            },
            {
                code: "836383009",
                display:
                    "Vaccine product containing Vibrio cholerae antigen (medicinal product)"
            },
            {
                code: "836384003",
                display:
                    "Vaccine product containing Bacillus anthracis antigen (medicinal product)"
            }
        ]
    },
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "714569001",
                display:
                    "Product containing normal immunoglobulin human (medicinal product)"
            },
            {
                code: "786224004",
                display:
                    "Product containing human anti-D immunoglobulin (medicinal product)|"
            },
            {
                code: "384706007",
                display: "Product containing tetanus antitoxin (medicinal product)"
            },
            {
                code: "62294009",
                display:
                    "Product containing Varicella-zoster virus antibody (medicinal product)"
            },
            {
                code: "9542007",
                display:
                    "Product containing Hepatitis B surface antigen immunoglobulin (medicinal product)"
            },
            {
                code: "80834004",
                display:
                    "Product containing rabies human immune globulin (medicinal product)"
            },
            {
                code: "9778000",
                display: "Product containing Cytomegalovirus antibody (medicinal product)"
            },
            {
                code: "108725001",
                display: "Product containing palivizumab (medicinal product)"
            },
            {
                code: "763703008",
                display: "Product containing bezlotoxumab (medicinal product)"
            }
        ]
    },
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "7230005",
                display: "Brucella vaccine (product)"
            }
        ]
    }
];

export { VaccinationVaccineGerman as ConceptMap };

export default VaccinationVaccine;
