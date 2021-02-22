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

import VaccinationBundleEntry from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationBundleEntry";
import VaccinationCompositionAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationCompositionAddendum";
import VaccinationCompositionPrime from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationCompositionPrime";
import VaccinationCondition from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationCondition";
import VaccinationObservationImmunizationStatus from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationObservationImmunizationStatus";
import VaccinationOrganization from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationOrganization";
import VaccinationPatient from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPatient";
import VaccinationPractitioner from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitioner";
import VaccinationPractitionerrole from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitionerrole";
import VaccinationPractitionerroleAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitionerroleAddendum";
import VaccinationPractitionerAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitionerAddendum";
import VaccinationProvenance from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationProvenance";
import VaccinationRecordAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationRecordAddendum";
import VaccinationRecordPrime from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationRecordPrime";
import ZAEBBundle from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBBundle";
import ZAEBComposition from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBComposition";
import ZAEBGaplessDocumentation from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBGaplessDocumentation";
import ZAEBObservation from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBObservation";
import ZAEBOrganization from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBOrganization";
import ZAEBPatient from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBPatient";
import MRAppointmentPregnancy from "./../Definitions/KBV/MR/1.00.000/Profile/MRAppointmentPregnancy";
import MRBundle from "./../Definitions/KBV/MR/1.00.000/Profile/MRBundle";
import MRClinicalImpressionBirthExaminationChildInformation from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionBirthExaminationChildInformation";
import MRClinicalImpressionBirthExaminationDeliveryInformation from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionBirthExaminationDeliveryInformation";
import MRClinicalImpressionFirstExaminationAfterChildbirth from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionFirstExaminationAfterChildbirth";
import MRClinicalImpressionInitialExamination from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionInitialExamination";
import MRClinicalImpressionPregnancyChartEntry from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionPregnancyChartEntry";
import MRClinicalImpressionPregnancyExaminationDischargeSummary from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionPregnancyExaminationDischargeSummary";
import MRClinicalImpressionSecondExaminationAfterChildbirth from "./../Definitions/KBV/MR/1.00.000/Profile/MRClinicalImpressionSecondExaminationAfterChildbirth";
import MRComposition from "./../Definitions/KBV/MR/1.00.000/Profile/MRComposition";
import MRDiagnosticReportUltrasoundI from "./../Definitions/KBV/MR/1.00.000/Profile/MRDiagnosticReportUltrasoundI";
import MRDiagnosticReportUltrasoundII from "./../Definitions/KBV/MR/1.00.000/Profile/MRDiagnosticReportUltrasoundII";
import MRDiagnosticReportUltrasoundIII from "./../Definitions/KBV/MR/1.00.000/Profile/MRDiagnosticReportUltrasoundIII";
import MREncounterArrivalMaternityHospital from "./../Definitions/KBV/MR/1.00.000/Profile/MREncounterArrivalMaternityHospital";
import MREncounterGeneral from "./../Definitions/KBV/MR/1.00.000/Profile/MREncounterGeneral";
import MREncounterInpatientTreatment from "./../Definitions/KBV/MR/1.00.000/Profile/MREncounterInpatientTreatment";
import MRObservationAbnormalities from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationAbnormalities";
import MRObservationAdviceOnIodineIntake from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationAdviceOnIodineIntake";
import MRObservationAge from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationAge";
import MRObservationAntiDProphylaxisPostPartum from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationAntiDProphylaxisPostPartum";
import MRObservationApgarScore from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationApgarScore";
import MRObservationBaselineWeightMother from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBaselineWeightMother";
import MRObservationBiometricsI from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBiometricsI";
import MRObservationBiometricsII from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBiometricsII";
import MRObservationBiometricsIII from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBiometricsIII";
import MRObservationBirthHeight from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBirthHeight";
import MRObservationBirthMode from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBirthMode";
import MRObservationBloodGroupSerology from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBloodGroupSerology";
import MRObservationBloodGroupSerologyChild from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBloodGroupSerologyChild";
import MRObservationBloodPressure from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBloodPressure";
import MRObservationBreastfeedingBehavior from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationBreastfeedingBehavior";
import MRObservationCalculatedDeliveryDate from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationCalculatedDeliveryDate";
import MRObservationCardiotocography from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationCardiotocography";
import MRObservationCatalogueA from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationCatalogueA";
import MRObservationChildIsHealthy from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationChildIsHealthy";
import MRObservationChildMovement from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationChildMovement";
import MRObservationChildPosition from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationChildPosition";
import MRObservationConsultationInitiated from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationConsultationInitiated";
import MRObservationDateDeterminationChildbirth from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationDateDeterminationChildbirth";
import MRObservationDateOfConception from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationDateOfConception";
import MRObservationDeterminationOfPregnancy from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationDeterminationOfPregnancy";
import MRObservationDirectCoombstest from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationDirectCoombstest";
import MRObservationEdema from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationEdema";
import MRObservationExamination from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationExamination";
import MRObservationExternalBirth from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationExternalBirth";
import MRObservationFindingsRequiredControl from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationFindingsRequiredControl";
import MRObservationFundusHeight from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationFundusHeight";
import MRObservationGeneralInformation from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationGeneralInformation";
import MRObservationGravida from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationGravida";
import MRObservationGynecologicalFindingNormal from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationGynecologicalFindingNormal";
import MRObservationHeadCircumference from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationHeadCircumference";
import MRObservationHeartAction from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationHeartAction";
import MRObservationHeartSoundsChild from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationHeartSoundsChild";
import MRObservationHeight from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationHeight";
import MRObservationHIVTestPerformed from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationHIVTestPerformed";
import MRObservationImmunizationStatus from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationImmunizationStatus";
import MRObservationInpatientStayDuringPregnancy from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationInpatientStayDuringPregnancy";
import MRObservationLiveBirth from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationLiveBirth";
import MRObservationLocalisationPlacenta from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationLocalisationPlacenta";
import MRObservationMalformation from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationMalformation";
import MRObservationMenstrualCycle from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationMenstrualCycle";
import MRObservationMorphology from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationMorphology";
import MRObservationNeedOfTreatmentU3 from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationNeedOfTreatmentU3";
import MRObservationNumberOfCheckups from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationNumberOfCheckups";
import MRObservationoGTTDiagnosistest from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationoGTTDiagnosistest";
import MRObservationoGTTPretest from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationoGTTPretest";
import MRObservationOtherBloodGroupSystems from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationOtherBloodGroupSystems";
import MRObservationOtherUltrasoundStudies from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationOtherUltrasoundStudies";
import MRObservationPara from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPara";
import MRObservationPercentile from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPercentile";
import MRObservationpHValueUmbilicalArtery from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationpHValueUmbilicalArtery";
import MRObservationPregnancyInformation from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPregnancyInformation";
import MRObservationPregnancyRisk from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPregnancyRisk";
import MRObservationPresentationAtBirthClinic from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPresentationAtBirthClinic";
import MRObservationPreviousPregnancy from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPreviousPregnancy";
import MRObservationPuerperiumNormal from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationPuerperiumNormal";
import MRObservationSingletonPregnancy from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationSingletonPregnancy";
import MRObservationSpecialFindings from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationSpecialFindings";
import MRObservationTimelyDevelopment from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationTimelyDevelopment";
import MRObservationU3Performed from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationU3Performed";
import MRObservationUltrasound from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUltrasound";
import MRObservationUrine from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUrine";
import MRObservationUrineBlood from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUrineBlood";
import MRObservationUrineNitrite from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUrineNitrite";
import MRObservationUrineProtein from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUrineProtein";
import MRObservationUrineSediment from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUrineSediment";
import MRObservationUrineSugar from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationUrineSugar";
import MRObservationVaginalExamination from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationVaginalExamination";
import MRObservationVaricosis from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationVaricosis";
import MRObservationWeightChild from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationWeightChild";
import MRObservationWeightMother from "./../Definitions/KBV/MR/1.00.000/Profile/MRObservationWeightMother";
import MROrganization from "./../Definitions/KBV/MR/1.00.000/Profile/MROrganization";
import MRPatientChild from "./../Definitions/KBV/MR/1.00.000/Profile/MRPatientChild";
import MRPatientMother from "./../Definitions/KBV/MR/1.00.000/Profile/MRPatientMother";
import MRPractitioner from "./../Definitions/KBV/MR/1.00.000/Profile/MRPractitioner";
import MRProcedureAntiDProphylaxis from "./../Definitions/KBV/MR/1.00.000/Profile/MRProcedureAntiDProphylaxis";
import MRProcedureCounselling from "./../Definitions/KBV/MR/1.00.000/Profile/MRProcedureCounselling";

