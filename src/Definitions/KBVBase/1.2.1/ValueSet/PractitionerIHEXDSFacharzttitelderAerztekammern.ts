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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Practitioner_IHEXDS_Facharzttitel_der_Aerztekammern

type PractitionerIHEXDSFacharzttitelderAerztekammern =
    | "11001"
    | "12901"
    | "21001"
    | "21002"
    | "31001"
    | "41001"
    | "41002"
    | "51001"
    | "61001"
    | "71107"
    | "71101"
    | "71001"
    | "71102"
    | "71002"
    | "71202"
    | "71003"
    | "71004"
    | "71103"
    | "71005"
    | "71106"
    | "71201"
    | "71104"
    | "71105"
    | "71108"
    | "72001"
    | "72002"
    | "72003"
    | "72004"
    | "72005"
    | "72006"
    | "73001"
    | "73002"
    | "73003"
    | "73004"
    | "73005"
    | "73006"
    | "73007"
    | "73008"
    | "73009"
    | "81001"
    | "81002"
    | "81003"
    | "82101"
    | "82102"
    | "82103"
    | "91001"
    | "91002"
    | "91101"
    | "93001"
    | "93002"
    | "93003"
    | "101001"
    | "101002"
    | "111001"
    | "121001"
    | "121002"
    | "131001"
    | "141002"
    | "141110"
    | "141111"
    | "141112"
    | "141903"
    | "141113"
    | "141904"
    | "141114"
    | "141115"
    | "141116"
    | "141117"
    | "141102"
    | "141103"
    | "141104"
    | "141901"
    | "141902"
    | "141105"
    | "141106"
    | "141107"
    | "141108"
    | "141109"
    | "141003"
    | "141005"
    | "141004"
    | "142001"
    | "142002"
    | "142901"
    | "142003"
    | "142004"
    | "142005"
    | "142006"
    | "142007"
    | "142008"
    | "142009"
    | "142010"
    | "143001"
    | "143002"
    | "143003"
    | "143004"
    | "143005"
    | "143006"
    | "143901"
    | "143007"
    | "143008"
    | "143009"
    | "151002"
    | "151001"
    | "152901"
    | "152902"
    | "152001"
    | "152201"
    | "152202"
    | "152101"
    | "152002"
    | "152906"
    | "152003"
    | "152903"
    | "152102"
    | "152904"
    | "152905"
    | "153001"
    | "153002"
    | "153003"
    | "153004"
    | "153005"
    | "153006"
    | "153007"
    | "153008"
    | "161001"
    | "161002"
    | "171001"
    | "173001"
    | "181001"
    | "181002"
    | "181101"
    | "191001"
    | "191002"
    | "191901"
    | "201001"
    | "201002"
    | "201003"
    | "203001"
    | "211001"
    | "221001"
    | "222901"
    | "231001"
    | "241001"
    | "251001"
    | "251002"
    | "251003"
    | "251004"
    | "251005"
    | "253001"
    | "261001"
    | "261002"
    | "261003"
    | "263001"
    | "381201"
    | "271001"
    | "271002"
    | "281001"
    | "291001"
    | "291002"
    | "292101"
    | "292901"
    | "301101"
    | "301001"
    | "301002"
    | "311001"
    | "311002"
    | "311003"
    | "312201"
    | "312001"
    | "312002"
    | "313001"
    | "313002"
    | "313003"
    | "321001"
    | "351001"
    | "361001"
    | "361002"
    | "371001"
    | "11002"
    | "11101"
    | "142902"
    | "331001"
    | "341001"
    | "590001"
    | "590002"
    | "590003"
    | "590004"
    | "590005"
    | "590006"
    | "590007"
    | "590008"
    | "590009"
    | "590010"
    | "590011"
    | "1"
    | "11";

