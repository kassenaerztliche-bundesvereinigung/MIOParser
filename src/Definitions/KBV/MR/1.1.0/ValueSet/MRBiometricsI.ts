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
import MRBiometricsIGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRBiometricsIGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Biometrics_I

type MRBiometricsI = "1156895008" | "276352009" | "281688001";

type MRBiometricsIType = t.KeyofC<{
    "1156895008": null;
    "276352009": null;
    "281688001": null;
}>;

const MRBiometricsI: MRBiometricsIType = t.keyof({
    "1156895008": null,
    "276352009": null,
    "281688001": null
});
export const MRBiometricsIArray: string[] = ["1156895008", "276352009", "281688001"];

export const MRBiometricsIValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "1156895008",
                display: "Diameter of amniotic sac (observable entity)"
            },
            {
                code: "276352009",
                display: "Crown rump length (observable entity)"
            },
            {
                code: "281688001",
                display: "Biparietal diameter (observable entity)"
            }
        ]
    }
];

export { MRBiometricsIGerman as ConceptMap };

export default MRBiometricsI;
