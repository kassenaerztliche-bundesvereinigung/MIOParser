/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import {
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    Req,
    ReqArray,
    ExtensibleCheck
} from "../../../../util";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCanonical from "../../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARMarkdown from "../../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";
import PerformerfunctionVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Performerfunction";
import VaccinationLabImmuneReactionTestPresenceSnomedVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationLabImmuneReactionTestPresenceSnomed";
import VaccinationLabImmuneReactionTestPresenceVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationLabImmuneReactionTestPresence";
import VaccinationLabTiterImmunityVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationLabTiterImmunity";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConceptCoding {
    system: string;
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConceptCoding: t.Type<VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConceptCoding> = t.recursion(
    "VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConcept {
    coding: Array<
        VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConceptCoding
    >;
    id?: string;
}

export const VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConcept: t.Type<VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConcept> = t.recursion(
    "VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConceptCoding
                    )
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
export interface VaccinationObservationImmunizationStatusCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: VaccinationLabImmuneReactionTestPresenceSnomedVS;
    display: string;
    id?: string;
    userSelected?: boolean;
}

export const VaccinationObservationImmunizationStatusCodeSnomedCT: t.Type<VaccinationObservationImmunizationStatusCodeSnomedCT> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: VaccinationLabImmuneReactionTestPresenceSnomedVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationObservationImmunizationStatusCodeLoinc {
    system: "http://loinc.org";
    version: string;
    code: VaccinationLabImmuneReactionTestPresenceVS;
    display: string;
    id?: string;
    userSelected?: boolean;
}

export const VaccinationObservationImmunizationStatusCodeLoinc: t.Type<VaccinationObservationImmunizationStatusCodeLoinc> = t.recursion(
    "VaccinationObservationImmunizationStatusCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: SCALARString,
                    code: VaccinationLabImmuneReactionTestPresenceVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * Distinguishes the type of involvement of the performer in the event. For example, 'author',  'verifier' or 'responsible party'.
 */
export interface VaccinationObservationImmunizationStatusPerformerFunction {
    url: "http://hl7.org/fhir/StructureDefinition/event-performerFunction";
    valueCodeableConcept: VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConcept;
    id?: string;
}

export const VaccinationObservationImmunizationStatusPerformerFunction: t.Type<VaccinationObservationImmunizationStatusPerformerFunction> = t.recursion(
    "VaccinationObservationImmunizationStatusPerformerFunction",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/event-performerFunction"
                    ),
                    valueCodeableConcept: VaccinationObservationImmunizationStatusPerformerFunctionValueValueCodeableConcept
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
export interface VaccinationObservationImmunizationStatusInterpretationCoding {
    system: string;
    version: string;
    code: VaccinationLabTiterImmunityVS;
    display: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusInterpretationCoding: t.Type<VaccinationObservationImmunizationStatusInterpretationCoding> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretationCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: VaccinationLabTiterImmunityVS,
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
export interface VaccinationObservationImmunizationStatusMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status|1.00.000"
    >;
    id?: string;
}

export const VaccinationObservationImmunizationStatusMeta: t.Type<VaccinationObservationImmunizationStatusMeta> = t.recursion(
    "VaccinationObservationImmunizationStatusMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status|1.00.000"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface VaccinationObservationImmunizationStatusCode {
    coding: Array<
        | VaccinationObservationImmunizationStatusCodeSnomedCT
        | VaccinationObservationImmunizationStatusCodeLoinc
    >;
    text: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusCode: t.Type<VaccinationObservationImmunizationStatusCode> = t.recursion(
    "VaccinationObservationImmunizationStatusCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<
                                    VaccinationObservationImmunizationStatusCodeSnomedCT
                                >,
                                t.Type<VaccinationObservationImmunizationStatusCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationObservationImmunizationStatusCodeSnomedCT,
                            VaccinationObservationImmunizationStatusCodeLoinc
                        ]),
                        [
                            {
                                codec: VaccinationObservationImmunizationStatusCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: VaccinationObservationImmunizationStatusCodeLoinc,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["1", "2"]
                    ),
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface VaccinationObservationImmunizationStatusSubject {
    reference: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusSubject: t.Type<VaccinationObservationImmunizationStatusSubject> = t.recursion(
    "VaccinationObservationImmunizationStatusSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface VaccinationObservationImmunizationStatusPerformer {
    reference: string;
    id?: string;
    extension?: (Extension | VaccinationObservationImmunizationStatusPerformerFunction)[];
}

export const VaccinationObservationImmunizationStatusPerformer: t.Type<VaccinationObservationImmunizationStatusPerformer> = t.recursion(
    "VaccinationObservationImmunizationStatusPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    VaccinationObservationImmunizationStatusPerformerFunction
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationObservationImmunizationStatusPerformerFunction
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationObservationImmunizationStatusPerformerFunction,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "http://hl7.org/fhir/StructureDefinition/event-performerFunction"
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
 * Die Nachweisbarkeit beschreibt das Erreichen der Nachweisgrenze und damit das Ergebnis des Tests. Das Ergebnis ist im Sinne von Positiv/Negativ anzugeben, dazu ist ein Code der LOINC Answer-List zu verwenden. Das Ergebnis erlaubt noch keine Aussage über die Immunität.
 */
export interface VaccinationObservationImmunizationStatusInterpretation {
    coding: Array<VaccinationObservationImmunizationStatusInterpretationCoding>;
    text: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusInterpretation: t.Type<VaccinationObservationImmunizationStatusInterpretation> = t.recursion(
    "VaccinationObservationImmunizationStatusInterpretation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationObservationImmunizationStatusInterpretationCoding
                    ),
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Ergänzende Angaben zur Titerbestimmung
 */
export interface VaccinationObservationImmunizationStatusNote {
    text: string;
    id?: string;
}

export const VaccinationObservationImmunizationStatusNote: t.Type<VaccinationObservationImmunizationStatusNote> = t.recursion(
    "VaccinationObservationImmunizationStatusNote",
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

interface VaccinationObservationImmunizationStatus {
    id: string;
    meta: VaccinationObservationImmunizationStatusMeta;
    text: Narrative;
    status: "final";
    code: VaccinationObservationImmunizationStatusCode;
    subject: VaccinationObservationImmunizationStatusSubject;
    issued: string;
    interpretation: Array<VaccinationObservationImmunizationStatusInterpretation>;
    resourceType?: string;
    performer?: Array<VaccinationObservationImmunizationStatusPerformer>;
    note?: Array<VaccinationObservationImmunizationStatusNote>;
}

const VaccinationObservationImmunizationStatus: t.Type<VaccinationObservationImmunizationStatus> = t.recursion(
    "VaccinationObservationImmunizationStatus",
    () =>
        Excess(
            t.intersection([
                t.type({
                    id: SCALARString,
                    meta: VaccinationObservationImmunizationStatusMeta,
                    text: Narrative,
                    status: Literal("final"),
                    code: VaccinationObservationImmunizationStatusCode,
                    subject: VaccinationObservationImmunizationStatusSubject,
                    issued: SCALARInstant,
                    interpretation: MinMaxArray(
                        1,
                        1,
                        VaccinationObservationImmunizationStatusInterpretation
                    )
                }),
                t.partial({
                    resourceType: t.string,
                    performer: MaxArray(
                        1,
                        VaccinationObservationImmunizationStatusPerformer
                    ),
                    note: MaxArray(1, VaccinationObservationImmunizationStatusNote)
                })
            ])
        )
);

export default VaccinationObservationImmunizationStatus;
