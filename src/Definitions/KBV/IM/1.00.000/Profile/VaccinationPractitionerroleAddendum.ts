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
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationPractitionerroleAddendumMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum|1.00.000"
    >;
    id?: string;
}

export const VaccinationPractitionerroleAddendumMeta: t.Type<VaccinationPractitionerroleAddendumMeta> = t.recursion(
    "VaccinationPractitionerroleAddendumMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum|1.00.000"
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
 * Practitioner that is able to provide the defined services for the organization.
 */
export interface VaccinationPractitionerroleAddendumPractitioner {
    reference: string;
    id?: string;
}

export const VaccinationPractitionerroleAddendumPractitioner: t.Type<VaccinationPractitionerroleAddendumPractitioner> = t.recursion(
    "VaccinationPractitionerroleAddendumPractitioner",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The organization where the Practitioner performs the roles associated.
 */
export interface VaccinationPractitionerroleAddendumOrganization {
    reference: string;
    id?: string;
}

export const VaccinationPractitionerroleAddendumOrganization: t.Type<VaccinationPractitionerroleAddendumOrganization> = t.recursion(
    "VaccinationPractitionerroleAddendumOrganization",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization|1.00.000"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationPractitionerroleAddendum {
    resourceType: "PractitionerRole";
    id: string;
    meta: VaccinationPractitionerroleAddendumMeta;
    practitioner: VaccinationPractitionerroleAddendumPractitioner;
    organization: VaccinationPractitionerroleAddendumOrganization;
    text?: Narrative;
}

const VaccinationPractitionerroleAddendum: t.Type<VaccinationPractitionerroleAddendum> = t.recursion(
    "VaccinationPractitionerroleAddendum",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("PractitionerRole"),
                    id: SCALARString,
                    meta: VaccinationPractitionerroleAddendumMeta,
                    practitioner: VaccinationPractitionerroleAddendumPractitioner,
                    organization: VaccinationPractitionerroleAddendumOrganization
                }),
                t.partial({
                    text: Narrative
                })
            ])
        )
);

export default VaccinationPractitionerroleAddendum;
