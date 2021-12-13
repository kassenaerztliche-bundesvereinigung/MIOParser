import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for date Type: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
 */
class SCALARDateType extends Type<string> {
    readonly _tag = "SCALARDateType";

    public static regex =
        /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/;

    constructor() {
        super(
            "SCALARDateType",

            (s): s is string =>
                typeof s === "string" && SCALARDateType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Date", s, SCALARDateType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARDateType };
const SCALARDate = new SCALARDateType();
export default SCALARDate;
