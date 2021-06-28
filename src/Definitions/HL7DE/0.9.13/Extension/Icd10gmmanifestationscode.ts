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
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodingICD10GM from "../../../../Definitions/HL7DE/0.9.13/Profile/CodingICD10GM";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode"

interface Icd10gmmanifestationscode {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode";
    valueCoding: CodingICD10GM;
    id?: string;
}

const Icd10gmmanifestationscode: t.Type<Icd10gmmanifestationscode> = t.recursion(
    "Icd10gmmanifestationscode",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode"
                ),
                valueCoding: CodingICD10GM
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Icd10gmmanifestationscode;
