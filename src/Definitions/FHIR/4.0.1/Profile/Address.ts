import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import AddresstypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Address"

interface Address {
    resourceType?: "Address";
    id?: string;
    use?: AddressuseVS;
    type?: AddresstypeVS;
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: Period;
}

const Address: t.Type<Address> = t.recursion("Address", () =>
    t.partial({
        resourceType: Literal("Address"),
        id: SCALARString,
        use: AddressuseVS,
        type: AddresstypeVS,
        text: SCALARString,
        line: t.array(SCALARString),
        city: SCALARString,
        district: SCALARString,
        state: SCALARString,
        postalCode: SCALARString,
        country: SCALARString,
        period: Period
    })
);

export default Address;
