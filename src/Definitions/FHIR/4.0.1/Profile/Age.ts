import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Age"

interface Age {
    resourceType?: "Age";
    id?: string;
    value?: number;
    comparator?: QuantitycomparatorVS;
    unit?: string;
    system?: string;
    code?: string;
}

const Age: t.Type<Age> = t.recursion("Age", () =>
    t.partial({
        resourceType: Literal("Age"),
        id: SCALARString,
        value: SCALARDecimal,
        comparator: QuantitycomparatorVS,
        unit: SCALARString,
        system: SCALARUri,
        code: SCALARCode
    })
);

export default Age;
