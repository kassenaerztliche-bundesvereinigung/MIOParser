import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3U9AgeAppropriateDevelopmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3U9AgeAppropriateDevelopmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_U9_Age_Appropriate_Development

type CMRU3U9AgeAppropriateDevelopment = "23397005" | "409033001";

const CMRU3U9AgeAppropriateDevelopment: t.Type<CMRU3U9AgeAppropriateDevelopment> =
    t.union(
        [t.literal("23397005"), t.literal("409033001")],
        "CMRU3U9AgeAppropriateDevelopment"
    );

export const CMRU3U9AgeAppropriateDevelopmentArray: string[] = ["23397005", "409033001"];

export const CMRU3U9AgeAppropriateDevelopmentValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "23397005",
                display: "Normal growth and development for age (finding)"
            },
            {
                code: "409033001",
                display: "Altered growth and development (finding)"
            }
        ]
    }
];

export { CMRU3U9AgeAppropriateDevelopmentGerman as ConceptMap };

export default CMRU3U9AgeAppropriateDevelopment;
