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
        concept: []
    }
];

export default GemRSAnlage8;
