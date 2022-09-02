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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Procedure_German
type NFDProcedureGerman =
    | "AbdominaleHysterektomie"
    | "AbdominaleHysterektomiemitErhaltungderEierstoecke"
    | "AbdominaleHysterektomiemitKolpoUrethrozystopexieTypMarshallMarchettiKrantz"
    | "AbdominaleHysterektomieundlinkeSalpingoOophorektomie"
    | "AbdominaleHysterektomieundrechteSalpingoOophorektomie"
    | "AbdominaleHysterokolpektomie"
    | "AbdominalgeburtbeiSchulterdystokie"
    | "Abdominoplastik"
    | "AblationdesatrioventrikulaerenKnotens"
    | "AblationsoperationbeiHerzrhythmusstoerungen"
    | "Adenoidexzision"
    | "AmniotomiebeiEntbindung"
    | "Amputation"
    | "AmputationderunterenExtremitaet"
    | "AmputationdesBeinesdurchSchienundWadenbein"
    | "AmputationeinerZehe"
    | "AmputationoberhalbdesKnies"
    | "AmputationvonFingernausserDaumen"
    | "AnastomosederArteriapulmonalissubclaviamittelsBlalockTaussigOperation"
    | "AngioplastieeinerVene"
    | "AngioplastieeinesBlutgefaesses"
    | "AnlegeneinerHerzschrittmachertascheanneuerStelleimsubkutanenGewebe"
    | "AnlegeneinerIleostomie"
    | "AnlegeneinesaortofemoralenShunts"
    | "AnlegeneinesConduitszwischenrechterHerzkammerundPulmonalarterie"
    | "AnterioreKolporrhaphie"
    | "AortenaneurysmaReparatur"
    | "AortopulmonaleRekonstruktionmitrechtsventrikulaeremzupulmonalemarteriellemklappenlosemConduit"
    | "ArterielleSwitchOperation"
    | "Arthrodese"
    | "ArthrodeseinanteriorerinterkorporellerTechnikderHalswirbelsaeuleunterhalbCmitKnochentransplantat"
    | "ArthroskopiedesKniesmitmedialerundlateralerMeniskektomie"
    | "ArthroskopiedesKniesmitMeniskusreparatur"
    | "ArthroskopischunterstuetztevordereKreuzbandplastik"
    | "ArthroskopischeMeniskektomie"
    | "ArthroskopischepartiellelateraleMeniskektomie"
    | "ArthroskopischepartiellemedialeMeniskusentfernung"
    | "ArthroskopischetotalemedialeMeniskektomie"
    | "AspirationskuerettagederGebaermutternachderGeburt"
    | "AspirationskuerettagederGebaermutternachEntbindung"
    | "Atherektomie"
    | "AtherektomiemitdemRotationsschneider"
    | "AtherektomiemitLaser"
    | "AugenuntersuchungundBeurteilung"
    | "Augmentationsmammoplastik"
    | "AustauscheinerintraokularenLinse"
    | "AvulsioneinerLaesionderZervixuteri"
    | "BariatrischesoperativesVerfahren"
    | "BetriebanderMembran"
    | "BidirektionaleGlennShuntOperationderlinkenoberenHohlvene"
    | "BidirektionalerGlennShuntfuerdierechteobereHohlvene"
    | "BilateraleEileiterunterbindung"
    | "BilateraleLeistenhernienreparatur"
    | "BilateraleMammareduktionsplastik"
    | "BilateraleSalpingektomiemitOophorektomie"
    | "BilateralesegmentaleVasektomieundLigatur"
    | "BiologischerPulmonalklappenersatz"
    | "Biopsie"
    | "Blinddarmentfernung"
    | "BlockdissektionzervikalerLymphknoten"
    | "Bronchoskopie"
    | "BypassGastroenterostomie"
    | "BypassTransplantatderFemoralPoplitealArterie"
    | "BypassTransplantatderKoronararterie"
    | "CerclagedesGebaermutterhalses"
    | "CerclagedesGebaermutterhalsesinderSchwangerschaftuebereinenvaginalenZugang"
    | "CerclagedesGebaermutterhalseswaehrendderSchwangerschaftdurchabdominalenZugang"
    | "ChirurgischeBiopsie"
    | "ChirurgischeBiopsiederBrust"
    | "ChirurgischerEingriff"
    | "ChirurgischerEingriffamAuge"
    | "ChirurgischerEingriffamThorax"
    | "ChirurgischerEingriffanderBrustwand"
    | "Cholezystektomie"
    | "CholezystektomiemitExplorationdesDuctuscommunis"
    | "ChondrektomiederWirbelsaeule"
    | "Coarctationsangioplastie"
    | "Dammschnitt"
    | "DamusStanselKayeOperation"
    | "Darmspiegelung"
    | "DebridementvonGeschwueren"
    | "DekompressiondesNmedianus"
    | "DenervierungderWirbelsaeulenfacettengelenke"
    | "Dermabrasion"
    | "DiagnostischeDilatationundKuerettagederGebaermutter"
    | "DilatationderSpeiseroehre"
    | "DilatationdesGallenganges"
    | "DilatationdesGebaermutterhalseszurEntbindung"
    | "DilatationundKuerettage"
    | "DilatationundKuerettagederGebaermutter"
    | "DilatationundKuerettagederGebaermutternachderEntbindung"
    | "DilatationInzisiondesGebaermutterhalsesGeburtshilfe"
    | "DiskektomiebeiBandscheibenvorfallNucleuspulposus"
    | "Dissektionsverfahren"
    | "DoppelteLungentransplantation"
    | "DorranceOperationPushbackOperationbeiGaumenspalte"
    | "Duenndarmexzision"
    | "EinfacheExzisiondesLeistenbruchsacks"
    | "EinfacheLigaturvonHaemorrhoiden"
    | "EinfacheMastektomie"
    | "EinfuehrungeinesHerzschrittmachersystemsueberdieVene"
    | "EinfuehrungkuenstlicherAtemwege"
    | "EinsetzenderBrustprothese"
    | "EinsetzeneinerHueftprothese"
    | "EinsetzeneinespermanentenHerzschrittmachersmittransvenoesenElektrodenventrikulaer"
    | "EinsetzeneinesStentsindieHerzkranzgefaesse"
    | "EinsetzeneinesStentsineineKoronararterie"
    | "EinsetzenvonbeidseitigenBrustprothesen"
    | "ElektiveHysterektomieperKaiserschnitt"
    | "Endometriumablation"
    | "Endoskopie"
    | "EndoskopiederGallenwege"
    | "EndovaskulaereReparatureinesabdominalenAortenaneurysmas"
    | "EntbindungdurchMalstromExtraktionmitEpisiotomie"
    | "EntbindungdurchVakuumextraktionmitEpisiotomie"
    | "EntfernungderintrakraniellenLaesion"
    | "EntfernungeinerHerzschrittmacherelektrode"
    | "EntfernungeinerKnochenschraubeausdemKnochen"
    | "EntfernungeinerOvarialzyste"
    | "EntfernungeinerPlatteausdemKnochenProzedur"
    | "EntfernungeinesAkustikusneurinoms"
    | "EntfernungeinesautomatischenHerzdefibrillators"
    | "EntfernungeinesboesartigenBrusttumors"
    | "EntfernungeinesBrustimplantats"
    | "EntfernungeinesHautmolekuelsdurchExzision"
    | "EntfernungeinesHerzschrittmachers"
    | "EntfernungeinesinternenFixateurs"
    | "EntfernungvonHerzschrittmacherelektrodenmitErsatz"
    | "EntfernungvonmalignenNeubildungen"
    | "EntfernungvonWeichgewebe"
    | "EntlastungbeideQuervainsTenosynovitisderHand"
    | "EntnahmevonperipherenBlutstammzellen"
    | "EntnahmevonSpendermaterial"
    | "EnukleationdesAugapfels"
    | "EroeffnungdesBrustkorbs"
    | "ErsatzderMitralklappe"
    | "ErsatzderMitralklappemitGewebetransplantat"
    | "ErsatzderTrikuspidalklappemitGewebetransplantat"
    | "ErsatzeinerAortenklappe"
    | "ErsatzeineselektronischenHerzgeraetsImpulsgebers"
    | "ErsatzeinesHerzschrittmachers"
    | "ErsatzeinesKardioverterDefibrillators"
    | "ErsatzeinesZweikammerImpulsgenerators"
    | "ErstimplantationeinerElektrodeindenVorhofdesHerzens"
    | "ErstimplantationeinerElektrodeinHerzvorhofundHerzkammer"
    | "ErstimplantationeinesEinkammerHerzgeraets"
    | "ErstimplantationeinesZweikammerHerzgeraets"
    | "ErzwungenemanuelleDilatationdesAnus"
    | "EvakuierungdesintrazerebralenHaematoms"
    | "EvakuierungdessubduralenHaematoms"
    | "ExplorativeLaparotomie"
    | "ExtrakapsulaereExtraktion"
    | "ExtrakapsulaereExtraktionderLinse"
    | "ExtraktionderAugenlinse"
    | "ExtraktionvonKatarakt"
    | "ExtraperitonealerKaiserschnitt"
    | "Extremitaetenbetrieb"
    | "Exzision"
    | "ExzisionderGebaermutterundderunterstuetzendenStrukturen"
    | "ExzisionderLaminaderHalswirbelsaeule"
    | "ExzisionderLaminaeinesWirbels"
    | "ExzisioneinerakzessorischenGebaermutter"
    | "ExzisioneinerHautwucherung"
    | "ExzisioneinerHautzyste"
    | "ExzisioneinerKrampfaderderunterenExtremitaet"
    | "ExzisioneinerLaesionderHaut"
    | "ExzisioneinerMagenstruktur"
    | "ExzisioneinerTalgdruesenzyste"
    | "ExzisioneinesBallenzeh"
    | "ExzisioneinesboesartigenHauttumors"
    | "ExzisioneinesHandgelenksganglions"
    | "ExzisioneinesKniegelenksganglions"
    | "ExzisioneinesLipoms"
    | "ExzisioneinesNagelkeils"
    | "ExzisioneinesNeoplasmas"
    | "ExzisioneinesPapilloms"
    | "ExzisioneinesTumorsderHirnhaeute"
    | "ExzisionvonBrustgewebe"
    | "ExzisionvonEndometriumSynechien"
    | "Exzisionsbiopsie"
    | "ExzisionsbiopsieeinerHautlaesion"
    | "FemoralpoplitealeArterienBypassTransplantationmitVene"
    | "FettabsaugungdesUnterhautgewebes"
    | "FixierungdeslinkenHodens"
    | "FixierungdesrechtenHodens"
    | "FusionderhinterenLendenwirbelsaeule"
    | "Gastrostomie"
    | "Geburtshilfe"
    | "GeburtshilflicheHysterotomie"
    | "Gefaesschirurgie"
    | "HaematopoetischeStammzelltransplantation"
    | "HammerzehenOperation"
    | "Haemorrhoidektomie"
    | "Harnblasenexzision"
    | "HartmannOperationRektumresektion"
    | "Hauttransplantation"
    | "HemiFontanOperation"
    | "Hernienreparatur"
    | "Herzklappenersatz"
    | "HerzklappenersatzProthese"
    | "HerzKreislaufChirurgie"
    | "HerzLungenTransplantationmitEmpfaengerKardiektomiePneumonektomie"
    | "Herztransplantation"
    | "HochzangengeburtmitEpisiotomie"
    | "Hodenexzision"
    | "Hornhauttransplantation"
    | "Hueftgelenksrekonstruktion"
    | "Hysterektomie"
    | "HysterektomieinderSchwangerschaft"
    | "HysterektomieperKaiserschnitt"
    | "HysterektomieundFoetusentfernung"
    | "HysterotomiebeiretinierterPlazenta"
    | "HysterotomiemitEntfernungeinesFremdkoerpers"
    | "HysterotomiemitEntfernungeineshydatidiformenMuttermals"
    | "ImplantationeinerAortenklappenprotheseodereinessynthetischenGeraets"
    | "ImplantationeinerCochleaElektrode"
    | "ImplantationeinerCochleaProthese"
    | "ImplantationeinerCochleaProtheseeinkanalig"
    | "ImplantationeinerCochleaProtheseElektrodeundEmpfaenger"
    | "ImplantationeinerCochleaProthesemehrereKanaele"
    | "ImplantationeinerHerzklappemitGewebetransplantat"
    | "ImplantationeinerHerzklappenprotheseodereinesKunststoffgeraets"
    | "ImplantationeinerintracochleaerenProthese"
    | "ImplantationeinerintraokularenHinterkammerlinse"
    | "ImplantationeinerMitralklappenprotheseodereinessynthetischenGeraets"
    | "ImplantationeinerPenisprothese"
    | "ImplantationeinerprothetischenIntraokularlinse"
    | "ImplantationeinerPulmonalklappenprotheseodereinessynthetischenGeraets"
    | "ImplantationeinerTrikuspidalklappenprotheseodereinessynthetischenGeraets"
    | "ImplantationeinesautomatischenHerzdefibrillators"
    | "ImplantationeinesautomatischenKardiovertersDefibrillatorsGesamtsystem"
    | "ImplantationeinesHerzschrittmachers"
    | "ImplantationeinesHerzunterstuetzungssystems"
    | "ImplantationeinesinternenHerzdefibrillators"
    | "ImplantationeinesintravenoesenZweikammerDauerschrittmachers"
    | "ImplantationeinesKardioverterDefibrillatorsmitdreiElektrodenleitungen"
    | "ImplantationeinesKardioverterDefibrillatorsmiteinerElektrodenleitung"
    | "ImplantationeinesKardioverterDefibrillatorsmitzweiElektrodenleitungen"
    | "ImplantationeinesSchirmsindieVenacava"
    | "ImplantationindasHerzKreislaufSystem"
    | "ImplantationvonBaffleatrialoderinteratrial"
    | "InduzierterSchwangerschaftsabbruchnachintraamniotischerInjektionmitHysterotomie"
    | "InteratrialeTranspositiondesvenoesenRueckflusses"
    | "InterneFixationmitSchraube"
    | "InterneFixationmittelsPlatte"
    | "InterneFixierungmitKlammer"
    | "InterneSkelettFixierung"
    | "IntestinalerBypassbeimorbiderAdipositas"
    | "IntrakapsulaereExtraktionderLinse"
    | "IntrakapsulaereKataraktextraktion"
    | "IntrakapsulaereKataraktextraktionundEinsetzeneinerintraokularenLinse"
    | "IntrakavitaereBrachytherapie"
    | "InzisionderGallenblase"
    | "InzisionderLuftroehre"
    | "InzisionUNDDrainage"
    | "InzisionundDrainageeinerWunde"
    | "InzisionundDrainageeinesAbszesses"
    | "Inzisionsbiopsie"
    | "InzisionsbiopsieeinerBrustmasse"
    | "Kaiserschnitt"
    | "KardiopulmonaleBypassOperation"
    | "Kardioversion"
    | "Karotisendarteriektomie"
    | "KataraktextraktionundEinsetzeneinerintraokularenLinse"
    | "KatheterablationvonHerzgewebe"
    | "KatheterisierungdeslinkenundrechtenHerzensmitTransplantat"
    | "KauterisationderinnerenNase"
    | "KauterisationderNasenmuschel"
    | "KauterisationeinerWarze"
    | "KeilentfernungderLunge"
    | "Keilresektion"
    | "KieferundKiefergelenksoperationen"
    | "KlassischerKaiserschnitt"
    | "Klitoridektomie"
    | "Knieendoprothetik"
    | "Kniegelenksoperation"
    | "Kolektomie"
    | "KolonoskopischePolypektomie"
    | "Kolostomie"
    | "KolpoperineorrhaphienachEntbindung"
    | "KolporrhaphiezurReparaturderHarnroehre"
    | "KombinierteanteroposterioreKolporrhaphie"
    | "KompletteexterneHaemorrhoidektomie"
    | "KompletteZystektomie"
    | "KonstruktioneinesConduitsrechterVorhofzumTruncuspulmonalis"
    | "KonstruktioneinesTunnelsvonderlinkenHerzkammerzurAortamiteinemConduitvonderrechtenHerzkammerzurPulmonalarterie"
    | "KonusbiopsiedesGebaermutterhalses"
    | "Koronarangioplastie"
    | "KoronararterienBypassmitautogenemTransplantatdreiTransplantate"
    | "KoronararterienBypassmitautogenemTransplantatvierTransplantate"
    | "KoronararterienBypassTransplantationxdrei"
    | "KoronararterienBypassTransplantationxfuenf"
    | "KoronararterienBypassTransplantationxzwei"
    | "KoronararterienBypassTransplantationxvier"
    | "KorrekturderAtresiedesaeusserenGehoergangs"
    | "KorrektureinerangeborenenkardiovaskulaerenDeformitaet"
    | "KorrektureinesVentrikelseptumdefekts"
    | "KosmetischeChirurgie"
    | "Kraniotomie"
    | "KryoablationOperationbeiHerzrhythmusstoerungen"
    | "LaminaexzisionanderLendenwirbelsaeulezurDekompressiondesRueckenmarks"
    | "LaminotomiezurDekompressionundExploration"
    | "LangenbeckOperationGaumenspaltreparatur"
    | "LaparoskopischeAppendektomie"
    | "LaparoskopischeCholezystektomie"
    | "LaparoskopischeCholezystektomiemitErkundungdesDuctuscommunis"
    | "LaparoskopischeHysterektomie"
    | "LaparoskopischeNissenFundoplikationmitabdominalemZugang"
    | "LaparoskopischeReparaturvonLeistenbruch"
    | "Laparotomie"
    | "Laryngektomie"
    | "LaserassistierteInsituKeratomileusis"
    | "LaserassistiertesubepithelialeKeratomileusis"
    | "Laseriridotomie"
    | "LaserPhotokoagulationanderNetzhaut"
    | "Lasertrabekuloplastik"
    | "Leberexzision"
    | "Lebertransplantation"
    | "LeftGlennShuntVerfahren"
    | "LemesurierOperationLippenspaltenreparatur"
    | "LigaturderKrampfaderderunterenExtremitaet"
    | "LigaturderlangenVenasaphenamagna"
    | "LigaturdesEileiters"
    | "Lithotripsie"
    | "Lobektomie"
    | "LobektomiederLunge"
    | "LokaleExzision"
    | "LokaleExzisionvonHautundSubkutangewebe"
    | "LumbaleWirbelsaeulenfusion"
    | "LumpektomiederBrust"
    | "Lungentransplantation"
    | "Lungentumorentfernung"
    | "MacdonaldszervikaleCerclage"
    | "MagenbypassmitkurzschenkligerRouxenYGastroenterostomie"
    | "Mastoidektomie"
    | "MechanischeVitrektomiemitParsPlanaAnsatz"
    | "MechanischprothetischerAortenklappenersatz"
    | "MechanischprothetischerMitralklappenersatz"
    | "Mitralvalvuloplastie"
    | "MittlereZangengeburtmitEpisiotomie"
    | "ModifizierteradikaleMastektomiederlinkenBrust"
    | "ModifizierteradikaleMastektomiederrechtenBrust"
    | "Myokardrevaskularisation"
    | "Myringoplastik"
    | "MyringotomieundEinsetzeneinesKurzzeitPaukenroehrchens"
    | "MyringotomieundEinsetzeneinesLangzeitbeatmungsschlauches"
    | "MyringotomieundEinsetzeneinesPaukenroehrchens"
    | "MyringotomieundEinsetzeneinesTTubus"
    | "NasalePolypektomie"
    | "Nasenscheidewandplastik"
    | "NasenscheidewandplastikmitTransplantat"
    | "NeuroplastikundTranspositiondesNervusmedianusamKarpaltunnel"
    | "NichtobstetischeumlaufendeNahtdesMuttermundes"
    | "NiedrigeZangengeburtmitEpisiotomie"
    | "Nierenexzision"
    | "Nierentransplantation"
    | "NorwoodTypOperation"
    | "NotfallAppendektomie"
    | "NotfallKaiserschnittimoberenSegment"
    | "NotfallKaiserschnittimunterenSegment"
    | "NotfallKaiserschnittHysterektomie"
    | "NotfallKoronararterienBypassTransplantation"
    | "OffeneAblationdesatrioventrikulaerenKnotens"
    | "OffeneAkromioplastikzurDekompressionderRotatorenmanschette"
    | "OffeneBiopsie"
    | "OffeneRepositioneinerFraktur"
    | "OffeneRepositioneinerFrakturmitinternerFixierung"
    | "Oophorektomie"
    | "OperationamakzessorischenSinus"
    | "OperationamAugenlid"
    | "OperationamBronchus"
    | "OperationamGelenk"
    | "OperationamHals"
    | "OperationamHarnsystem"
    | "OperationamHerzen"
    | "OperationamKnochen"
    | "OperationamNervensystem"
    | "OperationamOhr"
    | "OperationamRetroperitoneum"
    | "OperationanderBauchregion"
    | "OperationanderBrust"
    | "OperationanderHerzklappe"
    | "OperationanderLuftroehre"
    | "OperationanderLunge"
    | "OperationanderLymphstruktur"
    | "OperationanderMilz"
    | "OperationanderNasenscheidewand"
    | "OperationanHerzundPerikard"
    | "OperationanweiblichenGeschlechtsorganen"
    | "OperationaufderHaut"
    | "OperationaufMediastinum"
    | "OperationdeszentralenaortopulmonalenShunts"
    | "OperationeinerGanglionzyste"
    | "OperationzurGeburtserleichterung"
    | "OperationsverfahrenammaennlichenUrogenitalsystem"
    | "OperationsverfahrenamVerdauungssystem"
    | "OperationsverfahrenanderWirbelsaeulenstruktur"
    | "OperativerEingriffamFuss"
    | "OperativerEingriffamKnie"
    | "OperativerEingriffanderHand"
    | "OperativerEingriffanderSchulterregion"
    | "Orchidopexie"
    | "OesophagogastraleFundoplastik"
    | "Osteotomie"
    | "Pankreatektomie"
    | "Pankreatikoduodenektomie"
    | "Parathyreoidektomie"
    | "Parotidektomie"
    | "PartielleExzision"
    | "PartielleHysterektomie"
    | "PartielleKolektomiemitAnastomose"
    | "PartielleMastektomie"
    | "PartielleNephrektomie"
    | "PenetrierendeKeratoplastik"
    | "PerkutaneBallonvalvuloplastiederAortenklappe"
    | "PerkutaneDiskektomie"
    | "PerkutaneEinlageeinerNephrostomieSonde"
    | "PerkutaneEinlageeinesintravaskulaerenFilters"
    | "PerkutaneendoskopischeEinlageeinerGastrostomiesonde"
    | "PerkutaneKoronarintervention"
    | "PerkutanetransluminaleAblationdesatrioventrikulaerenKnotens"
    | "PerkutanetransluminaleBallonangioplastie"
    | "PerkutanetransluminaleBallonangioplastiederAortenisthmusstenosemitStentimplantation"
    | "PerkutanetransluminaleBallonangioplastiemitEinfuehrungeinesStentsindieKoronararterie"
    | "PerkutanetransluminaleKoronarangioplastie"
    | "PerkutanetransluminaleKoronarangioplastiemitRotoablationEinzelgefaess"
    | "PerkutanerErsatzeinerAortenklappeunterfluoroskopischerKontrolle"
    | "PhotorefraktiveKeratektomie"
    | "PilonidalsinusOperation"
    | "PlastischeOperationanderBrust"
    | "PlastischeReparaturderAortenklappe"
    | "PlastischeReparaturderMitralklappe"
    | "PlastischeReparatureinerSehne"
    | "PrimaereExzisionderzervikalenBandscheibe"
    | "PrimaerelumbaleDiskektomie"
    | "PrimaereoffeneRepositionundinterneFixationeinerproximalenFemurfrakturmitSchraubeNagelundPlattengeraet"
    | "PrimaereReparatureinerFemoralhernie"
    | "PrimaereReparatureinerGaumenspalte"
    | "PrimaereReparatureinerLeistenhernie"
    | "Prostatektomie"
    | "ProthetischeEndoprothetikderHuefte"
    | "ProthetischerErsatzeinerHerzklappe"
    | "PubiotomiezurGeburtshilfe"
    | "Punktionsverfahren"
    | "QuadrantektomiederBrust"
    | "RadialeKeratotomie"
    | "RadikaleabdominaleHysterektomie"
    | "RadikaleExzision"
    | "RadikaleExzisionmitLymphknotendissektion"
    | "RadikaleMastektomie"
    | "RadikaleMastektomiederlinkenBrust"
    | "RadikaleMastektomiederrechtenBrust"
    | "RadikaleperinealeProstatektomie"
    | "RadikaleProstatektomie"
    | "RadikaleretropubischeProstatektomie"
    | "RadiofrequenzAblationsoperationbeiHerzrhythmusstoerungen"
    | "RadiomarkierteAntikoerperTherapie"
    | "RadionuklidTherapiebeiHyperthyreose"
    | "ReduktiondergeschlossenenFraktur"
    | "ReduktionoffenerFrakturen"
    | "Reduktionsmammoplastik"
    | "Reexzision"
    | "RekonstruktionderBrust"
    | "RekonstruktionderNase"
    | "RekonstruktiondesvorderenKreuzbandesamKniegelenk"
    | "Rekonstruktionsverfahren"
    | "ReparativerVerschluss"
    | "ReparaturderAortenklappemitGewebetransplantat"
    | "ReparaturderGaumenspalte"
    | "ReparaturdergerissenenSupraspinatussehneakut"
    | "ReparaturdergerissenenSupraspinatussehnechronisch"
    | "ReparaturderMitralklappe"
    | "ReparaturderMitralklappeunterfluoroskopischerKontrolle"
    | "ReparaturdermuskulotendinoesenManschettederSchulter"
    | "ReparaturderNetzhautbeiNetzhautabloesung"
    | "ReparaturderRotatorenmanschettedurchNaht"
    | "ReparaturderSpaltedeshartenGaumens"
    | "ReparaturderTrikuspidalklappe"
    | "ReparaturdesAneurysmasderBauchaorta"
    | "ReparaturdesDefektsderatrioventrikulaerenScheidewand"
    | "ReparaturdesinfrarenalenabdominalenAortenaneurysmasmitEinfuehrungeinesendovaskulaerenStents"
    | "ReparaturdesMittelohrs"
    | "ReparaturdurchNageln"
    | "ReparatureinerAortenkoarktation"
    | "ReparatureinerbeidseitigenLippenspalte"
    | "ReparatureinerGaumenspalte"
    | "ReparatureinergleitendenLeistenhernie"
    | "ReparatureinerLippenspalte"
    | "ReparatureinerparaoesophagealenZwerchfellhernie"
    | "ReparatureinerpartiellenanomalenpulmonalvenoesenVerbindung"
    | "ReparatureinertotalenanomalenpulmonalenVenenverbindung"
    | "ReparatureinerventralenHernie"
    | "ReparatureinesabdominalenAortenaneurysmasmitEinsetzeneinesStents"
    | "ReparatureinesAneurysmasderBauchaortamitTransplantat"
    | "ReparatureinesimplantiertenaortalenparavalvulaerenLecks"
    | "ReparatureineskomplettenSchultermanschettenausrisseschronisch"
    | "ReparatureinesNabelbruchs"
    | "ReparatureinesreponierbarenLeistenbruchs"
    | "ReparatureinesrezidivierendenLeistenbruchs"
    | "ReparatureinesVentrikelseptumdefektsmitProthese"
    | "ReparatureinesVorhofseptumdefektesmitProtheseingeschlossenerHerztechnik"
    | "ReparaturvonLeistenbruch"
    | "ResektioneinesNeoplasmasamHerzen"
    | "ResektioneinesPolypen"
    | "RhinocheiloplastikbeiLippenspalte"
    | "Rhinoseptoplastik"
    | "RightGlennShuntVerfahren"
    | "RouxenYGastrojejunostomie"
    | "SalpingoOophorektomie"
    | "SanoVerfahren"
    | "Schilddruesenentfernung"
    | "Scraping"
    | "SegmentaleExzisionundLigatur"
    | "ShaveBiopsie"
    | "ShirodkarszervikaleCerclage"
    | "SkleraleKnickung"
    | "SofortigeReparatureinergeburtshilflichenRisswunde"
    | "SofortigeReparatureinerkleinengeburtshilflichenRisswunde"
    | "SofortigeReparatureinerRisswundederGebaermutteroderdesGebaermutterhalses"
    | "SofortigeReparatureinerRisswundederVaginaunddesBeckenbodens"
    | "SofortigeReparatureinesgeburtshilflichenRissesdesDammesunddesSchliessmuskelsdesAnus"
    | "Splenektomie"
    | "SpuelungdesAntrumsmaxillaris"
    | "StagingOperationmitInzisionExplorationundBiopsie"
    | "StandardBeschneidung"
    | "Stanzbiopsie"
    | "Stapedektomie"
    | "StrabismusChirurgie"
    | "StrippenundLigation"
    | "StrippingvonVenen"
    | "SubkutaneMastektomie"
    | "SubmukoeseResektionderNasenscheidewand"
    | "SubtotaleabdominaleHysterektomie"
    | "SubtotaleGastrektomie"
    | "SubtotaleHysterektomienachKaiserschnittentbindung"
    | "SubtotaleThyreoidektomie"
    | "SuprapubischeZystostomie"
    | "SuprazervikaleHysterektomie"
    | "TeilresektiondesDickdarms"
    | "TherapeutischearthroskopischeOperationenanderKniegelenkshoehle"
    | "TherapeutischerSchwangerschaftsabbruchdurchHysterotomie"
    | "ThompsonOperationReparaturderLippenspalte"
    | "ThromboendarterektomiemitTransplantatderHalsschlagaderdurchHalsschnitt"
    | "Tonsillektomie"
    | "TonsillektomieundAdenoidektomie"
    | "TotaleabdominaleHysterektomie"
    | "TotaleabdominaleHysterektomiemitbeidseitigerSalpingoOophorektomie"
    | "TotaleAvulsionderNagelplatte"
    | "TotaleHysterektomiemitEntfernungbeiderEileiterundEierstoecke"
    | "TotalekavopulmonaleVerbindungmitlateralemVorhoftunnel"
    | "TotaleKolektomie"
    | "TotaleLobektomiederLunge"
    | "TotaleNephrektomie"
    | "TotalePneumonektomie"
    | "TotaleSplenektomie"
    | "TotaleThyreoidektomie"
    | "TotalerErsatzdeslinkenKniegelenks"
    | "TotalerErsatzdesrechtenKniegelenks"
    | "TotalerKnieersatz"
    | "TotalerprothetischerErsatzdesHueftgelenksmitZement"
    | "TotalerprothetischerErsatzdesKniegelenksmitZement"
    | "TotalerSchulterersatz"
    | "TotalersatzderHuefte"
    | "TotalersatzdesEllenbogens"
    | "Trabekulektomieabexterno"
    | "TransjugulaererintrahepatischerportosystemischerShunt"
    | "TransplantationderBauchspeicheldruese"
    | "TransplantationdeskardiovaskulaerenSystems"
    | "TransplantationeinerAortenklappenprotheseuebereinentransapikalenZugang"
    | "TransplantationfesterOrgane"
    | "TransplantationvonDuenndarm"
    | "TransurethraleProstatektomie"
    | "Trepanationsbiopsie"
    | "Trimmen"
    | "Tympanomastoidektomie"
    | "Tympanotomie"
    | "UeberarbeitungdesHueftersatzes"
    | "Ureteroileostomie"
    | "VaginaleHysterektomie"
    | "VaginalerKaiserschnitt"
    | "ValvuloplastiederAortenklappe"
    | "Varizenoperation"
    | "Varizenstripping"
    | "Vasektomie"
    | "VentrikuloperitonealerShunt"
    | "VerfahrenamBlutgefaess"
    | "VerfahrenamDarm"
    | "VerfahrenamKopfundoderHals"
    | "VerfahrenamOhrundverwandtenStrukturen"
    | "VerfahrenamweiblichenGenitalsystem"
    | "VerfahrenanderExtremitaet"
    | "VerfahrenaufPleura"
    | "VerfahrenzuFuss"
    | "VeroedungvonHaemorrhoidendurchSklerosierung"
    | "VerschlussdesDuctusarteriosusmitClip"
    | "VerschlussdesDuctusarteriosusmittelsEmbolisationsspule"
    | "VerschlussdesoffenenForamenovale"
    | "VerschlussdesoffenenForamenovaleunterDurchleuchtung"
    | "VerschlussdesVentrikelseptumdefektsunterDurchleuchtungssteuerung"
    | "VerschlussdesVorhofseptumdefektsunterfluoroskopischerKontrolle"
    | "VerschlussdurchNaht"
    | "VerschlusseinervesikouterinenFistelmitHysterektomie"
    | "VerschlusseinesVorhofseptumdefekts"
    | "Vitrektomie"
    | "VollstaendigeExzisiondesOrgans"
    | "VollstaendigetransurethraleResektionderProstataeinschliesslichKontrollederNachblutung"
    | "VorhofinversionsoperationmitVorhofwand"
    | "WahlweiserKaiserschnitt"
    | "WahlweiserKaiserschnittimoberenSegment"
    | "WahlweiserKaiserschnittimunterenSegment"
    | "WardillOperationGaumenspaltreparatur"
    | "WertheimMeigsabdominaleHysterektomie"
    | "WertheimOperation"
    | "WiederherstellungderKniescheibe"
    | "WiederherstellungdesOberschenkelkopfes"
    | "WirbelsaeulenArthrodese"
    | "YttriumAluminiumGranatLaserKapsulotomiederLinse"
    | "ZangenextraktioneinerLinse"
    | "ZervikaleArthrodese"
    | "ZervikaleArthrodeseinanteriorerTechnik"
    | "Zirkumzision";

