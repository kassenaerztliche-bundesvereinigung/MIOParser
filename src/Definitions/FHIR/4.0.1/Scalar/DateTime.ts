import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for dateTime Type: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.
 */
class SCALARDateTimeType extends Type<string> {
    readonly _tag = "SCALARDateTimeType";

    public static regex =
        /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/;

    constructor() {
        super(
            "SCALARDateTimeType",

            (s): s is string =>
                typeof s === "string" && SCALARDateTimeType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "DateTime",
                              s,
                              SCALARDateTimeType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARDateTimeType };
const SCALARDateTime = new SCALARDateTimeType();
export default SCALARDateTime;
