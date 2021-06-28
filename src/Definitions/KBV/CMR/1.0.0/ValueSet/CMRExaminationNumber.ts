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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Examination_Number

type CMRExaminationNumber =
    | "170099002"
    | "170107008"
    | "243788004:370131001=133931009"
    | "170250008"
    | "170263002"
    | "170254004"
    | "401140000"
    | "170281004"
    | "410635005"
    | "243788004:370131001=410602000"
    | "738796001:363702006=171191008"
    | "738796001:363702006=428447008"
    | "171241003"
    | "252957005"
    | "129822005"
    | "252465000:405813007=56459004";

const CMRExaminationNumber: t.Type<CMRExaminationNumber> = t.union(
    [
        t.literal("170099002"),
        t.literal("170107008"),
        t.literal("243788004:370131001=133931009"),
        t.literal("170250008"),
        t.literal("170263002"),
        t.literal("170254004"),
        t.literal("401140000"),
        t.literal("170281004"),
        t.literal("410635005"),
        t.literal("243788004:370131001=410602000"),
        t.literal("738796001:363702006=171191008"),
        t.literal("738796001:363702006=428447008"),
        t.literal("171241003"),
        t.literal("252957005"),
        t.literal("129822005"),
        t.literal("252465000:405813007=56459004")
    ],
    "CMRExaminationNumber"
);

export const CMRExaminationNumberArray: string[] = [
    "170099002",
    "170107008",
    "243788004:370131001=133931009",
    "170250008",
    "170263002",
    "170254004",
    "401140000",
    "170281004",
    "410635005",
    "243788004:370131001=410602000",
    "738796001:363702006=171191008",
    "738796001:363702006=428447008",
    "171241003",
    "252957005",
    "129822005",
    "252465000:405813007=56459004"
];

export const CMRExaminationNumberValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "170099002",
                display: "Child examination - birth (procedure)"
            },
            {
                code: "170107008",
                display: "Child examination - 10 days (procedure)"
            },
            {
                code: "243788004:370131001=133931009",
                display:
                    "Child examination (procedure) : Recipient category =  Infant (person)"
            },
            {
                code: "170250008",
                display: "Child 3 month examination (procedure)"
            },
            {
                code: "170263002",
                display: "Child 6 month examination (procedure)"
            },
            {
                code: "170254004",
                display: "Child 1 year examination (procedure)"
            },
            {
                code: "401140000",
                display: "Child 2 year examination (procedure)"
            },
            {
                code: "170281004",
                display: "Child 3 year examination (procedure)"
            },
            {
                code: "410635005",
                display: "Child 4 year examination (procedure)"
            },
            {
                code: "243788004:370131001=410602000",
                display:
                    "Child examination (procedure) : Recipient category (attribute) =  Preschool child (person)"
            },
            {
                code: "738796001:363702006=171191008",
                display:
                    "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Cystic fibrosis screening (procedure)"
            },
            {
                code: "738796001:363702006=428447008",
                display:
                    "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Newborn blood spot screening (procedure)"
            },
            {
                code: "171241003",
                display: "Congenital dislocation of the hip screening (procedure)"
            },
            {
                code: "252957005",
                display: "Children's hearing test (procedure)"
            },
            {
                code: "129822005",
                display: "Childhood growth AND/OR development finding (finding)"
            },
            {
                code: "252465000:405813007=56459004",
                display:
                    "Pulse oximetry (procedure) : Procedure site - Direct (attribute) = Foot structure (body structure)"
            }
        ]
    }
];

export default CMRExaminationNumber;
