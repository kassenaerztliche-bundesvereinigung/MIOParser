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
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import KBVVSSFHIRICDSEITENLOKALISATIONVS from "../../../../../Definitions/ST/1.0.0/ValueSet/KBVVSSFHIRICDSEITENLOKALISATION";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Procedure"

/**
 * Content in other Language.
 */
export interface NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent: t.Type<NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent> =
    t.recursion("NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent", () =>
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
export interface NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent)[];
}

export const NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode: t.Type<NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode> =
    t.recursion("NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode", () =>
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
                                t.Type<NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDProcedureCodeSnomedCodeDisplayAnzeigenameCodeContent,
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
 * Content in other Language.
 */
export interface NFDProcedureStatusAnzeigenameStatusContent {
    url: "content";
    valueString: "Zustand nach";
    id?: string;
}

export const NFDProcedureStatusAnzeigenameStatusContent: t.Type<NFDProcedureStatusAnzeigenameStatusContent> =
    t.recursion("NFDProcedureStatusAnzeigenameStatusContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Zustand nach")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDProcedureCodeSnomedCodeDisplay {
    id?: string;
    extension?: (Extension | NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode)[];
    value?: string;
}

export const NFDProcedureCodeSnomedCodeDisplay: t.Type<NFDProcedureCodeSnomedCodeDisplay> =
    t.recursion("NFDProcedureCodeSnomedCodeDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDProcedureCodeSnomedCodeDisplayAnzeigenameCode,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDProcedureStatusAnzeigenameStatus {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDProcedureStatusAnzeigenameStatusContent)[];
}

export const NFDProcedureStatusAnzeigenameStatus: t.Type<NFDProcedureStatusAnzeigenameStatus> =
    t.recursion("NFDProcedureStatusAnzeigenameStatus", () =>
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
                                t.Type<NFDProcedureStatusAnzeigenameStatusContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, NFDProcedureStatusAnzeigenameStatusContent]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDProcedureStatusAnzeigenameStatusContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface NFDProcedureCodeSnomedCode {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    id?: string;
    _display?: NFDProcedureCodeSnomedCodeDisplay;
    display?: string;
}

export const NFDProcedureCodeSnomedCode: t.Type<NFDProcedureCodeSnomedCode> = t.recursion(
    "NFDProcedureCodeSnomedCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDProcedureCodeSnomedCodeDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDProcedureCodeOpsCode {
    system: "http://fhir.de/CodeSystem/dimdi/ops";
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDProcedureCodeOpsCode: t.Type<NFDProcedureCodeOpsCode> = t.recursion(
    "NFDProcedureCodeOpsCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/dimdi/ops"),
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
export interface NFDProcedureBodySiteCoding {
    system: string;
    version: string;
    code: KBVVSSFHIRICDSEITENLOKALISATIONVS;
    display: string;
    id?: string;
}

export const NFDProcedureBodySiteCoding: t.Type<NFDProcedureBodySiteCoding> = t.recursion(
    "NFDProcedureBodySiteCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: KBVVSSFHIRICDSEITENLOKALISATIONVS,
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
export interface NFDProcedureMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Procedure|1.0.0">;
    id?: string;
}

export const NFDProcedureMeta: t.Type<NFDProcedureMeta> = t.recursion(
    "NFDProcedureMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Procedure|1.0.0"
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
 * A code specifying the state of the procedure. Generally, this will be the in-progress or completed state.
 */
export interface NFDProcedureStatus {
    id?: string;
    extension?: NFDProcedureStatusAnzeigenameStatus[];
    value?: string;
}

export const NFDProcedureStatus: t.Type<NFDProcedureStatus> = t.recursion(
    "NFDProcedureStatus",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(NFDProcedureStatusAnzeigenameStatus),
                value: SCALARString
            })
        )
);

/**
 * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
 */
export interface NFDProcedureCode {
    text: string;
    id?: string;
    coding?: (NFDProcedureCodeSnomedCode | NFDProcedureCodeOpsCode)[];
}

export const NFDProcedureCode: t.Type<NFDProcedureCode> = t.recursion(
    "NFDProcedureCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<NFDProcedureCodeSnomedCode>,
                                t.Type<NFDProcedureCodeOpsCode>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([NFDProcedureCodeSnomedCode, NFDProcedureCodeOpsCode]),
                        [
                            {
                                codec: NFDProcedureCodeSnomedCode,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: NFDProcedureCodeOpsCode,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://fhir.de/CodeSystem/dimdi/ops"
                                }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * The person, animal or group on which the procedure was performed.
 */
export interface NFDProcedureSubjectReference {
    reference: string;
    id?: string;
}

export const NFDProcedureSubjectReference: t.Type<NFDProcedureSubjectReference> =
    t.recursion("NFDProcedureSubjectReference", () =>
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
 * Individual who is making the procedure statement.
 */
export interface NFDProcedureAsserterReference {
    reference: string;
    id?: string;
}

export const NFDProcedureAsserterReference: t.Type<NFDProcedureAsserterReference> =
    t.recursion("NFDProcedureAsserterReference", () =>
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
 * Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
 */
export interface NFDProcedureBodySite {
    coding: Array<NFDProcedureBodySiteCoding>;
    id?: string;
}

export const NFDProcedureBodySite: t.Type<NFDProcedureBodySite> = t.recursion(
    "NFDProcedureBodySite",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDProcedureBodySiteCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface NFDProcedure {
    resourceType: "Procedure";
    meta: NFDProcedureMeta;
    status: "completed";
    code: NFDProcedureCode;
    subject: NFDProcedureSubjectReference;
    id?: string;
    text?: Narrative;
    _status?: NFDProcedureStatus;
    performedString?: string;
    performedDateTime?: string;
    asserter?: NFDProcedureAsserterReference;
    bodySite?: Array<NFDProcedureBodySite>;
}

const NFDProcedure: t.Type<NFDProcedure> = t.recursion("NFDProcedure", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Procedure"),
                meta: NFDProcedureMeta,
                status: Literal("completed"),
                code: NFDProcedureCode,
                subject: NFDProcedureSubjectReference
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                _status: NFDProcedureStatus,
                performedString: SCALARString,
                performedDateTime: SCALARDateTime,
                asserter: NFDProcedureAsserterReference,
                bodySite: MaxArray(1, NFDProcedureBodySite)
            })
        ])
    )
);

export default NFDProcedure;
