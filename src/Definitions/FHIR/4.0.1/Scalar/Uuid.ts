import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for uuid type: A UUID, represented as a URI
 */
class SCALARUuidType extends Type<string> {
    readonly _tag = "SCALARUuidType";

    public static regex =
        /^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    constructor() {
        super(
            "SCALARUuidType",

            (s): s is string =>
                typeof s === "string" && SCALARUuidType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar("Uuid", s, SCALARUuidType.regex.toString())
                      );
            },
            identity
        );
    }
}
export { SCALARUuidType };
const SCALARUuid = new SCALARUuidType();
export default SCALARUuid;
