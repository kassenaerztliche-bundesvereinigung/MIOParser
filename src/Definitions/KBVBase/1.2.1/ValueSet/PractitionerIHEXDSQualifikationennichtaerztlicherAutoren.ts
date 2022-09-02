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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Practitioner_IHEXDS_Qualifikationen_nicht_aerztlicher_Autoren

type PractitionerIHEXDSQualifikationennichtaerztlicherAutoren =
    | "2"
    | "179"
    | "4"
    | "6"
    | "33"
    | "34"
    | "35"
    | "37"
    | "38"
    | "39"
    | "41"
    | "175"
    | "176"
    | "177"
    | "178"
    | "186"
    | "187"
    | "188"
    | "47"
    | "48"
    | "50"
    | "53"
    | "55"
    | "60"
    | "69"
    | "70"
    | "71"
    | "72"
    | "73"
    | "180"
    | "181"
    | "182"
    | "74"
    | "75"
    | "76"
    | "77"
    | "78"
    | "79"
    | "80"
    | "81"
    | "82"
    | "183"
    | "184"
    | "185"
    | "86"
    | "88"
    | "89"
    | "91"
    | "134"
    | "137"
    | "138"
    | "139"
    | "144"
    | "145"
    | "146"
    | "147"
    | "148";

type PractitionerIHEXDSQualifikationennichtaerztlicherAutorenType = t.KeyofC<{
    "2": null;
    "179": null;
    "4": null;
    "6": null;
    "33": null;
    "34": null;
    "35": null;
    "37": null;
    "38": null;
    "39": null;
    "41": null;
    "175": null;
    "176": null;
    "177": null;
    "178": null;
    "186": null;
    "187": null;
    "188": null;
    "47": null;
    "48": null;
    "50": null;
    "53": null;
    "55": null;
    "60": null;
    "69": null;
    "70": null;
    "71": null;
    "72": null;
    "73": null;
    "180": null;
    "181": null;
    "182": null;
    "74": null;
    "75": null;
    "76": null;
    "77": null;
    "78": null;
    "79": null;
    "80": null;
    "81": null;
    "82": null;
    "183": null;
    "184": null;
    "185": null;
    "86": null;
    "88": null;
    "89": null;
    "91": null;
    "134": null;
    "137": null;
    "138": null;
    "139": null;
    "144": null;
    "145": null;
    "146": null;
    "147": null;
    "148": null;
}>;

const PractitionerIHEXDSQualifikationennichtaerztlicherAutoren: PractitionerIHEXDSQualifikationennichtaerztlicherAutorenType =
    t.keyof({
        "2": null,
        "179": null,
        "4": null,
        "6": null,
        "33": null,
        "34": null,
        "35": null,
        "37": null,
        "38": null,
        "39": null,
        "41": null,
        "175": null,
        "176": null,
        "177": null,
        "178": null,
        "186": null,
        "187": null,
        "188": null,
        "47": null,
        "48": null,
        "50": null,
        "53": null,
        "55": null,
        "60": null,
        "69": null,
        "70": null,
        "71": null,
        "72": null,
        "73": null,
        "180": null,
        "181": null,
        "182": null,
        "74": null,
        "75": null,
        "76": null,
        "77": null,
        "78": null,
        "79": null,
        "80": null,
        "81": null,
        "82": null,
        "183": null,
        "184": null,
        "185": null,
        "86": null,
        "88": null,
        "89": null,
        "91": null,
        "134": null,
        "137": null,
        "138": null,
        "139": null,
        "144": null,
        "145": null,
        "146": null,
        "147": null,
        "148": null
    });
export const PractitionerIHEXDSQualifikationennichtaerztlicherAutorenArray: string[] = [
    "2",
    "179",
    "4",
    "6",
    "33",
    "34",
    "35",
    "37",
    "38",
    "39",
    "41",
    "175",
    "176",
    "177",
    "178",
    "186",
    "187",
    "188",
    "47",
    "48",
    "50",
    "53",
    "55",
    "60",
    "69",
    "70",
    "71",
    "72",
    "73",
    "180",
    "181",
    "182",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "183",
    "184",
    "185",
    "86",
    "88",
    "89",
    "91",
    "134",
    "137",
    "138",
    "139",
    "144",
    "145",
    "146",
    "147",
    "148"
];

