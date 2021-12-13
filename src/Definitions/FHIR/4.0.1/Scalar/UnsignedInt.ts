import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for unsignedInt type: An integer with a value that is not negative (e.g. >= 0)
 */
class SCALARUnsignedIntType extends Type<number> {
    readonly _tag = "SCALARUnsignedIntType";

    public static regex = /^[0]|([1-9][0-9]*)$/;

    constructor() {
        super(
            "SCALARUnsignedIntType",

            (s): s is number =>
                (typeof s === "number" || typeof s === "string") &&
                SCALARUnsignedIntType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "UnsignedInt",
                              s,
                              SCALARUnsignedIntType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARUnsignedIntType };
const SCALARUnsignedInt = new SCALARUnsignedIntType();
export default SCALARUnsignedInt;
