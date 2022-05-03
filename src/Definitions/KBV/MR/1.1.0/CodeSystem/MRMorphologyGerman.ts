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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Morphology_German
type MRMorphologyGerman =
    | "RumpfKonturunterbrechungandervorderenBauchwand"
    | "RumpfDarstellbarkeitdesMagensimlinkenOberbauch"
    | "RumpfDarstellbarkeitderHarnblase"
    | "ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose"
    | "ThoraxLinksseitigeHerzposition"
    | "ThoraxPersistierendeArrythmieimUntersuchungszeitraum"
    | "ThoraxDarstellbarkeitdesVierKammerBlicks"
    | "HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur"
    | "KopfVentrikelauffaelligkeiten"
    | "KopfAuffaelligkeitenderKopfform"
    | "KopfDarstellbarkeitdesKleinhirns";

const MRMorphologyGerman: t.Type<MRMorphologyGerman> = t.union([
    t.literal("RumpfKonturunterbrechungandervorderenBauchwand"),
    t.literal("RumpfDarstellbarkeitdesMagensimlinkenOberbauch"),
    t.literal("RumpfDarstellbarkeitderHarnblase"),
    t.literal("ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose"),
    t.literal("ThoraxLinksseitigeHerzposition"),
    t.literal("ThoraxPersistierendeArrythmieimUntersuchungszeitraum"),
    t.literal("ThoraxDarstellbarkeitdesVierKammerBlicks"),
    t.literal("HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur"),
    t.literal("KopfVentrikelauffaelligkeiten"),
    t.literal("KopfAuffaelligkeitenderKopfform"),
    t.literal("KopfDarstellbarkeitdesKleinhirns")
]);

export const MRMorphologyGermanArray: string[] = [
    "RumpfKonturunterbrechungandervorderenBauchwand",
    "RumpfDarstellbarkeitdesMagensimlinkenOberbauch",
    "RumpfDarstellbarkeitderHarnblase",
    "ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose",
    "ThoraxLinksseitigeHerzposition",
    "ThoraxPersistierendeArrythmieimUntersuchungszeitraum",
    "ThoraxDarstellbarkeitdesVierKammerBlicks",
    "HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur",
    "KopfVentrikelauffaelligkeiten",
    "KopfAuffaelligkeitenderKopfform",
    "KopfDarstellbarkeitdesKleinhirns"
];

export default MRMorphologyGerman;
