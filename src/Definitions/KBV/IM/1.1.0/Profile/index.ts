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

export {
    default as BundleEntry,
    VaccinationBundleEntryMeta as BundleEntryMeta,
    VaccinationBundleEntryIdentifier as BundleEntryIdentifier,
    VaccinationBundleEntryEntry as BundleEntryEntry
} from "./VaccinationBundleEntry";

export {
    default as CompositionAddendum,
    VaccinationCompositionAddendumRecordAddendumCodeCoding as CompositionAddendumRecordAddendumCodeCoding,
    VaccinationCompositionAddendumRecordAddendumCode as CompositionAddendumRecordAddendumCode,
    VaccinationCompositionAddendumRecordAddendumEntry as CompositionAddendumRecordAddendumEntry,
    VaccinationCompositionAddendumTypeCoding as CompositionAddendumTypeCoding,
    VaccinationCompositionAddendumRecordAddendum as CompositionAddendumRecordAddendum,
    VaccinationCompositionAddendumMeta as CompositionAddendumMeta,
    VaccinationCompositionAddendumText as CompositionAddendumText,
    VaccinationCompositionAddendumType as CompositionAddendumType,
    VaccinationCompositionAddendumSubject as CompositionAddendumSubject,
    VaccinationCompositionAddendumAuthor as CompositionAddendumAuthor
} from "./VaccinationCompositionAddendum";

export {
    default as CompositionPrime,
    VaccinationCompositionPrimeRecordPrimeCodeCoding as CompositionPrimeRecordPrimeCodeCoding,
    VaccinationCompositionPrimeObservationCodeCoding as CompositionPrimeObservationCodeCoding,
    VaccinationCompositionPrimeConditionCodeCoding as CompositionPrimeConditionCodeCoding,
    VaccinationCompositionPrimeConditionSectionEntry as CompositionPrimeConditionSectionEntry,
    VaccinationCompositionPrimeAuthorDataabsentreason as CompositionPrimeAuthorDataabsentreason,
    VaccinationCompositionPrimeRecordPrimeCode as CompositionPrimeRecordPrimeCode,
    VaccinationCompositionPrimeRecordPrimeEntry as CompositionPrimeRecordPrimeEntry,
    VaccinationCompositionPrimeObservationCode as CompositionPrimeObservationCode,
    VaccinationCompositionPrimeObservationEntry as CompositionPrimeObservationEntry,
    VaccinationCompositionPrimeConditionCode as CompositionPrimeConditionCode,
    VaccinationCompositionPrimeConditionEntry as CompositionPrimeConditionEntry,
    VaccinationCompositionPrimeConditionSection as CompositionPrimeConditionSection,
    VaccinationCompositionPrimeTypeCoding as CompositionPrimeTypeCoding,
    VaccinationCompositionPrimeRecordPrime as CompositionPrimeRecordPrime,
    VaccinationCompositionPrimeObservation as CompositionPrimeObservation,
    VaccinationCompositionPrimeCondition as CompositionPrimeCondition,
    VaccinationCompositionPrimeMeta as CompositionPrimeMeta,
    VaccinationCompositionPrimeText as CompositionPrimeText,
    VaccinationCompositionPrimeType as CompositionPrimeType,
    VaccinationCompositionPrimeSubject as CompositionPrimeSubject,
    VaccinationCompositionPrimeAuthor as CompositionPrimeAuthor
} from "./VaccinationCompositionPrime";

