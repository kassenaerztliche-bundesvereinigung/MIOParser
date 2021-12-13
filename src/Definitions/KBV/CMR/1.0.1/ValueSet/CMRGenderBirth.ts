import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRGenderBirthGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRGenderBirthGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Gender_Birth

type CMRGenderBirth = "703118005" | "703117000" | "394744001";

const CMRGenderBirth: t.Type<CMRGenderBirth> = t.union(
    [t.literal("703118005"), t.literal("703117000"), t.literal("394744001")],
    "CMRGenderBirth"
);

export const CMRGenderBirthArray: string[] = ["703118005", "703117000", "394744001"];

export const CMRGenderBirthValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "703118005",
                display: "Feminine gender (finding)"
            },
            {
                code: "703117000",
                display: "Masculine gender (finding)"
            },
            {
                code: "394744001",
                display: "Gender unspecified (finding)"
            }
        ]
    }
];

export { CMRGenderBirthGerman as ConceptMap };

export default CMRGenderBirth;
