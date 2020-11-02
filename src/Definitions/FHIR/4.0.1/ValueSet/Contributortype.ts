/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contributor-type

type Contributortype = "author" | "editor" | "reviewer" | "endorser";

const Contributortype: t.Type<Contributortype> = t.union(
    [
        t.literal("author"),
        t.literal("editor"),
        t.literal("reviewer"),
        t.literal("endorser")
    ],
    "Contributortype"
);

export const ContributortypeArray: string[] = [
    "author",
    "editor",
    "reviewer",
    "endorser"
];

export const ContributortypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/contributor-type",
        concept: []
    }
];

export default Contributortype;