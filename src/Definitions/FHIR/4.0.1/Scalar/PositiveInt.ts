import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for positiveInt type: An integer with a value that is positive (e.g. >0)
 */
class SCALARPositiveIntType extends Type<number> {
    readonly _tag = "SCALARPositiveIntType";

    public static regex = /^[1-9][0-9]*$/;

    constructor() {
        super(
            "SCALARPositiveIntType",

            (s): s is number =>
                (typeof s === "number" || typeof s === "string") &&
                SCALARPositiveIntType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "PositiveInt",
                              s,
                              SCALARPositiveIntType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARPositiveIntType };
const SCALARPositiveInt = new SCALARPositiveIntType();
export default SCALARPositiveInt;