export type VaccinationResource =
    | VaccinationBundleEntry
    | VaccinationCompositionAddendum
    | VaccinationCompositionPrime
    | VaccinationCondition
    | VaccinationObservationImmunizationStatus
    | VaccinationOrganization
    | VaccinationPatient
    | VaccinationPractitioner
    | VaccinationPractitionerrole
    | VaccinationPractitionerroleAddendum
    | VaccinationPractitionerAddendum
    | VaccinationProvenance
    | VaccinationRecordAddendum
    | VaccinationRecordPrime;

export type ZAEBResource =
    | ZAEBBundle
    | ZAEBComposition
    | ZAEBGaplessDocumentation
    | ZAEBObservation
    | ZAEBOrganization
    | ZAEBPatient;

export type MRResource =
    | MRAppointmentPregnancy
    | MRBundle
    | MRClinicalImpressionBirthExaminationChildInformation
    | MRClinicalImpressionBirthExaminationDeliveryInformation
    | MRClinicalImpressionFirstExaminationAfterChildbirth
    | MRClinicalImpressionInitialExamination
    | MRClinicalImpressionPregnancyChartEntry
    | MRClinicalImpressionPregnancyExaminationDischargeSummary
    | MRClinicalImpressionSecondExaminationAfterChildbirth
    | MRComposition
    | MRDiagnosticReportUltrasoundI
    | MRDiagnosticReportUltrasoundII
    | MRDiagnosticReportUltrasoundIII
    | MREncounterArrivalMaternityHospital
    | MREncounterGeneral
    | MREncounterInpatientTreatment
    | MRObservationAbnormalities
    | MRObservationAdviceOnIodineIntake
    | MRObservationAge
    | MRObservationAntiDProphylaxisPostPartum
    | MRObservationApgarScore
    | MRObservationBaselineWeightMother
    | MRObservationBiometricsI
    | MRObservationBiometricsII
    | MRObservationBiometricsIII
    | MRObservationBirthHeight
    | MRObservationBirthMode
    | MRObservationBloodGroupSerology
    | MRObservationBloodGroupSerologyChild
    | MRObservationBloodPressure
    | MRObservationBreastfeedingBehavior
    | MRObservationCalculatedDeliveryDate
    | MRObservationCardiotocography
    | MRObservationCatalogueA
    | MRObservationChildIsHealthy
    | MRObservationChildMovement
    | MRObservationChildPosition
    | MRObservationConsultationInitiated
    | MRObservationDateDeterminationChildbirth
    | MRObservationDateOfConception
    | MRObservationDeterminationOfPregnancy
    | MRObservationDirectCoombstest
    | MRObservationEdema
    | MRObservationExamination
    | MRObservationExternalBirth
    | MRObservationFindingsRequiredControl
    | MRObservationFundusHeight
    | MRObservationGeneralInformation
    | MRObservationGravida
    | MRObservationGynecologicalFindingNormal
    | MRObservationHeadCircumference
    | MRObservationHeartAction
    | MRObservationHeartSoundsChild
    | MRObservationHeight
    | MRObservationHIVTestPerformed
    | MRObservationImmunizationStatus
    | MRObservationInpatientStayDuringPregnancy
    | MRObservationLiveBirth
    | MRObservationLocalisationPlacenta
    | MRObservationMalformation
    | MRObservationMenstrualCycle
    | MRObservationMorphology
    | MRObservationNeedOfTreatmentU3
    | MRObservationNumberOfCheckups
    | MRObservationoGTTDiagnosistest
    | MRObservationoGTTPretest
    | MRObservationOtherBloodGroupSystems
    | MRObservationOtherUltrasoundStudies
    | MRObservationPara
    | MRObservationPercentile
    | MRObservationpHValueUmbilicalArtery
    | MRObservationPregnancyInformation
    | MRObservationPregnancyRisk
    | MRObservationPresentationAtBirthClinic
    | MRObservationPreviousPregnancy
    | MRObservationPuerperiumNormal
    | MRObservationSingletonPregnancy
    | MRObservationSpecialFindings
    | MRObservationTimelyDevelopment
    | MRObservationU3Performed
    | MRObservationUltrasound
    | MRObservationUrine
    | MRObservationUrineBlood
    | MRObservationUrineNitrite
    | MRObservationUrineProtein
    | MRObservationUrineSediment
    | MRObservationUrineSugar
    | MRObservationVaginalExamination
    | MRObservationVaricosis
    | MRObservationWeightChild
    | MRObservationWeightMother
    | MROrganization
    | MRPatientChild
    | MRPatientMother
    | MRPractitioner
    | MRProcedureAntiDProphylaxis
    | MRProcedureCounselling;

