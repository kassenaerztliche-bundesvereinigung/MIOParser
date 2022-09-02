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
import CMRU6ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Consultation

type CMRU6Consultation =
    | "441041000124100"
    | "409066002:{363702006=444069008,363702006=426482000}"
    | "424673000"
    | "409059003"
    | "702971000"
    | "243085009"
    | "424308004"
    | "274410002"
    | "408935001";

type CMRU6ConsultationType = t.KeyofC<{
    "441041000124100": null;
    "409066002:{363702006=444069008,363702006=426482000}": null;
    "424673000": null;
    "409059003": null;
    "702971000": null;
    "243085009": null;
    "424308004": null;
    "274410002": null;
    "408935001": null;
}>;

const CMRU6Consultation: CMRU6ConsultationType = t.keyof({
    "441041000124100": null,
    "409066002:{363702006=444069008,363702006=426482000}": null,
    "424673000": null,
    "409059003": null,
    "702971000": null,
    "243085009": null,
    "424308004": null,
    "274410002": null,
    "408935001": null
});
export const CMRU6ConsultationArray: string[] = [
    "441041000124100",
    "409066002:{363702006=444069008,363702006=426482000}",
    "424673000",
    "409059003",
    "702971000",
    "243085009",
    "424308004",
    "274410002",
    "408935001"
];

export const CMRU6ConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "441041000124100",
                display: "Counseling about nutrition (procedure)"
            },
            {
                code: "409066002:{363702006=444069008,363702006=426482000}",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of Vitamin D supplement (procedure) , Has focus (attribute) = Prevention of dental caries (procedure) }"
            },
            {
                code: "424673000",
                display:
                    "Community resources education, guidance and counseling (procedure)"
            },
            {
                code: "409059003",
                display: "Safety education, guidance, and counseling (procedure)"
            },
            {
                code: "702971000",
                display: "Counseling for childhood immunization (procedure)"
            },
            {
                code: "243085009",
                display: "Oral health education (procedure)"
            },
            {
                code: "424308004",
                display:
                    "Speech and language therapy education, guidance, and counseling (procedure)"
            },
            {
                code: "274410002",
                display: "Dental referral - child (procedure)"
            },
            {
                code: "408935001",
                display: "Substance abuse prevention education (procedure)"
            }
        ]
    }
];

export { CMRU6ConsultationGerman as ConceptMap };

export default CMRU6Consultation;
