import * as t from "io-ts";
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Basic_Immunization"

interface VaccinationBasicImmunization {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Basic_Immunization";
    valueBoolean: boolean;
    id?: string;
}

const VaccinationBasicImmunization: t.Type<VaccinationBasicImmunization> = t.recursion(
    "VaccinationBasicImmunization",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Basic_Immunization"
                    ),
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default VaccinationBasicImmunization;
