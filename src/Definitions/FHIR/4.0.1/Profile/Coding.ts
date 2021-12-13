import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Coding"

interface Coding {
    resourceType?: "Coding";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}

const Coding: t.Type<Coding> = t.recursion("Coding", () =>
    t.partial({
        resourceType: Literal("Coding"),
        id: SCALARString,
        system: SCALARUri,
        version: SCALARString,
        code: SCALARCode,
        display: SCALARString,
        userSelected: SCALARBoolean
    })
);

export default Coding;
