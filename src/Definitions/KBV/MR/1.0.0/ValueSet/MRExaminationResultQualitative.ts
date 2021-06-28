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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Result_Qualitative

type MRExaminationResultQualitative =
    | "165774008"
    | "165775009"
    | "165791007"
    | "365588008:{363714003=3527003,363713009=52101004}"
    | "415798001"
    | "415797006"
    | "165806002"
    | "406010001";

const MRExaminationResultQualitative: t.Type<MRExaminationResultQualitative> = t.union(
    [
        t.literal("165774008"),
        t.literal("165775009"),
        t.literal("165791007"),
        t.literal("365588008:{363714003=3527003,363713009=52101004}"),
        t.literal("415798001"),
        t.literal("415797006"),
        t.literal("165806002"),
        t.literal("406010001")
    ],
    "MRExaminationResultQualitative"
);

export const MRExaminationResultQualitativeArray: string[] = [
    "165774008",
    "165775009",
    "165791007",
    "365588008:{363714003=3527003,363713009=52101004}",
    "415798001",
    "415797006",
    "165806002",
    "406010001"
];

export const MRExaminationResultQualitativeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "165774008",
                display: "Indirect Coombs test negative (finding)"
            },
            {
                code: "165775009",
                display: "Indirect Coombs test positive (finding)"
            },
            {
                code: "165791007",
                display: "Rubella antibody absent (finding)"
            },
            {
                code: "365588008:{363714003=3527003,363713009=52101004}",
                display:
                    "Finding of rubella antibody titer (finding) : {Interprets (attribute) = Antibody measurement (procedure), Has interpretation (attribute) = Present (qualifier value)}"
            },
            {
                code: "415798001",
                display: "Urine chlamydia trachomatis test positive (finding)"
            },
            {
                code: "415797006",
                display: "Urine chlamydia trachomatis test negative (finding)"
            },
            {
                code: "165806002",
                display: "Hepatitis B surface antigen positive (finding)"
            },
            {
                code: "406010001",
                display: "Hepatitis B surface antigen negative (finding)"
            }
        ]
    }
];

export default MRExaminationResultQualitative;
