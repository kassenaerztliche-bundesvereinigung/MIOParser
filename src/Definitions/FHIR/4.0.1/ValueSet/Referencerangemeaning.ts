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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/referencerange-meaning

type Referencerangemeaning =
    | "type"
    | "normal"
    | "recommended"
    | "treatment"
    | "therapeutic"
    | "pre"
    | "post"
    | "endocrine"
    | "pre-puberty"
    | "follicular"
    | "midcycle"
    | "luteal"
    | "postmenopausal";

type ReferencerangemeaningType = t.KeyofC<{
    type: null;
    normal: null;
    recommended: null;
    treatment: null;
    therapeutic: null;
    pre: null;
    post: null;
    endocrine: null;
    "pre-puberty": null;
    follicular: null;
    midcycle: null;
    luteal: null;
    postmenopausal: null;
}>;

const Referencerangemeaning: ReferencerangemeaningType = t.keyof({
    type: null,
    normal: null,
    recommended: null,
    treatment: null,
    therapeutic: null,
    pre: null,
    post: null,
    endocrine: null,
    "pre-puberty": null,
    follicular: null,
    midcycle: null,
    luteal: null,
    postmenopausal: null
});
export const ReferencerangemeaningArray: string[] = [
    "type",
    "normal",
    "recommended",
    "treatment",
    "therapeutic",
    "pre",
    "post",
    "endocrine",
    "pre-puberty",
    "follicular",
    "midcycle",
    "luteal",
    "postmenopausal"
];

export const ReferencerangemeaningValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
        concept: [
            {
                code: "type",
                display: "Type"
            },
            {
                code: "normal",
                display: "Normal Range"
            },
            {
                code: "recommended",
                display: "Recommended Range"
            },
            {
                code: "treatment",
                display: "Treatment Range"
            },
            {
                code: "therapeutic",
                display: "Therapeutic Desired Level"
            },
            {
                code: "pre",
                display: "Pre Therapeutic Desired Level"
            },
            {
                code: "post",
                display: "Post Therapeutic Desired Level"
            },
            {
                code: "endocrine",
                display: "Endocrine"
            },
            {
                code: "pre-puberty",
                display: "Pre-Puberty"
            },
            {
                code: "follicular",
                display: "Follicular Stage"
            },
            {
                code: "midcycle",
                display: "MidCycle"
            },
            {
                code: "luteal",
                display: "Luteal"
            },
            {
                code: "postmenopausal",
                display: "Post-Menopause"
            }
        ]
    }
];

export default Referencerangemeaning;