type PractitionerIHEXDSFacharzttitelderAerztekammernType = t.KeyofC<{
    "11001": null;
    "12901": null;
    "21001": null;
    "21002": null;
    "31001": null;
    "41001": null;
    "41002": null;
    "51001": null;
    "61001": null;
    "71107": null;
    "71101": null;
    "71001": null;
    "71102": null;
    "71002": null;
    "71202": null;
    "71003": null;
    "71004": null;
    "71103": null;
    "71005": null;
    "71106": null;
    "71201": null;
    "71104": null;
    "71105": null;
    "71108": null;
    "72001": null;
    "72002": null;
    "72003": null;
    "72004": null;
    "72005": null;
    "72006": null;
    "73001": null;
    "73002": null;
    "73003": null;
    "73004": null;
    "73005": null;
    "73006": null;
    "73007": null;
    "73008": null;
    "73009": null;
    "81001": null;
    "81002": null;
    "81003": null;
    "82101": null;
    "82102": null;
    "82103": null;
    "91001": null;
    "91002": null;
    "91101": null;
    "93001": null;
    "93002": null;
    "93003": null;
    "101001": null;
    "101002": null;
    "111001": null;
    "121001": null;
    "121002": null;
    "131001": null;
    "141002": null;
    "141110": null;
    "141111": null;
    "141112": null;
    "141903": null;
    "141113": null;
    "141904": null;
    "141114": null;
    "141115": null;
    "141116": null;
    "141117": null;
    "141102": null;
    "141103": null;
    "141104": null;
    "141901": null;
    "141902": null;
    "141105": null;
    "141106": null;
    "141107": null;
    "141108": null;
    "141109": null;
    "141003": null;
    "141005": null;
    "141004": null;
    "142001": null;
    "142002": null;
    "142901": null;
    "142003": null;
    "142004": null;
    "142005": null;
    "142006": null;
    "142007": null;
    "142008": null;
    "142009": null;
    "142010": null;
    "143001": null;
    "143002": null;
    "143003": null;
    "143004": null;
    "143005": null;
    "143006": null;
    "143901": null;
    "143007": null;
    "143008": null;
    "143009": null;
    "151002": null;
    "151001": null;
    "152901": null;
    "152902": null;
    "152001": null;
    "152201": null;
    "152202": null;
    "152101": null;
    "152002": null;
    "152906": null;
    "152003": null;
    "152903": null;
    "152102": null;
    "152904": null;
    "152905": null;
    "153001": null;
    "153002": null;
    "153003": null;
    "153004": null;
    "153005": null;
    "153006": null;
    "153007": null;
    "153008": null;
    "161001": null;
    "161002": null;
    "171001": null;
    "173001": null;
    "181001": null;
    "181002": null;
    "181101": null;
    "191001": null;
    "191002": null;
    "191901": null;
    "201001": null;
    "201002": null;
    "201003": null;
    "203001": null;
    "211001": null;
    "221001": null;
    "222901": null;
    "231001": null;
    "241001": null;
    "251001": null;
    "251002": null;
    "251003": null;
    "251004": null;
    "251005": null;
    "253001": null;
    "261001": null;
    "261002": null;
    "261003": null;
    "263001": null;
    "381201": null;
    "271001": null;
    "271002": null;
    "281001": null;
    "291001": null;
    "291002": null;
    "292101": null;
    "292901": null;
    "301101": null;
    "301001": null;
    "301002": null;
    "311001": null;
    "311002": null;
    "311003": null;
    "312201": null;
    "312001": null;
    "312002": null;
    "313001": null;
    "313002": null;
    "313003": null;
    "321001": null;
    "351001": null;
    "361001": null;
    "361002": null;
    "371001": null;
    "11002": null;
    "11101": null;
    "142902": null;
    "331001": null;
    "341001": null;
    "590001": null;
    "590002": null;
    "590003": null;
    "590004": null;
    "590005": null;
    "590006": null;
    "590007": null;
    "590008": null;
    "590009": null;
    "590010": null;
    "590011": null;
    "1": null;
    "11": null;
}>;

