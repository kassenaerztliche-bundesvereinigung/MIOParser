import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodingICD10GM from "../../../../Definitions/HL7DE/0.9.7/Profile/CodingICD10GM";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen"

interface Icd10gmausrufezeichen {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen";
    valueCoding: CodingICD10GM;
    id?: string;
}

const Icd10gmausrufezeichen: t.Type<Icd10gmausrufezeichen> = t.recursion(
    "Icd10gmausrufezeichen",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen"
                ),
                valueCoding: CodingICD10GM
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Icd10gmausrufezeichen;
