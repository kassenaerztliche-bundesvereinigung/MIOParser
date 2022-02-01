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
import CMRHipScreeningMethodGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHipScreeningMethodGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hip_Screening_Method

type CMRHipScreeningMethod =
    | "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}"
    | "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}"
    | "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}"
    | "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}";

const CMRHipScreeningMethod: t.Type<CMRHipScreeningMethod> = t.union(
    [
        t.literal(
            "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}"
        ),
        t.literal(
            "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}"
        ),
        t.literal(
            "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}"
        ),
        t.literal(
            "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}"
        )
    ],
    "CMRHipScreeningMethod"
);

export const CMRHipScreeningMethodArray: string[] = [
    "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}",
    "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}",
    "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}",
    "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}"
];

export const CMRHipScreeningMethodValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "129125009:{363589002=241503003,408730004=398166005,408731000=410588008}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) = Performed (qualifier value) , Temporal context (situation) = Past - time unspecified (qualifier value) }"
            },
            {
                code: "129125009:{363589002=241503003,408730004=385660001,408731000=410588008}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) = Not done (qualifier value) , Temporal context (situation) = Past - time unspecified (qualifier value) }"
            },
            {
                code: "129125009:{363589002=241503003,408730004=410537005,408731000=410588008}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) = Action status unknown (qualifier value) , Temporal context (situation) = Past - time unspecified (qualifier value) }"
            },
            {
                code: "129125009:{363589002=241503003,408730004=398166005,408731000=410584005}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Ultrasound scan of neonatal hip (procedure) , Procedure context (situation) =  Performed (qualifier value) , Temporal context (situation) = Current - time specified (qualifier value) }"
            }
        ]
    }
];

export { CMRHipScreeningMethodGerman as ConceptMap };

export default CMRHipScreeningMethod;
