import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/SimpleQuantity"

interface SimpleQuantity {
    resourceType?: "Quantity";
    id?: string;
    value?: number;
    unit?: string;
    system?: string;
    code?: string;
}

const SimpleQuantity: t.Type<SimpleQuantity> = t.recursion("SimpleQuantity", () =>
    t.partial({
        resourceType: Literal("Quantity"),
        id: SCALARString,
        value: SCALARDecimal,
        unit: SCALARString,
        system: SCALARUri,
        code: SCALARCode
    })
);

export default SimpleQuantity;
