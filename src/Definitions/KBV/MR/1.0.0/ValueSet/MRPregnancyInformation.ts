import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRPregnancyInformationGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRPregnancyInformationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Pregnancy_Information

type MRPregnancyInformation = "370383002" | "370386005" | "459167000";

const MRPregnancyInformation: t.Type<MRPregnancyInformation> = t.union(
    [t.literal("370383002"), t.literal("370386005"), t.literal("459167000")],
    "MRPregnancyInformation"
);

export const MRPregnancyInformationArray: string[] = [
    "370383002",
    "370386005",
    "459167000"
];

export const MRPregnancyInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "370383002",
                display: "Antenatal ultrasound confirms intrauterine pregnancy (finding)"
            },
            {
                code: "370386005",
                display: "Ultrasound scan - multiple fetus (finding)"
            },
            {
                code: "459167000",
                display: "Monochorionic twin pregnancy (disorder)"
            }
        ]
    }
];

export { MRPregnancyInformationGerman as ConceptMap };

export default MRPregnancyInformation;
