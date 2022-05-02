import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRExaminationInterpretationGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRExaminationInterpretationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Interpretation

type MRExaminationInterpretation = "278968001" | "302764009";

const MRExaminationInterpretation: t.Type<MRExaminationInterpretation> = t.union(
    [t.literal("278968001"), t.literal("302764009")],
    "MRExaminationInterpretation"
);

export const MRExaminationInterpretationArray: string[] = ["278968001", "302764009"];

export const MRExaminationInterpretationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "278968001",
                display: "Rubella immune (finding)"
            },
            {
                code: "302764009",
                display: "Rubella non-immune (finding)"
            }
        ]
    }
];

export { MRExaminationInterpretationGerman as ConceptMap };

export default MRExaminationInterpretation;
