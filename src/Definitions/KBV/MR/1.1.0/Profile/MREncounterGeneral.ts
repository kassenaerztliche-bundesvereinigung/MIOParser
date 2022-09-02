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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General"

/**
 * Persons involved in the encounter other than the patient.
 */
export interface MREncounterGeneralParticipantIndividualReference {
    reference: string;
    id?: string;
}

export const MREncounterGeneralParticipantIndividualReference: t.Type<MREncounterGeneralParticipantIndividualReference> =
    t.recursion("MREncounterGeneralParticipantIndividualReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MREncounterGeneralMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0">;
    id?: string;
}

export const MREncounterGeneralMeta: t.Type<MREncounterGeneralMeta> = t.recursion(
    "MREncounterGeneralMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MREncounterGeneralClass {
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode";
    version: "2.0.0";
    code: "AMB";
    display: "ambulatory";
    id?: string;
}

export const MREncounterGeneralClass: t.Type<MREncounterGeneralClass> = t.recursion(
    "MREncounterGeneralClass",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v3-ActCode"),
                    version: Literal("2.0.0"),
                    code: Literal("AMB"),
                    display: Literal("ambulatory")
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
export interface MREncounterGeneralSubjectReference {
    reference: string;
    id?: string;
}

export const MREncounterGeneralSubjectReference: t.Type<MREncounterGeneralSubjectReference> =
    t.recursion("MREncounterGeneralSubjectReference", () =>
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
 * The list of people responsible for providing the service.
 */
export interface MREncounterGeneralParticipant {
    individual: MREncounterGeneralParticipantIndividualReference;
    id?: string;
}

export const MREncounterGeneralParticipant: t.Type<MREncounterGeneralParticipant> =
    t.recursion("MREncounterGeneralParticipant", () =>
        Excess(
            t.intersection([
                t.type({
                    individual: MREncounterGeneralParticipantIndividualReference
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
export interface MREncounterGeneralPeriod {
    start: string;
    id?: string;
    end?: string;
}

export const MREncounterGeneralPeriod: t.Type<MREncounterGeneralPeriod> = t.recursion(
    "MREncounterGeneralPeriod",
    () =>
        Excess(
            t.intersection([
                t.type({
                    start: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    end: SCALARDateTime
                })
            ])
        )
);

/**
 * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
 */
export interface MREncounterGeneralServiceProviderReference {
    reference: string;
    id?: string;
}

export const MREncounterGeneralServiceProviderReference: t.Type<MREncounterGeneralServiceProviderReference> =
    t.recursion("MREncounterGeneralServiceProviderReference", () =>
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

interface MREncounterGeneral {
    resourceType: "Encounter";
    meta: MREncounterGeneralMeta;
    status: "finished";
    class: MREncounterGeneralClass;
    subject: MREncounterGeneralSubjectReference;
    period: MREncounterGeneralPeriod;
    id?: string;
    text?: Narrative;
    participant?: MREncounterGeneralParticipant[];
    serviceProvider?: MREncounterGeneralServiceProviderReference;
}

const MREncounterGeneral: t.Type<MREncounterGeneral> = t.recursion(
    "MREncounterGeneral",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Encounter"),
                    meta: MREncounterGeneralMeta,
                    status: Literal("finished"),
                    class: MREncounterGeneralClass,
                    subject: MREncounterGeneralSubjectReference,
                    period: MREncounterGeneralPeriod
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    participant: t.array(MREncounterGeneralParticipant),
                    serviceProvider: MREncounterGeneralServiceProviderReference
                })
            ])
        )
);

export default MREncounterGeneral;
