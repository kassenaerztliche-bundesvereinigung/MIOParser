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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_BASE_GemRS_Anlage_8

type GemRSAnlage8 =
    | "D"
    | "AFG"
    | "ET"
    | "AL"
    | "DZ"
    | "AJ"
    | "AS"
    | "AND"
    | "AGO"
    | "ANG"
    | "ANT"
    | "AQU"
    | "RA"
    | "ARM"
    | "ASE"
    | "ETH"
    | "AUS"
    | "BS"
    | "BRN"
    | "BD"
    | "BDS"
    | "B"
    | "BH"
    | "DY"
    | "BER"
    | "BHT"
    | "BOL"
    | "BIH"
    | "RB"
    | "BR"
    | "BJ"
    | "BRU"
    | "BG"
    | "HV"
    | "RU"
    | "RCH"
    | "TJ"
    | "COI"
    | "CR"
    | "CI"
    | "DK"
    | "WD"
    | "DOM"
    | "DSC"
    | "EC"
    | "ES"
    | "ERI"
    | "EST"
    | "FAL"
    | "FR"
    | "FJI"
    | "FIN"
    | "F"
    | "FG"
    | "FP"
    | "GAB"
    | "WAG"
    | "GEO"
    | "GH"
    | "GIB"
    | "WG"
    | "GR"
    | "GRO"
    | "GB"
    | "GUA"
    | "GUM"
    | "GCA"
    | "RG"
    | "GUB"
    | "GUY"
    | "RH"
    | "HCA"
    | "HKG"
    | "IND"
    | "RI"
    | "MAN"
    | "IRQ"
    | "IR"
    | "IRL"
    | "IS"
    | "IL"
    | "I"
    | "JA"
    | "J"
    | "YEM"
    | "JOR"
    | "YU"
    | "KAI"
    | "K"
    | "CAM"
    | "CDN"
    | "KAN"
    | "CV"
    | "KAS"
    | "QAT"
    | "EAK"
    | "KIS"
    | "KIB"
    | "CO"
    | "KOM"
    | "RCB"
    | "ZRE"
    | "KOR"
    | "ROK"
    | "KOS"
    | "HR"
    | "C"
    | "KWT"
    | "LAO"
    | "LS"
    | "LV"
    | "RL"
    | "LB"
    | "LAR"
    | "FL"
    | "LT"
    | "L"
    | "MAC"
    | "RM"
    | "MK"
    | "MW"
    | "MAL"
    | "BIO"
    | "RMM"
    | "M"
    | "MA"
    | "MAR"
    | "MAT"
    | "RIM"
    | "MS"
    | "MAY"
    | "MEX"
    | "MIK"
    | "MD"
    | "MC"
    | "MON"
    | "MNE"
    | "MOT"
    | "MOZ"
    | "MYA"
    | "SWA"
    | "NAU"
    | "NEP"
    | "NKA"
    | "NZ"
    | "NIC"
    | "NL"
    | "NLA"
    | "RN"
    | "WAN"
    | "NIU"
    | "NMA"
    | "N"
    | "MAO"
    | "A"
    | "PK"
    | "PSE"
    | "PAL"
    | "PA"
    | "PNG"
    | "PY"
    | "PIN"
    | "PE"
    | "RP"
    | "PIT"
    | "PL"
    | "P"
    | "PRI"
    | "REU"
    | "RWA"
    | "RO"
    | "RUS"
    | "PIE"
    | "SOL"
    | "Z"
    | "WS"
    | "RSM"
    | "STP"
    | "SAU"
    | "S"
    | "CH"
    | "SN"
    | "SRB"
    | "SCG"
    | "SY"
    | "WAL"
    | "ZW"
    | "SGP"
    | "SK"
    | "SLO"
    | "SP"
    | "E"
    | "CL"
    | "HEL"
    | "SCN"
    | "WL"
    | "WV"
    | "ZA"
    | "SUD"
    | "SDN"
    | "SSD"
    | "SME"
    | "SD"
    | "SYR"
    | "TAD"
    | "TWN"
    | "EAT"
    | "T"
    | "OTI"
    | "TG"
    | "TOK"
    | "TON"
    | "TT"
    | "CHD"
    | "CZ"
    | "TN"
    | "TR"
    | "TUR"
    | "TUC"
    | "TUV"
    | "EAU"
    | "UA"
    | "H"
    | "ROU"
    | "USB"
    | "VAN"
    | "V"
    | "YV"
    | "UAE"
    | "USA"
    | "VN"
    | "BY"
    | "RCA"
    | "CY";

