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

// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Body_Temp_Snomed_German
// undefined

// Diese Conceptmap verknüpft die Codes des Körpergewichts mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const BodyTempSnomedGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CM_Base_Body_Temp_Snomed_German",
        element: [
            {
                code: "386725007",
                display: "Body temperature (observable entity)",
                target: [
                    {
                        code: "Koerpertemperatur",
                        display: "Körpertemperatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "300076005",
                display: "Basal body temperature (observable entity)",
                target: [
                    {
                        code: "BasaleKoerpertemperatur",
                        display: "Basale Körpertemperatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "276885007",
                display: "Core body temperature (observable entity)",
                target: [
                    {
                        code: "Koerperkerntemperatur",
                        display: "Körperkerntemperatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "708499008",
                display: "Core body temperature of neonate at birth (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturDesNeugeborenenBeiDerGeburt",
                        display: "Körperkerntemperatur des Neugeborenen bei der Geburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698832009",
                display:
                    "Core body temperature measured at urinary bladder (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturGemessenInDerHarnblase",
                        display: "Körperkerntemperatur gemessen in der Harnblase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698831002",
                display:
                    "Core body temperature measured in nasopharynx (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturGemessenImNasopharynx",
                        display: "Körperkerntemperatur gemessen im Nasopharynx",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "431598003",
                display:
                    "Core body temperature measured in esophagus (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturGemessenInDerSpeiseröhre",
                        display: "Körperkerntemperatur gemessen in der Speiseröhre",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415974002",
                display:
                    "Core body temperature measured at tympanic membrane (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturGemessenAmTrommelfell",
                        display: "Körperkerntemperatur gemessen am Trommelfell",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415945006",
                display:
                    "Core body temperature measured in sublingual space (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturSublingualGemessen",
                        display: "Körperkerntemperatur Sublingual gemessen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "364246006",
                display: "Core body temperature measured vaginally (observable entity)",
                target: [
                    {
                        code: "KoerperkerntemperaturVaginalGemessen",
                        display: "Körperkerntemperatur vaginal gemessen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307047009",
                display: "Core body temperature measured in rectum (observable entity)",
                target: [
                    {
                        code: "KörperkerntemperaturGemessenImRektum",
                        display: "Körperkerntemperatur gemessen im Rektum",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "860958002",
                display: "Temperature of blood (observable entity)",
                target: [
                    {
                        code: "TemperaturDesBlutes",
                        display: "Temperatur des Blutes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415922000",
                display: "Temperature of forehead (observable entity)",
                target: [
                    {
                        code: "TemperaturDerStirn",
                        display: "Temperatur der Stirn",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default BodyTempSnomedGerman;
