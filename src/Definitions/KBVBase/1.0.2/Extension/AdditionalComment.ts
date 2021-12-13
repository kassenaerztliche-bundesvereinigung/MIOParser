import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"

interface AdditionalComment {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

const AdditionalComment: t.Type<AdditionalComment> = t.recursion(
    "AdditionalComment",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default AdditionalComment;
