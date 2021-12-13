import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German
type VaccinationLabImmuneReactionTestPresenceGerman =
    | "VarizellenAntikoerpernachweis"
    | "TetanusAntikoerpernachweis"
    | "PolioAntikoerpernachweis"
    | "PertussisAntikoerpernachweis"
    | "MumpsAntikoerpernachweis"
    | "MeningokokkenAntikoerpernachweis"
    | "MasernAntikoerpernachweis"
    | "HaemophilusinfluenzaeBAntikoerpernachweis"
    | "HepatitisBAntikoerpernachweis"
    | "HepatitisAAntikoerpernachweis"
    | "DiphtherieAntikoerpernachweis"
    | "RoetelnAntikoerpernachweis"
    | "TollwutAntikoerperbestimmung";

const VaccinationLabImmuneReactionTestPresenceGerman: t.Type<VaccinationLabImmuneReactionTestPresenceGerman> =
    t.union([
        t.literal("VarizellenAntikoerpernachweis"),
        t.literal("TetanusAntikoerpernachweis"),
        t.literal("PolioAntikoerpernachweis"),
        t.literal("PertussisAntikoerpernachweis"),
        t.literal("MumpsAntikoerpernachweis"),
        t.literal("MeningokokkenAntikoerpernachweis"),
        t.literal("MasernAntikoerpernachweis"),
        t.literal("HaemophilusinfluenzaeBAntikoerpernachweis"),
        t.literal("HepatitisBAntikoerpernachweis"),
        t.literal("HepatitisAAntikoerpernachweis"),
        t.literal("DiphtherieAntikoerpernachweis"),
        t.literal("RoetelnAntikoerpernachweis"),
        t.literal("TollwutAntikoerperbestimmung")
    ]);

export const VaccinationLabImmuneReactionTestPresenceGermanArray: string[] = [
    "VarizellenAntikoerpernachweis",
    "TetanusAntikoerpernachweis",
    "PolioAntikoerpernachweis",
    "PertussisAntikoerpernachweis",
    "MumpsAntikoerpernachweis",
    "MeningokokkenAntikoerpernachweis",
    "MasernAntikoerpernachweis",
    "HaemophilusinfluenzaeBAntikoerpernachweis",
    "HepatitisBAntikoerpernachweis",
    "HepatitisAAntikoerpernachweis",
    "DiphtherieAntikoerpernachweis",
    "RoetelnAntikoerpernachweis",
    "TollwutAntikoerperbestimmung"
];

export default VaccinationLabImmuneReactionTestPresenceGerman;
