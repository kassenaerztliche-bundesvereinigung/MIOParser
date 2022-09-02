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
import CMRPregnancyHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRPregnancyHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Pregnancy_History

type CMRPregnancyHistory =
    | "721151003"
    | "704144000"
    | "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}"
    | "160427003:246090004=40609001"
    | "160427003:246090004=165775009"
    | "160427003:246090004=120001000119107"
    | "160427003:246090004=16356006"
    | "413350009:{246090004=199646006,408732007=444301002}"
    | "413350009:{246090004=59566000,408732007=444301002}"
    | "288256007"
    | "413350009:{246090004=284465006,408732007=444301002}"
    | "442080007";

type CMRPregnancyHistoryType = t.KeyofC<{
    "721151003": null;
    "704144000": null;
    "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}": null;
    "160427003:246090004=40609001": null;
    "160427003:246090004=165775009": null;
    "160427003:246090004=120001000119107": null;
    "160427003:246090004=16356006": null;
    "413350009:{246090004=199646006,408732007=444301002}": null;
    "413350009:{246090004=59566000,408732007=444301002}": null;
    "288256007": null;
    "413350009:{246090004=284465006,408732007=444301002}": null;
    "442080007": null;
}>;

const CMRPregnancyHistory: CMRPregnancyHistoryType = t.keyof({
    "721151003": null,
    "704144000": null,
    "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}":
        null,
    "160427003:246090004=40609001": null,
    "160427003:246090004=165775009": null,
    "160427003:246090004=120001000119107": null,
    "160427003:246090004=16356006": null,
    "413350009:{246090004=199646006,408732007=444301002}": null,
    "413350009:{246090004=59566000,408732007=444301002}": null,
    "288256007": null,
    "413350009:{246090004=284465006,408732007=444301002}": null,
    "442080007": null
});
export const CMRPregnancyHistoryArray: string[] = [
    "721151003",
    "704144000",
    "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}",
    "160427003:246090004=40609001",
    "160427003:246090004=165775009",
    "160427003:246090004=120001000119107",
    "160427003:246090004=16356006",
    "413350009:{246090004=199646006,408732007=444301002}",
    "413350009:{246090004=59566000,408732007=444301002}",
    "288256007",
    "413350009:{246090004=284465006,408732007=444301002}",
    "442080007"
];

export const CMRPregnancyHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "721151003",
                display: "Maternal history of gestational diabetes (situation)"
            },
            {
                code: "704144000",
                display: "Maternal history of diabetes mellitus (situation)"
            },
            {
                code: "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}",
                display:
                    "Procedure needed (situation) + Drug therapy status (situation) : { Temporal context (attribute) = Current or specified time (qualifier value) , Associated procedure (attribute) = Drug therapy (procedure) , Procedure context (attribute) = Needed (qualifier value) , Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "160427003:246090004=40609001",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Infectious disease in mother complicating pregnancy, childbirth AND/OR puerperium (disorder)"
            },
            {
                code: "160427003:246090004=165775009",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Indirect Coombs test positive (finding)"
            },
            {
                code: "160427003:246090004=120001000119107",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Group B streptococcus infection in mother complicating childbirth (disorder)"
            },
            {
                code: "160427003:246090004=16356006",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Multiple pregnancy (disorder)"
            },
            {
                code: "413350009:{246090004=199646006,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Polyhydramnios - delivered (disorder), Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "413350009:{246090004=59566000,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Oligohydramnios (disorder), Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "288256007",
                display: "History of maternal psychiatric problem (situation)"
            },
            {
                code: "413350009:{246090004=284465006,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Finding relating to psychosocial functioning (finding), Subject relationship context (attribute) = Mother of subject (person) }"
            },
            {
                code: "442080007",
                display: "Drug misuse by mother (situation)"
            }
        ]
    }
];

export { CMRPregnancyHistoryGerman as ConceptMap };

export default CMRPregnancyHistory;
