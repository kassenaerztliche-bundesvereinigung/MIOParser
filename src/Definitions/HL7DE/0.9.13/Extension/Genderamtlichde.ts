import * as t from "io-ts";
import { Literal } from "../../../CustomTypes";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import GenderamtlichdeVS from "../../../../Definitions/HL7DE/0.9.13/ValueSet/Genderamtlichde";

// Definition for URL: "http://fhir.de/StructureDefinition/gender-amtlich-de"

interface Genderamtlichde {
    url: "http://fhir.de/StructureDefinition/gender-amtlich-de";
    valueCoding: {
        system?: string;
        version?: string;
        code?: GenderamtlichdeVS;
        display?: string;
        userSelected?: boolean;
    }[];
    id?: string;
}

const Genderamtlichde: t.Type<Genderamtlichde> = t.recursion("Genderamtlichde", () =>
    t.intersection([
        t.type({
            url: Literal("http://fhir.de/StructureDefinition/gender-amtlich-de"),
            valueCoding: t.array(
                t.partial({
                    system: t.string,
                    version: t.string,
                    code: GenderamtlichdeVS,
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

export default Genderamtlichde;
