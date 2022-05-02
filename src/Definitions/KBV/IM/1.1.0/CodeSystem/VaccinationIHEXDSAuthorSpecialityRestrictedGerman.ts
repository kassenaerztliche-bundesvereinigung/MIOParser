import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_IHEXDS_AuthorSpeciality_Restricted_German
type VaccinationIHEXDSAuthorSpecialityRestrictedGerman = "arztaerztin";

const VaccinationIHEXDSAuthorSpecialityRestrictedGerman: t.Type<VaccinationIHEXDSAuthorSpecialityRestrictedGerman> =
    t.literal("arztaerztin");

export const VaccinationIHEXDSAuthorSpecialityRestrictedGermanArray: string[] = [
    "arztaerztin"
];

export default VaccinationIHEXDSAuthorSpecialityRestrictedGerman;
