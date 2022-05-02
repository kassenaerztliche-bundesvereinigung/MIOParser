import * as t from "io-ts";
import { Literal, ExtensibleCheck } from "../../../CustomTypes";

import SCALARId from "../../../../Definitions/FHIR/4.0.1/Scalar/Id";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import ExpressionlanguageVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Expressionlanguage";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Expression"

interface Expression {
    language: ExpressionlanguageVS;
    resourceType?: "Expression";
    id?: string;
    description?: string;
    name?: string;
    expression?: string;
    reference?: string;
}

const Expression: t.Type<Expression> = t.recursion("Expression", () =>
    t.intersection([
        t.type({
            language: ExtensibleCheck<t.Type<ExpressionlanguageVS>>(ExpressionlanguageVS)
        }),
        t.partial({
            resourceType: Literal("Expression"),
            id: SCALARString,
            description: SCALARString,
            name: SCALARId,
            expression: SCALARString,
            reference: SCALARUri
        })
    ])
);

export default Expression;
