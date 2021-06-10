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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Practitioner_Speciality

type CMRPractitionerSpeciality =
    | "309343006"
    | "1"
    | "3"
    | "010"
    | "042"
    | "050"
    | "060"
    | "070"
    | "080"
    | "091"
    | "093"
    | "096"
    | "097"
    | "102"
    | "110"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192"
    | "196"
    | "230"
    | "304"
    | "308"
    | "313"
    | "314"
    | "330"
    | "341"
    | "512"
    | "517"
    | "518"
    | "521"
    | "522"
    | "523"
    | "524"
    | "525"
    | "526"
    | "527"
    | "528"
    | "530"
    | "531"
    | "535"
    | "536"
    | "537"
    | "544"
    | "2"
    | "179"
    | "4"
    | "33"
    | "37"
    | "38"
    | "39"
    | "41"
    | "47"
    | "76"
    | "86"
    | "88"
    | "89"
    | "91";

const CMRPractitionerSpeciality: t.Type<CMRPractitionerSpeciality> = t.union(
    [
        t.literal("309343006"),
        t.literal("1"),
        t.literal("3"),
        t.literal("010"),
        t.literal("042"),
        t.literal("050"),
        t.literal("060"),
        t.literal("070"),
        t.literal("080"),
        t.literal("091"),
        t.literal("093"),
        t.literal("096"),
        t.literal("097"),
        t.literal("102"),
        t.literal("110"),
        t.literal("140"),
        t.literal("143"),
        t.literal("160"),
        t.literal("161"),
        t.literal("171"),
        t.literal("192"),
        t.literal("196"),
        t.literal("230"),
        t.literal("304"),
        t.literal("308"),
        t.literal("313"),
        t.literal("314"),
        t.literal("330"),
        t.literal("341"),
        t.literal("512"),
        t.literal("517"),
        t.literal("518"),
        t.literal("521"),
        t.literal("522"),
        t.literal("523"),
        t.literal("524"),
        t.literal("525"),
        t.literal("526"),
        t.literal("527"),
        t.literal("528"),
        t.literal("530"),
        t.literal("531"),
        t.literal("535"),
        t.literal("536"),
        t.literal("537"),
        t.literal("544"),
        t.literal("2"),
        t.literal("179"),
        t.literal("4"),
        t.literal("33"),
        t.literal("37"),
        t.literal("38"),
        t.literal("39"),
        t.literal("41"),
        t.literal("47"),
        t.literal("76"),
        t.literal("86"),
        t.literal("88"),
        t.literal("89"),
        t.literal("91")
    ],
    "CMRPractitionerSpeciality"
);

export const CMRPractitionerSpecialityArray: string[] = [
    "309343006",
    "1",
    "3",
    "010",
    "042",
    "050",
    "060",
    "070",
    "080",
    "091",
    "093",
    "096",
    "097",
    "102",
    "110",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192",
    "196",
    "230",
    "304",
    "308",
    "313",
    "314",
    "330",
    "341",
    "512",
    "517",
    "518",
    "521",
    "522",
    "523",
    "524",
    "525",
    "526",
    "527",
    "528",
    "530",
    "531",
    "535",
    "536",
    "537",
    "544",
    "2",
    "179",
    "4",
    "33",
    "37",
    "38",
    "39",
    "41",
    "47",
    "76",
    "86",
    "88",
    "89",
    "91"
];

export const CMRPractitionerSpecialityValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "309343006",
                display: "Physician (occupation)"
            }
        ]
    },
    {
        system: "urn:oid:1.2.276.0.76.5.493",
        concept: [
            {
                code: "1",
                display: "Arzt in Facharztausbildung"
            },
            {
                code: "3",
                display: "Praktischer Arzt"
            }
        ]
    },
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BAR2_WBO",
        concept: [
            {
                code: "010",
                display: "FA Allgemeinmedizin"
            },
            {
                code: "042",
                display: "SP Unfallchirurgie"
            },
            {
                code: "050",
                display: "FA Frauenheilkunde und Geburtshilfe"
            },
            {
                code: "060",
                display: "FA Hals-, Nasen-, Ohrenheilkunde"
            },
            {
                code: "070",
                display: "FA Haut- und Geschlechtskrankheiten"
            },
            {
                code: "080",
                display: "FA Innere Medizin"
            },
            {
                code: "091",
                display: "SP Kinderkardiologie"
            },
            {
                code: "093",
                display: "SP Neonatologie"
            },
            {
                code: "096",
                display: "TG Kindernephrologie"
            },
            {
                code: "097",
                display: "TG Kinder-Lungen- u. Bronchialheilkunde"
            },
            {
                code: "102",
                display: "FA Kinder- und Jugendpsychiatrie und -psychotherapie"
            },
            {
                code: "110",
                display: "FA Laboratoriumsmedizin"
            },
            {
                code: "140",
                display: "FA Nervenheilkunde"
            },
            {
                code: "143",
                display: "Psychotherapeutisch tätiger Arzt"
            },
            {
                code: "160",
                display: "FA Orthopädie"
            },
            {
                code: "161",
                display: "SP Rheumatologie"
            },
            {
                code: "171",
                display: "TG Neuropathologie"
            },
            {
                code: "192",
                display: "TG Neuroradiologie"
            },
            {
                code: "196",
                display: "SP Kinderradiologie"
            },
            {
                code: "230",
                display: "FA Öffentliches Gesundheitswesen"
            },
            {
                code: "304",
                display: "FA Kinderchirurgie"
            },
            {
                code: "308",
                display: "FA Physiologie"
            },
            {
                code: "313",
                display: "FA Herzchirurgie"
            },
            {
                code: "314",
                display: "FA Humangenetik"
            },
            {
                code: "330",
                display: "FA Physikalische und Rehabilitative Medizin"
            },
            {
                code: "341",
                display: "FA Kinder-und Jugendmedizin"
            },
            {
                code: "512",
                display: "FA Orthopädie und Unfallchirurgie"
            },
            {
                code: "517",
                display: "SP Spezielle Geburtshilfe und Perinatalmedizin"
            },
            {
                code: "518",
                display: "FA Sprach-, Stimm- und kindliche Hörstörungen"
            },
            {
                code: "521",
                display: "FA Innere Medizin und (SP) Angiologie"
            },
            {
                code: "522",
                display: "FA Innere Medizin und (SP) Endokrinologie und Diabetologie"
            },
            {
                code: "523",
                display: "FA Innere Medizin und (SP) Gastroenterologie"
            },
            {
                code: "524",
                display: "FA Innere Medizin und (SP) Hämatologie und Onkologie"
            },
            {
                code: "525",
                display: "FA Innere Medizin und (SP) Kardiologie"
            },
            {
                code: "526",
                display: "FA Innere Medizin und (SP) Nephrologie"
            },
            {
                code: "527",
                display: "FA Innere Medizin und (SP) Pneumologie"
            },
            {
                code: "528",
                display: "FA Innere Medizin und (SP) Rheumatologie"
            },
            {
                code: "530",
                display: "SP Kinder-Hämatologie und -Onkologie"
            },
            {
                code: "531",
                display: "SP Neuropädiatrie"
            },
            {
                code: "535",
                display: "FA Radiologie (neue (M-)WBO)"
            },
            {
                code: "536",
                display: "SP Kinder-Endokrinologie und -Diabetologie"
            },
            {
                code: "537",
                display: "SP Kinder-Gastroenterologie"
            },
            {
                code: "544",
                display: "FA Allgemeinchirurgie"
            }
        ]
    },
    {
        system: "urn:oid:1.3.6.1.4.1.19376.3.276.1.5.11",
        concept: [
            {
                code: "2",
                display: "Arzthilfe, Praxisorganisation, -verwaltung"
            },
            {
                code: "179",
                display: "Physician Assistant"
            },
            {
                code: "4",
                display: "Medizinischer Fachangestellter"
            },
            {
                code: "33",
                display: "Kranken-, Altenpflege, Geburtshilfe"
            },
            {
                code: "37",
                display: "Gesundheits- und Kinderkrankenpfleger"
            },
            {
                code: "38",
                display: "Gesundheits- und Krankenpflegehelfer"
            },
            {
                code: "39",
                display: "Gesundheits- und Krankenpfleger"
            },
            {
                code: "41",
                display: "Hebamme / Entbindungspfleger"
            },
            {
                code: "47",
                display: "Nichtärztliche Behandlung, Therapie (außer Psychotherapie)"
            },
            {
                code: "76",
                display: "Kinder- und Jugendpsychotherapeut"
            },
            {
                code: "86",
                display: "Rettungsdienst"
            },
            {
                code: "88",
                display: "Notfallsanitäter"
            },
            {
                code: "89",
                display: "Rettungsassistent"
            },
            {
                code: "91",
                display: "Rettungssanitäter"
            }
        ]
    }
];

export default CMRPractitionerSpeciality;
