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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hip_Proceeding

type CMRHipProceeding =
    | "440378000:704321009=241502008"
    | "306228005"
    | "243796009:{363589002=112731004,408731000=410511007,408730004=410535002,408732007=410604004}";

const CMRHipProceeding: t.Type<CMRHipProceeding> = t.union(
    [
        t.literal("440378000:704321009=241502008"),
        t.literal("306228005"),
        t.literal(
            "243796009:{363589002=112731004,408731000=410511007,408730004=410535002,408732007=410604004}"
        )
    ],
    "CMRHipProceeding"
);

export const CMRHipProceedingArray: string[] = [
    "440378000:704321009=241502008",
    "306228005",
    "243796009:{363589002=112731004,408731000=410511007,408730004=410535002,408732007=410604004}"
];

export const CMRHipProceedingValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "440378000:704321009=241502008",
                display:
                    "Referral for (observable entity) : Characterizes (attribute) = Ultrasound scan of hip (procedure)"
            },
            {
                code: "306228005",
                display: "Referral for diagnostic investigation (procedure)"
            },
            {
                code:
                    "243796009:{363589002=112731004,408731000=410511007,408730004=410535002,408732007=410604004}",
                display:
                    "Situation with explicit context (situation) : { Associated procedure (attribute) = Reduction of congenital hip dislocation by splint (procedure), Temporal context (attribute) = Current or past (actual) (qualifier value), Procedure context (attribute) = Indicated (qualifier value), Subject relationship context (attribute) = Subject of record (person) }"
            }
        ]
    }
];

export default CMRHipProceeding;
