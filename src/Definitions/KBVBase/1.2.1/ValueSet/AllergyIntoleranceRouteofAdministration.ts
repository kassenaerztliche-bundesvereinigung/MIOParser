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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_AllergyIntolerance_Route_of_Administration

type AllergyIntoleranceRouteofAdministration =
    | "10547007"
    | "54471007"
    | "372449004"
    | "372451000"
    | "372452007"
    | "372450004"
    | "404820008"
    | "372453002"
    | "714743009"
    | "372454008"
    | "372457001"
    | "718329006"
    | "447694001"
    | "372458006"
    | "58100008"
    | "12130007"
    | "372459003"
    | "372464004"
    | "372465003"
    | "448077001"
    | "418821007"
    | "372460008"
    | "418331006"
    | "372461007"
    | "372463005"
    | "372466002"
    | "372467006"
    | "78421000"
    | "372468001"
    | "417255000"
    | "445771006"
    | "38239002"
    | "372469009"
    | "372470005"
    | "72607000"
    | "447122006"
    | "62226000"
    | "47625008"
    | "372471009"
    | "418401004"
    | "446540005"
    | "418892005"
    | "448598008"
    | "420185003"
    | "46713006"
    | "54485002"
    | "26643006"
    | "372473007"
    | "418664002"
    | "447052000"
    | "372474001"
    | "764723001"
    | "372475000"
    | "420047004"
    | "37161004"
    | "418321004"
    | "372476004"
    | "34206005"
    | "37839007"
    | "419874009"
    | "6064005"
    | "45890007"
    | "90028008"
    | "16857009";

type AllergyIntoleranceRouteofAdministrationType = t.KeyofC<{
    "10547007": null;
    "54471007": null;
    "372449004": null;
    "372451000": null;
    "372452007": null;
    "372450004": null;
    "404820008": null;
    "372453002": null;
    "714743009": null;
    "372454008": null;
    "372457001": null;
    "718329006": null;
    "447694001": null;
    "372458006": null;
    "58100008": null;
    "12130007": null;
    "372459003": null;
    "372464004": null;
    "372465003": null;
    "448077001": null;
    "418821007": null;
    "372460008": null;
    "418331006": null;
    "372461007": null;
    "372463005": null;
    "372466002": null;
    "372467006": null;
    "78421000": null;
    "372468001": null;
    "417255000": null;
    "445771006": null;
    "38239002": null;
    "372469009": null;
    "372470005": null;
    "72607000": null;
    "447122006": null;
    "62226000": null;
    "47625008": null;
    "372471009": null;
    "418401004": null;
    "446540005": null;
    "418892005": null;
    "448598008": null;
    "420185003": null;
    "46713006": null;
    "54485002": null;
    "26643006": null;
    "372473007": null;
    "418664002": null;
    "447052000": null;
    "372474001": null;
    "764723001": null;
    "372475000": null;
    "420047004": null;
    "37161004": null;
    "418321004": null;
    "372476004": null;
    "34206005": null;
    "37839007": null;
    "419874009": null;
    "6064005": null;
    "45890007": null;
    "90028008": null;
    "16857009": null;
}>;

