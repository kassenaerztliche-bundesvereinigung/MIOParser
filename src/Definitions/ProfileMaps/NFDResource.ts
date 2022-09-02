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

import * as NFD from "../KBV/PKA/";

export type NFDResource =
    | NFD.V1_0_0.Profile.NFDAllergyIntolerance
    | NFD.V1_0_0.Profile.NFDCompositionNFD
    | NFD.V1_0_0.Profile.NFDCondition
    | NFD.V1_0_0.Profile.NFDConditionCommunicationDisorder
    | NFD.V1_0_0.Profile.NFDConditionRunawayRisk
    | NFD.V1_0_0.Profile.NFDDeviceImplant
    | NFD.V1_0_0.Profile.NFDDeviceUseStatementImplant
    | NFD.V1_0_0.Profile.NFDMedication
    | NFD.V1_0_0.Profile.NFDMedicationRecipe
    | NFD.V1_0_0.Profile.NFDMedicationStatementAdministrationInstruction
    | NFD.V1_0_0.Profile.NFDObservationNote
    | NFD.V1_0_0.Profile.NFDObservationPregnancyCalculatedDeliveryDate
    | NFD.V1_0_0.Profile.NFDObservationPregnancyStatus
    | NFD.V1_0_0.Profile.NFDObservationVoluntaryAdditionalInformation
    | NFD.V1_0_0.Profile.NFDOrganization
    | NFD.V1_0_0.Profile.NFDPatientNFD
    | NFD.V1_0_0.Profile.NFDPractitioner
    | NFD.V1_0_0.Profile.NFDPractitionerPhysician
    | NFD.V1_0_0.Profile.NFDPractitionerRole
    | NFD.V1_0_0.Profile.NFDPractitionerRoleWithOrganization
    | NFD.V1_0_0.Profile.NFDProcedure;
