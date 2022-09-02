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
import CMRPractitionerSpecialityGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRPractitionerSpecialityGerman";

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

type CMRPractitionerSpecialityType = t.KeyofC<{
    "309343006": null;
    "1": null;
    "3": null;
    "010": null;
    "042": null;
    "050": null;
    "060": null;
    "070": null;
    "080": null;
    "091": null;
    "093": null;
    "096": null;
    "097": null;
    "102": null;
    "110": null;
    "140": null;
    "143": null;
    "160": null;
    "161": null;
    "171": null;
    "192": null;
    "196": null;
    "230": null;
    "304": null;
    "308": null;
    "313": null;
    "314": null;
    "330": null;
    "341": null;
    "512": null;
    "517": null;
    "518": null;
    "521": null;
    "522": null;
    "523": null;
    "524": null;
    "525": null;
    "526": null;
    "527": null;
    "528": null;
    "530": null;
    "531": null;
    "535": null;
    "536": null;
    "537": null;
    "544": null;
    "2": null;
    "179": null;
    "4": null;
    "33": null;
    "37": null;
    "38": null;
    "39": null;
    "41": null;
    "47": null;
    "76": null;
    "86": null;
    "88": null;
    "89": null;
    "91": null;
}>;

const CMRPractitionerSpeciality: CMRPractitionerSpecialityType = t.keyof({
    "309343006": null,
    "1": null,
    "3": null,
    "010": null,
    "042": null,
    "050": null,
    "060": null,
    "070": null,
    "080": null,
    "091": null,
    "093": null,
    "096": null,
    "097": null,
    "102": null,
    "110": null,
    "140": null,
    "143": null,
    "160": null,
    "161": null,
    "171": null,
    "192": null,
    "196": null,
    "230": null,
    "304": null,
    "308": null,
    "313": null,
    "314": null,
    "330": null,
    "341": null,
    "512": null,
    "517": null,
    "518": null,
    "521": null,
    "522": null,
    "523": null,
    "524": null,
    "525": null,
    "526": null,
    "527": null,
    "528": null,
    "530": null,
    "531": null,
    "535": null,
    "536": null,
    "537": null,
    "544": null,
    "2": null,
    "179": null,
    "4": null,
    "33": null,
    "37": null,
    "38": null,
    "39": null,
    "41": null,
    "47": null,
    "76": null,
    "86": null,
    "88": null,
    "89": null,
    "91": null
});
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

export { CMRPractitionerSpecialityGerman as ConceptMap };

export default CMRPractitionerSpeciality;
