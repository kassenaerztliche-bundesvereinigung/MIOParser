import * as t from "io-ts";
import { Literal, Excess, MinArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Resource from "../../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Bundle"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface PCBundleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Bundle|1.0.1">;
    id?: string;
}

export const PCBundleMeta: t.Type<PCBundleMeta> = t.recursion("PCBundleMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Bundle|1.0.1"
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
export interface PCBundleIdentifier {
    system: "urn:ietf:rfc:3937";
    value: string;
    id?: string;
}

export const PCBundleIdentifier: t.Type<PCBundleIdentifier> = t.recursion(
    "PCBundleIdentifier",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("urn:ietf:rfc:3937"),
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
export interface PCBundleEntry {
    fullUrl: string;
    resource: Resource;
    id?: string;
}

export const PCBundleEntry: t.Type<PCBundleEntry> = t.recursion("PCBundleEntry", () =>
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

interface PCBundle {
    resourceType: "Bundle";
    meta: PCBundleMeta;
    identifier: PCBundleIdentifier;
    type: "document";
    timestamp: string;
    entry: Array<PCBundleEntry>;
    id?: string;
}

const PCBundle: t.Type<PCBundle> = t.recursion("PCBundle", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Bundle"),
                meta: PCBundleMeta,
                identifier: PCBundleIdentifier,
                type: Literal("document"),
                timestamp: SCALARInstant,
                entry: MinArray(1, PCBundleEntry)
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default PCBundle;
