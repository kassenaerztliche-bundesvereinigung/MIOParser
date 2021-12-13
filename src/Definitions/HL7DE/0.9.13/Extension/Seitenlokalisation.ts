import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

// Definition for URL: "http://fhir.de/StructureDefinition/seitenlokalisation"

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface SeitenlokalisationValueCoding {
    system: string;
    code: string;
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const SeitenlokalisationValueCoding: t.Type<SeitenlokalisationValueCoding> =
    t.recursion("SeitenlokalisationValueCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

interface Seitenlokalisation {
    url: "http://fhir.de/StructureDefinition/seitenlokalisation";
    valueCoding: SeitenlokalisationValueCoding;
    id?: string;
}

const Seitenlokalisation: t.Type<Seitenlokalisation> = t.recursion(
    "Seitenlokalisation",
    () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/seitenlokalisation"),
                valueCoding: SeitenlokalisationValueCoding
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Seitenlokalisation;
