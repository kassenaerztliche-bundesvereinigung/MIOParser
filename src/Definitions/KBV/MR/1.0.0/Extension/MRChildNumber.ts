import * as t from "io-ts";
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARInteger from "../../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Child_Number"

interface MRChildNumber {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Child_Number";
    valueInteger: number;
    id?: string;
}

const MRChildNumber: t.Type<MRChildNumber> = t.recursion("MRChildNumber", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Child_Number"
                ),
                valueInteger: SCALARInteger
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default MRChildNumber;
