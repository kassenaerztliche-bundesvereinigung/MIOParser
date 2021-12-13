import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "http://fhir.de/StructureDefinition/CodingICD10GM"

interface CodingICD10GM {
    system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm";
    version: string;
    code: string;
    resourceType?: "Coding";
    id?: string;
    display?: string;
    userSelected?: boolean;
}

const CodingICD10GM: t.Type<CodingICD10GM> = t.recursion("CodingICD10GM", () =>
    t.intersection([
        t.type({
            system: Literal("http://fhir.de/CodeSystem/dimdi/icd-10-gm"),
            version: SCALARString,
            code: SCALARCode
        }),
        t.partial({
            resourceType: Literal("Coding"),
            id: SCALARString,
            display: SCALARString,
            userSelected: SCALARBoolean
        })
    ])
);

export default CodingICD10GM;
