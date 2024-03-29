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
import MRImmunizationStatusGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRImmunizationStatusGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Immunization_Status

type MRImmunizationStatus =
    | "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}"
    | "73701000119109";

type MRImmunizationStatusType = t.KeyofC<{
    "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}": null;
    "73701000119109": null;
}>;

const MRImmunizationStatus: MRImmunizationStatusType = t.keyof({
    "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}":
        null,
    "73701000119109": null
});
export const MRImmunizationStatusArray: string[] = [
    "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}",
    "73701000119109"
];

export const MRImmunizationStatusValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "425457005:{363589002=170433008,408730004=385658003,408731000=410513005,408732007=410604004}",
                display:
                    "History of vaccination (situation) : { Associated procedure (attribute) = Administration of second dose of vaccine product containing only Measles morbillivirus and Mumps orthorubulavirus and Rubella virus antigens (procedure) , Procedure context (attribute) = Done (qualifier value) , Temporal context (attribute) = In the past (qualifier value) , Subject relationship context (attribute) = Subject of record (person) }"
            },
            {
                code: "73701000119109",
                display: "Influenza vaccination given (situation)"
            }
        ]
    }
];

export { MRImmunizationStatusGerman as ConceptMap };

export default MRImmunizationStatus;
