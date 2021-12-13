import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Result_Qualitative_German
type MRExaminationResultQualitativeGerman =
    | "AntikoerperSuchtestnegativ"
    | "AntikoerperSuchtestpositiv"
    | "RoetelnAntikoerpertestnegativ"
    | "RoetelnAntikoerpertestpositiv"
    | "ChlamydiatrachomatisNachweisimUrinpositiv"
    | "ChlamydiatrachomatisNachweisimUrinnegativ"
    | "HBsAntigenimSerumNachweispositiv"
    | "HBsAntigenimSerumNachweisnegativ";

const MRExaminationResultQualitativeGerman: t.Type<MRExaminationResultQualitativeGerman> =
    t.union([
        t.literal("AntikoerperSuchtestnegativ"),
        t.literal("AntikoerperSuchtestpositiv"),
        t.literal("RoetelnAntikoerpertestnegativ"),
        t.literal("RoetelnAntikoerpertestpositiv"),
        t.literal("ChlamydiatrachomatisNachweisimUrinpositiv"),
        t.literal("ChlamydiatrachomatisNachweisimUrinnegativ"),
        t.literal("HBsAntigenimSerumNachweispositiv"),
        t.literal("HBsAntigenimSerumNachweisnegativ")
    ]);

export const MRExaminationResultQualitativeGermanArray: string[] = [
    "AntikoerperSuchtestnegativ",
    "AntikoerperSuchtestpositiv",
    "RoetelnAntikoerpertestnegativ",
    "RoetelnAntikoerpertestpositiv",
    "ChlamydiatrachomatisNachweisimUrinpositiv",
    "ChlamydiatrachomatisNachweisimUrinnegativ",
    "HBsAntigenimSerumNachweispositiv",
    "HBsAntigenimSerumNachweisnegativ"
];

export default MRExaminationResultQualitativeGerman;
