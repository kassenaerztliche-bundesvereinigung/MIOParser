import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for string Type: A sequence of Unicode characters
 */
class SCALARStringType extends Type<string> {
    readonly _tag = "SCALARStringType";

    public static regex = /[ \r\n\t\S]+/;

    constructor() {
        super(
            "SCALARStringType",

            (s): s is string =>
                typeof s === "string" && SCALARStringType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "String",
                              s,
                              SCALARStringType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARStringType };
const SCALARString = new SCALARStringType();
export default SCALARString;
