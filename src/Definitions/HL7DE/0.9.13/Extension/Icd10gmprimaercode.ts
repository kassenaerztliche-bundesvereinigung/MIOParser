import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodingICD10GM from "../../../../Definitions/HL7DE/0.9.13/Profile/CodingICD10GM";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-primaercode"

interface Icd10gmprimaercode {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-primaercode";
    id?: string;
    valueCoding?: CodingICD10GM;
}

const Icd10gmprimaercode: t.Type<Icd10gmprimaercode> = t.recursion(
    "Icd10gmprimaercode",
    () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/icd-10-gm-primaercode")
            }),
            t.partial({
                id: SCALARString,
                valueCoding: CodingICD10GM
            })
        ])
);

export default Icd10gmprimaercode;
