import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_oGTT_Diagnosistest_German
type MRoGTTDiagnosistestGerman =
    | "Diagnosetestauffaelligja"
    | "Diagnosetestauffaellignein";

const MRoGTTDiagnosistestGerman: t.Type<MRoGTTDiagnosistestGerman> = t.union([
    t.literal("Diagnosetestauffaelligja"),
    t.literal("Diagnosetestauffaellignein")
]);

export const MRoGTTDiagnosistestGermanArray: string[] = [
    "Diagnosetestauffaelligja",
    "Diagnosetestauffaellignein"
];

export default MRoGTTDiagnosistestGerman;
