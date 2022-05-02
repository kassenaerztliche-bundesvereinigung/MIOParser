import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRGrafHipUltrasoundClassificationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRGrafHipUltrasoundClassificationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Graf_Hip_Ultrasound_Classification

type CMRGrafHipUltrasoundClassification = "1ab" | "2a" | "2cd" | "3a" | "3b" | "4";

const CMRGrafHipUltrasoundClassification: t.Type<CMRGrafHipUltrasoundClassification> =
    t.union(
        [
            t.literal("1ab"),
            t.literal("2a"),
            t.literal("2cd"),
            t.literal("3a"),
            t.literal("3b"),
            t.literal("4")
        ],
        "CMRGrafHipUltrasoundClassification"
    );

export const CMRGrafHipUltrasoundClassificationArray: string[] = [
    "1ab",
    "2a",
    "2cd",
    "3a",
    "3b",
    "4"
];

export const CMRGrafHipUltrasoundClassificationValueSet: ValueSet = [
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification",
        concept: [
            {
                code: "1ab",
                display: "Graf Ia/Ib"
            },
            {
                code: "2a",
                display: "Graf IIa"
            },
            {
                code: "2cd",
                display: "Graf IIc/D"
            },
            {
                code: "3a",
                display: "Graf IIIa"
            },
            {
                code: "3b",
                display: "Graf IIIb"
            },
            {
                code: "4",
                display: "Graf IV"
            }
        ]
    }
];

export { CMRGrafHipUltrasoundClassificationGerman as ConceptMap };

export default CMRGrafHipUltrasoundClassification;
