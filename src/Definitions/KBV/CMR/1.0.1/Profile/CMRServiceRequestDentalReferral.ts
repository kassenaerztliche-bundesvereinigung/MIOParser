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
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral"

/**
 * Content in other Language.
 */
export interface CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Verweis zur Zahnärztin oder zum Zahnarzt";
    id?: string;
}

export const CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Verweis zur Zahnärztin oder zum Zahnarzt")
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
export interface CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRServiceRequestDentalReferralCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRServiceRequestDentalReferralCodeCodingDisplay: t.Type<CMRServiceRequestDentalReferralCodeCodingDisplay> =
    t.recursion("CMRServiceRequestDentalReferralCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRServiceRequestDentalReferralCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRServiceRequestDentalReferralCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "274410002";
    id?: string;
    _display?: CMRServiceRequestDentalReferralCodeCodingDisplay;
    display?: string;
}

export const CMRServiceRequestDentalReferralCodeCoding: t.Type<CMRServiceRequestDentalReferralCodeCoding> =
    t.recursion("CMRServiceRequestDentalReferralCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("274410002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRServiceRequestDentalReferralCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRServiceRequestDentalReferralMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.1">;
    id?: string;
}

export const CMRServiceRequestDentalReferralMeta: t.Type<CMRServiceRequestDentalReferralMeta> =
    t.recursion("CMRServiceRequestDentalReferralMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_Dental_Referral|1.0.1"
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
 * A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested.
 */
export interface CMRServiceRequestDentalReferralCode {
    coding: Array<CMRServiceRequestDentalReferralCodeCoding>;
    id?: string;
}

export const CMRServiceRequestDentalReferralCode: t.Type<CMRServiceRequestDentalReferralCode> =
    t.recursion("CMRServiceRequestDentalReferralCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRServiceRequestDentalReferralCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
 */
export interface CMRServiceRequestDentalReferralSubjectReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestDentalReferralSubjectReference: t.Type<CMRServiceRequestDentalReferralSubjectReference> =
    t.recursion("CMRServiceRequestDentalReferralSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * An encounter that provides additional information about the healthcare context in which this request is made.
 */
export interface CMRServiceRequestDentalReferralEncounterReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestDentalReferralEncounterReference: t.Type<CMRServiceRequestDentalReferralEncounterReference> =
    t.recursion("CMRServiceRequestDentalReferralEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export interface CMRServiceRequestDentalReferralRequesterReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestDentalReferralRequesterReference: t.Type<CMRServiceRequestDentalReferralRequesterReference> =
    t.recursion("CMRServiceRequestDentalReferralRequesterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRServiceRequestDentalReferral {
    resourceType: "ServiceRequest";
    meta: CMRServiceRequestDentalReferralMeta;
    status: "active";
    intent: "order";
    code: CMRServiceRequestDentalReferralCode;
    subject: CMRServiceRequestDentalReferralSubjectReference;
    encounter: CMRServiceRequestDentalReferralEncounterReference;
    authoredOn: string;
    id?: string;
    requester?: CMRServiceRequestDentalReferralRequesterReference;
}

const CMRServiceRequestDentalReferral: t.Type<CMRServiceRequestDentalReferral> =
    t.recursion("CMRServiceRequestDentalReferral", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ServiceRequest"),
                    meta: CMRServiceRequestDentalReferralMeta,
                    status: Literal("active"),
                    intent: Literal("order"),
                    code: CMRServiceRequestDentalReferralCode,
                    subject: CMRServiceRequestDentalReferralSubjectReference,
                    encounter: CMRServiceRequestDentalReferralEncounterReference,
                    authoredOn: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    requester: CMRServiceRequestDentalReferralRequesterReference
                })
            ])
        )
    );

export default CMRServiceRequestDentalReferral;
