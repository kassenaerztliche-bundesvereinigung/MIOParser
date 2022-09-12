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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contactentity-type

type Contactentitytype = "BILL" | "ADMIN" | "HR" | "PAYOR" | "PATINF" | "PRESS";

type ContactentitytypeType = t.KeyofC<{
    BILL: null;
    ADMIN: null;
    HR: null;
    PAYOR: null;
    PATINF: null;
    PRESS: null;
}>;

const Contactentitytype: ContactentitytypeType = t.keyof({
    BILL: null,
    ADMIN: null,
    HR: null,
    PAYOR: null,
    PATINF: null,
    PRESS: null
});
export const ContactentitytypeArray: string[] = [
    "BILL",
    "ADMIN",
    "HR",
    "PAYOR",
    "PATINF",
    "PRESS"
];

export const ContactentitytypeValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
        concept: [
            {
                code: "BILL",
                display: "Billing"
            },
            {
                code: "ADMIN",
                display: "Administrative"
            },
            {
                code: "HR",
                display: "Human Resource"
            },
            {
                code: "PAYOR",
                display: "Payor"
            },
            {
                code: "PATINF",
                display: "Patient"
            },
            {
                code: "PRESS",
                display: "Press"
            }
        ]
    }
];

export default Contactentitytype;
