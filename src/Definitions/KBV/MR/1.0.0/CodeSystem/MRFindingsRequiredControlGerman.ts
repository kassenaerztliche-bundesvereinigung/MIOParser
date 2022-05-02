import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Findings_Required_Control_German
type MRFindingsRequiredControlGerman = "Fruchtwassermenge" | "KoerperlicheEntwicklung";

const MRFindingsRequiredControlGerman: t.Type<MRFindingsRequiredControlGerman> = t.union([
    t.literal("Fruchtwassermenge"),
    t.literal("KoerperlicheEntwicklung")
]);

export const MRFindingsRequiredControlGermanArray: string[] = [
    "Fruchtwassermenge",
    "KoerperlicheEntwicklung"
];

export default MRFindingsRequiredControlGerman;
