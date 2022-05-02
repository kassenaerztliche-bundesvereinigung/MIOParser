import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRLocalisationPlacentaGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRLocalisationPlacentaGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Localisation_Placenta

type MRLocalisationPlacenta = "169952004:260245000=17621005" | "1157303009";

const MRLocalisationPlacenta: t.Type<MRLocalisationPlacenta> = t.union(
    [t.literal("169952004:260245000=17621005"), t.literal("1157303009")],
    "MRLocalisationPlacenta"
);

export const MRLocalisationPlacentaArray: string[] = [
    "169952004:260245000=17621005",
    "1157303009"
];

export const MRLocalisationPlacentaValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169952004:260245000=17621005",
                display:
                    "Placental finding (finding) : Finding value (qualifier value) = Normal (qualifier value)"
            },
            {
                code: "1157303009",
                display: "Requires follow-up (finding)"
            }
        ]
    }
];

export { MRLocalisationPlacentaGerman as ConceptMap };

export default MRLocalisationPlacenta;
