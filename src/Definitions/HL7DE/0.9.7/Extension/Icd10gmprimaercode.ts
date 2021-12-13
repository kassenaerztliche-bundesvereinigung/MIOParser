import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodingICD10GM from "../../../../Definitions/HL7DE/0.9.7/Profile/CodingICD10GM";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-primaercode"

interface Icd10gmprimaercode {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-primaercode";
    valueCoding: CodingICD10GM;
    id?: string;
}

const Icd10gmprimaercode: t.Type<Icd10gmprimaercode> = t.recursion(
    "Icd10gmprimaercode",
    () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/icd-10-gm-primaercode"),
                valueCoding: CodingICD10GM
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Icd10gmprimaercode;
