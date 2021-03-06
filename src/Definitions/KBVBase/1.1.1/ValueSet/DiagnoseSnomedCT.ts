/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Diagnose_Snomed_CT

type DiagnoseSnomedCT =
    | "1240591000000102"
    | "1240581000000104"
    | "142291000119107"
    | "142281000119109"
    | "1157021003"
    | "1156072000"
    | "1148601009"
    | "879862001"
    | "863928009"
    | "840642008"
    | "835279003"
    | "816081007"
    | "737294004"
    | "716461003"
    | "716458004"
    | "716457009"
    | "716455001"
    | "473010000"
    | "444332001"
    | "444143004"
    | "442523003"
    | "441742003"
    | "431950004"
    | "427955007"
    | "424092004"
    | "424017009"
    | "422704000"
    | "420134006"
    | "419070004"
    | "419026008"
    | "418799008"
    | "417893002"
    | "415531008"
    | "414252009"
    | "406123005"
    | "405533003"
    | "386617003"
    | "384821006"
    | "384740007"
    | "365860008"
    | "365858006"
    | "364830008"
    | "313413008"
    | "307824009"
    | "302293008"
    | "302292003"
    | "301886001"
    | "301830001"
    | "300893006"
    | "300848003"
    | "300577008"
    | "299735001"
    | "299691001"
    | "298339004"
    | "298325004"
    | "298314008"
    | "281037003"
    | "276477006"
    | "271616002"
    | "267038008"
    | "251859005"
    | "251839006"
    | "250869005"
    | "250763003"
    | "249857004"
    | "248982007"
    | "248595008"
    | "248402002"
    | "247441003"
    | "246556002"
    | "225577002"
    | "225552003"
    | "131148009"
    | "127357005"
    | "125123008"
    | "123821009"
    | "118254002"
    | "118240005"
    | "118236001"
    | "118235002"
    | "118228005"
    | "118222006"
    | "118219009"
    | "118188004"
    | "116336009"
    | "107650008"
    | "106176003"
    | "106132005"
    | "106112009"
    | "106089007"
    | "106077005"
    | "106063007"
    | "106048009"
    | "106030000"
    | "106028002"
    | "105499002"
    | "102957003"
    | "80631005"
    | "79899007"
    | "69449002"
    | "65124004"
    | "64572001"
    | "18165001"
    | "13197004"
    | "404684003"
    | "1148742001"
    | "890297007"
    | "890227000"
    | "890131001"
    | "890111000"
    | "890100008"
    | "890098008"
    | "879986003"
    | "879985004"
    | "879983006"
    | "789750003"
    | "781249001"
    | "773760007"
    | "443684005"
    | "420008001"
    | "419912001"
    | "419620001"
    | "419048002"
    | "418781000"
    | "418715001"
    | "418635006"
    | "418034009"
    | "417928002"
    | "409513009"
    | "409508005"
    | "405615003"
    | "401270003"
    | "370894009"
    | "276746005"
    | "248007002"
    | "218225007"
    | "272379006"
    | "413350009"
    | "405648003"
    | "405647008"
    | "276445008"
    | "271336007"
    | "182985004"
    | "129125009"
    | "66678007"
    | "57177007"
    | "33993005"
    | "243796009";

