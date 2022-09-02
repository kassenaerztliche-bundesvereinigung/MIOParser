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
import { Literal } from "../../../CustomTypes";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_AllergyIntolerance_Abatement"

interface AllergyIntoleranceAbatement {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_AllergyIntolerance_Abatement";
    id?: string;
    valueDateTime?: string;
}

const AllergyIntoleranceAbatement: t.Type<AllergyIntoleranceAbatement> = t.recursion(
    "AllergyIntoleranceAbatement",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_AllergyIntolerance_Abatement"
                )
            }),
            t.partial({
                id: SCALARString,
                valueDateTime: SCALARDateTime
            })
        ])
);

export default AllergyIntoleranceAbatement;
