import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import KBVVSSFHIRICDDIAGNOSESICHERHEITVS from "../../../../Definitions/HL7DE/0.9.11/ValueSet/KBVVSSFHIRICDDIAGNOSESICHERHEIT";

// Definition for URL: "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit"

interface Icd10gmdiagnosesicherheit {
    url: "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit";
    valueCoding: {
        system?: string;
        version?: string;
        code?: KBVVSSFHIRICDDIAGNOSESICHERHEITVS;
        display?: string;
        userSelected?: boolean;
    }[];
    id?: string;
}

const Icd10gmdiagnosesicherheit: t.Type<Icd10gmdiagnosesicherheit> = t.recursion(
    "Icd10gmdiagnosesicherheit",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit"
                ),
                valueCoding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: KBVVSSFHIRICDDIAGNOSESICHERHEITVS,
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

export default Icd10gmdiagnosesicherheit;
