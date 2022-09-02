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
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    ReqArray
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDMedicationStrength from "../../../../../Definitions/KBV/PKA/1.0.0/Extension/NFDMedicationStrength";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication"

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationIngredientItemCodeableConceptAskCode {
    system: "http://fhir.de/CodeSystem/ask";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDMedicationIngredientItemCodeableConceptAskCode: t.Type<NFDMedicationIngredientItemCodeableConceptAskCode> =
    t.recursion("NFDMedicationIngredientItemCodeableConceptAskCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/ask"),
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationIngredientItemCodeableConceptSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDMedicationIngredientItemCodeableConceptSnomedCode: t.Type<NFDMedicationIngredientItemCodeableConceptSnomedCode> =
    t.recursion("NFDMedicationIngredientItemCodeableConceptSnomedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationIngredientItemCodeableConceptAndererCode {
    system: string;
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDMedicationIngredientItemCodeableConceptAndererCode: t.Type<NFDMedicationIngredientItemCodeableConceptAndererCode> =
    t.recursion("NFDMedicationIngredientItemCodeableConceptAndererCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The value of the numerator.
 */
export interface NFDMedicationIngredientStrengthNumerator {
    value: number;
    unit: string;
    id?: string;
    system?: string;
    code?: string;
}

export const NFDMedicationIngredientStrengthNumerator: t.Type<NFDMedicationIngredientStrengthNumerator> =
    t.recursion("NFDMedicationIngredientStrengthNumerator", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    code: SCALARCode
                })
            ])
        )
    );

/**
 * The value of the denominator.
 */
export interface NFDMedicationIngredientStrengthDenominator {
    value: number;
    unit: string;
    id?: string;
    system?: string;
    code?: string;
}

export const NFDMedicationIngredientStrengthDenominator: t.Type<NFDMedicationIngredientStrengthDenominator> =
    t.recursion("NFDMedicationIngredientStrengthDenominator", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    code: SCALARCode
                })
            ])
        )
    );

/**
 * Optional Extension Element - found in all resources.
 */
export interface NFDMedicationArzneimittelname {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Medication_Name";
    valueString: string;
    id?: string;
}

export const NFDMedicationArzneimittelname: t.Type<NFDMedicationArzneimittelname> =
    t.recursion("NFDMedicationArzneimittelname", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Medication_Name"
                    ),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationCodeCoding {
    system: "http://fhir.de/CodeSystem/ifa/pzn";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDMedicationCodeCoding: t.Type<NFDMedicationCodeCoding> = t.recursion(
    "NFDMedicationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/ifa/pzn"),
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDMedicationFormCoding {
    system: string;
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDMedicationFormCoding: t.Type<NFDMedicationFormCoding> = t.recursion(
    "NFDMedicationFormCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
 */
export interface NFDMedicationIngredientItemCodeableConcept {
    id?: string;
    coding?: Array<
        | NFDMedicationIngredientItemCodeableConceptAskCode
        | NFDMedicationIngredientItemCodeableConceptSnomedCode
        | NFDMedicationIngredientItemCodeableConceptAndererCode
    >;
    text?: string;
}

export const NFDMedicationIngredientItemCodeableConcept: t.Type<NFDMedicationIngredientItemCodeableConcept> =
    t.recursion("NFDMedicationIngredientItemCodeableConcept", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDMedicationIngredientItemCodeableConceptAskCode>,
                            t.Type<NFDMedicationIngredientItemCodeableConceptSnomedCode>,
                            t.Type<NFDMedicationIngredientItemCodeableConceptAndererCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDMedicationIngredientItemCodeableConceptAskCode,
                        NFDMedicationIngredientItemCodeableConceptSnomedCode,
                        NFDMedicationIngredientItemCodeableConceptAndererCode
                    ]),
                    [
                        {
                            codec: NFDMedicationIngredientItemCodeableConceptAskCode,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "system",
                                value: "http://fhir.de/CodeSystem/ask"
                            }
                        },
                        {
                            codec: NFDMedicationIngredientItemCodeableConceptSnomedCode,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: NFDMedicationIngredientItemCodeableConceptAndererCode,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "system" }
                        }
                    ],
                    ["0", "1"]
                ),
                text: SCALARString
            })
        )
    );

/**
 * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
 */
export interface NFDMedicationIngredientStrength {
    id?: string;
    extension?: (Extension | NFDMedicationStrength)[];
    numerator?: NFDMedicationIngredientStrengthNumerator;
    denominator?: NFDMedicationIngredientStrengthDenominator;
}

export const NFDMedicationIngredientStrength: t.Type<NFDMedicationIngredientStrength> =
    t.recursion("NFDMedicationIngredientStrength", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<NFDMedicationStrength>]>,
                    t.Any
                >(
                    t.union([Extension, NFDMedicationStrength]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDMedicationStrength,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Medication_Strength"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                numerator: NFDMedicationIngredientStrengthNumerator,
                denominator: NFDMedicationIngredientStrengthDenominator
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDMedicationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication|1.0.0">;
    id?: string;
}

export const NFDMedicationMeta: t.Type<NFDMedicationMeta> = t.recursion(
    "NFDMedicationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Medication|1.0.0"
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
export interface NFDMedicationCode {
    id?: string;
    coding?: NFDMedicationCodeCoding[];
}

export const NFDMedicationCode: t.Type<NFDMedicationCode> = t.recursion(
    "NFDMedicationCode",
    () =>
        Excess(t.partial({ id: SCALARString, coding: t.array(NFDMedicationCodeCoding) }))
);

/**
 * Describes the form of the item.  Powder; tablets; capsule.
 */
export interface NFDMedicationForm {
    id?: string;
    coding?: Array<NFDMedicationFormCoding>;
    text?: string;
}

export const NFDMedicationForm: t.Type<NFDMedicationForm> = t.recursion(
    "NFDMedicationForm",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: MaxArray(1, NFDMedicationFormCoding),
                text: SCALARString
            })
        )
);

/**
 * Identifies a particular constituent of interest in the product.
 */
export interface NFDMedicationIngredient {
    itemCodeableConcept: NFDMedicationIngredientItemCodeableConcept;
    id?: string;
    strength?: NFDMedicationIngredientStrength;
}

export const NFDMedicationIngredient: t.Type<NFDMedicationIngredient> = t.recursion(
    "NFDMedicationIngredient",
    () =>
        Excess(
            t.intersection([
                t.type({
                    itemCodeableConcept: NFDMedicationIngredientItemCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    strength: NFDMedicationIngredientStrength
                })
            ])
        )
);

interface NFDMedication {
    resourceType: "Medication";
    meta: NFDMedicationMeta;
    code: NFDMedicationCode;
    id?: string;
    extension?: (Extension | NFDMedicationArzneimittelname)[];
    form?: NFDMedicationForm;
    ingredient?: NFDMedicationIngredient[];
}

const NFDMedication: t.Type<NFDMedication> = t.recursion("NFDMedication", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Medication"),
                meta: NFDMedicationMeta,
                code: NFDMedicationCode
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<NFDMedicationArzneimittelname>]>,
                    t.Any
                >(
                    t.union([Extension, NFDMedicationArzneimittelname]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDMedicationArzneimittelname,
                            occurrence: ["0", "*"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFD_Medication_Name"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                form: NFDMedicationForm,
                ingredient: t.array(NFDMedicationIngredient)
            })
        ])
    )
);

export default NFDMedication;
