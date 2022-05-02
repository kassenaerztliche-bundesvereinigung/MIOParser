import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Practitioner_Speciality_German
type CMRPractitionerSpecialityGerman = "ArztAerztin";

const CMRPractitionerSpecialityGerman: t.Type<CMRPractitionerSpecialityGerman> =
    t.literal("ArztAerztin");

export const CMRPractitionerSpecialityGermanArray: string[] = ["ArztAerztin"];

export default CMRPractitionerSpecialityGerman;