export {
    default as Condition,
    VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent as ConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
    VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed as ConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
    VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent as ConditionCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
    VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay as ConditionOnsetStringLebensphaseValueCodeableConceptCodingDisplay,
    VaccinationConditionOnsetStringLebensphaseValueCodeableConceptCoding as ConditionOnsetStringLebensphaseValueCodeableConceptCoding,
    VaccinationConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed as ConditionCodeSnomedCTDisplayAnzeigenameCodeSnomed,
    VaccinationConditionOnsetStringLebensphaseValueCodeableConcept as ConditionOnsetStringLebensphaseValueCodeableConcept,
    VaccinationConditionCodeSnomedCTDisplay as ConditionCodeSnomedCTDisplay,
    VaccinationConditionOnsetStringLebensphase as ConditionOnsetStringLebensphase,
    VaccinationConditionCodeSnomedCT as ConditionCodeSnomedCT,
    VaccinationConditionCodeIcd10gm as ConditionCodeIcd10gm,
    VaccinationConditionClinicalStatusCoding as ConditionClinicalStatusCoding,
    VaccinationConditionVerificationStatusCoding as ConditionVerificationStatusCoding,
    VaccinationConditionOnsetString as ConditionOnsetString,
    VaccinationConditionMeta as ConditionMeta,
    VaccinationConditionClinicalStatus as ConditionClinicalStatus,
    VaccinationConditionVerificationStatus as ConditionVerificationStatus,
    VaccinationConditionCode as ConditionCode,
    VaccinationConditionSubject as ConditionSubject,
    VaccinationConditionRecorder as ConditionRecorder,
    VaccinationConditionNote as ConditionNote
} from "./VaccinationCondition";

export {
    default as ObservationImmunizationStatus,
    VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent as ObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
    VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent as ObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoincContent,
    VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent as ObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomedContent,
    VaccinationObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed as ObservationImmunizationStatusCodeSnomedCTDisplayAnzeigenameCodeSnomed,
    VaccinationObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc as ObservationImmunizationStatusCodeLoincDisplayAnzeigenameCodeLoinc,
    VaccinationObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed as ObservationImmunizationStatusInterpretationCodingDisplayAnzeigenameCodeSnomed,
    VaccinationObservationImmunizationStatusCodeSnomedCTDisplay as ObservationImmunizationStatusCodeSnomedCTDisplay,
    VaccinationObservationImmunizationStatusCodeLoincDisplay as ObservationImmunizationStatusCodeLoincDisplay,
    VaccinationObservationImmunizationStatusCodeSnomedCT as ObservationImmunizationStatusCodeSnomedCT,
    VaccinationObservationImmunizationStatusCodeLoinc as ObservationImmunizationStatusCodeLoinc,
    VaccinationObservationImmunizationStatusInterpretationCodingDisplay as ObservationImmunizationStatusInterpretationCodingDisplay,
    VaccinationObservationImmunizationStatusInterpretationCoding as ObservationImmunizationStatusInterpretationCoding,
    VaccinationObservationImmunizationStatusMeta as ObservationImmunizationStatusMeta,
    VaccinationObservationImmunizationStatusCode as ObservationImmunizationStatusCode,
    VaccinationObservationImmunizationStatusSubject as ObservationImmunizationStatusSubject,
    VaccinationObservationImmunizationStatusInterpretation as ObservationImmunizationStatusInterpretation,
    VaccinationObservationImmunizationStatusNote as ObservationImmunizationStatusNote
} from "./VaccinationObservationImmunizationStatus";

