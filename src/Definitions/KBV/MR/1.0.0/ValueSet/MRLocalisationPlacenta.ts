import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRLocalisationPlacentaGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRLocalisationPlacentaGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Localisation_Placenta

type MRLocalisationPlacenta = "169954003" | "129125009:408730004=410525008";

const MRLocalisationPlacenta: t.Type<MRLocalisationPlacenta> = t.union(
    [t.literal("169954003"), t.literal("129125009:408730004=410525008")],
    "MRLocalisationPlacenta"
);

export const MRLocalisationPlacentaArray: string[] = [
    "169954003",
    "129125009:408730004=410525008"
];

export const MRLocalisationPlacentaValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169954003",
                display: "Placenta normal O/E (finding)"
            },
            {
                code: "129125009:408730004=410525008",
                display:
                    "Procedure with explicit context (situation) : Procedure context (attribute) = Needed (qualifier value)"
            }
        ]
    }
];

export { MRLocalisationPlacentaGerman as ConceptMap };

export default MRLocalisationPlacenta;
