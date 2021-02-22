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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_List

type VaccinationVaccineList =
    | "421245007"
    | "787859002"
    | "37146000"
    | "407746005"
    | "787859002:127489000=412300006"
    | "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}{127489000=768365004}{127489000=768366003}"
    | "427542001"
    | "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}"
    | "333707007"
    | "426842004"
    | "426971004"
    | "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}"
    | "414004005"
    | "426081003"
    | "787859002:{127489000=412374001}{127489000=396436004}"
    | "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}"
    | "414005006"
    | "414006007"
    | "419550004"
    | "787859002:{127489000=396427003}{127489000=396438003}"
    | "61153008"
    | "785865001"
    | "333702001"
    | "350327004"
    | "78785900:{127489000=398730001}{127489000=412374001}"
    | "423912009"
    | "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}"
    | "787859002:{127489000=396422009}{127489000=396441007}"
    | "333697005"
    | "333699008"
    | "90043005"
    | "111164008"
    | "116077000"
    | "333606008"
    | "407737004"
    | "33234009"
    | "424519000"
    | "56844000"
    | "386013003"
    | "386012008"
    | "14745005"
    | "34689006"
    | "46233009"
    | "89428009"
    | "420538001"
    | "333621002"
    | "333598008"
    | "11866009"
    | "61602008"
    | "423531006"
    | "333680004"
    | "428214002"
    | "35736007"
    | "7230005"
    | "333521006"
    | "714569001"
    | "786224004"
    | "384706007"
    | "62294009"
    | "9542007"
    | "80834004"
    | "9778000"
    | "108725001"
    | "763703008";

const VaccinationVaccineList: t.Type<VaccinationVaccineList> = t.union(
    [
        t.literal("421245007"),
        t.literal("787859002"),
        t.literal("37146000"),
        t.literal("407746005"),
        t.literal("787859002:127489000=412300006"),
        t.literal(
            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}{127489000=768365004}{127489000=768366003}"
        ),
        t.literal("427542001"),
        t.literal(
            "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}"
        ),
        t.literal("333707007"),
        t.literal("426842004"),
        t.literal("426971004"),
        t.literal(
            "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}"
        ),
        t.literal("414004005"),
        t.literal("426081003"),
        t.literal("787859002:{127489000=412374001}{127489000=396436004}"),
        t.literal(
            "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}"
        ),
        t.literal("414005006"),
        t.literal("414006007"),
        t.literal("419550004"),
        t.literal("787859002:{127489000=396427003}{127489000=396438003}"),
        t.literal("61153008"),
        t.literal("785865001"),
        t.literal("333702001"),
        t.literal("350327004"),
        t.literal("78785900:{127489000=398730001}{127489000=412374001}"),
        t.literal("423912009"),
        t.literal(
            "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}"
        ),
        t.literal("787859002:{127489000=396422009}{127489000=396441007}"),
        t.literal("333697005"),
        t.literal("333699008"),
        t.literal("90043005"),
        t.literal("111164008"),
        t.literal("116077000"),
        t.literal("333606008"),
        t.literal("407737004"),
        t.literal("33234009"),
        t.literal("424519000"),
        t.literal("56844000"),
        t.literal("386013003"),
        t.literal("386012008"),
        t.literal("14745005"),
        t.literal("34689006"),
        t.literal("46233009"),
        t.literal("89428009"),
        t.literal("420538001"),
        t.literal("333621002"),
        t.literal("333598008"),
        t.literal("11866009"),
        t.literal("61602008"),
        t.literal("423531006"),
        t.literal("333680004"),
        t.literal("428214002"),
        t.literal("35736007"),
        t.literal("7230005"),
        t.literal("333521006"),
        t.literal("714569001"),
        t.literal("786224004"),
        t.literal("384706007"),
        t.literal("62294009"),
        t.literal("9542007"),
        t.literal("80834004"),
        t.literal("9778000"),
        t.literal("108725001"),
        t.literal("763703008")
    ],
    "VaccinationVaccineList"
);

