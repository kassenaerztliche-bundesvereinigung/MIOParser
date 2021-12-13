import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for time Type: A time during the day, with no date specified
 */
class SCALARTimeType extends Type<string> {
    readonly _tag = "SCALARTimeType";

    public static regex = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/;

    constructor() {
        super(
            "SCALARTimeType",

            (s): s is string =>
                typeof s === "string" && SCALARTimeType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Time", s, SCALARTimeType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARTimeType };
const SCALARTime = new SCALARTimeType();
export default SCALARTime;
