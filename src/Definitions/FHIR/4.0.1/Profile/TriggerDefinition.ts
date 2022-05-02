import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARDate from "../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import DataRequirement from "../../../../Definitions/FHIR/4.0.1/Profile/DataRequirement";
import Expression from "../../../../Definitions/FHIR/4.0.1/Profile/Expression";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Timing from "../../../../Definitions/FHIR/4.0.1/Profile/Timing";
import TriggertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Triggertype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/TriggerDefinition"

interface TriggerDefinition {
    type: TriggertypeVS;
    resourceType?: "TriggerDefinition";
    id?: string;
    name?: string;
    timingTiming?: Timing;
    timingReference?: Reference;
    timingDate?: string;
    timingDateTime?: string;
    data?: DataRequirement[];
    condition?: Expression;
}

const TriggerDefinition: t.Type<TriggerDefinition> = t.recursion(
    "TriggerDefinition",
    () =>
        t.intersection([
            t.type({
                type: TriggertypeVS
            }),
            t.partial({
                resourceType: Literal("TriggerDefinition"),
                id: SCALARString,
                name: SCALARString,
                timingTiming: Timing,
                timingReference: Reference,
                timingDate: SCALARDate,
                timingDateTime: SCALARDateTime,
                data: t.array(DataRequirement),
                condition: Expression
            })
        ])
);

export default TriggerDefinition;
