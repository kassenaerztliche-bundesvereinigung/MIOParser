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

// Diese ConceptMap verknüpft die Codes für Medizinprodukt mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const NFDImplantGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Implant_German",
        element: [
            {
                code: "84683006",
                display: "Aortic valve prosthesis (physical object)",
                target: [
                    {
                        code: "Aortenklappenprothese",
                        display: "Aortenklappenprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360046005",
                display: "Arterial stent (physical object)",
                target: [
                    {
                        code: "ArteriellerStent",
                        display: "Arterieller Stent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303608005",
                display: "Ophthalmological implant (physical object)",
                target: [
                    {
                        code: "Augenimplantat",
                        display: "Augenimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "421168009",
                display: "Eye sphere implant (physical object)",
                target: [
                    {
                        code: "Augenkugelimplantat",
                        display: "Augenkugelimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2282003",
                display: "Prosthetic breast implant (physical object)",
                target: [
                    {
                        code: "Brustprothese",
                        display: "Brustprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "63289001",
                display: "Surgical metal nail, device (physical object)",
                target: [
                    {
                        code: "ChirurgischerMetallnagelGeraet",
                        display: "Chirurgischer Metallnagel, Gerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43252007",
                display: "Cochlear prosthesis, device (physical object)",
                target: [
                    {
                        code: "CochleaProthese",
                        display: "Cochlea-Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360329004",
                display: "Polyethylene terephthalate graft (physical object)",
                target: [
                    {
                        code: "DacronTransplantat",
                        display: "Dacron-Transplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257327003",
                display: "Dynamic hip screw plate (physical object)",
                target: [
                    {
                        code: "DHSPlatte",
                        display: "DHS-Platte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303277008",
                display: "Fallopian tube prosthesis (physical object)",
                target: [
                    {
                        code: "Eileiterprothese",
                        display: "Eileiterprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "102314001",
                display: "Embolization coil, device (physical object)",
                target: [
                    {
                        code: "Embolisationsspule",
                        display: "Embolisationsspule",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "272307009",
                display: "Endosseous oral implant (physical object)",
                target: [
                    {
                        code: "EnossalesoralesImplantat",
                        display: "Enossales orales Implantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360104003",
                display: "Extracochlear prosthesis (physical object)",
                target: [
                    {
                        code: "ExtracochleaereProthese",
                        display: "Extracochleäre Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "74444006",
                display: "Limb prosthesis, device (physical object)",
                target: [
                    {
                        code: "Extremitaetenprothese",
                        display: "Extremitätenprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304121006",
                display: "Femoral head prosthesis (physical object)",
                target: [
                    {
                        code: "Femurkopfprothese",
                        display: "Femurkopfprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304185004",
                display: "Foot joint implant (physical object)",
                target: [
                    {
                        code: "Fussgelenkimplantat",
                        display: "Fußgelenkimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360123005",
                display: "Biliary stent (physical object)",
                target: [
                    {
                        code: "Gallenstent",
                        display: "Gallenstent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303617005",
                display: "Vascular implant (physical object)",
                target: [
                    {
                        code: "Gefaessimplantat",
                        display: "Gefäßimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "102303004",
                display: "Vascular prosthesis, device (physical object)",
                target: [
                    {
                        code: "Gefaessprothese",
                        display: "Gefäßprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "314523008",
                display: "Joint implant (physical object)",
                target: [
                    {
                        code: "Gelenkimplantat",
                        display: "Gelenkimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304186003",
                display: "Hand joint implant (physical object)",
                target: [
                    {
                        code: "Handgelenkimplantat",
                        display: "Handgelenkimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34759008",
                display: "Urethral catheter, device (physical object)",
                target: [
                    {
                        code: "Harnroehrenkatheter",
                        display: "Harnröhrenkatheter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "286576009",
                display: "Urethral stent (physical object)",
                target: [
                    {
                        code: "Harnroehrenstent",
                        display: "Harnröhrenstent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303619008",
                display: "Cardiac implant (physical object)",
                target: [
                    {
                        code: "Herzimplantat",
                        display: "Herzimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25510005",
                display: "Cardiac valve prosthesis (physical object)",
                target: [
                    {
                        code: "Herzklappenprothese",
                        display: "Herzklappenprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303490004",
                display: "Cardiovascular implant (physical object)",
                target: [
                    {
                        code: "HerzKreislaufImplantat",
                        display: "Herz-Kreislauf-Implantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "264824009",
                display: "Cardiac conduit (physical object)",
                target: [
                    {
                        code: "Herzleitung",
                        display: "Herzleitung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118375008",
                display: "Cardiac septum prosthesis, device (physical object)",
                target: [
                    {
                        code: "HerzscheidewandProthese",
                        display: "Herzscheidewand-Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14106009",
                display: "Cardiac pacemaker, device (physical object)",
                target: [
                    {
                        code: "Herzschrittmacher",
                        display: "Herzschrittmacher",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360129009",
                display: "Cardiac pacemaker lead (physical object)",
                target: [
                    {
                        code: "HerzschrittmacherElektrode",
                        display: "Herzschrittmacher-Elektrode",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6012004",
                display: "Hearing aid, device (physical object)",
                target: [
                    {
                        code: "Hoergeraet",
                        display: "Hörgerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303500007",
                display: "Auditory implant (physical object)",
                target: [
                    {
                        code: "Hoerimplantat",
                        display: "Hörimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303533002",
                display: "Hip joint implant (physical object)",
                target: [
                    {
                        code: "Hueftgelenkimplantat",
                        display: "Hüftgelenkimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "67270000",
                display: "Hip prosthesis, device (physical object)",
                target: [
                    {
                        code: "Hueftprothese",
                        display: "Hüftprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "417136005",
                display: "Ileostomy bag (physical object)",
                target: [
                    {
                        code: "IleostomieBeutel",
                        display: "Ileostomie-Beutel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "342706005",
                display: "Ileostomy set (physical object)",
                target: [
                    {
                        code: "IleostomieSet",
                        display: "Ileostomie-Set",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303618000",
                display: "Nervous system implant (physical object)",
                target: [
                    {
                        code: "ImplantatdesNervensystems",
                        display: "Implantat des Nervensystems",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72506001",
                display: "Implantable defibrillator, device (physical object)",
                target: [
                    {
                        code: "ImplantierbarerDefibrillator",
                        display: "Implantierbarer Defibrillator",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "398013009",
                display: "Implantable venous access port (physical object)",
                target: [
                    {
                        code: "ImplantierbarervenoeserZugang",
                        display: "Implantierbarer venöser Zugang",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360041000",
                display: "Implanted drug delivery system (physical object)",
                target: [
                    {
                        code: "ImplantiertesArzneimittelabgabesystem",
                        display: "Implantiertes Arzneimittelabgabesystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "272287005",
                display: "Inlay dental restoration (physical object)",
                target: [
                    {
                        code: "InlayZahnersatz",
                        display: "Inlay-Zahnersatz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360103009",
                display: "Intracochlear prosthesis (physical object)",
                target: [
                    {
                        code: "IntracochleaereProthese",
                        display: "Intracochleäre Prothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "268460000",
                display: "Intrauterine contraceptive device (physical object)",
                target: [
                    {
                        code: "IntrauterinesVerhuetungsmittel",
                        display: "Intrauterines Verhütungsmittel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360058005",
                display: "Intraventricular pump (physical object)",
                target: [
                    {
                        code: "IntraventrikulaerePumpe",
                        display: "Intraventrikuläre Pumpe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257366006",
                display: "JJ stent (physical object)",
                target: [
                    {
                        code: "JJStent",
                        display: "JJ-Stent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "413766009",
                display: "Carotid artery stent (physical object)",
                target: [
                    {
                        code: "Karotisstent",
                        display: "Karotisstent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "19923001",
                display: "Catheter, device (physical object)",
                target: [
                    {
                        code: "Katheter",
                        display: "Katheter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360070009",
                display: "Laryngeal implant (physical object)",
                target: [
                    {
                        code: "Kehlkopfimplantat",
                        display: "Kehlkopfimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "414580007",
                display: "Laryngeal keel (physical object)",
                target: [
                    {
                        code: "Kehlkopfkiel",
                        display: "Kehlkopfkiel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "272245008",
                display: "Maxillofacial prosthesis/appliance (physical object)",
                target: [
                    {
                        code: "KieferundGesichtsprothesegeraet",
                        display: "Kiefer- und Gesichtsprothese / -gerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "63112008",
                display: "Bone wire, device (physical object)",
                target: [
                    {
                        code: "Knochendraht",
                        display: "Knochendraht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "77777004",
                display: "Bone staple, device (physical object)",
                target: [
                    {
                        code: "Knochenheftklammer",
                        display: "Knochenheftklammer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271003",
                display: "Bone plate, device (physical object)",
                target: [
                    {
                        code: "Knochenplatte",
                        display: "Knochenplatte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360145006",
                display: "Bone prosthesis (physical object)",
                target: [
                    {
                        code: "Knochenprothese",
                        display: "Knochenprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "68183006",
                display: "Bone screw, device (physical object)",
                target: [
                    {
                        code: "Knochenschraube",
                        display: "Knochenschraube",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "77444004",
                display: "Bone pin, device (physical object)",
                target: [
                    {
                        code: "Knochenstift",
                        display: "Knochenstift",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "339648008",
                display: "Colostomy bag (physical object)",
                target: [
                    {
                        code: "Kolostomiebeutel",
                        display: "Kolostomiebeutel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "341036005",
                display: "Colostomy set (physical object)",
                target: [
                    {
                        code: "KolostomieSet",
                        display: "Kolostomie-Set",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304070008",
                display: "Body wall implant (physical object)",
                target: [
                    {
                        code: "Koerperwandimplantat",
                        display: "Körperwandimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "429798007",
                display: "Artificial vertebral disc (physical object)",
                target: [
                    {
                        code: "KuenstlicheBandscheibe",
                        display: "Künstliche Bandscheibe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24073000",
                display: "Artificial cardiac valve prosthesis, device (physical object)",
                target: [
                    {
                        code: "KuenstlicheHerzklappenprothese",
                        display: "Künstliche Herzklappenprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257362008",
                display: "Plastic stent (physical object)",
                target: [
                    {
                        code: "KunststoffStent",
                        display: "Kunststoff-Stent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257282009",
                display: "Non-valved conduit (physical object)",
                target: [
                    {
                        code: "LeitungohneVentil",
                        display: "Leitung ohne Ventil",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360117000",
                display: "Gastric bubble (physical object)",
                target: [
                    {
                        code: "Magenblase",
                        display: "Magenblase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303499003",
                display: "Gastrointestinal implant (physical object)",
                target: [
                    {
                        code: "MagenDarmImplantat",
                        display: "Magen-Darm-Implantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "90134004",
                display: "Metal periosteal implant, device (physical object)",
                target: [
                    {
                        code: "Metallperiostimplantat",
                        display: "Metallperiostimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257363003",
                display: "Metal stent (physical object)",
                target: [
                    {
                        code: "MetallStent",
                        display: "Metall-Stent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17107009",
                display: "Mitral valve prosthesis (physical object)",
                target: [
                    {
                        code: "Mitralklappenprothese",
                        display: "Mitralklappenprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303503009",
                display: "Musculoskeletal implant (physical object)",
                target: [
                    {
                        code: "MuskelSkelettImplantat",
                        display: "Muskel-Skelett-Implantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25937001",
                display: "Neurostimulator, device (physical object)",
                target: [
                    {
                        code: "NeurostimulatorGeraet",
                        display: "Neurostimulator, Gerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303515008",
                display: "Orbital implant (physical object)",
                target: [
                    {
                        code: "Orbitalimplantat",
                        display: "Orbitalimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16349000",
                display: "Orthopedic device (physical object)",
                target: [
                    {
                        code: "OrthopaedischesGeraet",
                        display: "Orthopädisches Gerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "31031000",
                display: "Orthopedic internal fixation system, device (physical object)",
                target: [
                    {
                        code: "OrthopaedischesinternesFixationssystem",
                        display: "Orthopädisches internes Fixationssystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45633005",
                display: "Peritoneal dialyzer, device (physical object)",
                target: [
                    {
                        code: "Peritonealdialysator",
                        display: "Peritonealdialysator",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "102319006",
                display:
                    "Percutaneous transluminal angioplasty balloon, device (physical object)",
                target: [
                    {
                        code: "PerkutanetransluminaleAngioplastieBallon",
                        display: "Perkutane transluminale Angioplastie Ballon",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424921004",
                display: "Permanent cardiac pacemaker, device (physical object)",
                target: [
                    {
                        code: "PermanenterHerzschrittmacherGeraet",
                        display: "Permanenter Herzschrittmacher, Gerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360063009",
                display: "Prosthetic cardiac annuloplasty ring (physical object)",
                target: [
                    {
                        code: "ProthesenringfuerdieHerzanuloplastik",
                        display: "Prothesenring für die Herzanuloplastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423449009",
                display: "Pulmonary valve prosthesis (physical object)",
                target: [
                    {
                        code: "PulmonalklappenprotheseGeraet",
                        display: "Pulmonalklappenprothese, Gerät",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118378005",
                display: "Pacemaker pulse generator, device (physical object)",
                target: [
                    {
                        code: "SchrittmacherImpulsgeber",
                        display: "Schrittmacher-Impulsgeber",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304124003",
                display: "Shoulder joint implant (physical object)",
                target: [
                    {
                        code: "Schultergelenkimplantat",
                        display: "Schultergelenkimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303726000",
                display: "Shoulder joint prosthesis (physical object)",
                target: [
                    {
                        code: "Schultergelenkprothese",
                        display: "Schultergelenkprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "465380004",
                display: "Silicone gel-filled breast implant (physical object)",
                target: [
                    {
                        code: "SilikongelgefuelltesBrustimplantat",
                        display: "Silikongel-gefülltes Brustimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118374007",
                display: "Silicone implant, device (physical object)",
                target: [
                    {
                        code: "Silikonimplantat",
                        display: "Silikonimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304184000",
                display: "Ankle joint implant (physical object)",
                target: [
                    {
                        code: "Sprunggelenkimplantat",
                        display: "Sprunggelenkimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303947005",
                display: "Rod fixation system (physical object)",
                target: [
                    {
                        code: "Stangenfixierungssystem",
                        display: "Stangenfixierungssystem",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65818007",
                display: "Stent (physical object)",
                target: [
                    {
                        code: "Stent",
                        display: "Stent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "304120007",
                display: "Total hip replacement prosthesis (physical object)",
                target: [
                    {
                        code: "TotalHueftprothese",
                        display: "Total Hüftprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "360100007",
                display: "Tracheal stent (physical object)",
                target: [
                    {
                        code: "Trachealstent",
                        display: "Trachealstent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "386124003",
                display: "Transseptal catheter (physical object)",
                target: [
                    {
                        code: "TransseptalerKatheter",
                        display: "Transseptaler Katheter",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "286558002",
                display: "Ureteric stent (physical object)",
                target: [
                    {
                        code: "Ureterstent",
                        display: "Ureterstent",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "303497001",
                display: "Urogenital implant (physical object)",
                target: [
                    {
                        code: "Urogenitalimplantat",
                        display: "Urogenitalimplantat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "344088002",
                display: "Urostomy bag (physical object)",
                target: [
                    {
                        code: "UrostomieBeutel",
                        display: "Urostomie-Beutel",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "344575009",
                display: "Urostomy set (physical object)",
                target: [
                    {
                        code: "UrostomieSet",
                        display: "Urostomie-Set",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257283004",
                display: "Valved cardiac conduit (physical object)",
                target: [
                    {
                        code: "VentilierterHerzkanal",
                        display: "Ventilierter Herzkanal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "258593008",
                display: "Ventricular shunt (physical object)",
                target: [
                    {
                        code: "VentrikulaererShunt",
                        display: "Ventrikulärer Shunt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "118425005",
                display: "Cerebral ventricular reservoir device (physical object)",
                target: [
                    {
                        code: "VentrikulaeresReservoir",
                        display: "Ventrikuläres Reservoir",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257275005",
                display: "Spinal cage (physical object)",
                target: [
                    {
                        code: "Wirbelsaeulenkaefig",
                        display: "Wirbelsäulenkäfig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "257343005",
                display: "Xenograft cardiac valve (physical object)",
                target: [
                    {
                        code: "XenotransplantatHerzklappe",
                        display: "Xenotransplantat-Herzklappe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "27606000",
                display: "Dental prosthesis, device (physical object)",
                target: [
                    {
                        code: "Zahnprothese",
                        display: "Zahnprothese",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "52124006",
                display: "Central venous catheter, device (physical object)",
                target: [
                    {
                        code: "ZentralerVenenkatheter",
                        display: "Zentraler Venenkatheter",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default NFDImplantGerman;
