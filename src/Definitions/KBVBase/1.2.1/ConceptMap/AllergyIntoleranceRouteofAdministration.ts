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

// Diese Conceptmap verknüpft die Codes für null mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const AllergyIntoleranceRouteofAdministration: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_AllergyIntolerance_Route_of_Administration_German",
        element: [
            {
                code: "10547007",
                display: "Otic route (qualifier value)",
                target: [
                    {
                        code: "aurikulaer",
                        display: "aurikulär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54471007",
                display: "Buccal route (qualifier value)",
                target: [
                    {
                        code: "buccal",
                        display: "buccal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372449004",
                display: "Dental route (qualifier value)",
                target: [
                    {
                        code: "dental",
                        display: "dental",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372451000",
                display: "Endosinusial route (qualifier value)",
                target: [
                    {
                        code: "endosinusial",
                        display: "endosinusial",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372452007",
                display: "Endotracheopulmonary route (qualifier value)",
                target: [
                    {
                        code: "endotracheopulmonal",
                        display: "endotracheopulmonal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372450004",
                display: "Endocervical route (qualifier value)",
                target: [
                    {
                        code: "endozervikal",
                        display: "endozervikal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404820008",
                display: "Epidural route (qualifier value)",
                target: [
                    {
                        code: "epidural",
                        display: "epidural",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372453002",
                display: "Extra-amniotic route (qualifier value)",
                target: [
                    {
                        code: "extraamniotisch",
                        display: "extra-amniotisch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "714743009",
                display: "Extracorporeal route (qualifier value)",
                target: [
                    {
                        code: "extrakorporal",
                        display: "extra-korporal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372454008",
                display: "Gastroenteral route (qualifier value)",
                target: [
                    {
                        code: "gastroenteral",
                        display: "gastroenteral",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372457001",
                display: "Gingival route (qualifier value)",
                target: [
                    {
                        code: "gingival",
                        display: "gingival",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "718329006",
                display: "Infiltration route (qualifier value)",
                target: [
                    {
                        code: "infiltrativ",
                        display: "infiltrativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "447694001",
                display: "Respiratory tract route (qualifier value)",
                target: [
                    {
                        code: "inhalatativ",
                        display: "inhalatativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372458006",
                display: "Intraamniotic route (qualifier value)",
                target: [
                    {
                        code: "intraamniotisch",
                        display: "intra-amniotisch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "58100008",
                display: "Intra-arterial route (qualifier value)",
                target: [
                    {
                        code: "intraarteriell",
                        display: "intraarteriell",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12130007",
                display: "Intra-articular route (qualifier value)",
                target: [
                    {
                        code: "intraartikulaer",
                        display: "intraartikulär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372459003",
                display: "Intrabursal route (qualifier value)",
                target: [
                    {
                        code: "intrabursal",
                        display: "intrabursal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372464004",
                display: "Intradermal route (qualifier value)",
                target: [
                    {
                        code: "intradermal",
                        display: "intradermal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372465003",
                display: "Intradiscal route (qualifier value)",
                target: [
                    {
                        code: "intradiskal",
                        display: "intradiskal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "448077001",
                display: "Intraepidermal route (qualifier value)",
                target: [
                    {
                        code: "intraepidermal",
                        display: "intraepidermal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418821007",
                display: "Intracameral route (qualifier value)",
                target: [
                    {
                        code: "intrakameral",
                        display: "intrakameral",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372460008",
                display: "Intracardiac route (qualifier value)",
                target: [
                    {
                        code: "intrakardial",
                        display: "intrakardial",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418331006",
                display: "Intracartilaginous route (qualifier value)",
                target: [
                    {
                        code: "intrakartilaginoes",
                        display: "intrakartilaginös",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372461007",
                display: "Intracavernous route (qualifier value)",
                target: [
                    {
                        code: "intrakavernoes",
                        display: "intrakavernös",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372463005",
                display: "Intracoronary route (qualifier value)",
                target: [
                    {
                        code: "intrakoronar",
                        display: "intrakoronar",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372466002",
                display: "Intralesional route (qualifier value)",
                target: [
                    {
                        code: "intralaesional",
                        display: "intraläsional",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372467006",
                display: "Intralymphatic route (qualifier value)",
                target: [
                    {
                        code: "intralymphatisch",
                        display: "intralymphatisch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "78421000",
                display: "Intramuscular route (qualifier value)",
                target: [
                    {
                        code: "intramuskulaer",
                        display: "intramuskulär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372468001",
                display: "Intraocular route (qualifier value)",
                target: [
                    {
                        code: "intraokular",
                        display: "intraokular",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "417255000",
                display: "Intraosseous route (qualifier value)",
                target: [
                    {
                        code: "intraossaer",
                        display: "intraossär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "445771006",
                display: "Intrapericardial route (qualifier value)",
                target: [
                    {
                        code: "intraperikardial",
                        display: "intraperikardial",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38239002",
                display: "Intraperitoneal route (qualifier value)",
                target: [
                    {
                        code: "intraperitoneal",
                        display: "intraperitoneal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372469009",
                display: "Intrapleural route (qualifier value)",
                target: [
                    {
                        code: "intrapleural",
                        display: "intrapleural",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372470005",
                display: "Intrasternal route (qualifier value)",
                target: [
                    {
                        code: "intrasternal",
                        display: "intrasternal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72607000",
                display: "Intrathecal route (qualifier value)",
                target: [
                    {
                        code: "intrathekal",
                        display: "intrathekal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "447122006",
                display: "Intratumor route (qualifier value)",
                target: [
                    {
                        code: "intratumoral",
                        display: "intratumoral",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "62226000",
                display: "Intrauterine route (qualifier value)",
                target: [
                    {
                        code: "intrauterin",
                        display: "intrauterin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "47625008",
                display: "Intravenous route (qualifier value)",
                target: [
                    {
                        code: "intravenoes",
                        display: "intravenös",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372471009",
                display: "Intravesical route (qualifier value)",
                target: [
                    {
                        code: "intravesikal",
                        display: "intravesikal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418401004",
                display: "Intravitreal route (qualifier value)",
                target: [
                    {
                        code: "intravitreal",
                        display: "intravitreal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "446540005",
                display: "Intracerebral route (qualifier value)",
                target: [
                    {
                        code: "intrazerebral",
                        display: "intrazerebral",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418892005",
                display: "Intracisternal route (qualifier value)",
                target: [
                    {
                        code: "intrazisternal",
                        display: "intrazisternal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "448598008",
                display: "Cutaneous route (qualifier value)",
                target: [
                    {
                        code: "kutan",
                        display: "kutan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420185003",
                display: "Laryngeal route (qualifier value)",
                target: [
                    {
                        code: "larnygeal",
                        display: "larnygeal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "46713006",
                display: "Nasal route (qualifier value)",
                target: [
                    {
                        code: "nasal",
                        display: "nasal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "54485002",
                display: "Ophthalmic route (qualifier value)",
                target: [
                    {
                        code: "okulaer",
                        display: "okulär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26643006",
                display: "Oral route (qualifier value)",
                target: [
                    {
                        code: "oral",
                        display: "oral",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372473007",
                display: "Oromucosal route (qualifier value)",
                target: [
                    {
                        code: "oromukosal",
                        display: "oromukosal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418664002",
                display: "Oropharyngeal route (qualifier value)",
                target: [
                    {
                        code: "oropharyngeal",
                        display: "oropharyngeal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "447052000",
                display: "Periodontal route (qualifier value)",
                target: [
                    {
                        code: "parodontal",
                        display: "parodontal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372474001",
                display: "Periarticular route (qualifier value)",
                target: [
                    {
                        code: "periartikulaer",
                        display: "periartikulär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "764723001",
                display: "Epilesional route (qualifier value)",
                target: [
                    {
                        code: "perilaesional",
                        display: "periläsional",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372475000",
                display: "Perineural route (qualifier value)",
                target: [
                    {
                        code: "perineural",
                        display: "perineural",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "420047004",
                display: "Periosteal route (qualifier value)",
                target: [
                    {
                        code: "periossaer",
                        display: "periossär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37161004",
                display: "Rectal route (qualifier value)",
                target: [
                    {
                        code: "rektal",
                        display: "rektal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418321004",
                display: "Retrobulbar route (qualifier value)",
                target: [
                    {
                        code: "retrobulbaer",
                        display: "retrobulbär",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "372476004",
                display: "Subconjunctival route (qualifier value)",
                target: [
                    {
                        code: "subkonjunktival",
                        display: "subkonjunktival",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34206005",
                display: "Subcutaneous route (qualifier value)",
                target: [
                    {
                        code: "subkutan",
                        display: "subkutan",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "37839007",
                display: "Sublingual route (qualifier value)",
                target: [
                    {
                        code: "sublingual",
                        display: "sublingual",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "419874009",
                display: "Submucosal route (qualifier value)",
                target: [
                    {
                        code: "submukoes",
                        display: "submukös",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6064005",
                display: "Topical route (qualifier value)",
                target: [
                    {
                        code: "topisch",
                        display: "topisch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "45890007",
                display: "Transdermal route (qualifier value)",
                target: [
                    {
                        code: "transdermal",
                        display: "transdermal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "90028008",
                display: "Urethral route (qualifier value)",
                target: [
                    {
                        code: "urethral",
                        display: "urethral",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16857009",
                display: "Vaginal route (qualifier value)",
                target: [
                    {
                        code: "vaginal",
                        display: "vaginal",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default AllergyIntoleranceRouteofAdministration;
