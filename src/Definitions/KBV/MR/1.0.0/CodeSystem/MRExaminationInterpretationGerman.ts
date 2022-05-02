import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Interpretation_German
type MRExaminationInterpretationGerman = "Immunitaeterreicht" | "Immunitaetnichterreicht";

const MRExaminationInterpretationGerman: t.Type<MRExaminationInterpretationGerman> =
    t.union([t.literal("Immunitaeterreicht"), t.literal("Immunitaetnichterreicht")]);

export const MRExaminationInterpretationGermanArray: string[] = [
    "Immunitaeterreicht",
    "Immunitaetnichterreicht"
];

export default MRExaminationInterpretationGerman;
