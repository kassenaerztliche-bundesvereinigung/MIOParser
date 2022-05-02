import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import ContactpointsystemVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/ContactPoint"

interface ContactPoint {
    resourceType?: "ContactPoint";
    id?: string;
    system?: ContactpointsystemVS;
    value?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

const ContactPoint: t.Type<ContactPoint> = t.recursion("ContactPoint", () =>
    t.partial({
        resourceType: Literal("ContactPoint"),
        id: SCALARString,
        system: ContactpointsystemVS,
        value: SCALARString,
        use: ContactpointuseVS,
        rank: SCALARPositiveInt,
        period: Period
    })
);

export default ContactPoint;
