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
import MRCatalogueAGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRCatalogueAGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Catalogue_A

type MRCatalogueA =
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
    | "418138009";

type MRCatalogueAType = t.KeyofC<{
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
}>;

const MRCatalogueA: MRCatalogueAType = t.keyof({
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
    "418138009": null
});
export const MRCatalogueAArray: string[] = [
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
    "418138009"
];

export const MRCatalogueAValueSet: ValueSet = [
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
    }
];

export { MRCatalogueAGerman as ConceptMap };

export default MRCatalogueA;
