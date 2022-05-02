import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Gender_Extension

type MRGenderExtension = "X";

const MRGenderExtension: t.Type<MRGenderExtension> = t.literal("X");

export const MRGenderExtensionArray: string[] = ["X"];

export const MRGenderExtensionValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/gender-amtlich-de",
        concept: [
            {
                code: "X",
                display: "unbestimmt"
            }
        ]
    }
];

export default MRGenderExtension;
