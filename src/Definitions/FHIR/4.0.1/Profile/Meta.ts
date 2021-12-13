import * as t from "io-ts";
import { Literal, ExtensibleCheck } from "../../../CustomTypes";
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARId from "../../../../Definitions/FHIR/4.0.1/Scalar/Id";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import SecuritylabelsVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Securitylabels";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Meta"

interface Meta {
    resourceType?: "Meta";
    id?: string;
    versionId?: string;
    lastUpdated?: string;
    source?: string;
    profile?: string[];
    security?: SecuritylabelsVS[];
    tag?: Coding[];
}

const Meta: t.Type<Meta> = t.recursion("Meta", () =>
    t.partial({
        resourceType: Literal("Meta"),
        id: SCALARString,
        versionId: SCALARId,
        lastUpdated: SCALARInstant,
        source: SCALARUri,
        profile: t.array(SCALARCanonical),
        security: t.array(ExtensibleCheck<t.Type<SecuritylabelsVS>>(SecuritylabelsVS)),
        tag: t.array(Coding)
    })
);

export default Meta;