export {
    default as Organization,
    VaccinationOrganizationInstitutionskennzeichenTypeXXType as OrganizationInstitutionskennzeichenTypeXXType,
    VaccinationOrganizationBetriebsstaettennummerTypeBSNRType as OrganizationBetriebsstaettennummerTypeBSNRType,
    VaccinationOrganizationStrassenanschriftLineStrasse as OrganizationStrassenanschriftLineStrasse,
    VaccinationOrganizationStrassenanschriftLineHausnummer as OrganizationStrassenanschriftLineHausnummer,
    VaccinationOrganizationStrassenanschriftLineAdresszusatz as OrganizationStrassenanschriftLineAdresszusatz,
    VaccinationOrganizationPostfachLinePostfach as OrganizationPostfachLinePostfach,
    VaccinationOrganizationInstitutionskennzeichenType as OrganizationInstitutionskennzeichenType,
    VaccinationOrganizationBetriebsstaettennummerType as OrganizationBetriebsstaettennummerType,
    VaccinationOrganizationStrassenanschriftLine as OrganizationStrassenanschriftLine,
    VaccinationOrganizationPostfachLine as OrganizationPostfachLine,
    VaccinationOrganizationInstitutionskennzeichen as OrganizationInstitutionskennzeichen,
    VaccinationOrganizationBetriebsstaettennummer as OrganizationBetriebsstaettennummer,
    VaccinationOrganizationStrassenanschrift as OrganizationStrassenanschrift,
    VaccinationOrganizationPostfach as OrganizationPostfach,
    VaccinationOrganizationMeta as OrganizationMeta,
    VaccinationOrganizationTelecom as OrganizationTelecom
} from "./VaccinationOrganization";

export {
    default as OrganizationAddendum,
    VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType as OrganizationAddendumInstitutionskennzeichenTypeXXType,
    VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType as OrganizationAddendumBetriebsstaettennummerTypeBSNRType,
    VaccinationOrganizationAddendumStrassenanschriftLineStrasse as OrganizationAddendumStrassenanschriftLineStrasse,
    VaccinationOrganizationAddendumStrassenanschriftLineHausnummer as OrganizationAddendumStrassenanschriftLineHausnummer,
    VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz as OrganizationAddendumStrassenanschriftLineAdresszusatz,
    VaccinationOrganizationAddendumPostfachLinePostfach as OrganizationAddendumPostfachLinePostfach,
    VaccinationOrganizationAddendumInstitutionskennzeichenType as OrganizationAddendumInstitutionskennzeichenType,
    VaccinationOrganizationAddendumBetriebsstaettennummerType as OrganizationAddendumBetriebsstaettennummerType,
    VaccinationOrganizationAddendumStrassenanschriftLine as OrganizationAddendumStrassenanschriftLine,
    VaccinationOrganizationAddendumPostfachLine as OrganizationAddendumPostfachLine,
    VaccinationOrganizationAddendumInstitutionskennzeichen as OrganizationAddendumInstitutionskennzeichen,
    VaccinationOrganizationAddendumBetriebsstaettennummer as OrganizationAddendumBetriebsstaettennummer,
    VaccinationOrganizationAddendumStrassenanschrift as OrganizationAddendumStrassenanschrift,
    VaccinationOrganizationAddendumPostfach as OrganizationAddendumPostfach,
    VaccinationOrganizationAddendumMeta as OrganizationAddendumMeta,
    VaccinationOrganizationAddendumTelecom as OrganizationAddendumTelecom
} from "./VaccinationOrganizationAddendum";

