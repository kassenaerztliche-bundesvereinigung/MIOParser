import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/SampledData"

interface SampledData {
    origin: SimpleQuantity;
    period: number;
    dimensions: number;
    resourceType?: "SampledData";
    id?: string;
    factor?: number;
    lowerLimit?: number;
    upperLimit?: number;
    data?: string;
}

const SampledData: t.Type<SampledData> = t.recursion("SampledData", () =>
    t.intersection([
        t.type({
            origin: SimpleQuantity,
            period: SCALARDecimal,
            dimensions: SCALARPositiveInt
        }),
        t.partial({
            resourceType: Literal("SampledData"),
            id: SCALARString,
            factor: SCALARDecimal,
            lowerLimit: SCALARDecimal,
            upperLimit: SCALARDecimal,
            data: SCALARString
        })
    ])
);

export default SampledData;
