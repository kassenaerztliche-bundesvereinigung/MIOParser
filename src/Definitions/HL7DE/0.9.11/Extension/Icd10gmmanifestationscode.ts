import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CodingICD10GM from "../../../../Definitions/HL7DE/0.9.11/Profile/CodingICD10GM";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode"

interface Icd10gmmanifestationscode {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode";
    id?: string;
    valueCoding?: CodingICD10GM;
}

const Icd10gmmanifestationscode: t.Type<Icd10gmmanifestationscode> = t.recursion(
    "Icd10gmmanifestationscode",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode"
                )
            }),
            t.partial({
                id: SCALARString,
                valueCoding: CodingICD10GM
            })
        ])
);

export default Icd10gmmanifestationscode;