const PractitionerIHEXDSFacharzttitelderAerztekammern: PractitionerIHEXDSFacharzttitelderAerztekammernType =
    t.keyof({
        "11001": null,
        "12901": null,
        "21001": null,
        "21002": null,
        "31001": null,
        "41001": null,
        "41002": null,
        "51001": null,
        "61001": null,
        "71107": null,
        "71101": null,
        "71001": null,
        "71102": null,
        "71002": null,
        "71202": null,
        "71003": null,
        "71004": null,
        "71103": null,
        "71005": null,
        "71106": null,
        "71201": null,
        "71104": null,
        "71105": null,
        "71108": null,
        "72001": null,
        "72002": null,
        "72003": null,
        "72004": null,
        "72005": null,
        "72006": null,
        "73001": null,
        "73002": null,
        "73003": null,
        "73004": null,
        "73005": null,
        "73006": null,
        "73007": null,
        "73008": null,
        "73009": null,
        "81001": null,
        "81002": null,
        "81003": null,
        "82101": null,
        "82102": null,
        "82103": null,
        "91001": null,
        "91002": null,
        "91101": null,
        "93001": null,
        "93002": null,
        "93003": null,
        "101001": null,
        "101002": null,
        "111001": null,
        "121001": null,
        "121002": null,
        "131001": null,
        "141002": null,
        "141110": null,
        "141111": null,
        "141112": null,
        "141903": null,
        "141113": null,
        "141904": null,
        "141114": null,
        "141115": null,
        "141116": null,
        "141117": null,
        "141102": null,
        "141103": null,
        "141104": null,
        "141901": null,
        "141902": null,
        "141105": null,
        "141106": null,
        "141107": null,
        "141108": null,
        "141109": null,
        "141003": null,
        "141005": null,
        "141004": null,
        "142001": null,
        "142002": null,
        "142901": null,
        "142003": null,
        "142004": null,
        "142005": null,
        "142006": null,
        "142007": null,
        "142008": null,
        "142009": null,
        "142010": null,
        "143001": null,
        "143002": null,
        "143003": null,
        "143004": null,
        "143005": null,
        "143006": null,
        "143901": null,
        "143007": null,
        "143008": null,
        "143009": null,
        "151002": null,
        "151001": null,
        "152901": null,
        "152902": null,
        "152001": null,
        "152201": null,
        "152202": null,
        "152101": null,
        "152002": null,
        "152906": null,
        "152003": null,
        "152903": null,
        "152102": null,
        "152904": null,
        "152905": null,
        "153001": null,
        "153002": null,
        "153003": null,
        "153004": null,
        "153005": null,
        "153006": null,
        "153007": null,
        "153008": null,
        "161001": null,
        "161002": null,
        "171001": null,
        "173001": null,
        "181001": null,
        "181002": null,
        "181101": null,
        "191001": null,
        "191002": null,
        "191901": null,
        "201001": null,
        "201002": null,
        "201003": null,
        "203001": null,
        "211001": null,
        "221001": null,
        "222901": null,
        "231001": null,
        "241001": null,
        "251001": null,
        "251002": null,
        "251003": null,
        "251004": null,
        "251005": null,
        "253001": null,
        "261001": null,
        "261002": null,
        "261003": null,
        "263001": null,
        "381201": null,
        "271001": null,
        "271002": null,
        "281001": null,
        "291001": null,
        "291002": null,
        "292101": null,
        "292901": null,
        "301101": null,
        "301001": null,
        "301002": null,
        "311001": null,
        "311002": null,
        "311003": null,
        "312201": null,
        "312001": null,
        "312002": null,
        "313001": null,
        "313002": null,
        "313003": null,
        "321001": null,
        "351001": null,
        "361001": null,
        "361002": null,
        "371001": null,
        "11002": null,
        "11101": null,
        "142902": null,
        "331001": null,
        "341001": null,
        "590001": null,
        "590002": null,
        "590003": null,
        "590004": null,
        "590005": null,
        "590006": null,
        "590007": null,
        "590008": null,
        "590009": null,
        "590010": null,
        "590011": null,
        "1": null,
        "11": null
    });
