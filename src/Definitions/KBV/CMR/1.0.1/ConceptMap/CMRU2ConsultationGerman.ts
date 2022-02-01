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

// Diese Conceptmap verknüpft die Codes für U2 - Beratung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2ConsultationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Consultation_German",
        element: [
            {
                code: "438650006",
                display: "Dietary education for breast feeding (procedure)",
                target: [
                    {
                        code: "StillenErnaehrung",
                        display: "Stillen/Ernährung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "408433001",
                display:
                    "Recommendation to carer regarding prevention of sudden infant death syndrome (procedure)",
                target: [
                    {
                        code: "ploetzlicherKindstod",
                        display: "plötzlicher Kindstod",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409066002:{363702006=444069008,363702006=426482000}",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of Vitamin D supplement (procedure) , Has focus (attribute) = Prevention of dental caries (procedure) }",
                target: [
                    {
                        code: "InformationzuRachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid",
                        display:
                            "Information zu Rachitisprophylaxe mittels Vitamin D und Kariesprophylaxe mittels Fluorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409066002:363702006=698350008",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of vitamin K1 via oral route (procedure)",
                target: [
                    {
                        code: "VitaminKProphylaxepruefenundwennnoetigdurchfuehren",
                        display: "Vitamin-K-Prophylaxe prüfen und wenn nötig durchführen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424673000",
                display:
                    "Community resources education, guidance and counseling (procedure)",
                target: [
                    {
                        code: "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen",
                        display:
                            "Informationen zu regionalen Unterstützungsangeboten (z.B. Eltern-Kind-Hilfen, Frühe Hilfen)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2ConsultationGerman;
