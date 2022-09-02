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

// Diese Conceptmap verknüpft die Codes für die Lebensphase mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const StageLifeGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Stage_Life_German",
        element: [
            {
                code: "271872005",
                display: "Old age (qualifier value)",
                target: [
                    {
                        code: "Senior65",
                        display:
                            "Ältere Person/ Senioren (Mit Beginn des 65. Lebensjahres)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41847000",
                display: "Adulthood (qualifier value)",
                target: [
                    {
                        code: "Erwachsener18",
                        display: "Erwachsener (Ab Beginn des 19. Lebensjahres)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "263659003",
                display: "Adolescence (qualifier value)",
                target: [
                    {
                        code: "Jugendlicher1318",
                        display:
                            "Jugendlicher (Ab Beginn des 13. bis zum vollendeten 18. Lebensjahres)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "255398004",
                display: "Childhood (qualifier value)",
                target: [
                    {
                        code: "Kind412",
                        display:
                            "Kind (Ab Beginn des 4. bis zum vollendeten 12. Lebensjahres)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713153009",
                display: "Toddler (qualifier value)",
                target: [
                    {
                        code: "Kleinkind134",
                        display:
                            "Kleinkind (Ab Beginn des 13. Lebensmonat bis zum vollendeten 3. Lebensjahr)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3658006",
                display: "Infancy (qualifier value)",
                target: [
                    {
                        code: "Saeugling12",
                        display:
                            "Säugling (Ab Beginn des 29. Lebenstages bis zum vollendeten 12. Lebensmonat)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "255407002",
                display: "Neonatal (qualifier value)",
                target: [
                    {
                        code: "Neugeborenes029",
                        display: "Neugeborenes (Ab Geburt bis zum 29. Lebenstag)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default StageLifeGerman;
