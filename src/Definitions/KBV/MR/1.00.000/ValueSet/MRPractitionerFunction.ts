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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Practitioner_Function

type MRPractitionerFunction =
    | "010"
    | "020"
    | "030"
    | "050"
    | "060"
    | "070"
    | "080"
    | "091"
    | "093"
    | "110"
    | "142"
    | "147"
    | "150"
    | "170"
    | "180"
    | "197"
    | "200"
    | "210"
    | "220"
    | "230"
    | "271"
    | "281"
    | "291"
    | "303"
    | "313"
    | "314"
    | "330"
    | "341"
    | "511"
    | "512"
    | "513"
    | "514"
    | "515"
    | "516"
    | "517"
    | "521"
    | "522"
    | "523"
    | "524"
    | "525"
    | "526"
    | "527"
    | "528"
    | "532"
    | "534"
    | "535"
    | "542"
    | "544"
    | "1"
    | "3"
    | "2"
    | "179"
    | "4"
    | "33"
    | "41"
    | "86"
    | "88"
    | "89"
    | "91"
    | "309343006"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192";

const MRPractitionerFunction: t.Type<MRPractitionerFunction> = t.union(
    [
        t.literal("010"),
        t.literal("020"),
        t.literal("030"),
        t.literal("050"),
        t.literal("060"),
        t.literal("070"),
        t.literal("080"),
        t.literal("091"),
        t.literal("093"),
        t.literal("110"),
        t.literal("142"),
        t.literal("147"),
        t.literal("150"),
        t.literal("170"),
        t.literal("180"),
        t.literal("197"),
        t.literal("200"),
        t.literal("210"),
        t.literal("220"),
        t.literal("230"),
        t.literal("271"),
        t.literal("281"),
        t.literal("291"),
        t.literal("303"),
        t.literal("313"),
        t.literal("314"),
        t.literal("330"),
        t.literal("341"),
        t.literal("511"),
        t.literal("512"),
        t.literal("513"),
        t.literal("514"),
        t.literal("515"),
        t.literal("516"),
        t.literal("517"),
        t.literal("521"),
        t.literal("522"),
        t.literal("523"),
        t.literal("524"),
        t.literal("525"),
        t.literal("526"),
        t.literal("527"),
        t.literal("528"),
        t.literal("532"),
        t.literal("534"),
        t.literal("535"),
        t.literal("542"),
        t.literal("544"),
        t.literal("1"),
        t.literal("3"),
        t.literal("2"),
        t.literal("179"),
        t.literal("4"),
        t.literal("33"),
        t.literal("41"),
        t.literal("86"),
        t.literal("88"),
        t.literal("89"),
        t.literal("91"),
        t.literal("309343006"),
        t.literal("140"),
        t.literal("143"),
        t.literal("160"),
        t.literal("161"),
        t.literal("171"),
        t.literal("192")
    ],
    "MRPractitionerFunction"
);

export const MRPractitionerFunctionArray: string[] = [
    "010",
    "020",
    "030",
    "050",
    "060",
    "070",
    "080",
    "091",
    "093",
    "110",
    "142",
    "147",
    "150",
    "170",
    "180",
    "197",
    "200",
    "210",
    "220",
    "230",
    "271",
    "281",
    "291",
    "303",
    "313",
    "314",
    "330",
    "341",
    "511",
    "512",
    "513",
    "514",
    "515",
    "516",
    "517",
    "521",
    "522",
    "523",
    "524",
    "525",
    "526",
    "527",
    "528",
    "532",
    "534",
    "535",
    "542",
    "544",
    "1",
    "3",
    "2",
    "179",
    "4",
    "33",
    "41",
    "86",
    "88",
    "89",
    "91",
    "309343006",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192"
];

export const MRPractitionerFunctionValueSet: ValueSet = [
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    }
];

export default MRPractitionerFunction;
