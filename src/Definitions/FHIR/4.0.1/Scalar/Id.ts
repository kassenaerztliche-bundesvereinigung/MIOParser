import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for id type: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.
 */
class SCALARIdType extends Type<string> {
    readonly _tag = "SCALARIdType";

    public static regex = /^[A-Za-z0-9\-.]{1,64}$/;

    constructor() {
        super(
            "SCALARIdType",

            (s): s is string =>
                typeof s === "string" && SCALARIdType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Id", s, SCALARIdType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARIdType };
const SCALARId = new SCALARIdType();
export default SCALARId;
