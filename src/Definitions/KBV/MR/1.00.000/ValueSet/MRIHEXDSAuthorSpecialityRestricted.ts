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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_IHEXDS_AuthorSpeciality_Restricted

type MRIHEXDSAuthorSpecialityRestricted =
    | "010"
    | "020"
    | "030"
    | "050"
    | "060"
    | "070"
    | "080"
    | "091"
    | "093"
    | "110"
    | "142"
    | "147"
    | "150"
    | "170"
    | "180"
    | "197"
    | "200"
    | "210"
    | "220"
    | "230"
    | "271"
    | "281"
    | "291"
    | "303"
    | "313"
    | "314"
    | "330"
    | "341"
    | "511"
    | "512"
    | "513"
    | "514"
    | "515"
    | "516"
    | "517"
    | "521"
    | "522"
    | "523"
    | "524"
    | "525"
    | "526"
    | "527"
    | "528"
    | "532"
    | "534"
    | "535"
    | "542"
    | "544"
    | "1"
    | "3"
    | "2"
    | "179"
    | "4"
    | "33"
    | "41"
    | "86"
    | "88"
    | "89"
    | "91";

const MRIHEXDSAuthorSpecialityRestricted: t.Type<MRIHEXDSAuthorSpecialityRestricted> = t.union(
    [
        t.literal("010"),
        t.literal("020"),
        t.literal("030"),
        t.literal("050"),
        t.literal("060"),
        t.literal("070"),
        t.literal("080"),
        t.literal("091"),
        t.literal("093"),
        t.literal("110"),
        t.literal("142"),
        t.literal("147"),
        t.literal("150"),
        t.literal("170"),
        t.literal("180"),
        t.literal("197"),
        t.literal("200"),
        t.literal("210"),
        t.literal("220"),
        t.literal("230"),
        t.literal("271"),
        t.literal("281"),
        t.literal("291"),
        t.literal("303"),
        t.literal("313"),
        t.literal("314"),
        t.literal("330"),
        t.literal("341"),
        t.literal("511"),
        t.literal("512"),
        t.literal("513"),
        t.literal("514"),
        t.literal("515"),
        t.literal("516"),
        t.literal("517"),
        t.literal("521"),
        t.literal("522"),
        t.literal("523"),
        t.literal("524"),
        t.literal("525"),
        t.literal("526"),
        t.literal("527"),
        t.literal("528"),
        t.literal("532"),
        t.literal("534"),
        t.literal("535"),
        t.literal("542"),
        t.literal("544"),
        t.literal("1"),
        t.literal("3"),
        t.literal("2"),
        t.literal("179"),
        t.literal("4"),
        t.literal("33"),
        t.literal("41"),
        t.literal("86"),
        t.literal("88"),
        t.literal("89"),
        t.literal("91")
    ],
    "MRIHEXDSAuthorSpecialityRestricted"
);

export const MRIHEXDSAuthorSpecialityRestrictedArray: string[] = [
    "010",
    "020",
    "030",
    "050",
    "060",
    "070",
    "080",
    "091",
    "093",
    "110",
    "142",
    "147",
    "150",
    "170",
    "180",
    "197",
    "200",
    "210",
    "220",
    "230",
    "271",
    "281",
    "291",
    "303",
    "313",
    "314",
    "330",
    "341",
    "511",
    "512",
    "513",
    "514",
    "515",
    "516",
    "517",
    "521",
    "522",
    "523",
    "524",
    "525",
    "526",
    "527",
    "528",
    "532",
    "534",
    "535",
    "542",
    "544",
    "1",
    "3",
    "2",
    "179",
    "4",
    "33",
    "41",
    "86",
    "88",
    "89",
    "91"
];

export const MRIHEXDSAuthorSpecialityRestrictedValueSet: ValueSet = [
    {
        system: "urn:oid:1.2.276.0.76.5.114",
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
                code: "110",
                display: "FA Laboratoriumsmedizin"
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
                code: "303",
                display: "FA Transfusionsmedizin"
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
                code: "532",
                display: "FA Mikrobiologie, Virologie und Infektionsepidemiologie"
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
                code: "41",
                display: "Hebamme / Entbindungspfleger"
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

export default MRIHEXDSAuthorSpecialityRestricted;
