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
import ApgarScoreIdentifierLoincGerman from "../../../../Definitions/KBVBase/1.1.1/ConceptMap/ApgarScoreIdentifierGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Apgar_Score_Identifier_Loinc

type ApgarScoreIdentifierLoinc = "9274-2" | "9271-8";

const ApgarScoreIdentifierLoinc: t.Type<ApgarScoreIdentifierLoinc> = t.union(
    [t.literal("9274-2"), t.literal("9271-8")],
    "ApgarScoreIdentifierLoinc"
);

export const ApgarScoreIdentifierLoincArray: string[] = ["9274-2", "9271-8"];

export const ApgarScoreIdentifierLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "9274-2",
                display: "5 minute Apgar Score"
            },
            {
                code: "9271-8",
                display: "10 minute Apgar Score"
            }
        ]
    }
];

export { ApgarScoreIdentifierLoincGerman as ConceptMap };

export default ApgarScoreIdentifierLoinc;
