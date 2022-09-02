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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Practitioner_Speciality

type VaccinationPractitionerSpeciality =
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
    | "2"
    | "179"
    | "4"
    | "69"
    | "70"
    | "71"
    | "72"
    | "73"
    | "181"
    | "182"
    | "309343006"
    | "042"
    | "096"
    | "097"
    | "140"
    | "143"
    | "171"
    | "192"
    | "160"
    | "161"
    | "536"
    | "537";

type VaccinationPractitionerSpecialityType = t.KeyofC<{
    "1": null;
    "3": null;
    "010": null;
    "020": null;
    "030": null;
    "050": null;
    "060": null;
    "070": null;
    "080": null;
    "091": null;
    "093": null;
    "102": null;
    "110": null;
    "130": null;
    "142": null;
    "147": null;
    "150": null;
    "170": null;
    "180": null;
    "196": null;
    "197": null;
    "200": null;
    "210": null;
    "220": null;
    "230": null;
    "240": null;
    "250": null;
    "271": null;
    "281": null;
    "291": null;
    "301": null;
    "302": null;
    "303": null;
    "304": null;
    "308": null;
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
    "532": null;
    "533": null;
    "534": null;
    "535": null;
    "542": null;
    "544": null;
    "2": null;
    "179": null;
    "4": null;
    "69": null;
    "70": null;
    "71": null;
    "72": null;
    "73": null;
    "181": null;
    "182": null;
    "309343006": null;
    "042": null;
    "096": null;
    "097": null;
    "140": null;
    "143": null;
    "171": null;
    "192": null;
    "160": null;
    "161": null;
    "536": null;
    "537": null;
}>;

const VaccinationPractitionerSpeciality: VaccinationPractitionerSpecialityType = t.keyof({
    "1": null,
    "3": null,
    "010": null,
    "020": null,
    "030": null,
    "050": null,
    "060": null,
    "070": null,
    "080": null,
    "091": null,
    "093": null,
    "102": null,
    "110": null,
    "130": null,
    "142": null,
    "147": null,
    "150": null,
    "170": null,
    "180": null,
    "196": null,
    "197": null,
    "200": null,
    "210": null,
    "220": null,
    "230": null,
    "240": null,
    "250": null,
    "271": null,
    "281": null,
    "291": null,
    "301": null,
    "302": null,
    "303": null,
    "304": null,
    "308": null,
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
    "532": null,
    "533": null,
    "534": null,
    "535": null,
    "542": null,
    "544": null,
    "2": null,
    "179": null,
    "4": null,
    "69": null,
    "70": null,
    "71": null,
    "72": null,
    "73": null,
    "181": null,
    "182": null,
    "309343006": null,
    "042": null,
    "096": null,
    "097": null,
    "140": null,
    "143": null,
    "171": null,
    "192": null,
    "160": null,
    "161": null,
    "536": null,
    "537": null
});
export const VaccinationPractitionerSpecialityArray: string[] = [
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
    "2",
    "179",
    "4",
    "69",
    "70",
    "71",
    "72",
    "73",
    "181",
    "182",
    "309343006",
    "042",
    "096",
    "097",
    "140",
    "143",
    "171",
    "192",
    "160",
    "161",
    "536",
    "537"
];

export const VaccinationPractitionerSpecialityValueSet: ValueSet = [
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
                code: "171",
                display: "TG Neuropathologie"
            },
            {
                code: "192",
                display: "TG Neuroradiologie"
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

export default VaccinationPractitionerSpeciality;
