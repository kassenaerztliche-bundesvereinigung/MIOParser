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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/resource-types

type Resourcetypes =
    | "Account"
    | "ActivityDefinition"
    | "AdverseEvent"
    | "AllergyIntolerance"
    | "Appointment"
    | "AppointmentResponse"
    | "AuditEvent"
    | "Basic"
    | "Binary"
    | "BiologicallyDerivedProduct"
    | "BodyStructure"
    | "Bundle"
    | "CapabilityStatement"
    | "CarePlan"
    | "CareTeam"
    | "CatalogEntry"
    | "ChargeItem"
    | "ChargeItemDefinition"
    | "Claim"
    | "ClaimResponse"
    | "ClinicalImpression"
    | "CodeSystem"
    | "Communication"
    | "CommunicationRequest"
    | "CompartmentDefinition"
    | "Composition"
    | "ConceptMap"
    | "Condition"
    | "Consent"
    | "Contract"
    | "Coverage"
    | "CoverageEligibilityRequest"
    | "CoverageEligibilityResponse"
    | "DetectedIssue"
    | "Device"
    | "DeviceDefinition"
    | "DeviceMetric"
    | "DeviceRequest"
    | "DeviceUseStatement"
    | "DiagnosticReport"
    | "DocumentManifest"
    | "DocumentReference"
    | "DomainResource"
    | "EffectEvidenceSynthesis"
    | "Encounter"
    | "Endpoint"
    | "EnrollmentRequest"
    | "EnrollmentResponse"
    | "EpisodeOfCare"
    | "EventDefinition"
    | "Evidence"
    | "EvidenceVariable"
    | "ExampleScenario"
    | "ExplanationOfBenefit"
    | "FamilyMemberHistory"
    | "Flag"
    | "Goal"
    | "GraphDefinition"
    | "Group"
    | "GuidanceResponse"
    | "HealthcareService"
    | "ImagingStudy"
    | "Immunization"
    | "ImmunizationEvaluation"
    | "ImmunizationRecommendation"
    | "ImplementationGuide"
    | "InsurancePlan"
    | "Invoice"
    | "Library"
    | "Linkage"
    | "List"
    | "Location"
    | "Measure"
    | "MeasureReport"
    | "Media"
    | "Medication"
    | "MedicationAdministration"
    | "MedicationDispense"
    | "MedicationKnowledge"
    | "MedicationRequest"
    | "MedicationStatement"
    | "MedicinalProduct"
    | "MedicinalProductAuthorization"
    | "MedicinalProductContraindication"
    | "MedicinalProductIndication"
    | "MedicinalProductIngredient"
    | "MedicinalProductInteraction"
    | "MedicinalProductManufactured"
    | "MedicinalProductPackaged"
    | "MedicinalProductPharmaceutical"
    | "MedicinalProductUndesirableEffect"
    | "MessageDefinition"
    | "MessageHeader"
    | "MolecularSequence"
    | "NamingSystem"
    | "NutritionOrder"
    | "Observation"
    | "ObservationDefinition"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "OrganizationAffiliation"
    | "Parameters"
    | "Patient"
    | "PaymentNotice"
    | "PaymentReconciliation"
    | "Person"
    | "PlanDefinition"
    | "Practitioner"
    | "PractitionerRole"
    | "Procedure"
    | "Provenance"
    | "Questionnaire"
    | "QuestionnaireResponse"
    | "RelatedPerson"
    | "RequestGroup"
    | "ResearchDefinition"
    | "ResearchElementDefinition"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "RiskEvidenceSynthesis"
    | "Schedule"
    | "SearchParameter"
    | "ServiceRequest"
    | "Slot"
    | "Specimen"
    | "SpecimenDefinition"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "Substance"
    | "SubstanceNucleicAcid"
    | "SubstancePolymer"
    | "SubstanceProtein"
    | "SubstanceReferenceInformation"
    | "SubstanceSourceMaterial"
    | "SubstanceSpecification"
    | "SupplyDelivery"
    | "SupplyRequest"
    | "Task"
    | "TerminologyCapabilities"
    | "TestReport"
    | "TestScript"
    | "ValueSet"
    | "VerificationResult"
    | "VisionPrescription";

