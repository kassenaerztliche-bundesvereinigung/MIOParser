import * as t from "io-ts";
import { Literal, Excess, MinArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Resource from "../../../../../Definitions/FHIR/4.0.1/Profile/Resource";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Bundle"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRBundleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Bundle|1.0.0">;
    id?: string;
}

export const MRBundleMeta: t.Type<MRBundleMeta> = t.recursion("MRBundleMeta", () =>
    Excess(
        t.intersection([
            t.type({
                profile: MinMaxArray(
                    1,
                    1,
                    Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Bundle|1.0.0"
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
export interface MRBundleIdentifier {
    system: "urn:ietf:rfc:3986";
    value: string;
    id?: string;
}

export const MRBundleIdentifier: t.Type<MRBundleIdentifier> = t.recursion(
    "MRBundleIdentifier",
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
export interface MRBundleEntry {
    fullUrl: string;
    resource: Resource;
    id?: string;
}

export const MRBundleEntry: t.Type<MRBundleEntry> = t.recursion("MRBundleEntry", () =>
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

interface MRBundle {
    resourceType: "Bundle";
    meta: MRBundleMeta;
    identifier: MRBundleIdentifier;
    type: "document";
    timestamp: string;
    entry: Array<MRBundleEntry>;
    id?: string;
    implicitRules?: string;
    language?: string;
}

const MRBundle: t.Type<MRBundle> = t.recursion("MRBundle", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Bundle"),
                meta: MRBundleMeta,
                identifier: MRBundleIdentifier,
                type: Literal("document"),
                timestamp: SCALARInstant,
                entry: MinArray(2, MRBundleEntry)
            }),
            t.partial({
                id: SCALARString,
                implicitRules: SCALARUri,
                language: SCALARCode
            })
        ])
    )
);

export default MRBundle;
