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

// Diese Conceptmap verknüpft die Codes für den Befundkatalog Besondere Befunde mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRSpecialFindingsGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Special_Findings_German",
        element: [
            {
                code: "27624003",
                display: "Chronic disease (disorder)",
                target: [
                    {
                        code: "BehandlungsbeduerftigeAllgemeinerkrankungen",
                        display: "(27) Behandlungsbedürftige Allgemeinerkrankungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "710814002",
                display: "Long-term current use of drug therapy (situation)",
                target: [
                    {
                        code: "Dauermedikation",
                        display: "(28) Dauermedikation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "66214007",
                display: "Substance abuse (disorder)",
                target: [
                    {
                        code: "Abusus",
                        display: "(29) Abusus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271596009",
                display: "Mental distress (finding)",
                target: [
                    {
                        code: "BesonderepsychischeBelastung",
                        display: "(30) Besondere psychische Belastung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161152002",
                display: "Social problem (finding)",
                target: [
                    {
                        code: "BesonderesozialeBelastung",
                        display: "(31) Besondere soziale Belastung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "723665008",
                display: "Vaginal bleeding complicating early pregnancy (disorder)",
                target: [
                    {
                        code: "BlutungenvorderSSW",
                        display: "(32) Blutungen vor der 28. SSW",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427139004",
                display: "Third trimester bleeding (disorder)",
                target: [
                    {
                        code: "BlutungennachderSSW",
                        display: "(33) Blutungen nach der 28. SSW",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36813001",
                display: "Placenta previa (disorder)",
                target: [
                    {
                        code: "Placentapraevia",
                        display: "(34) Placenta praevia",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16356006",
                display: "Multiple pregnancy (disorder)",
                target: [
                    {
                        code: "Mehrlingsschwangerschaft",
                        display: "(35) Mehrlingsschwangerschaft",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86203003",
                display: "Polyhydramnios (disorder)",
                target: [
                    {
                        code: "Hydramnion",
                        display: "(36) Hydramnion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59566000",
                display: "Oligohydramnios (disorder)",
                target: [
                    {
                        code: "Oligohydramnie",
                        display: "(37) Oligohydramnie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237238006",
                display: "Pregnancy with uncertain dates (finding)",
                target: [
                    {
                        code: "Terminunklarheit",
                        display: "(38) Terminunklarheit",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237292005",
                display: "Placental insufficiency (disorder)",
                target: [
                    {
                        code: "PlacentaInsuffizienz",
                        display: "(39) Placenta-Insuffizienz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17382005",
                display: "Cervical incompetence (disorder)",
                target: [
                    {
                        code: "IsthmozervikaleInsuffizienz",
                        display: "(40) Isthmozervikale Insuffizienz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6383007",
                display: "Premature labor (finding)",
                target: [
                    {
                        code: "VorzeitigeWehentaetigkeit",
                        display: "(41) Vorzeitige Wehentätigkeit",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "199246003",
                display: "Anemia during pregnancy - baby not yet delivered (disorder)",
                target: [
                    {
                        code: "Anaemie",
                        display: "(42) Anämie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307534009",
                display: "Urinary tract infection in pregnancy (disorder)",
                target: [
                    {
                        code: "Harnwegsinfekt",
                        display: "(43) Harnwegsinfekt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "165775009",
                display: "Indirect Coombs test positive (finding)",
                target: [
                    {
                        code: "IndirekterCoombstestpositiv",
                        display: "(44) Indirekter Coombstest positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "47200007:418775008=312404004",
                display:
                    "High risk pregnancy (finding) : Finding method (attribute) = Antenatal blood tests (procedure)",
                target: [
                    {
                        code: "RisikoausanderenserologischenBefunden",
                        display: "(45) Risiko aus anderen serologischen Befunden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "82771000119102",
                display: "Hypertension complicating pregnancy (disorder)",
                target: [
                    {
                        code: "HypertonieBlutdruckueber",
                        display: "(46) Hypertonie (Blutdruck über 140/90)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "29738008",
                display: "Proteinuria (finding)",
                target: [
                    {
                        code: "pathologischeEiweissausscheidung",
                        display: "(47) Pathologische Eiweißausscheidung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698632006:263502005=371924009",
                display:
                    "Pregnancy induced edema (disorder) : Clinical course (attribute) = Moderate to severe (qualifier value)",
                target: [
                    {
                        code: "MittelgradigeschwereOedeme",
                        display: "(48) Mittelgradige - schwere Ödeme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45007003",
                display: "Low blood pressure (disorder)",
                target: [
                    {
                        code: "Hypotonie",
                        display: "(49) Hypotonie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11687002",
                display: "Gestational diabetes mellitus (disorder)",
                target: [
                    {
                        code: "Gestationsdiabetes",
                        display: "(50) Gestationsdiabetes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "289365005",
                display: "Finding of malposition of fetus (finding)",
                target: [
                    {
                        code: "Einstellungsanomalie",
                        display: "(51) Einstellungsanomalie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118185001",
                display: "Finding related to pregnancy (finding)",
                target: [
                    {
                        code: "AndereBesonderheiten",
                        display: "(52) Andere Besonderheiten",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRSpecialFindingsGerman;
