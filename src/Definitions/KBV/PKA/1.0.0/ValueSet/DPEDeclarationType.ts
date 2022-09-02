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
import DPEDeclarationTypeGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/DPEDeclarationTypeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_DPE_Declaration_Type

type DPEDeclarationType = "772790007" | "186065003" | "371538006";

type DPEDeclarationTypeType = t.KeyofC<{
    "772790007": null;
    "186065003": null;
    "371538006": null;
}>;

const DPEDeclarationType: DPEDeclarationTypeType = t.keyof({
    "772790007": null,
    "186065003": null,
    "371538006": null
});
export const DPEDeclarationTypeArray: string[] = ["772790007", "186065003", "371538006"];

export const DPEDeclarationTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "772790007",
                display: "Organ donor card (record artifact)"
            },
            {
                code: "186065003",
                display: "Power of attorney medical report (record artifact)"
            },
            {
                code: "371538006",
                display: "Advance directive report (record artifact)"
            }
        ]
    }
];

export { DPEDeclarationTypeGerman as ConceptMap };

export default DPEDeclarationType;
