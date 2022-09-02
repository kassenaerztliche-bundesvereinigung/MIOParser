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
import CMRU2ConsultationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2ConsultationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Consultation

type CMRU2Consultation =
    | "438650006"
    | "408433001"
    | "409066002:{363702006=444069008,363702006=426482000}"
    | "409066002:363702006=698350008"
    | "424673000";

type CMRU2ConsultationType = t.KeyofC<{
    "438650006": null;
    "408433001": null;
    "409066002:{363702006=444069008,363702006=426482000}": null;
    "409066002:363702006=698350008": null;
    "424673000": null;
}>;

const CMRU2Consultation: CMRU2ConsultationType = t.keyof({
    "438650006": null,
    "408433001": null,
    "409066002:{363702006=444069008,363702006=426482000}": null,
    "409066002:363702006=698350008": null,
    "424673000": null
});
export const CMRU2ConsultationArray: string[] = [
    "438650006",
    "408433001",
    "409066002:{363702006=444069008,363702006=426482000}",
    "409066002:363702006=698350008",
    "424673000"
];

export const CMRU2ConsultationValueSet: ValueSet = [
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
                    "Recommendation to carer regarding prevention of sudden infant death syndrome (procedure)"
            },
            {
                code: "409066002:{363702006=444069008,363702006=426482000}",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of Vitamin D supplement (procedure) , Has focus (attribute) = Prevention of dental caries (procedure) }"
            },
            {
                code: "409066002:363702006=698350008",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of vitamin K1 via oral route (procedure)"
            },
            {
                code: "424673000",
                display:
                    "Community resources education, guidance and counseling (procedure)"
            }
        ]
    }
];

export { CMRU2ConsultationGerman as ConceptMap };

export default CMRU2Consultation;
