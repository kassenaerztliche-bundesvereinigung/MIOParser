import * as t from "io-ts";
import { Literal, ExtensibleCheck } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Reference"

interface Reference {
    resourceType?: "Reference";
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: Identifier;
    display?: string;
}

const Reference: t.Type<Reference> = t.recursion("Reference", () =>
    t.partial({
        resourceType: Literal("Reference"),
        id: SCALARString,
        reference: SCALARString,
        type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS),
        identifier: Identifier,
        display: SCALARString
    })
);

export default Reference;