export {
    default as Patient,
    VaccinationPatientVersichertennummerpkvAssignerIdentifierTypeXXType as PatientVersichertennummerpkvAssignerIdentifierTypeXXType,
    VaccinationPatientPidTypeMRType as PatientPidTypeMRType,
    VaccinationPatientVersichertenIdGKVTypeGKVType as PatientVersichertenIdGKVTypeGKVType,
    VaccinationPatientVersichertennummerpkvTypePKVType as PatientVersichertennummerpkvTypePKVType,
    VaccinationPatientVersichertennummerpkvAssignerIdentifierType as PatientVersichertennummerpkvAssignerIdentifierType,
    VaccinationPatientNameFamilyNamenszusatz as PatientNameFamilyNamenszusatz,
    VaccinationPatientNameFamilyNachname as PatientNameFamilyNachname,
    VaccinationPatientNameFamilyVorsatzwort as PatientNameFamilyVorsatzwort,
    VaccinationPatientNamePrefixPrefixqualifier as PatientNamePrefixPrefixqualifier,
    VaccinationPatientGeburtsnameFamilyNamenszusatz as PatientGeburtsnameFamilyNamenszusatz,
    VaccinationPatientGeburtsnameFamilyNachname as PatientGeburtsnameFamilyNachname,
    VaccinationPatientGeburtsnameFamilyVorsatzwort as PatientGeburtsnameFamilyVorsatzwort,
    VaccinationPatientVersichertennummerpkvAssignerIdentifier as PatientVersichertennummerpkvAssignerIdentifier,
    VaccinationPatientReisepassnummerTypeCoding as PatientReisepassnummerTypeCoding,
    VaccinationPatientVersichertennummerkvkTypeCoding as PatientVersichertennummerkvkTypeCoding,
    VaccinationPatientPidType as PatientPidType,
    VaccinationPatientVersichertenIdGKVType as PatientVersichertenIdGKVType,
    VaccinationPatientVersichertennummerpkvType as PatientVersichertennummerpkvType,
    VaccinationPatientVersichertennummerpkvAssigner as PatientVersichertennummerpkvAssigner,
    VaccinationPatientReisepassnummerType as PatientReisepassnummerType,
    VaccinationPatientVersichertennummerkvkType as PatientVersichertennummerkvkType,
    VaccinationPatientNameFamily as PatientNameFamily,
    VaccinationPatientNamePrefix as PatientNamePrefix,
    VaccinationPatientGeburtsnameFamily as PatientGeburtsnameFamily,
    VaccinationPatientBirthDateDataabsentreason as PatientBirthDateDataabsentreason,
    VaccinationPatientPid as PatientPid,
    VaccinationPatientVersichertenIdGKV as PatientVersichertenIdGKV,
    VaccinationPatientVersichertennummerpkv as PatientVersichertennummerpkv,
    VaccinationPatientReisepassnummer as PatientReisepassnummer,
    VaccinationPatientVersichertennummerkvk as PatientVersichertennummerkvk,
    VaccinationPatientName as PatientName,
    VaccinationPatientGeburtsname as PatientGeburtsname,
    VaccinationPatientMeta as PatientMeta,
    VaccinationPatientGender as PatientGender,
    VaccinationPatientBirthDate as PatientBirthDate
} from "./VaccinationPatient";

export {
    default as Practitioner,
    VaccinationPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent as PractitionerQualificationCodeCodingDisplayAnzeigenameQualifikationContent,
    VaccinationPractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation as PractitionerQualificationCodeCodingDisplayAnzeigenameQualifikation,
    VaccinationPractitionerANRTypeLANRType as PractitionerANRTypeLANRType,
    VaccinationPractitionerEFNTypeDNType as PractitionerEFNTypeDNType,
    VaccinationPractitionerNameFamilyNamenszusatz as PractitionerNameFamilyNamenszusatz,
    VaccinationPractitionerNameFamilyNachname as PractitionerNameFamilyNachname,
    VaccinationPractitionerNameFamilyVorsatzwort as PractitionerNameFamilyVorsatzwort,
    VaccinationPractitionerNamePrefixPrefixqualifier as PractitionerNamePrefixPrefixqualifier,
    VaccinationPractitionerGeburtsnameFamilyNamenszusatz as PractitionerGeburtsnameFamilyNamenszusatz,
    VaccinationPractitionerGeburtsnameFamilyNachname as PractitionerGeburtsnameFamilyNachname,
    VaccinationPractitionerGeburtsnameFamilyVorsatzwort as PractitionerGeburtsnameFamilyVorsatzwort,
    VaccinationPractitionerIdTypeCoding as PractitionerIdTypeCoding,
    VaccinationPractitionerQualificationCodeCodingDisplay as PractitionerQualificationCodeCodingDisplay,
    VaccinationPractitionerANRType as PractitionerANRType,
    VaccinationPractitionerEFNType as PractitionerEFNType,
    VaccinationPractitionerIdType as PractitionerIdType,
    VaccinationPractitionerNameFamily as PractitionerNameFamily,
    VaccinationPractitionerNamePrefix as PractitionerNamePrefix,
    VaccinationPractitionerGeburtsnameFamily as PractitionerGeburtsnameFamily,
    VaccinationPractitionerQualificationCodeCoding as PractitionerQualificationCodeCoding,
    VaccinationPractitionerANR as PractitionerANR,
    VaccinationPractitionerEFN as PractitionerEFN,
    VaccinationPractitionerId as PractitionerId,
    VaccinationPractitionerName as PractitionerName,
    VaccinationPractitionerGeburtsname as PractitionerGeburtsname,
    VaccinationPractitionerQualificationCode as PractitionerQualificationCode,
    VaccinationPractitionerMeta as PractitionerMeta,
    VaccinationPractitionerTelecom as PractitionerTelecom,
    VaccinationPractitionerQualification as PractitionerQualification
} from "./VaccinationPractitioner";

