import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for base64Binary Type: A stream of bytes
 */
class SCALARBase64BinaryType extends Type<string> {
    readonly _tag = "SCALARBase64BinaryType";

    public static regex = /(\s*([0-9a-zA-Z+=]){4}\s*)+/;

    constructor() {
        super(
            "SCALARBase64BinaryType",

            (s): s is string =>
                typeof s === "string" && SCALARBase64BinaryType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Base64Binary",
                              s,
                              SCALARBase64BinaryType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARBase64BinaryType };
const SCALARBase64Binary = new SCALARBase64BinaryType();
export default SCALARBase64Binary;
