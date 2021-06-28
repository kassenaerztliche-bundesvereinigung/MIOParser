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

import * as CMR from "../KBV/CMR/";

export type CMRResource =
    | CMR.V1_0_0.Profile.CMRAppointmentNextAppointment
    | CMR.V1_0_0.Profile.CMRAppointmentNextImmunizationAppointment
    | CMR.V1_0_0.Profile.CMRAppointmentParticipationPeriod
    | CMR.V1_0_0.Profile.CMRBundle
    | CMR.V1_0_0.Profile.CMRCarePlanU2U9Result
    | CMR.V1_0_0.Profile.CMRCarePlanU3U4HipScreeningPlan
    | CMR.V1_0_0.Profile.CMRCompositionCysticFibrosisScreening
    | CMR.V1_0_0.Profile.CMRCompositionExtendedNewbornScreening
    | CMR.V1_0_0.Profile.CMRCompositionHipScreening
    | CMR.V1_0_0.Profile.CMRCompositionNeonatalHearscreening
    | CMR.V1_0_0.Profile.CMRCompositionPercentileCurve
    | CMR.V1_0_0.Profile.CMRCompositionPulseOxymetryScreening
    | CMR.V1_0_0.Profile.CMRCompositionU1
    | CMR.V1_0_0.Profile.CMRCompositionU2
    | CMR.V1_0_0.Profile.CMRCompositionU3
    | CMR.V1_0_0.Profile.CMRCompositionU4
    | CMR.V1_0_0.Profile.CMRCompositionU5
    | CMR.V1_0_0.Profile.CMRCompositionU6
    | CMR.V1_0_0.Profile.CMRCompositionU7
    | CMR.V1_0_0.Profile.CMRCompositionU7a
    | CMR.V1_0_0.Profile.CMRCompositionU8
    | CMR.V1_0_0.Profile.CMRCompositionU9
    | CMR.V1_0_0.Profile.CMRDiagnosticReportPercentileBodyMeasures
    | CMR.V1_0_0.Profile.CMRDiagnosticReportPercentileValues
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1ApgarScore
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1BirthLength
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1BirthTraumaOfFetus
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1BirthWeight
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1CongenitalMalformation
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1EdemaOfNewborn
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1NeonatalJaundice
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1TermInfant
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1U3PulseOxymetry
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1U5NeonatalHearscreening
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyService
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2PhysicalExamSkin
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2U3PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2U3PhysicalExamEars
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2U3PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2U4PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2U6BodyMeasures
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculation
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU3PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU3PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU3U4HipScreening
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU3U4PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU3U4PhysicalExamSkin
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU4PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU4PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU4PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU4U5PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU5PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU5PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU5U6PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU5U6PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU5U9PhysicalExamSkin
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU6PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU6PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU6PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU6U7PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7aandU9PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7aandU9PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7aPhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7aU9PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7U9BodyMeasures
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculation
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU8PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU8PhysicalExamEars
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU8PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU8U9PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRDiagnosticReportU9PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMREncounter
    | CMR.V1_0_0.Profile.CMRMedicationStatementVitamineKProphylaxis
    | CMR.V1_0_0.Profile.CMRObservationComments
    | CMR.V1_0_0.Profile.CMRObservationHeadCircumference
    | CMR.V1_0_0.Profile.CMRObservationPercentileValues
    | CMR.V1_0_0.Profile.CMRObservationPhysicalExamParentalAssessment
    | CMR.V1_0_0.Profile.CMRObservationU1ApgarScore
    | CMR.V1_0_0.Profile.CMRObservationU1BirthLength
    | CMR.V1_0_0.Profile.CMRObservationU1BirthTraumaOfFetus
    | CMR.V1_0_0.Profile.CMRObservationU1BirthWeight
    | CMR.V1_0_0.Profile.CMRObservationU1CongenitalMalformation
    | CMR.V1_0_0.Profile.CMRObservationU1EdemaofNewborn
    | CMR.V1_0_0.Profile.CMRObservationU1FamilyHistory
    | CMR.V1_0_0.Profile.CMRObservationU1NeonatalJaundice
    | CMR.V1_0_0.Profile.CMRObservationU1TermInfant
    | CMR.V1_0_0.Profile.CMRObservationU1U3BaseExcess
    | CMR.V1_0_0.Profile.CMRObservationU1U3Birthmode
    | CMR.V1_0_0.Profile.CMRObservationU1U3DateTimeofBirth
    | CMR.V1_0_0.Profile.CMRObservationU1U3DifferentFoetalPosition
    | CMR.V1_0_0.Profile.CMRObservationU1U3FoetalPosition
    | CMR.V1_0_0.Profile.CMRObservationU1U3GenderBirthHistory
    | CMR.V1_0_0.Profile.CMRObservationU1U3LengthGestationAtBirth
    | CMR.V1_0_0.Profile.CMRObservationU1U3pHValue
    | CMR.V1_0_0.Profile.CMRObservationU1U3PregnancyHistory
    | CMR.V1_0_0.Profile.CMRObservationU1U3PrenatalFinding
    | CMR.V1_0_0.Profile.CMRObservationU1U3PulseOxymetryMeasurement
    | CMR.V1_0_0.Profile.CMRObservationU1U5CounselingAboutHearscreening
    | CMR.V1_0_0.Profile.CMRObservationU1U5NeonatalHearscreening
    | CMR.V1_0_0.Profile.CMRObservationU1U5PediatricDiagnosticAudiologyService
    | CMR.V1_0_0.Profile.CMRObservationU2CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU2FamilyHistory
    | CMR.V1_0_0.Profile.CMRObservationU2PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRObservationU2PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU2PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU2PhysicalExamSkin
    | CMR.V1_0_0.Profile.CMRObservationU2SocialHistory
    | CMR.V1_0_0.Profile.CMRObservationU2U3PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRObservationU2U3PhysicalExamEars
    | CMR.V1_0_0.Profile.CMRObservationU2U3PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRObservationU2U4PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRObservationU2U6BodyWeight
    | CMR.V1_0_0.Profile.CMRObservationU2U6PhysicalExamHeartBloodCirculation
    | CMR.V1_0_0.Profile.CMRObservationU2U9BodyHeightMeasure
    | CMR.V1_0_0.Profile.CMRObservationU2U9NoAbnormalityDetected
    | CMR.V1_0_0.Profile.CMRObservationU2U9RelevantHistoryResults
    | CMR.V1_0_0.Profile.CMRObservationU3CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU3DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU3FamilyHistory
    | CMR.V1_0_0.Profile.CMRObservationU3PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRObservationU3PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU3U4HipScreeningHistory
    | CMR.V1_0_0.Profile.CMRObservationU3U4HipScreeningResult
    | CMR.V1_0_0.Profile.CMRObservationU3U4PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU3U4PhysicalExamSkin
    | CMR.V1_0_0.Profile.CMRObservationU3U4ProblemOfHip
    | CMR.V1_0_0.Profile.CMRObservationU3U6IndicationforAbnormality
    | CMR.V1_0_0.Profile.CMRObservationU3U9AgeAppropriateDevelopment
    | CMR.V1_0_0.Profile.CMRObservationU3U9SocialHistory
    | CMR.V1_0_0.Profile.CMRObservationU4CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU4DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU4PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRObservationU4PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRObservationU4PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU4U5PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRObservationU4U9StatusOfImmunization
    | CMR.V1_0_0.Profile.CMRObservationU5CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU5DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU5PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRObservationU5PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU5PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU5U6PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRObservationU5U6PhysicalExamHead
    | CMR.V1_0_0.Profile.CMRObservationU5U9PhysicalExamSkin
    | CMR.V1_0_0.Profile.CMRObservationU6CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU6DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU6PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRObservationU6PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU6PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU6U7PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRObservationU7aandU9PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRObservationU7aandU9PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU7aCurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU7aDevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU7aPhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU7aU9PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRObservationU7CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU7DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU7PhysicalExamEyes
    | CMR.V1_0_0.Profile.CMRObservationU7PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU7PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU7U7aPhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRObservationU7U9BMI
    | CMR.V1_0_0.Profile.CMRObservationU7U9BodyWeight
    | CMR.V1_0_0.Profile.CMRObservationU7U9PhysicalExamHeartBloodCirculation
    | CMR.V1_0_0.Profile.CMRObservationU8CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU8DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU8PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMRObservationU8PhysicalExamChestLungRespiratoryTract
    | CMR.V1_0_0.Profile.CMRObservationU8PhysicalExamEars
    | CMR.V1_0_0.Profile.CMRObservationU8PhysicalExamMusculoskeletalSystem
    | CMR.V1_0_0.Profile.CMRObservationU8U9PhysicalExamMouthNose
    | CMR.V1_0_0.Profile.CMRObservationU9CurrentChildHistory
    | CMR.V1_0_0.Profile.CMRObservationU9DevelopmentAssessment
    | CMR.V1_0_0.Profile.CMRObservationU9PhysicalExamAbdomenGenitals
    | CMR.V1_0_0.Profile.CMROrganization
    | CMR.V1_0_0.Profile.CMROrganizationScreeningLaboratory
    | CMR.V1_0_0.Profile.CMRPatient
    | CMR.V1_0_0.Profile.CMRPractitioner
    | CMR.V1_0_0.Profile.CMRProcedureConsultationAnnotation
    | CMR.V1_0_0.Profile.CMRProcedureU1U3CysticFibrosisScreening
    | CMR.V1_0_0.Profile.CMRProcedureU1U3NewbornBloodSpotScreening
    | CMR.V1_0_0.Profile.CMRProcedureU2Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU3Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU4Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU5Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU6Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU7aConsultation
    | CMR.V1_0_0.Profile.CMRProcedureU7Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU8Consultation
    | CMR.V1_0_0.Profile.CMRProcedureU9Consultation
    | CMR.V1_0_0.Profile.CMRServiceRequestDentalReferral
    | CMR.V1_0_0.Profile.CMRServiceRequestU1U3PulseOxymetryClarification
    | CMR.V1_0_0.Profile.CMRServiceRequestU1U5ReferralPediatricAudiologyService;