const NFDProcedureGerman: t.Type<NFDProcedureGerman> = t.union([
    t.literal("AbdominaleHysterektomie"),
    t.literal("AbdominaleHysterektomiemitErhaltungderEierstoecke"),
    t.literal(
        "AbdominaleHysterektomiemitKolpoUrethrozystopexieTypMarshallMarchettiKrantz"
    ),
    t.literal("AbdominaleHysterektomieundlinkeSalpingoOophorektomie"),
    t.literal("AbdominaleHysterektomieundrechteSalpingoOophorektomie"),
    t.literal("AbdominaleHysterokolpektomie"),
    t.literal("AbdominalgeburtbeiSchulterdystokie"),
    t.literal("Abdominoplastik"),
    t.literal("AblationdesatrioventrikulaerenKnotens"),
    t.literal("AblationsoperationbeiHerzrhythmusstoerungen"),
    t.literal("Adenoidexzision"),
    t.literal("AmniotomiebeiEntbindung"),
    t.literal("Amputation"),
    t.literal("AmputationderunterenExtremitaet"),
    t.literal("AmputationdesBeinesdurchSchienundWadenbein"),
    t.literal("AmputationeinerZehe"),
    t.literal("AmputationoberhalbdesKnies"),
    t.literal("AmputationvonFingernausserDaumen"),
    t.literal("AnastomosederArteriapulmonalissubclaviamittelsBlalockTaussigOperation"),
    t.literal("AngioplastieeinerVene"),
    t.literal("AngioplastieeinesBlutgefaesses"),
    t.literal("AnlegeneinerHerzschrittmachertascheanneuerStelleimsubkutanenGewebe"),
    t.literal("AnlegeneinerIleostomie"),
    t.literal("AnlegeneinesaortofemoralenShunts"),
    t.literal("AnlegeneinesConduitszwischenrechterHerzkammerundPulmonalarterie"),
    t.literal("AnterioreKolporrhaphie"),
    t.literal("AortenaneurysmaReparatur"),
    t.literal(
        "AortopulmonaleRekonstruktionmitrechtsventrikulaeremzupulmonalemarteriellemklappenlosemConduit"
    ),
    t.literal("ArterielleSwitchOperation"),
    t.literal("Arthrodese"),
    t.literal(
        "ArthrodeseinanteriorerinterkorporellerTechnikderHalswirbelsaeuleunterhalbCmitKnochentransplantat"
    ),
    t.literal("ArthroskopiedesKniesmitmedialerundlateralerMeniskektomie"),
    t.literal("ArthroskopiedesKniesmitMeniskusreparatur"),
    t.literal("ArthroskopischunterstuetztevordereKreuzbandplastik"),
    t.literal("ArthroskopischeMeniskektomie"),
    t.literal("ArthroskopischepartiellelateraleMeniskektomie"),
    t.literal("ArthroskopischepartiellemedialeMeniskusentfernung"),
    t.literal("ArthroskopischetotalemedialeMeniskektomie"),
    t.literal("AspirationskuerettagederGebaermutternachderGeburt"),
    t.literal("AspirationskuerettagederGebaermutternachEntbindung"),
    t.literal("Atherektomie"),
    t.literal("AtherektomiemitdemRotationsschneider"),
    t.literal("AtherektomiemitLaser"),
    t.literal("AugenuntersuchungundBeurteilung"),
    t.literal("Augmentationsmammoplastik"),
    t.literal("AustauscheinerintraokularenLinse"),
    t.literal("AvulsioneinerLaesionderZervixuteri"),
    t.literal("BariatrischesoperativesVerfahren"),
    t.literal("BetriebanderMembran"),
    t.literal("BidirektionaleGlennShuntOperationderlinkenoberenHohlvene"),
    t.literal("BidirektionalerGlennShuntfuerdierechteobereHohlvene"),
    t.literal("BilateraleEileiterunterbindung"),
    t.literal("BilateraleLeistenhernienreparatur"),
    t.literal("BilateraleMammareduktionsplastik"),
    t.literal("BilateraleSalpingektomiemitOophorektomie"),
    t.literal("BilateralesegmentaleVasektomieundLigatur"),
    t.literal("BiologischerPulmonalklappenersatz"),
    t.literal("Biopsie"),
    t.literal("Blinddarmentfernung"),
    t.literal("BlockdissektionzervikalerLymphknoten"),
    t.literal("Bronchoskopie"),
    t.literal("BypassGastroenterostomie"),
    t.literal("BypassTransplantatderFemoralPoplitealArterie"),
    t.literal("BypassTransplantatderKoronararterie"),
    t.literal("CerclagedesGebaermutterhalses"),
    t.literal(
        "CerclagedesGebaermutterhalsesinderSchwangerschaftuebereinenvaginalenZugang"
    ),
    t.literal(
        "CerclagedesGebaermutterhalseswaehrendderSchwangerschaftdurchabdominalenZugang"
    ),
    t.literal("ChirurgischeBiopsie"),
    t.literal("ChirurgischeBiopsiederBrust"),
    t.literal("ChirurgischerEingriff"),
    t.literal("ChirurgischerEingriffamAuge"),
    t.literal("ChirurgischerEingriffamThorax"),
    t.literal("ChirurgischerEingriffanderBrustwand"),
    t.literal("Cholezystektomie"),
    t.literal("CholezystektomiemitExplorationdesDuctuscommunis"),
    t.literal("ChondrektomiederWirbelsaeule"),
    t.literal("Coarctationsangioplastie"),
    t.literal("Dammschnitt"),
    t.literal("DamusStanselKayeOperation"),
    t.literal("Darmspiegelung"),
    t.literal("DebridementvonGeschwueren"),
    t.literal("DekompressiondesNmedianus"),
    t.literal("DenervierungderWirbelsaeulenfacettengelenke"),
    t.literal("Dermabrasion"),
    t.literal("DiagnostischeDilatationundKuerettagederGebaermutter"),
    t.literal("DilatationderSpeiseroehre"),
    t.literal("DilatationdesGallenganges"),
    t.literal("DilatationdesGebaermutterhalseszurEntbindung"),
    t.literal("DilatationundKuerettage"),
    t.literal("DilatationundKuerettagederGebaermutter"),
    t.literal("DilatationundKuerettagederGebaermutternachderEntbindung"),
    t.literal("DilatationInzisiondesGebaermutterhalsesGeburtshilfe"),
    t.literal("DiskektomiebeiBandscheibenvorfallNucleuspulposus"),
    t.literal("Dissektionsverfahren"),
    t.literal("DoppelteLungentransplantation"),
    t.literal("DorranceOperationPushbackOperationbeiGaumenspalte"),
    t.literal("Duenndarmexzision"),
    t.literal("EinfacheExzisiondesLeistenbruchsacks"),
    t.literal("EinfacheLigaturvonHaemorrhoiden"),
    t.literal("EinfacheMastektomie"),
    t.literal("EinfuehrungeinesHerzschrittmachersystemsueberdieVene"),
    t.literal("EinfuehrungkuenstlicherAtemwege"),
    t.literal("EinsetzenderBrustprothese"),
    t.literal("EinsetzeneinerHueftprothese"),
    t.literal(
        "EinsetzeneinespermanentenHerzschrittmachersmittransvenoesenElektrodenventrikulaer"
    ),
    t.literal("EinsetzeneinesStentsindieHerzkranzgefaesse"),
    t.literal("EinsetzeneinesStentsineineKoronararterie"),
    t.literal("EinsetzenvonbeidseitigenBrustprothesen"),
    t.literal("ElektiveHysterektomieperKaiserschnitt"),
    t.literal("Endometriumablation"),
    t.literal("Endoskopie"),
    t.literal("EndoskopiederGallenwege"),
    t.literal("EndovaskulaereReparatureinesabdominalenAortenaneurysmas"),
    t.literal("EntbindungdurchMalstromExtraktionmitEpisiotomie"),
    t.literal("EntbindungdurchVakuumextraktionmitEpisiotomie"),
    t.literal("EntfernungderintrakraniellenLaesion"),
    t.literal("EntfernungeinerHerzschrittmacherelektrode"),
    t.literal("EntfernungeinerKnochenschraubeausdemKnochen"),
    t.literal("EntfernungeinerOvarialzyste"),
    t.literal("EntfernungeinerPlatteausdemKnochenProzedur"),
    t.literal("EntfernungeinesAkustikusneurinoms"),
    t.literal("EntfernungeinesautomatischenHerzdefibrillators"),
    t.literal("EntfernungeinesboesartigenBrusttumors"),
    t.literal("EntfernungeinesBrustimplantats"),
    t.literal("EntfernungeinesHautmolekuelsdurchExzision"),
    t.literal("EntfernungeinesHerzschrittmachers"),
    t.literal("EntfernungeinesinternenFixateurs"),
    t.literal("EntfernungvonHerzschrittmacherelektrodenmitErsatz"),
    t.literal("EntfernungvonmalignenNeubildungen"),
    t.literal("EntfernungvonWeichgewebe"),
    t.literal("EntlastungbeideQuervainsTenosynovitisderHand"),
    t.literal("EntnahmevonperipherenBlutstammzellen"),
    t.literal("EntnahmevonSpendermaterial"),
    t.literal("EnukleationdesAugapfels"),
    t.literal("EroeffnungdesBrustkorbs"),
    t.literal("ErsatzderMitralklappe"),
    t.literal("ErsatzderMitralklappemitGewebetransplantat"),
    t.literal("ErsatzderTrikuspidalklappemitGewebetransplantat"),
    t.literal("ErsatzeinerAortenklappe"),
    t.literal("ErsatzeineselektronischenHerzgeraetsImpulsgebers"),
    t.literal("ErsatzeinesHerzschrittmachers"),
    t.literal("ErsatzeinesKardioverterDefibrillators"),
    t.literal("ErsatzeinesZweikammerImpulsgenerators"),
    t.literal("ErstimplantationeinerElektrodeindenVorhofdesHerzens"),
    t.literal("ErstimplantationeinerElektrodeinHerzvorhofundHerzkammer"),
    t.literal("ErstimplantationeinesEinkammerHerzgeraets"),
    t.literal("ErstimplantationeinesZweikammerHerzgeraets"),
    t.literal("ErzwungenemanuelleDilatationdesAnus"),
    t.literal("EvakuierungdesintrazerebralenHaematoms"),
    t.literal("EvakuierungdessubduralenHaematoms"),
    t.literal("ExplorativeLaparotomie"),
    t.literal("ExtrakapsulaereExtraktion"),
    t.literal("ExtrakapsulaereExtraktionderLinse"),
    t.literal("ExtraktionderAugenlinse"),
    t.literal("ExtraktionvonKatarakt"),
    t.literal("ExtraperitonealerKaiserschnitt"),
    t.literal("Extremitaetenbetrieb"),
    t.literal("Exzision"),
    t.literal("ExzisionderGebaermutterundderunterstuetzendenStrukturen"),
    t.literal("ExzisionderLaminaderHalswirbelsaeule"),
    t.literal("ExzisionderLaminaeinesWirbels"),
    t.literal("ExzisioneinerakzessorischenGebaermutter"),
    t.literal("ExzisioneinerHautwucherung"),
    t.literal("ExzisioneinerHautzyste"),
    t.literal("ExzisioneinerKrampfaderderunterenExtremitaet"),
    t.literal("ExzisioneinerLaesionderHaut"),
    t.literal("ExzisioneinerMagenstruktur"),
    t.literal("ExzisioneinerTalgdruesenzyste"),
    t.literal("ExzisioneinesBallenzeh"),
    t.literal("ExzisioneinesboesartigenHauttumors"),
    t.literal("ExzisioneinesHandgelenksganglions"),
    t.literal("ExzisioneinesKniegelenksganglions"),
    t.literal("ExzisioneinesLipoms"),
    t.literal("ExzisioneinesNagelkeils"),
    t.literal("ExzisioneinesNeoplasmas"),
    t.literal("ExzisioneinesPapilloms"),
    t.literal("ExzisioneinesTumorsderHirnhaeute"),
    t.literal("ExzisionvonBrustgewebe"),
    t.literal("ExzisionvonEndometriumSynechien"),
    t.literal("Exzisionsbiopsie"),
    t.literal("ExzisionsbiopsieeinerHautlaesion"),
    t.literal("FemoralpoplitealeArterienBypassTransplantationmitVene"),
    t.literal("FettabsaugungdesUnterhautgewebes"),
    t.literal("FixierungdeslinkenHodens"),
    t.literal("FixierungdesrechtenHodens"),
    t.literal("FusionderhinterenLendenwirbelsaeule"),
    t.literal("Gastrostomie"),
    t.literal("Geburtshilfe"),
    t.literal("GeburtshilflicheHysterotomie"),
    t.literal("Gefaesschirurgie"),
    t.literal("HaematopoetischeStammzelltransplantation"),
    t.literal("HammerzehenOperation"),
    t.literal("Haemorrhoidektomie"),
    t.literal("Harnblasenexzision"),
    t.literal("HartmannOperationRektumresektion"),
    t.literal("Hauttransplantation"),
    t.literal("HemiFontanOperation"),
    t.literal("Hernienreparatur"),
    t.literal("Herzklappenersatz"),
    t.literal("HerzklappenersatzProthese"),
    t.literal("HerzKreislaufChirurgie"),
    t.literal("HerzLungenTransplantationmitEmpfaengerKardiektomiePneumonektomie"),
    t.literal("Herztransplantation"),
    t.literal("HochzangengeburtmitEpisiotomie"),
    t.literal("Hodenexzision"),
    t.literal("Hornhauttransplantation"),
    t.literal("Hueftgelenksrekonstruktion"),
    t.literal("Hysterektomie"),
    t.literal("HysterektomieinderSchwangerschaft"),
    t.literal("HysterektomieperKaiserschnitt"),
    t.literal("HysterektomieundFoetusentfernung"),
    t.literal("HysterotomiebeiretinierterPlazenta"),
    t.literal("HysterotomiemitEntfernungeinesFremdkoerpers"),
    t.literal("HysterotomiemitEntfernungeineshydatidiformenMuttermals"),
    t.literal("ImplantationeinerAortenklappenprotheseodereinessynthetischenGeraets"),
    t.literal("ImplantationeinerCochleaElektrode"),
    t.literal("ImplantationeinerCochleaProthese"),
    t.literal("ImplantationeinerCochleaProtheseeinkanalig"),
    t.literal("ImplantationeinerCochleaProtheseElektrodeundEmpfaenger"),
    t.literal("ImplantationeinerCochleaProthesemehrereKanaele"),
    t.literal("ImplantationeinerHerzklappemitGewebetransplantat"),
    t.literal("ImplantationeinerHerzklappenprotheseodereinesKunststoffgeraets"),
    t.literal("ImplantationeinerintracochleaerenProthese"),
    t.literal("ImplantationeinerintraokularenHinterkammerlinse"),
    t.literal("ImplantationeinerMitralklappenprotheseodereinessynthetischenGeraets"),
    t.literal("ImplantationeinerPenisprothese"),
    t.literal("ImplantationeinerprothetischenIntraokularlinse"),
    t.literal("ImplantationeinerPulmonalklappenprotheseodereinessynthetischenGeraets"),
    t.literal("ImplantationeinerTrikuspidalklappenprotheseodereinessynthetischenGeraets"),
    t.literal("ImplantationeinesautomatischenHerzdefibrillators"),
    t.literal("ImplantationeinesautomatischenKardiovertersDefibrillatorsGesamtsystem"),
    t.literal("ImplantationeinesHerzschrittmachers"),
    t.literal("ImplantationeinesHerzunterstuetzungssystems"),
    t.literal("ImplantationeinesinternenHerzdefibrillators"),
    t.literal("ImplantationeinesintravenoesenZweikammerDauerschrittmachers"),
    t.literal("ImplantationeinesKardioverterDefibrillatorsmitdreiElektrodenleitungen"),
    t.literal("ImplantationeinesKardioverterDefibrillatorsmiteinerElektrodenleitung"),
    t.literal("ImplantationeinesKardioverterDefibrillatorsmitzweiElektrodenleitungen"),
    t.literal("ImplantationeinesSchirmsindieVenacava"),
    t.literal("ImplantationindasHerzKreislaufSystem"),
    t.literal("ImplantationvonBaffleatrialoderinteratrial"),
    t.literal(
        "InduzierterSchwangerschaftsabbruchnachintraamniotischerInjektionmitHysterotomie"
    ),
    t.literal("InteratrialeTranspositiondesvenoesenRueckflusses"),
    t.literal("InterneFixationmitSchraube"),
    t.literal("InterneFixationmittelsPlatte"),
    t.literal("InterneFixierungmitKlammer"),
    t.literal("InterneSkelettFixierung"),
    t.literal("IntestinalerBypassbeimorbiderAdipositas"),
    t.literal("IntrakapsulaereExtraktionderLinse"),
    t.literal("IntrakapsulaereKataraktextraktion"),
    t.literal("IntrakapsulaereKataraktextraktionundEinsetzeneinerintraokularenLinse"),
    t.literal("IntrakavitaereBrachytherapie"),
    t.literal("InzisionderGallenblase"),
    t.literal("InzisionderLuftroehre"),
    t.literal("InzisionUNDDrainage"),
    t.literal("InzisionundDrainageeinerWunde"),
    t.literal("InzisionundDrainageeinesAbszesses"),
    t.literal("Inzisionsbiopsie"),
    t.literal("InzisionsbiopsieeinerBrustmasse"),
    t.literal("Kaiserschnitt"),
    t.literal("KardiopulmonaleBypassOperation"),
    t.literal("Kardioversion"),
    t.literal("Karotisendarteriektomie"),
    t.literal("KataraktextraktionundEinsetzeneinerintraokularenLinse"),
    t.literal("KatheterablationvonHerzgewebe"),
    t.literal("KatheterisierungdeslinkenundrechtenHerzensmitTransplantat"),
    t.literal("KauterisationderinnerenNase"),
    t.literal("KauterisationderNasenmuschel"),
    t.literal("KauterisationeinerWarze"),
    t.literal("KeilentfernungderLunge"),
    t.literal("Keilresektion"),
    t.literal("KieferundKiefergelenksoperationen"),
    t.literal("KlassischerKaiserschnitt"),
    t.literal("Klitoridektomie"),
    t.literal("Knieendoprothetik"),
    t.literal("Kniegelenksoperation"),
    t.literal("Kolektomie"),
    t.literal("KolonoskopischePolypektomie"),
    t.literal("Kolostomie"),
    t.literal("KolpoperineorrhaphienachEntbindung"),
    t.literal("KolporrhaphiezurReparaturderHarnroehre"),
    t.literal("KombinierteanteroposterioreKolporrhaphie"),
    t.literal("KompletteexterneHaemorrhoidektomie"),
    t.literal("KompletteZystektomie"),
    t.literal("KonstruktioneinesConduitsrechterVorhofzumTruncuspulmonalis"),
    t.literal(
        "KonstruktioneinesTunnelsvonderlinkenHerzkammerzurAortamiteinemConduitvonderrechtenHerzkammerzurPulmonalarterie"
    ),
    t.literal("KonusbiopsiedesGebaermutterhalses"),
    t.literal("Koronarangioplastie"),
    t.literal("KoronararterienBypassmitautogenemTransplantatdreiTransplantate"),
    t.literal("KoronararterienBypassmitautogenemTransplantatvierTransplantate"),
    t.literal("KoronararterienBypassTransplantationxdrei"),
    t.literal("KoronararterienBypassTransplantationxfuenf"),
    t.literal("KoronararterienBypassTransplantationxzwei"),
    t.literal("KoronararterienBypassTransplantationxvier"),
    t.literal("KorrekturderAtresiedesaeusserenGehoergangs"),
    t.literal("KorrektureinerangeborenenkardiovaskulaerenDeformitaet"),
    t.literal("KorrektureinesVentrikelseptumdefekts"),
    t.literal("KosmetischeChirurgie"),
    t.literal("Kraniotomie"),
    t.literal("KryoablationOperationbeiHerzrhythmusstoerungen"),
    t.literal("LaminaexzisionanderLendenwirbelsaeulezurDekompressiondesRueckenmarks"),
    t.literal("LaminotomiezurDekompressionundExploration"),
    t.literal("LangenbeckOperationGaumenspaltreparatur"),
    t.literal("LaparoskopischeAppendektomie"),
    t.literal("LaparoskopischeCholezystektomie"),
    t.literal("LaparoskopischeCholezystektomiemitErkundungdesDuctuscommunis"),
    t.literal("LaparoskopischeHysterektomie"),
    t.literal("LaparoskopischeNissenFundoplikationmitabdominalemZugang"),
    t.literal("LaparoskopischeReparaturvonLeistenbruch"),
    t.literal("Laparotomie"),
    t.literal("Laryngektomie"),
    t.literal("LaserassistierteInsituKeratomileusis"),
    t.literal("LaserassistiertesubepithelialeKeratomileusis"),
    t.literal("Laseriridotomie"),
    t.literal("LaserPhotokoagulationanderNetzhaut"),
    t.literal("Lasertrabekuloplastik"),
    t.literal("Leberexzision"),
    t.literal("Lebertransplantation"),
    t.literal("LeftGlennShuntVerfahren"),
    t.literal("LemesurierOperationLippenspaltenreparatur"),
    t.literal("LigaturderKrampfaderderunterenExtremitaet"),
    t.literal("LigaturderlangenVenasaphenamagna"),
    t.literal("LigaturdesEileiters"),
    t.literal("Lithotripsie"),
    t.literal("Lobektomie"),
    t.literal("LobektomiederLunge"),
    t.literal("LokaleExzision"),
    t.literal("LokaleExzisionvonHautundSubkutangewebe"),
    t.literal("LumbaleWirbelsaeulenfusion"),
    t.literal("LumpektomiederBrust"),
    t.literal("Lungentransplantation"),
    t.literal("Lungentumorentfernung"),
    t.literal("MacdonaldszervikaleCerclage"),
    t.literal("MagenbypassmitkurzschenkligerRouxenYGastroenterostomie"),
    t.literal("Mastoidektomie"),
    t.literal("MechanischeVitrektomiemitParsPlanaAnsatz"),
    t.literal("MechanischprothetischerAortenklappenersatz"),
    t.literal("MechanischprothetischerMitralklappenersatz"),
    t.literal("Mitralvalvuloplastie"),
    t.literal("MittlereZangengeburtmitEpisiotomie"),
    t.literal("ModifizierteradikaleMastektomiederlinkenBrust"),
    t.literal("ModifizierteradikaleMastektomiederrechtenBrust"),
    t.literal("Myokardrevaskularisation"),
    t.literal("Myringoplastik"),
    t.literal("MyringotomieundEinsetzeneinesKurzzeitPaukenroehrchens"),
    t.literal("MyringotomieundEinsetzeneinesLangzeitbeatmungsschlauches"),
    t.literal("MyringotomieundEinsetzeneinesPaukenroehrchens"),
    t.literal("MyringotomieundEinsetzeneinesTTubus"),
    t.literal("NasalePolypektomie"),
    t.literal("Nasenscheidewandplastik"),
    t.literal("NasenscheidewandplastikmitTransplantat"),
    t.literal("NeuroplastikundTranspositiondesNervusmedianusamKarpaltunnel"),
    t.literal("NichtobstetischeumlaufendeNahtdesMuttermundes"),
    t.literal("NiedrigeZangengeburtmitEpisiotomie"),
    t.literal("Nierenexzision"),
    t.literal("Nierentransplantation"),
    t.literal("NorwoodTypOperation"),
    t.literal("NotfallAppendektomie"),
    t.literal("NotfallKaiserschnittimoberenSegment"),
    t.literal("NotfallKaiserschnittimunterenSegment"),
    t.literal("NotfallKaiserschnittHysterektomie"),
    t.literal("NotfallKoronararterienBypassTransplantation"),
    t.literal("OffeneAblationdesatrioventrikulaerenKnotens"),
    t.literal("OffeneAkromioplastikzurDekompressionderRotatorenmanschette"),
    t.literal("OffeneBiopsie"),
    t.literal("OffeneRepositioneinerFraktur"),
    t.literal("OffeneRepositioneinerFrakturmitinternerFixierung"),
    t.literal("Oophorektomie"),
    t.literal("OperationamakzessorischenSinus"),
    t.literal("OperationamAugenlid"),
    t.literal("OperationamBronchus"),
    t.literal("OperationamGelenk"),
    t.literal("OperationamHals"),
    t.literal("OperationamHarnsystem"),
    t.literal("OperationamHerzen"),
    t.literal("OperationamKnochen"),
    t.literal("OperationamNervensystem"),
    t.literal("OperationamOhr"),
    t.literal("OperationamRetroperitoneum"),
    t.literal("OperationanderBauchregion"),
    t.literal("OperationanderBrust"),
    t.literal("OperationanderHerzklappe"),
    t.literal("OperationanderLuftroehre"),
    t.literal("OperationanderLunge"),
    t.literal("OperationanderLymphstruktur"),
    t.literal("OperationanderMilz"),
    t.literal("OperationanderNasenscheidewand"),
    t.literal("OperationanHerzundPerikard"),
    t.literal("OperationanweiblichenGeschlechtsorganen"),
    t.literal("OperationaufderHaut"),
    t.literal("OperationaufMediastinum"),
    t.literal("OperationdeszentralenaortopulmonalenShunts"),
    t.literal("OperationeinerGanglionzyste"),
    t.literal("OperationzurGeburtserleichterung"),
    t.literal("OperationsverfahrenammaennlichenUrogenitalsystem"),
    t.literal("OperationsverfahrenamVerdauungssystem"),
    t.literal("OperationsverfahrenanderWirbelsaeulenstruktur"),
    t.literal("OperativerEingriffamFuss"),
    t.literal("OperativerEingriffamKnie"),
    t.literal("OperativerEingriffanderHand"),
    t.literal("OperativerEingriffanderSchulterregion"),
    t.literal("Orchidopexie"),
    t.literal("OesophagogastraleFundoplastik"),
    t.literal("Osteotomie"),
    t.literal("Pankreatektomie"),
    t.literal("Pankreatikoduodenektomie"),
    t.literal("Parathyreoidektomie"),
    t.literal("Parotidektomie"),
    t.literal("PartielleExzision"),
    t.literal("PartielleHysterektomie"),
    t.literal("PartielleKolektomiemitAnastomose"),
    t.literal("PartielleMastektomie"),
    t.literal("PartielleNephrektomie"),
    t.literal("PenetrierendeKeratoplastik"),
    t.literal("PerkutaneBallonvalvuloplastiederAortenklappe"),
    t.literal("PerkutaneDiskektomie"),
    t.literal("PerkutaneEinlageeinerNephrostomieSonde"),
    t.literal("PerkutaneEinlageeinesintravaskulaerenFilters"),
    t.literal("PerkutaneendoskopischeEinlageeinerGastrostomiesonde"),
    t.literal("PerkutaneKoronarintervention"),
    t.literal("PerkutanetransluminaleAblationdesatrioventrikulaerenKnotens"),
    t.literal("PerkutanetransluminaleBallonangioplastie"),
    t.literal(
        "PerkutanetransluminaleBallonangioplastiederAortenisthmusstenosemitStentimplantation"
    ),
    t.literal(
        "PerkutanetransluminaleBallonangioplastiemitEinfuehrungeinesStentsindieKoronararterie"
    ),
    t.literal("PerkutanetransluminaleKoronarangioplastie"),
    t.literal("PerkutanetransluminaleKoronarangioplastiemitRotoablationEinzelgefaess"),
    t.literal("PerkutanerErsatzeinerAortenklappeunterfluoroskopischerKontrolle"),
    t.literal("PhotorefraktiveKeratektomie"),
    t.literal("PilonidalsinusOperation"),
    t.literal("PlastischeOperationanderBrust"),
    t.literal("PlastischeReparaturderAortenklappe"),
    t.literal("PlastischeReparaturderMitralklappe"),
    t.literal("PlastischeReparatureinerSehne"),
    t.literal("PrimaereExzisionderzervikalenBandscheibe"),
    t.literal("PrimaerelumbaleDiskektomie"),
    t.literal(
        "PrimaereoffeneRepositionundinterneFixationeinerproximalenFemurfrakturmitSchraubeNagelundPlattengeraet"
    ),
    t.literal("PrimaereReparatureinerFemoralhernie"),
    t.literal("PrimaereReparatureinerGaumenspalte"),
    t.literal("PrimaereReparatureinerLeistenhernie"),
    t.literal("Prostatektomie"),
    t.literal("ProthetischeEndoprothetikderHuefte"),
    t.literal("ProthetischerErsatzeinerHerzklappe"),
    t.literal("PubiotomiezurGeburtshilfe"),
    t.literal("Punktionsverfahren"),
    t.literal("QuadrantektomiederBrust"),
    t.literal("RadialeKeratotomie"),
    t.literal("RadikaleabdominaleHysterektomie"),
    t.literal("RadikaleExzision"),
    t.literal("RadikaleExzisionmitLymphknotendissektion"),
    t.literal("RadikaleMastektomie"),
    t.literal("RadikaleMastektomiederlinkenBrust"),
    t.literal("RadikaleMastektomiederrechtenBrust"),
    t.literal("RadikaleperinealeProstatektomie"),
    t.literal("RadikaleProstatektomie"),
    t.literal("RadikaleretropubischeProstatektomie"),
    t.literal("RadiofrequenzAblationsoperationbeiHerzrhythmusstoerungen"),
    t.literal("RadiomarkierteAntikoerperTherapie"),
    t.literal("RadionuklidTherapiebeiHyperthyreose"),
    t.literal("ReduktiondergeschlossenenFraktur"),
    t.literal("ReduktionoffenerFrakturen"),
    t.literal("Reduktionsmammoplastik"),
    t.literal("Reexzision"),
    t.literal("RekonstruktionderBrust"),
    t.literal("RekonstruktionderNase"),
    t.literal("RekonstruktiondesvorderenKreuzbandesamKniegelenk"),
    t.literal("Rekonstruktionsverfahren"),
    t.literal("ReparativerVerschluss"),
    t.literal("ReparaturderAortenklappemitGewebetransplantat"),
    t.literal("ReparaturderGaumenspalte"),
    t.literal("ReparaturdergerissenenSupraspinatussehneakut"),
    t.literal("ReparaturdergerissenenSupraspinatussehnechronisch"),
    t.literal("ReparaturderMitralklappe"),
    t.literal("ReparaturderMitralklappeunterfluoroskopischerKontrolle"),
    t.literal("ReparaturdermuskulotendinoesenManschettederSchulter"),
    t.literal("ReparaturderNetzhautbeiNetzhautabloesung"),
    t.literal("ReparaturderRotatorenmanschettedurchNaht"),
    t.literal("ReparaturderSpaltedeshartenGaumens"),
    t.literal("ReparaturderTrikuspidalklappe"),
    t.literal("ReparaturdesAneurysmasderBauchaorta"),
    t.literal("ReparaturdesDefektsderatrioventrikulaerenScheidewand"),
    t.literal(
        "ReparaturdesinfrarenalenabdominalenAortenaneurysmasmitEinfuehrungeinesendovaskulaerenStents"
    ),
    t.literal("ReparaturdesMittelohrs"),
    t.literal("ReparaturdurchNageln"),
    t.literal("ReparatureinerAortenkoarktation"),
    t.literal("ReparatureinerbeidseitigenLippenspalte"),
    t.literal("ReparatureinerGaumenspalte"),
    t.literal("ReparatureinergleitendenLeistenhernie"),
    t.literal("ReparatureinerLippenspalte"),
    t.literal("ReparatureinerparaoesophagealenZwerchfellhernie"),
    t.literal("ReparatureinerpartiellenanomalenpulmonalvenoesenVerbindung"),
    t.literal("ReparatureinertotalenanomalenpulmonalenVenenverbindung"),
    t.literal("ReparatureinerventralenHernie"),
    t.literal("ReparatureinesabdominalenAortenaneurysmasmitEinsetzeneinesStents"),
    t.literal("ReparatureinesAneurysmasderBauchaortamitTransplantat"),
    t.literal("ReparatureinesimplantiertenaortalenparavalvulaerenLecks"),
    t.literal("ReparatureineskomplettenSchultermanschettenausrisseschronisch"),
    t.literal("ReparatureinesNabelbruchs"),
    t.literal("ReparatureinesreponierbarenLeistenbruchs"),
    t.literal("ReparatureinesrezidivierendenLeistenbruchs"),
    t.literal("ReparatureinesVentrikelseptumdefektsmitProthese"),
    t.literal("ReparatureinesVorhofseptumdefektesmitProtheseingeschlossenerHerztechnik"),
    t.literal("ReparaturvonLeistenbruch"),
    t.literal("ResektioneinesNeoplasmasamHerzen"),
    t.literal("ResektioneinesPolypen"),
    t.literal("RhinocheiloplastikbeiLippenspalte"),
    t.literal("Rhinoseptoplastik"),
    t.literal("RightGlennShuntVerfahren"),
    t.literal("RouxenYGastrojejunostomie"),
    t.literal("SalpingoOophorektomie"),
    t.literal("SanoVerfahren"),
    t.literal("Schilddruesenentfernung"),
    t.literal("Scraping"),
    t.literal("SegmentaleExzisionundLigatur"),
    t.literal("ShaveBiopsie"),
    t.literal("ShirodkarszervikaleCerclage"),
    t.literal("SkleraleKnickung"),
    t.literal("SofortigeReparatureinergeburtshilflichenRisswunde"),
    t.literal("SofortigeReparatureinerkleinengeburtshilflichenRisswunde"),
    t.literal("SofortigeReparatureinerRisswundederGebaermutteroderdesGebaermutterhalses"),
    t.literal("SofortigeReparatureinerRisswundederVaginaunddesBeckenbodens"),
    t.literal(
        "SofortigeReparatureinesgeburtshilflichenRissesdesDammesunddesSchliessmuskelsdesAnus"
    ),
    t.literal("Splenektomie"),
    t.literal("SpuelungdesAntrumsmaxillaris"),
    t.literal("StagingOperationmitInzisionExplorationundBiopsie"),
    t.literal("StandardBeschneidung"),
    t.literal("Stanzbiopsie"),
    t.literal("Stapedektomie"),
    t.literal("StrabismusChirurgie"),
    t.literal("StrippenundLigation"),
    t.literal("StrippingvonVenen"),
    t.literal("SubkutaneMastektomie"),
    t.literal("SubmukoeseResektionderNasenscheidewand"),
    t.literal("SubtotaleabdominaleHysterektomie"),
    t.literal("SubtotaleGastrektomie"),
    t.literal("SubtotaleHysterektomienachKaiserschnittentbindung"),
    t.literal("SubtotaleThyreoidektomie"),
    t.literal("SuprapubischeZystostomie"),
    t.literal("SuprazervikaleHysterektomie"),
    t.literal("TeilresektiondesDickdarms"),
    t.literal("TherapeutischearthroskopischeOperationenanderKniegelenkshoehle"),
    t.literal("TherapeutischerSchwangerschaftsabbruchdurchHysterotomie"),
    t.literal("ThompsonOperationReparaturderLippenspalte"),
    t.literal("ThromboendarterektomiemitTransplantatderHalsschlagaderdurchHalsschnitt"),
    t.literal("Tonsillektomie"),
    t.literal("TonsillektomieundAdenoidektomie"),
    t.literal("TotaleabdominaleHysterektomie"),
    t.literal("TotaleabdominaleHysterektomiemitbeidseitigerSalpingoOophorektomie"),
    t.literal("TotaleAvulsionderNagelplatte"),
    t.literal("TotaleHysterektomiemitEntfernungbeiderEileiterundEierstoecke"),
    t.literal("TotalekavopulmonaleVerbindungmitlateralemVorhoftunnel"),
    t.literal("TotaleKolektomie"),
    t.literal("TotaleLobektomiederLunge"),
    t.literal("TotaleNephrektomie"),
    t.literal("TotalePneumonektomie"),
    t.literal("TotaleSplenektomie"),
    t.literal("TotaleThyreoidektomie"),
    t.literal("TotalerErsatzdeslinkenKniegelenks"),
    t.literal("TotalerErsatzdesrechtenKniegelenks"),
    t.literal("TotalerKnieersatz"),
    t.literal("TotalerprothetischerErsatzdesHueftgelenksmitZement"),
    t.literal("TotalerprothetischerErsatzdesKniegelenksmitZement"),
    t.literal("TotalerSchulterersatz"),
    t.literal("TotalersatzderHuefte"),
    t.literal("TotalersatzdesEllenbogens"),
    t.literal("Trabekulektomieabexterno"),
    t.literal("TransjugulaererintrahepatischerportosystemischerShunt"),
    t.literal("TransplantationderBauchspeicheldruese"),
    t.literal("TransplantationdeskardiovaskulaerenSystems"),
    t.literal("TransplantationeinerAortenklappenprotheseuebereinentransapikalenZugang"),
    t.literal("TransplantationfesterOrgane"),
    t.literal("TransplantationvonDuenndarm"),
    t.literal("TransurethraleProstatektomie"),
    t.literal("Trepanationsbiopsie"),
    t.literal("Trimmen"),
    t.literal("Tympanomastoidektomie"),
    t.literal("Tympanotomie"),
    t.literal("UeberarbeitungdesHueftersatzes"),
    t.literal("Ureteroileostomie"),
    t.literal("VaginaleHysterektomie"),
    t.literal("VaginalerKaiserschnitt"),
    t.literal("ValvuloplastiederAortenklappe"),
    t.literal("Varizenoperation"),
    t.literal("Varizenstripping"),
    t.literal("Vasektomie"),
    t.literal("VentrikuloperitonealerShunt"),
    t.literal("VerfahrenamBlutgefaess"),
    t.literal("VerfahrenamDarm"),
    t.literal("VerfahrenamKopfundoderHals"),
    t.literal("VerfahrenamOhrundverwandtenStrukturen"),
    t.literal("VerfahrenamweiblichenGenitalsystem"),
    t.literal("VerfahrenanderExtremitaet"),
    t.literal("VerfahrenaufPleura"),
    t.literal("VerfahrenzuFuss"),
    t.literal("VeroedungvonHaemorrhoidendurchSklerosierung"),
    t.literal("VerschlussdesDuctusarteriosusmitClip"),
    t.literal("VerschlussdesDuctusarteriosusmittelsEmbolisationsspule"),
    t.literal("VerschlussdesoffenenForamenovale"),
    t.literal("VerschlussdesoffenenForamenovaleunterDurchleuchtung"),
    t.literal("VerschlussdesVentrikelseptumdefektsunterDurchleuchtungssteuerung"),
    t.literal("VerschlussdesVorhofseptumdefektsunterfluoroskopischerKontrolle"),
    t.literal("VerschlussdurchNaht"),
    t.literal("VerschlusseinervesikouterinenFistelmitHysterektomie"),
    t.literal("VerschlusseinesVorhofseptumdefekts"),
    t.literal("Vitrektomie"),
    t.literal("VollstaendigeExzisiondesOrgans"),
    t.literal(
        "VollstaendigetransurethraleResektionderProstataeinschliesslichKontrollederNachblutung"
    ),
    t.literal("VorhofinversionsoperationmitVorhofwand"),
    t.literal("WahlweiserKaiserschnitt"),
    t.literal("WahlweiserKaiserschnittimoberenSegment"),
    t.literal("WahlweiserKaiserschnittimunterenSegment"),
    t.literal("WardillOperationGaumenspaltreparatur"),
    t.literal("WertheimMeigsabdominaleHysterektomie"),
    t.literal("WertheimOperation"),
    t.literal("WiederherstellungderKniescheibe"),
    t.literal("WiederherstellungdesOberschenkelkopfes"),
    t.literal("WirbelsaeulenArthrodese"),
    t.literal("YttriumAluminiumGranatLaserKapsulotomiederLinse"),
    t.literal("ZangenextraktioneinerLinse"),
    t.literal("ZervikaleArthrodese"),
    t.literal("ZervikaleArthrodeseinanteriorerTechnik"),
    t.literal("Zirkumzision")
]);

