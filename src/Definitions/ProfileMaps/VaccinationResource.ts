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

import * as Vaccination from "../KBV/IM/";

export type VaccinationResource =
    | Vaccination.V1_1_0.Profile.BundleEntry
    | Vaccination.V1_1_0.Profile.CompositionAddendum
    | Vaccination.V1_1_0.Profile.CompositionPrime
    | Vaccination.V1_1_0.Profile.Condition
    | Vaccination.V1_1_0.Profile.ObservationImmunizationStatus
    | Vaccination.V1_1_0.Profile.Organization
    | Vaccination.V1_1_0.Profile.OrganizationAddendum
    | Vaccination.V1_1_0.Profile.Patient
    | Vaccination.V1_1_0.Profile.Practitioner
    | Vaccination.V1_1_0.Profile.Practitionerrole
    | Vaccination.V1_1_0.Profile.PractitionerroleAddendum
    | Vaccination.V1_1_0.Profile.PractitionerAddendum
    | Vaccination.V1_1_0.Profile.Provenance
    | Vaccination.V1_1_0.Profile.RecordAddendum
    | Vaccination.V1_1_0.Profile.RecordPrime;
