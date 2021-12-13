import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hip_Proceeding_German
type CMRHipProceedingGerman =
    | "Kontrollsonographie"
    | "UeberweisungzurdiagnostischenAbklaerung"
    | "Behandlungsempfehlung";

const CMRHipProceedingGerman: t.Type<CMRHipProceedingGerman> = t.union([
    t.literal("Kontrollsonographie"),
    t.literal("UeberweisungzurdiagnostischenAbklaerung"),
    t.literal("Behandlungsempfehlung")
]);

export const CMRHipProceedingGermanArray: string[] = [
    "Kontrollsonographie",
    "UeberweisungzurdiagnostischenAbklaerung",
    "Behandlungsempfehlung"
];

export default CMRHipProceedingGerman;
