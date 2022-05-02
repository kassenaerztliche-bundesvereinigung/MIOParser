import * as t from "io-ts";
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"

interface CMRInstruction {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction";
    valueString: string;
    id?: string;
}

const CMRInstruction: t.Type<CMRInstruction> = t.recursion("CMRInstruction", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Instruction"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default CMRInstruction;
