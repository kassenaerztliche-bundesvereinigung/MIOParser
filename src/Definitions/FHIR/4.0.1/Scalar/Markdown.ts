import { Type, success, failure, identity } from "io-ts";

import ErrorMessage from "../../../ErrorMessage";

/**
 *Base StructureDefinition for markdown type: A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine
 */
class SCALARMarkdownType extends Type<string> {
    readonly _tag = "SCALARMarkdownType";

    public static regex = /^[ \r\n\t\S]+$/;

    constructor() {
        super(
            "SCALARMarkdownType",

            (s): s is string =>
                typeof s === "string" && SCALARMarkdownType.regex.test(s.toString()),

            (s, c) => {
                return this.is(s)
                    ? success(s)
                    : failure(
                          s,
                          c,
                          ErrorMessage.Scalar(
                              "Markdown",
                              s,
                              SCALARMarkdownType.regex.toString()
                          )
                      );
            },
            identity
        );
    }
}
export { SCALARMarkdownType };
const SCALARMarkdown = new SCALARMarkdownType();
export default SCALARMarkdown;
