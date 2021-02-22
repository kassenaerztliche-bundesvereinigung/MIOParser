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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/all-types

type Alltypes =
    | "Address"
    | "Age"
    | "Annotation"
    | "Attachment"
    | "BackboneElement"
    | "CodeableConcept"
    | "Coding"
    | "ContactDetail"
    | "ContactPoint"
    | "Contributor"
    | "Count"
    | "DataRequirement"
    | "Distance"
    | "Dosage"
    | "Duration"
    | "Element"
    | "ElementDefinition"
    | "Expression"
    | "Extension"
    | "HumanName"
    | "Identifier"
    | "MarketingStatus"
    | "Meta"
    | "Money"
    | "MoneyQuantity"
    | "Narrative"
    | "ParameterDefinition"
    | "Period"
    | "Population"
    | "ProdCharacteristic"
    | "ProductShelfLife"
    | "Quantity"
    | "Range"
    | "Ratio"
    | "Reference"
    | "RelatedArtifact"
    | "SampledData"
    | "Signature"
    | "SimpleQuantity"
    | "SubstanceAmount"
    | "Timing"
    | "TriggerDefinition"
    | "UsageContext"
    | "base64Binary"
    | "boolean"
    | "canonical"
    | "code"
    | "date"
    | "dateTime"
    | "decimal"
    | "id"
    | "instant"
    | "integer"
    | "markdown"
    | "oid"
    | "positiveInt"
    | "string"
    | "time"
    | "unsignedInt"
    | "uri"
    | "url"
    | "uuid"
    | "xhtml"
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
    | "VisionPrescription"
    | "Type"
    | "Any";

const Alltypes: t.Type<Alltypes> = t.union(
    [
        t.literal("Address"),
        t.literal("Age"),
        t.literal("Annotation"),
        t.literal("Attachment"),
        t.literal("BackboneElement"),
        t.literal("CodeableConcept"),
        t.literal("Coding"),
        t.literal("ContactDetail"),
        t.literal("ContactPoint"),
        t.literal("Contributor"),
        t.literal("Count"),
        t.literal("DataRequirement"),
        t.literal("Distance"),
        t.literal("Dosage"),
        t.literal("Duration"),
        t.literal("Element"),
        t.literal("ElementDefinition"),
        t.literal("Expression"),
        t.literal("Extension"),
        t.literal("HumanName"),
        t.literal("Identifier"),
        t.literal("MarketingStatus"),
        t.literal("Meta"),
        t.literal("Money"),
        t.literal("MoneyQuantity"),
        t.literal("Narrative"),
        t.literal("ParameterDefinition"),
        t.literal("Period"),
        t.literal("Population"),
        t.literal("ProdCharacteristic"),
        t.literal("ProductShelfLife"),
        t.literal("Quantity"),
        t.literal("Range"),
        t.literal("Ratio"),
        t.literal("Reference"),
        t.literal("RelatedArtifact"),
        t.literal("SampledData"),
        t.literal("Signature"),
        t.literal("SimpleQuantity"),
        t.literal("SubstanceAmount"),
        t.literal("Timing"),
        t.literal("TriggerDefinition"),
        t.literal("UsageContext"),
        t.literal("base64Binary"),
        t.literal("boolean"),
        t.literal("canonical"),
        t.literal("code"),
        t.literal("date"),
        t.literal("dateTime"),
        t.literal("decimal"),
        t.literal("id"),
        t.literal("instant"),
        t.literal("integer"),
        t.literal("markdown"),
        t.literal("oid"),
        t.literal("positiveInt"),
        t.literal("string"),
        t.literal("time"),
        t.literal("unsignedInt"),
        t.literal("uri"),
        t.literal("url"),
        t.literal("uuid"),
        t.literal("xhtml"),
        t.literal("Account"),
        t.literal("ActivityDefinition"),
        t.literal("AdverseEvent"),
        t.literal("AllergyIntolerance"),
        t.literal("Appointment"),
        t.literal("AppointmentResponse"),
        t.literal("AuditEvent"),
        t.literal("Basic"),
        t.literal("Binary"),
        t.literal("BiologicallyDerivedProduct"),
        t.literal("BodyStructure"),
        t.literal("Bundle"),
        t.literal("CapabilityStatement"),
        t.literal("CarePlan"),
        t.literal("CareTeam"),
        t.literal("CatalogEntry"),
        t.literal("ChargeItem"),
        t.literal("ChargeItemDefinition"),
        t.literal("Claim"),
        t.literal("ClaimResponse"),
        t.literal("ClinicalImpression"),
        t.literal("CodeSystem"),
        t.literal("Communication"),
        t.literal("CommunicationRequest"),
        t.literal("CompartmentDefinition"),
        t.literal("Composition"),
        t.literal("ConceptMap"),
        t.literal("Condition"),
        t.literal("Consent"),
        t.literal("Contract"),
        t.literal("Coverage"),
        t.literal("CoverageEligibilityRequest"),
        t.literal("CoverageEligibilityResponse"),
        t.literal("DetectedIssue"),
        t.literal("Device"),
        t.literal("DeviceDefinition"),
        t.literal("DeviceMetric"),
        t.literal("DeviceRequest"),
        t.literal("DeviceUseStatement"),
        t.literal("DiagnosticReport"),
        t.literal("DocumentManifest"),
        t.literal("DocumentReference"),
        t.literal("DomainResource"),
        t.literal("EffectEvidenceSynthesis"),
        t.literal("Encounter"),
        t.literal("Endpoint"),
        t.literal("EnrollmentRequest"),
        t.literal("EnrollmentResponse"),
        t.literal("EpisodeOfCare"),
        t.literal("EventDefinition"),
        t.literal("Evidence"),
        t.literal("EvidenceVariable"),
        t.literal("ExampleScenario"),
        t.literal("ExplanationOfBenefit"),
        t.literal("FamilyMemberHistory"),
        t.literal("Flag"),
        t.literal("Goal"),
        t.literal("GraphDefinition"),
        t.literal("Group"),
        t.literal("GuidanceResponse"),
        t.literal("HealthcareService"),
        t.literal("ImagingStudy"),
        t.literal("Immunization"),
        t.literal("ImmunizationEvaluation"),
        t.literal("ImmunizationRecommendation"),
        t.literal("ImplementationGuide"),
        t.literal("InsurancePlan"),
        t.literal("Invoice"),
        t.literal("Library"),
        t.literal("Linkage"),
        t.literal("List"),
        t.literal("Location"),
        t.literal("Measure"),
        t.literal("MeasureReport"),
        t.literal("Media"),
        t.literal("Medication"),
        t.literal("MedicationAdministration"),
        t.literal("MedicationDispense"),
        t.literal("MedicationKnowledge"),
        t.literal("MedicationRequest"),
        t.literal("MedicationStatement"),
        t.literal("MedicinalProduct"),
        t.literal("MedicinalProductAuthorization"),
        t.literal("MedicinalProductContraindication"),
        t.literal("MedicinalProductIndication"),
        t.literal("MedicinalProductIngredient"),
        t.literal("MedicinalProductInteraction"),
        t.literal("MedicinalProductManufactured"),
        t.literal("MedicinalProductPackaged"),
        t.literal("MedicinalProductPharmaceutical"),
        t.literal("MedicinalProductUndesirableEffect"),
        t.literal("MessageDefinition"),
        t.literal("MessageHeader"),
        t.literal("MolecularSequence"),
        t.literal("NamingSystem"),
        t.literal("NutritionOrder"),
        t.literal("Observation"),
        t.literal("ObservationDefinition"),
        t.literal("OperationDefinition"),
        t.literal("OperationOutcome"),
        t.literal("Organization"),
        t.literal("OrganizationAffiliation"),
        t.literal("Parameters"),
        t.literal("Patient"),
        t.literal("PaymentNotice"),
        t.literal("PaymentReconciliation"),
        t.literal("Person"),
        t.literal("PlanDefinition"),
        t.literal("Practitioner"),
        t.literal("PractitionerRole"),
        t.literal("Procedure"),
        t.literal("Provenance"),
        t.literal("Questionnaire"),
        t.literal("QuestionnaireResponse"),
        t.literal("RelatedPerson"),
        t.literal("RequestGroup"),
        t.literal("ResearchDefinition"),
        t.literal("ResearchElementDefinition"),
        t.literal("ResearchStudy"),
        t.literal("ResearchSubject"),
        t.literal("Resource"),
        t.literal("RiskAssessment"),
        t.literal("RiskEvidenceSynthesis"),
        t.literal("Schedule"),
        t.literal("SearchParameter"),
        t.literal("ServiceRequest"),
        t.literal("Slot"),
        t.literal("Specimen"),
        t.literal("SpecimenDefinition"),
        t.literal("StructureDefinition"),
        t.literal("StructureMap"),
        t.literal("Subscription"),
        t.literal("Substance"),
        t.literal("SubstanceNucleicAcid"),
        t.literal("SubstancePolymer"),
        t.literal("SubstanceProtein"),
        t.literal("SubstanceReferenceInformation"),
        t.literal("SubstanceSourceMaterial"),
        t.literal("SubstanceSpecification"),
        t.literal("SupplyDelivery"),
        t.literal("SupplyRequest"),
        t.literal("Task"),
        t.literal("TerminologyCapabilities"),
        t.literal("TestReport"),
        t.literal("TestScript"),
        t.literal("ValueSet"),
        t.literal("VerificationResult"),
        t.literal("VisionPrescription"),
        t.literal("Type"),
        t.literal("Any")
    ],
    "Alltypes"
);

