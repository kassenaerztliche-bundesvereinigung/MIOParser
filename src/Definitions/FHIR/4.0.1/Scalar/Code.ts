import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for code type: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents
 */
class SCALARCodeType extends Type<string> {
    readonly _tag = "SCALARCodeType";

    public static regex = /^[^\s]+(\s[^\s]+)*$/;

    constructor() {
        super(
            "SCALARCodeType",

            (s): s is string =>
                typeof s === "string" && SCALARCodeType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Code", s, SCALARCodeType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARCodeType };
const SCALARCode = new SCALARCodeType();
export default SCALARCode;
