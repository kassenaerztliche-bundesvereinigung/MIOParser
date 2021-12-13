import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/CodeableConcept"

interface CodeableConcept {
    resourceType?: "CodeableConcept";
    id?: string;
    coding?: Coding[];
    text?: string;
}

const CodeableConcept: t.Type<CodeableConcept> = t.recursion("CodeableConcept", () =>
    t.partial({
        resourceType: Literal("CodeableConcept"),
        id: SCALARString,
        coding: t.array(Coding),
        text: SCALARString
    })
);

export default CodeableConcept;
