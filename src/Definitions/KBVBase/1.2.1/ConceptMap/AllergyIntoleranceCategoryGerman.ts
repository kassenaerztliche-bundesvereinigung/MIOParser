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

// Diese Conceptmap verknüpft die Codes für Allergy Intolerance Category mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const AllergyIntoleranceCategoryGerman: ConceptMap = [
    {
        source: "http://hl7.org/fhir/allergy-intolerance-category",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CM_Base_Allergy_Intolerance_Category_German",
        element: [
            {
                code: "food",
                display: "Food",
                target: [
                    {
                        code: "Lebensmittel",
                        display: "Lebensmittel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "medication",
                display: "Medication",
                target: [
                    {
                        code: "Medikation",
                        display: "Medikation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "environment",
                display: "Environment",
                target: [
                    {
                        code: "UmweltChemikalie",
                        display: "Umwelt/Chemikalie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "biologic",
                display: "Biologic",
                target: [
                    {
                        code: "BiologischsynthetisierteSubstanz",
                        display: "Biologisch synthetisierte Substanz",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default AllergyIntoleranceCategoryGerman;
