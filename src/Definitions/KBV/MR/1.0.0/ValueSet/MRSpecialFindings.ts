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
import MRSpecialFindingsGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRSpecialFindingsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Special_Findings

type MRSpecialFindings =
    | "27624003"
    | "710814002"
    | "66214007"
    | "271596009"
    | "161152002"
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

const MRSpecialFindings: t.Type<MRSpecialFindings> = t.union(
    [
        t.literal("27624003"),
        t.literal("710814002"),
        t.literal("66214007"),
        t.literal("271596009"),
        t.literal("161152002"),
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
    "MRSpecialFindings"
);

export const MRSpecialFindingsArray: string[] = [
    "27624003",
    "710814002",
    "66214007",
    "271596009",
    "161152002",
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

export const MRSpecialFindingsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "27624003",
                display: "Chronic disease (disorder)"
            },
            {
                code: "710814002",
                display: "Long-term current use of drug therapy (situation)"
            },
            {
                code: "66214007",
                display: "Substance abuse (disorder)"
            },
            {
                code: "271596009",
                display: "Mental distress (finding)"
            },
            {
                code: "161152002",
                display: "Social problem (finding)"
            },
            {
                code: "723665008",
                display: "Vaginal bleeding complicating early pregnancy (disorder)"
            },
            {
                code: "427139004",
                display: "Third trimester bleeding (disorder)"
            },
            {
                code: "36813001",
                display: "Placenta previa (disorder)"
            },
            {
                code: "16356006",
                display: "Multiple pregnancy (disorder)"
            },
            {
                code: "86203003",
                display: "Polyhydramnios (disorder)"
            },
            {
                code: "59566000",
                display: "Oligohydramnios (disorder)"
            },
            {
                code: "237238006",
                display: "Pregnancy with uncertain dates (finding)"
            },
            {
                code: "237292005",
                display: "Placental insufficiency (disorder)"
            },
            {
                code: "17382005",
                display: "Cervical incompetence (disorder)"
            },
            {
                code: "6383007",
                display: "Premature labor (finding)"
            },
            {
                code: "199246003",
                display: "Anemia during pregnancy - baby not yet delivered (disorder)"
            },
            {
                code: "307534009",
                display: "Urinary tract infection in pregnancy (disorder)"
            },
            {
                code: "165775009",
                display: "Indirect Coombs test positive (finding)"
            },
            {
                code: "47200007:418775008=312404004",
                display:
                    "High risk pregnancy (finding) : Finding method (attribute) = Antenatal blood tests (procedure)"
            },
            {
                code: "82771000119102",
                display: "Hypertension complicating pregnancy (disorder)"
            },
            {
                code: "29738008",
                display: "Proteinuria (finding)"
            },
            {
                code: "698632006:263502005=371924009",
                display:
                    "Pregnancy induced edema (disorder) : Clinical course (attribute) = Moderate to severe (qualifier value)"
            },
            {
                code: "45007003",
                display: "Low blood pressure (disorder)"
            },
            {
                code: "11687002",
                display: "Gestational diabetes mellitus (disorder)"
            },
            {
                code: "289365005",
                display: "Finding of malposition of fetus (finding)"
            },
            {
                code: "118185001",
                display: "Finding related to pregnancy (finding)"
            }
        ]
    }
];

export { MRSpecialFindingsGerman as ConceptMap };

export default MRSpecialFindings;
