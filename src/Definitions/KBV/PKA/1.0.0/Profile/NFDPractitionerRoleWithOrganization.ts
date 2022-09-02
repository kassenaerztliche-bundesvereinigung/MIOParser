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

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import KBVVSSFHIRBAR2ARZTNRFACHGRUPPEVS from "../../../../../Definitions/ST/1.0.1/ValueSet/KBVVSSFHIRBAR2ARZTNRFACHGRUPPE";
import NFDPersonInstitutionVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDPersonInstitution";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization"

/**
 * Content in other Language.
 */
export interface NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent: t.Type<NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent> =
    t.recursion(
        "NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent",
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
export interface NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent
    )[];
}

export const NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode: t.Type<NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode> =
    t.recursion(
        "NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode",
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
                                    t.Type<NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCodeContent,
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
export interface NFDPractitionerRoleWithOrganizationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode
    )[];
    value?: string;
}

export const NFDPractitionerRoleWithOrganizationCodeCodingDisplay: t.Type<NFDPractitionerRoleWithOrganizationCodeCodingDisplay> =
    t.recursion("NFDPractitionerRoleWithOrganizationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerRoleWithOrganizationCodeCodingDisplayAnzeigenameCode,
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
export interface NFDPractitionerRoleWithOrganizationCodeCoding {
    system: string;
    version: string;
    code: NFDPersonInstitutionVS;
    id?: string;
    _display?: NFDPractitionerRoleWithOrganizationCodeCodingDisplay;
    display?: string;
}

export const NFDPractitionerRoleWithOrganizationCodeCoding: t.Type<NFDPractitionerRoleWithOrganizationCodeCoding> =
    t.recursion("NFDPractitionerRoleWithOrganizationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: NFDPersonInstitutionVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDPractitionerRoleWithOrganizationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDPractitionerRoleWithOrganizationSpecialtyCoding {
    system: string;
    version: string;
    code: KBVVSSFHIRBAR2ARZTNRFACHGRUPPEVS;
    display: string;
    id?: string;
}

export const NFDPractitionerRoleWithOrganizationSpecialtyCoding: t.Type<NFDPractitionerRoleWithOrganizationSpecialtyCoding> =
    t.recursion("NFDPractitionerRoleWithOrganizationSpecialtyCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: KBVVSSFHIRBAR2ARZTNRFACHGRUPPEVS,
                    display: SCALARString
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
export interface NFDPractitionerRoleWithOrganizationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0">;
    id?: string;
}

export const NFDPractitionerRoleWithOrganizationMeta: t.Type<NFDPractitionerRoleWithOrganizationMeta> =
    t.recursion("NFDPractitionerRoleWithOrganizationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
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
 * Practitioner that is able to provide the defined services for the organization.
 */
export interface NFDPractitionerRoleWithOrganizationPractitionerReference {
    reference: string;
    id?: string;
}

export const NFDPractitionerRoleWithOrganizationPractitionerReference: t.Type<NFDPractitionerRoleWithOrganizationPractitionerReference> =
    t.recursion("NFDPractitionerRoleWithOrganizationPractitionerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Physician|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The organization where the Practitioner performs the roles associated.
 */
export interface NFDPractitionerRoleWithOrganizationOrganizationReference {
    reference: string;
    id?: string;
}

export const NFDPractitionerRoleWithOrganizationOrganizationReference: t.Type<NFDPractitionerRoleWithOrganizationOrganizationReference> =
    t.recursion("NFDPractitionerRoleWithOrganizationOrganizationReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Roles which this practitioner is authorized to perform for the organization.
 */
export interface NFDPractitionerRoleWithOrganizationCode {
    coding: Array<NFDPractitionerRoleWithOrganizationCodeCoding>;
    id?: string;
}

export const NFDPractitionerRoleWithOrganizationCode: t.Type<NFDPractitionerRoleWithOrganizationCode> =
    t.recursion("NFDPractitionerRoleWithOrganizationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDPractitionerRoleWithOrganizationCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Specific specialty of the practitioner.
 */
export interface NFDPractitionerRoleWithOrganizationSpecialty {
    id?: string;
    coding?: Array<NFDPractitionerRoleWithOrganizationSpecialtyCoding>;
    text?: string;
}

export const NFDPractitionerRoleWithOrganizationSpecialty: t.Type<NFDPractitionerRoleWithOrganizationSpecialty> =
    t.recursion("NFDPractitionerRoleWithOrganizationSpecialty", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: MaxArray(1, NFDPractitionerRoleWithOrganizationSpecialtyCoding),
                text: SCALARString
            })
        )
    );

interface NFDPractitionerRoleWithOrganization {
    resourceType: "PractitionerRole";
    meta: NFDPractitionerRoleWithOrganizationMeta;
    code: Array<NFDPractitionerRoleWithOrganizationCode>;
    id?: string;
    practitioner?: NFDPractitionerRoleWithOrganizationPractitionerReference;
    organization?: NFDPractitionerRoleWithOrganizationOrganizationReference;
    specialty?: Array<NFDPractitionerRoleWithOrganizationSpecialty>;
}

const NFDPractitionerRoleWithOrganization: t.Type<NFDPractitionerRoleWithOrganization> =
    t.recursion("NFDPractitionerRoleWithOrganization", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("PractitionerRole"),
                    meta: NFDPractitionerRoleWithOrganizationMeta,
                    code: MinMaxArray(1, 1, NFDPractitionerRoleWithOrganizationCode)
                }),
                t.partial({
                    id: SCALARString,
                    practitioner:
                        NFDPractitionerRoleWithOrganizationPractitionerReference,
                    organization:
                        NFDPractitionerRoleWithOrganizationOrganizationReference,
                    specialty: MaxArray(1, NFDPractitionerRoleWithOrganizationSpecialty)
                })
            ])
        )
    );

export default NFDPractitionerRoleWithOrganization;
