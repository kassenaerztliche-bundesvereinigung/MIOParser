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
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDxDPEConsentDescriptionFileLocation from "../../../../../Definitions/KBV/PKA/1.0.0/Extension/NFDxDPEConsentDescriptionFileLocation";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Consent_Active_Advance_Directive"

/**
 * Content in other Language.
 */
export interface NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent {
    url: "content";
    valueString: "Einwilligung";
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent: t.Type<NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent> =
    t.recursion(
        "NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Einwilligung")
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
export interface NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent[];
}

export const NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule: t.Type<NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule> =
    t.recursion(
        "NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule",
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
                            NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRuleContent
                        )
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRoleCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass";
    version: "2018-08-12";
    code: "AGNT";
    display: "agent";
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRoleCoding: t.Type<NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRoleCoding> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRoleCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-RoleClass"),
                    version: Literal("2018-08-12"),
                    code: Literal("AGNT"),
                    display: Literal("agent")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Plain text narrative that identifies the resource in addition to the resource reference.
 */
export interface NFDxDPEConsentActiveAdvanceDirectiveSourceReferenceDisplay {
    id?: string;
    extension?: (Extension | NFDxDPEConsentDescriptionFileLocation)[];
    value?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveSourceReferenceDisplay: t.Type<NFDxDPEConsentActiveAdvanceDirectiveSourceReferenceDisplay> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveSourceReferenceDisplay", () =>
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
export interface NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule
    )[];
    value?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplay: t.Type<NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplay> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplayAnzeigeNamePolicyRule,
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
export interface NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRole {
    coding: Array<NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRoleCoding>;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRole: t.Type<NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRole> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRole", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRoleCoding
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
export interface NFDxDPEConsentActiveAdvanceDirectiveProvisionActorReferenceReference {
    display: string;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveProvisionActorReferenceReference: t.Type<NFDxDPEConsentActiveAdvanceDirectiveProvisionActorReferenceReference> =
    t.recursion(
        "NFDxDPEConsentActiveAdvanceDirectiveProvisionActorReferenceReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
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
export interface NFDxDPEConsentActiveAdvanceDirectiveScopeCoding {
    system: "http://terminology.hl7.org/CodeSystem/consentscope";
    version: "4.0.1";
    code: "patient-privacy";
    display: "Privacy Consent";
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveScopeCoding: t.Type<NFDxDPEConsentActiveAdvanceDirectiveScopeCoding> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveScopeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/consentscope"),
                    version: Literal("4.0.1"),
                    code: Literal("patient-privacy"),
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
export interface NFDxDPEConsentActiveAdvanceDirectiveCategoryCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "59284-0";
    display: "Consent Document";
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveCategoryCoding: t.Type<NFDxDPEConsentActiveAdvanceDirectiveCategoryCoding> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveCategoryCoding", () =>
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
export interface NFDxDPEConsentActiveAdvanceDirectiveSourceReference {
    id?: string;
    _display?: NFDxDPEConsentActiveAdvanceDirectiveSourceReferenceDisplay;
    display?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveSourceReference: t.Type<NFDxDPEConsentActiveAdvanceDirectiveSourceReference> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveSourceReference", () =>
        Excess(
            t.partial({
                id: SCALARString,
                _display: NFDxDPEConsentActiveAdvanceDirectiveSourceReferenceDisplay,
                display: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "57016-8";
    display: "Patient Consent";
    id?: string;
    _display?: NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplay;
}

export const NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCoding: t.Type<NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCoding> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("57016-8"),
                    display: Literal("Patient Consent")
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCodingDisplay
                })
            ])
        )
    );

/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export interface NFDxDPEConsentActiveAdvanceDirectiveProvisionActor {
    role: NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRole;
    reference: NFDxDPEConsentActiveAdvanceDirectiveProvisionActorReferenceReference;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveProvisionActor: t.Type<NFDxDPEConsentActiveAdvanceDirectiveProvisionActor> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveProvisionActor", () =>
        Excess(
            t.intersection([
                t.type({
                    role: NFDxDPEConsentActiveAdvanceDirectiveProvisionActorRole,
                    reference:
                        NFDxDPEConsentActiveAdvanceDirectiveProvisionActorReferenceReference
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
export interface NFDxDPEConsentActiveAdvanceDirectiveMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Consent_Active_Advance_Directive|1.0.0">;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveMeta: t.Type<NFDxDPEConsentActiveAdvanceDirectiveMeta> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Consent_Active_Advance_Directive|1.0.0"
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
export interface NFDxDPEConsentActiveAdvanceDirectiveScope {
    coding: Array<NFDxDPEConsentActiveAdvanceDirectiveScopeCoding>;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveScope: t.Type<NFDxDPEConsentActiveAdvanceDirectiveScope> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveScope", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDxDPEConsentActiveAdvanceDirectiveScopeCoding
                    )
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
export interface NFDxDPEConsentActiveAdvanceDirectiveCategory {
    coding: Array<NFDxDPEConsentActiveAdvanceDirectiveCategoryCoding>;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveCategory: t.Type<NFDxDPEConsentActiveAdvanceDirectiveCategory> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveCategory", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDxDPEConsentActiveAdvanceDirectiveCategoryCoding
                    )
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
export interface NFDxDPEConsentActiveAdvanceDirectivePatientReference {
    reference: string;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectivePatientReference: t.Type<NFDxDPEConsentActiveAdvanceDirectivePatientReference> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectivePatientReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DPE_Patient_DPE|1.0.0",
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
 * A reference to the specific base computable regulation or policy.
 */
export interface NFDxDPEConsentActiveAdvanceDirectivePolicyRule {
    coding: Array<NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCoding>;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectivePolicyRule: t.Type<NFDxDPEConsentActiveAdvanceDirectivePolicyRule> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectivePolicyRule", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDxDPEConsentActiveAdvanceDirectivePolicyRuleCoding
                    )
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
export interface NFDxDPEConsentActiveAdvanceDirectiveProvision {
    actor: Array<NFDxDPEConsentActiveAdvanceDirectiveProvisionActor>;
    id?: string;
}

export const NFDxDPEConsentActiveAdvanceDirectiveProvision: t.Type<NFDxDPEConsentActiveAdvanceDirectiveProvision> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirectiveProvision", () =>
        Excess(
            t.intersection([
                t.type({
                    actor: MinMaxArray(
                        1,
                        1,
                        NFDxDPEConsentActiveAdvanceDirectiveProvisionActor
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDxDPEConsentActiveAdvanceDirective {
    resourceType: "Consent";
    meta: NFDxDPEConsentActiveAdvanceDirectiveMeta;
    status: "active";
    scope: NFDxDPEConsentActiveAdvanceDirectiveScope;
    category: Array<NFDxDPEConsentActiveAdvanceDirectiveCategory>;
    patient: NFDxDPEConsentActiveAdvanceDirectivePatientReference;
    dateTime: string;
    sourceReference: NFDxDPEConsentActiveAdvanceDirectiveSourceReference;
    policyRule: NFDxDPEConsentActiveAdvanceDirectivePolicyRule;
    provision: NFDxDPEConsentActiveAdvanceDirectiveProvision;
    id?: string;
}

const NFDxDPEConsentActiveAdvanceDirective: t.Type<NFDxDPEConsentActiveAdvanceDirective> =
    t.recursion("NFDxDPEConsentActiveAdvanceDirective", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Consent"),
                    meta: NFDxDPEConsentActiveAdvanceDirectiveMeta,
                    status: Literal("active"),
                    scope: NFDxDPEConsentActiveAdvanceDirectiveScope,
                    category: MinArray(1, NFDxDPEConsentActiveAdvanceDirectiveCategory),
                    patient: NFDxDPEConsentActiveAdvanceDirectivePatientReference,
                    dateTime: SCALARDateTime,
                    sourceReference: NFDxDPEConsentActiveAdvanceDirectiveSourceReference,
                    policyRule: NFDxDPEConsentActiveAdvanceDirectivePolicyRule,
                    provision: NFDxDPEConsentActiveAdvanceDirectiveProvision
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

export default NFDxDPEConsentActiveAdvanceDirective;
