import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Unit_German
type MRExaminationUnitGerman = "Titer" | "106l" | "gdl" | "mmoll" | "IEml";

const MRExaminationUnitGerman: t.Type<MRExaminationUnitGerman> = t.union([
    t.literal("Titer"),
    t.literal("106l"),
    t.literal("gdl"),
    t.literal("mmoll"),
    t.literal("IEml")
]);

export const MRExaminationUnitGermanArray: string[] = [
    "Titer",
    "106l",
    "gdl",
    "mmoll",
    "IEml"
];

export default MRExaminationUnitGerman;
