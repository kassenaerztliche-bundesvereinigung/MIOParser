import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for canonical type: A URI that is a reference to a canonical URL on a FHIR resource
 */
class SCALARCanonicalType extends Type<string> {
    readonly _tag = "SCALARCanonicalType";

    public static regex = /^\S*$/;

    constructor() {
        super(
            "SCALARCanonicalType",

            (s): s is string =>
                typeof s === "string" && SCALARCanonicalType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Canonical",
                              s,
                              SCALARCanonicalType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARCanonicalType };
const SCALARCanonical = new SCALARCanonicalType();
export default SCALARCanonical;
