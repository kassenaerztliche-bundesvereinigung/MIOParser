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
import CMRU7aConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_Consultation

type CMRU7aConsultation =
    | "409059003"
    | "424308004"
    | "441041000124100"
    | "304507003"
    | "709135003"
    | "410263001"
    | "702971000"
    | "274410002";

type CMRU7aConsultationType = t.KeyofC<{
    "409059003": null;
    "424308004": null;
    "441041000124100": null;
    "304507003": null;
    "709135003": null;
    "410263001": null;
    "702971000": null;
    "274410002": null;
}>;

const CMRU7aConsultation: CMRU7aConsultationType = t.keyof({
    "409059003": null,
    "424308004": null,
    "441041000124100": null,
    "304507003": null,
    "709135003": null,
    "410263001": null,
    "702971000": null,
    "274410002": null
});
export const CMRU7aConsultationArray: string[] = [
    "409059003",
    "424308004",
    "441041000124100",
    "304507003",
    "709135003",
    "410263001",
    "702971000",
    "274410002"
];

export const CMRU7aConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "409059003",
                display: "Safety education, guidance, and counseling (procedure)"
            },
            {
                code: "424308004",
                display:
                    "Speech and language therapy education, guidance, and counseling (procedure)"
            },
            {
                code: "441041000124100",
                display: "Counseling about nutrition (procedure)"
            },
            {
                code: "304507003",
                display: "Exercise education (procedure)"
            },
            {
                code: "709135003",
                display: "Video screen time education (procedure)"
            },
            {
                code: "410263001",
                display:
                    "Medical/dental care education, guidance, and counseling (procedure)"
            },
            {
                code: "702971000",
                display: "Counseling for childhood immunization (procedure)"
            },
            {
                code: "274410002",
                display: "Dental referral - child (procedure)"
            }
        ]
    }
];

export { CMRU7aConsultationGerman as ConceptMap };

export default CMRU7aConsultation;
