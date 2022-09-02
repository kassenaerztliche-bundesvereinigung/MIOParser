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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Implant_German
type NFDImplantGerman =
    | "Aortenklappenprothese"
    | "ArteriellerStent"
    | "Augenimplantat"
    | "Augenkugelimplantat"
    | "Brustprothese"
    | "ChirurgischerMetallnagelGeraet"
    | "CochleaProthese"
    | "DacronTransplantat"
    | "DHSPlatte"
    | "Eileiterprothese"
    | "Embolisationsspule"
    | "EnossalesoralesImplantat"
    | "ExtracochleaereProthese"
    | "Extremitaetenprothese"
    | "Femurkopfprothese"
    | "Fussgelenkimplantat"
    | "Gallenstent"
    | "Gefaessimplantat"
    | "Gefaessprothese"
    | "Gelenkimplantat"
    | "Handgelenkimplantat"
    | "Harnroehrenkatheter"
    | "Harnroehrenstent"
    | "Herzimplantat"
    | "Herzklappenprothese"
    | "HerzKreislaufImplantat"
    | "Herzleitung"
    | "HerzscheidewandProthese"
    | "Herzschrittmacher"
    | "HerzschrittmacherElektrode"
    | "Hoergeraet"
    | "Hoerimplantat"
    | "Hueftgelenkimplantat"
    | "Hueftprothese"
    | "IleostomieBeutel"
    | "IleostomieSet"
    | "ImplantatdesNervensystems"
    | "ImplantierbarerDefibrillator"
    | "ImplantierbarervenoeserZugang"
    | "ImplantiertesArzneimittelabgabesystem"
    | "InlayZahnersatz"
    | "IntracochleaereProthese"
    | "IntrauterinesVerhuetungsmittel"
    | "IntraventrikulaerePumpe"
    | "JJStent"
    | "Karotisstent"
    | "Katheter"
    | "Kehlkopfimplantat"
    | "Kehlkopfkiel"
    | "KieferundGesichtsprothesegeraet"
    | "Knochendraht"
    | "Knochenheftklammer"
    | "Knochenplatte"
    | "Knochenprothese"
    | "Knochenschraube"
    | "Knochenstift"
    | "Kolostomiebeutel"
    | "KolostomieSet"
    | "Koerperwandimplantat"
    | "KuenstlicheBandscheibe"
    | "KuenstlicheHerzklappenprothese"
    | "KunststoffStent"
    | "LeitungohneVentil"
    | "Magenblase"
    | "MagenDarmImplantat"
    | "Metallperiostimplantat"
    | "MetallStent"
    | "Mitralklappenprothese"
    | "MuskelSkelettImplantat"
    | "NeurostimulatorGeraet"
    | "Orbitalimplantat"
    | "OrthopaedischesGeraet"
    | "OrthopaedischesinternesFixationssystem"
    | "Peritonealdialysator"
    | "PerkutanetransluminaleAngioplastieBallon"
    | "PermanenterHerzschrittmacherGeraet"
    | "ProthesenringfuerdieHerzanuloplastik"
    | "PulmonalklappenprotheseGeraet"
    | "SchrittmacherImpulsgeber"
    | "Schultergelenkimplantat"
    | "Schultergelenkprothese"
    | "SilikongelgefuelltesBrustimplantat"
    | "Silikonimplantat"
    | "Sprunggelenkimplantat"
    | "Stangenfixierungssystem"
    | "Stent"
    | "TotalHueftprothese"
    | "Trachealstent"
    | "TransseptalerKatheter"
    | "Ureterstent"
    | "Urogenitalimplantat"
    | "UrostomieBeutel"
    | "UrostomieSet"
    | "VentilierterHerzkanal"
    | "VentrikulaererShunt"
    | "VentrikulaeresReservoir"
    | "Wirbelsaeulenkaefig"
    | "XenotransplantatHerzklappe"
    | "Zahnprothese"
    | "ZentralerVenenkatheter";

