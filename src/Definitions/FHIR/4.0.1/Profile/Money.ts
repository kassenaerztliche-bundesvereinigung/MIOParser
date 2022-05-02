import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CurrenciesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Currencies";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Money"

interface Money {
    resourceType?: "Money";
    id?: string;
    value?: number;
    currency?: CurrenciesVS;
}

const Money: t.Type<Money> = t.recursion("Money", () =>
    t.partial({
        resourceType: Literal("Money"),
        id: SCALARString,
        value: SCALARDecimal,
        currency: CurrenciesVS
    })
);

export default Money;
