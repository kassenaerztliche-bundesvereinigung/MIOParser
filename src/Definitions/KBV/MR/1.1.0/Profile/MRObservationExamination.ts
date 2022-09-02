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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import MRExaminationInterpretationVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRExaminationInterpretation";
import MRExaminationLoincVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRExaminationLoinc";
import MRExaminationResultQualitativeVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRExaminationResultQualitative";
import MRExaminationSnomedVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRExaminationSnomed";
import MRExaminationUnitVS from "../../../../../Definitions/KBV/MR/1.1.0/ValueSet/MRExaminationUnit";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination"

/**
 * Content in other Language.
 */
export interface MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
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
 * Content in other Language.
 */
export interface MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent",
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
 * Content in other Language.
 */
export interface MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
 * Content in other Language.
 */
export interface MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent: t.Type<MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent> =
    t.recursion(
        "MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent",
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
export interface MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent[];
}

export const MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion("MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent[];
}

export const MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoincContent
                    )
                })
            ])
        )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent[];
}

export const MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                        extension: t.array(
                            MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent[];
}

export const MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed: t.Type<MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed> =
    t.recursion(
        "MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed",
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
                        extension: t.array(
                            MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationCodeSnomedCTDisplay {
    id?: string;
    extension?: MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRObservationExaminationCodeSnomedCTDisplay: t.Type<MRObservationExaminationCodeSnomedCTDisplay> =
    t.recursion("MRObservationExaminationCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExaminationCodeSnomedCTDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationCodeLoincDisplay {
    id?: string;
    extension?: MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc[];
    value?: string;
}

export const MRObservationExaminationCodeLoincDisplay: t.Type<MRObservationExaminationCodeLoincDisplay> =
    t.recursion("MRObservationExaminationCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExaminationCodeLoincDisplayAnzeigenameCodeLoinc
                ),
                value: SCALARString
            })
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed[];
    value?: string;
}

