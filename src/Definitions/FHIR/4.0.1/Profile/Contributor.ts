import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import ContactDetail from "../../../../Definitions/FHIR/4.0.1/Profile/ContactDetail";
import ContributortypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contributortype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Contributor"

interface Contributor {
    type: ContributortypeVS;
    name: string;
    resourceType?: "Contributor";
    id?: string;
    contact?: ContactDetail[];
}

const Contributor: t.Type<Contributor> = t.recursion("Contributor", () =>
    t.intersection([
        t.type({
            type: ContributortypeVS,
            name: SCALARString
        }),
        t.partial({
            resourceType: Literal("Contributor"),
            id: SCALARString,
            contact: t.array(ContactDetail)
        })
    ])
);

export default Contributor;
