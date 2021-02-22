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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Practitioner_Speciality

type PractitionerSpeciality =
    | "1"
    | "3"
    | "010"
    | "020"
    | "030"
    | "050"
    | "060"
    | "070"
    | "080"
    | "091"
    | "093"
    | "102"
    | "110"
    | "130"
    | "142"
    | "147"
    | "150"
    | "170"
    | "180"
    | "196"
    | "197"
    | "200"
    | "210"
    | "220"
    | "230"
    | "240"
    | "250"
    | "271"
    | "281"
    | "291"
    | "301"
    | "302"
    | "303"
    | "304"
    | "308"
    | "313"
    | "314"
    | "330"
    | "341"
    | "359"
    | "360"
    | "361"
    | "511"
    | "512"
    | "513"
    | "514"
    | "515"
    | "516"
    | "517"
    | "518"
    | "521"
    | "522"
    | "523"
    | "524"
    | "525"
    | "526"
    | "527"
    | "528"
    | "530"
    | "531"
    | "532"
    | "533"
    | "534"
    | "535"
    | "542"
    | "544"
    | "2"
    | "4"
    | "5"
    | "6"
    | "179"
    | "33"
    | "34"
    | "35"
    | "37"
    | "38"
    | "39"
    | "41"
    | "47"
    | "48"
    | "50"
    | "53"
    | "55"
    | "60"
    | "69"
    | "70"
    | "71"
    | "72"
    | "73"
    | "181"
    | "182"
    | "74"
    | "75"
    | "76"
    | "77"
    | "78"
    | "79"
    | "80"
    | "81"
    | "82"
    | "86"
    | "88"
    | "89"
    | "91"
    | "144"
    | "145"
    | "146"
    | "148"
    | "309343006"
    | "042"
    | "096"
    | "097"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192"
    | "536"
    | "537";

const PractitionerSpeciality: t.Type<PractitionerSpeciality> = t.union(
    [
        t.literal("1"),
        t.literal("3"),
        t.literal("010"),
        t.literal("020"),
        t.literal("030"),
        t.literal("050"),
        t.literal("060"),
        t.literal("070"),
        t.literal("080"),
        t.literal("091"),
        t.literal("093"),
        t.literal("102"),
        t.literal("110"),
        t.literal("130"),
        t.literal("142"),
        t.literal("147"),
        t.literal("150"),
        t.literal("170"),
        t.literal("180"),
        t.literal("196"),
        t.literal("197"),
        t.literal("200"),
        t.literal("210"),
        t.literal("220"),
        t.literal("230"),
        t.literal("240"),
        t.literal("250"),
        t.literal("271"),
        t.literal("281"),
        t.literal("291"),
        t.literal("301"),
        t.literal("302"),
        t.literal("303"),
        t.literal("304"),
        t.literal("308"),
        t.literal("313"),
        t.literal("314"),
        t.literal("330"),
        t.literal("341"),
        t.literal("359"),
        t.literal("360"),
        t.literal("361"),
        t.literal("511"),
        t.literal("512"),
        t.literal("513"),
        t.literal("514"),
        t.literal("515"),
        t.literal("516"),
        t.literal("517"),
        t.literal("518"),
        t.literal("521"),
        t.literal("522"),
        t.literal("523"),
        t.literal("524"),
        t.literal("525"),
        t.literal("526"),
        t.literal("527"),
        t.literal("528"),
        t.literal("530"),
        t.literal("531"),
        t.literal("532"),
        t.literal("533"),
        t.literal("534"),
        t.literal("535"),
        t.literal("542"),
        t.literal("544"),
        t.literal("2"),
        t.literal("4"),
        t.literal("5"),
        t.literal("6"),
        t.literal("179"),
        t.literal("33"),
        t.literal("34"),
        t.literal("35"),
        t.literal("37"),
        t.literal("38"),
        t.literal("39"),
        t.literal("41"),
        t.literal("47"),
        t.literal("48"),
        t.literal("50"),
        t.literal("53"),
        t.literal("55"),
        t.literal("60"),
        t.literal("69"),
        t.literal("70"),
        t.literal("71"),
        t.literal("72"),
        t.literal("73"),
        t.literal("181"),
        t.literal("182"),
        t.literal("74"),
        t.literal("75"),
        t.literal("76"),
        t.literal("77"),
        t.literal("78"),
        t.literal("79"),
        t.literal("80"),
        t.literal("81"),
        t.literal("82"),
        t.literal("86"),
        t.literal("88"),
        t.literal("89"),
        t.literal("91"),
        t.literal("144"),
        t.literal("145"),
        t.literal("146"),
        t.literal("148"),
        t.literal("309343006"),
        t.literal("042"),
        t.literal("096"),
        t.literal("097"),
        t.literal("140"),
        t.literal("143"),
        t.literal("160"),
        t.literal("161"),
        t.literal("171"),
        t.literal("192"),
        t.literal("536"),
        t.literal("537")
    ],
    "PractitionerSpeciality"
);

export const PractitionerSpecialityArray: string[] = [
    "1",
    "3",
    "010",
    "020",
    "030",
    "050",
    "060",
    "070",
    "080",
    "091",
    "093",
    "102",
    "110",
    "130",
    "142",
    "147",
    "150",
    "170",
    "180",
    "196",
    "197",
    "200",
    "210",
    "220",
    "230",
    "240",
    "250",
    "271",
    "281",
    "291",
    "301",
    "302",
    "303",
    "304",
    "308",
    "313",
    "314",
    "330",
    "341",
    "359",
    "360",
    "361",
    "511",
    "512",
    "513",
    "514",
    "515",
    "516",
    "517",
    "518",
    "521",
    "522",
    "523",
    "524",
    "525",
    "526",
    "527",
    "528",
    "530",
    "531",
    "532",
    "533",
    "534",
    "535",
    "542",
    "544",
    "2",
    "4",
    "5",
    "6",
    "179",
    "33",
    "34",
    "35",
    "37",
    "38",
    "39",
    "41",
    "47",
    "48",
    "50",
    "53",
    "55",
    "60",
    "69",
    "70",
    "71",
    "72",
    "73",
    "181",
    "182",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "86",
    "88",
    "89",
    "91",
    "144",
    "145",
    "146",
    "148",
    "309343006",
    "042",
    "096",
    "097",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192",
    "536",
    "537"
];

export const PractitionerSpecialityValueSet: ValueSet = [
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    }
];

export default PractitionerSpeciality;