const GemRSAnlage8: t.Type<GemRSAnlage8> = t.union(
    [
        t.literal("D"),
        t.literal("AFG"),
        t.literal("ET"),
        t.literal("AL"),
        t.literal("DZ"),
        t.literal("AJ"),
        t.literal("AS"),
        t.literal("AND"),
        t.literal("AGO"),
        t.literal("ANG"),
        t.literal("ANT"),
        t.literal("AQU"),
        t.literal("RA"),
        t.literal("ARM"),
        t.literal("ASE"),
        t.literal("ETH"),
        t.literal("AUS"),
        t.literal("BS"),
        t.literal("BRN"),
        t.literal("BD"),
        t.literal("BDS"),
        t.literal("B"),
        t.literal("BH"),
        t.literal("DY"),
        t.literal("BER"),
        t.literal("BHT"),
        t.literal("BOL"),
        t.literal("BIH"),
        t.literal("RB"),
        t.literal("BR"),
        t.literal("BJ"),
        t.literal("BRU"),
        t.literal("BG"),
        t.literal("HV"),
        t.literal("RU"),
        t.literal("RCH"),
        t.literal("TJ"),
        t.literal("COI"),
        t.literal("CR"),
        t.literal("CI"),
        t.literal("DK"),
        t.literal("WD"),
        t.literal("DOM"),
        t.literal("DSC"),
        t.literal("EC"),
        t.literal("ES"),
        t.literal("ERI"),
        t.literal("EST"),
        t.literal("FAL"),
        t.literal("FR"),
        t.literal("FJI"),
        t.literal("FIN"),
        t.literal("F"),
        t.literal("FG"),
        t.literal("FP"),
        t.literal("GAB"),
        t.literal("WAG"),
        t.literal("GEO"),
        t.literal("GH"),
        t.literal("GIB"),
        t.literal("WG"),
        t.literal("GR"),
        t.literal("GRO"),
        t.literal("GB"),
        t.literal("GUA"),
        t.literal("GUM"),
        t.literal("GCA"),
        t.literal("RG"),
        t.literal("GUB"),
        t.literal("GUY"),
        t.literal("RH"),
        t.literal("HCA"),
        t.literal("HKG"),
        t.literal("IND"),
        t.literal("RI"),
        t.literal("MAN"),
        t.literal("IRQ"),
        t.literal("IR"),
        t.literal("IRL"),
        t.literal("IS"),
        t.literal("IL"),
        t.literal("I"),
        t.literal("JA"),
        t.literal("J"),
        t.literal("YEM"),
        t.literal("JOR"),
        t.literal("YU"),
        t.literal("KAI"),
        t.literal("K"),
        t.literal("CAM"),
        t.literal("CDN"),
        t.literal("KAN"),
        t.literal("CV"),
        t.literal("KAS"),
        t.literal("QAT"),
        t.literal("EAK"),
        t.literal("KIS"),
        t.literal("KIB"),
        t.literal("CO"),
        t.literal("KOM"),
        t.literal("RCB"),
        t.literal("ZRE"),
        t.literal("KOR"),
        t.literal("ROK"),
        t.literal("KOS"),
        t.literal("HR"),
        t.literal("C"),
        t.literal("KWT"),
        t.literal("LAO"),
        t.literal("LS"),
        t.literal("LV"),
        t.literal("RL"),
        t.literal("LB"),
        t.literal("LAR"),
        t.literal("FL"),
        t.literal("LT"),
        t.literal("L"),
        t.literal("MAC"),
        t.literal("RM"),
        t.literal("MK"),
        t.literal("MW"),
        t.literal("MAL"),
        t.literal("BIO"),
        t.literal("RMM"),
        t.literal("M"),
        t.literal("MA"),
        t.literal("MAR"),
        t.literal("MAT"),
        t.literal("RIM"),
        t.literal("MS"),
        t.literal("MAY"),
        t.literal("MEX"),
        t.literal("MIK"),
        t.literal("MD"),
        t.literal("MC"),
        t.literal("MON"),
        t.literal("MNE"),
        t.literal("MOT"),
        t.literal("MOZ"),
        t.literal("MYA"),
        t.literal("SWA"),
        t.literal("NAU"),
        t.literal("NEP"),
        t.literal("NKA"),
        t.literal("NZ"),
        t.literal("NIC"),
        t.literal("NL"),
        t.literal("NLA"),
        t.literal("RN"),
        t.literal("WAN"),
        t.literal("NIU"),
        t.literal("NMA"),
        t.literal("N"),
        t.literal("MAO"),
        t.literal("A"),
        t.literal("PK"),
        t.literal("PSE"),
        t.literal("PAL"),
        t.literal("PA"),
        t.literal("PNG"),
        t.literal("PY"),
        t.literal("PIN"),
        t.literal("PE"),
        t.literal("RP"),
        t.literal("PIT"),
        t.literal("PL"),
        t.literal("P"),
        t.literal("PRI"),
        t.literal("REU"),
        t.literal("RWA"),
        t.literal("RO"),
        t.literal("RUS"),
        t.literal("PIE"),
        t.literal("SOL"),
        t.literal("Z"),
        t.literal("WS"),
        t.literal("RSM"),
        t.literal("STP"),
        t.literal("SAU"),
        t.literal("S"),
        t.literal("CH"),
        t.literal("SN"),
        t.literal("SRB"),
        t.literal("SCG"),
        t.literal("SY"),
        t.literal("WAL"),
        t.literal("ZW"),
        t.literal("SGP"),
        t.literal("SK"),
        t.literal("SLO"),
        t.literal("SP"),
        t.literal("E"),
        t.literal("CL"),
        t.literal("HEL"),
        t.literal("SCN"),
        t.literal("WL"),
        t.literal("WV"),
        t.literal("ZA"),
        t.literal("SUD"),
        t.literal("SDN"),
        t.literal("SSD"),
        t.literal("SME"),
        t.literal("SD"),
        t.literal("SYR"),
        t.literal("TAD"),
        t.literal("TWN"),
        t.literal("EAT"),
        t.literal("T"),
        t.literal("OTI"),
        t.literal("TG"),
        t.literal("TOK"),
        t.literal("TON"),
        t.literal("TT"),
        t.literal("CHD"),
        t.literal("CZ"),
        t.literal("TN"),
        t.literal("TR"),
        t.literal("TUR"),
        t.literal("TUC"),
        t.literal("TUV"),
        t.literal("EAU"),
        t.literal("UA"),
        t.literal("H"),
        t.literal("ROU"),
        t.literal("USB"),
        t.literal("VAN"),
        t.literal("V"),
        t.literal("YV"),
        t.literal("UAE"),
        t.literal("USA"),
        t.literal("VN"),
        t.literal("BY"),
        t.literal("RCA"),
        t.literal("CY")
    ],
    "GemRSAnlage8"
);