const DiagnoseSnomedCT: t.Type<DiagnoseSnomedCT> = t.union(
    [
        t.literal("1240591000000102"),
        t.literal("1240581000000104"),
        t.literal("142291000119107"),
        t.literal("142281000119109"),
        t.literal("1157021003"),
        t.literal("1156072000"),
        t.literal("1148601009"),
        t.literal("879862001"),
        t.literal("863928009"),
        t.literal("840642008"),
        t.literal("835279003"),
        t.literal("816081007"),
        t.literal("737294004"),
        t.literal("716461003"),
        t.literal("716458004"),
        t.literal("716457009"),
        t.literal("716455001"),
        t.literal("473010000"),
        t.literal("444332001"),
        t.literal("444143004"),
        t.literal("442523003"),
        t.literal("441742003"),
        t.literal("431950004"),
        t.literal("427955007"),
        t.literal("424092004"),
        t.literal("424017009"),
        t.literal("422704000"),
        t.literal("420134006"),
        t.literal("419070004"),
        t.literal("419026008"),
        t.literal("418799008"),
        t.literal("417893002"),
        t.literal("415531008"),
        t.literal("414252009"),
        t.literal("406123005"),
        t.literal("405533003"),
        t.literal("386617003"),
        t.literal("384821006"),
        t.literal("384740007"),
        t.literal("365860008"),
        t.literal("365858006"),
        t.literal("364830008"),
        t.literal("313413008"),
        t.literal("307824009"),
        t.literal("302293008"),
        t.literal("302292003"),
        t.literal("301886001"),
        t.literal("301830001"),
        t.literal("300893006"),
        t.literal("300848003"),
        t.literal("300577008"),
        t.literal("299735001"),
        t.literal("299691001"),
        t.literal("298339004"),
        t.literal("298325004"),
        t.literal("298314008"),
        t.literal("281037003"),
        t.literal("276477006"),
        t.literal("271616002"),
        t.literal("267038008"),
        t.literal("251859005"),
        t.literal("251839006"),
        t.literal("250869005"),
        t.literal("250763003"),
        t.literal("249857004"),
        t.literal("248982007"),
        t.literal("248595008"),
        t.literal("248402002"),
        t.literal("247441003"),
        t.literal("246556002"),
        t.literal("225577002"),
        t.literal("225552003"),
        t.literal("131148009"),
        t.literal("127357005"),
        t.literal("125123008"),
        t.literal("123821009"),
        t.literal("118254002"),
        t.literal("118240005"),
        t.literal("118236001"),
        t.literal("118235002"),
        t.literal("118228005"),
        t.literal("118222006"),
        t.literal("118219009"),
        t.literal("118188004"),
        t.literal("116336009"),
        t.literal("107650008"),
        t.literal("106176003"),
        t.literal("106132005"),
        t.literal("106112009"),
        t.literal("106089007"),
        t.literal("106077005"),
        t.literal("106063007"),
        t.literal("106048009"),
        t.literal("106030000"),
        t.literal("106028002"),
        t.literal("105499002"),
        t.literal("102957003"),
        t.literal("80631005"),
        t.literal("79899007"),
        t.literal("69449002"),
        t.literal("65124004"),
        t.literal("64572001"),
        t.literal("18165001"),
        t.literal("13197004"),
        t.literal("404684003"),
        t.literal("1148742001"),
        t.literal("890297007"),
        t.literal("890227000"),
        t.literal("890131001"),
        t.literal("890111000"),
        t.literal("890100008"),
        t.literal("890098008"),
        t.literal("879986003"),
        t.literal("879985004"),
        t.literal("879983006"),
        t.literal("789750003"),
        t.literal("781249001"),
        t.literal("773760007"),
        t.literal("443684005"),
        t.literal("420008001"),
        t.literal("419912001"),
        t.literal("419620001"),
        t.literal("419048002"),
        t.literal("418781000"),
        t.literal("418715001"),
        t.literal("418635006"),
        t.literal("418034009"),
        t.literal("417928002"),
        t.literal("409513009"),
        t.literal("409508005"),
        t.literal("405615003"),
        t.literal("401270003"),
        t.literal("370894009"),
        t.literal("276746005"),
        t.literal("248007002"),
        t.literal("218225007"),
        t.literal("272379006"),
        t.literal("413350009"),
        t.literal("405648003"),
        t.literal("405647008"),
        t.literal("276445008"),
        t.literal("271336007"),
        t.literal("182985004"),
        t.literal("129125009"),
        t.literal("66678007"),
        t.literal("57177007"),
        t.literal("33993005"),
        t.literal("243796009")
    ],
    "DiagnoseSnomedCT"
);

export const DiagnoseSnomedCTArray: string[] = [
    "1240591000000102",
    "1240581000000104",
    "142291000119107",
    "142281000119109",
    "1157021003",
    "1156072000",
    "1148601009",
    "879862001",
    "863928009",
    "840642008",
    "835279003",
    "816081007",
    "737294004",
    "716461003",
    "716458004",
    "716457009",
    "716455001",
    "473010000",
    "444332001",
    "444143004",
    "442523003",
    "441742003",
    "431950004",
    "427955007",
    "424092004",
    "424017009",
    "422704000",
    "420134006",
    "419070004",
    "419026008",
    "418799008",
    "417893002",
    "415531008",
    "414252009",
    "406123005",
    "405533003",
    "386617003",
    "384821006",
    "384740007",
    "365860008",
    "365858006",
    "364830008",
    "313413008",
    "307824009",
    "302293008",
    "302292003",
    "301886001",
    "301830001",
    "300893006",
    "300848003",
    "300577008",
    "299735001",
    "299691001",
    "298339004",
    "298325004",
    "298314008",
    "281037003",
    "276477006",
    "271616002",
    "267038008",
    "251859005",
    "251839006",
    "250869005",
    "250763003",
    "249857004",
    "248982007",
    "248595008",
    "248402002",
    "247441003",
    "246556002",
    "225577002",
    "225552003",
    "131148009",
    "127357005",
    "125123008",
    "123821009",
    "118254002",
    "118240005",
    "118236001",
    "118235002",
    "118228005",
    "118222006",
    "118219009",
    "118188004",
    "116336009",
    "107650008",
    "106176003",
    "106132005",
    "106112009",
    "106089007",
    "106077005",
    "106063007",
    "106048009",
    "106030000",
    "106028002",
    "105499002",
    "102957003",
    "80631005",
    "79899007",
    "69449002",
    "65124004",
    "64572001",
    "18165001",
    "13197004",
    "404684003",
    "1148742001",
    "890297007",
    "890227000",
    "890131001",
    "890111000",
    "890100008",
    "890098008",
    "879986003",
    "879985004",
    "879983006",
    "789750003",
    "781249001",
    "773760007",
    "443684005",
    "420008001",
    "419912001",
    "419620001",
    "419048002",
    "418781000",
    "418715001",
    "418635006",
    "418034009",
    "417928002",
    "409513009",
    "409508005",
    "405615003",
    "401270003",
    "370894009",
    "276746005",
    "248007002",
    "218225007",
    "272379006",
    "413350009",
    "405648003",
    "405647008",
    "276445008",
    "271336007",
    "182985004",
    "129125009",
    "66678007",
    "57177007",
    "33993005",
    "243796009"
];

export const DiagnoseSnomedCTValueSet: ValueSet = [];

export default DiagnoseSnomedCT;
