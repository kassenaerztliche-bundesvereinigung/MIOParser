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
import MRExaminationUnitGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRExaminationUnitGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Unit

type MRExaminationUnit = "{titer}" | "10*6/uL" | "g/dL" | "mmol/L" | "[iU]/mL";

type MRExaminationUnitType = t.KeyofC<{
    "{titer}": null;
    "10*6/uL": null;
    "g/dL": null;
    "mmol/L": null;
    "[iU]/mL": null;
}>;

const MRExaminationUnit: MRExaminationUnitType = t.keyof({
    "{titer}": null,
    "10*6/uL": null,
    "g/dL": null,
    "mmol/L": null,
    "[iU]/mL": null
});
export const MRExaminationUnitArray: string[] = [
    "{titer}",
    "10*6/uL",
    "g/dL",
    "mmol/L",
    "[iU]/mL"
];

export const MRExaminationUnitValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "{titer}",
                display: "titer"
            },
            {
                code: "10*6/uL",
                display: "MillionsPerMicroLiter [Number Concentration Units]"
            },
            {
                code: "g/dL",
                display: "GramsPerDeciLiter [Mass Concentration Units]"
            },
            {
                code: "mmol/L",
                display: "MilliMolesPerLiter [Most Common Healthcare Units]"
            },
            {
                code: "[iU]/mL",
                display: "InternationalUnitsPerMilliLiter [Arbitrary Concentration Units]"
            }
        ]
    }
];

export { MRExaminationUnitGerman as ConceptMap };

export default MRExaminationUnit;
