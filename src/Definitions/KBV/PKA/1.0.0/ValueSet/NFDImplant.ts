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
import { ValueSet } from "../../../../Interfaces";
import NFDImplantGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDImplantGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_Implant

type NFDImplant =
    | "84683006"
    | "360046005"
    | "303608005"
    | "421168009"
    | "2282003"
    | "63289001"
    | "43252007"
    | "360329004"
    | "257327003"
    | "303277008"
    | "102314001"
    | "272307009"
    | "360104003"
    | "74444006"
    | "304121006"
    | "304185004"
    | "360123005"
    | "303617005"
    | "102303004"
    | "314523008"
    | "304186003"
    | "34759008"
    | "286576009"
    | "303619008"
    | "25510005"
    | "303490004"
    | "264824009"
    | "118375008"
    | "14106009"
    | "360129009"
    | "6012004"
    | "303500007"
    | "303533002"
    | "67270000"
    | "417136005"
    | "342706005"
    | "303618000"
    | "72506001"
    | "398013009"
    | "360041000"
    | "272287005"
    | "360103009"
    | "268460000"
    | "360058005"
    | "257366006"
    | "413766009"
    | "19923001"
    | "360070009"
    | "414580007"
    | "272245008"
    | "63112008"
    | "77777004"
    | "271003"
    | "360145006"
    | "68183006"
    | "77444004"
    | "339648008"
    | "341036005"
    | "304070008"
    | "429798007"
    | "24073000"
    | "257362008"
    | "257282009"
    | "360117000"
    | "303499003"
    | "90134004"
    | "257363003"
    | "17107009"
    | "303503009"
    | "25937001"
    | "303515008"
    | "16349000"
    | "31031000"
    | "45633005"
    | "102319006"
    | "424921004"
    | "360063009"
    | "423449009"
    | "118378005"
    | "304124003"
    | "303726000"
    | "465380004"
    | "118374007"
    | "304184000"
    | "303947005"
    | "65818007"
    | "304120007"
    | "360100007"
    | "386124003"
    | "286558002"
    | "303497001"
    | "344088002"
    | "344575009"
    | "257283004"
    | "258593008"
    | "118425005"
    | "257275005"
    | "257343005"
    | "27606000"
    | "52124006";

type NFDImplantType = t.KeyofC<{
    "84683006": null;
    "360046005": null;
    "303608005": null;
    "421168009": null;
    "2282003": null;
    "63289001": null;
    "43252007": null;
    "360329004": null;
    "257327003": null;
    "303277008": null;
    "102314001": null;
    "272307009": null;
    "360104003": null;
    "74444006": null;
    "304121006": null;
    "304185004": null;
    "360123005": null;
    "303617005": null;
    "102303004": null;
    "314523008": null;
    "304186003": null;
    "34759008": null;
    "286576009": null;
    "303619008": null;
    "25510005": null;
    "303490004": null;
    "264824009": null;
    "118375008": null;
    "14106009": null;
    "360129009": null;
    "6012004": null;
    "303500007": null;
    "303533002": null;
    "67270000": null;
    "417136005": null;
    "342706005": null;
    "303618000": null;
    "72506001": null;
    "398013009": null;
    "360041000": null;
    "272287005": null;
    "360103009": null;
    "268460000": null;
    "360058005": null;
    "257366006": null;
    "413766009": null;
    "19923001": null;
    "360070009": null;
    "414580007": null;
    "272245008": null;
    "63112008": null;
    "77777004": null;
    "271003": null;
    "360145006": null;
    "68183006": null;
    "77444004": null;
    "339648008": null;
    "341036005": null;
    "304070008": null;
    "429798007": null;
    "24073000": null;
    "257362008": null;
    "257282009": null;
    "360117000": null;
    "303499003": null;
    "90134004": null;
    "257363003": null;
    "17107009": null;
    "303503009": null;
    "25937001": null;
    "303515008": null;
    "16349000": null;
    "31031000": null;
    "45633005": null;
    "102319006": null;
    "424921004": null;
    "360063009": null;
    "423449009": null;
    "118378005": null;
    "304124003": null;
    "303726000": null;
    "465380004": null;
    "118374007": null;
    "304184000": null;
    "303947005": null;
    "65818007": null;
    "304120007": null;
    "360100007": null;
    "386124003": null;
    "286558002": null;
    "303497001": null;
    "344088002": null;
    "344575009": null;
    "257283004": null;
    "258593008": null;
    "118425005": null;
    "257275005": null;
    "257343005": null;
    "27606000": null;
    "52124006": null;
}>;

