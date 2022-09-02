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

// Diese Conceptmap verknüpft die Codes für null mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const ReactionAllergyGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Reaction_Allergy_German",
        element: [
            {
                code: "39579001",
                display: "Anaphylaxis (disorder)",
                target: [
                    {
                        code: "Anaphylaxie",
                        display: "Anaphylaxie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41291007",
                display: "Angioedema (disorder)",
                target: [
                    {
                        code: "Angiooedem",
                        display: "Angioödem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "702809001",
                display:
                    "Drug reaction with eosinophilia and systemic symptoms (disorder)",
                target: [
                    {
                        code: "ArzneimittelreaktionmitEosinophilieundsystemischenSymptomen",
                        display:
                            "Arzneimittelreaktion mit Eosinophilie und systemischen Symptomen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "195967001",
                display: "Asthma (disorder)",
                target: [
                    {
                        code: "Asthmabronchiale",
                        display: "Asthma bronchiale",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24079001",
                display: "Atopic dermatitis (disorder)",
                target: [
                    {
                        code: "AtopischeDermatitis",
                        display: "Atopische Dermatitis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "4386001",
                display: "Bronchospasm (finding)",
                target: [
                    {
                        code: "Bronchospasmus",
                        display: "Bronchospasmus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271759003",
                display: "Bullous eruption (disorder)",
                target: [
                    {
                        code: "BulloeseHauteruption",
                        display: "Bullöse Hauteruption",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "62315008",
                display: "Diarrhea (finding)",
                target: [
                    {
                        code: "Diarrhoe",
                        display: "Diarrhoe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "267036007",
                display: "Dyspnea (finding)",
                target: [
                    {
                        code: "Dyspnoe",
                        display: "Dyspnoe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43116000",
                display: "Eczema (disorder)",
                target: [
                    {
                        code: "Ekzem",
                        display: "Ekzem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "23924001",
                display: "Tight chest (finding)",
                target: [
                    {
                        code: "EngegefuehlinderBrust",
                        display: "Engegefühl in der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "91175000",
                display: "Seizure (finding)",
                target: [
                    {
                        code: "EpileptischerAnfall",
                        display: "Epileptischer Anfall",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1985008",
                display: "Vomitus (substance)",
                target: [
                    {
                        code: "Erbrechen",
                        display: "Erbrechen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418363000",
                display: "Itching of skin (finding)",
                target: [
                    {
                        code: "Hautjucken",
                        display: "Hautjucken",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49727002",
                display: "Cough (finding)",
                target: [
                    {
                        code: "Husten",
                        display: "Husten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698247007",
                display: "Cardiac arrhythmia (disorder)",
                target: [
                    {
                        code: "KardialeArrhythmien",
                        display: "Kardiale Arrhythmien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "410430005",
                display: "Cardiorespiratory arrest (disorder)",
                target: [
                    {
                        code: "KardiorespiratorischerStillstand",
                        display: "Kardiorespiratorischer Stillstand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "9826008",
                display: "Conjunctivitis (disorder)",
                target: [
                    {
                        code: "Konjunktivitis",
                        display: "Konjunktivitis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "51599000",
                display: "Edema of larynx (disorder)",
                target: [
                    {
                        code: "Larynxoedem",
                        display: "Larynxödem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76067001",
                display: "Sneezing (finding)",
                target: [
                    {
                        code: "Niesen",
                        display: "Niesen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "781682005",
                display: "Ocular hyperemia (finding)",
                target: [
                    {
                        code: "OkulareHyperaemie",
                        display: "Okulare Hyperämie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271757001",
                display: "Papular eruption (disorder)",
                target: [
                    {
                        code: "PapuloeseHauteruption",
                        display: "Papulöse Hauteruption",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "247472004",
                display: "Wheal (finding)",
                target: [
                    {
                        code: "Quaddel",
                        display: "Quaddel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "70076002",
                display: "Rhinitis (disorder)",
                target: [
                    {
                        code: "Rhinitis",
                        display: "Rhinitis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73442001",
                display: "Stevens-Johnson syndrome (disorder)",
                target: [
                    {
                        code: "StevensJohnsonSyndrom",
                        display: "Stevens-Johnson-Syndrom",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "162290004",
                display: "Dry eyes (finding)",
                target: [
                    {
                        code: "TrockeneAugen",
                        display: "Trockene Augen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "422587007",
                display: "Nausea (finding)",
                target: [
                    {
                        code: "Uebelkeit",
                        display: "Übelkeit",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "126485001",
                display: "Urticaria (disorder)",
                target: [
                    {
                        code: "Urtikaria",
                        display: "Urtikaria",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "31996006",
                display: "Vasculitis (disorder)",
                target: [
                    {
                        code: "Vaskulitis",
                        display: "Vaskulitis",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default ReactionAllergyGerman;
