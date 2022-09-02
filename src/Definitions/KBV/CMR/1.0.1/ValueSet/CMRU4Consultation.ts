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
import CMRU4ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Consultation

type CMRU4Consultation =
    | "438650006"
    | "408433001"
    | "409066002:{363702006=444069008,363702006=426482000}"
    | "424673000"
    | "409059003"
    | "702971000"
    | "409066002:363702006=162214009"
    | "424308004";

type CMRU4ConsultationType = t.KeyofC<{
    "438650006": null;
    "408433001": null;
    "409066002:{363702006=444069008,363702006=426482000}": null;
    "424673000": null;
    "409059003": null;
    "702971000": null;
    "409066002:363702006=162214009": null;
    "424308004": null;
}>;

const CMRU4Consultation: CMRU4ConsultationType = t.keyof({
    "438650006": null,
    "408433001": null,
    "409066002:{363702006=444069008,363702006=426482000}": null,
    "424673000": null,
    "409059003": null,
    "702971000": null,
    "409066002:363702006=162214009": null,
    "424308004": null
});
export const CMRU4ConsultationArray: string[] = [
    "438650006",
    "408433001",
    "409066002:{363702006=444069008,363702006=426482000}",
    "424673000",
    "409059003",
    "702971000",
    "409066002:363702006=162214009",
    "424308004"
];

export const CMRU4ConsultationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "438650006",
                display: "Dietary education for breast feeding (procedure)"
            },
            {
                code: "408433001",
                display:
                    "Recommendation to caregiver regarding prevention of sudden infant death syndrome (procedure)"
            },
            {
                code: "409066002:{363702006=444069008,363702006=426482000}",
                display:
                    "Education, guidance and counseling (procedure) : { Has focus (attribute) = Administration of Vitamin D supplement (procedure) , Has focus (attribute) = Prevention of dental caries (procedure) }"
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
                code: "409066002:363702006=162214009",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Crying infant (finding)"
            },
            {
                code: "424308004",
                display:
                    "Speech and language therapy education, guidance, and counseling (procedure)"
            }
        ]
    }
];

export { CMRU4ConsultationGerman as ConceptMap };

export default CMRU4Consultation;
