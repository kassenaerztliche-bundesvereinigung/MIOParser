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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason

type Dataabsentreason =
    | "unknown"
    | "asked-unknown"
    | "temp-unknown"
    | "not-asked"
    | "asked-declined"
    | "masked"
    | "not-applicable"
    | "unsupported"
    | "as-text"
    | "error"
    | "not-a-number"
    | "negative-infinity"
    | "positive-infinity"
    | "not-performed"
    | "not-permitted";

type DataabsentreasonType = t.KeyofC<{
    unknown: null;
    "asked-unknown": null;
    "temp-unknown": null;
    "not-asked": null;
    "asked-declined": null;
    masked: null;
    "not-applicable": null;
    unsupported: null;
    "as-text": null;
    error: null;
    "not-a-number": null;
    "negative-infinity": null;
    "positive-infinity": null;
    "not-performed": null;
    "not-permitted": null;
}>;

const Dataabsentreason: DataabsentreasonType = t.keyof({
    unknown: null,
    "asked-unknown": null,
    "temp-unknown": null,
    "not-asked": null,
    "asked-declined": null,
    masked: null,
    "not-applicable": null,
    unsupported: null,
    "as-text": null,
    error: null,
    "not-a-number": null,
    "negative-infinity": null,
    "positive-infinity": null,
    "not-performed": null,
    "not-permitted": null
});
export const DataabsentreasonArray: string[] = [
    "unknown",
    "asked-unknown",
    "temp-unknown",
    "not-asked",
    "asked-declined",
    "masked",
    "not-applicable",
    "unsupported",
    "as-text",
    "error",
    "not-a-number",
    "negative-infinity",
    "positive-infinity",
    "not-performed",
    "not-permitted"
];

export const DataabsentreasonValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        concept: [
            {
                code: "unknown",
                display: "Unknown"
            },
            {
                code: "asked-unknown",
                display: "Asked But Unknown"
            },
            {
                code: "temp-unknown",
                display: "Temporarily Unknown"
            },
            {
                code: "not-asked",
                display: "Not Asked"
            },
            {
                code: "asked-declined",
                display: "Asked But Declined"
            },
            {
                code: "masked",
                display: "Masked"
            },
            {
                code: "not-applicable",
                display: "Not Applicable"
            },
            {
                code: "unsupported",
                display: "Unsupported"
            },
            {
                code: "as-text",
                display: "As Text"
            },
            {
                code: "error",
                display: "Error"
            },
            {
                code: "not-a-number",
                display: "Not a Number (NaN)"
            },
            {
                code: "negative-infinity",
                display: "Negative Infinity (NINF)"
            },
            {
                code: "positive-infinity",
                display: "Positive Infinity (PINF)"
            },
            {
                code: "not-performed",
                display: "Not Performed"
            },
            {
                code: "not-permitted",
                display: "Not Permitted"
            }
        ]
    }
];

export default Dataabsentreason;