export const VaccinationVaccineListArray: string[] = [
    "421245007",
    "787859002",
    "37146000",
    "407746005",
    "787859002:127489000=412300006",
    "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}{127489000=768365004}{127489000=768366003}",
    "427542001",
    "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
    "333707007",
    "426842004",
    "426971004",
    "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}",
    "414004005",
    "426081003",
    "787859002:{127489000=412374001}{127489000=396436004}",
    "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}",
    "414005006",
    "414006007",
    "419550004",
    "787859002:{127489000=396427003}{127489000=396438003}",
    "61153008",
    "785865001",
    "333702001",
    "350327004",
    "78785900:{127489000=398730001}{127489000=412374001}",
    "423912009",
    "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}",
    "787859002:{127489000=396422009}{127489000=396441007}",
    "333697005",
    "333699008",
    "90043005",
    "111164008",
    "116077000",
    "333606008",
    "407737004",
    "33234009",
    "424519000",
    "56844000",
    "386013003",
    "386012008",
    "14745005",
    "34689006",
    "46233009",
    "89428009",
    "420538001",
    "333621002",
    "333598008",
    "11866009",
    "61602008",
    "423531006",
    "333680004",
    "428214002",
    "35736007",
    "7230005",
    "333521006",
    "714569001",
    "786224004",
    "384706007",
    "62294009",
    "9542007",
    "80834004",
    "9778000",
    "108725001",
    "763703008"
];

