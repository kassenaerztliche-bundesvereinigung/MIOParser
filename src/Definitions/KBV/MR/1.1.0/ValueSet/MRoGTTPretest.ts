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
import { ValueSet } from "../../../../Interfaces";
import MRoGTTPretestGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRoGTTPretestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_oGTT_Pretest

type MRoGTTPretest =
    | "404684003:{363714003=442260000,363713009=394844007}"
    | "404684003:{363714003=442260000,363713009=281301001}";

type MRoGTTPretestType = t.KeyofC<{
    "404684003:{363714003=442260000,363713009=394844007}": null;
    "404684003:{363714003=442260000,363713009=281301001}": null;
}>;

const MRoGTTPretest: MRoGTTPretestType = t.keyof({
    "404684003:{363714003=442260000,363713009=394844007}": null,
    "404684003:{363714003=442260000,363713009=281301001}": null
});
export const MRoGTTPretestArray: string[] = [
    "404684003:{363714003=442260000,363713009=394844007}",
    "404684003:{363714003=442260000,363713009=281301001}"
];

export const MRoGTTPretestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "404684003:{363714003=442260000,363713009=394844007}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Outside reference range (qualifier value)}"
            },
            {
                code: "404684003:{363714003=442260000,363713009=281301001}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Within reference range (qualifier value)}"
            }
        ]
    }
];

export { MRoGTTPretestGerman as ConceptMap };

export default MRoGTTPretest;
