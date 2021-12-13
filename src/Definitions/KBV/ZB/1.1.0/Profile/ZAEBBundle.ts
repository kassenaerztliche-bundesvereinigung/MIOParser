import * as t from "io-ts";
import { Literal, Excess, MinMaxArray } from "../../../../CustomTypes";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Resource from "../../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface ZAEBBundleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle|1.1.0">;
    id?: string;
}

export const ZAEBBundleMeta: t.Type<ZAEBBundleMeta> = t.recursion("ZAEBBundleMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Bundle|1.1.0"
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
export interface ZAEBBundleIdentifier {
    system: "urn:ietf:rfc:3986";
    value: string;
    id?: string;
}

export const ZAEBBundleIdentifier: t.Type<ZAEBBundleIdentifier> = t.recursion(
    "ZAEBBundleIdentifier",
    () =>
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
export interface ZAEBBundleEntry {
    fullUrl: string;
    resource: Resource;
    id?: string;
}

export const ZAEBBundleEntry: t.Type<ZAEBBundleEntry> = t.recursion(
    "ZAEBBundleEntry",
    () =>
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

interface ZAEBBundle {
    resourceType: "Bundle";
    meta: ZAEBBundleMeta;
    identifier: ZAEBBundleIdentifier;
    type: "document";
    timestamp: string;
    entry: Array<ZAEBBundleEntry>;
    id?: string;
}

const ZAEBBundle: t.Type<ZAEBBundle> = t.recursion("ZAEBBundle", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Bundle"),
                meta: ZAEBBundleMeta,
                identifier: ZAEBBundleIdentifier,
                type: Literal("document"),
                timestamp: SCALARInstant,
                entry: MinMaxArray(4, 5, ZAEBBundleEntry)
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default ZAEBBundle;
