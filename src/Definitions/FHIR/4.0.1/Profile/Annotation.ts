import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARMarkdown from "../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Annotation"

interface Annotation {
    text: string;
    resourceType?: "Annotation";
    id?: string;
    authorReference?: Reference;
    authorString?: string;
    time?: string;
}

const Annotation: t.Type<Annotation> = t.recursion("Annotation", () =>
    t.intersection([
        t.type({
            text: SCALARMarkdown
        }),
        t.partial({
            resourceType: Literal("Annotation"),
            id: SCALARString,
            authorReference: Reference,
            authorString: SCALARString,
            time: SCALARDateTime
        })
    ])
);

export default Annotation;
