import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARInteger from "../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import AlltypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Alltypes";
import OperationparameteruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Operationparameteruse";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/ParameterDefinition"

interface ParameterDefinition {
    use: OperationparameteruseVS;
    type: AlltypesVS;
    resourceType?: "ParameterDefinition";
    id?: string;
    name?: string;
    min?: number;
    max?: string;
    documentation?: string;
    profile?: string;
}

const ParameterDefinition: t.Type<ParameterDefinition> = t.recursion(
    "ParameterDefinition",
    () =>
        t.intersection([
            t.type({
                use: OperationparameteruseVS,
                type: AlltypesVS
            }),
            t.partial({
                resourceType: Literal("ParameterDefinition"),
                id: SCALARString,
                name: SCALARCode,
                min: SCALARInteger,
                max: SCALARString,
                documentation: SCALARString,
                profile: SCALARCanonical
            })
        ])
);

export default ParameterDefinition;