export const AlltypesArray: string[] = [
    "Address",
    "Age",
    "Annotation",
    "Attachment",
    "BackboneElement",
    "CodeableConcept",
    "Coding",
    "ContactDetail",
    "ContactPoint",
    "Contributor",
    "Count",
    "DataRequirement",
    "Distance",
    "Dosage",
    "Duration",
    "Element",
    "ElementDefinition",
    "Expression",
    "Extension",
    "HumanName",
    "Identifier",
    "MarketingStatus",
    "Meta",
    "Money",
    "MoneyQuantity",
    "Narrative",
    "ParameterDefinition",
    "Period",
    "Population",
    "ProdCharacteristic",
    "ProductShelfLife",
    "Quantity",
    "Range",
    "Ratio",
    "Reference",
    "RelatedArtifact",
    "SampledData",
    "Signature",
    "SimpleQuantity",
    "SubstanceAmount",
    "Timing",
    "TriggerDefinition",
    "UsageContext",
    "base64Binary",
    "boolean",
    "canonical",
    "code",
    "date",
    "dateTime",
    "decimal",
    "id",
    "instant",
    "integer",
    "markdown",
    "oid",
    "positiveInt",
    "string",
    "time",
    "unsignedInt",
    "uri",
    "url",
    "uuid",
    "xhtml",
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
    "VisionPrescription",
    "Type",
    "Any"
];

export const AlltypesValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/data-types",
        concept: []
    },
    {
        system: "http://hl7.org/fhir/resource-types",
        concept: []
    },
    {
        system: "http://hl7.org/fhir/abstract-types",
        concept: []
    }
];

export default Alltypes;
