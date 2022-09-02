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
import { Literal, ValueSetCheck } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import KBVVSSFHIRICDDIAGNOSESICHERHEITVS from "../../../../Definitions/HL7DE/0.9.11/ValueSet/KBVVSSFHIRICDDIAGNOSESICHERHEIT";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit"

interface Icd10gmdiagnosesicherheit {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit";
    valueCoding: {
        system?: string;
        version?: string;
        code?: KBVVSSFHIRICDDIAGNOSESICHERHEITVS;
        display?: string;
        userSelected?: boolean;
    }[];
    id?: string;
}

const Icd10gmdiagnosesicherheit: t.Type<Icd10gmdiagnosesicherheit> = t.recursion(
    "Icd10gmdiagnosesicherheit",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit"
                ),
                valueCoding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: ValueSetCheck<t.Type<KBVVSSFHIRICDDIAGNOSESICHERHEITVS>>(
                            KBVVSSFHIRICDDIAGNOSESICHERHEITVS
                        ),
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Icd10gmdiagnosesicherheit;
