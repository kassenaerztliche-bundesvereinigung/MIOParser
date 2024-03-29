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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Prior_Disease_ICD

type VaccinationPriorDiseaseICD =
    | "B26.-"
    | "B05.-"
    | "B01.-"
    | "B06.-"
    | "B15.-"
    | "B16.-"
    | "B18.0"
    | "B18.1-"
    | "A84.1"
    | "A95.-"
    | "A37.-";

type VaccinationPriorDiseaseICDType = t.KeyofC<{
    "B26.-": null;
    "B05.-": null;
    "B01.-": null;
    "B06.-": null;
    "B15.-": null;
    "B16.-": null;
    "B18.0": null;
    "B18.1-": null;
    "A84.1": null;
    "A95.-": null;
    "A37.-": null;
}>;

const VaccinationPriorDiseaseICD: VaccinationPriorDiseaseICDType = t.keyof({
    "B26.-": null,
    "B05.-": null,
    "B01.-": null,
    "B06.-": null,
    "B15.-": null,
    "B16.-": null,
    "B18.0": null,
    "B18.1-": null,
    "A84.1": null,
    "A95.-": null,
    "A37.-": null
});
export const VaccinationPriorDiseaseICDArray: string[] = [
    "B26.-",
    "B05.-",
    "B01.-",
    "B06.-",
    "B15.-",
    "B16.-",
    "B18.0",
    "B18.1-",
    "A84.1",
    "A95.-",
    "A37.-"
];

export const VaccinationPriorDiseaseICDValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm",
        concept: [
            {
                code: "B26.-",
                display: "Mumps"
            },
            {
                code: "B05.-",
                display: "Masern"
            },
            {
                code: "B01.-",
                display: "Varizellen [Windpocken]"
            },
            {
                code: "B06.-",
                display: "Röteln [Rubeola] [Rubella]"
            },
            {
                code: "B15.-",
                display: "Akute Virushepatitis A"
            },
            {
                code: "B16.-",
                display: "Akute Virushepatitis B"
            },
            {
                code: "B18.0",
                display: "Chronische Virushepatitis B mit Delta-Virus"
            },
            {
                code: "B18.1-",
                display: "Chronische Virushepatitis B ohne Delta-Virus"
            },
            {
                code: "A84.1",
                display: "Mitteleuropäische Enzephalitis, durch Zecken übertragen"
            },
            {
                code: "A95.-",
                display: "Gelbfieber"
            },
            {
                code: "A37.-",
                display: "Keuchhusten"
            }
        ]
    }
];

export default VaccinationPriorDiseaseICD;