export const PractitionerIHEXDSFacharzttitelderAerztekammernArray: string[] = [
    "11001",
    "12901",
    "21001",
    "21002",
    "31001",
    "41001",
    "41002",
    "51001",
    "61001",
    "71107",
    "71101",
    "71001",
    "71102",
    "71002",
    "71202",
    "71003",
    "71004",
    "71103",
    "71005",
    "71106",
    "71201",
    "71104",
    "71105",
    "71108",
    "72001",
    "72002",
    "72003",
    "72004",
    "72005",
    "72006",
    "73001",
    "73002",
    "73003",
    "73004",
    "73005",
    "73006",
    "73007",
    "73008",
    "73009",
    "81001",
    "81002",
    "81003",
    "82101",
    "82102",
    "82103",
    "91001",
    "91002",
    "91101",
    "93001",
    "93002",
    "93003",
    "101001",
    "101002",
    "111001",
    "121001",
    "121002",
    "131001",
    "141002",
    "141110",
    "141111",
    "141112",
    "141903",
    "141113",
    "141904",
    "141114",
    "141115",
    "141116",
    "141117",
    "141102",
    "141103",
    "141104",
    "141901",
    "141902",
    "141105",
    "141106",
    "141107",
    "141108",
    "141109",
    "141003",
    "141005",
    "141004",
    "142001",
    "142002",
    "142901",
    "142003",
    "142004",
    "142005",
    "142006",
    "142007",
    "142008",
    "142009",
    "142010",
    "143001",
    "143002",
    "143003",
    "143004",
    "143005",
    "143006",
    "143901",
    "143007",
    "143008",
    "143009",
    "151002",
    "151001",
    "152901",
    "152902",
    "152001",
    "152201",
    "152202",
    "152101",
    "152002",
    "152906",
    "152003",
    "152903",
    "152102",
    "152904",
    "152905",
    "153001",
    "153002",
    "153003",
    "153004",
    "153005",
    "153006",
    "153007",
    "153008",
    "161001",
    "161002",
    "171001",
    "173001",
    "181001",
    "181002",
    "181101",
    "191001",
    "191002",
    "191901",
    "201001",
    "201002",
    "201003",
    "203001",
    "211001",
    "221001",
    "222901",
    "231001",
    "241001",
    "251001",
    "251002",
    "251003",
    "251004",
    "251005",
    "253001",
    "261001",
    "261002",
    "261003",
    "263001",
    "381201",
    "271001",
    "271002",
    "281001",
    "291001",
    "291002",
    "292101",
    "292901",
    "301101",
    "301001",
    "301002",
    "311001",
    "311002",
    "311003",
    "312201",
    "312001",
    "312002",
    "313001",
    "313002",
    "313003",
    "321001",
    "351001",
    "361001",
    "361002",
    "371001",
    "11002",
    "11101",
    "142902",
    "331001",
    "341001",
    "590001",
    "590002",
    "590003",
    "590004",
    "590005",
    "590006",
    "590007",
    "590008",
    "590009",
    "590010",
    "590011",
    "1",
    "11"
];

