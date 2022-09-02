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
import MRFindingsRequiredControlGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRFindingsRequiredControlGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Findings_Required_Control

type MRFindingsRequiredControl = "107651007:47429007=168083008" | "714656007";

type MRFindingsRequiredControlType = t.KeyofC<{
    "107651007:47429007=168083008": null;
    "714656007": null;
}>;

const MRFindingsRequiredControl: MRFindingsRequiredControlType = t.keyof({
    "107651007:47429007=168083008": null,
    "714656007": null
});
export const MRFindingsRequiredControlArray: string[] = [
    "107651007:47429007=168083008",
    "714656007"
];

export const MRFindingsRequiredControlValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "107651007:47429007=168083008",
                display:
                    "Quantity finding (finding) : Associated with (attribute) = Amniotic fluid examination (procedure)"
            },
            {
                code: "714656007",
                display: "Impaired fetal development (finding)"
            }
        ]
    }
];

export { MRFindingsRequiredControlGerman as ConceptMap };

export default MRFindingsRequiredControl;
