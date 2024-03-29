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
import MRLocalisationPlacentaGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRLocalisationPlacentaGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Localisation_Placenta

type MRLocalisationPlacenta = "169954003" | "129125009:408730004=410525008";

type MRLocalisationPlacentaType = t.KeyofC<{
    "169954003": null;
    "129125009:408730004=410525008": null;
}>;

const MRLocalisationPlacenta: MRLocalisationPlacentaType = t.keyof({
    "169954003": null,
    "129125009:408730004=410525008": null
});
export const MRLocalisationPlacentaArray: string[] = [
    "169954003",
    "129125009:408730004=410525008"
];

export const MRLocalisationPlacentaValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169954003",
                display: "Placenta normal O/E (finding)"
            },
            {
                code: "129125009:408730004=410525008",
                display:
                    "Procedure with explicit context (situation) : Procedure context (attribute) = Needed (qualifier value)"
            }
        ]
    }
];

export { MRLocalisationPlacentaGerman as ConceptMap };

export default MRLocalisationPlacenta;
