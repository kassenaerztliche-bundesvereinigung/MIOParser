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
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation"

/**
 * Content in other Language.
 */
export interface CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bemerkung";
    id?: string;
}

export const CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Bemerkung")
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
export interface CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRProcedureConsultationAnnotationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRProcedureConsultationAnnotationCodeCodingDisplay: t.Type<CMRProcedureConsultationAnnotationCodeCodingDisplay> = t.recursion(
    "CMRProcedureConsultationAnnotationCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRProcedureConsultationAnnotationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRProcedureConsultationAnnotationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "408991007";
    id?: string;
    _display?: CMRProcedureConsultationAnnotationCodeCodingDisplay;
    display?: string;
}

export const CMRProcedureConsultationAnnotationCodeCoding: t.Type<CMRProcedureConsultationAnnotationCodeCoding> = t.recursion(
    "CMRProcedureConsultationAnnotationCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("408991007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRProcedureConsultationAnnotationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRProcedureConsultationAnnotationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
    >;
    id?: string;
}

export const CMRProcedureConsultationAnnotationMeta: t.Type<CMRProcedureConsultationAnnotationMeta> = t.recursion(
    "CMRProcedureConsultationAnnotationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Procedure_Consultation_Annotation|1.0.0"
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
 * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
 */
export interface CMRProcedureConsultationAnnotationCode {
    coding: Array<CMRProcedureConsultationAnnotationCodeCoding>;
    id?: string;
}

export const CMRProcedureConsultationAnnotationCode: t.Type<CMRProcedureConsultationAnnotationCode> = t.recursion(
    "CMRProcedureConsultationAnnotationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRProcedureConsultationAnnotationCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The person, animal or group on which the procedure was performed.
 */
export interface CMRProcedureConsultationAnnotationSubject {
    reference: string;
    id?: string;
}

export const CMRProcedureConsultationAnnotationSubject: t.Type<CMRProcedureConsultationAnnotationSubject> = t.recursion(
    "CMRProcedureConsultationAnnotationSubject",
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
 * The Encounter during which this Procedure was created or performed or to which the creation of this record is tightly associated.
 */
export interface CMRProcedureConsultationAnnotationEncounter {
    reference: string;
    id?: string;
}

export const CMRProcedureConsultationAnnotationEncounter: t.Type<CMRProcedureConsultationAnnotationEncounter> = t.recursion(
    "CMRProcedureConsultationAnnotationEncounter",
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
 * Individual who is making the procedure statement.
 */
export interface CMRProcedureConsultationAnnotationAsserter {
    reference: string;
    id?: string;
}

export const CMRProcedureConsultationAnnotationAsserter: t.Type<CMRProcedureConsultationAnnotationAsserter> = t.recursion(
    "CMRProcedureConsultationAnnotationAsserter",
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
 * Any other notes and comments about the procedure.
 */
export interface CMRProcedureConsultationAnnotationNote {
    text: string;
    id?: string;
}

export const CMRProcedureConsultationAnnotationNote: t.Type<CMRProcedureConsultationAnnotationNote> = t.recursion(
    "CMRProcedureConsultationAnnotationNote",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: SCALARMarkdown
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRProcedureConsultationAnnotation {
    resourceType: "Procedure";
    meta: CMRProcedureConsultationAnnotationMeta;
    status: "completed";
    code: CMRProcedureConsultationAnnotationCode;
    subject: CMRProcedureConsultationAnnotationSubject;
    encounter: CMRProcedureConsultationAnnotationEncounter;
    performedDateTime: string;
    note: Array<CMRProcedureConsultationAnnotationNote>;
    id?: string;
    text?: Narrative;
    asserter?: CMRProcedureConsultationAnnotationAsserter;
}

const CMRProcedureConsultationAnnotation: t.Type<CMRProcedureConsultationAnnotation> = t.recursion(
    "CMRProcedureConsultationAnnotation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Procedure"),
                    meta: CMRProcedureConsultationAnnotationMeta,
                    status: Literal("completed"),
                    code: CMRProcedureConsultationAnnotationCode,
                    subject: CMRProcedureConsultationAnnotationSubject,
                    encounter: CMRProcedureConsultationAnnotationEncounter,
                    performedDateTime: SCALARDateTime,
                    note: MinMaxArray(1, 1, CMRProcedureConsultationAnnotationNote)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    asserter: CMRProcedureConsultationAnnotationAsserter
                })
            ])
        )
);

export default CMRProcedureConsultationAnnotation;
