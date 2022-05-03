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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Special_Findings_German
type MRSpecialFindingsGerman =
    | "BehandlungsbeduerftigeAllgemeinerkrankungen"
    | "Dauermedikation"
    | "Abusus"
    | "BesonderepsychischeBelastung"
    | "BesonderesozialeBelastung"
    | "BlutungenvorderSSW"
    | "BlutungennachderSSW"
    | "Placentapraevia"
    | "Mehrlingsschwangerschaft"
    | "Hydramnion"
    | "Oligohydramnie"
    | "Terminunklarheit"
    | "PlacentaInsuffizienz"
    | "IsthmozervikaleInsuffizienz"
    | "VorzeitigeWehentaetigkeit"
    | "Anaemie"
    | "Harnwegsinfekt"
    | "IndirekterCoombstestpositiv"
    | "RisikoausanderenserologischenBefunden"
    | "HypertonieBlutdruckueber"
    | "pathologischeEiweissausscheidung"
    | "MittelgradigeschwereOedeme"
    | "Hypotonie"
    | "Gestationsdiabetes"
    | "Einstellungsanomalie"
    | "AndereBesonderheiten";

const MRSpecialFindingsGerman: t.Type<MRSpecialFindingsGerman> = t.union([
    t.literal("BehandlungsbeduerftigeAllgemeinerkrankungen"),
    t.literal("Dauermedikation"),
    t.literal("Abusus"),
    t.literal("BesonderepsychischeBelastung"),
    t.literal("BesonderesozialeBelastung"),
    t.literal("BlutungenvorderSSW"),
    t.literal("BlutungennachderSSW"),
    t.literal("Placentapraevia"),
    t.literal("Mehrlingsschwangerschaft"),
    t.literal("Hydramnion"),
    t.literal("Oligohydramnie"),
    t.literal("Terminunklarheit"),
    t.literal("PlacentaInsuffizienz"),
    t.literal("IsthmozervikaleInsuffizienz"),
    t.literal("VorzeitigeWehentaetigkeit"),
    t.literal("Anaemie"),
    t.literal("Harnwegsinfekt"),
    t.literal("IndirekterCoombstestpositiv"),
    t.literal("RisikoausanderenserologischenBefunden"),
    t.literal("HypertonieBlutdruckueber"),
    t.literal("pathologischeEiweissausscheidung"),
    t.literal("MittelgradigeschwereOedeme"),
    t.literal("Hypotonie"),
    t.literal("Gestationsdiabetes"),
    t.literal("Einstellungsanomalie"),
    t.literal("AndereBesonderheiten")
]);

export const MRSpecialFindingsGermanArray: string[] = [
    "BehandlungsbeduerftigeAllgemeinerkrankungen",
    "Dauermedikation",
    "Abusus",
    "BesonderepsychischeBelastung",
    "BesonderesozialeBelastung",
    "BlutungenvorderSSW",
    "BlutungennachderSSW",
    "Placentapraevia",
    "Mehrlingsschwangerschaft",
    "Hydramnion",
    "Oligohydramnie",
    "Terminunklarheit",
    "PlacentaInsuffizienz",
    "IsthmozervikaleInsuffizienz",
    "VorzeitigeWehentaetigkeit",
    "Anaemie",
    "Harnwegsinfekt",
    "IndirekterCoombstestpositiv",
    "RisikoausanderenserologischenBefunden",
    "HypertonieBlutdruckueber",
    "pathologischeEiweissausscheidung",
    "MittelgradigeschwereOedeme",
    "Hypotonie",
    "Gestationsdiabetes",
    "Einstellungsanomalie",
    "AndereBesonderheiten"
];

export default MRSpecialFindingsGerman;
