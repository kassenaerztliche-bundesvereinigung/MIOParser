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

import CMRServiceRequestStatusVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRServiceRequestStatus";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service"

/**
 * Content in other Language.
 */
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Pädaudiologische Diagnostik bei auffälliger Kontroll-AABR veranlasst am:";
    id?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Pädaudiologische Diagnostik bei auffälliger Kontroll-AABR veranlasst am:"
                        )
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplay: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplay> =
    t.recursion(
        "CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "306210008";
    id?: string;
    _display?: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplay;
    display?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCoding: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCoding> =
    t.recursion("CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("306210008")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.1">;
    id?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceMeta: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceMeta> =
    t.recursion("CMRServiceRequestU1U5ReferralPediatricAudiologyServiceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U5_Referral_Pediatric_Audiology_Service|1.0.1"
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCode {
    coding: Array<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCoding>;
    id?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCode: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCode> =
    t.recursion("CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCodeCoding
                    )
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceSubjectReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceSubjectReference: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceSubjectReference> =
    t.recursion(
        "CMRServiceRequestU1U5ReferralPediatricAudiologyServiceSubjectReference",
        () =>
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceEncounterReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceEncounterReference: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceEncounterReference> =
    t.recursion(
        "CMRServiceRequestU1U5ReferralPediatricAudiologyServiceEncounterReference",
        () =>
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
export interface CMRServiceRequestU1U5ReferralPediatricAudiologyServiceRequesterReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U5ReferralPediatricAudiologyServiceRequesterReference: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyServiceRequesterReference> =
    t.recursion(
        "CMRServiceRequestU1U5ReferralPediatricAudiologyServiceRequesterReference",
        () =>
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

interface CMRServiceRequestU1U5ReferralPediatricAudiologyService {
    resourceType: "ServiceRequest";
    meta: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceMeta;
    status: CMRServiceRequestStatusVS;
    intent: "order";
    code: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCode;
    subject: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceSubjectReference;
    encounter: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceEncounterReference;
    authoredOn: string;
    id?: string;
    text?: Narrative;
    requester?: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceRequesterReference;
}

const CMRServiceRequestU1U5ReferralPediatricAudiologyService: t.Type<CMRServiceRequestU1U5ReferralPediatricAudiologyService> =
    t.recursion("CMRServiceRequestU1U5ReferralPediatricAudiologyService", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ServiceRequest"),
                    meta: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceMeta,
                    status: CMRServiceRequestStatusVS,
                    intent: Literal("order"),
                    code: CMRServiceRequestU1U5ReferralPediatricAudiologyServiceCode,
                    subject:
                        CMRServiceRequestU1U5ReferralPediatricAudiologyServiceSubjectReference,
                    encounter:
                        CMRServiceRequestU1U5ReferralPediatricAudiologyServiceEncounterReference,
                    authoredOn: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    requester:
                        CMRServiceRequestU1U5ReferralPediatricAudiologyServiceRequesterReference
                })
            ])
        )
    );

export default CMRServiceRequestU1U5ReferralPediatricAudiologyService;
