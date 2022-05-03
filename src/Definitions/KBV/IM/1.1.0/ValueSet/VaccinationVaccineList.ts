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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_List

type VaccinationVaccineList =
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
    | "836384003";

const VaccinationVaccineList: t.Type<VaccinationVaccineList> = t.union(
    [
        t.literal("1119305005"),
        t.literal("1119349007"),
        t.literal("871875004"),
        t.literal("787859002"),
        t.literal("37146000"),
        t.literal("2221000221107"),
        t.literal("836498007+836388000"),
        t.literal("871729003+836380007+601000221108+863911006+836374004+871871008"),
        t.literal("871891001"),
        t.literal("871729003+836380007+601000221108+863911006+836374004"),
        t.literal("871804001"),
        t.literal("871895005"),
        t.literal("871806004"),
        t.literal("871729003+836374004+863911006"),
        t.literal("871887006"),
        t.literal("863911006+836374004+601000221108+836381006"),
        t.literal("836380007+1031000221108"),
        t.literal("871729003+836388000+863911006"),
        t.literal("871878002"),
        t.literal("871837004"),
        t.literal("871908002"),
        t.literal("836382004+836388000"),
        t.literal("871831003"),
        t.literal("836498007+836382004"),
        t.literal("871803007"),
        t.literal("871826000"),
        t.literal("836398006+836380007"),
        t.literal("836500008"),
        t.literal("836380007+601000221108"),
        t.literal("836383009+836390004"),
        t.literal("836378001"),
        t.literal("836403007"),
        t.literal("871738001"),
        t.literal("1031000221108"),
        t.literal("836387005"),
        t.literal("836393002"),
        t.literal("836495005"),
        t.literal("836389008"),
        t.literal("836379009"),
        t.literal("836385002"),
        t.literal("836388000"),
        t.literal("836382004"),
        t.literal("836375003"),
        t.literal("836374004"),
        t.literal("836377006"),
        t.literal("836390004"),
        t.literal("836402002"),
        t.literal("863911006"),
        t.literal("836398006"),
        t.literal("840549009"),
        t.literal("601000221108"),
        t.literal("836401009"),
        t.literal("836380007"),
        t.literal("836381006"),
        t.literal("836383009"),
        t.literal("836384003")
    ],
    "VaccinationVaccineList"
);

export const VaccinationVaccineListArray: string[] = [
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
    "836384003"
];

export const VaccinationVaccineListValueSet: ValueSet = [
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
    }
];

export default VaccinationVaccineList;