export type KBVResource = VaccinationResource | ZAEBResource | MRResource;

export type MIOType = Readonly<{
    profile: string;
    type: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    version: string;
}>;

export type KBVBundleResource = VaccinationBundleEntry | ZAEBBundle | MRBundle;

export const BundleTypes: MIOTypeList = [
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry",
        type: VaccinationBundleEntry,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle",
        type: ZAEBBundle,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Bundle",
        type: MRBundle,
        version: "1.00.000"
    }
];
export type MIOTypeList = MIOType[];

export const MIOTypes: MIOTypeList = [
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry",
        type: VaccinationBundleEntry,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Addendum",
        type: VaccinationCompositionAddendum,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Composition_Prime",
        type: VaccinationCompositionPrime,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Condition",
        type: VaccinationCondition,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Observation_Immunization_Status",
        type: VaccinationObservationImmunizationStatus,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization",
        type: VaccinationOrganization,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Patient",
        type: VaccinationPatient,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner",
        type: VaccinationPractitioner,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole",
        type: VaccinationPractitionerrole,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum",
        type: VaccinationPractitionerroleAddendum,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum",
        type: VaccinationPractitionerAddendum,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Provenance",
        type: VaccinationProvenance,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Addendum",
        type: VaccinationRecordAddendum,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Record_Prime",
        type: VaccinationRecordPrime,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle",
        type: ZAEBBundle,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Composition",
        type: ZAEBComposition,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Gapless_Documentation",
        type: ZAEBGaplessDocumentation,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation",
        type: ZAEBObservation,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Organization",
        type: ZAEBOrganization,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient",
        type: ZAEBPatient,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Appointment_Pregnancy",
        type: MRAppointmentPregnancy,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Bundle",
        type: MRBundle,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Child_Information",
        type: MRClinicalImpressionBirthExaminationChildInformation,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Birth_Examination_Delivery_Information",
        type: MRClinicalImpressionBirthExaminationDeliveryInformation,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth",
        type: MRClinicalImpressionFirstExaminationAfterChildbirth,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Initial_Examination",
        type: MRClinicalImpressionInitialExamination,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Chart_Entry",
        type: MRClinicalImpressionPregnancyChartEntry,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Examination_Discharge_Summary",
        type: MRClinicalImpressionPregnancyExaminationDischargeSummary,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Second_Examination_After_Childbirth",
        type: MRClinicalImpressionSecondExaminationAfterChildbirth,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Composition",
        type: MRComposition,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_I",
        type: MRDiagnosticReportUltrasoundI,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_II",
        type: MRDiagnosticReportUltrasoundII,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_III",
        type: MRDiagnosticReportUltrasoundIII,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Arrival_Maternity_Hospital",
        type: MREncounterArrivalMaternityHospital,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General",
        type: MREncounterGeneral,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_Inpatient_Treatment",
        type: MREncounterInpatientTreatment,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities",
        type: MRObservationAbnormalities,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake",
        type: MRObservationAdviceOnIodineIntake,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Age",
        type: MRObservationAge,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum",
        type: MRObservationAntiDProphylaxisPostPartum,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Apgar_Score",
        type: MRObservationApgarScore,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Baseline_Weight_Mother",
        type: MRObservationBaselineWeightMother,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I",
        type: MRObservationBiometricsI,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II",
        type: MRObservationBiometricsII,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_III",
        type: MRObservationBiometricsIII,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Height",
        type: MRObservationBirthHeight,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Birth_Mode",
        type: MRObservationBirthMode,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology",
        type: MRObservationBloodGroupSerology,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child",
        type: MRObservationBloodGroupSerologyChild,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure",
        type: MRObservationBloodPressure,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Breastfeeding_Behavior",
        type: MRObservationBreastfeedingBehavior,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Calculated_Delivery_Date",
        type: MRObservationCalculatedDeliveryDate,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Cardiotocography",
        type: MRObservationCardiotocography,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Catalogue_A",
        type: MRObservationCatalogueA,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Is_Healthy",
        type: MRObservationChildIsHealthy,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Movement",
        type: MRObservationChildMovement,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Child_Position",
        type: MRObservationChildPosition,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated",
        type: MRObservationConsultationInitiated,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Determination_Childbirth",
        type: MRObservationDateDeterminationChildbirth,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Date_Of_Conception",
        type: MRObservationDateOfConception,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Determination_Of_Pregnancy",
        type: MRObservationDeterminationOfPregnancy,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest",
        type: MRObservationDirectCoombstest,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Edema",
        type: MRObservationEdema,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Examination",
        type: MRObservationExamination,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_External_Birth",
        type: MRObservationExternalBirth,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control",
        type: MRObservationFindingsRequiredControl,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Fundus_Height",
        type: MRObservationFundusHeight,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_General_Information",
        type: MRObservationGeneralInformation,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gravida",
        type: MRObservationGravida,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal",
        type: MRObservationGynecologicalFindingNormal,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Head_Circumference",
        type: MRObservationHeadCircumference,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action",
        type: MRObservationHeartAction,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Sounds_Child",
        type: MRObservationHeartSoundsChild,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Height",
        type: MRObservationHeight,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_HIV_Test_Performed",
        type: MRObservationHIVTestPerformed,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Immunization_Status",
        type: MRObservationImmunizationStatus,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Inpatient_Stay_During_Pregnancy",
        type: MRObservationInpatientStayDuringPregnancy,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Live_Birth",
        type: MRObservationLiveBirth,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta",
        type: MRObservationLocalisationPlacenta,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Malformation",
        type: MRObservationMalformation,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Menstrual_Cycle",
        type: MRObservationMenstrualCycle,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology",
        type: MRObservationMorphology,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Need_Of_Treatment_U3",
        type: MRObservationNeedOfTreatmentU3,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Number_Of_Checkups",
        type: MRObservationNumberOfCheckups,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Diagnosistest",
        type: MRObservationoGTTDiagnosistest,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_oGTT_Pretest",
        type: MRObservationoGTTPretest,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Blood_Group_Systems",
        type: MRObservationOtherBloodGroupSystems,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Other_Ultrasound_Studies",
        type: MRObservationOtherUltrasoundStudies,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Para",
        type: MRObservationPara,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile",
        type: MRObservationPercentile,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_pH_Value_Umbilical_Artery",
        type: MRObservationpHValueUmbilicalArtery,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information",
        type: MRObservationPregnancyInformation,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Risk",
        type: MRObservationPregnancyRisk,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Presentation_At_Birth_Clinic",
        type: MRObservationPresentationAtBirthClinic,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Previous_Pregnancy",
        type: MRObservationPreviousPregnancy,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal",
        type: MRObservationPuerperiumNormal,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy",
        type: MRObservationSingletonPregnancy,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Special_Findings",
        type: MRObservationSpecialFindings,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development",
        type: MRObservationTimelyDevelopment,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_U3_Performed",
        type: MRObservationU3Performed,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Ultrasound",
        type: MRObservationUltrasound,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine",
        type: MRObservationUrine,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Blood",
        type: MRObservationUrineBlood,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Nitrite",
        type: MRObservationUrineNitrite,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Protein",
        type: MRObservationUrineProtein,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sediment",
        type: MRObservationUrineSediment,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Urine_Sugar",
        type: MRObservationUrineSugar,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Vaginal_Examination",
        type: MRObservationVaginalExamination,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Varicosis",
        type: MRObservationVaricosis,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Child",
        type: MRObservationWeightChild,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Weight_Mother",
        type: MRObservationWeightMother,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization",
        type: MROrganization,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child",
        type: MRPatientChild,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother",
        type: MRPatientMother,
        version: "1.00.000"
    },
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner",
        type: MRPractitioner,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Anti_D_Prophylaxis",
        type: MRProcedureAntiDProphylaxis,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Procedure_Counselling",
        type: MRProcedureCounselling,
        version: "1.00.000"
    }
];
