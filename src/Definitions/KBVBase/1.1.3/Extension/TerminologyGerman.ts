import * as t from "io-ts";
import { Literal, ReqArray } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"

/**
 * Content in other Language.
 */
export interface TerminologyGermanContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const TerminologyGermanContent: t.Type<TerminologyGermanContent> = t.recursion(
    "TerminologyGermanContent",
    () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

interface TerminologyGerman {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | TerminologyGermanContent)[];
}

const TerminologyGerman: t.Type<TerminologyGerman> = t.recursion(
    "TerminologyGerman",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                )
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<TerminologyGermanContent>]>,
                    t.Any
                >(
                    t.union([Extension, TerminologyGermanContent]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: TerminologyGermanContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
);

export default TerminologyGerman;
