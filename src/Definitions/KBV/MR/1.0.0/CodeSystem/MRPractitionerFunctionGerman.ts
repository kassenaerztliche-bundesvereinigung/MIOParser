import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Practitioner_Function_German
type MRPractitionerFunctionGerman = "arzt-aerztin";

const MRPractitionerFunctionGerman: t.Type<MRPractitionerFunctionGerman> =
    t.literal("arzt-aerztin");

export const MRPractitionerFunctionGermanArray: string[] = ["arzt-aerztin"];

export default MRPractitionerFunctionGerman;
