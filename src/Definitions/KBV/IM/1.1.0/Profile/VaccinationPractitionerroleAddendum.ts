import * as t from "io-ts";
import { Literal, Excess, MinMaxArray, CustomReference } from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationPractitionerroleAddendumMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum|1.1.0">;
    id?: string;
}

export const VaccinationPractitionerroleAddendumMeta: t.Type<VaccinationPractitionerroleAddendumMeta> =
    t.recursion("VaccinationPractitionerroleAddendumMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum|1.1.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Practitioner that is able to provide the defined services for the organization.
 */
export interface VaccinationPractitionerroleAddendumPractitioner {
    reference: string;
    id?: string;
}

export const VaccinationPractitionerroleAddendumPractitioner: t.Type<VaccinationPractitionerroleAddendumPractitioner> =
    t.recursion("VaccinationPractitionerroleAddendumPractitioner", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitioner_Addendum|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The organization where the Practitioner performs the roles associated.
 */
export interface VaccinationPractitionerroleAddendumOrganization {
    reference: string;
    id?: string;
}

export const VaccinationPractitionerroleAddendumOrganization: t.Type<VaccinationPractitionerroleAddendumOrganization> =
    t.recursion("VaccinationPractitionerroleAddendumOrganization", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization_Addendum|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface VaccinationPractitionerroleAddendum {
    resourceType: "PractitionerRole";
    meta: VaccinationPractitionerroleAddendumMeta;
    practitioner: VaccinationPractitionerroleAddendumPractitioner;
    id?: string;
    text?: Narrative;
    organization?: VaccinationPractitionerroleAddendumOrganization;
}

const VaccinationPractitionerroleAddendum: t.Type<VaccinationPractitionerroleAddendum> =
    t.recursion("VaccinationPractitionerroleAddendum", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("PractitionerRole"),
                    meta: VaccinationPractitionerroleAddendumMeta,
                    practitioner: VaccinationPractitionerroleAddendumPractitioner
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    organization: VaccinationPractitionerroleAddendumOrganization
                })
            ])
        )
    );

export default VaccinationPractitionerroleAddendum;
