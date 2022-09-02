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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Risk_Characteristics_Discharge_Summary

type MRRiskCharacteristicsDischargeSummary =
    | "416471007"
    | "312850006"
    | "161460007"
    | "609328004"
    | "161664006"
    | "271596009"
    | "161152002"
    | "1156098006"
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
    | "1156096005"
    | "1156097001"
    | "161805006"
    | "1156095009"
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

type MRRiskCharacteristicsDischargeSummaryType = t.KeyofC<{
    "416471007": null;
    "312850006": null;
    "161460007": null;
    "609328004": null;
    "161664006": null;
    "271596009": null;
    "161152002": null;
    "1156098006": null;
    "73211009": null;
    "414916001": null;
    "237837007": null;
    "8447006": null;
    "237240001": null;
    "416413003": null;
    "18656007": null;
    "134521000119104": null;
    "161765003": null;
    "726565008": null;
    "713651007": null;
    "161743003": null;
    "1156096005": null;
    "1156097001": null;
    "161805006": null;
    "1156095009": null;
    "60001007:263502005=424572001": null;
    "418138009": null;
    "27624003": null;
    "710814002": null;
    "66214007": null;
    "723665008": null;
    "427139004": null;
    "36813001": null;
    "16356006": null;
    "86203003": null;
    "59566000": null;
    "237238006": null;
    "237292005": null;
    "17382005": null;
    "6383007": null;
    "199246003": null;
    "307534009": null;
    "165775009": null;
    "47200007:418775008=312404004": null;
    "82771000119102": null;
    "29738008": null;
    "698632006:263502005=371924009": null;
    "45007003": null;
    "11687002": null;
    "289365005": null;
    "118185001": null;
}>;

const MRRiskCharacteristicsDischargeSummary: MRRiskCharacteristicsDischargeSummaryType =
    t.keyof({
        "416471007": null,
        "312850006": null,
        "161460007": null,
        "609328004": null,
        "161664006": null,
        "271596009": null,
        "161152002": null,
        "1156098006": null,
        "73211009": null,
        "414916001": null,
        "237837007": null,
        "8447006": null,
        "237240001": null,
        "416413003": null,
        "18656007": null,
        "134521000119104": null,
        "161765003": null,
        "726565008": null,
        "713651007": null,
        "161743003": null,
        "1156096005": null,
        "1156097001": null,
        "161805006": null,
        "1156095009": null,
        "60001007:263502005=424572001": null,
        "418138009": null,
        "27624003": null,
        "710814002": null,
        "66214007": null,
        "723665008": null,
        "427139004": null,
        "36813001": null,
        "16356006": null,
        "86203003": null,
        "59566000": null,
        "237238006": null,
        "237292005": null,
        "17382005": null,
        "6383007": null,
        "199246003": null,
        "307534009": null,
        "165775009": null,
        "47200007:418775008=312404004": null,
        "82771000119102": null,
        "29738008": null,
        "698632006:263502005=371924009": null,
        "45007003": null,
        "11687002": null,
        "289365005": null,
        "118185001": null
    });
export const MRRiskCharacteristicsDischargeSummaryArray: string[] = [
    "416471007",
    "312850006",
    "161460007",
    "609328004",
    "161664006",
    "271596009",
    "161152002",
    "1156098006",
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
    "1156096005",
    "1156097001",
    "161805006",
    "1156095009",
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
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "416471007",
                display: "Family history of clinical finding (situation)"
            },
            {
                code: "312850006",
                display: "History of disorder (situation)"
            },
            {
                code: "161460007",
                display: "History of coagulation defect (situation)"
            },
            {
                code: "609328004",
                display: "Allergic disposition (finding)"
            },
            {
                code: "161664006",
                display: "History of blood transfusion (situation)"
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
                code: "1156098006",
                display:
                    "History of Rhesus isoimmunization affecting pregnancy (situation)"
            },
            {
                code: "73211009",
                display: "Diabetes mellitus (disorder)"
            },
            {
                code: "414916001",
                display: "Obesity (disorder)"
            },
            {
                code: "237837007",
                display: "Primordial dwarfism (disorder)"
            },
            {
                code: "8447006",
                display: "Congenital anomaly of skeletal bone (disorder)"
            },
            {
                code: "237240001",
                display: "Teenage pregnancy (finding)"
            },
            {
                code: "416413003",
                display: "Advanced maternal age gravida (finding)"
            },
            {
                code: "18656007",
                display: "Grand multipara (finding)"
            },
            {
                code: "134521000119104",
                display: "Fertility preservation procedure done (situation)"
            },
            {
                code: "161765003",
                display: "History of premature delivery (situation)"
            },
            {
                code: "726565008",
                display: "Past history of small for gestational age baby (situation)"
            },
            {
                code: "713651007",
                display: "History of pregnancy with abortive outcome (situation)"
            },
            {
                code: "161743003",
                display: "History of stillbirth (situation)"
            },
            {
                code: "1156096005",
                display:
                    "History of complication occurring during labor and delivery (situation)"
            },
            {
                code: "1156097001",
                display: "History of complication of puerperium (situation)"
            },
            {
                code: "161805006",
                display: "History of cesarean section (situation)"
            },
            {
                code: "1156095009",
                display: "History of operation on uterus (situation)"
            },
            {
                code: "60001007:263502005=424572001",
                display:
                    "Not pregnant (finding) : Clinical course (attribute) =  Clinical course with short duration (qualifier value)"
            },
            {
                code: "418138009",
                display: "Patient condition finding (finding)"
            }
        ]
    },
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

export default MRRiskCharacteristicsDischargeSummary;
