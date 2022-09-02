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

export default class Reference {
    public static readonly URN_PREFIX = "urn:";
    public static readonly RESOURCE_TYPES =
        "(Account|ActivityDefinition|AdverseEvent|AllergyIntolerance|Appointment|AppointmentResponse|AuditEvent|Basic|Binary|BiologicallyDerivedProduct|BodyStructure|Bundle|CapabilityStatement|CarePlan|CareTeam|CatalogEntry|ChargeItem|ChargeItemDefinition|Claim|ClaimResponse|ClinicalImpression|CodeSystem|Communication|CommunicationRequest|CompartmentDefinition|Composition|ConceptMap|Condition|Consent|Contract|Coverage|CoverageEligibilityRequest|CoverageEligibilityResponse|DetectedIssue|Device|DeviceDefinition|DeviceMetric|DeviceRequest|DeviceUseStatement|DiagnosticReport|DocumentManifest|DocumentReference|EffectEvidenceSynthesis|Encounter|Endpoint|EnrollmentRequest|EnrollmentResponse|EpisodeOfCare|EventDefinition|Evidence|EvidenceVariable|ExampleScenario|ExplanationOfBenefit|FamilyMemberHistory|Flag|Goal|GraphDefinition|Group|GuidanceResponse|HealthcareService|ImagingStudy|Immunization|ImmunizationEvaluation|ImmunizationRecommendation|ImplementationGuide|InsurancePlan|Invoice|Library|Linkage|List|Location|Measure|MeasureReport|Media|Medication|MedicationAdministration|MedicationDispense|MedicationKnowledge|MedicationRequest|MedicationStatement|MedicinalProduct|MedicinalProductAuthorization|MedicinalProductContraindication|MedicinalProductIndication|MedicinalProductIngredient|MedicinalProductInteraction|MedicinalProductManufactured|MedicinalProductPackaged|MedicinalProductPharmaceutical|MedicinalProductUndesirableEffect|MessageDefinition|MessageHeader|MolecularSequence|NamingSystem|NutritionOrder|Observation|ObservationDefinition|OperationDefinition|OperationOutcome|Organization|OrganizationAffiliation|Patient|PaymentNotice|PaymentReconciliation|Person|PlanDefinition|Practitioner|PractitionerRole|Procedure|Provenance|Questionnaire|QuestionnaireResponse|RelatedPerson|RequestGroup|ResearchDefinition|ResearchElementDefinition|ResearchStudy|ResearchSubject|RiskAssessment|RiskEvidenceSynthesis|Schedule|SearchParameter|ServiceRequest|Slot|Specimen|SpecimenDefinition|StructureDefinition|StructureMap|Subscription|Substance|SubstanceNucleicAcid|SubstancePolymer|SubstanceProtein|SubstanceReferenceInformation|SubstanceSourceMaterial|SubstanceSpecification|SupplyDelivery|SupplyRequest|Task|TerminologyCapabilities|TestReport|TestScript|ValueSet|VerificationResult|VisionPrescription)";
    public static readonly TYPE_SLASH_ID_REGEX = new RegExp(
        Reference.RESOURCE_TYPES + "/[A-Za-z0-9-.]"
    );
    public static readonly RESTFUL_URL_REGEX = new RegExp(
        "((http|https)://([A-Za-z0-9-.:%$]*/)+)" +
            // TODO: "?" +
            Reference.RESOURCE_TYPES +
            "/[A-Za-z0-9-.]{1,64}(/_history/[A-Za-z0-9-.]{1,64})?"
    );

    protected _valid = false;
    protected _absolute = false;
    protected _root: string;

    constructor(readonly value?: string, readonly parentFullURL = "") {
        this._valid = Reference.isValid(value);
        this._absolute = Reference.isAbsolute(value);
        this._root = Reference.getRoot(parentFullURL);
    }

    static isValid(reference?: string): boolean {
        if (!reference) return false;

        // https://www.hl7.org/fhir/datatypes.html#uri
        // This regex is very permissive, but URIs must be valid.
        // Implementers are welcome to use more specific regex statements for a URI in specific contexts.
        // TODO: warning when it only matches fhir uri?
        const fhirUriRegex = /^\S*$/;

        // https://www.rfc-editor.org/rfc/rfc3986#appendix-B
        const wellFormedUriRegex = new RegExp(
            "^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"
        );

        const regexes = [fhirUriRegex, wellFormedUriRegex];
        return (
            reference !== Reference.URN_PREFIX &&
            regexes.every((r) => reference?.match(r))
        );
    }

    static isAbsolute(reference?: string): boolean {
        // TODO: https://github.com/FHIR/fhir.js/blob/master/src/utils.js -> !!ref.match(/https?:\/\/./)
        if (!reference) return false;
        return Reference.isValid(reference) && reference.startsWith(Reference.URN_PREFIX);
    }

    static getRoot(fullUrl: string): string {
        if (fullUrl.match(Reference.RESTFUL_URL_REGEX)) {
            const result = fullUrl.split(
                new RegExp("/" + Reference.RESOURCE_TYPES + "/")
            );

            if (result.length) {
                const r = result[0];
                return r.endsWith("/") ? r : r + "/";
            }
        }

        return "";
    }

    public resolve(reference: string): boolean {
        if (!this.valid) return false;
        return this.toString() === reference;
    }

    public toString(): string {
        if (!this.valid) return "";

        // if the reference has the format [type]/[id], and
        // if the fullUrl for the bundle entry containing the resource is a RESTful one
        if (
            !this.absolute &&
            this.value?.match(Reference.TYPE_SLASH_ID_REGEX) &&
            this.parentFullURL.match(Reference.RESTFUL_URL_REGEX)
        ) {
            // extract the [root] from the fullUrl, and append the reference (type/id) to it
            return this.root + this.value;
        } else if (this.absolute) {
            // Look for an entry with a fullUrl that matches the URI in the reference
            return this.value ?? "";
        }

        return this.value ?? ""; // TODO:
    }

    public toURL(): string {
        return encodeURIComponent(this.toString());
    }

    get valid(): boolean {
        return this._valid;
    }

    get absolute(): boolean {
        return this._absolute;
    }

    get root(): string {
        return this._root;
    }
}