type ResourcetypesType = t.KeyofC<{
    Account: null;
    ActivityDefinition: null;
    AdverseEvent: null;
    AllergyIntolerance: null;
    Appointment: null;
    AppointmentResponse: null;
    AuditEvent: null;
    Basic: null;
    Binary: null;
    BiologicallyDerivedProduct: null;
    BodyStructure: null;
    Bundle: null;
    CapabilityStatement: null;
    CarePlan: null;
    CareTeam: null;
    CatalogEntry: null;
    ChargeItem: null;
    ChargeItemDefinition: null;
    Claim: null;
    ClaimResponse: null;
    ClinicalImpression: null;
    CodeSystem: null;
    Communication: null;
    CommunicationRequest: null;
    CompartmentDefinition: null;
    Composition: null;
    ConceptMap: null;
    Condition: null;
    Consent: null;
    Contract: null;
    Coverage: null;
    CoverageEligibilityRequest: null;
    CoverageEligibilityResponse: null;
    DetectedIssue: null;
    Device: null;
    DeviceDefinition: null;
    DeviceMetric: null;
    DeviceRequest: null;
    DeviceUseStatement: null;
    DiagnosticReport: null;
    DocumentManifest: null;
    DocumentReference: null;
    DomainResource: null;
    EffectEvidenceSynthesis: null;
    Encounter: null;
    Endpoint: null;
    EnrollmentRequest: null;
    EnrollmentResponse: null;
    EpisodeOfCare: null;
    EventDefinition: null;
    Evidence: null;
    EvidenceVariable: null;
    ExampleScenario: null;
    ExplanationOfBenefit: null;
    FamilyMemberHistory: null;
    Flag: null;
    Goal: null;
    GraphDefinition: null;
    Group: null;
    GuidanceResponse: null;
    HealthcareService: null;
    ImagingStudy: null;
    Immunization: null;
    ImmunizationEvaluation: null;
    ImmunizationRecommendation: null;
    ImplementationGuide: null;
    InsurancePlan: null;
    Invoice: null;
    Library: null;
    Linkage: null;
    List: null;
    Location: null;
    Measure: null;
    MeasureReport: null;
    Media: null;
    Medication: null;
    MedicationAdministration: null;
    MedicationDispense: null;
    MedicationKnowledge: null;
    MedicationRequest: null;
    MedicationStatement: null;
    MedicinalProduct: null;
    MedicinalProductAuthorization: null;
    MedicinalProductContraindication: null;
    MedicinalProductIndication: null;
    MedicinalProductIngredient: null;
    MedicinalProductInteraction: null;
    MedicinalProductManufactured: null;
    MedicinalProductPackaged: null;
    MedicinalProductPharmaceutical: null;
    MedicinalProductUndesirableEffect: null;
    MessageDefinition: null;
    MessageHeader: null;
    MolecularSequence: null;
    NamingSystem: null;
    NutritionOrder: null;
    Observation: null;
    ObservationDefinition: null;
    OperationDefinition: null;
    OperationOutcome: null;
    Organization: null;
    OrganizationAffiliation: null;
    Parameters: null;
    Patient: null;
    PaymentNotice: null;
    PaymentReconciliation: null;
    Person: null;
    PlanDefinition: null;
    Practitioner: null;
    PractitionerRole: null;
    Procedure: null;
    Provenance: null;
    Questionnaire: null;
    QuestionnaireResponse: null;
    RelatedPerson: null;
    RequestGroup: null;
    ResearchDefinition: null;
    ResearchElementDefinition: null;
    ResearchStudy: null;
    ResearchSubject: null;
    Resource: null;
    RiskAssessment: null;
    RiskEvidenceSynthesis: null;
    Schedule: null;
    SearchParameter: null;
    ServiceRequest: null;
    Slot: null;
    Specimen: null;
    SpecimenDefinition: null;
    StructureDefinition: null;
    StructureMap: null;
    Subscription: null;
    Substance: null;
    SubstanceNucleicAcid: null;
    SubstancePolymer: null;
    SubstanceProtein: null;
    SubstanceReferenceInformation: null;
    SubstanceSourceMaterial: null;
    SubstanceSpecification: null;
    SupplyDelivery: null;
    SupplyRequest: null;
    Task: null;
    TerminologyCapabilities: null;
    TestReport: null;
    TestScript: null;
    ValueSet: null;
    VerificationResult: null;
    VisionPrescription: null;
}>;

