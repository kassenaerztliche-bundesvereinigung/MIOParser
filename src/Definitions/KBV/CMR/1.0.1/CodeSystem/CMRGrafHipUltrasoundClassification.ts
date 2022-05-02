import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification
type CMRGrafHipUltrasoundClassification = "1ab" | "2a" | "2cd" | "3a" | "3b" | "4";

const CMRGrafHipUltrasoundClassification: t.Type<CMRGrafHipUltrasoundClassification> =
    t.union([
        t.literal("1ab"),
        t.literal("2a"),
        t.literal("2cd"),
        t.literal("3a"),
        t.literal("3b"),
        t.literal("4")
    ]);

export const CMRGrafHipUltrasoundClassificationArray: string[] = [
    "1ab",
    "2a",
    "2cd",
    "3a",
    "3b",
    "4"
];

export default CMRGrafHipUltrasoundClassification;
