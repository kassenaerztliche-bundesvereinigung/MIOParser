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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Medication_Type

type MedicationType = "763158003" | "373873005:860781008=362943005";

type MedicationTypeType = t.KeyofC<{
    "763158003": null;
    "373873005:860781008=362943005": null;
}>;

const MedicationType: MedicationTypeType = t.keyof({
    "763158003": null,
    "373873005:860781008=362943005": null
});
export const MedicationTypeArray: string[] = [
    "763158003",
    "373873005:860781008=362943005"
];

export const MedicationTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "763158003",
                display: "Medicinal product (product)"
            },
            {
                code: "373873005:860781008=362943005",
                display:
                    "Pharmaceutical / biologic product (product) : Has product characteristic (attribute) = Manual method (qualifier value)"
            }
        ]
    }
];

export default MedicationType;
