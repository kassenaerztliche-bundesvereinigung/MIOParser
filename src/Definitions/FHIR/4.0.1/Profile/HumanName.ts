import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import NameuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Nameuse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/HumanName"

interface HumanName {
    resourceType?: "HumanName";
    id?: string;
    use?: NameuseVS;
    text?: string;
    family?: string;
    given?: string[];
    prefix?: string[];
    suffix?: string[];
    period?: Period;
}

const HumanName: t.Type<HumanName> = t.recursion("HumanName", () =>
    t.partial({
        resourceType: Literal("HumanName"),
        id: SCALARString,
        use: NameuseVS,
        text: SCALARString,
        family: SCALARString,
        given: t.array(SCALARString),
        prefix: t.array(SCALARString),
        suffix: t.array(SCALARString),
        period: Period
    })
);

export default HumanName;