export const VaccinationVaccineListValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "421245007",
                display: "Diphtheria + pertussis + tetanus vaccine (product)"
            },
            {
                code: "787859002",
                display: "Vaccine product (product)"
            },
            {
                code: "37146000",
                display: "Typhus vaccine (product)"
            },
            {
                code: "407746005",
                display: "Varicella-zoster live attenuated vaccine (product)"
            },
            {
                code: "787859002:127489000=412300006",
                display:
                    "Vaccine product (product): Has active ingredient (attribute) = Rubella and mumps vaccine (substance)"
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}{127489000=768365004}{127489000=768366003}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) =  Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Meningococcus group A vaccine (substance) } { Has active ingredient (attribute) = Meningococcus group C vaccine (substance) }"
            },
            {
                code: "427542001",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus vaccine (product)"
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=412374001}{127489000=396433007}{127489000=412375000}{127489000=396424005}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) } { Has active ingredient (attribute) =  Hepatitis B virus vaccine (substance) }"
            },
            {
                code: "333707007",
                display: "Hepatitis A+typhoid vaccine (product)"
            },
            {
                code: "426842004",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis + recombinant hepatitis B virus + recombinant haemophilus influenzae type B vaccine (product)"
            },
            {
                code: "426971004",
                display:
                    "Haemophilus influenzae Type b + recombinant hepatitis B virus vaccine (product)"
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=396424005}{127489000=412375000}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Hepatitis B virus vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }"
            },
            {
                code: "414004005",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis + haemophilus influenzae b vaccine (product)"
            },
            {
                code: "426081003",
                display:
                    "Diphtheria + tetanus + pertussis + recombinant hepatitis B virus vaccine (product)"
            },
            {
                code: "787859002:{127489000=412374001}{127489000=396436004}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Live Poliovirus vaccine (substance) }"
            },
            {
                code:
                    "787859002:{127489000=428126001}{127489000=396438003}{127489000=412375000}",
                display:
                    "Vaccine product (product):  { Has active ingredient (attribute) = Diphtheria vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) } { Has active ingredient (attribute) = Tetanus vaccine (substance) }"
            },
            {
                code: "414005006",
                display:
                    "Diphtheria + tetanus + pertussis + poliomyelitis vaccine (product)"
            },
            {
                code: "414006007",
                display: "Diphtheria + tetanus + poliomyelitis vaccine (product)"
            },
            {
                code: "419550004",
                display: "Measles + mumps + rubella + varicella vaccine (product)"
            },
            {
                code: "787859002:{127489000=396427003}{127489000=396438003}",
                display:
                    "Vaccine product (product):  { Has active ingredient (attribute) = Measles vaccine (substance) } { Has active ingredient (attribute) = Rubella vaccine (substance) }"
            },
            {
                code: "61153008",
                display: "Measles, mumps and rubella vaccine (product)"
            },
            {
                code: "785865001",
                display: "Measles and mumps vaccine (product)"
            },
            {
                code: "333702001",
                display: "Hepatitis A+B vaccine (product)"
            },
            {
                code: "350327004",
                display: "Diphtheria + tetanus vaccine (product)"
            },
            {
                code: "78785900:{127489000=398730001}{127489000=412374001}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Pneumococcal vaccine (substance) } { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) }"
            },
            {
                code: "423912009",
                display:
                    "Haemophilus influenzae type b + Meningococcal group C vaccine (product)"
            },
            {
                code:
                    "787859002:{127489000=412374001}{127489000=396433007}{127489000=396411005}",
                display:
                    "Vaccine product (product):  { Has active ingredient (attribute) = Haemophilus influenzae type b vaccine (substance) } { Has active ingredient (attribute) = Pertussis vaccine (substance) } { Has active ingredient (attribute) = Toxoid (substance) }"
            },
            {
                code: "787859002:{127489000=396422009}{127489000=396441007}",
                display:
                    "Vaccine product (product): { Has active ingredient (attribute) = Cholera vaccine (substance) } { Has active ingredient (attribute) = Typhoid vaccine (substance) }"
            },
            {
                code: "333697005",
                display: "Japanese B encephalitis vaccine"
            },
            {
                code: "333699008",
                display: "Tick-borne encephalitis vaccine"
            },
            {
                code: "90043005",
                display: "Mumps live virus vaccine"
            },
            {
                code: "111164008",
                display: "Poliovirus vaccine"
            },
            {
                code: "116077000",
                display: "Rotavirus vaccine"
            },
            {
                code: "333606008",
                display: "Rabies vaccine"
            },
            {
                code: "407737004",
                display: "Varicella-zoster vaccine"
            },
            {
                code: "33234009",
                display: "Smallpox vaccine"
            },
            {
                code: "424519000",
                display: "Human papillomavirus vaccine"
            },
            {
                code: "56844000",
                display: "Yellow fever vaccine"
            },
            {
                code: "386013003",
                display: "Rubella vaccine"
            },
            {
                code: "386012008",
                display: "Measles vaccine"
            },
            {
                code: "14745005",
                display: "Hepatitis A virus vaccine"
            },
            {
                code: "34689006",
                display: "Hepatitis B virus vaccine"
            },
            {
                code: "46233009",
                display: "Influenza virus vaccine"
            },
            {
                code: "89428009",
                display: "Typhoid vaccine"
            },
            {
                code: "420538001",
                display: "Tuberculosos vaccine"
            },
            {
                code: "333621002",
                display: "Tetanus vaccine"
            },
            {
                code: "333598008",
                display: "Pneumococcal vaccine"
            },
            {
                code: "11866009",
                display: "Plague vaccine"
            },
            {
                code: "61602008",
                display: "Pertussis vaccine"
            },
            {
                code: "423531006",
                display: "Meningococcus vaccine"
            },
            {
                code: "333680004",
                display: "Haemophilus influenzae Type b vaccine"
            },
            {
                code: "428214002",
                display: "Diphtheria vaccine"
            },
            {
                code: "35736007",
                display: "Cholera vaccine"
            },
            {
                code: "7230005",
                display: "Brucella vaccine"
            },
            {
                code: "333521006",
                display: "Anthrax vaccine"
            },
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
    }
];

export default VaccinationVaccineList;
