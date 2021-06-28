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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-kind

type Careplanactivitykind =
    | "Appointment"
    | "CommunicationRequest"
    | "DeviceRequest"
    | "MedicationRequest"
    | "NutritionOrder"
    | "Task"
    | "ServiceRequest"
    | "VisionPrescription";

const Careplanactivitykind: t.Type<Careplanactivitykind> = t.union(
    [
        t.literal("Appointment"),
        t.literal("CommunicationRequest"),
        t.literal("DeviceRequest"),
        t.literal("MedicationRequest"),
        t.literal("NutritionOrder"),
        t.literal("Task"),
        t.literal("ServiceRequest"),
        t.literal("VisionPrescription")
    ],
    "Careplanactivitykind"
);

export const CareplanactivitykindArray: string[] = [
    "Appointment",
    "CommunicationRequest",
    "DeviceRequest",
    "MedicationRequest",
    "NutritionOrder",
    "Task",
    "ServiceRequest",
    "VisionPrescription"
];

export const CareplanactivitykindValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            {
                code: "Appointment",
                display: "undefined"
            },
            {
                code: "CommunicationRequest",
                display: "undefined"
            },
            {
                code: "DeviceRequest",
                display: "undefined"
            },
            {
                code: "MedicationRequest",
                display: "undefined"
            },
            {
                code: "NutritionOrder",
                display: "undefined"
            },
            {
                code: "Task",
                display: "undefined"
            },
            {
                code: "ServiceRequest",
                display: "undefined"
            },
            {
                code: "VisionPrescription",
                display: "undefined"
            }
        ]
    },
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: [
            { code: "Account", display: "Account" },
            { code: "ActivityDefinition", display: "ActivityDefinition" },
            { code: "AdverseEvent", display: "AdverseEvent" },
            { code: "AllergyIntolerance", display: "AllergyIntolerance" },
            { code: "Appointment", display: "Appointment" },
            { code: "AppointmentResponse", display: "AppointmentResponse" },
            { code: "AuditEvent", display: "AuditEvent" },
            { code: "Basic", display: "Basic" },
            { code: "Binary", display: "Binary" },
            { code: "BiologicallyDerivedProduct", display: "BiologicallyDerivedProduct" },
            { code: "BodyStructure", display: "BodyStructure" },
            { code: "Bundle", display: "Bundle" },
            { code: "CapabilityStatement", display: "CapabilityStatement" },
            { code: "CarePlan", display: "CarePlan" },
            { code: "CareTeam", display: "CareTeam" },
            { code: "CatalogEntry", display: "CatalogEntry" },
            { code: "ChargeItem", display: "ChargeItem" },
            { code: "ChargeItemDefinition", display: "ChargeItemDefinition" },
            { code: "Claim", display: "Claim" },
            { code: "ClaimResponse", display: "ClaimResponse" },
            { code: "ClinicalImpression", display: "ClinicalImpression" },
            { code: "CodeSystem", display: "CodeSystem" },
            { code: "Communication", display: "Communication" },
            { code: "CommunicationRequest", display: "CommunicationRequest" },
            { code: "CompartmentDefinition", display: "CompartmentDefinition" },
            { code: "Composition", display: "Composition" },
            { code: "ConceptMap", display: "ConceptMap" },
            { code: "Condition", display: "Condition" },
            { code: "Consent", display: "Consent" },
            { code: "Contract", display: "Contract" },
            { code: "Coverage", display: "Coverage" },
            { code: "CoverageEligibilityRequest", display: "CoverageEligibilityRequest" },
            {
                code: "CoverageEligibilityResponse",
                display: "CoverageEligibilityResponse"
            },
            { code: "DetectedIssue", display: "DetectedIssue" },
            { code: "Device", display: "Device" },
            { code: "DeviceDefinition", display: "DeviceDefinition" },
            { code: "DeviceMetric", display: "DeviceMetric" },
            { code: "DeviceRequest", display: "DeviceRequest" },
            { code: "DeviceUseStatement", display: "DeviceUseStatement" },
            { code: "DiagnosticReport", display: "DiagnosticReport" },
            { code: "DocumentManifest", display: "DocumentManifest" },
            { code: "DocumentReference", display: "DocumentReference" },
            { code: "DomainResource", display: "DomainResource" },
            { code: "EffectEvidenceSynthesis", display: "EffectEvidenceSynthesis" },
            { code: "Encounter", display: "Encounter" },
            { code: "Endpoint", display: "Endpoint" },
            { code: "EnrollmentRequest", display: "EnrollmentRequest" },
            { code: "EnrollmentResponse", display: "EnrollmentResponse" },
            { code: "EpisodeOfCare", display: "EpisodeOfCare" },
            { code: "EventDefinition", display: "EventDefinition" },
            { code: "Evidence", display: "Evidence" },
            { code: "EvidenceVariable", display: "EvidenceVariable" },
            { code: "ExampleScenario", display: "ExampleScenario" },
            { code: "ExplanationOfBenefit", display: "ExplanationOfBenefit" },
            { code: "FamilyMemberHistory", display: "FamilyMemberHistory" },
            { code: "Flag", display: "Flag" },
            { code: "Goal", display: "Goal" },
            { code: "GraphDefinition", display: "GraphDefinition" },
            { code: "Group", display: "Group" },
            { code: "GuidanceResponse", display: "GuidanceResponse" },
            { code: "HealthcareService", display: "HealthcareService" },
            { code: "ImagingStudy", display: "ImagingStudy" },
            { code: "Immunization", display: "Immunization" },
            { code: "ImmunizationEvaluation", display: "ImmunizationEvaluation" },
            { code: "ImmunizationRecommendation", display: "ImmunizationRecommendation" },
            { code: "ImplementationGuide", display: "ImplementationGuide" },
            { code: "InsurancePlan", display: "InsurancePlan" },
            { code: "Invoice", display: "Invoice" },
            { code: "Library", display: "Library" },
            { code: "Linkage", display: "Linkage" },
            { code: "List", display: "List" },
            { code: "Location", display: "Location" },
            { code: "Measure", display: "Measure" },
            { code: "MeasureReport", display: "MeasureReport" },
            { code: "Media", display: "Media" },
            { code: "Medication", display: "Medication" },
            { code: "MedicationAdministration", display: "MedicationAdministration" },
            { code: "MedicationDispense", display: "MedicationDispense" },
            { code: "MedicationKnowledge", display: "MedicationKnowledge" },
            { code: "MedicationRequest", display: "MedicationRequest" },
            { code: "MedicationStatement", display: "MedicationStatement" },
            { code: "MedicinalProduct", display: "MedicinalProduct" },
            {
                code: "MedicinalProductAuthorization",
                display: "MedicinalProductAuthorization"
            },
            {
                code: "MedicinalProductContraindication",
                display: "MedicinalProductContraindication"
            },
            { code: "MedicinalProductIndication", display: "MedicinalProductIndication" },
            { code: "MedicinalProductIngredient", display: "MedicinalProductIngredient" },
            {
                code: "MedicinalProductInteraction",
                display: "MedicinalProductInteraction"
            },
            {
                code: "MedicinalProductManufactured",
                display: "MedicinalProductManufactured"
            },
            { code: "MedicinalProductPackaged", display: "MedicinalProductPackaged" },
            {
                code: "MedicinalProductPharmaceutical",
                display: "MedicinalProductPharmaceutical"
            },
            {
                code: "MedicinalProductUndesirableEffect",
                display: "MedicinalProductUndesirableEffect"
            },
            { code: "MessageDefinition", display: "MessageDefinition" },
            { code: "MessageHeader", display: "MessageHeader" },
            { code: "MolecularSequence", display: "MolecularSequence" },
            { code: "NamingSystem", display: "NamingSystem" },
            { code: "NutritionOrder", display: "NutritionOrder" },
            { code: "Observation", display: "Observation" },
            { code: "ObservationDefinition", display: "ObservationDefinition" },
            { code: "OperationDefinition", display: "OperationDefinition" },
            { code: "OperationOutcome", display: "OperationOutcome" },
            { code: "Organization", display: "Organization" },
            { code: "OrganizationAffiliation", display: "OrganizationAffiliation" },
            { code: "Parameters", display: "Parameters" },
            { code: "Patient", display: "Patient" },
            { code: "PaymentNotice", display: "PaymentNotice" },
            { code: "PaymentReconciliation", display: "PaymentReconciliation" },
            { code: "Person", display: "Person" },
            { code: "PlanDefinition", display: "PlanDefinition" },
            { code: "Practitioner", display: "Practitioner" },
            { code: "PractitionerRole", display: "PractitionerRole" },
            { code: "Procedure", display: "Procedure" },
            { code: "Provenance", display: "Provenance" },
            { code: "Questionnaire", display: "Questionnaire" },
            { code: "QuestionnaireResponse", display: "QuestionnaireResponse" },
            { code: "RelatedPerson", display: "RelatedPerson" },
            { code: "RequestGroup", display: "RequestGroup" },
            { code: "ResearchDefinition", display: "ResearchDefinition" },
            { code: "ResearchElementDefinition", display: "ResearchElementDefinition" },
            { code: "ResearchStudy", display: "ResearchStudy" },
            { code: "ResearchSubject", display: "ResearchSubject" },
            { code: "Resource", display: "Resource" },
            { code: "RiskAssessment", display: "RiskAssessment" },
            { code: "RiskEvidenceSynthesis", display: "RiskEvidenceSynthesis" },
            { code: "Schedule", display: "Schedule" },
            { code: "SearchParameter", display: "SearchParameter" },
            { code: "ServiceRequest", display: "ServiceRequest" },
            { code: "Slot", display: "Slot" },
            { code: "Specimen", display: "Specimen" },
            { code: "SpecimenDefinition", display: "SpecimenDefinition" },
            { code: "StructureDefinition", display: "StructureDefinition" },
            { code: "StructureMap", display: "StructureMap" },
            { code: "Subscription", display: "Subscription" },
            { code: "Substance", display: "Substance" },
            { code: "SubstanceNucleicAcid", display: "SubstanceNucleicAcid" },
            { code: "SubstancePolymer", display: "SubstancePolymer" },
            { code: "SubstanceProtein", display: "SubstanceProtein" },
            {
                code: "SubstanceReferenceInformation",
                display: "SubstanceReferenceInformation"
            },
            { code: "SubstanceSourceMaterial", display: "SubstanceSourceMaterial" },
            { code: "SubstanceSpecification", display: "SubstanceSpecification" },
            { code: "SupplyDelivery", display: "SupplyDelivery" },
            { code: "SupplyRequest", display: "SupplyRequest" },
            { code: "Task", display: "Task" },
            { code: "TerminologyCapabilities", display: "TerminologyCapabilities" },
            { code: "TestReport", display: "TestReport" },
            { code: "TestScript", display: "TestScript" },
            { code: "ValueSet", display: "ValueSet" },
            { code: "VerificationResult", display: "VerificationResult" },
            { code: "VisionPrescription", display: "VisionPrescription" }
        ]
    }
];

export default Careplanactivitykind;
