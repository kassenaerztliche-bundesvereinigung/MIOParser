import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRBiometricsIGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRBiometricsIGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Biometrics_I

type MRBiometricsI = "1156895008" | "276352009" | "281688001";

const MRBiometricsI: t.Type<MRBiometricsI> = t.union(
    [t.literal("1156895008"), t.literal("276352009"), t.literal("281688001")],
    "MRBiometricsI"
);

export const MRBiometricsIArray: string[] = ["1156895008", "276352009", "281688001"];

export const MRBiometricsIValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "1156895008",
                display: "Diameter of amniotic sac (observable entity)"
            },
            {
                code: "276352009",
                display: "Crown rump length (observable entity)"
            },
            {
                code: "281688001",
                display: "Biparietal diameter (observable entity)"
            }
        ]
    }
];

export { MRBiometricsIGerman as ConceptMap };

export default MRBiometricsI;
