import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Localisation_Placenta_German
type MRLocalisationPlacentaGerman =
    | "Plazentalokalisationstrukturnormal"
    | "Plazentalokalisationstrukturkontrollbeduerftig";

const MRLocalisationPlacentaGerman: t.Type<MRLocalisationPlacentaGerman> = t.union([
    t.literal("Plazentalokalisationstrukturnormal"),
    t.literal("Plazentalokalisationstrukturkontrollbeduerftig")
]);

export const MRLocalisationPlacentaGermanArray: string[] = [
    "Plazentalokalisationstrukturnormal",
    "Plazentalokalisationstrukturkontrollbeduerftig"
];

export default MRLocalisationPlacentaGerman;
