/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "http://fhir.de/StructureDefinition/CodingICD10GM"

interface CodingICD10GM {
    system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm";
    version: string;
    code: string;
    resourceType?: "Coding";
    id?: string;
    display?: string;
    userSelected?: boolean;
}

const CodingICD10GM: t.Type<CodingICD10GM> = t.recursion("CodingICD10GM", () =>
    t.intersection([
        t.type({
            system: Literal("http://fhir.de/CodeSystem/dimdi/icd-10-gm"),
            version: SCALARString,
            code: SCALARCode
        }),
        t.partial({
            resourceType: Literal("Coding"),
            id: SCALARString,
            display: SCALARString,
            userSelected: SCALARBoolean
        })
    ])
);

export default CodingICD10GM;
