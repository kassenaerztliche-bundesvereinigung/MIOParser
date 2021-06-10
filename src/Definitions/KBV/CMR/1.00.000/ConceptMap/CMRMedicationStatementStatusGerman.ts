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

// Diese Conceptmap verknüpft die Codes für Vitamin-K-Prophylaxe Status mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRMedicationStatementStatusGerman: ConceptMap = [
    {
        source: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Medication_Statement_Status_German",
        element: [
            {
                code: "completed",
                display: "Completed",
                target: [
                    {
                        code: "verabreicht",
                        display: "verabreicht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "not-taken",
                display: "Not-Taken",
                target: [
                    {
                        code: "nichtverabreicht",
                        display: "nicht verabreicht",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRMedicationStatementStatusGerman;
