import * as t from "io-ts";
import { Literal, Excess, CustomReference } from "../../../../CustomTypes";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory"

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface CMRExecutingLaboratoryValueReference {
    display: string;
    id?: string;
    reference?: string;
}

export const CMRExecutingLaboratoryValueReference: t.Type<CMRExecutingLaboratoryValueReference> =
    t.recursion("CMRExecutingLaboratoryValueReference", () =>
        Excess(
            t.intersection([
                t.type({
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
                    ])
                })
            ])
        )
    );

interface CMRExecutingLaboratory {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory";
    valueReference: CMRExecutingLaboratoryValueReference;
    id?: string;
}

const CMRExecutingLaboratory: t.Type<CMRExecutingLaboratory> = t.recursion(
    "CMRExecutingLaboratory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Executing_Laboratory"
                    ),
                    valueReference: CMRExecutingLaboratoryValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default CMRExecutingLaboratory;
