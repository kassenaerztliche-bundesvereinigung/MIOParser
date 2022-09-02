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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/device-nametype

type Devicenametype =
    | "udi-label-name"
    | "user-friendly-name"
    | "patient-reported-name"
    | "manufacturer-name"
    | "model-name"
    | "other";

type DevicenametypeType = t.KeyofC<{
    "udi-label-name": null;
    "user-friendly-name": null;
    "patient-reported-name": null;
    "manufacturer-name": null;
    "model-name": null;
    other: null;
}>;

const Devicenametype: DevicenametypeType = t.keyof({
    "udi-label-name": null,
    "user-friendly-name": null,
    "patient-reported-name": null,
    "manufacturer-name": null,
    "model-name": null,
    other: null
});
export const DevicenametypeArray: string[] = [
    "udi-label-name",
    "user-friendly-name",
    "patient-reported-name",
    "manufacturer-name",
    "model-name",
    "other"
];

export const DevicenametypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/device-nametype",
        concept: [
            {
                code: "udi-label-name",
                display: "UDI Label name"
            },
            {
                code: "user-friendly-name",
                display: "User Friendly name"
            },
            {
                code: "patient-reported-name",
                display: "Patient Reported name"
            },
            {
                code: "manufacturer-name",
                display: "Manufacturer name"
            },
            {
                code: "model-name",
                display: "Model name"
            },
            {
                code: "other",
                display: "other"
            }
        ]
    }
];

export default Devicenametype;