const NFDImplant: NFDImplantType = t.keyof({
    "84683006": null,
    "360046005": null,
    "303608005": null,
    "421168009": null,
    "2282003": null,
    "63289001": null,
    "43252007": null,
    "360329004": null,
    "257327003": null,
    "303277008": null,
    "102314001": null,
    "272307009": null,
    "360104003": null,
    "74444006": null,
    "304121006": null,
    "304185004": null,
    "360123005": null,
    "303617005": null,
    "102303004": null,
    "314523008": null,
    "304186003": null,
    "34759008": null,
    "286576009": null,
    "303619008": null,
    "25510005": null,
    "303490004": null,
    "264824009": null,
    "118375008": null,
    "14106009": null,
    "360129009": null,
    "6012004": null,
    "303500007": null,
    "303533002": null,
    "67270000": null,
    "417136005": null,
    "342706005": null,
    "303618000": null,
    "72506001": null,
    "398013009": null,
    "360041000": null,
    "272287005": null,
    "360103009": null,
    "268460000": null,
    "360058005": null,
    "257366006": null,
    "413766009": null,
    "19923001": null,
    "360070009": null,
    "414580007": null,
    "272245008": null,
    "63112008": null,
    "77777004": null,
    "271003": null,
    "360145006": null,
    "68183006": null,
    "77444004": null,
    "339648008": null,
    "341036005": null,
    "304070008": null,
    "429798007": null,
    "24073000": null,
    "257362008": null,
    "257282009": null,
    "360117000": null,
    "303499003": null,
    "90134004": null,
    "257363003": null,
    "17107009": null,
    "303503009": null,
    "25937001": null,
    "303515008": null,
    "16349000": null,
    "31031000": null,
    "45633005": null,
    "102319006": null,
    "424921004": null,
    "360063009": null,
    "423449009": null,
    "118378005": null,
    "304124003": null,
    "303726000": null,
    "465380004": null,
    "118374007": null,
    "304184000": null,
    "303947005": null,
    "65818007": null,
    "304120007": null,
    "360100007": null,
    "386124003": null,
    "286558002": null,
    "303497001": null,
    "344088002": null,
    "344575009": null,
    "257283004": null,
    "258593008": null,
    "118425005": null,
    "257275005": null,
    "257343005": null,
    "27606000": null,
    "52124006": null
});
export const NFDImplantArray: string[] = [
    "84683006",
    "360046005",
    "303608005",
    "421168009",
    "2282003",
    "63289001",
    "43252007",
    "360329004",
    "257327003",
    "303277008",
    "102314001",
    "272307009",
    "360104003",
    "74444006",
    "304121006",
    "304185004",
    "360123005",
    "303617005",
    "102303004",
    "314523008",
    "304186003",
    "34759008",
    "286576009",
    "303619008",
    "25510005",
    "303490004",
    "264824009",
    "118375008",
    "14106009",
    "360129009",
    "6012004",
    "303500007",
    "303533002",
    "67270000",
    "417136005",
    "342706005",
    "303618000",
    "72506001",
    "398013009",
    "360041000",
    "272287005",
    "360103009",
    "268460000",
    "360058005",
    "257366006",
    "413766009",
    "19923001",
    "360070009",
    "414580007",
    "272245008",
    "63112008",
    "77777004",
    "271003",
    "360145006",
    "68183006",
    "77444004",
    "339648008",
    "341036005",
    "304070008",
    "429798007",
    "24073000",
    "257362008",
    "257282009",
    "360117000",
    "303499003",
    "90134004",
    "257363003",
    "17107009",
    "303503009",
    "25937001",
    "303515008",
    "16349000",
    "31031000",
    "45633005",
    "102319006",
    "424921004",
    "360063009",
    "423449009",
    "118378005",
    "304124003",
    "303726000",
    "465380004",
    "118374007",
    "304184000",
    "303947005",
    "65818007",
    "304120007",
    "360100007",
    "386124003",
    "286558002",
    "303497001",
    "344088002",
    "344575009",
    "257283004",
    "258593008",
    "118425005",
    "257275005",
    "257343005",
    "27606000",
    "52124006"
];

