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
import MRPractitionerFunctionGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRPractitionerFunctionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Practitioner_Function

type MRPractitionerFunction =
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
    | "91"
    | "309343006"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192";

type MRPractitionerFunctionType = t.KeyofC<{
    "010": null;
    "020": null;
    "030": null;
    "050": null;
    "060": null;
    "070": null;
    "080": null;
    "091": null;
    "093": null;
    "110": null;
    "142": null;
    "147": null;
    "150": null;
    "170": null;
    "180": null;
    "197": null;
    "200": null;
    "210": null;
    "220": null;
    "230": null;
    "271": null;
    "281": null;
    "291": null;
    "303": null;
    "313": null;
    "314": null;
    "330": null;
    "341": null;
    "511": null;
    "512": null;
    "513": null;
    "514": null;
    "515": null;
    "516": null;
    "517": null;
    "521": null;
    "522": null;
    "523": null;
    "524": null;
    "525": null;
    "526": null;
    "527": null;
    "528": null;
    "532": null;
    "534": null;
    "535": null;
    "542": null;
    "544": null;
    "1": null;
    "3": null;
    "2": null;
    "179": null;
    "4": null;
    "33": null;
    "41": null;
    "86": null;
    "88": null;
    "89": null;
    "91": null;
    "309343006": null;
    "140": null;
    "143": null;
    "160": null;
    "161": null;
    "171": null;
    "192": null;
}>;

const MRPractitionerFunction: MRPractitionerFunctionType = t.keyof({
    "010": null,
    "020": null,
    "030": null,
    "050": null,
    "060": null,
    "070": null,
    "080": null,
    "091": null,
    "093": null,
    "110": null,
    "142": null,
    "147": null,
    "150": null,
    "170": null,
    "180": null,
    "197": null,
    "200": null,
    "210": null,
    "220": null,
    "230": null,
    "271": null,
    "281": null,
    "291": null,
    "303": null,
    "313": null,
    "314": null,
    "330": null,
    "341": null,
    "511": null,
    "512": null,
    "513": null,
    "514": null,
    "515": null,
    "516": null,
    "517": null,
    "521": null,
    "522": null,
    "523": null,
    "524": null,
    "525": null,
    "526": null,
    "527": null,
    "528": null,
    "532": null,
    "534": null,
    "535": null,
    "542": null,
    "544": null,
    "1": null,
    "3": null,
    "2": null,
    "179": null,
    "4": null,
    "33": null,
    "41": null,
    "86": null,
    "88": null,
    "89": null,
    "91": null,
    "309343006": null,
    "140": null,
    "143": null,
    "160": null,
    "161": null,
    "171": null,
    "192": null
});
export const MRPractitionerFunctionArray: string[] = [
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
    "91",
    "309343006",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192"
];

export const MRPractitionerFunctionValueSet: ValueSet = [
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
    },
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
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BAR2_WBO",
        concept: [
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
            }
        ]
    }
];

export { MRPractitionerFunctionGerman as ConceptMap };

export default MRPractitionerFunction;
