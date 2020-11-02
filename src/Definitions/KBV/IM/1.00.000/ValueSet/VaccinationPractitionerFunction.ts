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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Practitioner_Function

type VaccinationPractitionerFunction =
    | "112247003"
    | "1"
    | "3"
    | "010"
    | "020"
    | "030"
    | "050"
    | "060"
    | "070"
    | "080"
    | "091"
    | "093"
    | "102"
    | "110"
    | "130"
    | "142"
    | "147"
    | "150"
    | "170"
    | "180"
    | "196"
    | "197"
    | "200"
    | "210"
    | "220"
    | "230"
    | "240"
    | "250"
    | "271"
    | "281"
    | "291"
    | "301"
    | "302"
    | "303"
    | "304"
    | "308"
    | "313"
    | "314"
    | "330"
    | "341"
    | "359"
    | "360"
    | "361"
    | "511"
    | "512"
    | "513"
    | "514"
    | "515"
    | "516"
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
    | "532"
    | "533"
    | "534"
    | "535"
    | "542"
    | "544"
    | "179"
    | "4"
    | "70"
    | "71"
    | "72"
    | "73"
    | "181"
    | "182"
    | "042"
    | "096"
    | "097"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192"
    | "536"
    | "537";

const VaccinationPractitionerFunction: t.Type<VaccinationPractitionerFunction> = t.union(
    [
        t.literal("112247003"),
        t.literal("1"),
        t.literal("3"),
        t.literal("010"),
        t.literal("020"),
        t.literal("030"),
        t.literal("050"),
        t.literal("060"),
        t.literal("070"),
        t.literal("080"),
        t.literal("091"),
        t.literal("093"),
        t.literal("102"),
        t.literal("110"),
        t.literal("130"),
        t.literal("142"),
        t.literal("147"),
        t.literal("150"),
        t.literal("170"),
        t.literal("180"),
        t.literal("196"),
        t.literal("197"),
        t.literal("200"),
        t.literal("210"),
        t.literal("220"),
        t.literal("230"),
        t.literal("240"),
        t.literal("250"),
        t.literal("271"),
        t.literal("281"),
        t.literal("291"),
        t.literal("301"),
        t.literal("302"),
        t.literal("303"),
        t.literal("304"),
        t.literal("308"),
        t.literal("313"),
        t.literal("314"),
        t.literal("330"),
        t.literal("341"),
        t.literal("359"),
        t.literal("360"),
        t.literal("361"),
        t.literal("511"),
        t.literal("512"),
        t.literal("513"),
        t.literal("514"),
        t.literal("515"),
        t.literal("516"),
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
        t.literal("532"),
        t.literal("533"),
        t.literal("534"),
        t.literal("535"),
        t.literal("542"),
        t.literal("544"),
        t.literal("179"),
        t.literal("4"),
        t.literal("70"),
        t.literal("71"),
        t.literal("72"),
        t.literal("73"),
        t.literal("181"),
        t.literal("182"),
        t.literal("042"),
        t.literal("096"),
        t.literal("097"),
        t.literal("140"),
        t.literal("143"),
        t.literal("160"),
        t.literal("161"),
        t.literal("171"),
        t.literal("192"),
        t.literal("536"),
        t.literal("537")
    ],
    "VaccinationPractitionerFunction"
);

export const VaccinationPractitionerFunctionArray: string[] = [
    "112247003",
    "1",
    "3",
    "010",
    "020",
    "030",
    "050",
    "060",
    "070",
    "080",
    "091",
    "093",
    "102",
    "110",
    "130",
    "142",
    "147",
    "150",
    "170",
    "180",
    "196",
    "197",
    "200",
    "210",
    "220",
    "230",
    "240",
    "250",
    "271",
    "281",
    "291",
    "301",
    "302",
    "303",
    "304",
    "308",
    "313",
    "314",
    "330",
    "341",
    "359",
    "360",
    "361",
    "511",
    "512",
    "513",
    "514",
    "515",
    "516",
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
    "532",
    "533",
    "534",
    "535",
    "542",
    "544",
    "179",
    "4",
    "70",
    "71",
    "72",
    "73",
    "181",
    "182",
    "042",
    "096",
    "097",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192",
    "536",
    "537"
];

export const VaccinationPractitionerFunctionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "112247003",
                display: "Medical doctor (occupation)"
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
                code: "020",
                display: "FA Anästhesiologie"
            },
            {
                code: "030",
                display: "FA Augenheilkunde"
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
                code: "102",
                display: "FA Kinder- und Jugendpsychiatrie und -psychotherapie"
            },
            {
                code: "110",
                display: "FA Laboratoriumsmedizin"
            },
            {
                code: "130",
                display: "FA Mund-Kiefer-Gesichts-Chirurgie"
            },
            {
                code: "142",
                display: "FA Neurologie"
            },
            {
                code: "147",
                display: "FA Psychiatrie und Psychotherapie"
            },
            {
                code: "150",
                display: "FA Neurochirurgie"
            },
            {
                code: "170",
                display: "FA Pathologie"
            },
            {
                code: "180",
                display: "FA Pharmakologie und Toxikologie"
            },
            {
                code: "196",
                display: "SP Kinderradiologie"
            },
            {
                code: "197",
                display: "SP Neuroradiologie"
            },
            {
                code: "200",
                display: "FA Urologie"
            },
            {
                code: "210",
                display: "FA Arbeitsmedizin"
            },
            {
                code: "220",
                display: "FA Nuklearmedizin"
            },
            {
                code: "230",
                display: "FA Öffentliches Gesundheitswesen"
            },
            {
                code: "240",
                display: "FA Rechtsmedizin"
            },
            {
                code: "250",
                display: "FA Hygiene und Umweltmedizin"
            },
            {
                code: "271",
                display: "FA Neuropathologie"
            },
            {
                code: "281",
                display: "FA Klinische Pharmakologie"
            },
            {
                code: "291",
                display: "FA Strahlentherapie"
            },
            {
                code: "301",
                display: "FA Anatomie"
            },
            {
                code: "302",
                display: "FA Biochemie"
            },
            {
                code: "303",
                display: "FA Transfusionsmedizin"
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
                code: "359",
                display: "Fachzahnarzt für Mikrobiologie"
            },
            {
                code: "360",
                display: "Fachzahnarzt für Kieferchirurgie (§ 6 Abs. 1 BMV)"
            },
            {
                code: "361",
                display: "Fachzahnarzt für theoretisch-experimentelle Medizin"
            },
            {
                code: "511",
                display: "FA Gefäßchirurgie"
            },
            {
                code: "512",
                display: "FA Orthopädie und Unfallchirurgie"
            },
            {
                code: "513",
                display: "FA Thoraxchirurgie"
            },
            {
                code: "514",
                display: "FA Visceralchirurgie"
            },
            {
                code: "515",
                display: "SP Gynäkologische Onkologie"
            },
            {
                code: "516",
                display: "SP Gynäkologische Endokrinologie und Reproduktionsmedizin"
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
                code: "532",
                display: "FA Mikrobiologie, Virologie und Infektionsepidemiologie"
            },
            {
                code: "533",
                display: "SP Forensische Psychiatrie"
            },
            {
                code: "534",
                display: "FA Psychosomatische Medizin und Psychotherapie"
            },
            {
                code: "535",
                display: "FA Radiologie (neue (M-)WBO)"
            },
            {
                code: "542",
                display: "FA Plastische und Ästhetische Chirurgie"
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
                code: "179",
                display: "Physician Assistant"
            },
            {
                code: "4",
                display: "Medizinischer Fachangestellter"
            },
            {
                code: "70",
                display: "Apotheker /Fachapotheker"
            },
            {
                code: "71",
                display: "Pharmazeut"
            },
            {
                code: "72",
                display: "Pharmazeutisch-technischer Assistent – PTA"
            },
            {
                code: "73",
                display: "Pharmazeutisch-kaufmännischer Angestellter"
            },
            {
                code: "180",
                display: "Pharmazieingenieur"
            },
            {
                code: "181",
                display: "Apothekenassistent"
            },
            {
                code: "182",
                display: "Apothekerassistent"
            }
        ]
    },
    {
        system: "urn:oid:1.2.276.0.76.5.114",
        concept: [
            {
                code: "042",
                display: "SP Unfallchirurgie"
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
                code: "536",
                display: "SP Kinder-Endokrinologie und -Diabetologie"
            },
            {
                code: "537",
                display: "SP Kinder-Gastroenterologie"
            }
        ]
    }
];

export default VaccinationPractitionerFunction;