export const NFDProcedureGermanArray: string[] = [
    "AbdominaleHysterektomie",
    "AbdominaleHysterektomiemitErhaltungderEierstoecke",
    "AbdominaleHysterektomiemitKolpoUrethrozystopexieTypMarshallMarchettiKrantz",
    "AbdominaleHysterektomieundlinkeSalpingoOophorektomie",
    "AbdominaleHysterektomieundrechteSalpingoOophorektomie",
    "AbdominaleHysterokolpektomie",
    "AbdominalgeburtbeiSchulterdystokie",
    "Abdominoplastik",
    "AblationdesatrioventrikulaerenKnotens",
    "AblationsoperationbeiHerzrhythmusstoerungen",
    "Adenoidexzision",
    "AmniotomiebeiEntbindung",
    "Amputation",
    "AmputationderunterenExtremitaet",
    "AmputationdesBeinesdurchSchienundWadenbein",
    "AmputationeinerZehe",
    "AmputationoberhalbdesKnies",
    "AmputationvonFingernausserDaumen",
    "AnastomosederArteriapulmonalissubclaviamittelsBlalockTaussigOperation",
    "AngioplastieeinerVene",
    "AngioplastieeinesBlutgefaesses",
    "AnlegeneinerHerzschrittmachertascheanneuerStelleimsubkutanenGewebe",
    "AnlegeneinerIleostomie",
    "AnlegeneinesaortofemoralenShunts",
    "AnlegeneinesConduitszwischenrechterHerzkammerundPulmonalarterie",
    "AnterioreKolporrhaphie",
    "AortenaneurysmaReparatur",
    "AortopulmonaleRekonstruktionmitrechtsventrikulaeremzupulmonalemarteriellemklappenlosemConduit",
    "ArterielleSwitchOperation",
    "Arthrodese",
    "ArthrodeseinanteriorerinterkorporellerTechnikderHalswirbelsaeuleunterhalbCmitKnochentransplantat",
    "ArthroskopiedesKniesmitmedialerundlateralerMeniskektomie",
    "ArthroskopiedesKniesmitMeniskusreparatur",
    "ArthroskopischunterstuetztevordereKreuzbandplastik",
    "ArthroskopischeMeniskektomie",
    "ArthroskopischepartiellelateraleMeniskektomie",
    "ArthroskopischepartiellemedialeMeniskusentfernung",
    "ArthroskopischetotalemedialeMeniskektomie",
    "AspirationskuerettagederGebaermutternachderGeburt",
    "AspirationskuerettagederGebaermutternachEntbindung",
    "Atherektomie",
    "AtherektomiemitdemRotationsschneider",
    "AtherektomiemitLaser",
    "AugenuntersuchungundBeurteilung",
    "Augmentationsmammoplastik",
    "AustauscheinerintraokularenLinse",
    "AvulsioneinerLaesionderZervixuteri",
    "BariatrischesoperativesVerfahren",
    "BetriebanderMembran",
    "BidirektionaleGlennShuntOperationderlinkenoberenHohlvene",
    "BidirektionalerGlennShuntfuerdierechteobereHohlvene",
    "BilateraleEileiterunterbindung",
    "BilateraleLeistenhernienreparatur",
    "BilateraleMammareduktionsplastik",
    "BilateraleSalpingektomiemitOophorektomie",
    "BilateralesegmentaleVasektomieundLigatur",
    "BiologischerPulmonalklappenersatz",
    "Biopsie",
    "Blinddarmentfernung",
    "BlockdissektionzervikalerLymphknoten",
    "Bronchoskopie",
    "BypassGastroenterostomie",
    "BypassTransplantatderFemoralPoplitealArterie",
    "BypassTransplantatderKoronararterie",
    "CerclagedesGebaermutterhalses",
    "CerclagedesGebaermutterhalsesinderSchwangerschaftuebereinenvaginalenZugang",
    "CerclagedesGebaermutterhalseswaehrendderSchwangerschaftdurchabdominalenZugang",
    "ChirurgischeBiopsie",
    "ChirurgischeBiopsiederBrust",
    "ChirurgischerEingriff",
    "ChirurgischerEingriffamAuge",
    "ChirurgischerEingriffamThorax",
    "ChirurgischerEingriffanderBrustwand",
    "Cholezystektomie",
    "CholezystektomiemitExplorationdesDuctuscommunis",
    "ChondrektomiederWirbelsaeule",
    "Coarctationsangioplastie",
    "Dammschnitt",
    "DamusStanselKayeOperation",
    "Darmspiegelung",
    "DebridementvonGeschwueren",
    "DekompressiondesNmedianus",
    "DenervierungderWirbelsaeulenfacettengelenke",
    "Dermabrasion",
    "DiagnostischeDilatationundKuerettagederGebaermutter",
    "DilatationderSpeiseroehre",
    "DilatationdesGallenganges",
    "DilatationdesGebaermutterhalseszurEntbindung",
    "DilatationundKuerettage",
    "DilatationundKuerettagederGebaermutter",
    "DilatationundKuerettagederGebaermutternachderEntbindung",
    "DilatationInzisiondesGebaermutterhalsesGeburtshilfe",
    "DiskektomiebeiBandscheibenvorfallNucleuspulposus",
    "Dissektionsverfahren",
    "DoppelteLungentransplantation",
    "DorranceOperationPushbackOperationbeiGaumenspalte",
    "Duenndarmexzision",
    "EinfacheExzisiondesLeistenbruchsacks",
    "EinfacheLigaturvonHaemorrhoiden",
    "EinfacheMastektomie",
    "EinfuehrungeinesHerzschrittmachersystemsueberdieVene",
    "EinfuehrungkuenstlicherAtemwege",
    "EinsetzenderBrustprothese",
    "EinsetzeneinerHueftprothese",
    "EinsetzeneinespermanentenHerzschrittmachersmittransvenoesenElektrodenventrikulaer",
    "EinsetzeneinesStentsindieHerzkranzgefaesse",
    "EinsetzeneinesStentsineineKoronararterie",
    "EinsetzenvonbeidseitigenBrustprothesen",
    "ElektiveHysterektomieperKaiserschnitt",
    "Endometriumablation",
    "Endoskopie",
    "EndoskopiederGallenwege",
    "EndovaskulaereReparatureinesabdominalenAortenaneurysmas",
    "EntbindungdurchMalstromExtraktionmitEpisiotomie",
    "EntbindungdurchVakuumextraktionmitEpisiotomie",
    "EntfernungderintrakraniellenLaesion",
    "EntfernungeinerHerzschrittmacherelektrode",
    "EntfernungeinerKnochenschraubeausdemKnochen",
    "EntfernungeinerOvarialzyste",
    "EntfernungeinerPlatteausdemKnochenProzedur",
    "EntfernungeinesAkustikusneurinoms",
    "EntfernungeinesautomatischenHerzdefibrillators",
    "EntfernungeinesboesartigenBrusttumors",
    "EntfernungeinesBrustimplantats",
    "EntfernungeinesHautmolekuelsdurchExzision",
    "EntfernungeinesHerzschrittmachers",
    "EntfernungeinesinternenFixateurs",
    "EntfernungvonHerzschrittmacherelektrodenmitErsatz",
    "EntfernungvonmalignenNeubildungen",
    "EntfernungvonWeichgewebe",
    "EntlastungbeideQuervainsTenosynovitisderHand",
    "EntnahmevonperipherenBlutstammzellen",
    "EntnahmevonSpendermaterial",
    "EnukleationdesAugapfels",
    "EroeffnungdesBrustkorbs",
    "ErsatzderMitralklappe",
    "ErsatzderMitralklappemitGewebetransplantat",
    "ErsatzderTrikuspidalklappemitGewebetransplantat",
    "ErsatzeinerAortenklappe",
    "ErsatzeineselektronischenHerzgeraetsImpulsgebers",
    "ErsatzeinesHerzschrittmachers",
    "ErsatzeinesKardioverterDefibrillators",
    "ErsatzeinesZweikammerImpulsgenerators",
    "ErstimplantationeinerElektrodeindenVorhofdesHerzens",
    "ErstimplantationeinerElektrodeinHerzvorhofundHerzkammer",
    "ErstimplantationeinesEinkammerHerzgeraets",
    "ErstimplantationeinesZweikammerHerzgeraets",
    "ErzwungenemanuelleDilatationdesAnus",
    "EvakuierungdesintrazerebralenHaematoms",
    "EvakuierungdessubduralenHaematoms",
    "ExplorativeLaparotomie",
    "ExtrakapsulaereExtraktion",
    "ExtrakapsulaereExtraktionderLinse",
    "ExtraktionderAugenlinse",
    "ExtraktionvonKatarakt",
    "ExtraperitonealerKaiserschnitt",
    "Extremitaetenbetrieb",
    "Exzision",
    "ExzisionderGebaermutterundderunterstuetzendenStrukturen",
    "ExzisionderLaminaderHalswirbelsaeule",
    "ExzisionderLaminaeinesWirbels",
    "ExzisioneinerakzessorischenGebaermutter",
    "ExzisioneinerHautwucherung",
    "ExzisioneinerHautzyste",
    "ExzisioneinerKrampfaderderunterenExtremitaet",
    "ExzisioneinerLaesionderHaut",
    "ExzisioneinerMagenstruktur",
    "ExzisioneinerTalgdruesenzyste",
    "ExzisioneinesBallenzeh",
    "ExzisioneinesboesartigenHauttumors",
    "ExzisioneinesHandgelenksganglions",
    "ExzisioneinesKniegelenksganglions",
    "ExzisioneinesLipoms",
    "ExzisioneinesNagelkeils",
    "ExzisioneinesNeoplasmas",
    "ExzisioneinesPapilloms",
    "ExzisioneinesTumorsderHirnhaeute",
    "ExzisionvonBrustgewebe",
    "ExzisionvonEndometriumSynechien",
    "Exzisionsbiopsie",
    "ExzisionsbiopsieeinerHautlaesion",
    "FemoralpoplitealeArterienBypassTransplantationmitVene",
    "FettabsaugungdesUnterhautgewebes",
    "FixierungdeslinkenHodens",
    "FixierungdesrechtenHodens",
    "FusionderhinterenLendenwirbelsaeule",
    "Gastrostomie",
    "Geburtshilfe",
    "GeburtshilflicheHysterotomie",
    "Gefaesschirurgie",
    "HaematopoetischeStammzelltransplantation",
    "HammerzehenOperation",
    "Haemorrhoidektomie",
    "Harnblasenexzision",
    "HartmannOperationRektumresektion",
    "Hauttransplantation",
    "HemiFontanOperation",
    "Hernienreparatur",
    "Herzklappenersatz",
    "HerzklappenersatzProthese",
    "HerzKreislaufChirurgie",
    "HerzLungenTransplantationmitEmpfaengerKardiektomiePneumonektomie",
    "Herztransplantation",
    "HochzangengeburtmitEpisiotomie",
    "Hodenexzision",
    "Hornhauttransplantation",
    "Hueftgelenksrekonstruktion",
    "Hysterektomie",
    "HysterektomieinderSchwangerschaft",
    "HysterektomieperKaiserschnitt",
    "HysterektomieundFoetusentfernung",
    "HysterotomiebeiretinierterPlazenta",
    "HysterotomiemitEntfernungeinesFremdkoerpers",
    "HysterotomiemitEntfernungeineshydatidiformenMuttermals",
    "ImplantationeinerAortenklappenprotheseodereinessynthetischenGeraets",
    "ImplantationeinerCochleaElektrode",
    "ImplantationeinerCochleaProthese",
    "ImplantationeinerCochleaProtheseeinkanalig",
    "ImplantationeinerCochleaProtheseElektrodeundEmpfaenger",
    "ImplantationeinerCochleaProthesemehrereKanaele",
    "ImplantationeinerHerzklappemitGewebetransplantat",
    "ImplantationeinerHerzklappenprotheseodereinesKunststoffgeraets",
    "ImplantationeinerintracochleaerenProthese",
    "ImplantationeinerintraokularenHinterkammerlinse",
    "ImplantationeinerMitralklappenprotheseodereinessynthetischenGeraets",
    "ImplantationeinerPenisprothese",
    "ImplantationeinerprothetischenIntraokularlinse",
    "ImplantationeinerPulmonalklappenprotheseodereinessynthetischenGeraets",
    "ImplantationeinerTrikuspidalklappenprotheseodereinessynthetischenGeraets",
    "ImplantationeinesautomatischenHerzdefibrillators",
    "ImplantationeinesautomatischenKardiovertersDefibrillatorsGesamtsystem",
    "ImplantationeinesHerzschrittmachers",
    "ImplantationeinesHerzunterstuetzungssystems",
    "ImplantationeinesinternenHerzdefibrillators",
    "ImplantationeinesintravenoesenZweikammerDauerschrittmachers",
    "ImplantationeinesKardioverterDefibrillatorsmitdreiElektrodenleitungen",
    "ImplantationeinesKardioverterDefibrillatorsmiteinerElektrodenleitung",
    "ImplantationeinesKardioverterDefibrillatorsmitzweiElektrodenleitungen",
    "ImplantationeinesSchirmsindieVenacava",
    "ImplantationindasHerzKreislaufSystem",
    "ImplantationvonBaffleatrialoderinteratrial",
    "InduzierterSchwangerschaftsabbruchnachintraamniotischerInjektionmitHysterotomie",
    "InteratrialeTranspositiondesvenoesenRueckflusses",
    "InterneFixationmitSchraube",
    "InterneFixationmittelsPlatte",
    "InterneFixierungmitKlammer",
    "InterneSkelettFixierung",
    "IntestinalerBypassbeimorbiderAdipositas",
    "IntrakapsulaereExtraktionderLinse",
    "IntrakapsulaereKataraktextraktion",
    "IntrakapsulaereKataraktextraktionundEinsetzeneinerintraokularenLinse",
    "IntrakavitaereBrachytherapie",
    "InzisionderGallenblase",
    "InzisionderLuftroehre",
    "InzisionUNDDrainage",
    "InzisionundDrainageeinerWunde",
    "InzisionundDrainageeinesAbszesses",
    "Inzisionsbiopsie",
    "InzisionsbiopsieeinerBrustmasse",
    "Kaiserschnitt",
    "KardiopulmonaleBypassOperation",
    "Kardioversion",
    "Karotisendarteriektomie",
    "KataraktextraktionundEinsetzeneinerintraokularenLinse",
    "KatheterablationvonHerzgewebe",
    "KatheterisierungdeslinkenundrechtenHerzensmitTransplantat",
    "KauterisationderinnerenNase",
    "KauterisationderNasenmuschel",
    "KauterisationeinerWarze",
    "KeilentfernungderLunge",
    "Keilresektion",
    "KieferundKiefergelenksoperationen",
    "KlassischerKaiserschnitt",
    "Klitoridektomie",
    "Knieendoprothetik",
    "Kniegelenksoperation",
    "Kolektomie",
    "KolonoskopischePolypektomie",
    "Kolostomie",
    "KolpoperineorrhaphienachEntbindung",
    "KolporrhaphiezurReparaturderHarnroehre",
    "KombinierteanteroposterioreKolporrhaphie",
    "KompletteexterneHaemorrhoidektomie",
    "KompletteZystektomie",
    "KonstruktioneinesConduitsrechterVorhofzumTruncuspulmonalis",
    "KonstruktioneinesTunnelsvonderlinkenHerzkammerzurAortamiteinemConduitvonderrechtenHerzkammerzurPulmonalarterie",
    "KonusbiopsiedesGebaermutterhalses",
    "Koronarangioplastie",
    "KoronararterienBypassmitautogenemTransplantatdreiTransplantate",
    "KoronararterienBypassmitautogenemTransplantatvierTransplantate",
    "KoronararterienBypassTransplantationxdrei",
    "KoronararterienBypassTransplantationxfuenf",
    "KoronararterienBypassTransplantationxzwei",
    "KoronararterienBypassTransplantationxvier",
    "KorrekturderAtresiedesaeusserenGehoergangs",
    "KorrektureinerangeborenenkardiovaskulaerenDeformitaet",
    "KorrektureinesVentrikelseptumdefekts",
    "KosmetischeChirurgie",
    "Kraniotomie",
    "KryoablationOperationbeiHerzrhythmusstoerungen",
    "LaminaexzisionanderLendenwirbelsaeulezurDekompressiondesRueckenmarks",
    "LaminotomiezurDekompressionundExploration",
    "LangenbeckOperationGaumenspaltreparatur",
    "LaparoskopischeAppendektomie",
    "LaparoskopischeCholezystektomie",
    "LaparoskopischeCholezystektomiemitErkundungdesDuctuscommunis",
    "LaparoskopischeHysterektomie",
    "LaparoskopischeNissenFundoplikationmitabdominalemZugang",
    "LaparoskopischeReparaturvonLeistenbruch",
    "Laparotomie",
    "Laryngektomie",
    "LaserassistierteInsituKeratomileusis",
    "LaserassistiertesubepithelialeKeratomileusis",
    "Laseriridotomie",
    "LaserPhotokoagulationanderNetzhaut",
    "Lasertrabekuloplastik",
    "Leberexzision",
    "Lebertransplantation",
    "LeftGlennShuntVerfahren",
    "LemesurierOperationLippenspaltenreparatur",
    "LigaturderKrampfaderderunterenExtremitaet",
    "LigaturderlangenVenasaphenamagna",
    "LigaturdesEileiters",
    "Lithotripsie",
    "Lobektomie",
    "LobektomiederLunge",
    "LokaleExzision",
    "LokaleExzisionvonHautundSubkutangewebe",
    "LumbaleWirbelsaeulenfusion",
    "LumpektomiederBrust",
    "Lungentransplantation",
    "Lungentumorentfernung",
    "MacdonaldszervikaleCerclage",
    "MagenbypassmitkurzschenkligerRouxenYGastroenterostomie",
    "Mastoidektomie",
    "MechanischeVitrektomiemitParsPlanaAnsatz",
    "MechanischprothetischerAortenklappenersatz",
    "MechanischprothetischerMitralklappenersatz",
    "Mitralvalvuloplastie",
    "MittlereZangengeburtmitEpisiotomie",
    "ModifizierteradikaleMastektomiederlinkenBrust",
    "ModifizierteradikaleMastektomiederrechtenBrust",
    "Myokardrevaskularisation",
    "Myringoplastik",
    "MyringotomieundEinsetzeneinesKurzzeitPaukenroehrchens",
    "MyringotomieundEinsetzeneinesLangzeitbeatmungsschlauches",
    "MyringotomieundEinsetzeneinesPaukenroehrchens",
    "MyringotomieundEinsetzeneinesTTubus",
    "NasalePolypektomie",
    "Nasenscheidewandplastik",
    "NasenscheidewandplastikmitTransplantat",
    "NeuroplastikundTranspositiondesNervusmedianusamKarpaltunnel",
    "NichtobstetischeumlaufendeNahtdesMuttermundes",
    "NiedrigeZangengeburtmitEpisiotomie",
    "Nierenexzision",
    "Nierentransplantation",
    "NorwoodTypOperation",
    "NotfallAppendektomie",
    "NotfallKaiserschnittimoberenSegment",
    "NotfallKaiserschnittimunterenSegment",
    "NotfallKaiserschnittHysterektomie",
    "NotfallKoronararterienBypassTransplantation",
    "OffeneAblationdesatrioventrikulaerenKnotens",
    "OffeneAkromioplastikzurDekompressionderRotatorenmanschette",
    "OffeneBiopsie",
    "OffeneRepositioneinerFraktur",
    "OffeneRepositioneinerFrakturmitinternerFixierung",
    "Oophorektomie",
    "OperationamakzessorischenSinus",
    "OperationamAugenlid",
    "OperationamBronchus",
    "OperationamGelenk",
    "OperationamHals",
    "OperationamHarnsystem",
    "OperationamHerzen",
    "OperationamKnochen",
    "OperationamNervensystem",
    "OperationamOhr",
    "OperationamRetroperitoneum",
    "OperationanderBauchregion",
    "OperationanderBrust",
    "OperationanderHerzklappe",
    "OperationanderLuftroehre",
    "OperationanderLunge",
    "OperationanderLymphstruktur",
    "OperationanderMilz",
    "OperationanderNasenscheidewand",
    "OperationanHerzundPerikard",
    "OperationanweiblichenGeschlechtsorganen",
    "OperationaufderHaut",
    "OperationaufMediastinum",
    "OperationdeszentralenaortopulmonalenShunts",
    "OperationeinerGanglionzyste",
    "OperationzurGeburtserleichterung",
    "OperationsverfahrenammaennlichenUrogenitalsystem",
    "OperationsverfahrenamVerdauungssystem",
    "OperationsverfahrenanderWirbelsaeulenstruktur",
    "OperativerEingriffamFuss",
    "OperativerEingriffamKnie",
    "OperativerEingriffanderHand",
    "OperativerEingriffanderSchulterregion",
    "Orchidopexie",
    "OesophagogastraleFundoplastik",
    "Osteotomie",
    "Pankreatektomie",
    "Pankreatikoduodenektomie",
    "Parathyreoidektomie",
    "Parotidektomie",
    "PartielleExzision",
    "PartielleHysterektomie",
    "PartielleKolektomiemitAnastomose",
    "PartielleMastektomie",
    "PartielleNephrektomie",
    "PenetrierendeKeratoplastik",
    "PerkutaneBallonvalvuloplastiederAortenklappe",
    "PerkutaneDiskektomie",
    "PerkutaneEinlageeinerNephrostomieSonde",
    "PerkutaneEinlageeinesintravaskulaerenFilters",
    "PerkutaneendoskopischeEinlageeinerGastrostomiesonde",
    "PerkutaneKoronarintervention",
    "PerkutanetransluminaleAblationdesatrioventrikulaerenKnotens",
    "PerkutanetransluminaleBallonangioplastie",
    "PerkutanetransluminaleBallonangioplastiederAortenisthmusstenosemitStentimplantation",
    "PerkutanetransluminaleBallonangioplastiemitEinfuehrungeinesStentsindieKoronararterie",
    "PerkutanetransluminaleKoronarangioplastie",
    "PerkutanetransluminaleKoronarangioplastiemitRotoablationEinzelgefaess",
    "PerkutanerErsatzeinerAortenklappeunterfluoroskopischerKontrolle",
    "PhotorefraktiveKeratektomie",
    "PilonidalsinusOperation",
    "PlastischeOperationanderBrust",
    "PlastischeReparaturderAortenklappe",
    "PlastischeReparaturderMitralklappe",
    "PlastischeReparatureinerSehne",
    "PrimaereExzisionderzervikalenBandscheibe",
    "PrimaerelumbaleDiskektomie",
    "PrimaereoffeneRepositionundinterneFixationeinerproximalenFemurfrakturmitSchraubeNagelundPlattengeraet",
    "PrimaereReparatureinerFemoralhernie",
    "PrimaereReparatureinerGaumenspalte",
    "PrimaereReparatureinerLeistenhernie",
    "Prostatektomie",
    "ProthetischeEndoprothetikderHuefte",
    "ProthetischerErsatzeinerHerzklappe",
    "PubiotomiezurGeburtshilfe",
    "Punktionsverfahren",
    "QuadrantektomiederBrust",
    "RadialeKeratotomie",
    "RadikaleabdominaleHysterektomie",
    "RadikaleExzision",
    "RadikaleExzisionmitLymphknotendissektion",
    "RadikaleMastektomie",
    "RadikaleMastektomiederlinkenBrust",
    "RadikaleMastektomiederrechtenBrust",
    "RadikaleperinealeProstatektomie",
    "RadikaleProstatektomie",
    "RadikaleretropubischeProstatektomie",
    "RadiofrequenzAblationsoperationbeiHerzrhythmusstoerungen",
    "RadiomarkierteAntikoerperTherapie",
    "RadionuklidTherapiebeiHyperthyreose",
    "ReduktiondergeschlossenenFraktur",
    "ReduktionoffenerFrakturen",
    "Reduktionsmammoplastik",
    "Reexzision",
    "RekonstruktionderBrust",
    "RekonstruktionderNase",
    "RekonstruktiondesvorderenKreuzbandesamKniegelenk",
    "Rekonstruktionsverfahren",
    "ReparativerVerschluss",
    "ReparaturderAortenklappemitGewebetransplantat",
    "ReparaturderGaumenspalte",
    "ReparaturdergerissenenSupraspinatussehneakut",
    "ReparaturdergerissenenSupraspinatussehnechronisch",
    "ReparaturderMitralklappe",
    "ReparaturderMitralklappeunterfluoroskopischerKontrolle",
    "ReparaturdermuskulotendinoesenManschettederSchulter",
    "ReparaturderNetzhautbeiNetzhautabloesung",
    "ReparaturderRotatorenmanschettedurchNaht",
    "ReparaturderSpaltedeshartenGaumens",
    "ReparaturderTrikuspidalklappe",
    "ReparaturdesAneurysmasderBauchaorta",
    "ReparaturdesDefektsderatrioventrikulaerenScheidewand",
    "ReparaturdesinfrarenalenabdominalenAortenaneurysmasmitEinfuehrungeinesendovaskulaerenStents",
    "ReparaturdesMittelohrs",
    "ReparaturdurchNageln",
    "ReparatureinerAortenkoarktation",
    "ReparatureinerbeidseitigenLippenspalte",
    "ReparatureinerGaumenspalte",
    "ReparatureinergleitendenLeistenhernie",
    "ReparatureinerLippenspalte",
    "ReparatureinerparaoesophagealenZwerchfellhernie",
    "ReparatureinerpartiellenanomalenpulmonalvenoesenVerbindung",
    "ReparatureinertotalenanomalenpulmonalenVenenverbindung",
    "ReparatureinerventralenHernie",
    "ReparatureinesabdominalenAortenaneurysmasmitEinsetzeneinesStents",
    "ReparatureinesAneurysmasderBauchaortamitTransplantat",
    "ReparatureinesimplantiertenaortalenparavalvulaerenLecks",
    "ReparatureineskomplettenSchultermanschettenausrisseschronisch",
    "ReparatureinesNabelbruchs",
    "ReparatureinesreponierbarenLeistenbruchs",
    "ReparatureinesrezidivierendenLeistenbruchs",
    "ReparatureinesVentrikelseptumdefektsmitProthese",
    "ReparatureinesVorhofseptumdefektesmitProtheseingeschlossenerHerztechnik",
    "ReparaturvonLeistenbruch",
    "ResektioneinesNeoplasmasamHerzen",
    "ResektioneinesPolypen",
    "RhinocheiloplastikbeiLippenspalte",
    "Rhinoseptoplastik",
    "RightGlennShuntVerfahren",
    "RouxenYGastrojejunostomie",
    "SalpingoOophorektomie",
    "SanoVerfahren",
    "Schilddruesenentfernung",
    "Scraping",
    "SegmentaleExzisionundLigatur",
    "ShaveBiopsie",
    "ShirodkarszervikaleCerclage",
    "SkleraleKnickung",
    "SofortigeReparatureinergeburtshilflichenRisswunde",
    "SofortigeReparatureinerkleinengeburtshilflichenRisswunde",
    "SofortigeReparatureinerRisswundederGebaermutteroderdesGebaermutterhalses",
    "SofortigeReparatureinerRisswundederVaginaunddesBeckenbodens",
    "SofortigeReparatureinesgeburtshilflichenRissesdesDammesunddesSchliessmuskelsdesAnus",
    "Splenektomie",
    "SpuelungdesAntrumsmaxillaris",
    "StagingOperationmitInzisionExplorationundBiopsie",
    "StandardBeschneidung",
    "Stanzbiopsie",
    "Stapedektomie",
    "StrabismusChirurgie",
    "StrippenundLigation",
    "StrippingvonVenen",
    "SubkutaneMastektomie",
    "SubmukoeseResektionderNasenscheidewand",
    "SubtotaleabdominaleHysterektomie",
    "SubtotaleGastrektomie",
    "SubtotaleHysterektomienachKaiserschnittentbindung",
    "SubtotaleThyreoidektomie",
    "SuprapubischeZystostomie",
    "SuprazervikaleHysterektomie",
    "TeilresektiondesDickdarms",
    "TherapeutischearthroskopischeOperationenanderKniegelenkshoehle",
    "TherapeutischerSchwangerschaftsabbruchdurchHysterotomie",
    "ThompsonOperationReparaturderLippenspalte",
    "ThromboendarterektomiemitTransplantatderHalsschlagaderdurchHalsschnitt",
    "Tonsillektomie",
    "TonsillektomieundAdenoidektomie",
    "TotaleabdominaleHysterektomie",
    "TotaleabdominaleHysterektomiemitbeidseitigerSalpingoOophorektomie",
    "TotaleAvulsionderNagelplatte",
    "TotaleHysterektomiemitEntfernungbeiderEileiterundEierstoecke",
    "TotalekavopulmonaleVerbindungmitlateralemVorhoftunnel",
    "TotaleKolektomie",
    "TotaleLobektomiederLunge",
    "TotaleNephrektomie",
    "TotalePneumonektomie",
    "TotaleSplenektomie",
    "TotaleThyreoidektomie",
    "TotalerErsatzdeslinkenKniegelenks",
    "TotalerErsatzdesrechtenKniegelenks",
    "TotalerKnieersatz",
    "TotalerprothetischerErsatzdesHueftgelenksmitZement",
    "TotalerprothetischerErsatzdesKniegelenksmitZement",
    "TotalerSchulterersatz",
    "TotalersatzderHuefte",
    "TotalersatzdesEllenbogens",
    "Trabekulektomieabexterno",
    "TransjugulaererintrahepatischerportosystemischerShunt",
    "TransplantationderBauchspeicheldruese",
    "TransplantationdeskardiovaskulaerenSystems",
    "TransplantationeinerAortenklappenprotheseuebereinentransapikalenZugang",
    "TransplantationfesterOrgane",
    "TransplantationvonDuenndarm",
    "TransurethraleProstatektomie",
    "Trepanationsbiopsie",
    "Trimmen",
    "Tympanomastoidektomie",
    "Tympanotomie",
    "UeberarbeitungdesHueftersatzes",
    "Ureteroileostomie",
    "VaginaleHysterektomie",
    "VaginalerKaiserschnitt",
    "ValvuloplastiederAortenklappe",
    "Varizenoperation",
    "Varizenstripping",
    "Vasektomie",
    "VentrikuloperitonealerShunt",
    "VerfahrenamBlutgefaess",
    "VerfahrenamDarm",
    "VerfahrenamKopfundoderHals",
    "VerfahrenamOhrundverwandtenStrukturen",
    "VerfahrenamweiblichenGenitalsystem",
    "VerfahrenanderExtremitaet",
    "VerfahrenaufPleura",
    "VerfahrenzuFuss",
    "VeroedungvonHaemorrhoidendurchSklerosierung",
    "VerschlussdesDuctusarteriosusmitClip",
    "VerschlussdesDuctusarteriosusmittelsEmbolisationsspule",
    "VerschlussdesoffenenForamenovale",
    "VerschlussdesoffenenForamenovaleunterDurchleuchtung",
    "VerschlussdesVentrikelseptumdefektsunterDurchleuchtungssteuerung",
    "VerschlussdesVorhofseptumdefektsunterfluoroskopischerKontrolle",
    "VerschlussdurchNaht",
    "VerschlusseinervesikouterinenFistelmitHysterektomie",
    "VerschlusseinesVorhofseptumdefekts",
    "Vitrektomie",
    "VollstaendigeExzisiondesOrgans",
    "VollstaendigetransurethraleResektionderProstataeinschliesslichKontrollederNachblutung",
    "VorhofinversionsoperationmitVorhofwand",
    "WahlweiserKaiserschnitt",
    "WahlweiserKaiserschnittimoberenSegment",
    "WahlweiserKaiserschnittimunterenSegment",
    "WardillOperationGaumenspaltreparatur",
    "WertheimMeigsabdominaleHysterektomie",
    "WertheimOperation",
    "WiederherstellungderKniescheibe",
    "WiederherstellungdesOberschenkelkopfes",
    "WirbelsaeulenArthrodese",
    "YttriumAluminiumGranatLaserKapsulotomiederLinse",
    "ZangenextraktioneinerLinse",
    "ZervikaleArthrodese",
    "ZervikaleArthrodeseinanteriorerTechnik",
    "Zirkumzision"
];

export default NFDProcedureGerman;
