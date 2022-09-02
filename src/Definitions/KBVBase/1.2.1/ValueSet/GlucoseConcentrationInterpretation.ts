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
import GlucoseConcentrationInterpretationGerman from "../../../../Definitions/KBVBase/1.2.1/ConceptMap/GlucoseConcentrationInterpretationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Glucose_Concentration_Interpretation

type GlucoseConcentrationInterpretation =
    | "404684003:{363713009=260369004,363713009=255358001}"
    | "404684003:{363713009=260369004}"
    | "404684003:{363713009=260369004,363713009=255361000}"
    | "404684003:{363713009=371928007,363713009=260371004,363713009=260369004}"
    | "404684003:{363713009=260371004,363713009=255361000}"
    | "404684003:{363713009=260371004}"
    | "404684003:{363713009=260371004,363713009=255358001}";

type GlucoseConcentrationInterpretationType = t.KeyofC<{
    "404684003:{363713009=260369004,363713009=255358001}": null;
    "404684003:{363713009=260369004}": null;
    "404684003:{363713009=260369004,363713009=255361000}": null;
    "404684003:{363713009=371928007,363713009=260371004,363713009=260369004}": null;
    "404684003:{363713009=260371004,363713009=255361000}": null;
    "404684003:{363713009=260371004}": null;
    "404684003:{363713009=260371004,363713009=255358001}": null;
}>;

const GlucoseConcentrationInterpretation: GlucoseConcentrationInterpretationType =
    t.keyof({
        "404684003:{363713009=260369004,363713009=255358001}": null,
        "404684003:{363713009=260369004}": null,
        "404684003:{363713009=260369004,363713009=255361000}": null,
        "404684003:{363713009=371928007,363713009=260371004,363713009=260369004}": null,
        "404684003:{363713009=260371004,363713009=255361000}": null,
        "404684003:{363713009=260371004}": null,
        "404684003:{363713009=260371004,363713009=255358001}": null
    });
export const GlucoseConcentrationInterpretationArray: string[] = [
    "404684003:{363713009=260369004,363713009=255358001}",
    "404684003:{363713009=260369004}",
    "404684003:{363713009=260369004,363713009=255361000}",
    "404684003:{363713009=371928007,363713009=260371004,363713009=260369004}",
    "404684003:{363713009=260371004,363713009=255361000}",
    "404684003:{363713009=260371004}",
    "404684003:{363713009=260371004,363713009=255358001}"
];

export const GlucoseConcentrationInterpretationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "404684003:{363713009=260369004,363713009=255358001}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Increasing (qualifier value), Has interpretation (attribute)=Rapid (qualifier value)}"
            },
            {
                code: "404684003:{363713009=260369004}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Increasing (qualifier value)}"
            },
            {
                code: "404684003:{363713009=260369004,363713009=255361000}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Increasing (qualifier value) , Has interpretation (attribute)=Slow (qualifier value) }"
            },
            {
                code: "404684003:{363713009=371928007,363713009=260371004,363713009=260369004}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Not significant (qualifier value), Has interpretation (attribute)=Decreasing (qualifier value), Has interpretation (attribute)= Increasing (qualifier value) }"
            },
            {
                code: "404684003:{363713009=260371004,363713009=255361000}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Decreasing (qualifier value) ,Has interpretation (attribute)=Slow (qualifier value) }"
            },
            {
                code: "404684003:{363713009=260371004}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Decreasing (qualifier value) }"
            },
            {
                code: "404684003:{363713009=260371004,363713009=255358001}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Decreasing (qualifier value) ,Has interpretation (attribute)=Rapid (qualifier value)}"
            }
        ]
    }
];

export { GlucoseConcentrationInterpretationGerman as ConceptMap };

export default GlucoseConcentrationInterpretation;