const Resourcetypes: ResourcetypesType = t.keyof({
    Account: null,
    ActivityDefinition: null,
    AdverseEvent: null,
    AllergyIntolerance: null,
    Appointment: null,
    AppointmentResponse: null,
    AuditEvent: null,
    Basic: null,
    Binary: null,
    BiologicallyDerivedProduct: null,
    BodyStructure: null,
    Bundle: null,
    CapabilityStatement: null,
    CarePlan: null,
    CareTeam: null,
    CatalogEntry: null,
    ChargeItem: null,
    ChargeItemDefinition: null,
    Claim: null,
    ClaimResponse: null,
    ClinicalImpression: null,
    CodeSystem: null,
    Communication: null,
    CommunicationRequest: null,
    CompartmentDefinition: null,
    Composition: null,
    ConceptMap: null,
    Condition: null,
    Consent: null,
    Contract: null,
    Coverage: null,
    CoverageEligibilityRequest: null,
    CoverageEligibilityResponse: null,
    DetectedIssue: null,
    Device: null,
    DeviceDefinition: null,
    DeviceMetric: null,
    DeviceRequest: null,
    DeviceUseStatement: null,
    DiagnosticReport: null,
    DocumentManifest: null,
    DocumentReference: null,
    DomainResource: null,
    EffectEvidenceSynthesis: null,
    Encounter: null,
    Endpoint: null,
    EnrollmentRequest: null,
    EnrollmentResponse: null,
    EpisodeOfCare: null,
    EventDefinition: null,
    Evidence: null,
    EvidenceVariable: null,
    ExampleScenario: null,
    ExplanationOfBenefit: null,
    FamilyMemberHistory: null,
    Flag: null,
    Goal: null,
    GraphDefinition: null,
    Group: null,
    GuidanceResponse: null,
    HealthcareService: null,
    ImagingStudy: null,
    Immunization: null,
    ImmunizationEvaluation: null,
    ImmunizationRecommendation: null,
    ImplementationGuide: null,
    InsurancePlan: null,
    Invoice: null,
    Library: null,
    Linkage: null,
    List: null,
    Location: null,
    Measure: null,
    MeasureReport: null,
    Media: null,
    Medication: null,
    MedicationAdministration: null,
    MedicationDispense: null,
    MedicationKnowledge: null,
    MedicationRequest: null,
    MedicationStatement: null,
    MedicinalProduct: null,
    MedicinalProductAuthorization: null,
    MedicinalProductContraindication: null,
    MedicinalProductIndication: null,
    MedicinalProductIngredient: null,
    MedicinalProductInteraction: null,
    MedicinalProductManufactured: null,
    MedicinalProductPackaged: null,
    MedicinalProductPharmaceutical: null,
    MedicinalProductUndesirableEffect: null,
    MessageDefinition: null,
    MessageHeader: null,
    MolecularSequence: null,
    NamingSystem: null,
    NutritionOrder: null,
    Observation: null,
    ObservationDefinition: null,
    OperationDefinition: null,
    OperationOutcome: null,
    Organization: null,
    OrganizationAffiliation: null,
    Parameters: null,
    Patient: null,
    PaymentNotice: null,
    PaymentReconciliation: null,
    Person: null,
    PlanDefinition: null,
    Practitioner: null,
    PractitionerRole: null,
    Procedure: null,
    Provenance: null,
    Questionnaire: null,
    QuestionnaireResponse: null,
    RelatedPerson: null,
    RequestGroup: null,
    ResearchDefinition: null,
    ResearchElementDefinition: null,
    ResearchStudy: null,
    ResearchSubject: null,
    Resource: null,
    RiskAssessment: null,
    RiskEvidenceSynthesis: null,
    Schedule: null,
    SearchParameter: null,
    ServiceRequest: null,
    Slot: null,
    Specimen: null,
    SpecimenDefinition: null,
    StructureDefinition: null,
    StructureMap: null,
    Subscription: null,
    Substance: null,
    SubstanceNucleicAcid: null,
    SubstancePolymer: null,
    SubstanceProtein: null,
    SubstanceReferenceInformation: null,
    SubstanceSourceMaterial: null,
    SubstanceSpecification: null,
    SupplyDelivery: null,
    SupplyRequest: null,
    Task: null,
    TerminologyCapabilities: null,
    TestReport: null,
    TestScript: null,
    ValueSet: null,
    VerificationResult: null,
    VisionPrescription: null
});
export const ResourcetypesArray: string[] = [
    "Account",
    "ActivityDefinition",
    "AdverseEvent",
    "AllergyIntolerance",
    "Appointment",
    "AppointmentResponse",
    "AuditEvent",
    "Basic",
    "Binary",
    "BiologicallyDerivedProduct",
    "BodyStructure",
    "Bundle",
    "CapabilityStatement",
    "CarePlan",
    "CareTeam",
    "CatalogEntry",
    "ChargeItem",
    "ChargeItemDefinition",
    "Claim",
    "ClaimResponse",
    "ClinicalImpression",
    "CodeSystem",
    "Communication",
    "CommunicationRequest",
    "CompartmentDefinition",
    "Composition",
    "ConceptMap",
    "Condition",
    "Consent",
    "Contract",
    "Coverage",
    "CoverageEligibilityRequest",
    "CoverageEligibilityResponse",
    "DetectedIssue",
    "Device",
    "DeviceDefinition",
    "DeviceMetric",
    "DeviceRequest",
    "DeviceUseStatement",
    "DiagnosticReport",
    "DocumentManifest",
    "DocumentReference",
    "DomainResource",
    "EffectEvidenceSynthesis",
    "Encounter",
    "Endpoint",
    "EnrollmentRequest",
    "EnrollmentResponse",
    "EpisodeOfCare",
    "EventDefinition",
    "Evidence",
    "EvidenceVariable",
    "ExampleScenario",
    "ExplanationOfBenefit",
    "FamilyMemberHistory",
    "Flag",
    "Goal",
    "GraphDefinition",
    "Group",
    "GuidanceResponse",
    "HealthcareService",
    "ImagingStudy",
    "Immunization",
    "ImmunizationEvaluation",
    "ImmunizationRecommendation",
    "ImplementationGuide",
    "InsurancePlan",
    "Invoice",
    "Library",
    "Linkage",
    "List",
    "Location",
    "Measure",
    "MeasureReport",
    "Media",
    "Medication",
    "MedicationAdministration",
    "MedicationDispense",
    "MedicationKnowledge",
    "MedicationRequest",
    "MedicationStatement",
    "MedicinalProduct",
    "MedicinalProductAuthorization",
    "MedicinalProductContraindication",
    "MedicinalProductIndication",
    "MedicinalProductIngredient",
    "MedicinalProductInteraction",
    "MedicinalProductManufactured",
    "MedicinalProductPackaged",
    "MedicinalProductPharmaceutical",
    "MedicinalProductUndesirableEffect",
    "MessageDefinition",
    "MessageHeader",
    "MolecularSequence",
    "NamingSystem",
    "NutritionOrder",
    "Observation",
    "ObservationDefinition",
    "OperationDefinition",
    "OperationOutcome",
    "Organization",
    "OrganizationAffiliation",
    "Parameters",
    "Patient",
    "PaymentNotice",
    "PaymentReconciliation",
    "Person",
    "PlanDefinition",
    "Practitioner",
    "PractitionerRole",
    "Procedure",
    "Provenance",
    "Questionnaire",
    "QuestionnaireResponse",
    "RelatedPerson",
    "RequestGroup",
    "ResearchDefinition",
    "ResearchElementDefinition",
    "ResearchStudy",
    "ResearchSubject",
    "Resource",
    "RiskAssessment",
    "RiskEvidenceSynthesis",
    "Schedule",
    "SearchParameter",
    "ServiceRequest",
    "Slot",
    "Specimen",
    "SpecimenDefinition",
    "StructureDefinition",
    "StructureMap",
    "Subscription",
    "Substance",
    "SubstanceNucleicAcid",
    "SubstancePolymer",
    "SubstanceProtein",
    "SubstanceReferenceInformation",
    "SubstanceSourceMaterial",
    "SubstanceSpecification",
    "SupplyDelivery",
    "SupplyRequest",
    "Task",
    "TerminologyCapabilities",
    "TestReport",
    "TestScript",
    "ValueSet",
    "VerificationResult",
    "VisionPrescription"
];

