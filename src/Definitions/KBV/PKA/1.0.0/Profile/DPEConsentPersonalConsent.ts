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
    MinArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import DPEConsentDescription from "../../../../../Definitions/KBV/PKA/1.0.0/Extension/DPEConsentDescription";
import DPEDeclarationTypeVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/DPEDeclarationType";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDxDPEConsentDescriptionFileLocation from "../../../../../Definitions/KBV/PKA/1.0.0/Extension/NFDxDPEConsentDescriptionFileLocation";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Consent_Personal_Consent"

/**
 * Content in other Language.
 */
export interface DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: "Bevollmächtigte Person";
    id?: string;
}

export const DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent: t.Type<DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent> =
    t.recursion(
        "DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Bevollmächtigte Person")
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
export interface DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent: t.Type<DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent> =
    t.recursion(
        "DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent",
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
export interface DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent
    )[];
}

export const DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode: t.Type<DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode> =
    t.recursion(
        "DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode",
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
                                    t.Type<DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCodeContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent
    )[];
}

export const DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule: t.Type<DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule> =
    t.recursion(
        "DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule",
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
                                    t.Type<DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent,
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
export interface DPEConsentPersonalConsentProvisionActorRoleCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode
    )[];
    value?: string;
}

export const DPEConsentPersonalConsentProvisionActorRoleCodingDisplay: t.Type<DPEConsentPersonalConsentProvisionActorRoleCodingDisplay> =
    t.recursion("DPEConsentPersonalConsentProvisionActorRoleCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPEConsentPersonalConsentProvisionActorRoleCodingDisplayAnzeigenameCode,
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
export interface DPEConsentPersonalConsentProvisionActorRoleCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "54056000";
    display: "Trustee (person)";
    id?: string;
    _display?: DPEConsentPersonalConsentProvisionActorRoleCodingDisplay;
}

export const DPEConsentPersonalConsentProvisionActorRoleCoding: t.Type<DPEConsentPersonalConsentProvisionActorRoleCoding> =
    t.recursion("DPEConsentPersonalConsentProvisionActorRoleCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("54056000"),
                    display: Literal("Trustee (person)")
                }),
                t.partial({
                    id: SCALARString,
                    _display: DPEConsentPersonalConsentProvisionActorRoleCodingDisplay
                })
            ])
        )
    );

/**
 * Plain text narrative that identifies the resource in addition to the resource reference.
 */
export interface DPEConsentPersonalConsentSourceReferenceDisplay {
    id?: string;
    extension?: (Extension | NFDxDPEConsentDescriptionFileLocation)[];
    value?: string;
}

export const DPEConsentPersonalConsentSourceReferenceDisplay: t.Type<DPEConsentPersonalConsentSourceReferenceDisplay> =
    t.recursion("DPEConsentPersonalConsentSourceReferenceDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<NFDxDPEConsentDescriptionFileLocation>]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDxDPEConsentDescriptionFileLocation]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDxDPEConsentDescriptionFileLocation,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_NFDxDPE_Consent_Description_File_Location"
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
export interface DPEConsentPersonalConsentPolicyRuleCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule
    )[];
    value?: string;
}

export const DPEConsentPersonalConsentPolicyRuleCodingDisplay: t.Type<DPEConsentPersonalConsentPolicyRuleCodingDisplay> =
    t.recursion("DPEConsentPersonalConsentPolicyRuleCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DPEConsentPersonalConsentPolicyRuleCodingDisplayAnzeigeNamePolicyRule,
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
 * How the individual is involved in the resources content that is described in the exception.
 */
export interface DPEConsentPersonalConsentProvisionActorRole {
    coding: Array<DPEConsentPersonalConsentProvisionActorRoleCoding>;
    id?: string;
}

export const DPEConsentPersonalConsentProvisionActorRole: t.Type<DPEConsentPersonalConsentProvisionActorRole> =
    t.recursion("DPEConsentPersonalConsentProvisionActorRole", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        DPEConsentPersonalConsentProvisionActorRoleCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface DPEConsentPersonalConsentProvisionActorReferenceReference {
    reference: string;
    id?: string;
}

export const DPEConsentPersonalConsentProvisionActorReferenceReference: t.Type<DPEConsentPersonalConsentProvisionActorReferenceReference> =
    t.recursion("DPEConsentPersonalConsentProvisionActorReferenceReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Related_Person_Contact_Person|1.0.0"
                    ])
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
export interface DPEConsentPersonalConsentScopeCoding {
    system: "http://terminology.hl7.org/CodeSystem/consentscope";
    version: "4.0.1";
    code: "adr";
    display: "Privacy Consent";
    id?: string;
}

export const DPEConsentPersonalConsentScopeCoding: t.Type<DPEConsentPersonalConsentScopeCoding> =
    t.recursion("DPEConsentPersonalConsentScopeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/consentscope"),
                    version: Literal("4.0.1"),
                    code: Literal("adr"),
                    display: Literal("Privacy Consent")
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
export interface DPEConsentPersonalConsentCategoryCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "59284-0";
    display: "Consent Document";
    id?: string;
}

