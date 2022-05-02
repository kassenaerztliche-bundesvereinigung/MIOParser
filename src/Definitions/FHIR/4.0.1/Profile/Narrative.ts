import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARXhtml from "../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";
import NarrativestatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Narrativestatus";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Narrative"

interface Narrative {
    status: NarrativestatusVS;
    div: string;
    resourceType?: "Narrative";
    id?: string;
}

const Narrative: t.Type<Narrative> = t.recursion("Narrative", () =>
    t.intersection([
        t.type({
            status: NarrativestatusVS,
            div: SCALARXhtml
        }),
        t.partial({
            resourceType: Literal("Narrative"),
            id: SCALARString
        })
    ])
);

export default Narrative;
