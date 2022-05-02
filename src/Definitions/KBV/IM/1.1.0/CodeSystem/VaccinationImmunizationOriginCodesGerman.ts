import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_ImmunizationOriginCodes_German
type VaccinationImmunizationOriginCodesGerman =
    | "ElternPatientenErziehungsberechtigterErinnerung"
    | "SchriftlicheDokumentation"
    | "AndererArztodersonstigerimGesundheitsberuf";

const VaccinationImmunizationOriginCodesGerman: t.Type<VaccinationImmunizationOriginCodesGerman> =
    t.union([
        t.literal("ElternPatientenErziehungsberechtigterErinnerung"),
        t.literal("SchriftlicheDokumentation"),
        t.literal("AndererArztodersonstigerimGesundheitsberuf")
    ]);

export const VaccinationImmunizationOriginCodesGermanArray: string[] = [
    "ElternPatientenErziehungsberechtigterErinnerung",
    "SchriftlicheDokumentation",
    "AndererArztodersonstigerimGesundheitsberuf"
];

export default VaccinationImmunizationOriginCodesGerman;
