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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Risk_Characteristics_Discharge_Summary

type MRRiskCharacteristicsDischargeSummary =
    | "416471007"
    | "312850006"
    | "161460007"
    | "609328004"
    | "161664006"
    | "271596009"
    | "161152002"
    | "312850006:246090004=44795003"
    | "73211009"
    | "414916001"
    | "237837007"
    | "8447006"
    | "237240001"
    | "416413003"
    | "18656007"
    | "134521000119104"
    | "161765003"
    | "726565008"
    | "713651007"
    | "161743003"
    | "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}"
    | "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}"
    | "161805006"
    | "416940007:363589002=79876008"
    | "60001007:263502005=424572001"
    | "418138009"
    | "27624003"
    | "710814002"
    | "66214007"
    | "723665008"
    | "427139004"
    | "36813001"
    | "16356006"
    | "86203003"
    | "59566000"
    | "237238006"
    | "237292005"
    | "17382005"
    | "6383007"
    | "199246003"
    | "307534009"
    | "165775009"
    | "47200007:418775008=312404004"
    | "82771000119102"
    | "29738008"
    | "698632006:263502005=371924009"
    | "45007003"
    | "11687002"
    | "289365005"
    | "118185001";

const MRRiskCharacteristicsDischargeSummary: t.Type<MRRiskCharacteristicsDischargeSummary> = t.union(
    [
        t.literal("416471007"),
        t.literal("312850006"),
        t.literal("161460007"),
        t.literal("609328004"),
        t.literal("161664006"),
        t.literal("271596009"),
        t.literal("161152002"),
        t.literal("312850006:246090004=44795003"),
        t.literal("73211009"),
        t.literal("414916001"),
        t.literal("237837007"),
        t.literal("8447006"),
        t.literal("237240001"),
        t.literal("416413003"),
        t.literal("18656007"),
        t.literal("134521000119104"),
        t.literal("161765003"),
        t.literal("726565008"),
        t.literal("713651007"),
        t.literal("161743003"),
        t.literal(
            "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}"
        ),
        t.literal(
            "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}"
        ),
        t.literal("161805006"),
        t.literal("416940007:363589002=79876008"),
        t.literal("60001007:263502005=424572001"),
        t.literal("418138009"),
        t.literal("27624003"),
        t.literal("710814002"),
        t.literal("66214007"),
        t.literal("723665008"),
        t.literal("427139004"),
        t.literal("36813001"),
        t.literal("16356006"),
        t.literal("86203003"),
        t.literal("59566000"),
        t.literal("237238006"),
        t.literal("237292005"),
        t.literal("17382005"),
        t.literal("6383007"),
        t.literal("199246003"),
        t.literal("307534009"),
        t.literal("165775009"),
        t.literal("47200007:418775008=312404004"),
        t.literal("82771000119102"),
        t.literal("29738008"),
        t.literal("698632006:263502005=371924009"),
        t.literal("45007003"),
        t.literal("11687002"),
        t.literal("289365005"),
        t.literal("118185001")
    ],
    "MRRiskCharacteristicsDischargeSummary"
);

export const MRRiskCharacteristicsDischargeSummaryArray: string[] = [
    "416471007",
    "312850006",
    "161460007",
    "609328004",
    "161664006",
    "271596009",
    "161152002",
    "312850006:246090004=44795003",
    "73211009",
    "414916001",
    "237837007",
    "8447006",
    "237240001",
    "416413003",
    "18656007",
    "134521000119104",
    "161765003",
    "726565008",
    "713651007",
    "161743003",
    "417662000:{408731000=410513005,408729009=410515003,246090004=199745000,408732007=410604004}",
    "417662000:{408731000=410513005,408729009=410515003,246090004=80113008,408732007=410604004}",
    "161805006",
    "416940007:363589002=79876008",
    "60001007:263502005=424572001",
    "418138009",
    "27624003",
    "710814002",
    "66214007",
    "723665008",
    "427139004",
    "36813001",
    "16356006",
    "86203003",
    "59566000",
    "237238006",
    "237292005",
    "17382005",
    "6383007",
    "199246003",
    "307534009",
    "165775009",
    "47200007:418775008=312404004",
    "82771000119102",
    "29738008",
    "698632006:263502005=371924009",
    "45007003",
    "11687002",
    "289365005",
    "118185001"
];

export const MRRiskCharacteristicsDischargeSummaryValueSet: ValueSet = [
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    }
];

export default MRRiskCharacteristicsDischargeSummary;
