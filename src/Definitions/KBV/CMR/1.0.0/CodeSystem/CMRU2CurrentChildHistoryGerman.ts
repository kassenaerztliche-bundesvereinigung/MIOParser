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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Current_Child_History_German
type CMRU2CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen"
    | "SchwierigkeitenbeimTrinkenSchluckstoerungen"
    | "StuhlfarbemitFarbtafelerfragen"
    | "auffaelligesSchreien"
    | "RisikofaktorenfuerHueftdysplasie";

const CMRU2CurrentChildHistoryGerman: t.Type<CMRU2CurrentChildHistoryGerman> = t.union([
    t.literal("schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen"),
    t.literal("SchwierigkeitenbeimTrinkenSchluckstoerungen"),
    t.literal("StuhlfarbemitFarbtafelerfragen"),
    t.literal("auffaelligesSchreien"),
    t.literal("RisikofaktorenfuerHueftdysplasie")
]);

export const CMRU2CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen",
    "SchwierigkeitenbeimTrinkenSchluckstoerungen",
    "StuhlfarbemitFarbtafelerfragen",
    "auffaelligesSchreien",
    "RisikofaktorenfuerHueftdysplasie"
];

export default CMRU2CurrentChildHistoryGerman;