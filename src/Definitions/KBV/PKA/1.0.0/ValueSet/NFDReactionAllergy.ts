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
import NFDReactionAllergyGerman from "../../../../../Definitions/KBV/PKA/1.0.0/ConceptMap/NFDReactionAllergyGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_NFD_Reaction_Allergy

type NFDReactionAllergy =
    | "39579001"
    | "41291007"
    | "702809001"
    | "195967001"
    | "24079001"
    | "4386001"
    | "271759003"
    | "62315008"
    | "267036007"
    | "43116000"
    | "23924001"
    | "91175000"
    | "1985008"
    | "418363000"
    | "49727002"
    | "698247007"
    | "410430005"
    | "9826008"
    | "51599000"
    | "76067001"
    | "359610006"
    | "271757001"
    | "247472004"
    | "70076002"
    | "73442001"
    | "162290004"
    | "422587007"
    | "126485001"
    | "31996006";

type NFDReactionAllergyType = t.KeyofC<{
    "39579001": null;
    "41291007": null;
    "702809001": null;
    "195967001": null;
    "24079001": null;
    "4386001": null;
    "271759003": null;
    "62315008": null;
    "267036007": null;
    "43116000": null;
    "23924001": null;
    "91175000": null;
    "1985008": null;
    "418363000": null;
    "49727002": null;
    "698247007": null;
    "410430005": null;
    "9826008": null;
    "51599000": null;
    "76067001": null;
    "359610006": null;
    "271757001": null;
    "247472004": null;
    "70076002": null;
    "73442001": null;
    "162290004": null;
    "422587007": null;
    "126485001": null;
    "31996006": null;
}>;

const NFDReactionAllergy: NFDReactionAllergyType = t.keyof({
    "39579001": null,
    "41291007": null,
    "702809001": null,
    "195967001": null,
    "24079001": null,
    "4386001": null,
    "271759003": null,
    "62315008": null,
    "267036007": null,
    "43116000": null,
    "23924001": null,
    "91175000": null,
    "1985008": null,
    "418363000": null,
    "49727002": null,
    "698247007": null,
    "410430005": null,
    "9826008": null,
    "51599000": null,
    "76067001": null,
    "359610006": null,
    "271757001": null,
    "247472004": null,
    "70076002": null,
    "73442001": null,
    "162290004": null,
    "422587007": null,
    "126485001": null,
    "31996006": null
});
export const NFDReactionAllergyArray: string[] = [
    "39579001",
    "41291007",
    "702809001",
    "195967001",
    "24079001",
    "4386001",
    "271759003",
    "62315008",
    "267036007",
    "43116000",
    "23924001",
    "91175000",
    "1985008",
    "418363000",
    "49727002",
    "698247007",
    "410430005",
    "9826008",
    "51599000",
    "76067001",
    "359610006",
    "271757001",
    "247472004",
    "70076002",
    "73442001",
    "162290004",
    "422587007",
    "126485001",
    "31996006"
];

export const NFDReactionAllergyValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "39579001",
                display: "Anaphylaxis (disorder)"
            },
            {
                code: "41291007",
                display: "Angioedema (disorder)"
            },
            {
                code: "702809001",
                display:
                    "Drug reaction with eosinophilia and systemic symptoms (disorder)"
            },
            {
                code: "195967001",
                display: "Asthma (disorder)"
            },
            {
                code: "24079001",
                display: "Atopic dermatitis (disorder)"
            },
            {
                code: "4386001",
                display: "Bronchospasm (finding)"
            },
            {
                code: "271759003",
                display: "Bullous eruption (disorder)"
            },
            {
                code: "62315008",
                display: "Diarrhea (finding)"
            },
            {
                code: "267036007",
                display: "Dyspnea (finding)"
            },
            {
                code: "43116000",
                display: "Eczema (disorder)"
            },
            {
                code: "23924001",
                display: "Tight chest (finding)"
            },
            {
                code: "91175000",
                display: "Seizure (finding)"
            },
            {
                code: "1985008",
                display: "Vomitus (substance)"
            },
            {
                code: "418363000",
                display: "Itching of skin (finding)"
            },
            {
                code: "49727002",
                display: "Cough (finding)"
            },
            {
                code: "698247007",
                display: "Cardiac arrhythmia (disorder)"
            },
            {
                code: "410430005",
                display: "Cardiorespiratory arrest (disorder)"
            },
            {
                code: "9826008",
                display: "Conjunctivitis (disorder)"
            },
            {
                code: "51599000",
                display: "Edema of larynx (disorder)"
            },
            {
                code: "76067001",
                display: "Sneezing (finding)"
            },
            {
                code: "359610006",
                display: "Ocular hyperemia (disorder)"
            },
            {
                code: "271757001",
                display: "Papular eruption (disorder)"
            },
            {
                code: "247472004",
                display: "Wheal (finding)"
            },
            {
                code: "70076002",
                display: "Rhinitis (disorder)"
            },
            {
                code: "73442001",
                display: "Stevens-Johnson syndrome (disorder)"
            },
            {
                code: "162290004",
                display: "Dry eyes (finding)"
            },
            {
                code: "422587007",
                display: "Nausea (finding)"
            },
            {
                code: "126485001",
                display: "Urticaria (disorder)"
            },
            {
                code: "31996006",
                display: "Vasculitis (disorder)"
            }
        ]
    }
];

export { NFDReactionAllergyGerman as ConceptMap };

export default NFDReactionAllergy;
