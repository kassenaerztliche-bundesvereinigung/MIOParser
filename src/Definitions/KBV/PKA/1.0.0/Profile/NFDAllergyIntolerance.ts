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
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDAllergySubstanceVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDAllergySubstance";
import NFDReactionAllergyVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDReactionAllergy";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Allergy_Intolerance"

/**
 * Content in other Language.
 */
export interface NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstanceContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstanceContent: t.Type<NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstanceContent> =
    t.recursion(
        "NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstanceContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Content in other Language.
 */
export interface NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent: t.Type<NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent> =
    t.recursion(
        "NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstanceContent[];
}

export const NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance: t.Type<NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance> =
    t.recursion(
        "NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: t.array(
                            NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstanceContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent
    )[];
}

export const NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation: t.Type<NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation> =
    t.recursion(
        "NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestationContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance
    )[];
    value?: string;
}

export const NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplay: t.Type<NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplay> =
    t.recursion("NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplayAnzeigenameSubstance,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation
    )[];
    value?: string;
}

export const NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplay: t.Type<NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplay> =
    t.recursion("NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplayAnzeigenameManifestation,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDAllergyIntoleranceReactionSubstanceSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: NFDAllergySubstanceVS;
    id?: string;
    _display?: NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplay;
    display?: string;
}

export const NFDAllergyIntoleranceReactionSubstanceSnomedCode: t.Type<NFDAllergyIntoleranceReactionSubstanceSnomedCode> =
    t.recursion("NFDAllergyIntoleranceReactionSubstanceSnomedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: NFDAllergySubstanceVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDAllergyIntoleranceReactionSubstanceSnomedCodeDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDAllergyIntoleranceReactionSubstanceAtcCode {
    system: "http://www.whocc.no/atc";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDAllergyIntoleranceReactionSubstanceAtcCode: t.Type<NFDAllergyIntoleranceReactionSubstanceAtcCode> =
    t.recursion("NFDAllergyIntoleranceReactionSubstanceAtcCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://www.whocc.no/atc"),
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
export interface NFDAllergyIntoleranceReactionSubstanceAskCode {
    system: "http://fhir.de/CodeSystem/ask";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDAllergyIntoleranceReactionSubstanceAskCode: t.Type<NFDAllergyIntoleranceReactionSubstanceAskCode> =
    t.recursion("NFDAllergyIntoleranceReactionSubstanceAskCode", () =>
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface NFDAllergyIntoleranceReactionManifestationDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const NFDAllergyIntoleranceReactionManifestationDataabsentreason: t.Type<NFDAllergyIntoleranceReactionManifestationDataabsentreason> =
    t.recursion("NFDAllergyIntoleranceReactionManifestationDataabsentreason", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                    ),
                    valueCode: Literal("unknown")
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
export interface NFDAllergyIntoleranceReactionManifestationSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: NFDReactionAllergyVS;
    id?: string;
    _display?: NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplay;
    display?: string;
}

export const NFDAllergyIntoleranceReactionManifestationSnomedCode: t.Type<NFDAllergyIntoleranceReactionManifestationSnomedCode> =
    t.recursion("NFDAllergyIntoleranceReactionManifestationSnomedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: NFDReactionAllergyVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDAllergyIntoleranceReactionManifestationSnomedCodeDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDAllergyIntoleranceClinicalStatusCoding {
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical";
    version: "4.0.1";
    code: "active";
    display: "Active";
    id?: string;
}

export const NFDAllergyIntoleranceClinicalStatusCoding: t.Type<NFDAllergyIntoleranceClinicalStatusCoding> =
    t.recursion("NFDAllergyIntoleranceClinicalStatusCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
                    ),
                    version: Literal("4.0.1"),
                    code: Literal("active"),
                    display: Literal("Active")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
 */
export interface NFDAllergyIntoleranceReactionSubstance {
    id?: string;
    coding?: (
        | NFDAllergyIntoleranceReactionSubstanceSnomedCode
        | NFDAllergyIntoleranceReactionSubstanceAtcCode
        | NFDAllergyIntoleranceReactionSubstanceAskCode
    )[];
    text?: string;
}

export const NFDAllergyIntoleranceReactionSubstance: t.Type<NFDAllergyIntoleranceReactionSubstance> =
    t.recursion("NFDAllergyIntoleranceReactionSubstance", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDAllergyIntoleranceReactionSubstanceSnomedCode>,
                            t.Type<NFDAllergyIntoleranceReactionSubstanceAtcCode>,
                            t.Type<NFDAllergyIntoleranceReactionSubstanceAskCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDAllergyIntoleranceReactionSubstanceSnomedCode,
                        NFDAllergyIntoleranceReactionSubstanceAtcCode,
                        NFDAllergyIntoleranceReactionSubstanceAskCode
                    ]),
                    [
                        {
                            codec: NFDAllergyIntoleranceReactionSubstanceSnomedCode,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "system", value: "http://snomed.info/sct" }
                        },
                        {
                            codec: NFDAllergyIntoleranceReactionSubstanceAtcCode,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "system", value: "http://www.whocc.no/atc" }
                        },
                        {
                            codec: NFDAllergyIntoleranceReactionSubstanceAskCode,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "system",
                                value: "http://fhir.de/CodeSystem/ask"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                text: SCALARString
            })
        )
    );

