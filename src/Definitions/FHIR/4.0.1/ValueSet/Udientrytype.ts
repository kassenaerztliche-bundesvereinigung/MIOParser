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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/udi-entry-type

type Udientrytype = "barcode" | "rfid" | "manual" | "card" | "self-reported" | "unknown";

type UdientrytypeType = t.KeyofC<{
    barcode: null;
    rfid: null;
    manual: null;
    card: null;
    "self-reported": null;
    unknown: null;
}>;

const Udientrytype: UdientrytypeType = t.keyof({
    barcode: null,
    rfid: null,
    manual: null,
    card: null,
    "self-reported": null,
    unknown: null
});
export const UdientrytypeArray: string[] = [
    "barcode",
    "rfid",
    "manual",
    "card",
    "self-reported",
    "unknown"
];

export const UdientrytypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/udi-entry-type",
        concept: [
            {
                code: "barcode",
                display: "Barcode"
            },
            {
                code: "rfid",
                display: "RFID"
            },
            {
                code: "manual",
                display: "Manual"
            },
            {
                code: "card",
                display: "Card"
            },
            {
                code: "self-reported",
                display: "Self Reported"
            },
            {
                code: "unknown",
                display: "Unknown"
            }
        ]
    }
];

export default Udientrytype;
