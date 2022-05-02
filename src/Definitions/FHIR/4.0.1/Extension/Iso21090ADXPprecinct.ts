import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"

interface Iso21090ADXPprecinct {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

const Iso21090ADXPprecinct: t.Type<Iso21090ADXPprecinct> = t.recursion(
    "Iso21090ADXPprecinct",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                )
            }),
            t.partial({
                id: SCALARString,
                valueString: SCALARString
            })
        ])
);

export default Iso21090ADXPprecinct;
