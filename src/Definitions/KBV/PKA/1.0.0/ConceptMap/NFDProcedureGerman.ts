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

// Diese ConceptMap verknüpft die Codes für Prozedur SNOMED CT mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const NFDProcedureGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Procedure_German",
        element: [
            {
                code: "116141005",
                display: "Abdominal hysterectomy (procedure)",
                target: [
                    {
                        code: "AbdominaleHysterektomie",
                        display: "Abdominale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "413144006",
                display:
                    "Abdominal hysterectomy with conservation of ovaries (procedure)",
                target: [
                    {
                        code: "AbdominaleHysterektomiemitErhaltungderEierstoecke",
                        display: "Abdominale Hysterektomie mit Erhaltung der Eierstöcke",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13254001",
                display:
                    "Abdominal hysterectomy with colpo-urethrocystopexy, Marshall-Marchetti-Krantz type (procedure)",
                target: [
                    {
                        code: "AbdominaleHysterektomiemitKolpoUrethrozystopexieTypMarshallMarchettiKrantz",
                        display:
                            "Abdominale Hysterektomie mit Kolpo-Urethrozystopexie, Typ Marshall-Marchetti-Krantz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302191001",
                display:
                    "Abdominal hysterectomy and left salpingo-oophorectomy (procedure)",
                target: [
                    {
                        code: "AbdominaleHysterektomieundlinkeSalpingoOophorektomie",
                        display:
                            "Abdominale Hysterektomie und linke Salpingo-Oophorektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302190000",
                display:
                    "Abdominal hysterectomy and right salpingo-oophorectomy (procedure)",
                target: [
                    {
                        code: "AbdominaleHysterektomieundrechteSalpingoOophorektomie",
                        display:
                            "Abdominale Hysterektomie und rechte Salpingo-Oophorektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "309879006",
                display: "Abdominal hysterocolpectomy (procedure)",
                target: [
                    {
                        code: "AbdominaleHysterokolpektomie",
                        display: "Abdominale Hysterokolpektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236989008",
                display: "Abdominal delivery for shoulder dystocia (procedure)",
                target: [
                    {
                        code: "AbdominalgeburtbeiSchulterdystokie",
                        display: "Abdominalgeburt bei Schulterdystokie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177250006",
                display: "Abdominoplasty (procedure)",
                target: [
                    {
                        code: "Abdominoplastik",
                        display: "Abdominoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428663009",
                display: "Ablation of atrioventricular node (procedure)",
                target: [
                    {
                        code: "AblationdesatrioventrikulaerenKnotens",
                        display: "Ablation des atrioventrikulären Knotens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233159005",
                display: "Ablation operation for arrhythmia (procedure)",
                target: [
                    {
                        code: "AblationsoperationbeiHerzrhythmusstoerungen",
                        display: "Ablationsoperation bei Herzrhythmusstörungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "119954001",
                display: "Adenoid excision (procedure)",
                target: [
                    {
                        code: "Adenoidexzision",
                        display: "Adenoidexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "408817009",
                display: "Amniotomy at delivery (procedure)",
                target: [
                    {
                        code: "AmniotomiebeiEntbindung",
                        display: "Amniotomie bei Entbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "81723002",
                display: "Amputation (procedure)",
                target: [
                    {
                        code: "Amputation",
                        display: "Amputation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397117006",
                display: "Amputation of lower limb (procedure)",
                target: [
                    {
                        code: "AmputationderunterenExtremitaet",
                        display: "Amputation der unteren Extremität",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "88312006",
                display: "Amputation of leg through tibia and fibula (procedure)",
                target: [
                    {
                        code: "AmputationdesBeinesdurchSchienundWadenbein",
                        display: "Amputation des Beines durch Schien- und Wadenbein",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "371186005",
                display: "Amputation of toe (procedure)",
                target: [
                    {
                        code: "AmputationeinerZehe",
                        display: "Amputation einer Zehe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "79733001",
                display: "Amputation above-knee (procedure)",
                target: [
                    {
                        code: "AmputationoberhalbdesKnies",
                        display: "Amputation oberhalb des Knies",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76956004",
                display: "Amputation of finger, except thumb (procedure)",
                target: [
                    {
                        code: "AmputationvonFingernausserDaumen",
                        display: "Amputation von Fingern, außer Daumen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13662000",
                display:
                    "Anastomosis of pulmonary-subclavian artery by Blalock-Taussig operation (procedure)",
                target: [
                    {
                        code: "AnastomosederArteriapulmonalissubclaviamittelsBlalockTaussigOperation",
                        display:
                            "Anastomose der Arteria pulmonalis-subclavia mittels Blalock-Taussig-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "359551000",
                display: "Angioplasty of vein (procedure)",
                target: [
                    {
                        code: "AngioplastieeinerVene",
                        display: "Angioplastie einer Vene",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418285008",
                display: "Angioplasty of blood vessel (procedure)",
                target: [
                    {
                        code: "AngioplastieeinesBlutgefaesses",
                        display: "Angioplastie eines Blutgefäßes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "83333004",
                display:
                    "Creation of cardiac pacemaker pocket new site in subcutaneous tissue (procedure)",
                target: [
                    {
                        code: "AnlegeneinerHerzschrittmachertascheanneuerStelleimsubkutanenGewebe",
                        display:
                            "Anlegen einer Herzschrittmachertasche an neuer Stelle im subkutanen Gewebe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "173977007",
                display: "Creation of ileostomy (procedure)",
                target: [
                    {
                        code: "AnlegeneinerIleostomie",
                        display: "Anlegen einer Ileostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "40059006",
                display: "Creation of aortofemoral shunt (procedure)",
                target: [
                    {
                        code: "AnlegeneinesaortofemoralenShunts",
                        display: "Anlegen eines aortofemoralen Shunts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44777001",
                display:
                    "Creation of conduit between right ventricle and pulmonary artery (procedure)",
                target: [
                    {
                        code: "AnlegeneinesConduitszwischenrechterHerzkammerundPulmonalarterie",
                        display:
                            "Anlegen eines Conduits zwischen rechter Herzkammer und Pulmonalarterie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "39845007",
                display: "Anterior colporrhaphy (procedure)",
                target: [
                    {
                        code: "AnterioreKolporrhaphie",
                        display: "Anteriore Kolporrhaphie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233370007",
                display: "Aortic aneurysm repair (procedure)",
                target: [
                    {
                        code: "AortenaneurysmaReparatur",
                        display: "Aortenaneurysma-Reparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429616001",
                display:
                    "Aortopulmonary reconstruction with right ventricle to pulmonary arterial valveless conduit (procedure)",
                target: [
                    {
                        code: "AortopulmonaleRekonstruktionmitrechtsventrikulaeremzupulmonalemarteriellemklappenlosemConduit",
                        display:
                            "Aortopulmonale Rekonstruktion mit rechtsventrikulärem zu pulmonalem arteriellem klappenlosem Conduit",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174826008",
                display: "Arterial switch operation (procedure)",
                target: [
                    {
                        code: "ArterielleSwitchOperation",
                        display: "Arterielle Switch-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "19578002",
                display: "Arthrodesis (procedure)",
                target: [
                    {
                        code: "Arthrodese",
                        display: "Arthrodese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53976000",
                display:
                    "Arthrodesis by anterior interbody technique of cervical region below C2 with bone graft (procedure)",
                target: [
                    {
                        code: "ArthrodeseinanteriorerinterkorporellerTechnikderHalswirbelsaeuleunterhalbCmitKnochentransplantat",
                        display:
                            "Arthrodese in anteriorer interkorporeller Technik der Halswirbelsäule unterhalb C2 mit Knochentransplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8874001",
                display:
                    "Arthroscopy of knee with medial and lateral meniscectomy (procedure)",
                target: [
                    {
                        code: "ArthroskopiedesKniesmitmedialerundlateralerMeniskektomie",
                        display:
                            "Arthroskopie des Knies mit medialer und lateraler Meniskektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84877006",
                display: "Arthroscopy of knee with meniscus repair (procedure)",
                target: [
                    {
                        code: "ArthroskopiedesKniesmitMeniskusreparatur",
                        display: "Arthroskopie des Knies mit Meniskusreparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "55244002",
                display:
                    "Arthroscopically aided anterior cruciate ligament repair (procedure)",
                target: [
                    {
                        code: "ArthroskopischunterstuetztevordereKreuzbandplastik",
                        display: "Arthroskopisch unterstützte vordere Kreuzbandplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302490008",
                display: "Arthroscopic meniscectomy (procedure)",
                target: [
                    {
                        code: "ArthroskopischeMeniskektomie",
                        display: "Arthroskopische Meniskektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "179383008",
                display: "Arthroscopic partial lateral meniscectomy (procedure)",
                target: [
                    {
                        code: "ArthroskopischepartiellelateraleMeniskektomie",
                        display: "Arthroskopische partielle laterale Meniskektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "179381005",
                display: "Arthroscopic partial medial meniscectomy (procedure)",
                target: [
                    {
                        code: "ArthroskopischepartiellemedialeMeniskusentfernung",
                        display: "Arthroskopische partielle mediale Meniskusentfernung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "179382003",
                display: "Arthroscopic total medial meniscectomy (procedure)",
                target: [
                    {
                        code: "ArthroskopischetotalemedialeMeniskektomie",
                        display: "Arthroskopische totale mediale Meniskektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84149000",
                display: "Aspiration of cataract by phacoemulsification (procedure)",
                target: [
                    {
                        code: "AspirationskuerettagederGebaermutternachderGeburt",
                        display: "Aspirationskürettage der Gebärmutter nach der Geburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "248273008",
                display: "Aspiration curettage of uterus after delivery (procedure)",
                target: [
                    {
                        code: "AspirationskuerettagederGebaermutternachEntbindung",
                        display: "Aspirationskürettage der Gebärmutter nach Entbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6832004",
                display: "Atherectomy (procedure)",
                target: [
                    {
                        code: "Atherektomie",
                        display: "Atherektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65659003",
                display: "Atherectomy by rotary cutter (procedure)",
                target: [
                    {
                        code: "AtherektomiemitdemRotationsschneider",
                        display: "Atherektomie mit dem Rotationsschneider",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76611008",
                display: "Atherectomy by laser (procedure)",
                target: [
                    {
                        code: "AtherektomiemitLaser",
                        display: "Atherektomie mit Laser",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36228007",
                display: "Ophthalmic examination and evaluation (procedure)",
                target: [
                    {
                        code: "AugenuntersuchungundBeurteilung",
                        display: "Augenuntersuchung und Beurteilung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22890008",
                display: "Augmentation mammoplasty (procedure)",
                target: [
                    {
                        code: "Augmentationsmammoplastik",
                        display: "Augmentationsmammoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "231751005",
                display: "Exchange of intraocular lens (procedure)",
                target: [
                    {
                        code: "AustauscheinerintraokularenLinse",
                        display: "Austausch einer intraokularen Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "176766002",
                display: "Avulsion of lesion of cervix uteri (procedure)",
                target: [
                    {
                        code: "AvulsioneinerLaesionderZervixuteri",
                        display: "Avulsion einer Läsion der Zervix uteri",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "430715008",
                display: "Bariatric operative procedure (procedure)",
                target: [
                    {
                        code: "BariatrischesoperativesVerfahren",
                        display: "Bariatrisches operatives Verfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53266006",
                display: "Operation on diaphragm (procedure)",
                target: [
                    {
                        code: "BetriebanderMembran",
                        display: "Betrieb an der Membran",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443989003",
                display:
                    "Bidirectional Glenn shunt procedure of left superior vena cava (procedure)",
                target: [
                    {
                        code: "BidirektionaleGlennShuntOperationderlinkenoberenHohlvene",
                        display:
                            "Bidirektionale Glenn-Shunt-Operation der linken oberen Hohlvene",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444034006",
                display:
                    "Bidirectional Glenn shunt procedure of right superior vena cava (procedure)",
                target: [
                    {
                        code: "BidirektionalerGlennShuntfuerdierechteobereHohlvene",
                        display:
                            "Bidirektionaler Glenn-Shunt für die rechte obere Hohlvene",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "287664005",
                display: "Bilateral tubal ligation (procedure)",
                target: [
                    {
                        code: "BilateraleEileiterunterbindung",
                        display: "Bilaterale Eileiterunterbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177866001",
                display: "Bilateral inguinal hernia repair (procedure)",
                target: [
                    {
                        code: "BilateraleLeistenhernienreparatur",
                        display: "Bilaterale Leistenhernienreparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265250008",
                display: "Bilateral reduction mammoplasty (procedure)",
                target: [
                    {
                        code: "BilateraleMammareduktionsplastik",
                        display: "Bilaterale Mammareduktionsplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "29827000",
                display: "Bilateral salpingectomy with oophorectomy (procedure)",
                target: [
                    {
                        code: "BilateraleSalpingektomiemitOophorektomie",
                        display: "Bilaterale Salpingektomie mit Oophorektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17293009",
                display: "Bilateral segmental vasectomy and ligation (procedure)",
                target: [
                    {
                        code: "BilateralesegmentaleVasektomieundLigatur",
                        display: "Bilaterale segmentale Vasektomie und Ligatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "308665009",
                display: "Biological pulmonary valve replacement (procedure)",
                target: [
                    {
                        code: "BiologischerPulmonalklappenersatz",
                        display: "Biologischer Pulmonalklappenersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86273004",
                display: "Biopsy (procedure)",
                target: [
                    {
                        code: "Biopsie",
                        display: "Biopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "80146002",
                display: "Excision of appendix (procedure)",
                target: [
                    {
                        code: "Blinddarmentfernung",
                        display: "Blinddarmentfernung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178283002",
                display: "Block dissection of cervical lymph nodes (procedure)",
                target: [
                    {
                        code: "BlockdissektionzervikalerLymphknoten",
                        display: "Blockdissektion zervikaler Lymphknoten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10847001",
                display: "Bronchoscopy (procedure)",
                target: [
                    {
                        code: "Bronchoskopie",
                        display: "Bronchoskopie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18692006",
                display: "Bypass gastroenterostomy (procedure)",
                target: [
                    {
                        code: "BypassGastroenterostomie",
                        display: "Bypass-Gastroenterostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112828007",
                display: "Femoral-popliteal artery bypass graft (procedure)",
                target: [
                    {
                        code: "BypassTransplantatderFemoralPoplitealArterie",
                        display: "Bypass-Transplantat der Femoral-Popliteal-Arterie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232717009",
                display: "Coronary artery bypass grafting (procedure)",
                target: [
                    {
                        code: "BypassTransplantatderKoronararterie",
                        display: "Bypass-Transplantat der Koronararterie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265636007",
                display: "Cerclage of cervix (procedure)",
                target: [
                    {
                        code: "CerclagedesGebaermutterhalses",
                        display: "Cerclage des Gebärmutterhalses",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "90442009",
                display:
                    "Cerclage of cervix during pregnancy by vaginal approach (procedure)",
                target: [
                    {
                        code: "CerclagedesGebaermutterhalsesinderSchwangerschaftuebereinenvaginalenZugang",
                        display:
                            "Cerclage des Gebärmutterhalses in der Schwangerschaft über einen vaginalen Zugang",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46681009",
                display:
                    "Cerclage of cervix during pregnancy by abdominal approach (procedure)",
                target: [
                    {
                        code: "CerclagedesGebaermutterhalseswaehrendderSchwangerschaftdurchabdominalenZugang",
                        display:
                            "Cerclage des Gebärmutterhalses während der Schwangerschaft durch abdominalen Zugang",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "274330002",
                display: "Surgical biopsy (procedure)",
                target: [
                    {
                        code: "ChirurgischeBiopsie",
                        display: "Chirurgische Biopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "274331003",
                display: "Surgical biopsy of breast (procedure)",
                target: [
                    {
                        code: "ChirurgischeBiopsiederBrust",
                        display: "Chirurgische Biopsie der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387713003",
                display: "Surgical procedure (procedure)",
                target: [
                    {
                        code: "ChirurgischerEingriff",
                        display: "Chirurgischer Eingriff",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373353005",
                display: "Surgical procedure on eye proper (procedure)",
                target: [
                    {
                        code: "ChirurgischerEingriffamAuge",
                        display: "Chirurgischer Eingriff am Auge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385487005",
                display: "Surgical procedure on thorax (procedure)",
                target: [
                    {
                        code: "ChirurgischerEingriffamThorax",
                        display: "Chirurgischer Eingriff am Thorax",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385488000",
                display: "Surgical procedure on chest wall (procedure)",
                target: [
                    {
                        code: "ChirurgischerEingriffanderBrustwand",
                        display: "Chirurgischer Eingriff an der Brustwand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38102005",
                display: "Cholecystectomy (procedure)",
                target: [
                    {
                        code: "Cholezystektomie",
                        display: "Cholezystektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45993005",
                display: "Cholecystectomy with exploration of common duct (procedure)",
                target: [
                    {
                        code: "CholezystektomiemitExplorationdesDuctuscommunis",
                        display: "Cholezystektomie mit Exploration des Ductus communis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3418002",
                display: "Chondrectomy of spine (procedure)",
                target: [
                    {
                        code: "ChondrektomiederWirbelsaeule",
                        display: "Chondrektomie der Wirbelsäule",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "308696000",
                display: "Coarctation angioplasty (procedure)",
                target: [
                    {
                        code: "Coarctationsangioplastie",
                        display: "Coarctationsangioplastie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "85548006",
                display: "Episiotomy (procedure)",
                target: [
                    {
                        code: "Dammschnitt",
                        display: "Dammschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233134001",
                display: "Damus-Stansel-Kaye operation (procedure)",
                target: [
                    {
                        code: "DamusStanselKayeOperation",
                        display: "Damus-Stansel-Kaye-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73761001",
                display: "Colonoscopy (procedure)",
                target: [
                    {
                        code: "Darmspiegelung",
                        display: "Darmspiegelung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312775003",
                display: "Debridement of ulcer (procedure)",
                target: [
                    {
                        code: "DebridementvonGeschwueren",
                        display: "Debridement von Geschwüren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "47534009",
                display: "Decompression of median nerve (procedure)",
                target: [
                    {
                        code: "DekompressiondesNmedianus",
                        display: "Dekompression des N. medianus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178814008",
                display: "Spinal facet joint denervation (procedure)",
                target: [
                    {
                        code: "DenervierungderWirbelsaeulenfacettengelenke",
                        display: "Denervierung der Wirbelsäulenfacettengelenke",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37236007",
                display: "Dermabrasion (procedure)",
                target: [
                    {
                        code: "Dermabrasion",
                        display: "Dermabrasion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76810006",
                display: "Diagnostic dilation and curettage of uterus (procedure)",
                target: [
                    {
                        code: "DiagnostischeDilatationundKuerettagederGebaermutter",
                        display: "Diagnostische Dilatation und Kürettage der Gebärmutter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "195565004",
                display: "Dilation of esophagus (procedure)",
                target: [
                    {
                        code: "DilatationderSpeiseroehre",
                        display: "Dilatation der Speiseröhre",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "235570008",
                display: "Dilatation of bile duct (procedure)",
                target: [
                    {
                        code: "DilatationdesGallenganges",
                        display: "Dilatation des Gallenganges",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "315308008",
                display: "Dilatation of cervix for delivery (procedure)",
                target: [
                    {
                        code: "DilatationdesGebaermutterhalseszurEntbindung",
                        display: "Dilatation des Gebärmutterhalses zur Entbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13091001",
                display: "Dilation and curettage (procedure)",
                target: [
                    {
                        code: "DilatationundKuerettage",
                        display: "Dilatation und Kürettage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11401008",
                display: "Dilation and curettage of uterus (procedure)",
                target: [
                    {
                        code: "DilatationundKuerettagederGebaermutter",
                        display: "Dilatation und Kürettage der Gebärmutter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "391998006",
                display: "Dilation and curettage of uterus after delivery (procedure)",
                target: [
                    {
                        code: "DilatationundKuerettagederGebaermutternachderEntbindung",
                        display:
                            "Dilatation und Kürettage der Gebärmutter nach der Entbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "287977004",
                display: "Dilation/incision of cervix - delivery aid (procedure)",
                target: [
                    {
                        code: "DilatationInzisiondesGebaermutterhalsesGeburtshilfe",
                        display:
                            "Dilatation/Inzision des Gebärmutterhalses - Geburtshilfe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89355001",
                display:
                    "Discectomy for intervertebral herniated disc, nucleus pulposus (procedure)",
                target: [
                    {
                        code: "DiskektomiebeiBandscheibenvorfallNucleuspulposus",
                        display: "Diskektomie bei Bandscheibenvorfall, Nucleus pulposus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "122459003",
                display: "Dissection procedure (procedure)",
                target: [
                    {
                        code: "Dissektionsverfahren",
                        display: "Dissektionsverfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232658009",
                display: "Double lung transplant (procedure)",
                target: [
                    {
                        code: "DoppelteLungentransplantation",
                        display: "Doppelte Lungentransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12826007",
                display:
                    "Dorrance operation, push-back operation for cleft palate (procedure)",
                target: [
                    {
                        code: "DorranceOperationPushbackOperationbeiGaumenspalte",
                        display:
                            "Dorrance-Operation, Push-back-Operation bei Gaumenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "107938000",
                display: "Small intestine excision (procedure)",
                target: [
                    {
                        code: "Duenndarmexzision",
                        display: "Dünndarmexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177854007",
                display: "Simple excision of inguinal hernial sac (procedure)",
                target: [
                    {
                        code: "EinfacheExzisiondesLeistenbruchsacks",
                        display: "Einfache Exzision des Leistenbruchsacks",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84282008",
                display: "Simple ligature of hemorrhoid (procedure)",
                target: [
                    {
                        code: "EinfacheLigaturvonHaemorrhoiden",
                        display: "Einfache Ligatur von Hämorrhoiden",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172043006",
                display: "Simple mastectomy (procedure)",
                target: [
                    {
                        code: "EinfacheMastektomie",
                        display: "Einfache Mastektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "175135009",
                display: "Introduction of cardiac pacemaker system via vein (procedure)",
                target: [
                    {
                        code: "EinfuehrungeinesHerzschrittmachersystemsueberdieVene",
                        display:
                            "Einführung eines Herzschrittmachersystems über die Vene",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "426153007",
                display: "Insertion of artificial airway (procedure)",
                target: [
                    {
                        code: "EinfuehrungkuenstlicherAtemwege",
                        display: "Einführung künstlicher Atemwege",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302343007",
                display: "Insertion of prosthesis for breast (procedure)",
                target: [
                    {
                        code: "EinsetzenderBrustprothese",
                        display: "Einsetzen der Brustprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "398010007",
                display: "Prosthetic arthroplasty of hip (procedure)",
                target: [
                    {
                        code: "EinsetzeneinerHueftprothese",
                        display: "Einsetzen einer Hüftprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54974006",
                display:
                    "Insertion of permanent pacemaker with transvenous electrodes, ventricular (procedure)",
                target: [
                    {
                        code: "EinsetzeneinespermanentenHerzschrittmachersmittransvenoesenElektrodenventrikulaer",
                        display:
                            "Einsetzen eines permanenten Herzschrittmachers mit transvenösen Elektroden, ventrikulär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "449389000",
                display: "Placement of stent in cardiac conduit (procedure)",
                target: [
                    {
                        code: "EinsetzeneinesStentsindieHerzkranzgefaesse",
                        display: "Einsetzen eines Stents in die Herzkranzgefäße",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36969009",
                display: "Placement of stent in coronary artery (procedure)",
                target: [
                    {
                        code: "EinsetzeneinesStentsineineKoronararterie",
                        display: "Einsetzen eines Stents in eine Koronararterie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52852000",
                display: "Insertion of bilateral breast prostheses (procedure)",
                target: [
                    {
                        code: "EinsetzenvonbeidseitigenBrustprothesen",
                        display: "Einsetzen von beidseitigen Brustprothesen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236988000",
                display: "Elective cesarean hysterectomy (procedure)",
                target: [
                    {
                        code: "ElektiveHysterektomieperKaiserschnitt",
                        display: "Elektive Hysterektomie per Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265060005",
                display: "Endometrial ablation (procedure)",
                target: [
                    {
                        code: "Endometriumablation",
                        display: "Endometriumablation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423827005",
                display: "Endoscopy (procedure)",
                target: [
                    {
                        code: "Endoskopie",
                        display: "Endoskopie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "119922005",
                display: "Biliary tract endoscopy (procedure)",
                target: [
                    {
                        code: "EndoskopiederGallenwege",
                        display: "Endoskopie der Gallenwege",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444588006",
                display: "Endovascular repair of abdominal aortic aneurysm (procedure)",
                target: [
                    {
                        code: "EndovaskulaereReparatureinesabdominalenAortenaneurysmas",
                        display:
                            "Endovaskuläre Reparatur eines abdominalen Aortenaneurysmas",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "40219000",
                display: "Delivery by Malstrom's extraction with episiotomy (procedure)",
                target: [
                    {
                        code: "EntbindungdurchMalstromExtraktionmitEpisiotomie",
                        display: "Entbindung durch Malstrom-Extraktion mit Episiotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26313002",
                display: "Delivery by vacuum extraction with episiotomy (procedure)",
                target: [
                    {
                        code: "EntbindungdurchVakuumextraktionmitEpisiotomie",
                        display: "Entbindung durch Vakuumextraktion mit Episiotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "9888007",
                display: "Excision of intracranial lesion (procedure)",
                target: [
                    {
                        code: "EntfernungderintrakraniellenLaesion",
                        display: "Entfernung der intrakraniellen Läsion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233188006",
                display: "Removal of cardiac pacing electrode (procedure)",
                target: [
                    {
                        code: "EntfernungeinerHerzschrittmacherelektrode",
                        display: "Entfernung einer Herzschrittmacherelektrode",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "285663000",
                display: "Removal of bone screw from bone (procedure)",
                target: [
                    {
                        code: "EntfernungeinerKnochenschraubeausdemKnochen",
                        display: "Entfernung einer Knochenschraube aus dem Knochen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387740003",
                display: "Removal of ovarian cyst (procedure)",
                target: [
                    {
                        code: "EntfernungeinerOvarialzyste",
                        display: "Entfernung einer Ovarialzyste",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "285662005",
                display: "Removal of plate from bone (procedure)",
                target: [
                    {
                        code: "EntfernungeinerPlatteausdemKnochenProzedur",
                        display: "Entfernung einer Platte aus dem Knochen (Prozedur)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "300009002",
                display: "Removal of acoustic neuroma (procedure)",
                target: [
                    {
                        code: "EntfernungeinesAkustikusneurinoms",
                        display: "Entfernung eines Akustikusneurinoms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233171004",
                display: "Removal of automatic cardiac defibrillator (procedure)",
                target: [
                    {
                        code: "EntfernungeinesautomatischenHerzdefibrillators",
                        display: "Entfernung eines automatischen Herzdefibrillators",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46116005",
                display: "Excision of malignant tumor of breast (procedure)",
                target: [
                    {
                        code: "EntfernungeinesboesartigenBrusttumors",
                        display: "Entfernung eines bösartigen Brusttumors",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "27315000",
                display: "Removal of breast implant (procedure)",
                target: [
                    {
                        code: "EntfernungeinesBrustimplantats",
                        display: "Entfernung eines Brustimplantats",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303650005",
                display: "Removal of mole of skin by excision (procedure)",
                target: [
                    {
                        code: "EntfernungeinesHautmolekuelsdurchExzision",
                        display: "Entfernung eines Hautmoleküls durch Exzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "62881002",
                display: "Removal of cardiac pacemaker (procedure)",
                target: [
                    {
                        code: "EntfernungeinesHerzschrittmachers",
                        display: "Entfernung eines Herzschrittmachers",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72010008",
                display: "Removal of internal fixation device (procedure)",
                target: [
                    {
                        code: "EntfernungeinesinternenFixateurs",
                        display: "Entfernung eines internen Fixateurs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45921003",
                display:
                    "Removal of cardiac pacemaker electrodes with replacement (procedure)",
                target: [
                    {
                        code: "EntfernungvonHerzschrittmacherelektrodenmitErsatz",
                        display: "Entfernung von Herzschrittmacherelektroden mit Ersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "370611004",
                display: "Excision of malignant neoplasm (procedure)",
                target: [
                    {
                        code: "EntfernungvonmalignenNeubildungen",
                        display: "Entfernung von malignen Neubildungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56361007",
                display: "Excision of soft tissue (procedure)",
                target: [
                    {
                        code: "EntfernungvonWeichgewebe",
                        display: "Entfernung von Weichgewebe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3713005",
                display: "Release for de Quervain's tenosynovitis of hand (procedure)",
                target: [
                    {
                        code: "EntlastungbeideQuervainsTenosynovitisderHand",
                        display: "Entlastung bei de Quervain's Tenosynovitis der Hand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418576007",
                display: "Harvesting of peripheral blood stem cells (procedure)",
                target: [
                    {
                        code: "EntnahmevonperipherenBlutstammzellen",
                        display: "Entnahme von peripheren Blutstammzellen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53958007",
                display: "Harvesting of donor material (procedure)",
                target: [
                    {
                        code: "EntnahmevonSpendermaterial",
                        display: "Entnahme von Spendermaterial",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172132001",
                display: "Enucleation of eyeball (procedure)",
                target: [
                    {
                        code: "EnukleationdesAugapfels",
                        display: "Enukleation des Augapfels",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177765008",
                display: "Opening of chest (procedure)",
                target: [
                    {
                        code: "EroeffnungdesBrustkorbs",
                        display: "Eröffnung des Brustkorbs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53059001",
                display: "Replacement of mitral valve (procedure)",
                target: [
                    {
                        code: "ErsatzderMitralklappe",
                        display: "Ersatz der Mitralklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50216001",
                display: "Replacement of mitral valve with tissue graft (procedure)",
                target: [
                    {
                        code: "ErsatzderMitralklappemitGewebetransplantat",
                        display: "Ersatz der Mitralklappe mit Gewebetransplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "55253009",
                display: "Replacement of tricuspid valve with tissue graft (procedure)",
                target: [
                    {
                        code: "ErsatzderTrikuspidalklappemitGewebetransplantat",
                        display: "Ersatz der Trikuspidalklappe mit Gewebetransplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26212005",
                display: "Replacement of aortic valve (procedure)",
                target: [
                    {
                        code: "ErsatzeinerAortenklappe",
                        display: "Ersatz einer Aortenklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3515001",
                display:
                    "Replacement of electronic heart device, pulse generator (procedure)",
                target: [
                    {
                        code: "ErsatzeineselektronischenHerzgeraetsImpulsgebers",
                        display: "Ersatz eines elektronischen Herzgeräts, Impulsgebers",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444566006",
                display: "Replacement of cardiac pacemaker (procedure)",
                target: [
                    {
                        code: "ErsatzeinesHerzschrittmachers",
                        display: "Ersatz eines Herzschrittmachers",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428625001",
                display: "Replacement of cardioverter defibrillator (procedure)",
                target: [
                    {
                        code: "ErsatzeinesKardioverterDefibrillators",
                        display: "Ersatz eines Kardioverter-Defibrillators",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443434006",
                display: "Replacement of dual chamber pulse generator (procedure)",
                target: [
                    {
                        code: "ErsatzeinesZweikammerImpulsgenerators",
                        display: "Ersatz eines Zweikammer-Impulsgenerators",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "88722002",
                display:
                    "Initial implantation of electrode into cardiac atrium (procedure)",
                target: [
                    {
                        code: "ErstimplantationeinerElektrodeindenVorhofdesHerzens",
                        display:
                            "Erstimplantation einer Elektrode in den Vorhof des Herzens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "87825006",
                display:
                    "Initial implantation of electrode into cardiac atrium and ventricle (procedure)",
                target: [
                    {
                        code: "ErstimplantationeinerElektrodeinHerzvorhofundHerzkammer",
                        display:
                            "Erstimplantation einer Elektrode in Herzvorhof und Herzkammer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54866009",
                display:
                    "Initial implantation of cardiac single-chamber device (procedure)",
                target: [
                    {
                        code: "ErstimplantationeinesEinkammerHerzgeraets",
                        display: "Erstimplantation eines Einkammer-Herzgeräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "58863009",
                display:
                    "Initial implantation of cardiac dual-chamber device (procedure)",
                target: [
                    {
                        code: "ErstimplantationeinesZweikammerHerzgeraets",
                        display: "Erstimplantation eines Zweikammer-Herzgeräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302605004",
                display: "Forced manual dilatation of anus (procedure)",
                target: [
                    {
                        code: "ErzwungenemanuelleDilatationdesAnus",
                        display: "Erzwungene manuelle Dilatation des Anus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10458001",
                display: "Evacuation of intracerebral hematoma (procedure)",
                target: [
                    {
                        code: "EvakuierungdesintrazerebralenHaematoms",
                        display: "Evakuierung des intrazerebralen Hämatoms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59712006",
                display: "Evacuation of subdural hematoma (procedure)",
                target: [
                    {
                        code: "EvakuierungdessubduralenHaematoms",
                        display: "Evakuierung des subduralen Hämatoms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "74770008",
                display: "Exploratory laparotomy (procedure)",
                target: [
                    {
                        code: "ExplorativeLaparotomie",
                        display: "Explorative Laparotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257822003",
                display: "Extracapsular extraction (qualifier value)",
                target: [
                    {
                        code: "ExtrakapsulaereExtraktion",
                        display: "Extrakapsuläre Extraktion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13793006",
                display: "Extracapsular extraction of lens (procedure)",
                target: [
                    {
                        code: "ExtrakapsulaereExtraktionderLinse",
                        display: "Extrakapsuläre Extraktion der Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "75170007",
                display: "Extraction of lens of eye (procedure)",
                target: [
                    {
                        code: "ExtraktionderAugenlinse",
                        display: "Extraktion der Augenlinse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54885007",
                display: "Extraction of cataract (procedure)",
                target: [
                    {
                        code: "ExtraktionvonKatarakt",
                        display: "Extraktion von Katarakt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "57271003",
                display: "Extraperitoneal cesarean section (procedure)",
                target: [
                    {
                        code: "ExtraperitonealerKaiserschnitt",
                        display: "Extraperitonealer Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363187007",
                display: "Limb operation (procedure)",
                target: [
                    {
                        code: "Extremitaetenbetrieb",
                        display: "Extremitätenbetrieb",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65801008",
                display: "Excision (procedure)",
                target: [
                    {
                        code: "Exzision",
                        display: "Exzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54261007",
                display: "Excision of uterus and supporting structures (procedure)",
                target: [
                    {
                        code: "ExzisionderGebaermutterundderunterstuetzendenStrukturen",
                        display:
                            "Exzision der Gebärmutter und der unterstützenden Strukturen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "445429009",
                display: "Excision of lamina of cervical vertebra (procedure)",
                target: [
                    {
                        code: "ExzisionderLaminaderHalswirbelsaeule",
                        display: "Exzision der Lamina der Halswirbelsäule",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387731002",
                display: "Excision of lamina of vertebra (procedure)",
                target: [
                    {
                        code: "ExzisionderLaminaeinesWirbels",
                        display: "Exzision der Lamina eines Wirbels",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427107006",
                display: "Excision of accessory uterus (procedure)",
                target: [
                    {
                        code: "ExzisioneinerakzessorischenGebaermutter",
                        display: "Exzision einer akzessorischen Gebärmutter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "309430005",
                display: "Excision of skin tag (procedure)",
                target: [
                    {
                        code: "ExzisioneinerHautwucherung",
                        display: "Exzision einer Hautwucherung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301890004",
                display: "Excision of skin cyst (procedure)",
                target: [
                    {
                        code: "ExzisioneinerHautzyste",
                        display: "Exzision einer Hautzyste",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "398027004",
                display: "Excision of varicose vein of lower limb (procedure)",
                target: [
                    {
                        code: "ExzisioneinerKrampfaderderunterenExtremitaet",
                        display: "Exzision einer Krampfader der unteren Extremität",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "35646002",
                display: "Excision of lesion of skin (procedure)",
                target: [
                    {
                        code: "ExzisioneinerLaesionderHaut",
                        display: "Exzision einer Läsion der Haut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53442002",
                display: "Excision of stomach structure (procedure)",
                target: [
                    {
                        code: "ExzisioneinerMagenstruktur",
                        display: "Exzision einer Magenstruktur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "300589005",
                display: "Excision of sebaceous cyst (procedure)",
                target: [
                    {
                        code: "ExzisioneinerTalgdruesenzyste",
                        display: "Exzision einer Talgdrüsenzyste",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "27480002",
                display: "Excision of bunion (procedure)",
                target: [
                    {
                        code: "ExzisioneinesBallenzeh",
                        display: "Exzision eines Ballenzeh",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301889008",
                display: "Excision of malignant skin tumor (procedure)",
                target: [
                    {
                        code: "ExzisioneinesboesartigenHauttumors",
                        display: "Exzision eines bösartigen Hauttumors",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178095009",
                display: "Excision of ganglion of wrist (procedure)",
                target: [
                    {
                        code: "ExzisioneinesHandgelenksganglions",
                        display: "Exzision eines Handgelenksganglions",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178097001",
                display: "Excision of ganglion of knee (procedure)",
                target: [
                    {
                        code: "ExzisioneinesKniegelenksganglions",
                        display: "Exzision eines Kniegelenksganglions",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "274068006",
                display: "Excision of lipoma (procedure)",
                target: [
                    {
                        code: "ExzisioneinesLipoms",
                        display: "Exzision eines Lipoms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177735003",
                display: "Excision of wedge of nail (procedure)",
                target: [
                    {
                        code: "ExzisioneinesNagelkeils",
                        display: "Exzision eines Nagelkeils",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "370612006",
                display: "Excision of neoplasm (procedure)",
                target: [
                    {
                        code: "ExzisioneinesNeoplasmas",
                        display: "Exzision eines Neoplasmas",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303648002",
                display: "Excision of papilloma (procedure)",
                target: [
                    {
                        code: "ExzisioneinesPapilloms",
                        display: "Exzision eines Papilloms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "230810008",
                display: "Excision of tumor of brain meninges (procedure)",
                target: [
                    {
                        code: "ExzisioneinesTumorsderHirnhaeute",
                        display: "Exzision eines Tumors der Hirnhäute",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "69031006",
                display: "Excision of breast tissue (procedure)",
                target: [
                    {
                        code: "ExzisionvonBrustgewebe",
                        display: "Exzision von Brustgewebe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12398007",
                display: "Excision of endometrial synechiae (procedure)",
                target: [
                    {
                        code: "ExzisionvonEndometriumSynechien",
                        display: "Exzision von Endometrium-Synechien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8889005",
                display: "Excisional biopsy (procedure)",
                target: [
                    {
                        code: "Exzisionsbiopsie",
                        display: "Exzisionsbiopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312968005",
                display: "Excision biopsy of skin lesion (procedure)",
                target: [
                    {
                        code: "ExzisionsbiopsieeinerHautlaesion",
                        display: "Exzisionsbiopsie einer Hautläsion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50807007",
                display: "Femoral-popliteal artery bypass graft with vein (procedure)",
                target: [
                    {
                        code: "FemoralpoplitealeArterienBypassTransplantationmitVene",
                        display:
                            "Femoral-popliteale Arterien-Bypass-Transplantation mit Vene",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302441008",
                display: "Liposuction of subcutaneous tissue (procedure)",
                target: [
                    {
                        code: "FettabsaugungdesUnterhautgewebes",
                        display: "Fettabsaugung des Unterhautgewebes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "735023007",
                display: "Fixation of left testis (procedure)",
                target: [
                    {
                        code: "FixierungdeslinkenHodens",
                        display: "Fixierung des linken Hodens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "735024001",
                display: "Fixation of right testis (procedure)",
                target: [
                    {
                        code: "FixierungdesrechtenHodens",
                        display: "Fixierung des rechten Hodens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "277764006",
                display: "Fusion of posterior lumbar spine (procedure)",
                target: [
                    {
                        code: "FusionderhinterenLendenwirbelsaeule",
                        display: "Fusion der hinteren Lendenwirbelsäule",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54956002",
                display: "Gastrostomy (procedure)",
                target: [
                    {
                        code: "Gastrostomie",
                        display: "Gastrostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386638009",
                display: "Obstetric operation (procedure)",
                target: [
                    {
                        code: "Geburtshilfe",
                        display: "Geburtshilfe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84275009",
                display: "Obstetrical hysterotomy (procedure)",
                target: [
                    {
                        code: "GeburtshilflicheHysterotomie",
                        display: "Geburtshilfliche Hysterotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30904006",
                display: "Vascular surgery procedure (procedure)",
                target: [
                    {
                        code: "Gefaesschirurgie",
                        display: "Gefäßchirurgie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234336002",
                display: "Hemopoietic stem cell transplant (procedure)",
                target: [
                    {
                        code: "HaematopoetischeStammzelltransplantation",
                        display: "Hämatopoetische Stammzelltransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "127601009",
                display: "Hammer toe operation (procedure)",
                target: [
                    {
                        code: "HammerzehenOperation",
                        display: "Hammerzehen-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24496007",
                display: "Hemorrhoidectomy (procedure)",
                target: [
                    {
                        code: "Haemorrhoidektomie",
                        display: "Hämorrhoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108034003",
                display: "Urinary bladder excision (procedure)",
                target: [
                    {
                        code: "Harnblasenexzision",
                        display: "Harnblasenexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16564004",
                display: "Hartmann operation, rectal resection (procedure)",
                target: [
                    {
                        code: "HartmannOperationRektumresektion",
                        display: "Hartmann-Operation, Rektumresektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304040003",
                display: "Grafting to skin (procedure)",
                target: [
                    {
                        code: "Hauttransplantation",
                        display: "Hauttransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233230003",
                display: "Hemi-Fontan operation (procedure)",
                target: [
                    {
                        code: "HemiFontanOperation",
                        display: "Hemi-Fontan-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50465008",
                display: "Hernia repair (procedure)",
                target: [
                    {
                        code: "Hernienreparatur",
                        display: "Hernienreparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34068001",
                display: "Heart valve replacement (procedure)",
                target: [
                    {
                        code: "Herzklappenersatz",
                        display: "Herzklappenersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "275035006",
                display: "Heart valve replacement - prosthesis (procedure)",
                target: [
                    {
                        code: "HerzklappenersatzProthese",
                        display: "Herzklappenersatz - Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112802009",
                display: "Cardiovascular operative procedure (procedure)",
                target: [
                    {
                        code: "HerzKreislaufChirurgie",
                        display: "Herz-Kreislauf-Chirurgie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "32477003",
                display:
                    "Heart-lung transplant with recipient cardiectomy-pneumonectomy (procedure)",
                target: [
                    {
                        code: "HerzLungenTransplantationmitEmpfaengerKardiektomiePneumonektomie",
                        display:
                            "Herz-Lungen-Transplantation mit Empfänger-Kardiektomie-Pneumonektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "32413006",
                display: "Transplantation of heart (procedure)",
                target: [
                    {
                        code: "Herztransplantation",
                        display: "Herztransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "15413009",
                display: "High forceps delivery with episiotomy (procedure)",
                target: [
                    {
                        code: "HochzangengeburtmitEpisiotomie",
                        display: "Hochzangengeburt mit Episiotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "120001005",
                display: "Testis excision (procedure)",
                target: [
                    {
                        code: "Hodenexzision",
                        display: "Hodenexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "60656008",
                display: "Corneal transplant (procedure)",
                target: [
                    {
                        code: "Hornhauttransplantation",
                        display: "Hornhauttransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "119614000",
                display: "Hip joint reconstruction (procedure)",
                target: [
                    {
                        code: "Hueftgelenksrekonstruktion",
                        display: "Hüftgelenksrekonstruktion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236886002",
                display: "Hysterectomy (procedure)",
                target: [
                    {
                        code: "Hysterektomie",
                        display: "Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "288043009",
                display: "Hysterectomy in pregnancy (procedure)",
                target: [
                    {
                        code: "HysterektomieinderSchwangerschaft",
                        display: "Hysterektomie in der Schwangerschaft",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41059002",
                display: "Cesarean hysterectomy (procedure)",
                target: [
                    {
                        code: "HysterektomieperKaiserschnitt",
                        display: "Hysterektomie per Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "288042004",
                display: "Hysterectomy and fetus removal (procedure)",
                target: [
                    {
                        code: "HysterektomieundFoetusentfernung",
                        display: "Hysterektomie und Fötusentfernung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "392000009",
                display: "Hysterotomy for retained placenta (procedure)",
                target: [
                    {
                        code: "HysterotomiebeiretinierterPlazenta",
                        display: "Hysterotomie bei retinierter Plazenta",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84267003",
                display: "Hysterotomy with removal of foreign body (procedure)",
                target: [
                    {
                        code: "HysterotomiemitEntfernungeinesFremdkoerpers",
                        display: "Hysterotomie mit Entfernung eines Fremdkörpers",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26578004",
                display: "Hysterotomy with removal of hydatidiform mole (procedure)",
                target: [
                    {
                        code: "HysterotomiemitEntfernungeineshydatidiformenMuttermals",
                        display:
                            "Hysterotomie mit Entfernung eines hydatidiformen Muttermals",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "35350000",
                display:
                    "Implantation of aortic valve prosthesis or synthetic device (procedure)",
                target: [
                    {
                        code: "ImplantationeinerAortenklappenprotheseodereinessynthetischenGeraets",
                        display:
                            "Implantation einer Aortenklappenprothese oder eines synthetischen Geräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44218004",
                display: "Implantation of cochlear electrode (procedure)",
                target: [
                    {
                        code: "ImplantationeinerCochleaElektrode",
                        display: "Implantation einer Cochlea-Elektrode",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "359612003",
                display: "Implantation of cochlear prosthetic device (procedure)",
                target: [
                    {
                        code: "ImplantationeinerCochleaProthese",
                        display: "Implantation einer Cochlea-Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43815004",
                display:
                    "Implantation of cochlear prosthetic device, single channel (procedure)",
                target: [
                    {
                        code: "ImplantationeinerCochleaProtheseeinkanalig",
                        display: "Implantation einer Cochlea-Prothese, einkanalig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "359608009",
                display:
                    "Implantation of cochlear prosthetic device, electrode and receiver (procedure)",
                target: [
                    {
                        code: "ImplantationeinerCochleaProtheseElektrodeundEmpfaenger",
                        display:
                            "Implantation einer Cochlea-Prothese, Elektrode und Empfänger",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50676004",
                display:
                    "Implantation of cochlear prosthetic device, multiple channels (procedure)",
                target: [
                    {
                        code: "ImplantationeinerCochleaProthesemehrereKanaele",
                        display: "Implantation einer Cochlea-Prothese, mehrere Kanäle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37153009",
                display: "Implantation of heart valve with tissue graft (procedure)",
                target: [
                    {
                        code: "ImplantationeinerHerzklappemitGewebetransplantat",
                        display: "Implantation einer Herzklappe mit Gewebetransplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "47432005",
                display:
                    "Implantation of heart valve prosthesis or synthetic device (procedure)",
                target: [
                    {
                        code: "ImplantationeinerHerzklappenprotheseodereinesKunststoffgeraets",
                        display:
                            "Implantation einer Herzklappenprothese oder eines Kunststoffgeräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172732009",
                display: "Implantation of intracochlear prosthesis (procedure)",
                target: [
                    {
                        code: "ImplantationeinerintracochleaerenProthese",
                        display: "Implantation einer intracochleären Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373415004",
                display: "Implantation of posterior chamber intraocular lens (procedure)",
                target: [
                    {
                        code: "ImplantationeinerintraokularenHinterkammerlinse",
                        display: "Implantation einer intraokularen Hinterkammerlinse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "77181006",
                display:
                    "Implantation of mitral valve prosthesis or synthetic device (procedure)",
                target: [
                    {
                        code: "ImplantationeinerMitralklappenprotheseodereinessynthetischenGeraets",
                        display:
                            "Implantation einer Mitralklappenprothese oder eines synthetischen Geräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "47411002",
                display: "Implantation of penile prosthesis (procedure)",
                target: [
                    {
                        code: "ImplantationeinerPenisprothese",
                        display: "Implantation einer Penisprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "69724002",
                display: "Implantation of prosthetic intraocular lens (procedure)",
                target: [
                    {
                        code: "ImplantationeinerprothetischenIntraokularlinse",
                        display: "Implantation einer prothetischen Intraokularlinse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "79917009",
                display:
                    "Implantation of pulmonary valve prosthesis or synthetic device (procedure)",
                target: [
                    {
                        code: "ImplantationeinerPulmonalklappenprotheseodereinessynthetischenGeraets",
                        display:
                            "Implantation einer Pulmonalklappenprothese oder eines synthetischen Geräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8069005",
                display:
                    "Implantation of tricuspid valve prosthesis or synthetic device (procedure)",
                target: [
                    {
                        code: "ImplantationeinerTrikuspidalklappenprotheseodereinessynthetischenGeraets",
                        display:
                            "Implantation einer Trikuspidalklappenprothese oder eines synthetischen Geräts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233170003",
                display: "Implantation of automatic cardiac defibrillator (procedure)",
                target: [
                    {
                        code: "ImplantationeinesautomatischenHerzdefibrillators",
                        display: "Implantation eines automatischen Herzdefibrillators",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45965006",
                display:
                    "Implantation of automatic cardioverter/defibrillator, total system (procedure)",
                target: [
                    {
                        code: "ImplantationeinesautomatischenKardiovertersDefibrillatorsGesamtsystem",
                        display:
                            "Implantation eines automatischen Kardioverters/Defibrillators, Gesamtsystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307280005",
                display: "Implantation of cardiac pacemaker (procedure)",
                target: [
                    {
                        code: "ImplantationeinesHerzschrittmachers",
                        display: "Implantation eines Herzschrittmachers",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64253000",
                display: "Implantation of heart assist system (procedure)",
                target: [
                    {
                        code: "ImplantationeinesHerzunterstuetzungssystems",
                        display: "Implantation eines Herzunterstützungssystems",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "395218007",
                display: "Implantation of internal cardiac defibrillator (procedure)",
                target: [
                    {
                        code: "ImplantationeinesinternenHerzdefibrillators",
                        display: "Implantation eines internen Herzdefibrillators",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "310582005",
                display:
                    "Implantation of intravenous dual chamber permanent cardiac pacemaker (procedure)",
                target: [
                    {
                        code: "ImplantationeinesintravenoesenZweikammerDauerschrittmachers",
                        display:
                            "Implantation eines intravenösen Zweikammer-Dauerschrittmachers",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442249009",
                display:
                    "Implantation of cardioverter defibrillator with three electrode leads (procedure)",
                target: [
                    {
                        code: "ImplantationeinesKardioverterDefibrillatorsmitdreiElektrodenleitungen",
                        display:
                            "Implantation eines Kardioverter-Defibrillators mit drei Elektrodenleitungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425435003",
                display:
                    "Implantation of cardioverter defibrillator with one electrode lead (procedure)",
                target: [
                    {
                        code: "ImplantationeinesKardioverterDefibrillatorsmiteinerElektrodenleitung",
                        display:
                            "Implantation eines Kardioverter-Defibrillators mit einer Elektrodenleitung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427508005",
                display:
                    "Implantation of cardioverter defibrillator with two electrode leads (procedure)",
                target: [
                    {
                        code: "ImplantationeinesKardioverterDefibrillatorsmitzweiElektrodenleitungen",
                        display:
                            "Implantation eines Kardioverter-Defibrillators mit zwei Elektrodenleitungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30542005",
                display: "Implantation of umbrella into vena cava (procedure)",
                target: [
                    {
                        code: "ImplantationeinesSchirmsindieVenacava",
                        display: "Implantation eines Schirms in die Vena cava",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118955007",
                display: "Implantation to cardiovascular system (procedure)",
                target: [
                    {
                        code: "ImplantationindasHerzKreislaufSystem",
                        display: "Implantation in das Herz-Kreislauf-System",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "245544005",
                display: "Implantation of baffle, atrial or interatrial (procedure)",
                target: [
                    {
                        code: "ImplantationvonBaffleatrialoderinteratrial",
                        display: "Implantation von Baffle, atrial oder interatrial",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52660002",
                display:
                    "Induced abortion following intra-amniotic injection with hysterotomy (procedure)",
                target: [
                    {
                        code: "InduzierterSchwangerschaftsabbruchnachintraamniotischerInjektionmitHysterotomie",
                        display:
                            "Induzierter Schwangerschaftsabbruch nach intra-amniotischer Injektion mit Hysterotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "40250003",
                display: "Interatrial transposition of venous return (procedure)",
                target: [
                    {
                        code: "InteratrialeTranspositiondesvenoesenRueckflusses",
                        display: "Interatriale Transposition des venösen Rückflusses",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257834006",
                display: "Internal fixation using screw (procedure)",
                target: [
                    {
                        code: "InterneFixationmitSchraube",
                        display: "Interne Fixation mit Schraube",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257835007",
                display: "Internal fixation using plate (procedure)",
                target: [
                    {
                        code: "InterneFixationmittelsPlatte",
                        display: "Interne Fixation mittels Platte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257833000",
                display: "Internal fixation using staple (procedure)",
                target: [
                    {
                        code: "InterneFixierungmitKlammer",
                        display: "Interne Fixierung mit Klammer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118470002",
                display: "Internal skeletal fixation (procedure)",
                target: [
                    {
                        code: "InterneSkelettFixierung",
                        display: "Interne Skelett-Fixierung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59657005",
                display: "Intestinal bypass for morbid obesity (procedure)",
                target: [
                    {
                        code: "IntestinalerBypassbeimorbiderAdipositas",
                        display: "Intestinaler Bypass bei morbider Adipositas",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172523009",
                display: "Intracapsular extraction of lens (procedure)",
                target: [
                    {
                        code: "IntrakapsulaereExtraktionderLinse",
                        display: "Intrakapsuläre Extraktion der Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "260216002",
                display: "Intra-capsular cataract extraction (procedure)",
                target: [
                    {
                        code: "IntrakapsulaereKataraktextraktion",
                        display: "Intrakapsuläre Kataraktextraktion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "308695001",
                display:
                    "Intracapsular cataract extraction and insertion of intraocular lens (procedure)",
                target: [
                    {
                        code: "IntrakapsulaereKataraktextraktionundEinsetzeneinerintraokularenLinse",
                        display:
                            "Intrakapsuläre Kataraktextraktion und Einsetzen einer intraokularen Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384692006",
                display: "Intracavitary brachytherapy (procedure)",
                target: [
                    {
                        code: "IntrakavitaereBrachytherapie",
                        display: "Intrakavitäre Brachytherapie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44337006",
                display: "Incision of gallbladder (procedure)",
                target: [
                    {
                        code: "InzisionderGallenblase",
                        display: "Inzision der Gallenblase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "48387007",
                display: "Incision of trachea (procedure)",
                target: [
                    {
                        code: "InzisionderLuftroehre",
                        display: "Inzision der Luftröhre",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56783008",
                display: "Incision AND drainage (procedure)",
                target: [
                    {
                        code: "InzisionUNDDrainage",
                        display: "Inzision UND Drainage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177694006",
                display: "Incision and drainage of wound (procedure)",
                target: [
                    {
                        code: "InzisionundDrainageeinerWunde",
                        display: "Inzision und Drainage einer Wunde",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "284181007",
                display: "Incision and drainage of abscess (procedure)",
                target: [
                    {
                        code: "InzisionundDrainageeinesAbszesses",
                        display: "Inzision und Drainage eines Abszesses",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "70871006",
                display: "Incisional biopsy (procedure)",
                target: [
                    {
                        code: "Inzisionsbiopsie",
                        display: "Inzisionsbiopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "28768007",
                display: "Incisional biopsy of breast mass (procedure)",
                target: [
                    {
                        code: "InzisionsbiopsieeinerBrustmasse",
                        display: "Inzisionsbiopsie einer Brustmasse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11466000",
                display: "Cesarean section (procedure)",
                target: [
                    {
                        code: "Kaiserschnitt",
                        display: "Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "63697000",
                display: "Cardiopulmonary bypass operation (procedure)",
                target: [
                    {
                        code: "KardiopulmonaleBypassOperation",
                        display: "Kardiopulmonale Bypass-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "250980009",
                display: "Cardioversion (procedure)",
                target: [
                    {
                        code: "Kardioversion",
                        display: "Kardioversion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "66951008",
                display: "Carotid endarterectomy (procedure)",
                target: [
                    {
                        code: "Karotisendarteriektomie",
                        display: "Karotisendarteriektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "385468004",
                display:
                    "Cataract extraction and insertion of intraocular lens (procedure)",
                target: [
                    {
                        code: "KataraktextraktionundEinsetzeneinerintraokularenLinse",
                        display:
                            "Kataraktextraktion und Einsetzen einer intraokularen Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18286008",
                display: "Catheter ablation of tissue of heart (procedure)",
                target: [
                    {
                        code: "KatheterablationvonHerzgewebe",
                        display: "Katheterablation von Herzgewebe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "128952006",
                display:
                    "Catheterization of both left and right heart with graft (procedure)",
                target: [
                    {
                        code: "KatheterisierungdeslinkenundrechtenHerzensmitTransplantat",
                        display:
                            "Katheterisierung des linken und rechten Herzens mit Transplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172812000",
                display: "Cauterization of internal nose (procedure)",
                target: [
                    {
                        code: "KauterisationderinnerenNase",
                        display: "Kauterisation der inneren Nase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172805009",
                display: "Cauterization of nasal turbinate (procedure)",
                target: [
                    {
                        code: "KauterisationderNasenmuschel",
                        display: "Kauterisation der Nasenmuschel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307273008",
                display: "Cautery of wart (procedure)",
                target: [
                    {
                        code: "KauterisationeinerWarze",
                        display: "Kauterisation einer Warze",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232632009",
                display: "Wedge excision of lung (procedure)",
                target: [
                    {
                        code: "KeilentfernungderLunge",
                        display: "Keilentfernung der Lunge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "20418004",
                display: "Wedge resection (procedure)",
                target: [
                    {
                        code: "Keilresektion",
                        display: "Keilresektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265703000",
                display: "Jaw and temporomandibular joint operations (procedure)",
                target: [
                    {
                        code: "KieferundKiefergelenksoperationen",
                        display: "Kiefer- und Kiefergelenksoperationen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84195007",
                display: "Classical cesarean section (procedure)",
                target: [
                    {
                        code: "KlassischerKaiserschnitt",
                        display: "Klassischer Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "302369001",
                display: "Clitoridectomy (procedure)",
                target: [
                    {
                        code: "Klitoridektomie",
                        display: "Klitoridektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "19063003",
                display: "Arthroplasty of knee (procedure)",
                target: [
                    {
                        code: "Knieendoprothetik",
                        display: "Knieendoprothetik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "179342005",
                display: "Knee joint operation (procedure)",
                target: [
                    {
                        code: "Kniegelenksoperation",
                        display: "Kniegelenksoperation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "23968004",
                display: "Excision of colon (procedure)",
                target: [
                    {
                        code: "Kolektomie",
                        display: "Kolektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "311774002",
                display: "Colonoscopic polypectomy (procedure)",
                target: [
                    {
                        code: "KolonoskopischePolypektomie",
                        display: "Kolonoskopische Polypektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "398740003",
                display: "Colostomy (procedure)",
                target: [
                    {
                        code: "Kolostomie",
                        display: "Kolostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "57411006",
                display: "Colpoperineorrhaphy following delivery (procedure)",
                target: [
                    {
                        code: "KolpoperineorrhaphienachEntbindung",
                        display: "Kolpoperineorrhaphie nach Entbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "4770005",
                display: "Colporrhaphy for repair of urethrocele (procedure)",
                target: [
                    {
                        code: "KolporrhaphiezurReparaturderHarnroehre",
                        display: "Kolporrhaphie zur Reparatur der Harnröhre",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13910004",
                display: "Combined anteroposterior colporrhaphy (procedure)",
                target: [
                    {
                        code: "KombinierteanteroposterioreKolporrhaphie",
                        display: "Kombinierte anteroposteriore Kolporrhaphie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61498008",
                display: "Complete external hemorrhoidectomy (procedure)",
                target: [
                    {
                        code: "KompletteexterneHaemorrhoidektomie",
                        display: "Komplette externe Hämorrhoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "63016009",
                display: "Total resection of urinary bladder (procedure)",
                target: [
                    {
                        code: "KompletteZystektomie",
                        display: "Komplette Zystektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233022006",
                display:
                    "Construction of conduit - right atrium to pulmonary trunk (procedure)",
                target: [
                    {
                        code: "KonstruktioneinesConduitsrechterVorhofzumTruncuspulmonalis",
                        display:
                            "Konstruktion eines Conduits - rechter Vorhof zum Truncus pulmonalis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429620002",
                display:
                    "Construction of left ventricle to aorta tunnel with right ventricle to pulmonary artery valved conduit (procedure)",
                target: [
                    {
                        code: "KonstruktioneinesTunnelsvonderlinkenHerzkammerzurAortamiteinemConduitvonderrechtenHerzkammerzurPulmonalarterie",
                        display:
                            "Konstruktion eines Tunnels von der linken Herzkammer zur Aorta mit einem Conduit von der rechten Herzkammer zur Pulmonalarterie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54535009",
                display: "Cone biopsy of cervix (procedure)",
                target: [
                    {
                        code: "KonusbiopsiedesGebaermutterhalses",
                        display: "Konusbiopsie des Gebärmutterhalses",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41339005",
                display: "Coronary angioplasty (procedure)",
                target: [
                    {
                        code: "Koronarangioplastie",
                        display: "Koronarangioplastie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10326007",
                display:
                    "Coronary artery bypass with autogenous graft, three grafts (procedure)",
                target: [
                    {
                        code: "KoronararterienBypassmitautogenemTransplantatdreiTransplantate",
                        display:
                            "Koronararterien-Bypass mit autogenem Transplantat, drei Transplantate",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "39202005",
                display:
                    "Coronary artery bypass with autogenous graft, four grafts (procedure)",
                target: [
                    {
                        code: "KoronararterienBypassmitautogenemTransplantatvierTransplantate",
                        display:
                            "Koronararterien-Bypass mit autogenem Transplantat, vier Transplantate",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232721002",
                display: "Coronary artery bypass grafts x 3 (procedure)",
                target: [
                    {
                        code: "KoronararterienBypassTransplantationxdrei",
                        display: "Koronararterien-Bypass-Transplantation  x 3",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232723004",
                display: "Coronary artery bypass grafts x 5 (procedure)",
                target: [
                    {
                        code: "KoronararterienBypassTransplantationxfuenf",
                        display: "Koronararterien-Bypass-Transplantation  x 5",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232720001",
                display: "Coronary artery bypass grafts x 2 (procedure)",
                target: [
                    {
                        code: "KoronararterienBypassTransplantationxzwei",
                        display: "Koronararterien-Bypass-Transplantation x 2",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232722009",
                display: "Coronary artery bypass grafts x 4 (procedure)",
                target: [
                    {
                        code: "KoronararterienBypassTransplantationxvier",
                        display: "Koronararterien-Bypass-Transplantation x 4",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "84088001",
                display: "Correction of atresia of external meatus of ear (procedure)",
                target: [
                    {
                        code: "KorrekturderAtresiedesaeusserenGehoergangs",
                        display: "Korrektur der Atresie des äußeren Gehörgangs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428613004",
                display: "Correction of congenital cardiovascular deformity (procedure)",
                target: [
                    {
                        code: "KorrektureinerangeborenenkardiovaskulaerenDeformitaet",
                        display:
                            "Korrektur einer angeborenen kardiovaskulären Deformität",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76025005",
                display: "Correction of ventricular septal defect (procedure)",
                target: [
                    {
                        code: "KorrektureinesVentrikelseptumdefekts",
                        display: "Korrektur eines Ventrikelseptumdefekts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56306000",
                display: "Cosmetic surgery (procedure)",
                target: [
                    {
                        code: "KosmetischeChirurgie",
                        display: "Kosmetische Chirurgie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25353009",
                display: "Craniotomy (procedure)",
                target: [
                    {
                        code: "Kraniotomie",
                        display: "Kraniotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233161001",
                display: "Cryoablation operation for arrhythmia (procedure)",
                target: [
                    {
                        code: "KryoablationOperationbeiHerzrhythmusstoerungen",
                        display: "Kryoablation-Operation bei Herzrhythmusstörungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427752004",
                display:
                    "Excision of lamina of lumbar vertebra for decompression of spinal cord (procedure)",
                target: [
                    {
                        code: "LaminaexzisionanderLendenwirbelsaeulezurDekompressiondesRueckenmarks",
                        display:
                            "Laminaexzision an der Lendenwirbelsäule zur Dekompression des Rückenmarks",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "282191000",
                display: "Laminotomy for decompression and exploration (procedure)",
                target: [
                    {
                        code: "LaminotomiezurDekompressionundExploration",
                        display: "Laminotomie zur Dekompression und Exploration",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12132004",
                display: "Langenbeck operation, cleft palate repair (procedure)",
                target: [
                    {
                        code: "LangenbeckOperationGaumenspaltreparatur",
                        display: "Langenbeck-Operation, Gaumenspaltreparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6025007",
                display: "Laparoscopic appendectomy (procedure)",
                target: [
                    {
                        code: "LaparoskopischeAppendektomie",
                        display: "Laparoskopische Appendektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45595009",
                display: "Laparoscopic cholecystectomy (procedure)",
                target: [
                    {
                        code: "LaparoskopischeCholezystektomie",
                        display: "Laparoskopische Cholezystektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "67557008",
                display:
                    "Laparoscopic cholecystectomy with exploration of common duct (procedure)",
                target: [
                    {
                        code: "LaparoskopischeCholezystektomiemitErkundungdesDuctuscommunis",
                        display:
                            "Laparoskopische Cholezystektomie mit Erkundung des Ductus communis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236887006",
                display: "Laparoscopic hysterectomy (procedure)",
                target: [
                    {
                        code: "LaparoskopischeHysterektomie",
                        display: "Laparoskopische Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "314128006",
                display:
                    "Laparoscopic Nissen fundoplication using abdominal approach (procedure)",
                target: [
                    {
                        code: "LaparoskopischeNissenFundoplikationmitabdominalemZugang",
                        display:
                            "Laparoskopische Nissen-Fundoplikation mit abdominalem Zugang",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "15018006",
                display: "Laparoscopic repair of inguinal hernia (procedure)",
                target: [
                    {
                        code: "LaparoskopischeReparaturvonLeistenbruch",
                        display: "Laparoskopische Reparatur von Leistenbruch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86481000",
                display: "Laparotomy (procedure)",
                target: [
                    {
                        code: "Laparotomie",
                        display: "Laparotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72791001",
                display: "Laryngectomy (procedure)",
                target: [
                    {
                        code: "Laryngektomie",
                        display: "Laryngektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312965008",
                display: "Laser assisted in situ keratomileusis (procedure)",
                target: [
                    {
                        code: "LaserassistierteInsituKeratomileusis",
                        display: "Laser-assistierte In-situ-Keratomileusis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414582004",
                display: "Laser assisted subepithelial keratomileusis (procedure)",
                target: [
                    {
                        code: "LaserassistiertesubepithelialeKeratomileusis",
                        display: "Laser-assistierte subepitheliale Keratomileusis",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "371345007",
                display: "Laser iridotomy (procedure)",
                target: [
                    {
                        code: "Laseriridotomie",
                        display: "Laseriridotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "399867007",
                display: "Laser photocoagulation to retina (procedure)",
                target: [
                    {
                        code: "LaserPhotokoagulationanderNetzhaut",
                        display: "Laser-Photokoagulation an der Netzhaut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172485001",
                display: "Laser trabeculoplasty (procedure)",
                target: [
                    {
                        code: "Lasertrabekuloplastik",
                        display: "Lasertrabekuloplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "107963000",
                display: "Excision of liver (procedure)",
                target: [
                    {
                        code: "Leberexzision",
                        display: "Leberexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18027006",
                display: "Transplantation of liver (procedure)",
                target: [
                    {
                        code: "Lebertransplantation",
                        display: "Lebertransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444178004",
                display: "Left Glenn shunt procedure (procedure)",
                target: [
                    {
                        code: "LeftGlennShuntVerfahren",
                        display: "Left Glenn Shunt Verfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89432003",
                display: "Lemesurier operation, cleft lip repair (procedure)",
                target: [
                    {
                        code: "LemesurierOperationLippenspaltenreparatur",
                        display: "Lemesurier-Operation, Lippenspaltenreparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "15617002",
                display: "Ligation of varicose vein of lower limb (procedure)",
                target: [
                    {
                        code: "LigaturderKrampfaderderunterenExtremitaet",
                        display: "Ligatur der Krampfader der unteren Extremität",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265542003",
                display: "Ligation of long saphenous vein (procedure)",
                target: [
                    {
                        code: "LigaturderlangenVenasaphenamagna",
                        display: "Ligatur der langen Vena saphena magna",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "77543007",
                display: "Ligation of fallopian tube (procedure)",
                target: [
                    {
                        code: "LigaturdesEileiters",
                        display: "Ligatur des Eileiters",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "133864008",
                display: "Lithotripsy (procedure)",
                target: [
                    {
                        code: "Lithotripsie",
                        display: "Lithotripsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "125571002",
                display: "Lobectomy (procedure)",
                target: [
                    {
                        code: "Lobektomie",
                        display: "Lobektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "173171007",
                display: "Lobectomy of lung (procedure)",
                target: [
                    {
                        code: "LobektomiederLunge",
                        display: "Lobektomie der Lunge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86743009",
                display: "Local excision (procedure)",
                target: [
                    {
                        code: "LokaleExzision",
                        display: "Lokale Exzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "40862005",
                display: "Local excision of skin and subcutaneous tissue (procedure)",
                target: [
                    {
                        code: "LokaleExzisionvonHautundSubkutangewebe",
                        display: "Lokale Exzision von Haut und Subkutangewebe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50172003",
                display: "Lumbar spinal fusion (procedure)",
                target: [
                    {
                        code: "LumbaleWirbelsaeulenfusion",
                        display: "Lumbale Wirbelsäulenfusion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "392021009",
                display: "Lumpectomy of breast (procedure)",
                target: [
                    {
                        code: "LumpektomiederBrust",
                        display: "Lumpektomie der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "88039007",
                display: "Transplant of lung (procedure)",
                target: [
                    {
                        code: "Lungentransplantation",
                        display: "Lungentransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "287310004",
                display: "Lung tumor excision (procedure)",
                target: [
                    {
                        code: "Lungentumorentfernung",
                        display: "Lungentumorentfernung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236946009",
                display: "Macdonald's cervical cerclage (procedure)",
                target: [
                    {
                        code: "MacdonaldszervikaleCerclage",
                        display: "Macdonald's zervikale Cerclage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443906008",
                display:
                    "Bypass of stomach with short limb Roux-en-Y gastroenterostomy (procedure)",
                target: [
                    {
                        code: "MagenbypassmitkurzschenkligerRouxenYGastroenterostomie",
                        display:
                            "Magenbypass mit kurzschenkliger Roux-en-Y-Gastroenterostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50445001",
                display: "Mastoidectomy (procedure)",
                target: [
                    {
                        code: "Mastoidektomie",
                        display: "Mastoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "87021001",
                display: "Mechanical vitrectomy by pars plana approach (procedure)",
                target: [
                    {
                        code: "MechanischeVitrektomiemitParsPlanaAnsatz",
                        display: "Mechanische Vitrektomie mit Pars-Plana-Ansatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174929002",
                display: "Mechanical prosthetic aortic valve replacement (procedure)",
                target: [
                    {
                        code: "MechanischprothetischerAortenklappenersatz",
                        display: "Mechanisch-prothetischer Aortenklappenersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "431339008",
                display: "Mechanical prosthetic mitral valve replacement (procedure)",
                target: [
                    {
                        code: "MechanischprothetischerMitralklappenersatz",
                        display: "Mechanisch-prothetischer Mitralklappenersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384642005",
                display: "Mitral valvuloplasty (procedure)",
                target: [
                    {
                        code: "Mitralvalvuloplastie",
                        display: "Mitralvalvuloplastie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25828002",
                display: "Mid forceps delivery with episiotomy (procedure)",
                target: [
                    {
                        code: "MittlereZangengeburtmitEpisiotomie",
                        display: "Mittlere Zangengeburt mit Episiotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "726437009",
                display: "Modified radical mastectomy of left breast (procedure)",
                target: [
                    {
                        code: "ModifizierteradikaleMastektomiederlinkenBrust",
                        display: "Modifizierte radikale Mastektomie der linken Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "726436000",
                display: "Modified radical mastectomy of right breast (procedure)",
                target: [
                    {
                        code: "ModifizierteradikaleMastektomiederrechtenBrust",
                        display: "Modifizierte radikale Mastektomie der rechten Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "275227003",
                display: "Myocardial revascularization (procedure)",
                target: [
                    {
                        code: "Myokardrevaskularisation",
                        display: "Myokardrevaskularisation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396490007",
                display: "Myringoplasty (procedure)",
                target: [
                    {
                        code: "Myringoplastik",
                        display: "Myringoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172676009",
                display:
                    "Myringotomy and insertion of short-term tympanic ventilation tube (procedure)",
                target: [
                    {
                        code: "MyringotomieundEinsetzeneinesKurzzeitPaukenroehrchens",
                        display:
                            "Myringotomie und Einsetzen eines Kurzzeit-Paukenröhrchens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "275001008",
                display:
                    "Myringotomy and insertion of long-term ventilation tube (procedure)",
                target: [
                    {
                        code: "MyringotomieundEinsetzeneinesLangzeitbeatmungsschlauches",
                        display:
                            "Myringotomie und Einsetzen eines Langzeitbeatmungsschlauches",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "284532000",
                display:
                    "Myringotomy and insertion of tympanic ventilation tube (procedure)",
                target: [
                    {
                        code: "MyringotomieundEinsetzeneinesPaukenroehrchens",
                        display: "Myringotomie und Einsetzen eines Paukenröhrchens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172679002",
                display: "Myringotomy and insertion of T tube (procedure)",
                target: [
                    {
                        code: "MyringotomieundEinsetzeneinesTTubus",
                        display: "Myringotomie und Einsetzen eines T-Tubus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172825008",
                display: "Nasal polypectomy (procedure)",
                target: [
                    {
                        code: "NasalePolypektomie",
                        display: "Nasale Polypektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13529000",
                display: "Nasal septoplasty (procedure)",
                target: [
                    {
                        code: "Nasenscheidewandplastik",
                        display: "Nasenscheidewandplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53610001",
                display: "Nasal septoplasty with graft (procedure)",
                target: [
                    {
                        code: "NasenscheidewandplastikmitTransplantat",
                        display: "Nasenscheidewandplastik mit Transplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "359901001",
                display:
                    "Neuroplasty and transposition of median nerve at carpal tunnel (procedure)",
                target: [
                    {
                        code: "NeuroplastikundTranspositiondesNervusmedianusamKarpaltunnel",
                        display:
                            "Neuroplastik und Transposition des Nervus medianus am Karpaltunnel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "176785004",
                display: "Non-obstetric encircling suture of cervical os (procedure)",
                target: [
                    {
                        code: "NichtobstetischeumlaufendeNahtdesMuttermundes",
                        display: "Nicht-obstetische umlaufende Naht des Muttermundes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17860005",
                display: "Low forceps delivery with episiotomy (procedure)",
                target: [
                    {
                        code: "NiedrigeZangengeburtmitEpisiotomie",
                        display: "Niedrige Zangengeburt mit Episiotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108022006",
                display: "Kidney excision (procedure)",
                target: [
                    {
                        code: "Nierenexzision",
                        display: "Nierenexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "70536003",
                display: "Transplant of kidney (procedure)",
                target: [
                    {
                        code: "Nierentransplantation",
                        display: "Nierentransplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233139006",
                display: "Norwood type operation (procedure)",
                target: [
                    {
                        code: "NorwoodTypOperation",
                        display: "Norwood-Typ-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174036004",
                display: "Emergency appendectomy (procedure)",
                target: [
                    {
                        code: "NotfallAppendektomie",
                        display: "Notfall-Appendektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236986001",
                display: "Emergency upper segment cesarean section (procedure)",
                target: [
                    {
                        code: "NotfallKaiserschnittimoberenSegment",
                        display: "Notfall-Kaiserschnitt im oberen Segment",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236985002",
                display: "Emergency lower segment cesarean section (procedure)",
                target: [
                    {
                        code: "NotfallKaiserschnittimunterenSegment",
                        display: "Notfall-Kaiserschnitt im unteren Segment",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236987005",
                display: "Emergency cesarean hysterectomy (procedure)",
                target: [
                    {
                        code: "NotfallKaiserschnittHysterektomie",
                        display: "Notfall-Kaiserschnitt-Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414088005",
                display: "Emergency coronary artery bypass graft (procedure)",
                target: [
                    {
                        code: "NotfallKoronararterienBypassTransplantation",
                        display: "Notfall-Koronararterien-Bypass-Transplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "175095005",
                display: "Open ablation of atrioventricular node (procedure)",
                target: [
                    {
                        code: "OffeneAblationdesatrioventrikulaerenKnotens",
                        display: "Offene Ablation des atrioventrikulären Knotens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "297709009",
                display:
                    "Open acromioplasty for decompression of rotator cuff (procedure)",
                target: [
                    {
                        code: "OffeneAkromioplastikzurDekompressionderRotatorenmanschette",
                        display:
                            "Offene Akromioplastik zur Dekompression der Rotatorenmanschette",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "119283008",
                display: "Open biopsy (procedure)",
                target: [
                    {
                        code: "OffeneBiopsie",
                        display: "Offene Biopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86480004",
                display: "Open reduction of fracture (procedure)",
                target: [
                    {
                        code: "OffeneRepositioneinerFraktur",
                        display: "Offene Reposition einer Fraktur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "20701002",
                display: "Open reduction of fracture with internal fixation (procedure)",
                target: [
                    {
                        code: "OffeneRepositioneinerFrakturmitinternerFixierung",
                        display: "Offene Reposition einer Fraktur mit interner Fixierung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "83152002",
                display: "Oophorectomy (procedure)",
                target: [
                    {
                        code: "Oophorektomie",
                        display: "Oophorektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112788002",
                display: "Operation on accessory sinus (procedure)",
                target: [
                    {
                        code: "OperationamakzessorischenSinus",
                        display: "Operation am akzessorischen Sinus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "40654000",
                display: "Operation on eyelid (procedure)",
                target: [
                    {
                        code: "OperationamAugenlid",
                        display: "Operation am Augenlid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26476002",
                display: "Operation on bronchus (procedure)",
                target: [
                    {
                        code: "OperationamBronchus",
                        display: "Operation am Bronchus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112698002",
                display: "Operation on joint (procedure)",
                target: [
                    {
                        code: "OperationamGelenk",
                        display: "Operation am Gelenk",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37508003",
                display: "Operation on neck (procedure)",
                target: [
                    {
                        code: "OperationamHals",
                        display: "Operation am Hals",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "392048005",
                display: "Operation on urinary system (procedure)",
                target: [
                    {
                        code: "OperationamHarnsystem",
                        display: "Operation am Harnsystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64915003",
                display: "Operation on heart (procedure)",
                target: [
                    {
                        code: "OperationamHerzen",
                        display: "Operation am Herzen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "57168000",
                display: "Operation on bone (procedure)",
                target: [
                    {
                        code: "OperationamKnochen",
                        display: "Operation am Knochen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16545005",
                display: "Operation on nervous system (procedure)",
                target: [
                    {
                        code: "OperationamNervensystem",
                        display: "Operation am Nervensystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "68265005",
                display: "Operation on the ear (procedure)",
                target: [
                    {
                        code: "OperationamOhr",
                        display: "Operation am Ohr",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34969007",
                display: "Operation on retroperitoneum (procedure)",
                target: [
                    {
                        code: "OperationamRetroperitoneum",
                        display: "Operation am Retroperitoneum",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "21371007",
                display: "Operation on abdominal region (procedure)",
                target: [
                    {
                        code: "OperationanderBauchregion",
                        display: "Operation an der Bauchregion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "392090004",
                display: "Operation on breast (procedure)",
                target: [
                    {
                        code: "OperationanderBrust",
                        display: "Operation an der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73544002",
                display: "Operation on heart valve (procedure)",
                target: [
                    {
                        code: "OperationanderHerzklappe",
                        display: "Operation an der Herzklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86800006",
                display: "Operation on trachea (procedure)",
                target: [
                    {
                        code: "OperationanderLuftroehre",
                        display: "Operation an der Luftröhre",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387714009",
                display: "Operation on lung (procedure)",
                target: [
                    {
                        code: "OperationanderLunge",
                        display: "Operation an der Lunge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49509003",
                display: "Operation on lymphatic structure (procedure)",
                target: [
                    {
                        code: "OperationanderLymphstruktur",
                        display: "Operation an der Lymphstruktur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59300005",
                display: "Operation on spleen (procedure)",
                target: [
                    {
                        code: "OperationanderMilz",
                        display: "Operation an der Milz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "5781000",
                display: "Operation on nasal septum (procedure)",
                target: [
                    {
                        code: "OperationanderNasenscheidewand",
                        display: "Operation an der Nasenscheidewand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "78418002",
                display: "Operation on heart and pericardium (procedure)",
                target: [
                    {
                        code: "OperationanHerzundPerikard",
                        display: "Operation an Herz und Perikard",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12658000",
                display: "Operation on female genital organs (procedure)",
                target: [
                    {
                        code: "OperationanweiblichenGeschlechtsorganen",
                        display: "Operation an weiblichen Geschlechtsorganen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "392011001",
                display: "Operation on skin (procedure)",
                target: [
                    {
                        code: "OperationaufderHaut",
                        display: "Operation auf der Haut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386765006",
                display: "Operation on mediastinum (procedure)",
                target: [
                    {
                        code: "OperationaufMediastinum",
                        display: "Operation auf Mediastinum",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233224003",
                display: "Central aortopulmonary shunt operation (procedure)",
                target: [
                    {
                        code: "OperationdeszentralenaortopulmonalenShunts",
                        display: "Operation des zentralen aortopulmonalen Shunts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "428989006",
                display: "Operation on ganglion cyst (procedure)",
                target: [
                    {
                        code: "OperationeinerGanglionzyste",
                        display: "Operation einer Ganglionzyste",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236991000",
                display: "Operation to facilitate delivery (procedure)",
                target: [
                    {
                        code: "OperationzurGeburtserleichterung",
                        display: "Operation zur Geburtserleichterung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "108021004",
                display: "Operative procedure on male genitourinary system (procedure)",
                target: [
                    {
                        code: "OperationsverfahrenammaennlichenUrogenitalsystem",
                        display: "Operationsverfahren am männlichen Urogenitalsystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "107907001",
                display: "Operative procedure on digestive system (procedure)",
                target: [
                    {
                        code: "OperationsverfahrenamVerdauungssystem",
                        display: "Operationsverfahren am Verdauungssystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "392236004",
                display: "Operative procedure on spinal structure (procedure)",
                target: [
                    {
                        code: "OperationsverfahrenanderWirbelsaeulenstruktur",
                        display: "Operationsverfahren an der Wirbelsäulenstruktur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61661004",
                display: "Operative procedure on foot (procedure)",
                target: [
                    {
                        code: "OperativerEingriffamFuss",
                        display: "Operativer Eingriff am Fuß",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6240004",
                display: "Operative procedure on knee (procedure)",
                target: [
                    {
                        code: "OperativerEingriffamKnie",
                        display: "Operativer Eingriff am Knie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112746006",
                display: "Operative procedure on hand (procedure)",
                target: [
                    {
                        code: "OperativerEingriffanderHand",
                        display: "Operativer Eingriff an der Hand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "78559005",
                display: "Operative procedure on shoulder region (procedure)",
                target: [
                    {
                        code: "OperativerEingriffanderSchulterregion",
                        display: "Operativer Eingriff an der Schulterregion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "85419002",
                display: "Orchidopexy (procedure)",
                target: [
                    {
                        code: "Orchidopexie",
                        display: "Orchidopexie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "48835001",
                display: "Esophagogastric fundoplasty (procedure)",
                target: [
                    {
                        code: "OesophagogastraleFundoplastik",
                        display: "Ösophagogastrale Fundoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "150062003",
                display: "Osteotomy (procedure)",
                target: [
                    {
                        code: "Osteotomie",
                        display: "Osteotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "33149006",
                display: "Pancreatectomy (procedure)",
                target: [
                    {
                        code: "Pankreatektomie",
                        display: "Pankreatektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116241004",
                display: "Pancreaticoduodenectomy (procedure)",
                target: [
                    {
                        code: "Pankreatikoduodenektomie",
                        display: "Pankreatikoduodenektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "53304009",
                display: "Parathyroidectomy (procedure)",
                target: [
                    {
                        code: "Parathyreoidektomie",
                        display: "Parathyreoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "81870009",
                display: "Parotidectomy (procedure)",
                target: [
                    {
                        code: "Parotidektomie",
                        display: "Parotidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38829003",
                display: "Partial excision (procedure)",
                target: [
                    {
                        code: "PartielleExzision",
                        display: "Partielle Exzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387643005",
                display: "Partial hysterectomy (procedure)",
                target: [
                    {
                        code: "PartielleHysterektomie",
                        display: "Partielle Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44378008",
                display: "Partial colectomy with anastomosis (procedure)",
                target: [
                    {
                        code: "PartielleKolektomiemitAnastomose",
                        display: "Partielle Kolektomie mit Anastomose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64368001",
                display: "Partial mastectomy (procedure)",
                target: [
                    {
                        code: "PartielleMastektomie",
                        display: "Partielle Mastektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "81516001",
                display: "Partial nephrectomy (procedure)",
                target: [
                    {
                        code: "PartielleNephrektomie",
                        display: "Partielle Nephrektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "42101009",
                display: "Penetrating keratoplasty (procedure)",
                target: [
                    {
                        code: "PenetrierendeKeratoplastik",
                        display: "Penetrierende Keratoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "77166000",
                display: "Percutaneous balloon valvuloplasty of aortic valve (procedure)",
                target: [
                    {
                        code: "PerkutaneBallonvalvuloplastiederAortenklappe",
                        display: "Perkutane Ballonvalvuloplastie der Aortenklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178668000",
                display: "Percutaneous discectomy (procedure)",
                target: [
                    {
                        code: "PerkutaneDiskektomie",
                        display: "Perkutane Diskektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "313270001",
                display: "Percutaneous insertion of nephrostomy tube (procedure)",
                target: [
                    {
                        code: "PerkutaneEinlageeinerNephrostomieSonde",
                        display: "Perkutane Einlage einer Nephrostomie-Sonde",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "105373008",
                display: "Percutaneous insertion of intravascular filter (procedure)",
                target: [
                    {
                        code: "PerkutaneEinlageeinesintravaskulaerenFilters",
                        display: "Perkutane Einlage eines intravaskulären Filters",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "235159007",
                display:
                    "Percutaneous endoscopic insertion of gastrostomy tube (procedure)",
                target: [
                    {
                        code: "PerkutaneendoskopischeEinlageeinerGastrostomiesonde",
                        display:
                            "Perkutane endoskopische Einlage einer Gastrostomiesonde",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415070008",
                display: "Percutaneous coronary intervention (procedure)",
                target: [
                    {
                        code: "PerkutaneKoronarintervention",
                        display: "Perkutane Koronarintervention",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "175125003",
                display:
                    "Percutaneous transluminal ablation of atrioventricular node (procedure)",
                target: [
                    {
                        code: "PerkutanetransluminaleAblationdesatrioventrikulaerenKnotens",
                        display:
                            "Perkutane transluminale Ablation des atrioventrikulären Knotens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "68457009",
                display: "Percutaneous transluminal balloon angioplasty (procedure)",
                target: [
                    {
                        code: "PerkutanetransluminaleBallonangioplastie",
                        display: "Perkutane transluminale Ballonangioplastie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443829004",
                display:
                    "Percutaneous transluminal balloon angioplasty of coarctation of aorta with insertion of stent (procedure)",
                target: [
                    {
                        code: "PerkutanetransluminaleBallonangioplastiederAortenisthmusstenosemitStentimplantation",
                        display:
                            "Perkutane transluminale Ballonangioplastie der Aortenisthmusstenose mit Stentimplantation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429639007",
                display:
                    "Percutaneous transluminal balloon angioplasty with insertion of stent into coronary artery (procedure)",
                target: [
                    {
                        code: "PerkutanetransluminaleBallonangioplastiemitEinfuehrungeinesStentsindieKoronararterie",
                        display:
                            "Perkutane transluminale Ballonangioplastie mit Einführung eines Stents in die Koronararterie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11101003",
                display: "Percutaneous transluminal coronary angioplasty (procedure)",
                target: [
                    {
                        code: "PerkutanetransluminaleKoronarangioplastie",
                        display: "Perkutane transluminale Koronarangioplastie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397431004",
                display:
                    "Percutaneous transluminal coronary angioplasty with rotoablation, single vessel (procedure)",
                target: [
                    {
                        code: "PerkutanetransluminaleKoronarangioplastiemitRotoablationEinzelgefaess",
                        display:
                            "Perkutane transluminale Koronarangioplastie mit Rotoablation, Einzelgefäß",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441873006",
                display:
                    "Percutaneous replacement of aortic valve using fluoroscopic guidance (procedure)",
                target: [
                    {
                        code: "PerkutanerErsatzeinerAortenklappeunterfluoroskopischerKontrolle",
                        display:
                            "Perkutaner Ersatz einer Aortenklappe unter fluoroskopischer Kontrolle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397516006",
                display: "Photorefractive keratectomy (procedure)",
                target: [
                    {
                        code: "PhotorefraktiveKeratektomie",
                        display: "Photorefraktive Keratektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174396007",
                display: "Pilonidal sinus operation (procedure)",
                target: [
                    {
                        code: "PilonidalsinusOperation",
                        display: "Pilonidalsinus-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "237406004",
                display: "Plastic operation on the breast (procedure)",
                target: [
                    {
                        code: "PlastischeOperationanderBrust",
                        display: "Plastische Operation an der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265473002",
                display: "Plastic repair of aortic valve (procedure)",
                target: [
                    {
                        code: "PlastischeReparaturderAortenklappe",
                        display: "Plastische Reparatur der Aortenklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265472007",
                display: "Plastic repair of mitral valve (procedure)",
                target: [
                    {
                        code: "PlastischeReparaturderMitralklappe",
                        display: "Plastische Reparatur der Mitralklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178155009",
                display: "Plastic repair of tendon (procedure)",
                target: [
                    {
                        code: "PlastischeReparatureinerSehne",
                        display: "Plastische Reparatur einer Sehne",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178517008",
                display: "Primary excision of cervical intervertebral disc (procedure)",
                target: [
                    {
                        code: "PrimaereExzisionderzervikalenBandscheibe",
                        display: "Primäre Exzision der zervikalen Bandscheibe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "178618008",
                display: "Primary lumbar discectomy (procedure)",
                target: [
                    {
                        code: "PrimaerelumbaleDiskektomie",
                        display: "Primäre lumbale Diskektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265132005",
                display:
                    "Primary open reduction and internal fixation of proximal femoral fracture with screw/nail and plate device (procedure)",
                target: [
                    {
                        code: "PrimaereoffeneRepositionundinterneFixationeinerproximalenFemurfrakturmitSchraubeNagelundPlattengeraet",
                        display:
                            "Primäre offene Reposition und interne Fixation einer proximalen Femurfraktur mit Schraube/Nagel und Plattengerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "264959005",
                display: "Primary repair of femoral hernia (procedure)",
                target: [
                    {
                        code: "PrimaereReparatureinerFemoralhernie",
                        display: "Primäre Reparatur einer Femoralhernie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "450350009",
                display: "Primary repair of cleft palate (procedure)",
                target: [
                    {
                        code: "PrimaereReparatureinerGaumenspalte",
                        display: "Primäre Reparatur einer Gaumenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177860007",
                display: "Primary repair of inguinal hernia (procedure)",
                target: [
                    {
                        code: "PrimaereReparatureinerLeistenhernie",
                        display: "Primäre Reparatur einer Leistenhernie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "90470006",
                display: "Prostatectomy (procedure)",
                target: [
                    {
                        code: "Prostatektomie",
                        display: "Prostatektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397956004",
                display: "Prosthetic arthroplasty of the hip (procedure)",
                target: [
                    {
                        code: "ProthetischeEndoprothetikderHuefte",
                        display: "Prothetische Endoprothetik der Hüfte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307279007",
                display: "307279007",
                target: [
                    {
                        code: "ProthetischerErsatzeinerHerzklappe",
                        display: "Prothetischer Ersatz einer Herzklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387711001",
                display: "Pubiotomy to assist delivery (procedure)",
                target: [
                    {
                        code: "PubiotomiezurGeburtshilfe",
                        display: "Pubiotomie zur Geburtshilfe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "85921004",
                display: "Puncture procedure (procedure)",
                target: [
                    {
                        code: "Punktionsverfahren",
                        display: "Punktionsverfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172049005",
                display: "Quadrantectomy of breast (procedure)",
                target: [
                    {
                        code: "QuadrantektomiederBrust",
                        display: "Quadrantektomie der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "51683002",
                display: "Radial keratotomy (procedure)",
                target: [
                    {
                        code: "RadialeKeratotomie",
                        display: "Radiale Keratotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307771009",
                display: "Radical abdominal hysterectomy (procedure)",
                target: [
                    {
                        code: "RadikaleabdominaleHysterektomie",
                        display: "Radikale abdominale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "62141006",
                display: "Radical excision (procedure)",
                target: [
                    {
                        code: "RadikaleExzision",
                        display: "Radikale Exzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "88088007",
                display: "Radical excision with lymph node dissection (procedure)",
                target: [
                    {
                        code: "RadikaleExzisionmitLymphknotendissektion",
                        display: "Radikale Exzision mit Lymphknotendissektion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384723003",
                display: "Radical mastectomy (procedure)",
                target: [
                    {
                        code: "RadikaleMastektomie",
                        display: "Radikale Mastektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "726429001",
                display: "Radical mastectomy of left breast (procedure)",
                target: [
                    {
                        code: "RadikaleMastektomiederlinkenBrust",
                        display: "Radikale Mastektomie der linken Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "726430006",
                display: "Radical mastectomy of right breast (procedure)",
                target: [
                    {
                        code: "RadikaleMastektomiederrechtenBrust",
                        display: "Radikale Mastektomie der rechten Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8782006",
                display: "Radical perineal prostatectomy (procedure)",
                target: [
                    {
                        code: "RadikaleperinealeProstatektomie",
                        display: "Radikale perineale Prostatektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26294005",
                display: "Radical prostatectomy (procedure)",
                target: [
                    {
                        code: "RadikaleProstatektomie",
                        display: "Radikale Prostatektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65551008",
                display: "Radical retropubic prostatectomy (procedure)",
                target: [
                    {
                        code: "RadikaleretropubischeProstatektomie",
                        display: "Radikale retropubische Prostatektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233163003",
                display: "Radiofrequency ablation operation for arrhythmia (procedure)",
                target: [
                    {
                        code: "RadiofrequenzAblationsoperationbeiHerzrhythmusstoerungen",
                        display:
                            "Radiofrequenz-Ablationsoperation bei Herzrhythmusstörungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "312235007",
                display: "Radiolabeled antibody therapy (procedure)",
                target: [
                    {
                        code: "RadiomarkierteAntikoerperTherapie",
                        display: "Radiomarkierte Antikörper-Therapie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64978007",
                display: "Radionuclide therapy for hyperthyroidism (procedure)",
                target: [
                    {
                        code: "RadionuklidTherapiebeiHyperthyreose",
                        display: "Radionuklid-Therapie bei Hyperthyreose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "122470005",
                display: "Reduction of closed fracture (procedure)",
                target: [
                    {
                        code: "ReduktiondergeschlossenenFraktur",
                        display: "Reduktion der geschlossenen Fraktur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "122471009",
                display: "Reduction of open fracture (procedure)",
                target: [
                    {
                        code: "ReduktionoffenerFrakturen",
                        display: "Reduktion offener Frakturen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59214008",
                display: "Reduction mammoplasty (procedure)",
                target: [
                    {
                        code: "Reduktionsmammoplastik",
                        display: "Reduktionsmammoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65854006",
                display: "Reexcision (procedure)",
                target: [
                    {
                        code: "Reexzision",
                        display: "Reexzision",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "33496007",
                display: "Reconstruction of breast (procedure)",
                target: [
                    {
                        code: "RekonstruktionderBrust",
                        display: "Rekonstruktion der Brust",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232470004",
                display: "Reconstruction of nose (procedure)",
                target: [
                    {
                        code: "RekonstruktionderNase",
                        display: "Rekonstruktion der Nase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "239431009",
                display:
                    "Reconstruction of anterior cruciate ligament of knee joint (procedure)",
                target: [
                    {
                        code: "RekonstruktiondesvorderenKreuzbandesamKniegelenk",
                        display: "Rekonstruktion des vorderen Kreuzbandes am Kniegelenk",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "122465003",
                display: "Reconstruction procedure (procedure)",
                target: [
                    {
                        code: "Rekonstruktionsverfahren",
                        display: "Rekonstruktionsverfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112695004",
                display: "Reparative closure (procedure)",
                target: [
                    {
                        code: "ReparativerVerschluss",
                        display: "Reparativer Verschluss",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52247003",
                display: "Repair of aortic valve with tissue graft (procedure)",
                target: [
                    {
                        code: "ReparaturderAortenklappemitGewebetransplantat",
                        display: "Reparatur der Aortenklappe mit Gewebetransplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234892006",
                display: "Repair of cleft of soft palate (procedure)",
                target: [
                    {
                        code: "ReparaturderGaumenspalte",
                        display: "Reparatur der Gaumenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59213002",
                display: "Repair of ruptured supraspinatus tendon, acute (procedure)",
                target: [
                    {
                        code: "ReparaturdergerissenenSupraspinatussehneakut",
                        display: "Reparatur der gerissenen Supraspinatussehne, akut",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "66692001",
                display: "Repair of ruptured supraspinatus tendon, chronic (procedure)",
                target: [
                    {
                        code: "ReparaturdergerissenenSupraspinatussehnechronisch",
                        display: "Reparatur der gerissenen Supraspinatussehne, chronisch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384641003",
                display: "Repair of mitral valve (procedure)",
                target: [
                    {
                        code: "ReparaturderMitralklappe",
                        display: "Reparatur der Mitralklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432394003",
                display: "Repair of mitral valve using fluoroscopic guidance (procedure)",
                target: [
                    {
                        code: "ReparaturderMitralklappeunterfluoroskopischerKontrolle",
                        display:
                            "Reparatur der Mitralklappe unter fluoroskopischer Kontrolle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56060000",
                display: "Repair of musculotendinous cuff of shoulder (procedure)",
                target: [
                    {
                        code: "ReparaturdermuskulotendinoesenManschettederSchulter",
                        display:
                            "Reparatur der muskulotendinösen Manschette der Schulter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8920006",
                display: "Repair of retina for retinal detachment (procedure)",
                target: [
                    {
                        code: "ReparaturderNetzhautbeiNetzhautabloesung",
                        display: "Reparatur der Netzhaut bei Netzhautablösung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "61774002",
                display: "Repair of rotator cuff by suture (procedure)",
                target: [
                    {
                        code: "ReparaturderRotatorenmanschettedurchNaht",
                        display: "Reparatur der Rotatorenmanschette durch Naht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234891004",
                display: "Repair of cleft of hard palate (procedure)",
                target: [
                    {
                        code: "ReparaturderSpaltedeshartenGaumens",
                        display: "Reparatur der Spalte des harten Gaumens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "384643000",
                display: "Repair of tricuspid valve (procedure)",
                target: [
                    {
                        code: "ReparaturderTrikuspidalklappe",
                        display: "Reparatur der Trikuspidalklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "405525004",
                display: "Repair of aneurysm of abdominal aorta (procedure)",
                target: [
                    {
                        code: "ReparaturdesAneurysmasderBauchaorta",
                        display: "Reparatur des Aneurysmas der Bauchaorta",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174836000",
                display: "Repair of defect of the atrioventricular septum (procedure)",
                target: [
                    {
                        code: "ReparaturdesDefektsderatrioventrikulaerenScheidewand",
                        display:
                            "Reparatur des Defekts der atrioventrikulären Scheidewand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441612006",
                display:
                    "Repair of infrarenal abdominal aortic aneurysm with insertion of endovascular stent (procedure)",
                target: [
                    {
                        code: "ReparaturdesinfrarenalenabdominalenAortenaneurysmasmitEinfuehrungeinesendovaskulaerenStents",
                        display:
                            "Reparatur des infrarenalen abdominalen Aortenaneurysmas mit Einführung eines endovaskulären Stents",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386556002",
                display: "Repair of middle ear (procedure)",
                target: [
                    {
                        code: "ReparaturdesMittelohrs",
                        display: "Reparatur des Mittelohrs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "35860002",
                display: "Repair by nailing (procedure)",
                target: [
                    {
                        code: "ReparaturdurchNageln",
                        display: "Reparatur durch Nageln",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "274022008",
                display: "Repair of coarctation of aorta (procedure)",
                target: [
                    {
                        code: "ReparatureinerAortenkoarktation",
                        display: "Reparatur einer Aortenkoarktation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234650003",
                display: "Repair of bilateral cleft lip (procedure)",
                target: [
                    {
                        code: "ReparatureinerbeidseitigenLippenspalte",
                        display: "Reparatur einer beidseitigen Lippenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234890003",
                display: "Repair of cleft palate (procedure)",
                target: [
                    {
                        code: "ReparatureinerGaumenspalte",
                        display: "Reparatur einer Gaumenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56062008",
                display: "Repair of sliding inguinal hernia (procedure)",
                target: [
                    {
                        code: "ReparatureinergleitendenLeistenhernie",
                        display: "Reparatur einer gleitenden Leistenhernie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234647001",
                display: "Repair of cleft lip (procedure)",
                target: [
                    {
                        code: "ReparatureinerLippenspalte",
                        display: "Reparatur einer Lippenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "359908007",
                display: "Repair of paraesophageal diaphragmatic hernia (procedure)",
                target: [
                    {
                        code: "ReparatureinerparaoesophagealenZwerchfellhernie",
                        display: "Reparatur einer paraösophagealen Zwerchfellhernie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174900004",
                display:
                    "Repair of partial anomalous pulmonary venous connection (procedure)",
                target: [
                    {
                        code: "ReparatureinerpartiellenanomalenpulmonalvenoesenVerbindung",
                        display:
                            "Reparatur einer partiellen anomalen pulmonalvenösen Verbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174830006",
                display:
                    "Repair of total anomalous pulmonary venous connection (procedure)",
                target: [
                    {
                        code: "ReparatureinertotalenanomalenpulmonalenVenenverbindung",
                        display:
                            "Reparatur einer totalen anomalen pulmonalen Venenverbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "238192002",
                display: "Repair of ventral hernia (procedure)",
                target: [
                    {
                        code: "ReparatureinerventralenHernie",
                        display: "Reparatur einer ventralen Hernie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "771453009",
                display:
                    "Repair of abdominal aortic aneurysm with insertion of stent (procedure)",
                target: [
                    {
                        code: "ReparatureinesabdominalenAortenaneurysmasmitEinsetzeneinesStents",
                        display:
                            "Reparatur eines abdominalen Aortenaneurysmas mit Einsetzen eines Stents",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "21574003",
                display: "Repair of aneurysm of abdominal aorta with graft (procedure)",
                target: [
                    {
                        code: "ReparatureinesAneurysmasderBauchaortamitTransplantat",
                        display:
                            "Reparatur eines Aneurysmas der Bauchaorta mit Transplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232841002",
                display: "Repair of implanted aortic paravalvular leak (procedure)",
                target: [
                    {
                        code: "ReparatureinesimplantiertenaortalenparavalvulaerenLecks",
                        display:
                            "Reparatur eines implantierten aortalen paravalvulären Lecks",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12660003",
                display: "Repair of complete shoulder cuff avulsion, chronic (procedure)",
                target: [
                    {
                        code: "ReparatureineskomplettenSchultermanschettenausrisseschronisch",
                        display:
                            "Reparatur eines kompletten Schultermanschettenausrisses, chronisch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44946007",
                display: "Repair of umbilical hernia (procedure)",
                target: [
                    {
                        code: "ReparatureinesNabelbruchs",
                        display: "Reparatur eines Nabelbruchs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429653007",
                display: "Repair of reducible inguinal hernia (procedure)",
                target: [
                    {
                        code: "ReparatureinesreponierbarenLeistenbruchs",
                        display: "Reparatur eines reponierbaren Leistenbruchs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "19273005",
                display: "Repair of recurrent inguinal hernia (procedure)",
                target: [
                    {
                        code: "ReparatureinesrezidivierendenLeistenbruchs",
                        display: "Reparatur eines rezidivierenden Leistenbruchs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89814007",
                display:
                    "Repair of ventricular septal defect with prosthesis (procedure)",
                target: [
                    {
                        code: "ReparatureinesVentrikelseptumdefektsmitProthese",
                        display: "Reparatur eines Ventrikelseptumdefekts mit Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30123000",
                display:
                    "Repair of atrial septal defect with prosthesis by closed heart technique (procedure)",
                target: [
                    {
                        code: "ReparatureinesVorhofseptumdefektesmitProtheseingeschlossenerHerztechnik",
                        display:
                            "Reparatur eines Vorhofseptumdefektes mit Prothese in geschlossener Herztechnik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "44558001",
                display: "Repair of inguinal hernia (procedure)",
                target: [
                    {
                        code: "ReparaturvonLeistenbruch",
                        display: "Reparatur von Leistenbruch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429595007",
                display: "Resection of neoplasm of heart (procedure)",
                target: [
                    {
                        code: "ResektioneinesNeoplasmasamHerzen",
                        display: "Resektion eines Neoplasmas am Herzen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "82035006",
                display: "Resection of polyp (procedure)",
                target: [
                    {
                        code: "ResektioneinesPolypen",
                        display: "Resektion eines Polypen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8616005",
                display: "Rhinocheiloplasty repair for cleft lip (procedure)",
                target: [
                    {
                        code: "RhinocheiloplastikbeiLippenspalte",
                        display: "Rhinocheiloplastik bei Lippenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "20805001",
                display: "Rhinoseptoplasty (procedure)",
                target: [
                    {
                        code: "Rhinoseptoplastik",
                        display: "Rhinoseptoplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "444001009",
                display: "Right Glenn shunt procedure (procedure)",
                target: [
                    {
                        code: "RightGlennShuntVerfahren",
                        display: "Right Glenn Shunt Verfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "173747005",
                display: "Roux-en-Y gastrojejunostomy (procedure)",
                target: [
                    {
                        code: "RouxenYGastrojejunostomie",
                        display: "Roux-en-Y-Gastrojejunostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116028008",
                display: "Salpingo-oophorectomy (procedure)",
                target: [
                    {
                        code: "SalpingoOophorektomie",
                        display: "Salpingo-Oophorektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442123009",
                display: "Sano procedure (procedure)",
                target: [
                    {
                        code: "SanoVerfahren",
                        display: "Sano-Verfahren",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13619001",
                display: "Thyroidectomy (procedure)",
                target: [
                    {
                        code: "Schilddruesenentfernung",
                        display: "Schilddrüsenentfernung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56757003",
                display: "Scraping (procedure)",
                target: [
                    {
                        code: "Scraping",
                        display: "Scraping",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89540006",
                display: "Segmental excision and ligation (procedure)",
                target: [
                    {
                        code: "SegmentaleExzisionundLigatur",
                        display: "Segmentale Exzision und Ligatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72342005",
                display: "Shave biopsy (procedure)",
                target: [
                    {
                        code: "ShaveBiopsie",
                        display: "Shave-Biopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "236947000",
                display: "Shirodkar's cervical cerclage (procedure)",
                target: [
                    {
                        code: "ShirodkarszervikaleCerclage",
                        display: "Shirodkar's zervikale Cerclage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26786002",
                display: "Scleral buckling (procedure)",
                target: [
                    {
                        code: "SkleraleKnickung",
                        display: "Sklerale Knickung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177217006",
                display: "Immediate repair of obstetric laceration (procedure)",
                target: [
                    {
                        code: "SofortigeReparatureinergeburtshilflichenRisswunde",
                        display: "Sofortige Reparatur einer geburtshilflichen Risswunde",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177221004",
                display: "Immediate repair of minor obstetric laceration (procedure)",
                target: [
                    {
                        code: "SofortigeReparatureinerkleinengeburtshilflichenRisswunde",
                        display:
                            "Sofortige Reparatur einer kleinen geburtshilflichen Risswunde",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177218001",
                display:
                    "Immediate repair of obstetric laceration of uterus or cervix uteri (procedure)",
                target: [
                    {
                        code: "SofortigeReparatureinerRisswundederGebaermutteroderdesGebaermutterhalses",
                        display:
                            "Sofortige Reparatur einer Risswunde der Gebärmutter oder des Gebärmutterhalses",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177220003",
                display:
                    "Immediate repair of obstetric laceration of vagina and floor of pelvis (procedure)",
                target: [
                    {
                        code: "SofortigeReparatureinerRisswundederVaginaunddesBeckenbodens",
                        display:
                            "Sofortige Reparatur einer Risswunde der Vagina und des Beckenbodens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177219009",
                display:
                    "Immediate repair of obstetric laceration of perineum and sphincter of anus (procedure)",
                target: [
                    {
                        code: "SofortigeReparatureinesgeburtshilflichenRissesdesDammesunddesSchliessmuskelsdesAnus",
                        display:
                            "Sofortige Reparatur eines geburtshilflichen Risses des Dammes und des Schließmuskels des Anus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "234319005",
                display: "Splenectomy (procedure)",
                target: [
                    {
                        code: "Splenektomie",
                        display: "Splenektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303633008",
                display: "Irrigation of maxillary antrum (procedure)",
                target: [
                    {
                        code: "SpuelungdesAntrumsmaxillaris",
                        display: "Spülung des Antrums maxillaris",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45681003",
                display:
                    "Staging operation involving incision, exploration and biopsy (procedure)",
                target: [
                    {
                        code: "StagingOperationmitInzisionExplorationundBiopsie",
                        display:
                            "Staging-Operation mit Inzision, Exploration und Biopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "176548009",
                display: "Standard circumcision (procedure)",
                target: [
                    {
                        code: "StandardBeschneidung",
                        display: "Standard-Beschneidung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "68660007",
                display: "Punch biopsy (procedure)",
                target: [
                    {
                        code: "Stanzbiopsie",
                        display: "Stanzbiopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "69130005",
                display: "Stapedectomy (procedure)",
                target: [
                    {
                        code: "Stapedektomie",
                        display: "Stapedektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41453009",
                display: "Strabismus surgery (procedure)",
                target: [
                    {
                        code: "StrabismusChirurgie",
                        display: "Strabismus-Chirurgie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86749008",
                display: "Stripping and ligation (procedure)",
                target: [
                    {
                        code: "StrippenundLigation",
                        display: "Strippen und Ligation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233456008",
                display: "Stripping of vein (procedure)",
                target: [
                    {
                        code: "StrippingvonVenen",
                        display: "Stripping von Venen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "70183006",
                display: "Subcutaneous mastectomy (procedure)",
                target: [
                    {
                        code: "SubkutaneMastektomie",
                        display: "Subkutane Mastektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172790004",
                display: "Submucous resection of nasal septum (procedure)",
                target: [
                    {
                        code: "SubmukoeseResektionderNasenscheidewand",
                        display: "Submuköse Resektion der Nasenscheidewand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "176795006",
                display: "Subtotal abdominal hysterectomy (procedure)",
                target: [
                    {
                        code: "SubtotaleabdominaleHysterektomie",
                        display: "Subtotale abdominale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49209004",
                display: "Subtotal gastrectomy (procedure)",
                target: [
                    {
                        code: "SubtotaleGastrektomie",
                        display: "Subtotale Gastrektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17744000",
                display: "Subtotal hysterectomy after cesarean delivery (procedure)",
                target: [
                    {
                        code: "SubtotaleHysterektomienachKaiserschnittentbindung",
                        display: "Subtotale Hysterektomie nach Kaiserschnittentbindung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30956003",
                display: "Subtotal thyroidectomy (procedure)",
                target: [
                    {
                        code: "SubtotaleThyreoidektomie",
                        display: "Subtotale Thyreoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129252005",
                display: "Suprapubic cystostomy (procedure)",
                target: [
                    {
                        code: "SuprapubischeZystostomie",
                        display: "Suprapubische Zystostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "387644004",
                display: "Supracervical hysterectomy (procedure)",
                target: [
                    {
                        code: "SuprazervikaleHysterektomie",
                        display: "Suprazervikale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43075005",
                display: "Partial resection of colon (procedure)",
                target: [
                    {
                        code: "TeilresektiondesDickdarms",
                        display: "Teilresektion des Dickdarms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "179390003",
                display:
                    "Therapeutic arthroscopic operations on cavity of knee joint (procedure)",
                target: [
                    {
                        code: "TherapeutischearthroskopischeOperationenanderKniegelenkshoehle",
                        display:
                            "Therapeutische arthroskopische Operationen an der Kniegelenkshöhle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18302006",
                display: "Therapeutic abortion by hysterotomy (procedure)",
                target: [
                    {
                        code: "TherapeutischerSchwangerschaftsabbruchdurchHysterotomie",
                        display:
                            "Therapeutischer Schwangerschaftsabbruch durch Hysterotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "57217008",
                display: "Thompson operation, cleft lip repair (procedure)",
                target: [
                    {
                        code: "ThompsonOperationReparaturderLippenspalte",
                        display: "Thompson-Operation, Reparatur der Lippenspalte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "15023006",
                display:
                    "Thromboendarterectomy with graft of carotid artery by neck incision (procedure)",
                target: [
                    {
                        code: "ThromboendarterektomiemitTransplantatderHalsschlagaderdurchHalsschnitt",
                        display:
                            "Thromboendarterektomie mit Transplantat der Halsschlagader durch Halsschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "173422009",
                display: "Tonsillectomy (procedure)",
                target: [
                    {
                        code: "Tonsillektomie",
                        display: "Tonsillektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "28913000",
                display: "Tonsillectomy and adenoidectomy (procedure)",
                target: [
                    {
                        code: "TonsillektomieundAdenoidektomie",
                        display: "Tonsillektomie und Adenoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116143008",
                display: "Total abdominal hysterectomy (procedure)",
                target: [
                    {
                        code: "TotaleabdominaleHysterektomie",
                        display: "Totale abdominale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116144002",
                display:
                    "Total abdominal hysterectomy with bilateral salpingo-oophorectomy (procedure)",
                target: [
                    {
                        code: "TotaleabdominaleHysterektomiemitbeidseitigerSalpingoOophorektomie",
                        display:
                            "Totale abdominale Hysterektomie mit beidseitiger Salpingo-Oophorektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "183668008",
                display: "Total avulsion of nail plate (procedure)",
                target: [
                    {
                        code: "TotaleAvulsionderNagelplatte",
                        display: "Totale Avulsion der Nagelplatte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "86477000",
                display:
                    "Total hysterectomy with removal of both tubes and ovaries (procedure)",
                target: [
                    {
                        code: "TotaleHysterektomiemitEntfernungbeiderEileiterundEierstoecke",
                        display:
                            "Totale Hysterektomie mit Entfernung beider Eileiter und Eierstöcke",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "427886002",
                display:
                    "Total cavopulmonary connection with lateral atrial tunnel (procedure)",
                target: [
                    {
                        code: "TotalekavopulmonaleVerbindungmitlateralemVorhoftunnel",
                        display:
                            "Totale kavopulmonale Verbindung mit lateralem Vorhoftunnel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26390003",
                display: "Total colectomy (procedure)",
                target: [
                    {
                        code: "TotaleKolektomie",
                        display: "Totale Kolektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "359623004",
                display: "Total lobectomy of lung (procedure)",
                target: [
                    {
                        code: "TotaleLobektomiederLunge",
                        display: "Totale Lobektomie der Lunge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "175905003",
                display: "Total nephrectomy (procedure)",
                target: [
                    {
                        code: "TotaleNephrektomie",
                        display: "Totale Nephrektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49795001",
                display: "Total pneumonectomy (procedure)",
                target: [
                    {
                        code: "TotalePneumonektomie",
                        display: "Totale Pneumonektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174776001",
                display: "Total splenectomy (procedure)",
                target: [
                    {
                        code: "TotaleSplenektomie",
                        display: "Totale Splenektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24443003",
                display: "Total thyroidectomy (procedure)",
                target: [
                    {
                        code: "TotaleThyreoidektomie",
                        display: "Totale Thyreoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443681002",
                display: "Total replacement of left knee joint (procedure)",
                target: [
                    {
                        code: "TotalerErsatzdeslinkenKniegelenks",
                        display: "Totaler Ersatz des linken Kniegelenks",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443682009",
                display: "Total replacement of right knee joint (procedure)",
                target: [
                    {
                        code: "TotalerErsatzdesrechtenKniegelenks",
                        display: "Totaler Ersatz des rechten Kniegelenks",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "609588000",
                display: "Total knee replacement (procedure)",
                target: [
                    {
                        code: "TotalerKnieersatz",
                        display: "Totaler Knieersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265157000",
                display:
                    "Total prosthetic replacement of hip joint using cement (procedure)",
                target: [
                    {
                        code: "TotalerprothetischerErsatzdesHueftgelenksmitZement",
                        display:
                            "Totaler prothetischer Ersatz des Hüftgelenks mit Zement",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265170009",
                display:
                    "Total prosthetic replacement of knee joint using cement (procedure)",
                target: [
                    {
                        code: "TotalerprothetischerErsatzdesKniegelenksmitZement",
                        display:
                            "Totaler prothetischer Ersatz des Kniegelenks mit Zement",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "42262007",
                display: "Total shoulder replacement (procedure)",
                target: [
                    {
                        code: "TotalerSchulterersatz",
                        display: "Totaler Schulterersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52734007",
                display: "Total replacement of hip (procedure)",
                target: [
                    {
                        code: "TotalersatzderHuefte",
                        display: "Totalersatz der Hüfte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "87366001",
                display: "Total elbow replacement (procedure)",
                target: [
                    {
                        code: "TotalersatzdesEllenbogens",
                        display: "Totalersatz des Ellenbogens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "30880003",
                display: "Trabeculectomy ab externo (procedure)",
                target: [
                    {
                        code: "Trabekulektomieabexterno",
                        display: "Trabekulektomie ab externo",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233445008",
                display: "Transjugular intrahepatic portosystemic shunt (procedure)",
                target: [
                    {
                        code: "TransjugulaererintrahepatischerportosystemischerShunt",
                        display:
                            "Transjugulärer intrahepatischer portosystemischer Shunt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "62438007",
                display: "Transplantation of pancreas (procedure)",
                target: [
                    {
                        code: "TransplantationderBauchspeicheldruese",
                        display: "Transplantation der Bauchspeicheldrüse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "119762001",
                display: "Cardiovascular system transplantation (procedure)",
                target: [
                    {
                        code: "TransplantationdeskardiovaskulaerenSystems",
                        display: "Transplantation des kardiovaskulären Systems",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "443887000",
                display:
                    "Grafting of aortic valve prosthesis by transapical approach (procedure)",
                target: [
                    {
                        code: "TransplantationeinerAortenklappenprotheseuebereinentransapikalenZugang",
                        display:
                            "Transplantation einer Aortenklappenprothese über einen transapikalen Zugang",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "313039003",
                display: "Solid organ transplant (procedure)",
                target: [
                    {
                        code: "TransplantationfesterOrgane",
                        display: "Transplantation fester Organe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "56283009",
                display: "Transplantation of small intestine (procedure)",
                target: [
                    {
                        code: "TransplantationvonDuenndarm",
                        display: "Transplantation von Dünndarm",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "90199006",
                display: "Transurethral prostatectomy (procedure)",
                target: [
                    {
                        code: "TransurethraleProstatektomie",
                        display: "Transurethrale Prostatektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50590007",
                display: "Trephine biopsy (procedure)",
                target: [
                    {
                        code: "Trepanationsbiopsie",
                        display: "Trepanationsbiopsie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8378006",
                display: "Trimming (procedure)",
                target: [
                    {
                        code: "Trimmen",
                        display: "Trimmen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "31932005",
                display: "Tympanomastoidectomy (procedure)",
                target: [
                    {
                        code: "Tympanomastoidektomie",
                        display: "Tympanomastoidektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "397760009",
                display: "Tympanotomy (procedure)",
                target: [
                    {
                        code: "Tympanotomie",
                        display: "Tympanotomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112727005",
                display: "Revision of hip replacement (procedure)",
                target: [
                    {
                        code: "UeberarbeitungdesHueftersatzes",
                        display: "Überarbeitung des Hüftersatzes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243306000",
                display: "Ureteroileostomy (procedure)",
                target: [
                    {
                        code: "Ureteroileostomie",
                        display: "Ureteroileostomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265056007",
                display: "Vaginal hysterectomy (procedure)",
                target: [
                    {
                        code: "VaginaleHysterektomie",
                        display: "Vaginale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "89053004",
                display: "Vaginal cesarean section (procedure)",
                target: [
                    {
                        code: "VaginalerKaiserschnitt",
                        display: "Vaginaler Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112816004",
                display: "Valvuloplasty of aortic valve (procedure)",
                target: [
                    {
                        code: "ValvuloplastiederAortenklappe",
                        display: "Valvuloplastie der Aortenklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "274023003",
                display: "Varicose vein operation (procedure)",
                target: [
                    {
                        code: "Varizenoperation",
                        display: "Varizenoperation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "265855005",
                display: "Varicose vein stripping (procedure)",
                target: [
                    {
                        code: "Varizenstripping",
                        display: "Varizenstripping",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22523008",
                display: "Vasectomy (procedure)",
                target: [
                    {
                        code: "Vasektomie",
                        display: "Vasektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "47020004",
                display: "Ventriculoperitoneal shunt (procedure)",
                target: [
                    {
                        code: "VentrikuloperitonealerShunt",
                        display: "Ventrikuloperitonealer Shunt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118804001",
                display: "Procedure on blood vessel (procedure)",
                target: [
                    {
                        code: "VerfahrenamBlutgefaess",
                        display: "Verfahren am Blutgefäß",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118831003",
                display: "Procedure on intestine (procedure)",
                target: [
                    {
                        code: "VerfahrenamDarm",
                        display: "Verfahren am Darm",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118950002",
                display: "Procedure on head AND/OR neck (procedure)",
                target: [
                    {
                        code: "VerfahrenamKopfundoderHals",
                        display: "Verfahren am Kopf und / oder Hals",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118683007",
                display: "Procedure on ear and related structures (procedure)",
                target: [
                    {
                        code: "VerfahrenamOhrundverwandtenStrukturen",
                        display: "Verfahren am Ohr und verwandten Strukturen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118675001",
                display: "Procedure on female genital system (procedure)",
                target: [
                    {
                        code: "VerfahrenamweiblichenGenitalsystem",
                        display: "Verfahren am weiblichen Genitalsystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118949002",
                display: "Procedure on extremity (procedure)",
                target: [
                    {
                        code: "VerfahrenanderExtremitaet",
                        display: "Verfahren an der Extremität",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118795000",
                display: "Procedure on pleura (procedure)",
                target: [
                    {
                        code: "VerfahrenaufPleura",
                        display: "Verfahren auf Pleura",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118716003",
                display: "Procedure on foot (procedure)",
                target: [
                    {
                        code: "VerfahrenzuFuss",
                        display: "Verfahren zu Fuß",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8422009",
                display: "Destruction of hemorrhoids by sclerotherapy (procedure)",
                target: [
                    {
                        code: "VeroedungvonHaemorrhoidendurchSklerosierung",
                        display: "Verödung von Hämorrhoiden durch Sklerosierung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "233199008",
                display: "Closure of ductus arteriosus with clip (procedure)",
                target: [
                    {
                        code: "VerschlussdesDuctusarteriosusmitClip",
                        display: "Verschluss des Ductus arteriosus mit Clip",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441676000",
                display:
                    "Occlusion of patent ductus arteriosus using embolization coil (procedure)",
                target: [
                    {
                        code: "VerschlussdesDuctusarteriosusmittelsEmbolisationsspule",
                        display:
                            "Verschluss des Ductus arteriosus mittels Embolisationsspule",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "41817002",
                display: "Closure of patent foramen ovale (procedure)",
                target: [
                    {
                        code: "VerschlussdesoffenenForamenovale",
                        display: "Verschluss des offenen Foramen ovale",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432670006",
                display:
                    "Closure of patent foramen ovale using fluoroscopic guidance (procedure)",
                target: [
                    {
                        code: "VerschlussdesoffenenForamenovaleunterDurchleuchtung",
                        display:
                            "Verschluss des offenen Foramen ovale unter Durchleuchtung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442087005",
                display:
                    "Closure of ventricular septal defect using fluoroscopic guidance (procedure)",
                target: [
                    {
                        code: "VerschlussdesVentrikelseptumdefektsunterDurchleuchtungssteuerung",
                        display:
                            "Verschluss des Ventrikelseptumdefekts unter Durchleuchtungssteuerung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "432114008",
                display:
                    "Closure of atrial septal defect using fluoroscopic guidance (procedure)",
                target: [
                    {
                        code: "VerschlussdesVorhofseptumdefektsunterfluoroskopischerKontrolle",
                        display:
                            "Verschluss des Vorhofseptumdefekts unter fluoroskopischer Kontrolle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18557009",
                display: "Closure by suture (procedure)",
                target: [
                    {
                        code: "VerschlussdurchNaht",
                        display: "Verschluss durch Naht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11050006",
                display: "Closure of vesicouterine fistula with hysterectomy (procedure)",
                target: [
                    {
                        code: "VerschlusseinervesikouterinenFistelmitHysterektomie",
                        display:
                            "Verschluss einer vesiko-uterinen Fistel mit Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112811009",
                display: "Closure of atrial septal defect (procedure)",
                target: [
                    {
                        code: "VerschlusseinesVorhofseptumdefekts",
                        display: "Verschluss eines Vorhofseptumdefekts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "75732000",
                display: "Vitrectomy (procedure)",
                target: [
                    {
                        code: "Vitrektomie",
                        display: "Vitrektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "79095000",
                display: "Complete excision of organ (procedure)",
                target: [
                    {
                        code: "VollstaendigeExzisiondesOrgans",
                        display: "Vollständige Exzision des Organs",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "87795007",
                display:
                    "Complete transurethral resection of prostate, including control of postoperative bleeding (procedure)",
                target: [
                    {
                        code: "VollstaendigetransurethraleResektionderProstataeinschliesslichKontrollederNachblutung",
                        display:
                            "Vollständige transurethrale Resektion der Prostata, einschließlich Kontrolle der Nachblutung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "174822005",
                display: "Atrial inversion operation using atrial wall (procedure)",
                target: [
                    {
                        code: "VorhofinversionsoperationmitVorhofwand",
                        display: "Vorhofinversionsoperation mit Vorhofwand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177141003",
                display: "Elective cesarean section (procedure)",
                target: [
                    {
                        code: "WahlweiserKaiserschnitt",
                        display: "Wahlweiser Kaiserschnitt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177142005",
                display: "Elective upper segment cesarean section (procedure)",
                target: [
                    {
                        code: "WahlweiserKaiserschnittimoberenSegment",
                        display: "Wahlweiser Kaiserschnitt im oberen Segment",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177143000",
                display: "Elective lower segment cesarean section (procedure)",
                target: [
                    {
                        code: "WahlweiserKaiserschnittimunterenSegment",
                        display: "Wahlweiser Kaiserschnitt im unteren Segment",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "68792000",
                display: "Wardill operation, cleft palate repair (procedure)",
                target: [
                    {
                        code: "WardillOperationGaumenspaltreparatur",
                        display: "Wardill-Operation, Gaumenspaltreparatur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "361222003",
                display: "Wertheim-Meigs abdominal hysterectomy (procedure)",
                target: [
                    {
                        code: "WertheimMeigsabdominaleHysterektomie",
                        display: "Wertheim-Meigs abdominale Hysterektomie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "361223008",
                display: "Wertheim operation (procedure)",
                target: [
                    {
                        code: "WertheimOperation",
                        display: "Wertheim-Operation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "239503002",
                display: "Resurfacing of the patella (procedure)",
                target: [
                    {
                        code: "WiederherstellungderKniescheibe",
                        display: "Wiederherstellung der Kniescheibe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "445185007",
                display: "Resurfacing of head of femur (procedure)",
                target: [
                    {
                        code: "WiederherstellungdesOberschenkelkopfes",
                        display: "Wiederherstellung des Oberschenkelkopfes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "55705006",
                display: "Spinal arthrodesis (procedure)",
                target: [
                    {
                        code: "WirbelsaeulenArthrodese",
                        display: "Wirbelsäulen-Arthrodese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172532006",
                display: "Yttrium-aluminum-garnet laser capsulotomy of lens (procedure)",
                target: [
                    {
                        code: "YttriumAluminiumGranatLaserKapsulotomiederLinse",
                        display: "Yttrium-Aluminium-Granat-Laser-Kapsulotomie der Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "172524003",
                display: "Forceps extraction of lens (procedure)",
                target: [
                    {
                        code: "ZangenextraktioneinerLinse",
                        display: "Zangenextraktion einer Linse",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "81099000",
                display: "Cervical arthrodesis (procedure)",
                target: [
                    {
                        code: "ZervikaleArthrodese",
                        display: "Zervikale Arthrodese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59703009",
                display: "Cervical arthrodesis by anterior technique (procedure)",
                target: [
                    {
                        code: "ZervikaleArthrodeseinanteriorerTechnik",
                        display: "Zervikale Arthrodese in anteriorer Technik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72310004",
                display: "Circumcision (procedure)",
                target: [
                    {
                        code: "Zirkumzision",
                        display: "Zirkumzision",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default NFDProcedureGerman;
