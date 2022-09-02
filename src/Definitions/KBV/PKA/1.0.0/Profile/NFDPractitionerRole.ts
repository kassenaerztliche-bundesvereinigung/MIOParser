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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role"

/**
 * Content in other Language.
 */
export interface NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent: t.Type<NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent> =
    t.recursion("NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent", () =>
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
export interface NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent
    )[];
}

export const NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode: t.Type<NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode> =
    t.recursion("NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode", () =>
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
                                t.Type<NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDPractitionerRoleCodeCodingDisplayAnzeigenameCodeContent,
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
export interface NFDPractitionerRoleCodeCodingDisplay {
    id?: string;
    extension?: (Extension | NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode)[];
    value?: string;
}

export const NFDPractitionerRoleCodeCodingDisplay: t.Type<NFDPractitionerRoleCodeCodingDisplay> =
    t.recursion("NFDPractitionerRoleCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerRoleCodeCodingDisplayAnzeigenameCode,
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
export interface NFDPractitionerRoleCodeCoding {
    system: string;
    version: string;
    code: NFDPersonInstitutionVS;
    id?: string;
    _display?: NFDPractitionerRoleCodeCodingDisplay;
    display?: string;
}

export const NFDPractitionerRoleCodeCoding: t.Type<NFDPractitionerRoleCodeCoding> =
    t.recursion("NFDPractitionerRoleCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: NFDPersonInstitutionVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDPractitionerRoleCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDPractitionerRoleSpecialtyCoding {
    system: string;
    version: string;
    code: KBVVSSFHIRBAR2ARZTNRFACHGRUPPEVS;
    display: string;
    id?: string;
}

export const NFDPractitionerRoleSpecialtyCoding: t.Type<NFDPractitionerRoleSpecialtyCoding> =
    t.recursion("NFDPractitionerRoleSpecialtyCoding", () =>
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
export interface NFDPractitionerRoleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role|1.0.0">;
    id?: string;
}

export const NFDPractitionerRoleMeta: t.Type<NFDPractitionerRoleMeta> = t.recursion(
    "NFDPractitionerRoleMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role|1.0.0"
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
export interface NFDPractitionerRolePractitionerReference {
    reference: string;
    id?: string;
}

export const NFDPractitionerRolePractitionerReference: t.Type<NFDPractitionerRolePractitionerReference> =
    t.recursion("NFDPractitionerRolePractitionerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner|1.0.0"
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
export interface NFDPractitionerRoleOrganizationReference {
    display: string;
    id?: string;
}

export const NFDPractitionerRoleOrganizationReference: t.Type<NFDPractitionerRoleOrganizationReference> =
    t.recursion("NFDPractitionerRoleOrganizationReference", () =>
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
 * Roles which this practitioner is authorized to perform for the organization.
 */
export interface NFDPractitionerRoleCode {
    coding: Array<NFDPractitionerRoleCodeCoding>;
    id?: string;
}

export const NFDPractitionerRoleCode: t.Type<NFDPractitionerRoleCode> = t.recursion(
    "NFDPractitionerRoleCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDPractitionerRoleCodeCoding)
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
export interface NFDPractitionerRoleSpecialty {
    id?: string;
    coding?: Array<NFDPractitionerRoleSpecialtyCoding>;
    text?: string;
}

export const NFDPractitionerRoleSpecialty: t.Type<NFDPractitionerRoleSpecialty> =
    t.recursion("NFDPractitionerRoleSpecialty", () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: MaxArray(1, NFDPractitionerRoleSpecialtyCoding),
                text: SCALARString
            })
        )
    );

interface NFDPractitionerRole {
    resourceType: "PractitionerRole";
    meta: NFDPractitionerRoleMeta;
    practitioner: NFDPractitionerRolePractitionerReference;
    code: Array<NFDPractitionerRoleCode>;
    id?: string;
    organization?: NFDPractitionerRoleOrganizationReference;
    specialty?: Array<NFDPractitionerRoleSpecialty>;
}

const NFDPractitionerRole: t.Type<NFDPractitionerRole> = t.recursion(
    "NFDPractitionerRole",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("PractitionerRole"),
                    meta: NFDPractitionerRoleMeta,
                    practitioner: NFDPractitionerRolePractitionerReference,
                    code: MinMaxArray(1, 1, NFDPractitionerRoleCode)
                }),
                t.partial({
                    id: SCALARString,
                    organization: NFDPractitionerRoleOrganizationReference,
                    specialty: MaxArray(1, NFDPractitionerRoleSpecialty)
                })
            ])
        )
);

export default NFDPractitionerRole;
