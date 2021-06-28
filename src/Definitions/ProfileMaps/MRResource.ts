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

import * as MR from "../KBV/MR/";

export type MRResource =
    | MR.V1_0_0.Profile.AppointmentPregnancy
    | MR.V1_0_0.Profile.Bundle
    | MR.V1_0_0.Profile.ClinicalImpressionBirthExaminationChildInformation
    | MR.V1_0_0.Profile.ClinicalImpressionBirthExaminationDeliveryInformation
    | MR.V1_0_0.Profile.ClinicalImpressionFirstExaminationAfterChildbirth
    | MR.V1_0_0.Profile.ClinicalImpressionInitialExamination
    | MR.V1_0_0.Profile.ClinicalImpressionPregnancyChartEntry
    | MR.V1_0_0.Profile.ClinicalImpressionPregnancyExaminationDischargeSummary
    | MR.V1_0_0.Profile.ClinicalImpressionSecondExaminationAfterChildbirth
    | MR.V1_0_0.Profile.Composition
    | MR.V1_0_0.Profile.DiagnosticReportUltrasoundI
    | MR.V1_0_0.Profile.DiagnosticReportUltrasoundII
    | MR.V1_0_0.Profile.DiagnosticReportUltrasoundIII
    | MR.V1_0_0.Profile.EncounterArrivalMaternityHospital
    | MR.V1_0_0.Profile.EncounterGeneral
    | MR.V1_0_0.Profile.EncounterInpatientTreatment
    | MR.V1_0_0.Profile.ObservationAbnormalities
    | MR.V1_0_0.Profile.ObservationAdviceOnIodineIntake
    | MR.V1_0_0.Profile.ObservationAge
    | MR.V1_0_0.Profile.ObservationAntiDProphylaxisPostPartum
    | MR.V1_0_0.Profile.ObservationApgarScore
    | MR.V1_0_0.Profile.ObservationBaselineWeightMother
    | MR.V1_0_0.Profile.ObservationBiometricsI
    | MR.V1_0_0.Profile.ObservationBiometricsII
    | MR.V1_0_0.Profile.ObservationBiometricsIII
    | MR.V1_0_0.Profile.ObservationBirthHeight
    | MR.V1_0_0.Profile.ObservationBirthMode
    | MR.V1_0_0.Profile.ObservationBloodGroupSerology
    | MR.V1_0_0.Profile.ObservationBloodGroupSerologyChild
    | MR.V1_0_0.Profile.ObservationBloodPressure
    | MR.V1_0_0.Profile.ObservationBreastfeedingBehavior
    | MR.V1_0_0.Profile.ObservationCalculatedDeliveryDate
    | MR.V1_0_0.Profile.ObservationCardiotocography
    | MR.V1_0_0.Profile.ObservationCatalogueA
    | MR.V1_0_0.Profile.ObservationChildIsHealthy
    | MR.V1_0_0.Profile.ObservationChildMovement
    | MR.V1_0_0.Profile.ObservationChildPosition
    | MR.V1_0_0.Profile.ObservationConsultationInitiated
    | MR.V1_0_0.Profile.ObservationDateDeterminationChildbirth
    | MR.V1_0_0.Profile.ObservationDateOfConception
    | MR.V1_0_0.Profile.ObservationDeterminationOfPregnancy
    | MR.V1_0_0.Profile.ObservationDirectCoombstest
    | MR.V1_0_0.Profile.ObservationEdema
    | MR.V1_0_0.Profile.ObservationExamination
    | MR.V1_0_0.Profile.ObservationExternalBirth
    | MR.V1_0_0.Profile.ObservationFindingsRequiredControl
    | MR.V1_0_0.Profile.ObservationFundusHeight
    | MR.V1_0_0.Profile.ObservationGeneralInformation
    | MR.V1_0_0.Profile.ObservationGravida
    | MR.V1_0_0.Profile.ObservationGynecologicalFindingNormal
    | MR.V1_0_0.Profile.ObservationHeadCircumference
    | MR.V1_0_0.Profile.ObservationHeartAction
    | MR.V1_0_0.Profile.ObservationHeartSoundsChild
    | MR.V1_0_0.Profile.ObservationHeight
    | MR.V1_0_0.Profile.ObservationHIVTestPerformed
    | MR.V1_0_0.Profile.ObservationImmunizationStatus
    | MR.V1_0_0.Profile.ObservationInpatientStayDuringPregnancy
    | MR.V1_0_0.Profile.ObservationLiveBirth
    | MR.V1_0_0.Profile.ObservationLocalisationPlacenta
    | MR.V1_0_0.Profile.ObservationMalformation
    | MR.V1_0_0.Profile.ObservationMenstrualCycle
    | MR.V1_0_0.Profile.ObservationMorphology
    | MR.V1_0_0.Profile.ObservationNeedOfTreatmentU3
    | MR.V1_0_0.Profile.ObservationNumberOfCheckups
    | MR.V1_0_0.Profile.ObservationoGTTDiagnosistest
    | MR.V1_0_0.Profile.ObservationoGTTPretest
    | MR.V1_0_0.Profile.ObservationOtherBloodGroupSystems
    | MR.V1_0_0.Profile.ObservationOtherUltrasoundStudies
    | MR.V1_0_0.Profile.ObservationPara
    | MR.V1_0_0.Profile.ObservationPercentile
    | MR.V1_0_0.Profile.ObservationpHValueUmbilicalArtery
    | MR.V1_0_0.Profile.ObservationPregnancyInformation
    | MR.V1_0_0.Profile.ObservationPregnancyRisk
    | MR.V1_0_0.Profile.ObservationPresentationAtBirthClinic
    | MR.V1_0_0.Profile.ObservationPreviousPregnancy
    | MR.V1_0_0.Profile.ObservationPuerperiumNormal
    | MR.V1_0_0.Profile.ObservationSingletonPregnancy
    | MR.V1_0_0.Profile.ObservationSpecialFindings
    | MR.V1_0_0.Profile.ObservationTimelyDevelopment
    | MR.V1_0_0.Profile.ObservationU3Performed
    | MR.V1_0_0.Profile.ObservationUltrasound
    | MR.V1_0_0.Profile.ObservationUrine
    | MR.V1_0_0.Profile.ObservationUrineBlood
    | MR.V1_0_0.Profile.ObservationUrineNitrite
    | MR.V1_0_0.Profile.ObservationUrineProtein
    | MR.V1_0_0.Profile.ObservationUrineSediment
    | MR.V1_0_0.Profile.ObservationUrineSugar
    | MR.V1_0_0.Profile.ObservationVaginalExamination
    | MR.V1_0_0.Profile.ObservationVaricosis
    | MR.V1_0_0.Profile.ObservationWeightChild
    | MR.V1_0_0.Profile.ObservationWeightMother
    | MR.V1_0_0.Profile.Organization
    | MR.V1_0_0.Profile.PatientChild
    | MR.V1_0_0.Profile.PatientMother
    | MR.V1_0_0.Profile.Practitioner
    | MR.V1_0_0.Profile.ProcedureAntiDProphylaxis
    | MR.V1_0_0.Profile.ProcedureCounselling;
