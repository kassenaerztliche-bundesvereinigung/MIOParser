import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for xhtml Type
 */
class SCALARXhtmlType extends Type<string> {
    readonly _tag = "SCALARXhtmlType";

    public static regex = /^/;

    constructor() {
        super(
            "SCALARXhtmlType",

            (s): s is string =>
                typeof s === "string" && SCALARXhtmlType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Xhtml",
                              s,
                              SCALARXhtmlType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARXhtmlType };
const SCALARXhtml = new SCALARXhtmlType();
export default SCALARXhtml;
