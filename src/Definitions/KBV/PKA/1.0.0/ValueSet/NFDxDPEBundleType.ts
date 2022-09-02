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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFDxDPE_Bundle_Type

type NFDxDPEBundleType =
    | "NFD"
    | "DPE_Gewebe_Organspendeerklaerung"
    | "DPE_Patientenverfuegung"
    | "DPE_Vorsorgevollmacht";

type NFDxDPEBundleTypeType = t.KeyofC<{
    NFD: null;
    DPE_Gewebe_Organspendeerklaerung: null;
    DPE_Patientenverfuegung: null;
    DPE_Vorsorgevollmacht: null;
}>;

const NFDxDPEBundleType: NFDxDPEBundleTypeType = t.keyof({
    NFD: null,
    DPE_Gewebe_Organspendeerklaerung: null,
    DPE_Patientenverfuegung: null,
    DPE_Vorsorgevollmacht: null
});
export const NFDxDPEBundleTypeArray: string[] = [
    "NFD",
    "DPE_Gewebe_Organspendeerklaerung",
    "DPE_Patientenverfuegung",
    "DPE_Vorsorgevollmacht"
];

export const NFDxDPEBundleTypeValueSet: ValueSet = [
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFDxDPE_Bundle_Type",
        concept: [
            {
                code: "NFD",
                display: "NFD"
            },
            {
                code: "DPE_Gewebe_Organspendeerklaerung",
                display: "DPE_Gewebe_Organspendeerklärung"
            },
            {
                code: "DPE_Patientenverfuegung",
                display: "DPE_Patientenverfügung"
            },
            {
                code: "DPE_Vorsorgevollmacht",
                display: "DPE_Vorsorgevollmacht"
            }
        ]
    }
];

export default NFDxDPEBundleType;
