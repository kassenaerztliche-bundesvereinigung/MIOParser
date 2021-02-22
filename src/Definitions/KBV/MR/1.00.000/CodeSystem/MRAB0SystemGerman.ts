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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_AB0_System_German
type MRAB0SystemGerman = "A" | "B" | "AB" | "0" | "hBombay";

const MRAB0SystemGerman: t.Type<MRAB0SystemGerman> = t.union([
    t.literal("A"),
    t.literal("B"),
    t.literal("AB"),
    t.literal("0"),
    t.literal("hBombay")
]);

export const MRAB0SystemGermanArray: string[] = ["A", "B", "AB", "0", "hBombay"];

export default MRAB0SystemGerman;