const NFDImplantGerman: t.Type<NFDImplantGerman> = t.union([
    t.literal("Aortenklappenprothese"),
    t.literal("ArteriellerStent"),
    t.literal("Augenimplantat"),
    t.literal("Augenkugelimplantat"),
    t.literal("Brustprothese"),
    t.literal("ChirurgischerMetallnagelGeraet"),
    t.literal("CochleaProthese"),
    t.literal("DacronTransplantat"),
    t.literal("DHSPlatte"),
    t.literal("Eileiterprothese"),
    t.literal("Embolisationsspule"),
    t.literal("EnossalesoralesImplantat"),
    t.literal("ExtracochleaereProthese"),
    t.literal("Extremitaetenprothese"),
    t.literal("Femurkopfprothese"),
    t.literal("Fussgelenkimplantat"),
    t.literal("Gallenstent"),
    t.literal("Gefaessimplantat"),
    t.literal("Gefaessprothese"),
    t.literal("Gelenkimplantat"),
    t.literal("Handgelenkimplantat"),
    t.literal("Harnroehrenkatheter"),
    t.literal("Harnroehrenstent"),
    t.literal("Herzimplantat"),
    t.literal("Herzklappenprothese"),
    t.literal("HerzKreislaufImplantat"),
    t.literal("Herzleitung"),
    t.literal("HerzscheidewandProthese"),
    t.literal("Herzschrittmacher"),
    t.literal("HerzschrittmacherElektrode"),
    t.literal("Hoergeraet"),
    t.literal("Hoerimplantat"),
    t.literal("Hueftgelenkimplantat"),
    t.literal("Hueftprothese"),
    t.literal("IleostomieBeutel"),
    t.literal("IleostomieSet"),
    t.literal("ImplantatdesNervensystems"),
    t.literal("ImplantierbarerDefibrillator"),
    t.literal("ImplantierbarervenoeserZugang"),
    t.literal("ImplantiertesArzneimittelabgabesystem"),
    t.literal("InlayZahnersatz"),
    t.literal("IntracochleaereProthese"),
    t.literal("IntrauterinesVerhuetungsmittel"),
    t.literal("IntraventrikulaerePumpe"),
    t.literal("JJStent"),
    t.literal("Karotisstent"),
    t.literal("Katheter"),
    t.literal("Kehlkopfimplantat"),
    t.literal("Kehlkopfkiel"),
    t.literal("KieferundGesichtsprothesegeraet"),
    t.literal("Knochendraht"),
    t.literal("Knochenheftklammer"),
    t.literal("Knochenplatte"),
    t.literal("Knochenprothese"),
    t.literal("Knochenschraube"),
    t.literal("Knochenstift"),
    t.literal("Kolostomiebeutel"),
    t.literal("KolostomieSet"),
    t.literal("Koerperwandimplantat"),
    t.literal("KuenstlicheBandscheibe"),
    t.literal("KuenstlicheHerzklappenprothese"),
    t.literal("KunststoffStent"),
    t.literal("LeitungohneVentil"),
    t.literal("Magenblase"),
    t.literal("MagenDarmImplantat"),
    t.literal("Metallperiostimplantat"),
    t.literal("MetallStent"),
    t.literal("Mitralklappenprothese"),
    t.literal("MuskelSkelettImplantat"),
    t.literal("NeurostimulatorGeraet"),
    t.literal("Orbitalimplantat"),
    t.literal("OrthopaedischesGeraet"),
    t.literal("OrthopaedischesinternesFixationssystem"),
    t.literal("Peritonealdialysator"),
    t.literal("PerkutanetransluminaleAngioplastieBallon"),
    t.literal("PermanenterHerzschrittmacherGeraet"),
    t.literal("ProthesenringfuerdieHerzanuloplastik"),
    t.literal("PulmonalklappenprotheseGeraet"),
    t.literal("SchrittmacherImpulsgeber"),
    t.literal("Schultergelenkimplantat"),
    t.literal("Schultergelenkprothese"),
    t.literal("SilikongelgefuelltesBrustimplantat"),
    t.literal("Silikonimplantat"),
    t.literal("Sprunggelenkimplantat"),
    t.literal("Stangenfixierungssystem"),
    t.literal("Stent"),
    t.literal("TotalHueftprothese"),
    t.literal("Trachealstent"),
    t.literal("TransseptalerKatheter"),
    t.literal("Ureterstent"),
    t.literal("Urogenitalimplantat"),
    t.literal("UrostomieBeutel"),
    t.literal("UrostomieSet"),
    t.literal("VentilierterHerzkanal"),
    t.literal("VentrikulaererShunt"),
    t.literal("VentrikulaeresReservoir"),
    t.literal("Wirbelsaeulenkaefig"),
    t.literal("XenotransplantatHerzklappe"),
    t.literal("Zahnprothese"),
    t.literal("ZentralerVenenkatheter")
]);

