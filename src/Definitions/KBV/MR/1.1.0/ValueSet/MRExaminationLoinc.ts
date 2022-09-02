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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Loinc

type MRExaminationLoinc =
    | "30954-2"
    | "890-4"
    | "15343-7"
    | "22496-4"
    | "8013-5"
    | "22497-2"
    | "6357-8"
    | "5195-3"
    | "718-7"
    | "26453-1";

type MRExaminationLoincType = t.KeyofC<{
    "30954-2": null;
    "890-4": null;
    "15343-7": null;
    "22496-4": null;
    "8013-5": null;
    "22497-2": null;
    "6357-8": null;
    "5195-3": null;
    "718-7": null;
    "26453-1": null;
}>;

const MRExaminationLoinc: MRExaminationLoincType = t.keyof({
    "30954-2": null,
    "890-4": null,
    "15343-7": null,
    "22496-4": null,
    "8013-5": null,
    "22497-2": null,
    "6357-8": null,
    "5195-3": null,
    "718-7": null,
    "26453-1": null
});
export const MRExaminationLoincArray: string[] = [
    "30954-2",
    "890-4",
    "15343-7",
    "22496-4",
    "8013-5",
    "22497-2",
    "6357-8",
    "5195-3",
    "718-7",
    "26453-1"
];

export const MRExaminationLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "30954-2",
                display: "Relevant diagnostic tests/laboratory data Narrative"
            },
            {
                code: "890-4",
                display: "Blood group antibody screen [Presence] in Serum or Plasma"
            },
            {
                code: "15343-7",
                display: "Blood group antibody screen [Titer] in Serum or Plasma"
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum"
            },
            {
                code: "8013-5",
                display: "Rubella virus Ab [Units/volume] in Serum"
            },
            {
                code: "22497-2",
                display: "Rubella virus Ab [Titer] in Serum"
            },
            {
                code: "6357-8",
                display:
                    "Chlamydia trachomatis DNA [Presence] in Urine by NAA with probe detection"
            },
            {
                code: "5195-3",
                display: "Hepatitis B virus surface Ag [Presence] in Serum"
            },
            {
                code: "718-7",
                display: "Hemoglobin [Mass/volume] in Blood"
            },
            {
                code: "26453-1",
                display: "Erythrocytes [#/volume] in Blood"
            }
        ]
    }
];

export default MRExaminationLoinc;
