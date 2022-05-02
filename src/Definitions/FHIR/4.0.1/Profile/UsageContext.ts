import * as t from "io-ts";
import { Literal, ExtensibleCheck } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";

import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import UsagecontexttypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Usagecontexttype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/UsageContext"

interface UsageContext {
    code: UsagecontexttypeVS;
    resourceType?: "UsageContext";
    id?: string;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
}

const UsageContext: t.Type<UsageContext> = t.recursion("UsageContext", () =>
    t.intersection([
        t.type({
            code: ExtensibleCheck<t.Type<UsagecontexttypeVS>>(UsagecontexttypeVS)
        }),
        t.partial({
            resourceType: Literal("UsageContext"),
            id: SCALARString,
            valueCodeableConcept: CodeableConcept,
            valueQuantity: Quantity,
            valueRange: Range,
            valueReference: Reference
        })
    ])
);

export default UsageContext;