export const GemRSAnlage8Array: string[] = [
    "D",
    "AFG",
    "ET",
    "AL",
    "DZ",
    "AJ",
    "AS",
    "AND",
    "AGO",
    "ANG",
    "ANT",
    "AQU",
    "RA",
    "ARM",
    "ASE",
    "ETH",
    "AUS",
    "BS",
    "BRN",
    "BD",
    "BDS",
    "B",
    "BH",
    "DY",
    "BER",
    "BHT",
    "BOL",
    "BIH",
    "RB",
    "BR",
    "BJ",
    "BRU",
    "BG",
    "HV",
    "RU",
    "RCH",
    "TJ",
    "COI",
    "CR",
    "CI",
    "DK",
    "WD",
    "DOM",
    "DSC",
    "EC",
    "ES",
    "ERI",
    "EST",
    "FAL",
    "FR",
    "FJI",
    "FIN",
    "F",
    "FG",
    "FP",
    "GAB",
    "WAG",
    "GEO",
    "GH",
    "GIB",
    "WG",
    "GR",
    "GRO",
    "GB",
    "GUA",
    "GUM",
    "GCA",
    "RG",
    "GUB",
    "GUY",
    "RH",
    "HCA",
    "HKG",
    "IND",
    "RI",
    "MAN",
    "IRQ",
    "IR",
    "IRL",
    "IS",
    "IL",
    "I",
    "JA",
    "J",
    "YEM",
    "JOR",
    "YU",
    "KAI",
    "K",
    "CAM",
    "CDN",
    "KAN",
    "CV",
    "KAS",
    "QAT",
    "EAK",
    "KIS",
    "KIB",
    "CO",
    "KOM",
    "RCB",
    "ZRE",
    "KOR",
    "ROK",
    "KOS",
    "HR",
    "C",
    "KWT",
    "LAO",
    "LS",
    "LV",
    "RL",
    "LB",
    "LAR",
    "FL",
    "LT",
    "L",
    "MAC",
    "RM",
    "MK",
    "MW",
    "MAL",
    "BIO",
    "RMM",
    "M",
    "MA",
    "MAR",
    "MAT",
    "RIM",
    "MS",
    "MAY",
    "MEX",
    "MIK",
    "MD",
    "MC",
    "MON",
    "MNE",
    "MOT",
    "MOZ",
    "MYA",
    "SWA",
    "NAU",
    "NEP",
    "NKA",
    "NZ",
    "NIC",
    "NL",
    "NLA",
    "RN",
    "WAN",
    "NIU",
    "NMA",
    "N",
    "MAO",
    "A",
    "PK",
    "PSE",
    "PAL",
    "PA",
    "PNG",
    "PY",
    "PIN",
    "PE",
    "RP",
    "PIT",
    "PL",
    "P",
    "PRI",
    "REU",
    "RWA",
    "RO",
    "RUS",
    "PIE",
    "SOL",
    "Z",
    "WS",
    "RSM",
    "STP",
    "SAU",
    "S",
    "CH",
    "SN",
    "SRB",
    "SCG",
    "SY",
    "WAL",
    "ZW",
    "SGP",
    "SK",
    "SLO",
    "SP",
    "E",
    "CL",
    "HEL",
    "SCN",
    "WL",
    "WV",
    "ZA",
    "SUD",
    "SDN",
    "SSD",
    "SME",
    "SD",
    "SYR",
    "TAD",
    "TWN",
    "EAT",
    "T",
    "OTI",
    "TG",
    "TOK",
    "TON",
    "TT",
    "CHD",
    "CZ",
    "TN",
    "TR",
    "TUR",
    "TUC",
    "TUV",
    "EAU",
    "UA",
    "H",
    "ROU",
    "USB",
    "VAN",
    "V",
    "YV",
    "UAE",
    "USA",
    "VN",
    "BY",
    "RCA",
    "CY"
];

