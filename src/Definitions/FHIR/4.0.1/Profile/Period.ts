import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Period"

interface Period {
    resourceType?: "Period";
    id?: string;
    start?: string;
    end?: string;
}

const Period: t.Type<Period> = t.recursion("Period", () =>
    t.partial({
        resourceType: Literal("Period"),
        id: SCALARString,
        start: SCALARDateTime,
        end: SCALARDateTime
    })
);

export default Period;
