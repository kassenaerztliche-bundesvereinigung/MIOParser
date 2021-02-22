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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Inpatient_Treatment"

/**
 * Content in other Language.
 */
export interface MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Stationäre Behandlung während der Schwangerschaft";
    id?: string;
}

export const MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal(
                        "Stationäre Behandlung während der Schwangerschaft"
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
export interface MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed: t.Type<MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MREncounterInpatientTreatmentTypeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MREncounterInpatientTreatmentTypeCodingDisplay: t.Type<MREncounterInpatientTreatmentTypeCodingDisplay> = t.recursion(
    "MREncounterInpatientTreatmentTypeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MREncounterInpatientTreatmentTypeCodingDisplayAnzeigenameCodeSnomed,
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MREncounterInpatientTreatmentPeriodVonBis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MREncounterInpatientTreatmentPeriodVonBis: t.Type<MREncounterInpatientTreatmentPeriodVonBis> = t.recursion(
    "MREncounterInpatientTreatmentPeriodVonBis",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MREncounterInpatientTreatmentTherapie {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MREncounterInpatientTreatmentTherapie: t.Type<MREncounterInpatientTreatmentTherapie> = t.recursion(
    "MREncounterInpatientTreatmentTherapie",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: SCALARString
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
export interface MREncounterInpatientTreatmentTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "5491000179105";
    id?: string;
    _display?: MREncounterInpatientTreatmentTypeCodingDisplay;
    display?: string;
}

export const MREncounterInpatientTreatmentTypeCoding: t.Type<MREncounterInpatientTreatmentTypeCoding> = t.recursion(
    "MREncounterInpatientTreatmentTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("5491000179105")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MREncounterInpatientTreatmentTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
 */
export interface MREncounterInpatientTreatmentDiagnosisCondition {
    display: string;
    id?: string;
}

export const MREncounterInpatientTreatmentDiagnosisCondition: t.Type<MREncounterInpatientTreatmentDiagnosisCondition> = t.recursion(
    "MREncounterInpatientTreatmentDiagnosisCondition",
    () =>
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MREncounterInpatientTreatmentMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Inpatient_Treatment|1.0.0"
    >;
    id?: string;
}

export const MREncounterInpatientTreatmentMeta: t.Type<MREncounterInpatientTreatmentMeta> = t.recursion(
    "MREncounterInpatientTreatmentMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Inpatient_Treatment|1.0.0"
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
 * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
 */
export interface MREncounterInpatientTreatmentClass {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    version: "2.0.0";
    code: "IMP";
    id?: string;
    display?: string;
}

export const MREncounterInpatientTreatmentClass: t.Type<MREncounterInpatientTreatmentClass> = t.recursion(
    "MREncounterInpatientTreatmentClass",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-ActCode"),
                    version: Literal("2.0.0"),
                    code: Literal("IMP")
                }),
                t.partial({
                    id: SCALARString,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
 */
export interface MREncounterInpatientTreatmentType {
    coding: Array<MREncounterInpatientTreatmentTypeCoding>;
    id?: string;
}

export const MREncounterInpatientTreatmentType: t.Type<MREncounterInpatientTreatmentType> = t.recursion(
    "MREncounterInpatientTreatmentType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MREncounterInpatientTreatmentTypeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient or group present at the encounter.
 */
export interface MREncounterInpatientTreatmentSubject {
    reference: string;
    id?: string;
}

export const MREncounterInpatientTreatmentSubject: t.Type<MREncounterInpatientTreatmentSubject> = t.recursion(
    "MREncounterInpatientTreatmentSubject",
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
 * The start and end time of the encounter.
 */
export interface MREncounterInpatientTreatmentPeriod {
    id?: string;
    extension?: (Extension | MREncounterInpatientTreatmentPeriodVonBis)[];
}

export const MREncounterInpatientTreatmentPeriod: t.Type<MREncounterInpatientTreatmentPeriod> = t.recursion(
    "MREncounterInpatientTreatmentPeriod",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MREncounterInpatientTreatmentPeriodVonBis>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, MREncounterInpatientTreatmentPeriodVonBis]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MREncounterInpatientTreatmentPeriodVonBis,
                            occurrence: ["2", "2"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                )
            })
        )
);

/**
 * The list of diagnosis relevant to this encounter.
 */
export interface MREncounterInpatientTreatmentDiagnosis {
    condition: MREncounterInpatientTreatmentDiagnosisCondition;
    id?: string;
}

export const MREncounterInpatientTreatmentDiagnosis: t.Type<MREncounterInpatientTreatmentDiagnosis> = t.recursion(
    "MREncounterInpatientTreatmentDiagnosis",
    () =>
        Excess(
            t.intersection([
                t.type({
                    condition: MREncounterInpatientTreatmentDiagnosisCondition
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
 */
export interface MREncounterInpatientTreatmentServiceProvider {
    reference: string;
    id?: string;
}

export const MREncounterInpatientTreatmentServiceProvider: t.Type<MREncounterInpatientTreatmentServiceProvider> = t.recursion(
    "MREncounterInpatientTreatmentServiceProvider",
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

interface MREncounterInpatientTreatment {
    meta: MREncounterInpatientTreatmentMeta;
    status: "finished";
    class: MREncounterInpatientTreatmentClass;
    type: Array<MREncounterInpatientTreatmentType>;
    subject: MREncounterInpatientTreatmentSubject;
    period: MREncounterInpatientTreatmentPeriod;
    serviceProvider: MREncounterInpatientTreatmentServiceProvider;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MREncounterInpatientTreatmentTherapie)[];
    diagnosis?: Array<MREncounterInpatientTreatmentDiagnosis>;
}

const MREncounterInpatientTreatment: t.Type<MREncounterInpatientTreatment> = t.recursion(
    "MREncounterInpatientTreatment",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MREncounterInpatientTreatmentMeta,
                    status: Literal("finished"),
                    class: MREncounterInpatientTreatmentClass,
                    type: MinMaxArray(1, 1, MREncounterInpatientTreatmentType),
                    subject: MREncounterInpatientTreatmentSubject,
                    period: MREncounterInpatientTreatmentPeriod,
                    serviceProvider: MREncounterInpatientTreatmentServiceProvider
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MREncounterInpatientTreatmentTherapie>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, MREncounterInpatientTreatmentTherapie]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MREncounterInpatientTreatmentTherapie,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    diagnosis: MaxArray(1, MREncounterInpatientTreatmentDiagnosis)
                })
            ])
        )
);

export default MREncounterInpatientTreatment;
