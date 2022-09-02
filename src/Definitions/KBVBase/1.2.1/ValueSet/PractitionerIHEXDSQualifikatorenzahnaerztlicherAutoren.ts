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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Practitioner_IHEXDS_Qualifikatoren_zahnaerztlicher_Autoren

type PractitionerIHEXDSQualifikatorenzahnaerztlicherAutoren =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6";

type PractitionerIHEXDSQualifikatorenzahnaerztlicherAutorenType = t.KeyofC<{
    "1": null;
    "2": null;
    "3": null;
    "4": null;
    "5": null;
    "6": null;
}>;

const PractitionerIHEXDSQualifikatorenzahnaerztlicherAutoren: PractitionerIHEXDSQualifikatorenzahnaerztlicherAutorenType =
    t.keyof({
        "1": null,
        "2": null,
        "3": null,
        "4": null,
        "5": null,
        "6": null
    });
export const PractitionerIHEXDSQualifikatorenzahnaerztlicherAutorenArray: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
];

export const PractitionerIHEXDSQualifikatorenzahnaerztlicherAutorenValueSet: ValueSet = [
    {
        system: "urn:oid:1.2.276.0.76.5.492",
        concept: [
            {
                code: "1",
                display: "Zahnarzt"
            },
            {
                code: "2",
                display: "FZA Allgemeine Zahnheilkunde"
            },
            {
                code: "3",
                display: "FZA Parodontologie"
            },
            {
                code: "4",
                display: "FZA Oralchirurgie"
            },
            {
                code: "5",
                display: "FZA Kieferorthopädie"
            },
            {
                code: "6",
                display: "FZA öffentliches Gesundheitswesen"
            }
        ]
    }
];

export default PractitionerIHEXDSQualifikatorenzahnaerztlicherAutoren;
