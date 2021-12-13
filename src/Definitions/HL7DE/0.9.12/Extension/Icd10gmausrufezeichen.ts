import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodingICD10GM from "../../../../Definitions/HL7DE/0.9.12/Profile/CodingICD10GM";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen"

interface Icd10gmausrufezeichen {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen";
    id?: string;
    valueCoding?: CodingICD10GM;
}

const Icd10gmausrufezeichen: t.Type<Icd10gmausrufezeichen> = t.recursion(
    "Icd10gmausrufezeichen",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen"
                )
            }),
            t.partial({
                id: SCALARString,
                valueCoding: CodingICD10GM
            })
        ])
);

export default Icd10gmausrufezeichen;
