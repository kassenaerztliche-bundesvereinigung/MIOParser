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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/condition-category

type Conditioncategory = "problem-list-item" | "encounter-diagnosis";

const Conditioncategory: t.Type<Conditioncategory> = t.union(
    [t.literal("problem-list-item"), t.literal("encounter-diagnosis")],
    "Conditioncategory"
);

export const ConditioncategoryArray: string[] = [
    "problem-list-item",
    "encounter-diagnosis"
];

export const ConditioncategoryValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
        concept: [
            { code: "problem-list-item", display: "Problem List Item" },
            { code: "encounter-diagnosis", display: "Encounter Diagnosis" }
        ]
    }
];

export default Conditioncategory;
