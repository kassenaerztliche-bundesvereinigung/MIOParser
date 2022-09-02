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
import CMRU9ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU9ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U9_Consultation

type CMRU9Consultation =
    | "409066002:{363702006=426482000,260686004=360160009}"
    | "409059003"
    | "424308004"
    | "284352003+304507003"
    | "11816003"
    | "709135003"
    | "408935001"
    | "702971000"
    | "274410002";

type CMRU9ConsultationType = t.KeyofC<{
    "409066002:{363702006=426482000,260686004=360160009}": null;
    "409059003": null;
    "424308004": null;
    "284352003+304507003": null;
    "11816003": null;
    "709135003": null;
    "408935001": null;
    "702971000": null;
    "274410002": null;
}>;

const CMRU9Consultation: CMRU9ConsultationType = t.keyof({
    "409066002:{363702006=426482000,260686004=360160009}": null,
    "409059003": null,
    "424308004": null,
    "284352003+304507003": null,
    "11816003": null,
    "709135003": null,
    "408935001": null,
    "702971000": null,
    "274410002": null
});
export const CMRU9ConsultationArray: string[] = [
    "409066002:{363702006=426482000,260686004=360160009}",
    "409059003",
    "424308004",
    "284352003+304507003",
    "11816003",
    "709135003",
    "408935001",
    "702971000",
    "274410002"
];

export const CMRU9ConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "409066002:{363702006=426482000,260686004=360160009}",
                display:
                    "Education, guidance and counseling (procedure) : { Has focus (attribute) = Prevention of dental caries (procedure) , Method (attribute) = Checking - action (qualifier value) }"
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
                code: "284352003+304507003",
                display:
                    "Obesity diet education (procedure) + Exercise education (procedure)"
            },
            {
                code: "11816003",
                display: "Diet education (procedure)"
            },
            {
                code: "709135003",
                display: "Video screen time education (procedure)"
            },
            {
                code: "408935001",
                display: "Substance abuse prevention education (procedure)"
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

export { CMRU9ConsultationGerman as ConceptMap };

export default CMRU9Consultation;
