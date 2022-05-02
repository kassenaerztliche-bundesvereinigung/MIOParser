import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Direct_Coombstest_German
type MRDirectCoombstestGerman = "DirekterCoombstestpositiv" | "DirekterCoombstestnegativ";

const MRDirectCoombstestGerman: t.Type<MRDirectCoombstestGerman> = t.union([
    t.literal("DirekterCoombstestpositiv"),
    t.literal("DirekterCoombstestnegativ")
]);

export const MRDirectCoombstestGermanArray: string[] = [
    "DirekterCoombstestpositiv",
    "DirekterCoombstestnegativ"
];

export default MRDirectCoombstestGerman;
