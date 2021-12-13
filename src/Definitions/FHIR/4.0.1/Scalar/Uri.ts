import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for uri Type: String of characters used to identify a name or a resource
 */
class SCALARUriType extends Type<string> {
    readonly _tag = "SCALARUriType";

    public static regex = /^\S*$/;

    constructor() {
        super(
            "SCALARUriType",

            (s): s is string =>
                typeof s === "string" && SCALARUriType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Uri", s, SCALARUriType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARUriType };
const SCALARUri = new SCALARUriType();
export default SCALARUri;
