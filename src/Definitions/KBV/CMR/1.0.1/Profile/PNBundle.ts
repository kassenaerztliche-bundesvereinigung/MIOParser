import * as t from "io-ts";
import { Literal, Excess, MinArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Resource from "../../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Bundle"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface PNBundleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Bundle|1.0.1">;
    id?: string;
}

export const PNBundleMeta: t.Type<PNBundleMeta> = t.recursion("PNBundleMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PN_Bundle|1.0.1"
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
 * A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
 */
export interface PNBundleIdentifier {
    system: "urn:ietf:rfc:3938";
    value: string;
    id?: string;
}

export const PNBundleIdentifier: t.Type<PNBundleIdentifier> = t.recursion(
    "PNBundleIdentifier",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("urn:ietf:rfc:3938"),
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
export interface PNBundleEntry {
    fullUrl: string;
    resource: Resource;
    id?: string;
}

export const PNBundleEntry: t.Type<PNBundleEntry> = t.recursion("PNBundleEntry", () =>
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

interface PNBundle {
    resourceType: "Bundle";
    meta: PNBundleMeta;
    identifier: PNBundleIdentifier;
    type: "document";
    timestamp: string;
    entry: Array<PNBundleEntry>;
    id?: string;
}

const PNBundle: t.Type<PNBundle> = t.recursion("PNBundle", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Bundle"),
                meta: PNBundleMeta,
                identifier: PNBundleIdentifier,
                type: Literal("document"),
                timestamp: SCALARInstant,
                entry: MinArray(1, PNBundleEntry)
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default PNBundle;
