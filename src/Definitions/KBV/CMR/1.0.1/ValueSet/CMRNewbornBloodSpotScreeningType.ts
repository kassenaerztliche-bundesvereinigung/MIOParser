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
import CMRNewbornBloodSpotScreeningTypeGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRNewbornBloodSpotScreeningTypeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Newborn_Blood_Spot_Screening_Type

type CMRNewbornBloodSpotScreeningType =
    | "425758004:246513007=261422002"
    | "425758004:246513007=261426004"
    | "425758004:246513007=261429006";

type CMRNewbornBloodSpotScreeningTypeType = t.KeyofC<{
    "425758004:246513007=261422002": null;
    "425758004:246513007=261426004": null;
    "425758004:246513007=261429006": null;
}>;

const CMRNewbornBloodSpotScreeningType: CMRNewbornBloodSpotScreeningTypeType = t.keyof({
    "425758004:246513007=261422002": null,
    "425758004:246513007=261426004": null,
    "425758004:246513007=261429006": null
});
export const CMRNewbornBloodSpotScreeningTypeArray: string[] = [
    "425758004:246513007=261422002",
    "425758004:246513007=261426004",
    "425758004:246513007=261429006"
];

export const CMRNewbornBloodSpotScreeningTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "425758004:246513007=261422002",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)"
            },
            {
                code: "425758004:246513007=261426004",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)"
            },
            {
                code: "425758004:246513007=261429006",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Third stage of multistaged procedure (qualifier value)"
            }
        ]
    }
];

export { CMRNewbornBloodSpotScreeningTypeGerman as ConceptMap };

export default CMRNewbornBloodSpotScreeningType;
