import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRGeneralInformationGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRGeneralInformationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_General_Information

type MRGeneralInformation = "1157306001" | "249045009";

const MRGeneralInformation: t.Type<MRGeneralInformation> = t.union(
    [t.literal("1157306001"), t.literal("249045009")],
    "MRGeneralInformation"
);

export const MRGeneralInformationArray: string[] = ["1157306001", "249045009"];

export const MRGeneralInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "1157306001",
                display: "Embryo present in utero (finding)"
            },
            {
                code: "249045009",
                display: "Fetal heart sounds present (finding)"
            }
        ]
    }
];

export { MRGeneralInformationGerman as ConceptMap };

export default MRGeneralInformation;
