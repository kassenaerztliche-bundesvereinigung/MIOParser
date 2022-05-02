import * as t from "io-ts";
import { Literal, ExtensibleCheck } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Identifier"

interface Identifier {
    resourceType?: "Identifier";
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: Reference;
}

const Identifier: t.Type<Identifier> = t.recursion("Identifier", () =>
    t.partial({
        resourceType: Literal("Identifier"),
        id: SCALARString,
        use: IdentifieruseVS,
        type: ExtensibleCheck<t.Type<IdentifiertypeVS>>(IdentifiertypeVS),
        system: SCALARUri,
        value: SCALARString,
        period: Period,
        assigner: Reference
    })
);

export default Identifier;
