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
    MaxArray,
    ReqArray,
    CustomReference,
    ExtensibleCheck
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import EDQMVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/EDQM";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import MedicationTypeVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/MedicationType";
import MedicationstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Medicationstatus";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Ratio from "../../../../Definitions/FHIR/4.0.1/Profile/Ratio";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Medication"

/**
 * Content in other Language.
 */
export interface MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent: t.Type<MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent> =
    t.recursion(
        "MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman {
    extension: Array<
        | Extension
        | MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman: t.Type<MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman> =
    t.recursion(
        "MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MedicationKategorieValueCodeableConceptCodingDisplay {
    extension: Array<
        | Extension
        | MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman
    >;
    id?: string;
    value?: string;
}

export const MedicationKategorieValueCodeableConceptCodingDisplay: t.Type<MedicationKategorieValueCodeableConceptCodingDisplay> =
    t.recursion("MedicationKategorieValueCodeableConceptCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MedicationKategorieValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationKategorieValueCodeableConceptCoding {
    system: string;
    version: string;
    code: MedicationTypeVS;
    id?: string;
    _display?: MedicationKategorieValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const MedicationKategorieValueCodeableConceptCoding: t.Type<MedicationKategorieValueCodeableConceptCoding> =
    t.recursion("MedicationKategorieValueCodeableConceptCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: MedicationTypeVS
            }),
            t.partial({
                id: SCALARString,
                _display: MedicationKategorieValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationIngredientItemCodeableConceptAskCode {
    system: "http://fhir.de/CodeSystem/ask";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationIngredientItemCodeableConceptAskCode: t.Type<MedicationIngredientItemCodeableConceptAskCode> =
    t.recursion("MedicationIngredientItemCodeableConceptAskCode", () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/ask"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationIngredientItemCodeableConceptSnomedCode {
    system: "http://snomed.info/sct";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationIngredientItemCodeableConceptSnomedCode: t.Type<MedicationIngredientItemCodeableConceptSnomedCode> =
    t.recursion("MedicationIngredientItemCodeableConceptSnomedCode", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MedicationKategorieValueCodeableConcept {
    id?: string;
    coding?: Array<MedicationKategorieValueCodeableConceptCoding>;
    text?: string;
}

export const MedicationKategorieValueCodeableConcept: t.Type<MedicationKategorieValueCodeableConcept> =
    t.recursion("MedicationKategorieValueCodeableConcept", () =>
        t.partial({
            id: SCALARString,
            coding: MaxArray(1, MedicationKategorieValueCodeableConceptCoding),
            text: SCALARString
        })
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationCodePznCode {
    system: "http://fhir.de/CodeSystem/ifa/pzn";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationCodePznCode: t.Type<MedicationCodePznCode> = t.recursion(
    "MedicationCodePznCode",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/ifa/pzn"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationCodeSnomedCode {
    system: "http://snomed.info/sct";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationCodeSnomedCode: t.Type<MedicationCodeSnomedCode> = t.recursion(
    "MedicationCodeSnomedCode",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * Falls ein Fertigarzneimittel angegeben wird, kann hier der entsprechende deutsche ATC-Code dokumentiert werden. Es ist erlaubt, zusätzlich den Wirkstoff mit einem anderen Code unter Bestandteile zu dokumentieren.
 */
export interface MedicationCodeAtcCode {
    system: "http://fhir.de/CodeSystem/dimdi/atc";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationCodeAtcCode: t.Type<MedicationCodeAtcCode> = t.recursion(
    "MedicationCodeAtcCode",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/dimdi/atc"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationFormSnomedCode {
    system: "http://snomed.info/sct";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationFormSnomedCode: t.Type<MedicationFormSnomedCode> = t.recursion(
    "MedicationFormSnomedCode",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationFormEdqmCode {
    system: "http://standardterms.edqm.eu";
    code: EDQMVS;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationFormEdqmCode: t.Type<MedicationFormEdqmCode> = t.recursion(
    "MedicationFormEdqmCode",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://standardterms.edqm.eu"),
                code: EDQMVS
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationFormKbvDarreichungsform {
    system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_KBV_DARREICHUNGSFORM";
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MedicationFormKbvDarreichungsform: t.Type<MedicationFormKbvDarreichungsform> =
    t.recursion("MedicationFormKbvDarreichungsform", () =>
        t.intersection([
            t.type({
                system: Literal(
                    "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_KBV_DARREICHUNGSFORM"
                ),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
 */
export interface MedicationIngredientItemCodeableConcept {
    id?: string;
    coding?: (
        | MedicationIngredientItemCodeableConceptAskCode
        | MedicationIngredientItemCodeableConceptSnomedCode
    )[];
    text?: string;
}

export const MedicationIngredientItemCodeableConcept: t.Type<MedicationIngredientItemCodeableConcept> =
    t.recursion("MedicationIngredientItemCodeableConcept", () =>
        t.partial({
            id: SCALARString,
            coding: ReqArray<
                t.UnionC<
                    [
                        t.Type<MedicationIngredientItemCodeableConceptAskCode>,
                        t.Type<MedicationIngredientItemCodeableConceptSnomedCode>
                    ]
                >,
                t.Any
            >(
                t.union([
                    MedicationIngredientItemCodeableConceptAskCode,
                    MedicationIngredientItemCodeableConceptSnomedCode
                ]),
                [
                    {
                        codec: MedicationIngredientItemCodeableConceptAskCode,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            pattern: "$this",
                            value: { system: "http://fhir.de/CodeSystem/ask" }
                        }
                    },
                    {
                        codec: MedicationIngredientItemCodeableConceptSnomedCode,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            pattern: "$this",
                            value: { system: "http://snomed.info/sct" }
                        }
                    }
                ],
                ["0", "*"]
            ),
            text: SCALARString
        })
    );

/**
 * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
 */
export interface MedicationIngredientItemReference {
    reference: string;
    id?: string;
    type?: ResourcetypesVS;
    identifier?: Identifier;
    display?: string;
}

export const MedicationIngredientItemReference: t.Type<MedicationIngredientItemReference> =
    t.recursion("MedicationIngredientItemReference", () =>
        t.intersection([
            t.type({
                reference: CustomReference(SCALARString, [
                    "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Medication|1.2.1"
                ])
            }),
            t.partial({
                id: SCALARString,
                type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS),
                identifier: Identifier,
                display: SCALARString
            })
        ])
    );

/**
 * The value of the numerator.
 */
export interface MedicationIngredientStrengthNumerator {
    id?: string;
    value?: number;
    comparator?: QuantitycomparatorVS;
    unit?: string;
    system?: string;
    code?: string;
}

export const MedicationIngredientStrengthNumerator: t.Type<MedicationIngredientStrengthNumerator> =
    t.recursion("MedicationIngredientStrengthNumerator", () =>
        t.partial({
            id: SCALARString,
            value: SCALARDecimal,
            comparator: QuantitycomparatorVS,
            unit: SCALARString,
            system: SCALARUri,
            code: SCALARCode
        })
    );

/**
 * The value of the denominator.
 */
export interface MedicationIngredientStrengthDenominator {
    id?: string;
    value?: number;
    comparator?: QuantitycomparatorVS;
    unit?: string;
    system?: string;
    code?: string;
}

export const MedicationIngredientStrengthDenominator: t.Type<MedicationIngredientStrengthDenominator> =
    t.recursion("MedicationIngredientStrengthDenominator", () =>
        t.partial({
            id: SCALARString,
            value: SCALARDecimal,
            comparator: QuantitycomparatorVS,
            unit: SCALARString,
            system: SCALARUri,
            code: SCALARCode
        })
    );

/**
 * Optional Extension Element - found in all resources.
 */
export interface MedicationKategorie {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Medication_Type";
    valueCodeableConcept: MedicationKategorieValueCodeableConcept;
    id?: string;
}

export const MedicationKategorie: t.Type<MedicationKategorie> = t.recursion(
    "MedicationKategorie",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Medication_Type"
                ),
                valueCodeableConcept: MedicationKategorieValueCodeableConcept
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

/**
 * Hier kann angegeben werden, in welcher Menge der genannte Wirkstoff im Medikament vorhanden ist.
 */
export interface MedicationIngredientStrength {
    id?: string;
    numerator?: MedicationIngredientStrengthNumerator;
    denominator?: MedicationIngredientStrengthDenominator;
}

export const MedicationIngredientStrength: t.Type<MedicationIngredientStrength> =
    t.recursion("MedicationIngredientStrength", () =>
        t.partial({
            id: SCALARString,
            numerator: MedicationIngredientStrengthNumerator,
            denominator: MedicationIngredientStrengthDenominator
        })
    );

/**
 * Dieses Element beinhaltet die Bezeichnung des Arzneimittels oder der Rezeptur, entweder in einem geeigneten Codesystem kodiert oder als Freitext.
 */
export interface MedicationCode {
    id?: string;
    coding?: (MedicationCodePznCode | MedicationCodeSnomedCode | MedicationCodeAtcCode)[];
    text?: string;
}

export const MedicationCode: t.Type<MedicationCode> = t.recursion("MedicationCode", () =>
    t.partial({
        id: SCALARString,
        coding: ReqArray<
            t.UnionC<
                [
                    t.Type<MedicationCodePznCode>,
                    t.Type<MedicationCodeSnomedCode>,
                    t.Type<MedicationCodeAtcCode>
                ]
            >,
            t.Any
        >(
            t.union([
                MedicationCodePznCode,
                MedicationCodeSnomedCode,
                MedicationCodeAtcCode
            ]),
            [
                {
                    codec: MedicationCodePznCode,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        pattern: "$this",
                        value: { system: "http://fhir.de/CodeSystem/ifa/pzn" }
                    }
                },
                {
                    codec: MedicationCodeSnomedCode,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        pattern: "$this",
                        value: { system: "http://snomed.info/sct" }
                    }
                },
                {
                    codec: MedicationCodeAtcCode,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        pattern: "$this",
                        value: { system: "http://fhir.de/CodeSystem/dimdi/atc" }
                    }
                }
            ],
            ["0", "*"]
        ),
        text: SCALARString
    })
);

/**
 * Describes the form of the item.  Powder; tablets; capsule.
 */
export interface MedicationForm {
    id?: string;
    coding?: (
        | MedicationFormSnomedCode
        | MedicationFormEdqmCode
        | MedicationFormKbvDarreichungsform
    )[];
    text?: string;
}

export const MedicationForm: t.Type<MedicationForm> = t.recursion("MedicationForm", () =>
    t.partial({
        id: SCALARString,
        coding: ReqArray<
            t.UnionC<
                [
                    t.Type<MedicationFormSnomedCode>,
                    t.Type<MedicationFormEdqmCode>,
                    t.Type<MedicationFormKbvDarreichungsform>
                ]
            >,
            t.Any
        >(
            t.union([
                MedicationFormSnomedCode,
                MedicationFormEdqmCode,
                MedicationFormKbvDarreichungsform
            ]),
            [
                {
                    codec: MedicationFormSnomedCode,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        pattern: "$this",
                        value: { system: "http://snomed.info/sct" }
                    }
                },
                {
                    codec: MedicationFormEdqmCode,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        pattern: "$this",
                        value: { system: "http://standardterms.edqm.eu" }
                    }
                },
                {
                    codec: MedicationFormKbvDarreichungsform,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        pattern: "$this",
                        value: {
                            system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_KBV_DARREICHUNGSFORM"
                        }
                    }
                }
            ],
            ["0", "*"]
        ),
        text: SCALARString
    })
);

/**
 * Hier können Bestandteile, die Wirkstoffe oder keine Wirkstoffe sind, erfasst werden.
 */
export interface MedicationIngredient {
    id?: string;
    itemReference?: MedicationIngredientItemReference;
    itemCodeableConcept?: MedicationIngredientItemCodeableConcept;
    isActive?: boolean;
    strength?: MedicationIngredientStrength;
}

export const MedicationIngredient: t.Type<MedicationIngredient> = t.recursion(
    "MedicationIngredient",
    () =>
        t.partial({
            id: SCALARString,
            itemReference: MedicationIngredientItemReference,
            itemCodeableConcept: MedicationIngredientItemCodeableConcept,
            isActive: SCALARBoolean,
            strength: MedicationIngredientStrength
        })
);

/**
 * Information that only applies to packages (not products).
 */
export interface MedicationBatch {
    id?: string;
    lotNumber?: string;
    expirationDate?: string;
}

export const MedicationBatch: t.Type<MedicationBatch> = t.recursion(
    "MedicationBatch",
    () =>
        t.partial({
            id: SCALARString,
            lotNumber: SCALARString,
            expirationDate: SCALARDateTime
        })
);

interface Medication {
    extension: Array<Extension | MedicationKategorie>;
    code: MedicationCode;
    resourceType?: "Medication";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    status?: MedicationstatusVS;
    manufacturer?: Reference;
    form?: MedicationForm;
    amount?: Ratio;
    ingredient?: MedicationIngredient[];
    batch?: MedicationBatch;
}

const Medication: t.Type<Medication> = t.recursion("Medication", () =>
    t.intersection([
        t.type({
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<MedicationKategorie>]>,
                t.Any
            >(
                t.union([Extension, MedicationKategorie]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: MedicationKategorie,
                        occurrence: ["1", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Medication_Type"
                        }
                    }
                ],
                ["1", "*"]
            ),
            code: MedicationCode
        }),
        t.partial({
            resourceType: Literal("Medication"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            identifier: t.array(Identifier),
            status: MedicationstatusVS,
            manufacturer: Reference,
            form: MedicationForm,
            amount: Ratio,
            ingredient: t.array(MedicationIngredient),
            batch: MedicationBatch
        })
    ])
);

export default Medication;
