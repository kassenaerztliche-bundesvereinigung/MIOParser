import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Bodysite_Hip_German
type CMRBodysiteHipGerman = "rechteHuefte" | "linkeHuefte";

const CMRBodysiteHipGerman: t.Type<CMRBodysiteHipGerman> = t.union([
    t.literal("rechteHuefte"),
    t.literal("linkeHuefte")
]);

export const CMRBodysiteHipGermanArray: string[] = ["rechteHuefte", "linkeHuefte"];

export default CMRBodysiteHipGerman;
