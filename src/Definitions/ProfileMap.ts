/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import ZAEBBundle from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBBundle";
import ZAEBComposition from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBComposition";
import ZAEBGaplessDocumentation from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBGaplessDocumentation";
import ZAEBObservation from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBObservation";
import ZAEBOrganization from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBOrganization";
import ZAEBPatient from "./../Definitions/KBV/ZB/1.00.000/Profile/ZAEBPatient";
import VaccinationBundleEntry from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationBundleEntry";
import VaccinationCompositionAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationCompositionAddendum";
import VaccinationCompositionPrime from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationCompositionPrime";
import VaccinationCondition from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationCondition";
import VaccinationObservationImmunizationStatus from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationObservationImmunizationStatus";
import VaccinationOrganization from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationOrganization";
import VaccinationPatient from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPatient";
import VaccinationPractitioner from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitioner";
import VaccinationPractitionerAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitionerAddendum";
import VaccinationPractitionerrole from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitionerrole";
import VaccinationPractitionerroleAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationPractitionerroleAddendum";
import VaccinationProvenance from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationProvenance";
import VaccinationRecordAddendum from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationRecordAddendum";
import VaccinationRecordPrime from "./../Definitions/KBV/IM/1.00.000/Profile/VaccinationRecordPrime";

export type VaccinationResource =
    | VaccinationBundleEntry
    | VaccinationCompositionAddendum
    | VaccinationCompositionPrime
    | VaccinationCondition
    | VaccinationObservationImmunizationStatus
    | VaccinationOrganization
    | VaccinationPatient
    | VaccinationPractitioner
    | VaccinationPractitionerAddendum
    | VaccinationPractitionerrole
    | VaccinationPractitionerroleAddendum
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

export type KBVResource = VaccinationResource | ZAEBResource;

export type MIOType = Readonly<{
    profile: string;
    type: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    version: string;
}>;

export type KBVBundleResource = VaccinationBundleEntry | ZAEBBundle;

export const BundleTypes: MIOTypeList = [
    {
        profile: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle",
        type: ZAEBBundle,
        version: "1.00.000"
    },
    {
        profile:
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry",
        type: VaccinationBundleEntry,
        version: "1.00.000"
    }
];
export type MIOTypeList = MIOType[];

export const MIOTypes: MIOTypeList = [
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
            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum",
        type: VaccinationPractitionerAddendum,
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
    }
];
