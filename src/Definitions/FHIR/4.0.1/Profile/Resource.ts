import * as t from "io-ts";

import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Resource"

interface Resource {
    resourceType?: string;
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
}

const Resource: t.Type<Resource> = t.recursion("Resource", () =>
    t.partial({
        resourceType: t.string,
        id: SCALARString,
        meta: Meta,
        implicitRules: SCALARUri,
        language: SCALARCode
    })
);

export default Resource;
