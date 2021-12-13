import * as t from "io-ts";
import { Literal, Excess, MinArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Resource from "../../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationBundleEntryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.1.0">;
    id?: string;
    lastUpdated?: string;
}

export const VaccinationBundleEntryMeta: t.Type<VaccinationBundleEntryMeta> = t.recursion(
    "VaccinationBundleEntryMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Bundle_Entry|1.1.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString,
                    lastUpdated: SCALARInstant
                })
            ])
        )
);

/**
 * A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
 */
export interface VaccinationBundleEntryIdentifier {
    system: "urn:ietf:rfc:3986";
    value: string;
    id?: string;
}

export const VaccinationBundleEntryIdentifier: t.Type<VaccinationBundleEntryIdentifier> =
    t.recursion("VaccinationBundleEntryIdentifier", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("urn:ietf:rfc:3986"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 */
export interface VaccinationBundleEntryEntry {
    fullUrl: string;
    resource: Resource;
    id?: string;
}

export const VaccinationBundleEntryEntry: t.Type<VaccinationBundleEntryEntry> =
    t.recursion("VaccinationBundleEntryEntry", () =>
        Excess(
            t.intersection([
                t.type({
                    fullUrl: SCALARUri,
                    resource: Resource
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface VaccinationBundleEntry {
    resourceType: "Bundle";
    meta: VaccinationBundleEntryMeta;
    identifier: VaccinationBundleEntryIdentifier;
    type: "document";
    timestamp: string;
    entry: Array<VaccinationBundleEntryEntry>;
    id?: string;
}

const VaccinationBundleEntry: t.Type<VaccinationBundleEntry> = t.recursion(
    "VaccinationBundleEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Bundle"),
                    meta: VaccinationBundleEntryMeta,
                    identifier: VaccinationBundleEntryIdentifier,
                    type: Literal("document"),
                    timestamp: SCALARInstant,
                    entry: MinArray(1, VaccinationBundleEntryEntry)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default VaccinationBundleEntry;
