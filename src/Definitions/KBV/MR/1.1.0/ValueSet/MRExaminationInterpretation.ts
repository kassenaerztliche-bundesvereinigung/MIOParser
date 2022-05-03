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
import MRExaminationInterpretationGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRExaminationInterpretationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Interpretation

type MRExaminationInterpretation = "278968001" | "302764009";

const MRExaminationInterpretation: t.Type<MRExaminationInterpretation> = t.union(
    [t.literal("278968001"), t.literal("302764009")],
    "MRExaminationInterpretation"
);

export const MRExaminationInterpretationArray: string[] = ["278968001", "302764009"];

export const MRExaminationInterpretationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "278968001",
                display: "Rubella immune (finding)"
            },
            {
                code: "302764009",
                display: "Rubella non-immune (finding)"
            }
        ]
    }
];

export { MRExaminationInterpretationGerman as ConceptMap };

export default MRExaminationInterpretation;
