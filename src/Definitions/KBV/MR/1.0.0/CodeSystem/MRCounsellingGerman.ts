import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Counselling_German
type MRCounsellingGerman =
    | "ErnährunguaJodzufuhrMedikamenteGenussmittelAlkoholTabakundandereDrogen"
    | "TaetigkeitBerufSportReisen"
    | "Sport"
    | "Reisen"
    | "Risikoberatung"
    | "GeburtsvorbereitungSchwangerschaftsgymnastik"
    | "Krebsfrueherkennungsuntersuchung"
    | "ZumHIVAntikoerpertest"
    | "ZurMundgesundheit";

const MRCounsellingGerman: t.Type<MRCounsellingGerman> = t.union([
    t.literal("ErnährunguaJodzufuhrMedikamenteGenussmittelAlkoholTabakundandereDrogen"),
    t.literal("TaetigkeitBerufSportReisen"),
    t.literal("Sport"),
    t.literal("Reisen"),
    t.literal("Risikoberatung"),
    t.literal("GeburtsvorbereitungSchwangerschaftsgymnastik"),
    t.literal("Krebsfrueherkennungsuntersuchung"),
    t.literal("ZumHIVAntikoerpertest"),
    t.literal("ZurMundgesundheit")
]);

export const MRCounsellingGermanArray: string[] = [
    "ErnährunguaJodzufuhrMedikamenteGenussmittelAlkoholTabakundandereDrogen",
    "TaetigkeitBerufSportReisen",
    "Sport",
    "Reisen",
    "Risikoberatung",
    "GeburtsvorbereitungSchwangerschaftsgymnastik",
    "Krebsfrueherkennungsuntersuchung",
    "ZumHIVAntikoerpertest",
    "ZurMundgesundheit"
];

export default MRCounsellingGerman;
