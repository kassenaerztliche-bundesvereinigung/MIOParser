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
import NFDDosagePointOfTimeGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDDosagePointOfTimeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_Dosage_Point_Of_Time

type NFDDosagePointOfTime = "MORN" | "NOON" | "EVE" | "NIGHT";

type NFDDosagePointOfTimeType = t.KeyofC<{
    MORN: null;
    NOON: null;
    EVE: null;
    NIGHT: null;
}>;

const NFDDosagePointOfTime: NFDDosagePointOfTimeType = t.keyof({
    MORN: null,
    NOON: null,
    EVE: null,
    NIGHT: null
});
export const NFDDosagePointOfTimeArray: string[] = ["MORN", "NOON", "EVE", "NIGHT"];

export const NFDDosagePointOfTimeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/event-timing",
        concept: [
            {
                code: "MORN",
                display: "Morning"
            },
            {
                code: "NOON",
                display: "Noon"
            },
            {
                code: "EVE",
                display: "Evening"
            },
            {
                code: "NIGHT",
                display: "Night"
            }
        ]
    }
];

export { NFDDosagePointOfTimeGerman as ConceptMap };

export default NFDDosagePointOfTime;