export const NFDImplantValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "84683006",
                display: "Aortic valve prosthesis (physical object)"
            },
            {
                code: "360046005",
                display: "Arterial stent (physical object)"
            },
            {
                code: "303608005",
                display: "Ophthalmological implant (physical object)"
            },
            {
                code: "421168009",
                display: "Eye sphere implant (physical object)"
            },
            {
                code: "2282003",
                display: "Prosthetic breast implant (physical object)"
            },
            {
                code: "63289001",
                display: "Surgical metal nail, device (physical object)"
            },
            {
                code: "43252007",
                display: "Cochlear prosthesis, device (physical object)"
            },
            {
                code: "360329004",
                display: "Polyethylene terephthalate graft (physical object)"
            },
            {
                code: "257327003",
                display: "Dynamic hip screw plate (physical object)"
            },
            {
                code: "303277008",
                display: "Fallopian tube prosthesis (physical object)"
            },
            {
                code: "102314001",
                display: "Embolization coil, device (physical object)"
            },
            {
                code: "272307009",
                display: "Endosseous oral implant (physical object)"
            },
            {
                code: "360104003",
                display: "Extracochlear prosthesis (physical object)"
            },
            {
                code: "74444006",
                display: "Limb prosthesis, device (physical object)"
            },
            {
                code: "304121006",
                display: "Femoral head prosthesis (physical object)"
            },
            {
                code: "304185004",
                display: "Foot joint implant (physical object)"
            },
            {
                code: "360123005",
                display: "Biliary stent (physical object)"
            },
            {
                code: "303617005",
                display: "Vascular implant (physical object)"
            },
            {
                code: "102303004",
                display: "Vascular prosthesis, device (physical object)"
            },
            {
                code: "314523008",
                display: "Joint implant (physical object)"
            },
            {
                code: "304186003",
                display: "Hand joint implant (physical object)"
            },
            {
                code: "34759008",
                display: "Urethral catheter, device (physical object)"
            },
            {
                code: "286576009",
                display: "Urethral stent (physical object)"
            },
            {
                code: "303619008",
                display: "Cardiac implant (physical object)"
            },
            {
                code: "25510005",
                display: "Cardiac valve prosthesis (physical object)"
            },
            {
                code: "303490004",
                display: "Cardiovascular implant (physical object)"
            },
            {
                code: "264824009",
                display: "Cardiac conduit (physical object)"
            },
            {
                code: "118375008",
                display: "Cardiac septum prosthesis, device (physical object)"
            },
            {
                code: "14106009",
                display: "Cardiac pacemaker, device (physical object)"
            },
            {
                code: "360129009",
                display: "Cardiac pacemaker lead (physical object)"
            },
            {
                code: "6012004",
                display: "Hearing aid, device (physical object)"
            },
            {
                code: "303500007",
                display: "Auditory implant (physical object)"
            },
            {
                code: "303533002",
                display: "Hip joint implant (physical object)"
            },
            {
                code: "67270000",
                display: "Hip prosthesis, device (physical object)"
            },
            {
                code: "417136005",
                display: "Ileostomy bag (physical object)"
            },
            {
                code: "342706005",
                display: "Ileostomy set (physical object)"
            },
            {
                code: "303618000",
                display: "Nervous system implant (physical object)"
            },
            {
                code: "72506001",
                display: "Implantable defibrillator, device (physical object)"
            },
            {
                code: "398013009",
                display: "Implantable venous access port (physical object)"
            },
            {
                code: "360041000",
                display: "Implanted drug delivery system (physical object)"
            },
            {
                code: "272287005",
                display: "Inlay dental restoration (physical object)"
            },
            {
                code: "360103009",
                display: "Intracochlear prosthesis (physical object)"
            },
            {
                code: "268460000",
                display: "Intrauterine contraceptive device (physical object)"
            },
            {
                code: "360058005",
                display: "Intraventricular pump (physical object)"
            },
            {
                code: "257366006",
                display: "JJ stent (physical object)"
            },
            {
                code: "413766009",
                display: "Carotid artery stent (physical object)"
            },
            {
                code: "19923001",
                display: "Catheter, device (physical object)"
            },
            {
                code: "360070009",
                display: "Laryngeal implant (physical object)"
            },
            {
                code: "414580007",
                display: "Laryngeal keel (physical object)"
            },
            {
                code: "272245008",
                display: "Maxillofacial prosthesis/appliance (physical object)"
            },
            {
                code: "63112008",
                display: "Bone wire, device (physical object)"
            },
            {
                code: "77777004",
                display: "Bone staple, device (physical object)"
            },
            {
                code: "271003",
                display: "Bone plate, device (physical object)"
            },
            {
                code: "360145006",
                display: "Bone prosthesis (physical object)"
            },
            {
                code: "68183006",
                display: "Bone screw, device (physical object)"
            },
            {
                code: "77444004",
                display: "Bone pin, device (physical object)"
            },
            {
                code: "339648008",
                display: "Colostomy bag (physical object)"
            },
            {
                code: "341036005",
                display: "Colostomy set (physical object)"
            },
            {
                code: "304070008",
                display: "Body wall implant (physical object)"
            },
            {
                code: "429798007",
                display: "Artificial vertebral disc (physical object)"
            },
            {
                code: "24073000",
                display: "Artificial cardiac valve prosthesis, device (physical object)"
            },
            {
                code: "257362008",
                display: "Plastic stent (physical object)"
            },
            {
                code: "257282009",
                display: "Non-valved conduit (physical object)"
            },
            {
                code: "360117000",
                display: "Gastric bubble (physical object)"
            },
            {
                code: "303499003",
                display: "Gastrointestinal implant (physical object)"
            },
            {
                code: "90134004",
                display: "Metal periosteal implant, device (physical object)"
            },
            {
                code: "257363003",
                display: "Metal stent (physical object)"
            },
            {
                code: "17107009",
                display: "Mitral valve prosthesis (physical object)"
            },
            {
                code: "303503009",
                display: "Musculoskeletal implant (physical object)"
            },
            {
                code: "25937001",
                display: "Neurostimulator, device (physical object)"
            },
            {
                code: "303515008",
                display: "Orbital implant (physical object)"
            },
            {
                code: "16349000",
                display: "Orthopedic device (physical object)"
            },
            {
                code: "31031000",
                display: "Orthopedic internal fixation system, device (physical object)"
            },
            {
                code: "45633005",
                display: "Peritoneal dialyzer, device (physical object)"
            },
            {
                code: "102319006",
                display:
                    "Percutaneous transluminal angioplasty balloon, device (physical object)"
            },
            {
                code: "424921004",
                display: "Permanent cardiac pacemaker, device (physical object)"
            },
            {
                code: "360063009",
                display: "Prosthetic cardiac annuloplasty ring (physical object)"
            },
            {
                code: "423449009",
                display: "Pulmonary valve prosthesis (physical object)"
            },
            {
                code: "118378005",
                display: "Pacemaker pulse generator, device (physical object)"
            },
            {
                code: "304124003",
                display: "Shoulder joint implant (physical object)"
            },
            {
                code: "303726000",
                display: "Shoulder joint prosthesis (physical object)"
            },
            {
                code: "465380004",
                display: "Silicone gel-filled breast implant (physical object)"
            },
            {
                code: "118374007",
                display: "Silicone implant, device (physical object)"
            },
            {
                code: "304184000",
                display: "Ankle joint implant (physical object)"
            },
            {
                code: "303947005",
                display: "Rod fixation system (physical object)"
            },
            {
                code: "65818007",
                display: "Stent (physical object)"
            },
            {
                code: "304120007",
                display: "Total hip replacement prosthesis (physical object)"
            },
            {
                code: "360100007",
                display: "Tracheal stent (physical object)"
            },
            {
                code: "386124003",
                display: "Transseptal catheter (physical object)"
            },
            {
                code: "286558002",
                display: "Ureteric stent (physical object)"
            },
            {
                code: "303497001",
                display: "Urogenital implant (physical object)"
            },
            {
                code: "344088002",
                display: "Urostomy bag (physical object)"
            },
            {
                code: "344575009",
                display: "Urostomy set (physical object)"
            },
            {
                code: "257283004",
                display: "Valved cardiac conduit (physical object)"
            },
            {
                code: "258593008",
                display: "Ventricular shunt (physical object)"
            },
            {
                code: "118425005",
                display: "Cerebral ventricular reservoir device (physical object)"
            },
            {
                code: "257275005",
                display: "Spinal cage (physical object)"
            },
            {
                code: "257343005",
                display: "Xenograft cardiac valve (physical object)"
            },
            {
                code: "27606000",
                display: "Dental prosthesis, device (physical object)"
            },
            {
                code: "52124006",
                display: "Central venous catheter, device (physical object)"
            }
        ]
    }
];

export { NFDImplantGerman as ConceptMap };

export default NFDImplant;
