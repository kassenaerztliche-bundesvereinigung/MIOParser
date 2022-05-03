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

// Diese Conceptmap verknüpft die Codes für die Beratung von Schwangeren mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRCounsellingGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Counselling_German",
        element: [
            {
                code: "171054004+440670004+313071005",
                display:
                    "Pregnancy diet education (procedure) + Education about medication intake during pregnancy (procedure) + Counseling for substance abuse (procedure)",
                target: [
                    {
                        code: "ErnaehrunguaJodzufuhrMedikamenteGenussmittelAlkoholTabakundandereDrogen",
                        display:
                            "Ernährung (u.a. Jodzufuhr), Medikamente, Genussmittel (Alkohol, Tabak und andere Drogen)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "313080005+171056002+439816006",
                display:
                    "Work-related counseling (procedure) + Pregnancy exercise education (procedure) + Education about travel during pregnancy (procedure)",
                target: [
                    {
                        code: "TaetigkeitBerufSportReisen",
                        display: "Tätigkeit/Beruf, Sport, Reisen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "370995009",
                display: "Health risks education (procedure)",
                target: [
                    {
                        code: "Risikoberatung",
                        display: "Risikoberatung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409013000",
                display: "Delivery care education (procedure)",
                target: [
                    {
                        code: "GeburtsvorbereitungSchwangerschaftsgymnastik",
                        display: "Geburtsvorbereitung/Schwangerschaftsgymnastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156103008",
                display: "Education about screening for malignant neoplasm (procedure)",
                target: [
                    {
                        code: "Krebsfrueherkennungsuntersuchung",
                        display: "Krebsfrüherkennungsuntersuchung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156102003",
                display:
                    "Education about screening for human immunodeficiency virus (procedure)",
                target: [
                    {
                        code: "ZumHIVAntikoerpertest",
                        display: "Zum HIV-Antikörpertest",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243085009",
                display: "Oral health education (procedure)",
                target: [
                    {
                        code: "ZurMundgesundheit",
                        display: "Zur Mundgesundheit",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRCounsellingGerman;
