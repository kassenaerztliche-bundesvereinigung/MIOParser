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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities"

/**
 * Content in other Language.
 */
export interface MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplay: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "129125009:408730004=410525008";
    id?: string;
    _display?: MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCoding: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCoding> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("129125009:408730004=410525008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Content in other Language.
 */
export interface MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Auffälligkeiten vorhanden";
    id?: string;
}

export const MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Auffälligkeiten vorhanden")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConcept {
    coding: Array<
        MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConcept: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConcept> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConceptCoding
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
export interface MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRObservationAbnormalitiesKontrollbeduerftigKode {
    url: "kode";
    valueCodeableConcept: MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConcept;
    id?: string;
}

export const MRObservationAbnormalitiesKontrollbeduerftigKode: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKode> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRObservationAbnormalitiesKontrollbeduerftigKodeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig {
    url: "kontrollbeduerftig";
    valueBoolean: true;
    id?: string;
}

export const MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig: t.Type<MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kontrollbeduerftig"),
                    valueBoolean: Literal(true)
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
export interface MRObservationAbnormalitiesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationAbnormalitiesCodeCodingDisplay: t.Type<MRObservationAbnormalitiesCodeCodingDisplay> = t.recursion(
    "MRObservationAbnormalitiesCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationAbnormalitiesCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * In dieser Extension kann dokumentiert werden, ob eine Untersuchung kontrollbedürftig ist.
 */
export interface MRObservationAbnormalitiesKontrollbeduerftig {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed";
    id?: string;
    extension?: (
        | Extension
        | MRObservationAbnormalitiesKontrollbeduerftigKode
        | MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig
    )[];
}

export const MRObservationAbnormalitiesKontrollbeduerftig: t.Type<MRObservationAbnormalitiesKontrollbeduerftig> = t.recursion(
    "MRObservationAbnormalitiesKontrollbeduerftig",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationAbnormalitiesKontrollbeduerftigKode>,
                                t.Type<
                                    MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationAbnormalitiesKontrollbeduerftigKode,
                            MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationAbnormalitiesKontrollbeduerftigKode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kode" }
                            },
                            {
                                codec: MRObservationAbnormalitiesKontrollbeduerftigKontrollbeduerftig,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kontrollbeduerftig" }
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
export interface MRObservationAbnormalitiesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "169222003:363714003=446522006";
    id?: string;
    _display?: MRObservationAbnormalitiesCodeCodingDisplay;
    display?: string;
}

export const MRObservationAbnormalitiesCodeCoding: t.Type<MRObservationAbnormalitiesCodeCoding> = t.recursion(
    "MRObservationAbnormalitiesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("169222003:363714003=446522006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationAbnormalitiesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationAbnormalitiesMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities|1.0.0"
    >;
    id?: string;
}

export const MRObservationAbnormalitiesMeta: t.Type<MRObservationAbnormalitiesMeta> = t.recursion(
    "MRObservationAbnormalitiesMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities|1.0.0"
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
export interface MRObservationAbnormalitiesCode {
    coding: Array<MRObservationAbnormalitiesCodeCoding>;
    id?: string;
}

export const MRObservationAbnormalitiesCode: t.Type<MRObservationAbnormalitiesCode> = t.recursion(
    "MRObservationAbnormalitiesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationAbnormalitiesCodeCoding)
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
export interface MRObservationAbnormalitiesSubject {
    reference: string;
    id?: string;
}

export const MRObservationAbnormalitiesSubject: t.Type<MRObservationAbnormalitiesSubject> = t.recursion(
    "MRObservationAbnormalitiesSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface MRObservationAbnormalitiesEncounter {
    reference: string;
    id?: string;
}

export const MRObservationAbnormalitiesEncounter: t.Type<MRObservationAbnormalitiesEncounter> = t.recursion(
    "MRObservationAbnormalitiesEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
                    ])
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
export interface MRObservationAbnormalitiesPerformer {
    reference: string;
    id?: string;
}

export const MRObservationAbnormalitiesPerformer: t.Type<MRObservationAbnormalitiesPerformer> = t.recursion(
    "MRObservationAbnormalitiesPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRObservationAbnormalities {
    resourceType: "Observation";
    meta: MRObservationAbnormalitiesMeta;
    status: "final";
    code: MRObservationAbnormalitiesCode;
    subject: MRObservationAbnormalitiesSubject;
    encounter: MRObservationAbnormalitiesEncounter;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRObservationAbnormalitiesKontrollbeduerftig)[];
    performer?: Array<MRObservationAbnormalitiesPerformer>;
}

const MRObservationAbnormalities: t.Type<MRObservationAbnormalities> = t.recursion(
    "MRObservationAbnormalities",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationAbnormalitiesMeta,
                    status: Literal("final"),
                    code: MRObservationAbnormalitiesCode,
                    subject: MRObservationAbnormalitiesSubject,
                    encounter: MRObservationAbnormalitiesEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRObservationAbnormalitiesKontrollbeduerftig>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationAbnormalitiesKontrollbeduerftig
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationAbnormalitiesKontrollbeduerftig,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    performer: MaxArray(1, MRObservationAbnormalitiesPerformer)
                })
            ])
        )
);

export default MRObservationAbnormalities;