export const PractitionerIHEXDSQualifikationennichtaerztlicherAutorenValueSet: ValueSet =
    [
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
                    code: "6",
                    display: "Zahnmedizinischer Fachangestellter"
                },
                {
                    code: "33",
                    display: "Kranken-, Altenpflege, Geburtshilfe"
                },
                {
                    code: "34",
                    display: "Altenpflegehelfer"
                },
                {
                    code: "35",
                    display: "Altenpfleger"
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
                    code: "175",
                    display:
                        "Fachgesundheits- und krankenpfleger für Intensivpflege und Anästhesie"
                },
                {
                    code: "176",
                    display:
                        "Fachgesundheits- und krankenpfleger im Operations-/Endoskopiedienst"
                },
                {
                    code: "177",
                    display: "Fachgesundheits- und krankenpfleger für Hygiene"
                },
                {
                    code: "178",
                    display:
                        "Fachgesundheits- und krankenpfleger für Palliativ- und Hospizpflege"
                },
                {
                    code: "186",
                    display: "Pflegefachmann/Pflegefachfrau"
                },
                {
                    code: "187",
                    display: "Fachgesundheits- und krankenpfleger für Onkologie"
                },
                {
                    code: "188",
                    display: "Fachgesundheits- und krankenpfleger für Psychiatrie"
                },
                {
                    code: "47",
                    display: "Nichtärztliche Behandlung, Therapie (außer Psychotherapie)"
                },
                {
                    code: "48",
                    display: "Akademischer Sprachtherapeut"
                },
                {
                    code: "50",
                    display: "Ergotherapeut"
                },
                {
                    code: "53",
                    display: "Klinischer Linguist"
                },
                {
                    code: "55",
                    display: "Logopäde"
                },
                {
                    code: "60",
                    display: "Physiotherapeut"
                },
                {
                    code: "69",
                    display: "Pharmazeutische Beratung, Pharmavertrieb"
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
                },
                {
                    code: "74",
                    display: "Psychologische Analyse, Beratung, Therapie"
                },
                {
                    code: "75",
                    display: "Gesundheits- und Rehabilitationspsychologe"
                },
                {
                    code: "76",
                    display: "Kinder- und Jugendlichenpsychotherapeut"
                },
                {
                    code: "77",
                    display: "Klinischer Psychologe"
                },
                {
                    code: "78",
                    display: "Kommunikationspsychologe"
                },
                {
                    code: "79",
                    display: "Pädagogischer Psychologe"
                },
                {
                    code: "80",
                    display: "Psychoanalytiker"
                },
                {
                    code: "81",
                    display: "Psychologe"
                },
                {
                    code: "82",
                    display: "Psychologischer Psychotherapeut"
                },
                {
                    code: "183",
                    display: "Psychotherapeut"
                },
                {
                    code: "184",
                    display: "Fachpsychotherapeut für Kinder und Jugendliche"
                },
                {
                    code: "185",
                    display: "Fachpsychotherapeut für Erwachsene"
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
                },
                {
                    code: "134",
                    display: "Medizinisch-technische Assistenz"
                },
                {
                    code: "137",
                    display:
                        "Medizinisch-Technischer Assistent Funktionsdiagnostik – MTA-F"
                },
                {
                    code: "138",
                    display: "Medizinisch-Technischer Laboratoriumsassistent – MTA-L"
                },
                {
                    code: "139",
                    display: "Medizinisch-Technischer Radiologieassistent – MTA-R"
                },
                {
                    code: "144",
                    display: "Chemie, naturwissenschaftliche Laboranalyse (außer MTA)"
                },
                {
                    code: "145",
                    display: "Biochemiker (z.B. klinische Chemie)"
                },
                {
                    code: "146",
                    display: "Chemiker (z.B. klinische Chemie)"
                },
                {
                    code: "147",
                    display: "Humangenetiker"
                },
                {
                    code: "148",
                    display: "Mikrobiologe"
                }
            ]
        }
    ];

export default PractitionerIHEXDSQualifikationennichtaerztlicherAutoren;
