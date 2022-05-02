import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Rhesus_System_German
type MRRhesusSystemGerman = "RhDpositiv" | "RhDnegativ";

const MRRhesusSystemGerman: t.Type<MRRhesusSystemGerman> = t.union([
    t.literal("RhDpositiv"),
    t.literal("RhDnegativ")
]);

export const MRRhesusSystemGermanArray: string[] = ["RhDpositiv", "RhDnegativ"];

export default MRRhesusSystemGerman;