export const PractitionerIHEXDSFacharzttitelderAerztekammernValueSet: ValueSet = [
    {
        system: "urn:oid:1.2.276.0.76.5.514",
        concept: [
            {
                code: "11001",
                display: "FA Allgemeinmedizin"
            },
            {
                code: "12901",
                display: "SP Geriatrie"
            },
            {
                code: "21001",
                display: "FA Anästhesiologie"
            },
            {
                code: "21002",
                display: "FA Anästhesiologie und Intensivtherapie"
            },
            {
                code: "31001",
                display: "FA Anatomie"
            },
            {
                code: "41001",
                display: "FA Arbeitshygiene"
            },
            {
                code: "41002",
                display: "FA Arbeitsmedizin"
            },
            {
                code: "51001",
                display: "FA Augenheilkunde"
            },
            {
                code: "61001",
                display: "FA Biochemie"
            },
            {
                code: "71107",
                display: "FA Allgemeinchirurgie"
            },
            {
                code: "71101",
                display: "FA Allgemeine Chirurgie"
            },
            {
                code: "71001",
                display: "FA Chirurgie"
            },
            {
                code: "71102",
                display: "FA Gefäßchirurgie"
            },
            {
                code: "71002",
                display: "FA Herzchirurgie"
            },
            {
                code: "71202",
                display: "FA Kinder- und Jugendchirurgie"
            },
            {
                code: "71003",
                display: "FA Kinderchirurgie"
            },
            {
                code: "71004",
                display: "FA Orthopädie"
            },
            {
                code: "71103",
                display: "FA Orthopädie und Unfallchirurgie"
            },
            {
                code: "71005",
                display: "FA Plastische Chirurgie"
            },
            {
                code: "71106",
                display: "FA Plastische und Ästhetische Chirurgie"
            },
            {
                code: "71201",
                display: "FA Plastische; Rekonstruktive und Ästhetische Chirurgie"
            },
            {
                code: "71104",
                display: "FA Thoraxchirurgie"
            },
            {
                code: "71105",
                display: "FA Visceralchirurgie"
            },
            {
                code: "71108",
                display: "FA Viszeralchirurgie"
            },
            {
                code: "72001",
                display: "SP Gefäßchirurgie"
            },
            {
                code: "72002",
                display: "SP Rheumatologie (Orthopädie)"
            },
            {
                code: "72003",
                display: "SP Thoraxchirurgie in der Chirurgie"
            },
            {
                code: "72004",
                display: "SP Thoraxchirurgie in der Herzchirurgie"
            },
            {
                code: "72005",
                display: "SP Unfallchirurgie"
            },
            {
                code: "72006",
                display: "SP Visceralchirurgie"
            },
            {
                code: "73001",
                display: "TG Echokardiologie herznaher Gefäße"
            },
            {
                code: "73002",
                display: "TG Gefäßchirurgie"
            },
            {
                code: "73003",
                display: "TG Herz- und Gefäßchirurgie"
            },
            {
                code: "73004",
                display: "TG Kinderchirurgie"
            },
            {
                code: "73005",
                display: "TG Plastische Chirurgie"
            },
            {
                code: "73006",
                display: "TG Rheumatologie (Orthopädie)"
            },
            {
                code: "73007",
                display: "TG Thorax- und Kardiovaskularchirurgie"
            },
            {
                code: "73008",
                display: "TG Thoraxchirurgie"
            },
            {
                code: "73009",
                display: "TG Unfallchirurgie"
            },
            {
                code: "81001",
                display: "FA Frauenheilkunde"
            },
            {
                code: "81002",
                display: "FA Frauenheilkunde und Geburtshilfe"
            },
            {
                code: "81003",
                display: "FA Gynäkologie und Geburtshilfe"
            },
            {
                code: "82101",
                display: "SP Gynäkologische Endokrinologie und Reproduktionsmedizin"
            },
            {
                code: "82102",
                display: "SP Gynäkologische Onkologie"
            },
            {
                code: "82103",
                display: "SP Spezielle Geburtshilfe und Perinatalmedizin"
            },
            {
                code: "91001",
                display: "FA Hals-Nasen-Ohrenheilkunde"
            },
            {
                code: "91002",
                display: "FA Phoniatrie und Pädaudiologie"
            },
            {
                code: "91101",
                display: "FA Sprach-; Stimm- und kindliche Hörstörungen"
            },
            {
                code: "93001",
                display: "TG Audiologie"
            },
            {
                code: "93002",
                display: "TG Phoniatrie"
            },
            {
                code: "93003",
                display: "TG Phoniatrie und Pädaudiologie"
            },
            {
                code: "101001",
                display: "FA Dermatologie und Venerologie"
            },
            {
                code: "101002",
                display: "FA Haut- und Geschlechtskrankheiten"
            },
            {
                code: "111001",
                display: "FA Humangenetik"
            },
            {
                code: "121001",
                display: "FA Hygiene"
            },
            {
                code: "121002",
                display: "FA Hygiene und Umweltmedizin"
            },
            {
                code: "131001",
                display: "FA Immunologie"
            },
            {
                code: "141002",
                display: "FA Innere Medizin"
            },
            {
                code: "141110",
                display: "FA Innere Medizin und Angiologie"
            },
            {
                code: "141111",
                display: "FA Innere Medizin und Endokrinologie und Diabetologie"
            },
            {
                code: "141112",
                display: "FA Innere Medizin und Gastroenterologie"
            },
            {
                code: "141903",
                display: "FA Innere Medizin und Geriatrie"
            },
            {
                code: "141113",
                display: "FA Innere Medizin und Hämatologie und Onkologie"
            },
            {
                code: "141904",
                display: "FA Innere Medizin und Infektiologie"
            },
            {
                code: "141114",
                display: "FA Innere Medizin und Kardiologie"
            },
            {
                code: "141115",
                display: "FA Innere Medizin und Nephrologie"
            },
            {
                code: "141116",
                display: "FA Innere Medizin und Pneumologie"
            },
            {
                code: "141117",
                display: "FA Innere Medizin und Rheumatologie"
            },
            {
                code: "141102",
                display: "FA Innere Medizin und Schwerpunkt Angiologie"
            },
            {
                code: "141103",
                display:
                    "FA Innere Medizin und Schwerpunkt Endokrinologie und Diabetologie"
            },
            {
                code: "141104",
                display: "FA Innere Medizin und Schwerpunkt Gastroenterologie"
            },
            {
                code: "141901",
                display: "FA Innere Medizin und Schwerpunkt Geriatrie"
            },
            {
                code: "141902",
                display: "FA Innere Medizin und Schwerpunkt gesamte Innere Medizin"
            },
            {
                code: "141105",
                display: "FA Innere Medizin und Schwerpunkt Hämatologie und Onkologie"
            },
            {
                code: "141106",
                display: "FA Innere Medizin und Schwerpunkt Kardiologie"
            },
            {
                code: "141107",
                display: "FA Innere Medizin und Schwerpunkt Nephrologie"
            },
            {
                code: "141108",
                display: "FA Innere Medizin und Schwerpunkt Pneumologie"
            },
            {
                code: "141109",
                display: "FA Innere Medizin und Schwerpunkt Rheumatologie"
            },
            {
                code: "141003",
                display: "FA Internist/Lungen- und Bronchialheilkunde"
            },
            {
                code: "141005",
                display: "FA Lungen- und Bronchialheilkunde"
            },
            {
                code: "141004",
                display: "FA Lungenheilkunde"
            },
            {
                code: "142001",
                display: "SP Angiologie"
            },
            {
                code: "142002",
                display: "SP Endokrinologie"
            },
            {
                code: "142901",
                display: "SP Endokrinologie und Diabetologie"
            },
            {
                code: "142003",
                display: "SP Gastroenterologie"
            },
            {
                code: "142004",
                display: "SP Geriatrie"
            },
            {
                code: "142005",
                display: "SP Hämatologie und Internistische Onkologie"
            },
            {
                code: "142006",
                display: "SP Infektiologie"
            },
            {
                code: "142007",
                display: "SP Kardiologie"
            },
            {
                code: "142008",
                display: "SP Nephrologie"
            },
            {
                code: "142009",
                display: "SP Pneumologie"
            },
            {
                code: "142010",
                display: "SP Rheumatologie"
            },
            {
                code: "143001",
                display: "TG Diabetologie"
            },
            {
                code: "143002",
                display: "TG Endokrinologie"
            },
            {
                code: "143003",
                display: "TG Gastroenterologie"
            },
            {
                code: "143004",
                display: "TG Hämatologie"
            },
            {
                code: "143005",
                display: "TG Infektions- und Tropenmedizin"
            },
            {
                code: "143006",
                display: "TG Kardiologie"
            },
            {
                code: "143901",
                display: "TG Kardiologie und Angiologie"
            },
            {
                code: "143007",
                display: "TG Lungen- und Bronchialheilkunde"
            },
            {
                code: "143008",
                display: "TG Nephrologie"
            },
            {
                code: "143009",
                display: "TG Rheumatologie"
            },
            {
                code: "151002",
                display: "FA Kinder- und Jugendmedizin"
            },
            {
                code: "151001",
                display: "FA Kinderheilkunde"
            },
            {
                code: "152901",
                display:
                    "SP Endokrinologie und Diabetologie in der Kinder- und Jugendmedizin"
            },
            {
                code: "152902",
                display: "SP Gastroenterologie in der Kinder- und Jugendmedizin"
            },
            {
                code: "152001",
                display: "SP Infektiologie"
            },
            {
                code: "152201",
                display: "SP Kinder- und Jugend-Hämatologie und -Onkologie"
            },
            {
                code: "152202",
                display: "SP Kinder- und Jugend-Kardiologie"
            },
            {
                code: "152101",
                display: "SP Kinder-Hämatologie und -Onkologie"
            },
            {
                code: "152002",
                display: "SP Kinder-Kardiologie"
            },
            {
                code: "152906",
                display: "SP Kinderpneumologie"
            },
            {
                code: "152003",
                display: "SP Neonatologie"
            },
            {
                code: "152903",
                display: "SP Nephrologie"
            },
            {
                code: "152102",
                display: "SP Neuropädiatrie"
            },
            {
                code: "152904",
                display: "SP Pädiatrische Rheumatologie"
            },
            {
                code: "152905",
                display: "SP Pulmologie in der Kinder- und Jugendmedizin"
            },
            {
                code: "153001",
                display: "TG Kinderdiabetologie"
            },
            {
                code: "153002",
                display: "TG Kindergastroenterologie"
            },
            {
                code: "153003",
                display: "TG Kinderhämatologie"
            },
            {
                code: "153004",
                display: "TG Kinderkardiologie"
            },
            {
                code: "153005",
                display: "TG Kinderlungen- und -bronchialheilkunde"
            },
            {
                code: "153006",
                display: "TG Kinderneonatologie"
            },
            {
                code: "153007",
                display: "TG Kindernephrologie"
            },
            {
                code: "153008",
                display: "TG Kinderneuropsychiatrie"
            },
            {
                code: "161001",
                display: "FA Kinder- und Jugendpsychiatrie"
            },
            {
                code: "161002",
                display: "FA Kinder- und Jugendpsychiatrie und -psychotherapie"
            },
            {
                code: "171001",
                display: "FA Laboratoriumsmedizin"
            },
            {
                code: "173001",
                display: "TG Medizinische Mikrobiologie"
            },
            {
                code: "181001",
                display: "FA Mikrobiologie"
            },
            {
                code: "181002",
                display: "FA Mikrobiologie und Infektionsepidemiologie"
            },
            {
                code: "181101",
                display: "FA Mikrobiologie; Virologie und Infektionsepidemiologie"
            },
            {
                code: "191001",
                display: "FA Kieferchirurgie"
            },
            {
                code: "191002",
                display: "FA Mund-Kiefer-Gesichtschirurgie"
            },
            {
                code: "191901",
                display: "FA Oralchirurgie"
            },
            {
                code: "201001",
                display: "FA Nervenheilkunde"
            },
            {
                code: "201002",
                display: "FA Nervenheilkunde (Neurologie und Psychiatrie)"
            },
            {
                code: "201003",
                display: "FA Neurologie und Psychiatrie (Nervenarzt)"
            },
            {
                code: "203001",
                display: "TG Kinderneuropsychiatrie"
            },
            {
                code: "211001",
                display: "FA Neurochirurgie"
            },
            {
                code: "221001",
                display: "FA Neurologie"
            },
            {
                code: "222901",
                display: "SP Geriatrie"
            },
            {
                code: "231001",
                display: "FA Nuklearmedizin"
            },
            {
                code: "241001",
                display: "FA Öffentliches Gesundheitswesen"
            },
            {
                code: "251001",
                display: "FA Neuropathologie"
            },
            {
                code: "251002",
                display: "FA Pathobiochemie und Labordiagnostik"
            },
            {
                code: "251003",
                display: "FA Pathologie"
            },
            {
                code: "251004",
                display: "FA Pathologische Anatomie"
            },
            {
                code: "251005",
                display: "FA Pathologische Physiologie"
            },
            {
                code: "253001",
                display: "TG Neuropathologie"
            },
            {
                code: "261001",
                display: "FA Klinische Pharmakologie"
            },
            {
                code: "261002",
                display: "FA Pharmakologie"
            },
            {
                code: "261003",
                display: "FA Pharmakologie und Toxikologie"
            },
            {
                code: "263001",
                display: "TG Klinische Pharmakologie"
            },
            {
                code: "381201",
                display: "Phoniatrie und Pädaudiologie"
            },
            {
                code: "271001",
                display: "FA Physikalische und Rehabilitative Medizin"
            },
            {
                code: "271002",
                display: "FA Physiotherapie"
            },
            {
                code: "281001",
                display: "FA Physiologie"
            },
            {
                code: "291001",
                display: "FA Psychiatrie"
            },
            {
                code: "291002",
                display: "FA Psychiatrie und Psychotherapie"
            },
            {
                code: "292101",
                display: "SP Forensische Psychiatrie"
            },
            {
                code: "292901",
                display: "SP Geriatrie"
            },
            {
                code: "301101",
                display: "FA Psychosomatische Medizin und Psychotherapie"
            },
            {
                code: "301001",
                display: "FA Psychotherapeutische Medizin"
            },
            {
                code: "301002",
                display: "FA Psychotherapie"
            },
            {
                code: "311001",
                display: "FA Diagnostische Radiologie"
            },
            {
                code: "311002",
                display: "FA Radiologie"
            },
            {
                code: "311003",
                display: "FA Radiologische Diagnostik"
            },
            {
                code: "312201",
                display: "SP Kinder- und Jugendradiologie"
            },
            {
                code: "312001",
                display: "SP Kinderradiologie"
            },
            {
                code: "312002",
                display: "SP Neuroradiologie"
            },
            {
                code: "313001",
                display: "TG Kinderradiologie"
            },
            {
                code: "313002",
                display: "TG Neuroradiologie"
            },
            {
                code: "313003",
                display: "TG Strahlentherapie"
            },
            {
                code: "321001",
                display: "FA Rechtsmedizin"
            },
            {
                code: "351001",
                display: "FA Strahlentherapie"
            },
            {
                code: "361001",
                display: "FA Blutspende- und Transfusionswesen"
            },
            {
                code: "361002",
                display: "FA Transfusionsmedizin"
            },
            {
                code: "371001",
                display: "FA Urologie"
            },
            {
                code: "11002",
                display: "FA Praktischer Arzt"
            },
            {
                code: "11101",
                display: "FA Innere und Allgemeinmedizin (Hausarzt)"
            },
            {
                code: "131001",
                display: "FA Immunologie"
            },
            {
                code: "142902",
                display: "SP Geriatrie"
            },
            {
                code: "331001",
                display: "FA Sozialhygiene"
            },
            {
                code: "341001",
                display: "FA Sportmedizin"
            },
            {
                code: "590001",
                display: "Biomathematik"
            },
            {
                code: "590002",
                display: "Biophysik"
            },
            {
                code: "590003",
                display: "Geschichte der Medizin"
            },
            {
                code: "590004",
                display: "Industrietoxikologie"
            },
            {
                code: "590005",
                display: "Kieferchirurgie"
            },
            {
                code: "590006",
                display: "Klinische Strahlenphysik"
            },
            {
                code: "590007",
                display: "Medizinische Genetik"
            },
            {
                code: "590008",
                display: "Medizinische Informatik"
            },
            {
                code: "590009",
                display: "Medizinische Physik und Biophysik"
            },
            {
                code: "590010",
                display: "Medizinische Wissenschaftsinformation"
            },
            {
                code: "590011",
                display: "Pathologische Biochemie"
            },
            {
                code: "1",
                display: "Ärztin/Arzt"
            },
            {
                code: "11",
                display: "Praktische Ärztin/Praktischer Arzt (EWG-Recht ab 86/457/EWG)"
            }
        ]
    }
];

export default PractitionerIHEXDSFacharzttitelderAerztekammern;
