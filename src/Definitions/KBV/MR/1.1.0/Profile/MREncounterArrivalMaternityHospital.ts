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
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Arrival_Maternity_Hospital"

/**
 * Content in other Language.
 */
export interface MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "In der Entbindungsklinik vorgestellt am";
    id?: string;
}

export const MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("In der Entbindungsklinik vorgestellt am")
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
export interface MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomed: t.Type<MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomed",
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
                            MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MREncounterArrivalMaternityHospitalTypeCodingDisplay {
    id?: string;
    extension?: MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MREncounterArrivalMaternityHospitalTypeCodingDisplay: t.Type<MREncounterArrivalMaternityHospitalTypeCodingDisplay> =
    t.recursion("MREncounterArrivalMaternityHospitalTypeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MREncounterArrivalMaternityHospitalTypeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MREncounterArrivalMaternityHospitalTypeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "406543005:704321009=18114009";
    id?: string;
    _display?: MREncounterArrivalMaternityHospitalTypeCodingDisplay;
    display?: string;
}

export const MREncounterArrivalMaternityHospitalTypeCoding: t.Type<MREncounterArrivalMaternityHospitalTypeCoding> =
    t.recursion("MREncounterArrivalMaternityHospitalTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("406543005:704321009=18114009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MREncounterArrivalMaternityHospitalTypeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MREncounterArrivalMaternityHospitalMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Arrival_Maternity_Hospital|1.1.0">;
    id?: string;
}

export const MREncounterArrivalMaternityHospitalMeta: t.Type<MREncounterArrivalMaternityHospitalMeta> =
    t.recursion("MREncounterArrivalMaternityHospitalMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Arrival_Maternity_Hospital|1.1.0"
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
export interface MREncounterArrivalMaternityHospitalClass {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    version: "2.0.0";
    code: "AMB";
    id?: string;
    display?: string;
}

export const MREncounterArrivalMaternityHospitalClass: t.Type<MREncounterArrivalMaternityHospitalClass> =
    t.recursion("MREncounterArrivalMaternityHospitalClass", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-ActCode"),
                    version: Literal("2.0.0"),
                    code: Literal("AMB")
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
export interface MREncounterArrivalMaternityHospitalType {
    coding: Array<MREncounterArrivalMaternityHospitalTypeCoding>;
    id?: string;
}

export const MREncounterArrivalMaternityHospitalType: t.Type<MREncounterArrivalMaternityHospitalType> =
    t.recursion("MREncounterArrivalMaternityHospitalType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MREncounterArrivalMaternityHospitalTypeCoding
                    )
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
export interface MREncounterArrivalMaternityHospitalSubject {
    reference: string;
    id?: string;
}

export const MREncounterArrivalMaternityHospitalSubject: t.Type<MREncounterArrivalMaternityHospitalSubject> =
    t.recursion("MREncounterArrivalMaternityHospitalSubject", () =>
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
 * The start and end time of the encounter.
 */
export interface MREncounterArrivalMaternityHospitalPeriod {
    start: string;
    id?: string;
}

export const MREncounterArrivalMaternityHospitalPeriod: t.Type<MREncounterArrivalMaternityHospitalPeriod> =
    t.recursion("MREncounterArrivalMaternityHospitalPeriod", () =>
        Excess(
            t.intersection([
                t.type({
                    start: SCALARDateTime
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
export interface MREncounterArrivalMaternityHospitalServiceProvider {
    reference: string;
    id?: string;
}

export const MREncounterArrivalMaternityHospitalServiceProvider: t.Type<MREncounterArrivalMaternityHospitalServiceProvider> =
    t.recursion("MREncounterArrivalMaternityHospitalServiceProvider", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MREncounterArrivalMaternityHospital {
    resourceType: "Encounter";
    meta: MREncounterArrivalMaternityHospitalMeta;
    status: "arrived";
    class: MREncounterArrivalMaternityHospitalClass;
    type: Array<MREncounterArrivalMaternityHospitalType>;
    subject: MREncounterArrivalMaternityHospitalSubject;
    period: MREncounterArrivalMaternityHospitalPeriod;
    serviceProvider: MREncounterArrivalMaternityHospitalServiceProvider;
    id?: string;
    text?: Narrative;
}

const MREncounterArrivalMaternityHospital: t.Type<MREncounterArrivalMaternityHospital> =
    t.recursion("MREncounterArrivalMaternityHospital", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Encounter"),
                    meta: MREncounterArrivalMaternityHospitalMeta,
                    status: Literal("arrived"),
                    class: MREncounterArrivalMaternityHospitalClass,
                    type: MinMaxArray(1, 1, MREncounterArrivalMaternityHospitalType),
                    subject: MREncounterArrivalMaternityHospitalSubject,
                    period: MREncounterArrivalMaternityHospitalPeriod,
                    serviceProvider: MREncounterArrivalMaternityHospitalServiceProvider
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
    );

export default MREncounterArrivalMaternityHospital;