export {
    default as PractitionerAddendum,
    VaccinationPractitionerAddendumPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent as PractitionerAddendumPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikationContent,
    VaccinationPractitionerAddendumPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation as PractitionerAddendumPractitionerspecialityCodeCodingDisplayAnzeigenameQualifikation,
    VaccinationPractitionerAddendumANRTypeLANRType as PractitionerAddendumANRTypeLANRType,
    VaccinationPractitionerAddendumEFNTypeDNType as PractitionerAddendumEFNTypeDNType,
    VaccinationPractitionerAddendumNameFamilyNamenszusatz as PractitionerAddendumNameFamilyNamenszusatz,
    VaccinationPractitionerAddendumNameFamilyNachname as PractitionerAddendumNameFamilyNachname,
    VaccinationPractitionerAddendumNameFamilyVorsatzwort as PractitionerAddendumNameFamilyVorsatzwort,
    VaccinationPractitionerAddendumNamePrefixPrefixqualifier as PractitionerAddendumNamePrefixPrefixqualifier,
    VaccinationPractitionerAddendumGeburtsnameFamilyNamenszusatz as PractitionerAddendumGeburtsnameFamilyNamenszusatz,
    VaccinationPractitionerAddendumGeburtsnameFamilyNachname as PractitionerAddendumGeburtsnameFamilyNachname,
    VaccinationPractitionerAddendumGeburtsnameFamilyVorsatzwort as PractitionerAddendumGeburtsnameFamilyVorsatzwort,
    VaccinationPractitionerAddendumPractitionerspecialityCodeCodingDisplay as PractitionerAddendumPractitionerspecialityCodeCodingDisplay,
    VaccinationPractitionerAddendumIdTypeCoding as PractitionerAddendumIdTypeCoding,
    VaccinationPractitionerAddendumPractitionerspecialityCodeCoding as PractitionerAddendumPractitionerspecialityCodeCoding,
    VaccinationPractitionerAddendumANRType as PractitionerAddendumANRType,
    VaccinationPractitionerAddendumEFNType as PractitionerAddendumEFNType,
    VaccinationPractitionerAddendumIdType as PractitionerAddendumIdType,
    VaccinationPractitionerAddendumNameFamily as PractitionerAddendumNameFamily,
    VaccinationPractitionerAddendumNamePrefix as PractitionerAddendumNamePrefix,
    VaccinationPractitionerAddendumGeburtsnameFamily as PractitionerAddendumGeburtsnameFamily,
    VaccinationPractitionerAddendumPractitionerspecialityCode as PractitionerAddendumPractitionerspecialityCode,
    VaccinationPractitionerAddendumANR as PractitionerAddendumANR,
    VaccinationPractitionerAddendumEFN as PractitionerAddendumEFN,
    VaccinationPractitionerAddendumId as PractitionerAddendumId,
    VaccinationPractitionerAddendumName as PractitionerAddendumName,
    VaccinationPractitionerAddendumGeburtsname as PractitionerAddendumGeburtsname,
    VaccinationPractitionerAddendumPractitionerspeciality as PractitionerAddendumPractitionerspeciality,
    VaccinationPractitionerAddendumMeta as PractitionerAddendumMeta,
    VaccinationPractitionerAddendumTelecom as PractitionerAddendumTelecom
} from "./VaccinationPractitionerAddendum";

