import * as t from "io-ts";
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"

interface CMRNote {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note";
    valueString: string;
    id?: string;
}

const CMRNote: t.Type<CMRNote> = t.recursion("CMRNote", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Note"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default CMRNote;