export const DPEConsentPersonalConsentCategoryCoding: t.Type<DPEConsentPersonalConsentCategoryCoding> =
    t.recursion("DPEConsentPersonalConsentCategoryCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("59284-0"),
                    display: Literal("Consent Document")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
 */
export interface DPEConsentPersonalConsentSourceReference {
    id?: string;
    _display?: DPEConsentPersonalConsentSourceReferenceDisplay;
    display?: string;
}

export const DPEConsentPersonalConsentSourceReference: t.Type<DPEConsentPersonalConsentSourceReference> =
    t.recursion("DPEConsentPersonalConsentSourceReference", () =>
        Excess(
            t.partial({
                id: SCALARString,
                _display: DPEConsentPersonalConsentSourceReferenceDisplay,
                display: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DPEConsentPersonalConsentPolicyRuleCoding {
    system: string;
    version: string;
    code: DPEDeclarationTypeVS;
    id?: string;
    _display?: DPEConsentPersonalConsentPolicyRuleCodingDisplay;
    display?: string;
}

export const DPEConsentPersonalConsentPolicyRuleCoding: t.Type<DPEConsentPersonalConsentPolicyRuleCoding> =
    t.recursion("DPEConsentPersonalConsentPolicyRuleCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: DPEDeclarationTypeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: DPEConsentPersonalConsentPolicyRuleCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface DPEConsentPersonalConsentProvisionActor {
    role: DPEConsentPersonalConsentProvisionActorRole;
    reference: DPEConsentPersonalConsentProvisionActorReferenceReference;
    id?: string;
}

export const DPEConsentPersonalConsentProvisionActor: t.Type<DPEConsentPersonalConsentProvisionActor> =
    t.recursion("DPEConsentPersonalConsentProvisionActor", () =>
        Excess(
            t.intersection([
                t.type({
                    role: DPEConsentPersonalConsentProvisionActorRole,
                    reference: DPEConsentPersonalConsentProvisionActorReferenceReference
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
export interface DPEConsentPersonalConsentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Consent_Personal_Consent|1.0.0">;
    id?: string;
}

export const DPEConsentPersonalConsentMeta: t.Type<DPEConsentPersonalConsentMeta> =
    t.recursion("DPEConsentPersonalConsentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Consent_Personal_Consent|1.0.0"
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
 * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
 */
export interface DPEConsentPersonalConsentScope {
    coding: Array<DPEConsentPersonalConsentScopeCoding>;
    id?: string;
}

export const DPEConsentPersonalConsentScope: t.Type<DPEConsentPersonalConsentScope> =
    t.recursion("DPEConsentPersonalConsentScope", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, DPEConsentPersonalConsentScopeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Verfügungskategorie
 */
export interface DPEConsentPersonalConsentCategory {
    coding: Array<DPEConsentPersonalConsentCategoryCoding>;
    id?: string;
}

export const DPEConsentPersonalConsentCategory: t.Type<DPEConsentPersonalConsentCategory> =
    t.recursion("DPEConsentPersonalConsentCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, DPEConsentPersonalConsentCategoryCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient/healthcare consumer to whom this consent applies.
 */
export interface DPEConsentPersonalConsentPatientReference {
    reference: string;
    id?: string;
}

export const DPEConsentPersonalConsentPatientReference: t.Type<DPEConsentPersonalConsentPatientReference> =
    t.recursion("DPEConsentPersonalConsentPatientReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A reference to the specific base computable regulation or policy.
 */
export interface DPEConsentPersonalConsentPolicyRule {
    coding: Array<DPEConsentPersonalConsentPolicyRuleCoding>;
    id?: string;
}

export const DPEConsentPersonalConsentPolicyRule: t.Type<DPEConsentPersonalConsentPolicyRule> =
    t.recursion("DPEConsentPersonalConsentPolicyRule", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, DPEConsentPersonalConsentPolicyRuleCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export interface DPEConsentPersonalConsentProvision {
    actor: Array<DPEConsentPersonalConsentProvisionActor>;
    id?: string;
}

export const DPEConsentPersonalConsentProvision: t.Type<DPEConsentPersonalConsentProvision> =
    t.recursion("DPEConsentPersonalConsentProvision", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: MinArray(1, DPEConsentPersonalConsentProvisionActor)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface DPEConsentPersonalConsent {
    resourceType: "Consent";
    meta: DPEConsentPersonalConsentMeta;
    status: "active";
    scope: DPEConsentPersonalConsentScope;
    category: Array<DPEConsentPersonalConsentCategory>;
    patient: DPEConsentPersonalConsentPatientReference;
    dateTime: string;
    policyRule: DPEConsentPersonalConsentPolicyRule;
    id?: string;
    extension?: DPEConsentDescription[];
    sourceReference?: DPEConsentPersonalConsentSourceReference;
    provision?: DPEConsentPersonalConsentProvision;
}

const DPEConsentPersonalConsent: t.Type<DPEConsentPersonalConsent> = t.recursion(
    "DPEConsentPersonalConsent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Consent"),
                    meta: DPEConsentPersonalConsentMeta,
                    status: Literal("active"),
                    scope: DPEConsentPersonalConsentScope,
                    category: MinMaxArray(1, 1, DPEConsentPersonalConsentCategory),
                    patient: DPEConsentPersonalConsentPatientReference,
                    dateTime: SCALARDateTime,
                    policyRule: DPEConsentPersonalConsentPolicyRule
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(DPEConsentDescription),
                    sourceReference: DPEConsentPersonalConsentSourceReference,
                    provision: DPEConsentPersonalConsentProvision
                })
            ])
        )
);

export default DPEConsentPersonalConsent;
