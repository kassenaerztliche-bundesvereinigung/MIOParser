import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRBiometricsIGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRBiometricsIGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Biometrics_I

type MRBiometricsI = "248326004:704325000=70847004" | "276352009" | "281688001";

const MRBiometricsI: t.Type<MRBiometricsI> = t.union(
    [
        t.literal("248326004:704325000=70847004"),
        t.literal("276352009"),
        t.literal("281688001")
    ],
    "MRBiometricsI"
);

export const MRBiometricsIArray: string[] = [
    "248326004:704325000=70847004",
    "276352009",
    "281688001"
];

export const MRBiometricsIValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "248326004:704325000=70847004",
                display:
                    "Body measure (observable entity) : Relative to (attribute) = Structure of amnion (body structure)"
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
