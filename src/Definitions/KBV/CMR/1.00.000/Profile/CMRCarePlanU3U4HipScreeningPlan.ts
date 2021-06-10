/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
    CustomReference,
    ReqArray
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRHipProceedingVS from "../../../../../Definitions/KBV/CMR/1.00.000/ValueSet/CMRHipProceeding";
import CareplanactivitystatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Careplanactivitystatus";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan"

/**
 * Content in other Language.
 */
export interface CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent: t.Type<CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent",
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
export interface CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent
    )[];
}

export const CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed: t.Type<CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed",
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
                                t.Type<
                                    CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomedContent,
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
export interface CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed
    )[];
    value?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplay: t.Type<CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplay> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplayAnzeigenameActivitySnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCoding {
    system: string;
    version: string;
    code: CMRHipProceedingVS;
    id?: string;
    _display?: CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplay;
    display?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCoding: t.Type<CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCoding> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRHipProceedingVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
 */
export interface CMRCarePlanU3U4HipScreeningPlanActivityDetailCode {
    coding: Array<CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCoding>;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanActivityDetailCode: t.Type<CMRCarePlanU3U4HipScreeningPlanActivityDetailCode> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivityDetailCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRCarePlanU3U4HipScreeningPlanActivityDetailCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export interface CMRCarePlanU3U4HipScreeningPlanActivityDetail {
    code: CMRCarePlanU3U4HipScreeningPlanActivityDetailCode;
    status: CareplanactivitystatusVS;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanActivityDetail: t.Type<CMRCarePlanU3U4HipScreeningPlanActivityDetail> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivityDetail",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRCarePlanU3U4HipScreeningPlanActivityDetailCode,
                    status: CareplanactivitystatusVS
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
export interface CMRCarePlanU3U4HipScreeningPlanMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.0"
    >;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanMeta: t.Type<CMRCarePlanU3U4HipScreeningPlanMeta> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Care_Plan_U3_U4_Hip_Screening_Plan|1.0.0"
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
 * Identifies the patient or group whose intended care is described by the plan.
 */
export interface CMRCarePlanU3U4HipScreeningPlanSubject {
    reference: string;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanSubject: t.Type<CMRCarePlanU3U4HipScreeningPlanSubject> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated.
 */
export interface CMRCarePlanU3U4HipScreeningPlanEncounter {
    reference: string;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanEncounter: t.Type<CMRCarePlanU3U4HipScreeningPlanEncounter> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * When populated, the author is responsible for the care plan.  The care plan is attributed to the author.
 */
export interface CMRCarePlanU3U4HipScreeningPlanAuthor {
    reference: string;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanAuthor: t.Type<CMRCarePlanU3U4HipScreeningPlanAuthor> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanAuthor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export interface CMRCarePlanU3U4HipScreeningPlanActivity {
    detail: CMRCarePlanU3U4HipScreeningPlanActivityDetail;
    id?: string;
}

export const CMRCarePlanU3U4HipScreeningPlanActivity: t.Type<CMRCarePlanU3U4HipScreeningPlanActivity> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlanActivity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    detail: CMRCarePlanU3U4HipScreeningPlanActivityDetail
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRCarePlanU3U4HipScreeningPlan {
    resourceType: "CarePlan";
    meta: CMRCarePlanU3U4HipScreeningPlanMeta;
    status: "unknown";
    intent: "plan";
    title: "Weiteres Vorgehen:";
    subject: CMRCarePlanU3U4HipScreeningPlanSubject;
    encounter: CMRCarePlanU3U4HipScreeningPlanEncounter;
    created: string;
    activity: Array<CMRCarePlanU3U4HipScreeningPlanActivity>;
    id?: string;
    text?: Narrative;
    basedOn?: Reference[];
    author?: CMRCarePlanU3U4HipScreeningPlanAuthor;
}

const CMRCarePlanU3U4HipScreeningPlan: t.Type<CMRCarePlanU3U4HipScreeningPlan> = t.recursion(
    "CMRCarePlanU3U4HipScreeningPlan",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("CarePlan"),
                    meta: CMRCarePlanU3U4HipScreeningPlanMeta,
                    status: Literal("unknown"),
                    intent: Literal("plan"),
                    title: Literal("Weiteres Vorgehen:"),
                    subject: CMRCarePlanU3U4HipScreeningPlanSubject,
                    encounter: CMRCarePlanU3U4HipScreeningPlanEncounter,
                    created: SCALARDateTime,
                    activity: MinMaxArray(1, 3, CMRCarePlanU3U4HipScreeningPlanActivity)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    basedOn: t.array(Reference),
                    author: CMRCarePlanU3U4HipScreeningPlanAuthor
                })
            ])
        )
);

export default CMRCarePlanU3U4HipScreeningPlan;
