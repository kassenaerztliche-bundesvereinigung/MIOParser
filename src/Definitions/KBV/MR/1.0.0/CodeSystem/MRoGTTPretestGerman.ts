import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_oGTT_Pretest_German
type MRoGTTPretestGerman = "Vortestauffaelligja" | "Vortestauffaellignein";

const MRoGTTPretestGerman: t.Type<MRoGTTPretestGerman> = t.union([
    t.literal("Vortestauffaelligja"),
    t.literal("Vortestauffaellignein")
]);

export const MRoGTTPretestGermanArray: string[] = [
    "Vortestauffaelligja",
    "Vortestauffaellignein"
];

export default MRoGTTPretestGerman;
