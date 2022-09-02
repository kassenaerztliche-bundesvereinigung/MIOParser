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
import CMRU4DevelopmentAssessmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4DevelopmentAssessmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Development_Assessment

type CMRU4DevelopmentAssessment =
    | "364832000"
    | "364944003"
    | "285770005"
    | "284490008"
    | "106126000"
    | "365997002"
    | "106131003";

type CMRU4DevelopmentAssessmentType = t.KeyofC<{
    "364832000": null;
    "364944003": null;
    "285770005": null;
    "284490008": null;
    "106126000": null;
    "365997002": null;
    "106131003": null;
}>;

const CMRU4DevelopmentAssessment: CMRU4DevelopmentAssessmentType = t.keyof({
    "364832000": null,
    "364944003": null,
    "285770005": null,
    "284490008": null,
    "106126000": null,
    "365997002": null,
    "106131003": null
});
export const CMRU4DevelopmentAssessmentArray: string[] = [
    "364832000",
    "364944003",
    "285770005",
    "284490008",
    "106126000",
    "365997002",
    "106131003"
];

export const CMRU4DevelopmentAssessmentValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "364832000",
                display:
                    "Finding related to ability to perform gross motor function (finding)"
            },
            {
                code: "364944003",
                display:
                    "Finding related to ability to perform fine motor function (finding)"
            },
            {
                code: "285770005",
                display: "Finding of perceptual performance (finding)"
            },
            {
                code: "284490008",
                display: "Finding relating to complex and social behaviors (finding)"
            },
            {
                code: "106126000",
                display: "Emotional state finding (finding)"
            },
            {
                code: "365997002",
                display: "Finding related to ability to interact with others (finding)"
            },
            {
                code: "106131003",
                display: "Mood finding (finding)"
            }
        ]
    }
];

export { CMRU4DevelopmentAssessmentGerman as ConceptMap };

export default CMRU4DevelopmentAssessment;
