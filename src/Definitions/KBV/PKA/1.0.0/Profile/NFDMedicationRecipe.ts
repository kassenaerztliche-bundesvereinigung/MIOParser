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
import { Literal, Excess, MinMaxArray } from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Recipe"

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationRecipeCodeCoding {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_ERP_Medication_Type";
    code: "freitext";
    id?: string;
}

export const NFDMedicationRecipeCodeCoding: t.Type<NFDMedicationRecipeCodeCoding> =
    t.recursion("NFDMedicationRecipeCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "https://fhir.kbv.de/CodeSystem/KBV_CS_ERP_Medication_Type"
                    ),
                    code: Literal("freitext")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDMedicationRecipeMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Recipe|1.0.0">;
    id?: string;
}

export const NFDMedicationRecipeMeta: t.Type<NFDMedicationRecipeMeta> = t.recursion(
    "NFDMedicationRecipeMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication_Recipe|1.0.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
 */
export interface NFDMedicationRecipeCode {
    coding: Array<NFDMedicationRecipeCodeCoding>;
    text: string;
    id?: string;
}

export const NFDMedicationRecipeCode: t.Type<NFDMedicationRecipeCode> = t.recursion(
    "NFDMedicationRecipeCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDMedicationRecipeCodeCoding),
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface NFDMedicationRecipe {
    resourceType: "Medication";
    meta: NFDMedicationRecipeMeta;
    code: NFDMedicationRecipeCode;
    id?: string;
}

const NFDMedicationRecipe: t.Type<NFDMedicationRecipe> = t.recursion(
    "NFDMedicationRecipe",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Medication"),
                    meta: NFDMedicationRecipeMeta,
                    code: NFDMedicationRecipeCode
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default NFDMedicationRecipe;
