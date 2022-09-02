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
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification"

/**
 * Content in other Language.
 */
export interface CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Abklärung veranlasst";
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Abklärung veranlasst")
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplay: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplay> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "417311009";
    id?: string;
    _display?: CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplay;
    display?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationCodeCoding: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCoding> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("417311009")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRServiceRequestU1U3PulseOxymetryClarificationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRServiceRequestU1U3PulseOxymetryClarificationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.1">;
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationMeta: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationMeta> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Service_Request_U1_U3_Pulse_Oxymetry_Clarification|1.0.1"
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationCode {
    coding: Array<CMRServiceRequestU1U3PulseOxymetryClarificationCodeCoding>;
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationCode: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationCode> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRServiceRequestU1U3PulseOxymetryClarificationCodeCoding
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationSubjectReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationSubjectReference: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationSubjectReference> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationSubjectReference", () =>
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationEncounterReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationEncounterReference: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationEncounterReference> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationEncounterReference", () =>
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
export interface CMRServiceRequestU1U3PulseOxymetryClarificationRequesterReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationRequesterReference: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationRequesterReference> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarificationRequesterReference", () =>
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

/**
 * Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`.
 */
export interface CMRServiceRequestU1U3PulseOxymetryClarificationReasonReferenceReference {
    reference: string;
    id?: string;
}

export const CMRServiceRequestU1U3PulseOxymetryClarificationReasonReferenceReference: t.Type<CMRServiceRequestU1U3PulseOxymetryClarificationReasonReferenceReference> =
    t.recursion(
        "CMRServiceRequestU1U3PulseOxymetryClarificationReasonReferenceReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pulse_Oxymetry_Measurement|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRServiceRequestU1U3PulseOxymetryClarification {
    resourceType: "ServiceRequest";
    meta: CMRServiceRequestU1U3PulseOxymetryClarificationMeta;
    status: "active";
    intent: "order";
    code: CMRServiceRequestU1U3PulseOxymetryClarificationCode;
    subject: CMRServiceRequestU1U3PulseOxymetryClarificationSubjectReference;
    encounter: CMRServiceRequestU1U3PulseOxymetryClarificationEncounterReference;
    authoredOn: string;
    reasonReference: Array<CMRServiceRequestU1U3PulseOxymetryClarificationReasonReferenceReference>;
    id?: string;
    text?: Narrative;
    requester?: CMRServiceRequestU1U3PulseOxymetryClarificationRequesterReference;
}

const CMRServiceRequestU1U3PulseOxymetryClarification: t.Type<CMRServiceRequestU1U3PulseOxymetryClarification> =
    t.recursion("CMRServiceRequestU1U3PulseOxymetryClarification", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ServiceRequest"),
                    meta: CMRServiceRequestU1U3PulseOxymetryClarificationMeta,
                    status: Literal("active"),
                    intent: Literal("order"),
                    code: CMRServiceRequestU1U3PulseOxymetryClarificationCode,
                    subject:
                        CMRServiceRequestU1U3PulseOxymetryClarificationSubjectReference,
                    encounter:
                        CMRServiceRequestU1U3PulseOxymetryClarificationEncounterReference,
                    authoredOn: SCALARDateTime,
                    reasonReference: MinMaxArray(
                        1,
                        1,
                        CMRServiceRequestU1U3PulseOxymetryClarificationReasonReferenceReference
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    requester:
                        CMRServiceRequestU1U3PulseOxymetryClarificationRequesterReference
                })
            ])
        )
    );

export default CMRServiceRequestU1U3PulseOxymetryClarification;