export const GemRSAnlage8ValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/deuev/anlage-8-laenderkennzeichen",
        concept: [
            { code: "D", display: "Deutschland" },
            { code: "AFG", display: "Afghanistan" },
            { code: "ET", display: "Ägypten" },
            { code: "AL", display: "Albanien" },
            { code: "DZ", display: "Algerien" },
            { code: "AJ", display: "Amerik.-Jungferninseln" },
            { code: "AS", display: "Amerik.-Samoa" },
            { code: "AND", display: "Andorra" },
            { code: "AGO", display: "Angola" },
            { code: "ANG", display: "Anguilla" },
            { code: "ANT", display: "Antigua und Barbuda" },
            { code: "AQU", display: "Äquatorialguinea" },
            { code: "RA", display: "Argentinien" },
            { code: "ARM", display: "Armenien" },
            { code: "ASE", display: "Aserbaidschan" },
            { code: "ETH", display: "Äthiopien" },
            { code: "AUS", display: "Australien" },
            { code: "BS", display: "Bahamas" },
            { code: "BRN", display: "Bahrain" },
            { code: "BD", display: "Bangladesch" },
            { code: "BDS", display: "Barbados" },
            { code: "B", display: "Belgien" },
            { code: "BH", display: "Belize" },
            { code: "DY", display: "Benin" },
            { code: "BER", display: "Bermuda" },
            { code: "BHT", display: "Bhutan" },
            { code: "BOL", display: "Bolivien" },
            { code: "BIH", display: "Bosnien und Herzegowina" },
            { code: "RB", display: "Botsuana" },
            { code: "BR", display: "Brasilien" },
            { code: "BJ", display: "Brit.-Jungferninseln" },
            { code: "BRU", display: "Brunei Darussalam" },
            { code: "BG", display: "Bulgarien" },
            { code: "HV", display: "Burkina Faso" },
            { code: "RU", display: "Burundi" },
            { code: "RCH", display: "Chile" },
            { code: "TJ", display: "China" },
            { code: "COI", display: "Cookinseln" },
            { code: "CR", display: "Costa Rica" },
            { code: "CI", display: "Cote d ́Ivoire" },
            { code: "DK", display: "Dänemark" },
            { code: "WD", display: "Dominica" },
            { code: "DOM", display: "Dominikanische Republik" },
            { code: "DSC", display: "Dschibuti" },
            { code: "EC", display: "Ecuador" },
            { code: "ES", display: "El Salvador" },
            { code: "ERI", display: "Eritrea" },
            { code: "EST", display: "Estland" },
            { code: "FAL", display: "Falklandinseln" },
            { code: "FR", display: "Färöer" },
            { code: "FJI", display: "Fidschi" },
            { code: "FIN", display: "Finnland" },
            { code: "F", display: "Frankreich" },
            { code: "FG", display: "Franz.-Guayana" },
            { code: "FP", display: "Franz.-Polynesien" },
            { code: "GAB", display: "Gabun" },
            { code: "WAG", display: "Gambia" },
            { code: "GEO", display: "Georgien" },
            { code: "GH", display: "Ghana" },
            { code: "GIB", display: "Gibraltar" },
            { code: "WG", display: "Grenada" },
            { code: "GR", display: "Griechenland" },
            { code: "GRO", display: "Grönland" },
            { code: "GB", display: "Großbritannien und Nordirland" },
            { code: "GUA", display: "Guadeloupe" },
            { code: "GUM", display: "Guam" },
            { code: "GCA", display: "Guatemala" },
            { code: "RG", display: "Guinea" },
            { code: "GUB", display: "Guinea-Bissau" },
            { code: "GUY", display: "Guyana" },
            { code: "RH", display: "Haiti" },
            { code: "HCA", display: "Honduras" },
            { code: "HKG", display: "Hongkong" },
            { code: "IND", display: "Indien" },
            { code: "RI", display: "Indonesien" },
            { code: "MAN", display: "Insel Man" },
            { code: "IRQ", display: "Irak" },
            { code: "IR", display: ",Iran, Islamische Republik," },
            { code: "IRL", display: "Irland" },
            { code: "IS", display: "Island" },
            { code: "IL", display: "Israel" },
            { code: "I", display: "Italien" },
            { code: "JA", display: "Jamaika" },
            { code: "J", display: "Japan" },
            { code: "YEM", display: "Jemen" },
            { code: "JOR", display: "Jordanien" },
            { code: "YU", display: "Jugoslawien" },
            { code: "KAI", display: "Kaimaninseln" },
            { code: "K", display: "Kambodscha" },
            { code: "CAM", display: "Kamerun" },
            { code: "CDN", display: "Kanada" },
            { code: "KAN", display: "Kanalinseln" },
            { code: "CV", display: "Kap Verde" },
            { code: "KAS", display: "Kasachstan" },
            { code: "QAT", display: "Katar/Qatar" },
            { code: "EAK", display: "Kenia" },
            { code: "KIS", display: "Kirgisistan" },
            { code: "KIB", display: "Kiribati" },
            { code: "CO", display: "Kolumbien" },
            { code: "KOM", display: "Komoren" },
            { code: "RCB", display: "Kongo" },
            { code: "ZRE", display: ",Kongo, Dem. Republik," },
            { code: "KOR", display: ",Korea, Dem. Volksrepublik," },
            { code: "ROK", display: ",Korea, Republik," },
            { code: "KOS", display: "Kosovo" },
            { code: "HR", display: "Kroatien" },
            { code: "C", display: "Kuba" },
            { code: "KWT", display: "Kuwait" },
            { code: "LAO", display: ",Laos, Dem. Volksrepublik," },
            { code: "LS", display: "Lesotho" },
            { code: "LV", display: "Lettland" },
            { code: "RL", display: "Libanon" },
            { code: "LB", display: "Liberia" },
            { code: "LAR", display: "Libyen" },
            { code: "FL", display: "Liechtenstein" },
            { code: "LT", display: "Litauen" },
            { code: "L", display: "Luxemburg" },
            { code: "MAC", display: "Macau" },
            { code: "RM", display: "Madagaskar" },
            { code: "MK", display: "Makedonien / Mazedonien" },
            { code: "MW", display: "Malawi" },
            { code: "MAL", display: "Malaysia" },
            { code: "BIO", display: "Malediven" },
            { code: "RMM", display: "Mali" },
            { code: "M", display: "Malta" },
            { code: "MA", display: "Marokko" },
            { code: "MAR", display: "Marshallinseln" },
            { code: "MAT", display: "Martinique" },
            { code: "RIM", display: "Mauretanien" },
            { code: "MS", display: "Mauritius" },
            { code: "MAY", display: "Mayotte" },
            { code: "MEX", display: "Mexiko" },
            { code: "MIK", display: ",Mikronesien, Föderierte Staaten von," },
            { code: "MD", display: "Moldau" },
            { code: "MC", display: "Monaco" },
            { code: "MON", display: "Mongolei" },
            { code: "MNE", display: "Montenegro" },
            { code: "MOT", display: "Montserrat" },
            { code: "MOZ", display: "Mosambik" },
            { code: "MYA", display: "Myanmar" },
            { code: "SWA", display: "Namibia" },
            { code: "NAU", display: "Nauru" },
            { code: "NEP", display: "Nepal" },
            { code: "NKA", display: "Neukaledonien" },
            { code: "NZ", display: "Neuseeland" },
            { code: "NIC", display: "Nicaragua" },
            { code: "NL", display: "Niederlande" },
            { code: "NLA", display: "Niederländische Antillen" },
            { code: "RN", display: "Niger" },
            { code: "WAN", display: "Nigeria" },
            { code: "NIU", display: "Niue" },
            { code: "NMA", display: "Nördliche Marianen" },
            { code: "N", display: "Norwegen" },
            { code: "MAO", display: "Oman" },
            { code: "A", display: "Österreich" },
            { code: "PK", display: "Pakistan" },
            { code: "PSE", display: "Palästinensische Gebiete" },
            { code: "PAL", display: "Palau" },
            { code: "PA", display: "Panama" },
            { code: "PNG", display: "Papua-Neugiunea" },
            { code: "PY", display: "Paraguay" },
            { code: "PIN", display: "Pazifische Inseln (Marianen- und Karolineninseln)" },
            { code: "PE", display: "Peru" },
            { code: "RP", display: "Philippinen" },
            { code: "PIT", display: "Pitcairn-Insel" },
            { code: "PL", display: "Polen" },
            { code: "P", display: "Portugal" },
            { code: "PRI", display: "Puerto Rico" },
            { code: "REU", display: "Réunion" },
            { code: "RWA", display: "Ruanda" },
            { code: "RO", display: "Rumänien" },
            { code: "RUS", display: "Russische Föderation" },
            { code: "PIE", display: "Saint Pierre und Miquelon" },
            { code: "SOL", display: "Salomonen" },
            { code: "Z", display: "Sambia" },
            { code: "WS", display: "Samoa" },
            { code: "RSM", display: "San Marino" },
            { code: "STP", display: "Sao Tomé und Principe" },
            { code: "SAU", display: "Saudi-Arabien" },
            { code: "S", display: "Schweden" },
            { code: "CH", display: "Schweiz" },
            { code: "SN", display: "Senegal" },
            { code: "SRB", display: "Serbien (einschl. Kosovo)" },
            { code: "SCG", display: "Serbien und Montenegro" },
            { code: "SY", display: "Seychellen" },
            { code: "WAL", display: "Sierra Leone" },
            { code: "ZW", display: "Simbabwe" },
            { code: "SGP", display: "Singapur" },
            { code: "SK", display: "Slowakei" },
            { code: "SLO", display: "Slowenien" },
            { code: "SP", display: "Somalia" },
            { code: "E", display: "Spanien" },
            { code: "CL", display: "Sri Lanka" },
            { code: "HEL", display: "St. Helena einschl. Ascension" },
            { code: "SCN", display: "St. Kitts und Nevis" },
            { code: "WL", display: "St. Lucia" },
            { code: "WV", display: "St. Vincent und die Grenadinen" },
            { code: "ZA", display: "Südafrika" },
            { code: "SUD", display: "Sudan" },
            { code: "SDN", display: "Republik Sudan (ohne Südsudan)" },
            { code: "SSD", display: "Südsudan (Republik Südsudan)" },
            { code: "SME", display: "Suriname" },
            { code: "SD", display: "Swasiland" },
            { code: "SYR", display: ",Syrien, Arabische Republik," },
            { code: "TAD", display: "Tadschikistan" },
            { code: "TWN", display: "Taiwan" },
            { code: "EAT", display: ",Tansania, Vereinigte Republik," },
            { code: "T", display: "Thailand" },
            { code: "OTI", display: "Timor-Leste" },
            { code: "TG", display: "Togo" },
            { code: "TOK", display: "Tokelau-Inseln" },
            { code: "TON", display: "Tonga" },
            { code: "TT", display: "Trinidad und Tobago" },
            { code: "CHD", display: "Tschad" },
            { code: "CZ", display: "Tschechische Republik" },
            { code: "TN", display: "Tunesien" },
            { code: "TR", display: "Türkei" },
            { code: "TUR", display: "Turkmenistan" },
            { code: "TUC", display: "Turks- und Caicosinseln" },
            { code: "TUV", display: "Tuvalu" },
            { code: "EAU", display: "Uganda" },
            { code: "UA", display: "Ukraine" },
            { code: "H", display: "Ungarn" },
            { code: "ROU", display: "Uruguay" },
            { code: "USB", display: "Usbekistan" },
            { code: "VAN", display: "Vanuatu" },
            { code: "V", display: "Vatikanstadt" },
            { code: "YV", display: "Venezuela" },
            { code: "UAE", display: "Vereinigte Arabische Emirate" },
            { code: "USA", display: "Vereinigte Staaten" },
            { code: "VN", display: "Vietnam" },
            { code: "BY", display: "Weißrußland (Belarus)" },
            { code: "RCA", display: "Zentralafrikanische Republik" },
            { code: "CY", display: "Zypern" }
        ]
    }
];

export default GemRSAnlage8;
