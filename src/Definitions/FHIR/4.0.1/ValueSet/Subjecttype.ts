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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/subject-type

type Subjecttype = "Patient" | "Practitioner" | "Organization" | "Location" | "Device";

type SubjecttypeType = t.KeyofC<{
    Patient: null;
    Practitioner: null;
    Organization: null;
    Location: null;
    Device: null;
}>;

const Subjecttype: SubjecttypeType = t.keyof({
    Patient: null,
    Practitioner: null,
    Organization: null,
    Location: null,
    Device: null
});
export const SubjecttypeArray: string[] = [
    "Patient",
    "Practitioner",
    "Organization",
    "Location",
    "Device"
];

export const SubjecttypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            {
                code: "Patient",
                display: ""
            },
            {
                code: "Practitioner",
                display: ""
            },
            {
                code: "Organization",
                display: ""
            },
            {
                code: "Location",
                display: ""
            },
            {
                code: "Device",
                display: ""
            }
        ]
    }
];

export default Subjecttype;
