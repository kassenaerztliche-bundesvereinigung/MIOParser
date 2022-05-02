import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for instant Type: An instant in time - known at least to the second
 */
class SCALARInstantType extends Type<string> {
    readonly _tag = "SCALARInstantType";

    public static regex =
        /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/;

    constructor() {
        super(
            "SCALARInstantType",

            (s): s is string =>
                typeof s === "string" && SCALARInstantType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Instant",
                              s,
                              SCALARInstantType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARInstantType };
const SCALARInstant = new SCALARInstantType();
export default SCALARInstant;
