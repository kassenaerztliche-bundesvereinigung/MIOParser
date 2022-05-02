import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Immunization_Status_German
type MRImmunizationStatusGerman = "NachweisRoetelnImpfung" | "InfluenzaImpfung";

const MRImmunizationStatusGerman: t.Type<MRImmunizationStatusGerman> = t.union([
    t.literal("NachweisRoetelnImpfung"),
    t.literal("InfluenzaImpfung")
]);

export const MRImmunizationStatusGermanArray: string[] = [
    "NachweisRoetelnImpfung",
    "InfluenzaImpfung"
];

export default MRImmunizationStatusGerman;
