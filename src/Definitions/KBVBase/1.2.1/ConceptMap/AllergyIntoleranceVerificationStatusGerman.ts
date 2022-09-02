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

// Diese Conceptmap verknüpft die Codes für AllergyIntoleranceVerificationStatus mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const AllergyIntoleranceVerificationStatusGerman: ConceptMap = [
    {
        source: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_PS_Allergy_Intolerance_Verification_Status_German",
        element: [
            {
                code: "unconfirmed",
                display: "Unconfirmed",
                target: [
                    {
                        code: "Unbestaetigt",
                        display: "Unbestätigt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "confirmed",
                display: "Confirmed",
                target: [
                    {
                        code: "Bestaetigt",
                        display: "Bestätigt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "refuted",
                display: "Refuted",
                target: [
                    {
                        code: "Widerlegt",
                        display: "Widerlegt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "entered-in-error",
                display: "Entered in Error",
                target: [
                    {
                        code: "VersehentlichEingegeben",
                        display: "Versehentlich eingegeben",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default AllergyIntoleranceVerificationStatusGerman;
