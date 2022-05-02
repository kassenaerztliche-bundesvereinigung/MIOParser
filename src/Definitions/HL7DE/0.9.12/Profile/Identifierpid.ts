import * as t from "io-ts";
import { Literal, MinArray } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://fhir.de/StructureDefinition/identifier-pid"

/**
 * A reference to a code defined by a terminology system.
 */
export interface IdentifierpidTypeMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const IdentifierpidTypeMRType: t.Type<IdentifierpidTypeMRType> = t.recursion(
    "IdentifierpidTypeMRType",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("MR")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface IdentifierpidType {
    coding: Array<IdentifierpidTypeMRType>;
    id?: string;
    text?: string;
}

export const IdentifierpidType: t.Type<IdentifierpidType> = t.recursion(
    "IdentifierpidType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, IdentifierpidTypeMRType)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
);

interface Identifierpid {
    type: IdentifierpidType;
    system: string;
    value: string;
    resourceType?: "Identifier";
    id?: string;
    use?: "usual";
    period?: Period;
    assigner?: Reference;
}

const Identifierpid: t.Type<Identifierpid> = t.recursion("Identifierpid", () =>
    t.intersection([
        t.type({
            type: IdentifierpidType,
            system: SCALARUri,
            value: SCALARString
        }),
        t.partial({
            resourceType: Literal("Identifier"),
            id: SCALARString,
            use: Literal("usual"),
            period: Period,
            assigner: Reference
        })
    ])
);

export default Identifierpid;
