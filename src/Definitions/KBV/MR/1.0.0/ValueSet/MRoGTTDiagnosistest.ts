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
import MRoGTTDiagnosistestGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRoGTTDiagnosistestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_oGTT_Diagnosistest

type MRoGTTDiagnosistest = "372048000" | "166926006";

type MRoGTTDiagnosistestType = t.KeyofC<{ "372048000": null; "166926006": null }>;

const MRoGTTDiagnosistest: MRoGTTDiagnosistestType = t.keyof({
    "372048000": null,
    "166926006": null
});
export const MRoGTTDiagnosistestArray: string[] = ["372048000", "166926006"];

export const MRoGTTDiagnosistestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "372048000",
                display: "Pregnancy with abnormal glucose tolerance test (finding)"
            },
            {
                code: "166926006",
                display: "Glucose tolerance test normal (finding)"
            }
        ]
    }
];

export { MRoGTTDiagnosistestGerman as ConceptMap };

export default MRoGTTDiagnosistest;
