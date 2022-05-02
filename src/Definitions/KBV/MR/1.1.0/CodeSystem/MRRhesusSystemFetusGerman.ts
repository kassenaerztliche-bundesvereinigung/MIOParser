import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Rhesus_System_Fetus_German
type MRRhesusSystemFetusGerman = "RHDpositiv" | "RHDnegativ";

const MRRhesusSystemFetusGerman: t.Type<MRRhesusSystemFetusGerman> = t.union([
    t.literal("RHDpositiv"),
    t.literal("RHDnegativ")
]);

export const MRRhesusSystemFetusGermanArray: string[] = ["RHDpositiv", "RHDnegativ"];

export default MRRhesusSystemFetusGerman;
