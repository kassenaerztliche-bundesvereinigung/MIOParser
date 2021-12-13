import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for integer Type: A whole number
 */
class SCALARIntegerType extends Type<number> {
    readonly _tag = "SCALARIntegerType";

    public static regex = /^-?([0]|([1-9][0-9]*))$/;

    constructor() {
        super(
            "SCALARIntegerType",

            (s): s is number =>
                (typeof s === "number" || typeof s === "string") &&
                SCALARIntegerType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Integer",
                              s,
                              SCALARIntegerType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARIntegerType };
const SCALARInteger = new SCALARIntegerType();
export default SCALARInteger;
