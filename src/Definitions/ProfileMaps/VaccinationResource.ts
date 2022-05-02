import * as Vaccination from "../KBV/IM/";

export type VaccinationResource =
    | Vaccination.V1_1_0.Profile.BundleEntry
    | Vaccination.V1_1_0.Profile.CompositionAddendum
    | Vaccination.V1_1_0.Profile.CompositionPrime
    | Vaccination.V1_1_0.Profile.Condition
    | Vaccination.V1_1_0.Profile.ObservationImmunizationStatus
    | Vaccination.V1_1_0.Profile.Organization
    | Vaccination.V1_1_0.Profile.OrganizationAddendum
    | Vaccination.V1_1_0.Profile.Patient
    | Vaccination.V1_1_0.Profile.Practitioner
    | Vaccination.V1_1_0.Profile.Practitionerrole
    | Vaccination.V1_1_0.Profile.PractitionerroleAddendum
    | Vaccination.V1_1_0.Profile.PractitionerAddendum
    | Vaccination.V1_1_0.Profile.Provenance
    | Vaccination.V1_1_0.Profile.RecordAddendum
    | Vaccination.V1_1_0.Profile.RecordPrime;
