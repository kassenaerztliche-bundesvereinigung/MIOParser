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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/related-artifact-type

type Relatedartifacttype =
    | "documentation"
    | "justification"
    | "citation"
    | "predecessor"
    | "successor"
    | "derived-from"
    | "depends-on"
    | "composed-of";

const Relatedartifacttype: t.Type<Relatedartifacttype> = t.union(
    [
        t.literal("documentation"),
        t.literal("justification"),
        t.literal("citation"),
        t.literal("predecessor"),
        t.literal("successor"),
        t.literal("derived-from"),
        t.literal("depends-on"),
        t.literal("composed-of")
    ],
    "Relatedartifacttype"
);

export const RelatedartifacttypeArray: string[] = [
    "documentation",
    "justification",
    "citation",
    "predecessor",
    "successor",
    "derived-from",
    "depends-on",
    "composed-of"
];

export const RelatedartifacttypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/related-artifact-type",
        concept: []
    }
];

export default Relatedartifacttype;
