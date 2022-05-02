import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRBreastfeedingBehaviorGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRBreastfeedingBehaviorGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Breastfeeding_Behavior

type MRBreastfeedingBehavior = "69840006" | "289083006" | "169746009";

const MRBreastfeedingBehavior: t.Type<MRBreastfeedingBehavior> = t.union(
    [t.literal("69840006"), t.literal("289083006"), t.literal("169746009")],
    "MRBreastfeedingBehavior"
);

export const MRBreastfeedingBehaviorArray: string[] = [
    "69840006",
    "289083006",
    "169746009"
];

export const MRBreastfeedingBehaviorValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "69840006",
                display: "Normal breast feeding (finding)"
            },
            {
                code: "289083006",
                display: "Does not perform breast-feeding (finding)"
            },
            {
                code: "169746009",
                display: "Breastfeeding stopped (finding)"
            }
        ]
    }
];

export { MRBreastfeedingBehaviorGerman as ConceptMap };

export default MRBreastfeedingBehavior;
