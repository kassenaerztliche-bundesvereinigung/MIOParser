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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Consultation_German
type CMRU7aConsultationGerman =
    | "Unfallverhuetung"
    | "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    | "Ernaehrung"
    | "Bewegung"
    | "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"
    | "InformationueberzahnaerztlicheVorsorgeab30Monaten"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung";

const CMRU7aConsultationGerman: t.Type<CMRU7aConsultationGerman> = t.union([
    t.literal("Unfallverhuetung"),
    t.literal(
        "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal("Ernaehrung"),
    t.literal("Bewegung"),
    t.literal("MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"),
    t.literal("InformationueberzahnaerztlicheVorsorgeab30Monaten"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal(
        "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
    )
]);

export const CMRU7aConsultationGermanArray: string[] = [
    "Unfallverhuetung",
    "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
    "Ernaehrung",
    "Bewegung",
    "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung",
    "InformationueberzahnaerztlicheVorsorgeab30Monaten",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
    "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
];

export default CMRU7aConsultationGerman;
