import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification_German
type CMRGrafHipUltrasoundClassificationGerman =
    | "IaIb"
    | "IIa"
    | "IIcD"
    | "IIIa"
    | "IIIb"
    | "IV";

const CMRGrafHipUltrasoundClassificationGerman: t.Type<CMRGrafHipUltrasoundClassificationGerman> =
    t.union([
        t.literal("IaIb"),
        t.literal("IIa"),
        t.literal("IIcD"),
        t.literal("IIIa"),
        t.literal("IIIb"),
        t.literal("IV")
    ]);

export const CMRGrafHipUltrasoundClassificationGermanArray: string[] = [
    "IaIb",
    "IIa",
    "IIcD",
    "IIIa",
    "IIIb",
    "IV"
];

export default CMRGrafHipUltrasoundClassificationGerman;
