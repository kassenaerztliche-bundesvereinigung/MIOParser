/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Diese Conceptmap verknüpft die Codes für die Nachweise der prophylaktischen Impfungen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const MRImmunizationStatusGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Immunization_Status_German",
        element: [
            {
                code:
                    "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}",
                display:
                    "History of vaccination (situation) : { Associated procedure (attribute) = Administration of second dose of vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (procedure) , Procedure context (attribute) = Done (qualifier value) , Temporal context (attribute) = In the past (qualifier value) , Subject relationship context (attribute) = Subject of record (person) }",
                target: [
                    {
                        code: "NachweisRoetelnImpfung",
                        display: "Nachweis Röteln-Impfung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73701000119109",
                display: "Influenza vaccination given (situation)",
                target: [
                    {
                        code: "InfluenzaImpfung",
                        display: "Influenza-Impfung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRImmunizationStatusGerman;