export const MRObservationExaminationValueCodeableConceptCodingDisplay: t.Type<MRObservationExaminationValueCodeableConceptCodingDisplay> =
    t.recursion("MRObservationExaminationValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExaminationValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: string;
    code: MRExaminationSnomedVS;
    id?: string;
    _display?: MRObservationExaminationCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationExaminationCodeSnomedCT: t.Type<MRObservationExaminationCodeSnomedCT> =
    t.recursion("MRObservationExaminationCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRExaminationSnomedVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: MRExaminationLoincVS;
    id?: string;
    _display?: MRObservationExaminationCodeLoincDisplay;
    display?: string;
}

export const MRObservationExaminationCodeLoinc: t.Type<MRObservationExaminationCodeLoinc> =
    t.recursion("MRObservationExaminationCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: MRExaminationLoincVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationExaminationValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRExaminationResultQualitativeVS;
    id?: string;
    _display?: MRObservationExaminationValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationExaminationValueCodeableConceptCoding: t.Type<MRObservationExaminationValueCodeableConceptCoding> =
    t.recursion("MRObservationExaminationValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRExaminationResultQualitativeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationExaminationInterpretationCodingDisplay {
    id?: string;
    extension?: MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed[];
    value?: string;
}

export const MRObservationExaminationInterpretationCodingDisplay: t.Type<MRObservationExaminationInterpretationCodingDisplay> =
    t.recursion("MRObservationExaminationInterpretationCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRObservationExaminationInterpretationCodingDisplayAnzeigenameInterpretationSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationExaminationValueQuantity {
    value: number;
    unit: MRExaminationUnitVS;
    system: "http://unitsofmeasure.org";
    code: MRExaminationUnitVS;
    id?: string;
}

export const MRObservationExaminationValueQuantity: t.Type<MRObservationExaminationValueQuantity> =
    t.recursion("MRObservationExaminationValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: MRExaminationUnitVS,
                    system: Literal("http://unitsofmeasure.org"),
                    code: MRExaminationUnitVS
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationExaminationValueCodeableConcept {
    coding: Array<MRObservationExaminationValueCodeableConceptCoding>;
    id?: string;
}

export const MRObservationExaminationValueCodeableConcept: t.Type<MRObservationExaminationValueCodeableConcept> =
    t.recursion("MRObservationExaminationValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationExaminationValueCodeableConceptCoding
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
export interface MRObservationExaminationInterpretationCoding {
    system: string;
    version: string;
    code: MRExaminationInterpretationVS;
    id?: string;
    _display?: MRObservationExaminationInterpretationCodingDisplay;
    display?: string;
}

export const MRObservationExaminationInterpretationCoding: t.Type<MRObservationExaminationInterpretationCoding> =
    t.recursion("MRObservationExaminationInterpretationCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: MRExaminationInterpretationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationExaminationInterpretationCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationExaminationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.1.0">;
    id?: string;
}

export const MRObservationExaminationMeta: t.Type<MRObservationExaminationMeta> =
    t.recursion("MRObservationExaminationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination|1.1.0"
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
 * A unique identifier assigned to this observation.
 */
export interface MRObservationExaminationIdentifier {
    system: string;
    value: string;
    id?: string;
}

export const MRObservationExaminationIdentifier: t.Type<MRObservationExaminationIdentifier> =
    t.recursion("MRObservationExaminationIdentifier", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    value: SCALARString
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
export interface MRObservationExaminationCode {
    coding: Array<
        MRObservationExaminationCodeSnomedCT | MRObservationExaminationCodeLoinc
    >;
    id?: string;
}

export const MRObservationExaminationCode: t.Type<MRObservationExaminationCode> =
    t.recursion("MRObservationExaminationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationExaminationCodeSnomedCT>,
                                t.Type<MRObservationExaminationCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationExaminationCodeSnomedCT,
                            MRObservationExaminationCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationExaminationCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationExaminationCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    )
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
export interface MRObservationExaminationSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationExaminationSubjectReference: t.Type<MRObservationExaminationSubjectReference> =
    t.recursion("MRObservationExaminationSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.1.0"
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
export interface MRObservationExaminationEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationExaminationEncounterReference: t.Type<MRObservationExaminationEncounterReference> =
    t.recursion("MRObservationExaminationEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRObservationExaminationPerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationExaminationPerformerReference: t.Type<MRObservationExaminationPerformerReference> =
    t.recursion("MRObservationExaminationPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A categorical assessment of an observation value.  For example, high, low, normal.
 */
export interface MRObservationExaminationInterpretation {
    coding: Array<MRObservationExaminationInterpretationCoding>;
    id?: string;
}

export const MRObservationExaminationInterpretation: t.Type<MRObservationExaminationInterpretation> =
    t.recursion("MRObservationExaminationInterpretation", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationExaminationInterpretationCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationExamination {
    resourceType: "Observation";
    meta: MRObservationExaminationMeta;
    status: "final";
    code: MRObservationExaminationCode;
    subject: MRObservationExaminationSubjectReference;
    encounter: MRObservationExaminationEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    identifier?: Array<MRObservationExaminationIdentifier>;
    performer?: Array<MRObservationExaminationPerformerReference>;
    valueCodeableConcept?: MRObservationExaminationValueCodeableConcept;
    valueQuantity?: MRObservationExaminationValueQuantity;
    interpretation?: Array<MRObservationExaminationInterpretation>;
    note?: Array<Annotation>;
}

const MRObservationExamination: t.Type<MRObservationExamination> = t.recursion(
    "MRObservationExamination",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationExaminationMeta,
                    status: Literal("final"),
                    code: MRObservationExaminationCode,
                    subject: MRObservationExaminationSubjectReference,
                    encounter: MRObservationExaminationEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    identifier: MaxArray(1, MRObservationExaminationIdentifier),
                    performer: MaxArray(1, MRObservationExaminationPerformerReference),
                    valueCodeableConcept: MRObservationExaminationValueCodeableConcept,
                    valueQuantity: MRObservationExaminationValueQuantity,
                    interpretation: MaxArray(1, MRObservationExaminationInterpretation),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRObservationExamination;