export const NFDImplantGermanArray: string[] = [
    "Aortenklappenprothese",
    "ArteriellerStent",
    "Augenimplantat",
    "Augenkugelimplantat",
    "Brustprothese",
    "ChirurgischerMetallnagelGeraet",
    "CochleaProthese",
    "DacronTransplantat",
    "DHSPlatte",
    "Eileiterprothese",
    "Embolisationsspule",
    "EnossalesoralesImplantat",
    "ExtracochleaereProthese",
    "Extremitaetenprothese",
    "Femurkopfprothese",
    "Fussgelenkimplantat",
    "Gallenstent",
    "Gefaessimplantat",
    "Gefaessprothese",
    "Gelenkimplantat",
    "Handgelenkimplantat",
    "Harnroehrenkatheter",
    "Harnroehrenstent",
    "Herzimplantat",
    "Herzklappenprothese",
    "HerzKreislaufImplantat",
    "Herzleitung",
    "HerzscheidewandProthese",
    "Herzschrittmacher",
    "HerzschrittmacherElektrode",
    "Hoergeraet",
    "Hoerimplantat",
    "Hueftgelenkimplantat",
    "Hueftprothese",
    "IleostomieBeutel",
    "IleostomieSet",
    "ImplantatdesNervensystems",
    "ImplantierbarerDefibrillator",
    "ImplantierbarervenoeserZugang",
    "ImplantiertesArzneimittelabgabesystem",
    "InlayZahnersatz",
    "IntracochleaereProthese",
    "IntrauterinesVerhuetungsmittel",
    "IntraventrikulaerePumpe",
    "JJStent",
    "Karotisstent",
    "Katheter",
    "Kehlkopfimplantat",
    "Kehlkopfkiel",
    "KieferundGesichtsprothesegeraet",
    "Knochendraht",
    "Knochenheftklammer",
    "Knochenplatte",
    "Knochenprothese",
    "Knochenschraube",
    "Knochenstift",
    "Kolostomiebeutel",
    "KolostomieSet",
    "Koerperwandimplantat",
    "KuenstlicheBandscheibe",
    "KuenstlicheHerzklappenprothese",
    "KunststoffStent",
    "LeitungohneVentil",
    "Magenblase",
    "MagenDarmImplantat",
    "Metallperiostimplantat",
    "MetallStent",
    "Mitralklappenprothese",
    "MuskelSkelettImplantat",
    "NeurostimulatorGeraet",
    "Orbitalimplantat",
    "OrthopaedischesGeraet",
    "OrthopaedischesinternesFixationssystem",
    "Peritonealdialysator",
    "PerkutanetransluminaleAngioplastieBallon",
    "PermanenterHerzschrittmacherGeraet",
    "ProthesenringfuerdieHerzanuloplastik",
    "PulmonalklappenprotheseGeraet",
    "SchrittmacherImpulsgeber",
    "Schultergelenkimplantat",
    "Schultergelenkprothese",
    "SilikongelgefuelltesBrustimplantat",
    "Silikonimplantat",
    "Sprunggelenkimplantat",
    "Stangenfixierungssystem",
    "Stent",
    "TotalHueftprothese",
    "Trachealstent",
    "TransseptalerKatheter",
    "Ureterstent",
    "Urogenitalimplantat",
    "UrostomieBeutel",
    "UrostomieSet",
    "VentilierterHerzkanal",
    "VentrikulaererShunt",
    "VentrikulaeresReservoir",
    "Wirbelsaeulenkaefig",
    "XenotransplantatHerzklappe",
    "Zahnprothese",
    "ZentralerVenenkatheter"
];

export default NFDImplantGerman;
