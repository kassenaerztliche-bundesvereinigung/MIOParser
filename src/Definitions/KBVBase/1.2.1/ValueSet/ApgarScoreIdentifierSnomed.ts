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
import { ValueSet } from "../../../Interfaces";
import ApgarScoreIdentifierSnomedGerman from "../../../../Definitions/KBVBase/1.2.1/ConceptMap/ApgarScoreIdentifierGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Apgar_Score_Identifier_Snomed

type ApgarScoreIdentifierSnomed = "169922007" | "169909004";

type ApgarScoreIdentifierSnomedType = t.KeyofC<{ "169922007": null; "169909004": null }>;

const ApgarScoreIdentifierSnomed: ApgarScoreIdentifierSnomedType = t.keyof({
    "169922007": null,
    "169909004": null
});
export const ApgarScoreIdentifierSnomedArray: string[] = ["169922007", "169909004"];

export const ApgarScoreIdentifierSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169922007",
                display: "Apgar score at 10 minutes (observable entity)"
            },
            {
                code: "169909004",
                display: "Apgar score at 5 minutes (observable entity)"
            }
        ]
    }
];

export { ApgarScoreIdentifierSnomedGerman as ConceptMap };

export default ApgarScoreIdentifierSnomed;
