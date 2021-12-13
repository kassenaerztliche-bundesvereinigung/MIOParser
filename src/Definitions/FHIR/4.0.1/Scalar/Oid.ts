import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for oid type: An OID represented as a URI
 */
class SCALAROidType extends Type<string> {
    readonly _tag = "SCALAROidType";

    public static regex = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;

    constructor() {
        super(
            "SCALAROidType",

            (s): s is string =>
                typeof s === "string" && SCALAROidType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Oid", s, SCALAROidType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALAROidType };
const SCALAROid = new SCALAROidType();
export default SCALAROid;