export {
    default as Practitionerrole,
    VaccinationPractitionerroleMeta as PractitionerroleMeta,
    VaccinationPractitionerrolePractitioner as PractitionerrolePractitioner,
    VaccinationPractitionerroleOrganization as PractitionerroleOrganization
} from "./VaccinationPractitionerrole";

export {
    default as PractitionerroleAddendum,
    VaccinationPractitionerroleAddendumMeta as PractitionerroleAddendumMeta,
    VaccinationPractitionerroleAddendumPractitioner as PractitionerroleAddendumPractitioner,
    VaccinationPractitionerroleAddendumOrganization as PractitionerroleAddendumOrganization
} from "./VaccinationPractitionerroleAddendum";

export {
    default as Provenance,
    VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent as ProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomedContent,
    VaccinationProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed as ProvenanceAgentRoleCodingDisplayAnzeigenameCodeSnomed,
    VaccinationProvenanceAgentRoleCodingDisplay as ProvenanceAgentRoleCodingDisplay,
    VaccinationProvenanceAgentWhoDataabsentreason as ProvenanceAgentWhoDataabsentreason,
    VaccinationProvenanceAgentRoleCoding as ProvenanceAgentRoleCoding,
    VaccinationProvenanceAgentRole as ProvenanceAgentRole,
    VaccinationProvenanceAgentWho as ProvenanceAgentWho,
    VaccinationProvenanceMeta as ProvenanceMeta,
    VaccinationProvenanceTarget as ProvenanceTarget,
    VaccinationProvenanceAgent as ProvenanceAgent
} from "./VaccinationProvenance";

export {
    default as RecordAddendum,
    VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent as RecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent,
    VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding as RecordAddendumVerantwortlichePersonModeValueCodeableConceptCoding,
    VaccinationRecordAddendumEintragendePersonModeValueCodeableConceptCoding as RecordAddendumEintragendePersonModeValueCodeableConceptCoding,
    VaccinationRecordAddendumVerantwortlichePersonModeValueCodeableConcept as RecordAddendumVerantwortlichePersonModeValueCodeableConcept,
    VaccinationRecordAddendumVerantwortlichePersonPartyValueReference as RecordAddendumVerantwortlichePersonPartyValueReference,
    VaccinationRecordAddendumEintragendePersonModeValueCodeableConcept as RecordAddendumEintragendePersonModeValueCodeableConcept,
    VaccinationRecordAddendumEintragendePersonPartyValueReference as RecordAddendumEintragendePersonPartyValueReference,
    VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed as RecordAddendumProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed,
    VaccinationRecordAddendumProtocolAppliedDoseNumberStringDataabsentreason as RecordAddendumProtocolAppliedDoseNumberStringDataabsentreason,
    VaccinationRecordAddendumVerantwortlichePersonMode as RecordAddendumVerantwortlichePersonMode,
    VaccinationRecordAddendumVerantwortlichePersonParty as RecordAddendumVerantwortlichePersonParty,
    VaccinationRecordAddendumEintragendePersonMode as RecordAddendumEintragendePersonMode,
    VaccinationRecordAddendumEintragendePersonParty as RecordAddendumEintragendePersonParty,
    VaccinationRecordAddendumVaccineCodeSnomedCTDisplay as RecordAddendumVaccineCodeSnomedCTDisplay,
    VaccinationRecordAddendumProtocolAppliedTargetDiseaseCodingDisplay as RecordAddendumProtocolAppliedTargetDiseaseCodingDisplay,
    VaccinationRecordAddendumVaccineCodeDataabsentreason as RecordAddendumVaccineCodeDataabsentreason,
    VaccinationRecordAddendumVaccineCodeSnomedCT as RecordAddendumVaccineCodeSnomedCT,
    VaccinationRecordAddendumVaccineCodeAtc as RecordAddendumVaccineCodeAtc,
    VaccinationRecordAddendumVaccineCodePharmazentralnummerpzn as RecordAddendumVaccineCodePharmazentralnummerpzn,
    VaccinationRecordAddendumProtocolAppliedTargetDiseaseCoding as RecordAddendumProtocolAppliedTargetDiseaseCoding,
    VaccinationRecordAddendumProtocolAppliedDoseNumberString as RecordAddendumProtocolAppliedDoseNumberString,
    VaccinationRecordAddendumVerantwortlichePerson as RecordAddendumVerantwortlichePerson,
    VaccinationRecordAddendumEintragendePerson as RecordAddendumEintragendePerson,
    VaccinationRecordAddendumReportOriginCoding as RecordAddendumReportOriginCoding,
    VaccinationRecordAddendumProtocolAppliedTargetDisease as RecordAddendumProtocolAppliedTargetDisease,
    VaccinationRecordAddendumMeta as RecordAddendumMeta,
    VaccinationRecordAddendumVaccineCode as RecordAddendumVaccineCode,
    VaccinationRecordAddendumPatient as RecordAddendumPatient,
    VaccinationRecordAddendumReportOrigin as RecordAddendumReportOrigin,
    VaccinationRecordAddendumManufacturer as RecordAddendumManufacturer,
    VaccinationRecordAddendumNote as RecordAddendumNote,
    VaccinationRecordAddendumProtocolApplied as RecordAddendumProtocolApplied
} from "./VaccinationRecordAddendum";

