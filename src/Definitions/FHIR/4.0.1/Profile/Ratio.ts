import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Ratio"

interface Ratio {
    resourceType?: "Ratio";
    id?: string;
    numerator?: Quantity;
    denominator?: Quantity;
}

const Ratio: t.Type<Ratio> = t.recursion("Ratio", () =>
    t.partial({
        resourceType: Literal("Ratio"),
        id: SCALARString,
        numerator: Quantity,
        denominator: Quantity
    })
);

export default Ratio;
