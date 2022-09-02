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

// Diese Conceptmap verknüpft die Codes für Bevorzugte Sprachen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const ContactGerman: ConceptMap = [
    {
        source: "http://hl7.org/fhir/contact-point-system",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Contact_German",
        element: [
            {
                code: "phone",
                display: "Phone",
                target: [
                    {
                        code: "telefon",
                        display: "Telefon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "fax",
                display: "Fax",
                target: [
                    {
                        code: "fax",
                        display: "Fax",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "email",
                display: "Email",
                target: [
                    {
                        code: "email",
                        display: "E-Mail",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "pager",
                display: "Pager",
                target: [
                    {
                        code: "pager",
                        display: "Pager",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "url",
                display: "URL",
                target: [
                    {
                        code: "url",
                        display: "URL",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "sms",
                display: "SMS",
                target: [
                    {
                        code: "sms",
                        display: "SMS",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "other",
                display: "Other",
                target: [
                    {
                        code: "sonstiges",
                        display: "Sonstiges",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default ContactGerman;
