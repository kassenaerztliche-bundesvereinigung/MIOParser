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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_Base_AllergyIntolerance_Route_of_Administration_German
type AllergyIntoleranceRouteofAdministrationGerman =
    | "aurikulaer"
    | "buccal"
    | "dental"
    | "endosinusial"
    | "endotracheopulmonal"
    | "endozervikal"
    | "epidural"
    | "extraamniotisch"
    | "extrakorporal"
    | "gastroenteral"
    | "gingival"
    | "infiltrativ"
    | "inhalatativ"
    | "intraamniotisch"
    | "intraarteriell"
    | "intraartikulaer"
    | "intrabursal"
    | "intradermal"
    | "intradiskal"
    | "intraepidermal"
    | "intrakameral"
    | "intrakardial"
    | "intrakartilaginoes"
    | "intrakavernoes"
    | "intrakoronar"
    | "intralaesional"
    | "intralymphatisch"
    | "intramuskulaer"
    | "intraokular"
    | "intraossaer"
    | "intraperikardial"
    | "intraperitoneal"
    | "intrapleural"
    | "intrasternal"
    | "intrathekal"
    | "intratumoral"
    | "intrauterin"
    | "intravenoes"
    | "intravesikal"
    | "intravitreal"
    | "intrazerebral"
    | "intrazisternal"
    | "kutan"
    | "larnygeal"
    | "nasal"
    | "okulaer"
    | "oral"
    | "oromukosal"
    | "oropharyngeal"
    | "parodontal"
    | "periartikulaer"
    | "perilaesional"
    | "perineural"
    | "periossaer"
    | "rektal"
    | "retrobulbaer"
    | "subkonjunktival"
    | "subkutan"
    | "sublingual"
    | "submukoes"
    | "topisch"
    | "transdermal"
    | "urethral"
    | "vaginal";

const AllergyIntoleranceRouteofAdministrationGerman: t.Type<AllergyIntoleranceRouteofAdministrationGerman> =
    t.union([
        t.literal("aurikulaer"),
        t.literal("buccal"),
        t.literal("dental"),
        t.literal("endosinusial"),
        t.literal("endotracheopulmonal"),
        t.literal("endozervikal"),
        t.literal("epidural"),
        t.literal("extraamniotisch"),
        t.literal("extrakorporal"),
        t.literal("gastroenteral"),
        t.literal("gingival"),
        t.literal("infiltrativ"),
        t.literal("inhalatativ"),
        t.literal("intraamniotisch"),
        t.literal("intraarteriell"),
        t.literal("intraartikulaer"),
        t.literal("intrabursal"),
        t.literal("intradermal"),
        t.literal("intradiskal"),
        t.literal("intraepidermal"),
        t.literal("intrakameral"),
        t.literal("intrakardial"),
        t.literal("intrakartilaginoes"),
        t.literal("intrakavernoes"),
        t.literal("intrakoronar"),
        t.literal("intralaesional"),
        t.literal("intralymphatisch"),
        t.literal("intramuskulaer"),
        t.literal("intraokular"),
        t.literal("intraossaer"),
        t.literal("intraperikardial"),
        t.literal("intraperitoneal"),
        t.literal("intrapleural"),
        t.literal("intrasternal"),
        t.literal("intrathekal"),
        t.literal("intratumoral"),
        t.literal("intrauterin"),
        t.literal("intravenoes"),
        t.literal("intravesikal"),
        t.literal("intravitreal"),
        t.literal("intrazerebral"),
        t.literal("intrazisternal"),
        t.literal("kutan"),
        t.literal("larnygeal"),
        t.literal("nasal"),
        t.literal("okulaer"),
        t.literal("oral"),
        t.literal("oromukosal"),
        t.literal("oropharyngeal"),
        t.literal("parodontal"),
        t.literal("periartikulaer"),
        t.literal("perilaesional"),
        t.literal("perineural"),
        t.literal("periossaer"),
        t.literal("rektal"),
        t.literal("retrobulbaer"),
        t.literal("subkonjunktival"),
        t.literal("subkutan"),
        t.literal("sublingual"),
        t.literal("submukoes"),
        t.literal("topisch"),
        t.literal("transdermal"),
        t.literal("urethral"),
        t.literal("vaginal")
    ]);

export const AllergyIntoleranceRouteofAdministrationGermanArray: string[] = [
    "aurikulaer",
    "buccal",
    "dental",
    "endosinusial",
    "endotracheopulmonal",
    "endozervikal",
    "epidural",
    "extraamniotisch",
    "extrakorporal",
    "gastroenteral",
    "gingival",
    "infiltrativ",
    "inhalatativ",
    "intraamniotisch",
    "intraarteriell",
    "intraartikulaer",
    "intrabursal",
    "intradermal",
    "intradiskal",
    "intraepidermal",
    "intrakameral",
    "intrakardial",
    "intrakartilaginoes",
    "intrakavernoes",
    "intrakoronar",
    "intralaesional",
    "intralymphatisch",
    "intramuskulaer",
    "intraokular",
    "intraossaer",
    "intraperikardial",
    "intraperitoneal",
    "intrapleural",
    "intrasternal",
    "intrathekal",
    "intratumoral",
    "intrauterin",
    "intravenoes",
    "intravesikal",
    "intravitreal",
    "intrazerebral",
    "intrazisternal",
    "kutan",
    "larnygeal",
    "nasal",
    "okulaer",
    "oral",
    "oromukosal",
    "oropharyngeal",
    "parodontal",
    "periartikulaer",
    "perilaesional",
    "perineural",
    "periossaer",
    "rektal",
    "retrobulbaer",
    "subkonjunktival",
    "subkutan",
    "sublingual",
    "submukoes",
    "topisch",
    "transdermal",
    "urethral",
    "vaginal"
];

export default AllergyIntoleranceRouteofAdministrationGerman;
