import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";

import SCALARMarkdown from "../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUrl from "../../../../Definitions/FHIR/4.0.1/Scalar/Url";
import Attachment from "../../../../Definitions/FHIR/4.0.1/Profile/Attachment";
import RelatedartifacttypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Relatedartifacttype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/RelatedArtifact"

interface RelatedArtifact {
    type: RelatedartifacttypeVS;
    resourceType?: "RelatedArtifact";
    id?: string;
    label?: string;
    display?: string;
    citation?: string;
    url?: string;
    document?: Attachment;
    resource?: string;
}

const RelatedArtifact: t.Type<RelatedArtifact> = t.recursion("RelatedArtifact", () =>
    t.intersection([
        t.type({
            type: RelatedartifacttypeVS
        }),
        t.partial({
            resourceType: Literal("RelatedArtifact"),
            id: SCALARString,
            label: SCALARString,
            display: SCALARString,
            citation: SCALARMarkdown,
            url: SCALARUrl,
            document: Attachment,
            resource: SCALARCanonical
        })
    ])
);

export default RelatedArtifact;