const AllergyIntoleranceRouteofAdministration: AllergyIntoleranceRouteofAdministrationType =
    t.keyof({
        "10547007": null,
        "54471007": null,
        "372449004": null,
        "372451000": null,
        "372452007": null,
        "372450004": null,
        "404820008": null,
        "372453002": null,
        "714743009": null,
        "372454008": null,
        "372457001": null,
        "718329006": null,
        "447694001": null,
        "372458006": null,
        "58100008": null,
        "12130007": null,
        "372459003": null,
        "372464004": null,
        "372465003": null,
        "448077001": null,
        "418821007": null,
        "372460008": null,
        "418331006": null,
        "372461007": null,
        "372463005": null,
        "372466002": null,
        "372467006": null,
        "78421000": null,
        "372468001": null,
        "417255000": null,
        "445771006": null,
        "38239002": null,
        "372469009": null,
        "372470005": null,
        "72607000": null,
        "447122006": null,
        "62226000": null,
        "47625008": null,
        "372471009": null,
        "418401004": null,
        "446540005": null,
        "418892005": null,
        "448598008": null,
        "420185003": null,
        "46713006": null,
        "54485002": null,
        "26643006": null,
        "372473007": null,
        "418664002": null,
        "447052000": null,
        "372474001": null,
        "764723001": null,
        "372475000": null,
        "420047004": null,
        "37161004": null,
        "418321004": null,
        "372476004": null,
        "34206005": null,
        "37839007": null,
        "419874009": null,
        "6064005": null,
        "45890007": null,
        "90028008": null,
        "16857009": null
    });
export const AllergyIntoleranceRouteofAdministrationArray: string[] = [
    "10547007",
    "54471007",
    "372449004",
    "372451000",
    "372452007",
    "372450004",
    "404820008",
    "372453002",
    "714743009",
    "372454008",
    "372457001",
    "718329006",
    "447694001",
    "372458006",
    "58100008",
    "12130007",
    "372459003",
    "372464004",
    "372465003",
    "448077001",
    "418821007",
    "372460008",
    "418331006",
    "372461007",
    "372463005",
    "372466002",
    "372467006",
    "78421000",
    "372468001",
    "417255000",
    "445771006",
    "38239002",
    "372469009",
    "372470005",
    "72607000",
    "447122006",
    "62226000",
    "47625008",
    "372471009",
    "418401004",
    "446540005",
    "418892005",
    "448598008",
    "420185003",
    "46713006",
    "54485002",
    "26643006",
    "372473007",
    "418664002",
    "447052000",
    "372474001",
    "764723001",
    "372475000",
    "420047004",
    "37161004",
    "418321004",
    "372476004",
    "34206005",
    "37839007",
    "419874009",
    "6064005",
    "45890007",
    "90028008",
    "16857009"
];

export const AllergyIntoleranceRouteofAdministrationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "10547007",
                display: "Otic route (qualifier value)"
            },
            {
                code: "54471007",
                display: "Buccal route (qualifier value)"
            },
            {
                code: "372449004",
                display: "Dental route (qualifier value)"
            },
            {
                code: "372451000",
                display: "Endosinusial route (qualifier value)"
            },
            {
                code: "372452007",
                display: "Endotracheopulmonary route (qualifier value)"
            },
            {
                code: "372450004",
                display: "Endocervical route (qualifier value)"
            },
            {
                code: "404820008",
                display: "Epidural route (qualifier value)"
            },
            {
                code: "372453002",
                display: "Extra-amniotic route (qualifier value)"
            },
            {
                code: "714743009",
                display: "Extracorporeal route (qualifier value)"
            },
            {
                code: "372454008",
                display: "Gastroenteral route (qualifier value)"
            },
            {
                code: "372457001",
                display: "Gingival route (qualifier value)"
            },
            {
                code: "718329006",
                display: "Infiltration route (qualifier value)"
            },
            {
                code: "447694001",
                display: "Respiratory tract route (qualifier value)"
            },
            {
                code: "372458006",
                display: "Intraamniotic route (qualifier value)"
            },
            {
                code: "58100008",
                display: "Intra-arterial route (qualifier value)"
            },
            {
                code: "12130007",
                display: "Intra-articular route (qualifier value)"
            },
            {
                code: "372459003",
                display: "Intrabursal route (qualifier value)"
            },
            {
                code: "372464004",
                display: "Intradermal route (qualifier value)"
            },
            {
                code: "372465003",
                display: "Intradiscal route (qualifier value)"
            },
            {
                code: "448077001",
                display: "Intraepidermal route (qualifier value)"
            },
            {
                code: "418821007",
                display: "Intracameral route (qualifier value)"
            },
            {
                code: "372460008",
                display: "Intracardiac route (qualifier value)"
            },
            {
                code: "418331006",
                display: "Intracartilaginous route (qualifier value)"
            },
            {
                code: "372461007",
                display: "Intracavernous route (qualifier value)"
            },
            {
                code: "372463005",
                display: "Intracoronary route (qualifier value)"
            },
            {
                code: "372466002",
                display: "Intralesional route (qualifier value)"
            },
            {
                code: "372467006",
                display: "Intralymphatic route (qualifier value)"
            },
            {
                code: "78421000",
                display: "Intramuscular route (qualifier value)"
            },
            {
                code: "372468001",
                display: "Intraocular route (qualifier value)"
            },
            {
                code: "417255000",
                display: "Intraosseous route (qualifier value)"
            },
            {
                code: "445771006",
                display: "Intrapericardial route (qualifier value)"
            },
            {
                code: "38239002",
                display: "Intraperitoneal route (qualifier value)"
            },
            {
                code: "372469009",
                display: "Intrapleural route (qualifier value)"
            },
            {
                code: "372470005",
                display: "Intrasternal route (qualifier value)"
            },
            {
                code: "72607000",
                display: "Intrathecal route (qualifier value)"
            },
            {
                code: "447122006",
                display: "Intratumor route (qualifier value)"
            },
            {
                code: "62226000",
                display: "Intrauterine route (qualifier value)"
            },
            {
                code: "47625008",
                display: "Intravenous route (qualifier value)"
            },
            {
                code: "372471009",
                display: "Intravesical route (qualifier value)"
            },
            {
                code: "418401004",
                display: "Intravitreal route (qualifier value)"
            },
            {
                code: "446540005",
                display: "Intracerebral route (qualifier value)"
            },
            {
                code: "418892005",
                display: "Intracisternal route (qualifier value)"
            },
            {
                code: "448598008",
                display: "Cutaneous route (qualifier value)"
            },
            {
                code: "420185003",
                display: "Laryngeal route (qualifier value)"
            },
            {
                code: "46713006",
                display: "Nasal route (qualifier value)"
            },
            {
                code: "54485002",
                display: "Ophthalmic route (qualifier value)"
            },
            {
                code: "26643006",
                display: "Oral route (qualifier value)"
            },
            {
                code: "372473007",
                display: "Oromucosal route (qualifier value)"
            },
            {
                code: "418664002",
                display: "Oropharyngeal route (qualifier value)"
            },
            {
                code: "447052000",
                display: "Periodontal route (qualifier value)"
            },
            {
                code: "372474001",
                display: "Periarticular route (qualifier value)"
            },
            {
                code: "764723001",
                display: "Epilesional route (qualifier value)"
            },
            {
                code: "372475000",
                display: "Perineural route (qualifier value)"
            },
            {
                code: "420047004",
                display: "Periosteal route (qualifier value)"
            },
            {
                code: "37161004",
                display: "Rectal route (qualifier value)"
            },
            {
                code: "418321004",
                display: "Retrobulbar route (qualifier value)"
            },
            {
                code: "372476004",
                display: "Subconjunctival route (qualifier value)"
            },
            {
                code: "34206005",
                display: "Subcutaneous route (qualifier value)"
            },
            {
                code: "37839007",
                display: "Sublingual route (qualifier value)"
            },
            {
                code: "419874009",
                display: "Submucosal route (qualifier value)"
            },
            {
                code: "6064005",
                display: "Topical route (qualifier value)"
            },
            {
                code: "45890007",
                display: "Transdermal route (qualifier value)"
            },
            {
                code: "90028008",
                display: "Urethral route (qualifier value)"
            },
            {
                code: "16857009",
                display: "Vaginal route (qualifier value)"
            }
        ]
    }
];

export default AllergyIntoleranceRouteofAdministration;
