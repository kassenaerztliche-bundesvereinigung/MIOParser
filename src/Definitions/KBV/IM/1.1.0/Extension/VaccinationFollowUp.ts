import * as t from "io-ts";
import { Literal, Excess } from "../../../../CustomTypes";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Follow_Up"

interface VaccinationFollowUp {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Follow_Up";
    valueDateTime: string;
    id?: string;
}

const VaccinationFollowUp: t.Type<VaccinationFollowUp> = t.recursion(
    "VaccinationFollowUp",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Follow_Up"
                    ),
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default VaccinationFollowUp;