export const ResourcetypesValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            {
                code: "Account",
                display: "Account"
            },
            {
                code: "ActivityDefinition",
                display: "ActivityDefinition"
            },
            {
                code: "AdverseEvent",
                display: "AdverseEvent"
            },
            {
                code: "AllergyIntolerance",
                display: "AllergyIntolerance"
            },
            {
                code: "Appointment",
                display: "Appointment"
            },
            {
                code: "AppointmentResponse",
                display: "AppointmentResponse"
            },
            {
                code: "AuditEvent",
                display: "AuditEvent"
            },
            {
                code: "Basic",
                display: "Basic"
            },
            {
                code: "Binary",
                display: "Binary"
            },
            {
                code: "BiologicallyDerivedProduct",
                display: "BiologicallyDerivedProduct"
            },
            {
                code: "BodyStructure",
                display: "BodyStructure"
            },
            {
                code: "Bundle",
                display: "Bundle"
            },
            {
                code: "CapabilityStatement",
                display: "CapabilityStatement"
            },
            {
                code: "CarePlan",
                display: "CarePlan"
            },
            {
                code: "CareTeam",
                display: "CareTeam"
            },
            {
                code: "CatalogEntry",
                display: "CatalogEntry"
            },
            {
                code: "ChargeItem",
                display: "ChargeItem"
            },
            {
                code: "ChargeItemDefinition",
                display: "ChargeItemDefinition"
            },
            {
                code: "Claim",
                display: "Claim"
            },
            {
                code: "ClaimResponse",
                display: "ClaimResponse"
            },
            {
                code: "ClinicalImpression",
                display: "ClinicalImpression"
            },
            {
                code: "CodeSystem",
                display: "CodeSystem"
            },
            {
                code: "Communication",
                display: "Communication"
            },
            {
                code: "CommunicationRequest",
                display: "CommunicationRequest"
            },
            {
                code: "CompartmentDefinition",
                display: "CompartmentDefinition"
            },
            {
                code: "Composition",
                display: "Composition"
            },
            {
                code: "ConceptMap",
                display: "ConceptMap"
            },
            {
                code: "Condition",
                display: "Condition"
            },
            {
                code: "Consent",
                display: "Consent"
            },
            {
                code: "Contract",
                display: "Contract"
            },
            {
                code: "Coverage",
                display: "Coverage"
            },
            {
                code: "CoverageEligibilityRequest",
                display: "CoverageEligibilityRequest"
            },
            {
                code: "CoverageEligibilityResponse",
                display: "CoverageEligibilityResponse"
            },
            {
                code: "DetectedIssue",
                display: "DetectedIssue"
            },
            {
                code: "Device",
                display: "Device"
            },
            {
                code: "DeviceDefinition",
                display: "DeviceDefinition"
            },
            {
                code: "DeviceMetric",
                display: "DeviceMetric"
            },
            {
                code: "DeviceRequest",
                display: "DeviceRequest"
            },
            {
                code: "DeviceUseStatement",
                display: "DeviceUseStatement"
            },
            {
                code: "DiagnosticReport",
                display: "DiagnosticReport"
            },
            {
                code: "DocumentManifest",
                display: "DocumentManifest"
            },
            {
                code: "DocumentReference",
                display: "DocumentReference"
            },
            {
                code: "DomainResource",
                display: "DomainResource"
            },
            {
                code: "EffectEvidenceSynthesis",
                display: "EffectEvidenceSynthesis"
            },
            {
                code: "Encounter",
                display: "Encounter"
            },
            {
                code: "Endpoint",
                display: "Endpoint"
            },
            {
                code: "EnrollmentRequest",
                display: "EnrollmentRequest"
            },
            {
                code: "EnrollmentResponse",
                display: "EnrollmentResponse"
            },
            {
                code: "EpisodeOfCare",
                display: "EpisodeOfCare"
            },
            {
                code: "EventDefinition",
                display: "EventDefinition"
            },
            {
                code: "Evidence",
                display: "Evidence"
            },
            {
                code: "EvidenceVariable",
                display: "EvidenceVariable"
            },
            {
                code: "ExampleScenario",
                display: "ExampleScenario"
            },
            {
                code: "ExplanationOfBenefit",
                display: "ExplanationOfBenefit"
            },
            {
                code: "FamilyMemberHistory",
                display: "FamilyMemberHistory"
            },
            {
                code: "Flag",
                display: "Flag"
            },
            {
                code: "Goal",
                display: "Goal"
            },
            {
                code: "GraphDefinition",
                display: "GraphDefinition"
            },
            {
                code: "Group",
                display: "Group"
            },
            {
                code: "GuidanceResponse",
                display: "GuidanceResponse"
            },
            {
                code: "HealthcareService",
                display: "HealthcareService"
            },
            {
                code: "ImagingStudy",
                display: "ImagingStudy"
            },
            {
                code: "Immunization",
                display: "Immunization"
            },
            {
                code: "ImmunizationEvaluation",
                display: "ImmunizationEvaluation"
            },
            {
                code: "ImmunizationRecommendation",
                display: "ImmunizationRecommendation"
            },
            {
                code: "ImplementationGuide",
                display: "ImplementationGuide"
            },
            {
                code: "InsurancePlan",
                display: "InsurancePlan"
            },
            {
                code: "Invoice",
                display: "Invoice"
            },
            {
                code: "Library",
                display: "Library"
            },
            {
                code: "Linkage",
                display: "Linkage"
            },
            {
                code: "List",
                display: "List"
            },
            {
                code: "Location",
                display: "Location"
            },
            {
                code: "Measure",
                display: "Measure"
            },
            {
                code: "MeasureReport",
                display: "MeasureReport"
            },
            {
                code: "Media",
                display: "Media"
            },
            {
                code: "Medication",
                display: "Medication"
            },
            {
                code: "MedicationAdministration",
                display: "MedicationAdministration"
            },
            {
                code: "MedicationDispense",
                display: "MedicationDispense"
            },
            {
                code: "MedicationKnowledge",
                display: "MedicationKnowledge"
            },
            {
                code: "MedicationRequest",
                display: "MedicationRequest"
            },
            {
                code: "MedicationStatement",
                display: "MedicationStatement"
            },
            {
                code: "MedicinalProduct",
                display: "MedicinalProduct"
            },
            {
                code: "MedicinalProductAuthorization",
                display: "MedicinalProductAuthorization"
            },
            {
                code: "MedicinalProductContraindication",
                display: "MedicinalProductContraindication"
            },
            {
                code: "MedicinalProductIndication",
                display: "MedicinalProductIndication"
            },
            {
                code: "MedicinalProductIngredient",
                display: "MedicinalProductIngredient"
            },
            {
                code: "MedicinalProductInteraction",
                display: "MedicinalProductInteraction"
            },
            {
                code: "MedicinalProductManufactured",
                display: "MedicinalProductManufactured"
            },
            {
                code: "MedicinalProductPackaged",
                display: "MedicinalProductPackaged"
            },
            {
                code: "MedicinalProductPharmaceutical",
                display: "MedicinalProductPharmaceutical"
            },
            {
                code: "MedicinalProductUndesirableEffect",
                display: "MedicinalProductUndesirableEffect"
            },
            {
                code: "MessageDefinition",
                display: "MessageDefinition"
            },
            {
                code: "MessageHeader",
                display: "MessageHeader"
            },
            {
                code: "MolecularSequence",
                display: "MolecularSequence"
            },
            {
                code: "NamingSystem",
                display: "NamingSystem"
            },
            {
                code: "NutritionOrder",
                display: "NutritionOrder"
            },
            {
                code: "Observation",
                display: "Observation"
            },
            {
                code: "ObservationDefinition",
                display: "ObservationDefinition"
            },
            {
                code: "OperationDefinition",
                display: "OperationDefinition"
            },
            {
                code: "OperationOutcome",
                display: "OperationOutcome"
            },
            {
                code: "Organization",
                display: "Organization"
            },
            {
                code: "OrganizationAffiliation",
                display: "OrganizationAffiliation"
            },
            {
                code: "Parameters",
                display: "Parameters"
            },
            {
                code: "Patient",
                display: "Patient"
            },
            {
                code: "PaymentNotice",
                display: "PaymentNotice"
            },
            {
                code: "PaymentReconciliation",
                display: "PaymentReconciliation"
            },
            {
                code: "Person",
                display: "Person"
            },
            {
                code: "PlanDefinition",
                display: "PlanDefinition"
            },
            {
                code: "Practitioner",
                display: "Practitioner"
            },
            {
                code: "PractitionerRole",
                display: "PractitionerRole"
            },
            {
                code: "Procedure",
                display: "Procedure"
            },
            {
                code: "Provenance",
                display: "Provenance"
            },
            {
                code: "Questionnaire",
                display: "Questionnaire"
            },
            {
                code: "QuestionnaireResponse",
                display: "QuestionnaireResponse"
            },
            {
                code: "RelatedPerson",
                display: "RelatedPerson"
            },
            {
                code: "RequestGroup",
                display: "RequestGroup"
            },
            {
                code: "ResearchDefinition",
                display: "ResearchDefinition"
            },
            {
                code: "ResearchElementDefinition",
                display: "ResearchElementDefinition"
            },
            {
                code: "ResearchStudy",
                display: "ResearchStudy"
            },
            {
                code: "ResearchSubject",
                display: "ResearchSubject"
            },
            {
                code: "Resource",
                display: "Resource"
            },
            {
                code: "RiskAssessment",
                display: "RiskAssessment"
            },
            {
                code: "RiskEvidenceSynthesis",
                display: "RiskEvidenceSynthesis"
            },
            {
                code: "Schedule",
                display: "Schedule"
            },
            {
                code: "SearchParameter",
                display: "SearchParameter"
            },
            {
                code: "ServiceRequest",
                display: "ServiceRequest"
            },
            {
                code: "Slot",
                display: "Slot"
            },
            {
                code: "Specimen",
                display: "Specimen"
            },
            {
                code: "SpecimenDefinition",
                display: "SpecimenDefinition"
            },
            {
                code: "StructureDefinition",
                display: "StructureDefinition"
            },
            {
                code: "StructureMap",
                display: "StructureMap"
            },
            {
                code: "Subscription",
                display: "Subscription"
            },
            {
                code: "Substance",
                display: "Substance"
            },
            {
                code: "SubstanceNucleicAcid",
                display: "SubstanceNucleicAcid"
            },
            {
                code: "SubstancePolymer",
                display: "SubstancePolymer"
            },
            {
                code: "SubstanceProtein",
                display: "SubstanceProtein"
            },
            {
                code: "SubstanceReferenceInformation",
                display: "SubstanceReferenceInformation"
            },
            {
                code: "SubstanceSourceMaterial",
                display: "SubstanceSourceMaterial"
            },
            {
                code: "SubstanceSpecification",
                display: "SubstanceSpecification"
            },
            {
                code: "SupplyDelivery",
                display: "SupplyDelivery"
            },
            {
                code: "SupplyRequest",
                display: "SupplyRequest"
            },
            {
                code: "Task",
                display: "Task"
            },
            {
                code: "TerminologyCapabilities",
                display: "TerminologyCapabilities"
            },
            {
                code: "TestReport",
                display: "TestReport"
            },
            {
                code: "TestScript",
                display: "TestScript"
            },
            {
                code: "ValueSet",
                display: "ValueSet"
            },
            {
                code: "VerificationResult",
                display: "VerificationResult"
            },
            {
                code: "VisionPrescription",
                display: "VisionPrescription"
            }
        ]
    }
];

export default Resourcetypes;