export {
    default as RecordPrime,
    VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent as RecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomedContent,
    VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed as RecordPrimeProtocolAppliedTargetDiseaseCodingDisplayAnzeigenameCodeSnomed,
    VaccinationRecordPrimeProtocolAppliedDoseNumberStringDataabsentreason as RecordPrimeProtocolAppliedDoseNumberStringDataabsentreason,
    VaccinationRecordPrimeVaccineCodeSnomedCTDisplay as RecordPrimeVaccineCodeSnomedCTDisplay,
    VaccinationRecordPrimeProtocolAppliedTargetDiseaseCodingDisplay as RecordPrimeProtocolAppliedTargetDiseaseCodingDisplay,
    VaccinationRecordPrimeVaccineCodeSnomedCT as RecordPrimeVaccineCodeSnomedCT,
    VaccinationRecordPrimeVaccineCodeAtc as RecordPrimeVaccineCodeAtc,
    VaccinationRecordPrimeVaccineCodePharmazentralnummerpzn as RecordPrimeVaccineCodePharmazentralnummerpzn,
    VaccinationRecordPrimeProtocolAppliedTargetDiseaseCoding as RecordPrimeProtocolAppliedTargetDiseaseCoding,
    VaccinationRecordPrimeProtocolAppliedDoseNumberString as RecordPrimeProtocolAppliedDoseNumberString,
    VaccinationRecordPrimeNoteHinweis as RecordPrimeNoteHinweis,
    VaccinationRecordPrimeProtocolAppliedTargetDisease as RecordPrimeProtocolAppliedTargetDisease,
    VaccinationRecordPrimeMeta as RecordPrimeMeta,
    VaccinationRecordPrimeText as RecordPrimeText,
    VaccinationRecordPrimeVaccineCode as RecordPrimeVaccineCode,
    VaccinationRecordPrimePatient as RecordPrimePatient,
    VaccinationRecordPrimeManufacturer as RecordPrimeManufacturer,
    VaccinationRecordPrimeNote as RecordPrimeNote,
    VaccinationRecordPrimeProtocolApplied as RecordPrimeProtocolApplied
} from "./VaccinationRecordPrime";
