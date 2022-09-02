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
import CMRU7ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_Consultation

type CMRU7Consultation =
    | "408431004"
    | "409059003"
    | "424308004"
    | "304507003"
    | "441041000124100"
    | "702971000"
    | "274410002";

type CMRU7ConsultationType = t.KeyofC<{
    "408431004": null;
    "409059003": null;
    "424308004": null;
    "304507003": null;
    "441041000124100": null;
    "702971000": null;
    "274410002": null;
}>;

const CMRU7Consultation: CMRU7ConsultationType = t.keyof({
    "408431004": null,
    "409059003": null,
    "424308004": null,
    "304507003": null,
    "441041000124100": null,
    "702971000": null,
    "274410002": null
});
export const CMRU7ConsultationArray: string[] = [
    "408431004",
    "409059003",
    "424308004",
    "304507003",
    "441041000124100",
    "702971000",
    "274410002"
];

export const CMRU7ConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "408431004",
                display:
                    "Recommendation to caregiver regarding child's dental health (procedure)"
            },
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
                code: "304507003",
                display: "Exercise education (procedure)"
            },
            {
                code: "441041000124100",
                display: "Counseling about nutrition (procedure)"
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

export { CMRU7ConsultationGerman as ConceptMap };

export default CMRU7Consultation;
