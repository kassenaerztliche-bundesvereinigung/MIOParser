import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/ContactDetail"

interface ContactDetail {
    resourceType?: "ContactDetail";
    id?: string;
    name?: string;
    telecom?: ContactPoint[];
}

const ContactDetail: t.Type<ContactDetail> = t.recursion("ContactDetail", () =>
    t.partial({
        resourceType: Literal("ContactDetail"),
        id: SCALARString,
        name: SCALARString,
        telecom: t.array(ContactPoint)
    })
);

export default ContactDetail;
