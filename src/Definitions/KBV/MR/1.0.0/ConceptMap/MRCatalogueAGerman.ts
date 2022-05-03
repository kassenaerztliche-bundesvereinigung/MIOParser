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

// Diese Conceptmap verknüpft die Codes für die Anamneseerhebung bei Erstuntersuchung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRCatalogueAGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Catalogue_A_German",
        element: [
            {
                code: "416471007",
                display: "Family history of clinical finding (situation)",
                target: [
                    {
                        code: "FamiliaereBelastungzBDiabetesHypertonieFehlbildungengenetischeKrankheitenpsychischeKrankheiten",
                        display:
                            "(1) Familiäre Belastung (z.B. Diabetes, Hypertonie, Fehlbildungen, genetische Krankheiten, psychische Krankheiten)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312850006",
                display: "History of disorder (situation)",
                target: [
                    {
                        code: "FruehereeigeneschwereErkrankungenzBHerzLungeLeberNierenZNSPsyche",
                        display:
                            "(2) Frühere eigene schwere Erkrankungen (z.B. Herz, Lunge, Leber, Nieren, ZNS, Psyche)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161460007",
                display: "History of coagulation defect (situation)",
                target: [
                    {
                        code: "BlutungsThromboseneigung",
                        display: "(3) Blutungs-/Thromboseneigung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "609328004",
                display: "Allergic disposition (finding)",
                target: [
                    {
                        code: "AllergiezBgegenMedikamente",
                        display: "(4) Allergie, z.B. gegen Medikamente",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161664006",
                display: "History of blood transfusion (situation)",
                target: [
                    {
                        code: "FruehereBluttransfusionen",
                        display: "(5) Frühere Bluttransfusionen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271596009",
                display: "Mental distress (finding)",
                target: [
                    {
                        code: "BesonderepsychischeBelastungzBfamiliaereoderberufliche",
                        display:
                            "(6) Besondere psychische Belastung (z.B. familiäre oder berufliche)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161152002",
                display: "Social problem (finding)",
                target: [
                    {
                        code: "BesonderesozialeBelastungzBIntegrationsproblemewirtschaftlicheProbleme",
                        display:
                            "(7) Besondere soziale Belastung (z.B. Integrationsprobleme, wirtschaftliche Probleme)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312850006:246090004=44795003",
                display:
                    "History of disorder (situation):Associated finding (attribute)=Rhesus isoimmunization affecting pregnancy (disorder)",
                target: [
                    {
                        code: "RhesusInkompatibilitaetbeivorangegangenenSchwangerschaften",
                        display:
                            "(8) Rhesus-Inkompatibilität (bei vorangegangenen Schwangerschaften)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73211009",
                display: "Diabetes mellitus (disorder)",
                target: [
                    {
                        code: "Diabetesmellitus",
                        display: "(9) Diabetes mellitus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414916001",
                display: "Obesity (disorder)",
                target: [
                    {
                        code: "Adipositas",
                        display: "(10) Adipositas",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237837007",
                display: "Primordial dwarfism (disorder)",
                target: [
                    {
                        code: "Kleinwuchs",
                        display: "(11) Kleinwuchs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8447006",
                display: "Congenital anomaly of skeletal bone (disorder)",
                target: [
                    {
                        code: "Skelettanomalien",
                        display: "(12) Skelettanomalien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237240001",
                display: "Teenage pregnancy (finding)",
                target: [
                    {
                        code: "SchwangereunterJahren",
                        display: "(13) Schwangere unter 18 Jahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "416413003",
                display: "Advanced maternal age gravida (finding)",
                target: [
                    {
                        code: "SchwangereueberJahren",
                        display: "(14) Schwangere über 35 Jahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18656007",
                display: "Grand multipara (finding)",
                target: [
                    {
                        code: "VielgebaerendemehralsKinder",
                        display: "(15) Vielgebärende (mehr als 4 Kinder)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "134521000119104",
                display: "Fertility preservation procedure done (situation)",
                target: [
                    {
                        code: "ZustandnachSterilitaetsbehandlung",
                        display: "(16) Zustand nach Sterilitätsbehandlung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161765003",
                display: "History of premature delivery (situation)",
                target: [
                    {
                        code: "ZustandnachFruehgeburtvorEndederSSW",
                        display: "(17) Zustand nach Frühgeburt (vor Ende der 37. SSW)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "726565008",
                display: "Past history of small for gestational age baby (situation)",
                target: [
                    {
                        code: "ZustandnachMangelgeburt",
                        display: "(18) Zustand nach Mangelgeburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "713651007",
                display: "History of pregnancy with abortive outcome (situation)",
                target: [
                    {
                        code: "ZustandnachodermehrFehlgeburtenAbbruechen",
                        display: "(19) Zustand nach 2 oder mehr Fehlgeburten/Abbrüchen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161743003",
                display: "History of stillbirth (situation)",
                target: [
                    {
                        code: "TotesgeschaedigtesKindinderAnamnese",
                        display: "(20) Totes/geschädigtes Kind in der Anamnese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}",
                display:
                    "History of clinical finding in subject (situation) : { Temporal context (attribute) = In the past (qualifier value), Finding context (attribute) = Known present (qualifier value),Associated finding (attribute) = Complication occurring during labor and delivery (disorder), Subject relationship context (attribute) = Subject of record (person)}",
                target: [
                    {
                        code: "KomplikationenbeivorausgegangenenEntbindungen",
                        display: "(21) Komplikationen bei vorausgegangenen Entbindungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}",
                display:
                    "History of clinical finding in subject (situation) : { Temporal context (attribute) = In the past (qualifier value), Finding context (attribute) = Known present (qualifier value), Associated finding (attribute) = Complication of the puerperium (disorder), Subject relationship context (attribute) = Subject of record (person)}",
                target: [
                    {
                        code: "Komplikationenpostpartum",
                        display: "(22) Komplikationen post partum",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "161805006",
                display: "History of cesarean section (situation)",
                target: [
                    {
                        code: "ZustandnachSectio",
                        display: "(23) Zustand nach Sectio",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "416940007:363589002=79876008",
                display:
                    "Past history of procedure : Associated procedure = Operation on uterus",
                target: [
                    {
                        code: "ZustandnachanderenUterusoperationen",
                        display: "(24) Zustand nach anderen Uterusoperationen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "60001007:263502005=424572001",
                display:
                    "Not pregnant (finding) : Clinical course (attribute) = Clinical course with short duration (qualifier value)",
                target: [
                    {
                        code: "RascheSchwangerschaftsfolgewenigeralsJahr",
                        display: "(25) Rasche Schwangerschaftsfolge (weniger als 1 Jahr)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418138009",
                display: "Patient condition finding (finding)",
                target: [
                    {
                        code: "AndereBesonderheiten",
                        display: "(26) Andere Besonderheiten",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRCatalogueAGerman;
