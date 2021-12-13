import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_TargetDisease_German
type VaccinationTargetDiseaseGerman =
    | "ErkrankungNotwendigkeitfuerImmunglobulingabe"
    | "Infektionskrankheitunspezifizierthiernichtgelistet";

const VaccinationTargetDiseaseGerman: t.Type<VaccinationTargetDiseaseGerman> = t.union([
    t.literal("ErkrankungNotwendigkeitfuerImmunglobulingabe"),
    t.literal("Infektionskrankheitunspezifizierthiernichtgelistet")
]);

export const VaccinationTargetDiseaseGermanArray: string[] = [
    "ErkrankungNotwendigkeitfuerImmunglobulingabe",
    "Infektionskrankheitunspezifizierthiernichtgelistet"
];

export default VaccinationTargetDiseaseGerman;
