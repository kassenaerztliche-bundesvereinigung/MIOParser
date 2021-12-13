import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for url type: A URI that is a literal reference
 */
class SCALARUrlType extends Type<string> {
    readonly _tag = "SCALARUrlType";

    public static regex = /^\S*$/;

    constructor() {
        super(
            "SCALARUrlType",

            (s): s is string =>
                typeof s === "string" && SCALARUrlType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Url", s, SCALARUrlType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARUrlType };
const SCALARUrl = new SCALARUrlType();
export default SCALARUrl;
