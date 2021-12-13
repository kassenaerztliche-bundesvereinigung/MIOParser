import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for decimal Type: A rational number with implicit precision
 */
class SCALARDecimalType extends Type<number> {
    readonly _tag = "SCALARDecimalType";

    public static regex = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/;

    constructor() {
        super(
            "SCALARDecimalType",

            (s): s is number =>
                (typeof s === "number" || typeof s === "string") &&
                SCALARDecimalType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Decimal",
                              s,
                              SCALARDecimalType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARDecimalType };
const SCALARDecimal = new SCALARDecimalType();
export default SCALARDecimal;
