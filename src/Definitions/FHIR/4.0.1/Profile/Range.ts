import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Range"

interface Range {
    resourceType?: "Range";
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
}

const Range: t.Type<Range> = t.recursion("Range", () =>
    t.partial({
        resourceType: Literal("Range"),
        id: SCALARString,
        low: SimpleQuantity,
        high: SimpleQuantity
    })
);

export default Range;