/**
 * Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
 */
export interface NFDAllergyIntoleranceReactionManifestation {
    id?: string;
    extension?: NFDAllergyIntoleranceReactionManifestationDataabsentreason[];
    coding?: Array<NFDAllergyIntoleranceReactionManifestationSnomedCode>;
    text?: string;
}

export const NFDAllergyIntoleranceReactionManifestation: t.Type<NFDAllergyIntoleranceReactionManifestation> =
    t.recursion("NFDAllergyIntoleranceReactionManifestation", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    NFDAllergyIntoleranceReactionManifestationDataabsentreason
                ),
                coding: MaxArray(2, NFDAllergyIntoleranceReactionManifestationSnomedCode),
                text: SCALARString
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDAllergyIntoleranceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Allergy_Intolerance|1.0.0">;
    id?: string;
}

export const NFDAllergyIntoleranceMeta: t.Type<NFDAllergyIntoleranceMeta> = t.recursion(
    "NFDAllergyIntoleranceMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Allergy_Intolerance|1.0.0"
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
 * The clinical status of the allergy or intolerance.
 */
export interface NFDAllergyIntoleranceClinicalStatus {
    coding: Array<NFDAllergyIntoleranceClinicalStatusCoding>;
    id?: string;
}

export const NFDAllergyIntoleranceClinicalStatus: t.Type<NFDAllergyIntoleranceClinicalStatus> =
    t.recursion("NFDAllergyIntoleranceClinicalStatus", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDAllergyIntoleranceClinicalStatusCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient who has the allergy or intolerance.
 */
export interface NFDAllergyIntolerancePatientReference {
    reference: string;
    id?: string;
}

export const NFDAllergyIntolerancePatientReference: t.Type<NFDAllergyIntolerancePatientReference> =
    t.recursion("NFDAllergyIntolerancePatientReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Individual who recorded the record and takes responsibility for its content.
 */
export interface NFDAllergyIntoleranceRecorderReference {
    reference: string;
    id?: string;
}

export const NFDAllergyIntoleranceRecorderReference: t.Type<NFDAllergyIntoleranceRecorderReference> =
    t.recursion("NFDAllergyIntoleranceRecorderReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export interface NFDAllergyIntoleranceReaction {
    manifestation: Array<NFDAllergyIntoleranceReactionManifestation>;
    id?: string;
    substance?: NFDAllergyIntoleranceReactionSubstance;
}

export const NFDAllergyIntoleranceReaction: t.Type<NFDAllergyIntoleranceReaction> =
    t.recursion("NFDAllergyIntoleranceReaction", () =>
        Excess(
            t.intersection([
                t.type({
                    manifestation: MinMaxArray(
                        1,
                        1,
                        NFDAllergyIntoleranceReactionManifestation
                    )
                }),
                t.partial({
                    id: SCALARString,
                    substance: NFDAllergyIntoleranceReactionSubstance
                })
            ])
        )
    );

interface NFDAllergyIntolerance {
    resourceType: "AllergyIntolerance";
    meta: NFDAllergyIntoleranceMeta;
    clinicalStatus: NFDAllergyIntoleranceClinicalStatus;
    patient: NFDAllergyIntolerancePatientReference;
    id?: string;
    text?: Narrative;
    recorder?: NFDAllergyIntoleranceRecorderReference;
    reaction?: NFDAllergyIntoleranceReaction[];
}

const NFDAllergyIntolerance: t.Type<NFDAllergyIntolerance> = t.recursion(
    "NFDAllergyIntolerance",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("AllergyIntolerance"),
                    meta: NFDAllergyIntoleranceMeta,
                    clinicalStatus: NFDAllergyIntoleranceClinicalStatus,
                    patient: NFDAllergyIntolerancePatientReference
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    recorder: NFDAllergyIntoleranceRecorderReference,
                    reaction: t.array(NFDAllergyIntoleranceReaction)
                })
            ])
        )
);

export default NFDAllergyIntolerance;
