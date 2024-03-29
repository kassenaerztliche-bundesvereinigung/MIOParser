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

import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contact-point-system

type Contactpointsystem = "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other";

type ContactpointsystemType = t.KeyofC<{
    phone: null;
    fax: null;
    email: null;
    pager: null;
    url: null;
    sms: null;
    other: null;
}>;

const Contactpointsystem: ContactpointsystemType = t.keyof({
    phone: null,
    fax: null,
    email: null,
    pager: null,
    url: null,
    sms: null,
    other: null
});
export const ContactpointsystemArray: string[] = [
    "phone",
    "fax",
    "email",
    "pager",
    "url",
    "sms",
    "other"
];

export const ContactpointsystemValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/contact-point-system",
        concept: [
            {
                code: "phone",
                display: "Phone"
            },
            {
                code: "fax",
                display: "Fax"
            },
            {
                code: "email",
                display: "Email"
            },
            {
                code: "pager",
                display: "Pager"
            },
            {
                code: "url",
                display: "URL"
            },
            {
                code: "sms",
                display: "SMS"
            },
            {
                code: "other",
                display: "Other"
            }
        ]
    }
];

export default Contactpointsystem;
