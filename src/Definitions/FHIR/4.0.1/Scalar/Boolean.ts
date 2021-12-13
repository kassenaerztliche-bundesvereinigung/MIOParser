import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for boolean Type: Value of "true" or "false"
 */
class SCALARBooleanType extends Type<boolean> {
    readonly _tag = "SCALARBooleanType";

    public static regex = /^true|false/;

    constructor() {
        super(
            "SCALARBooleanType",

            (s): s is boolean =>
                typeof s === "boolean" && SCALARBooleanType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Boolean",
                              s,
                              SCALARBooleanType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARBooleanType };
const SCALARBoolean = new SCALARBooleanType();
export default SCALARBoolean;
