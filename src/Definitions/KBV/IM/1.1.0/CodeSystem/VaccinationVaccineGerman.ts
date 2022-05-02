import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Vaccine_German
type VaccinationVaccineGerman =
    | "Covid19Impfstoff"
    | "PertussisgereinigtesAntigenKombinationenmitToxoidenPertussisTetanusDiphtherieImpfstoff"
    | "TyphusexanthematicusImpfstoff"
    | "VarizellenImpfstoff"
    | "RoetelnMumpsImpfstoff"
    | "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBMeningokokkenACImpfstoff"
    | "DiphtheriePertussisPoliomyelitisTetanusHepatitisBImpfstoff"
    | "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBImpfstoff"
    | "TyphusHepatitisAImpfstoff"
    | "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusHepatitisBImpfstoff"
    | "HaemophilusinfluenzaeBHepatitisBImpfstoff"
    | "DiphtherieHepatitisBTetanusImpfstoff"
    | "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusImpfstoff"
    | "DiphtherieHepatitisBPertussisTetanusImpfstoff"
    | "HaemophilusinfluenzaeBPoliomyelitisImpfstoff"
    | "DiphtherieRoetelnTetanusImpfstoff"
    | "DiphtheriePertussisPoliomyelitisTetanusImpfstoff"
    | "DiphtheriePoliomyelitisTetanusImpfstoff"
    | "MasernMumpsRoetelnVaricellaImpfstoff"
    | "MasernRoetelnImpfstoff"
    | "MasernMumpsRoetelnMMRImpfstoff"
    | "MasernMumpsImpfstoff"
    | "HepatitisAundBImpfstoff"
    | "TetanusDiphtherieImpfstoff"
    | "PneumokokkenHaemophilusinfluenzaeBImpfstoff"
    | "HaemophilusinfluenzaeBMeningokokkenCImpfstoff"
    | "HaemophilusinfluenzaeBPertussisImpfstoff"
    | "CholeraTyphusImpfstoff"
    | "JapanischeEnzephalitisImpfstoff"
    | "FSMEImpfstoff"
    | "MumpsImpfstoff"
    | "PolioImpfstoff"
    | "RotaImpfstoff"
    | "TollwutImpfstoff"
    | "HerpesZosterTotimpfstoff"
    | "Pockenimpfstoff"
    | "HPVImpfstoff"
    | "Gelbfieberimpfstoff"
    | "Roetelnimpfstoff"
    | "Masernimpfstoff"
    | "HepatitisAImpfstoff"
    | "HepatitisBImpfstoff"
    | "Influenzaimpfstoff"
    | "Typhusimpfstoff"
    | "Tuberkuloseimpfstoff"
    | "Tetanusimpfstoff"
    | "Pneumokokkenimpfstoff"
    | "Pestimpfstoff"
    | "Pertussisimpfstoff"
    | "Meningokokkenimpfstoff"
    | "HaemophilusinfluenzaeBImpfstoff"
    | "Diphtherieimpfstoff"
    | "Choleraimpfstoff"
    | "Milzbrandimpfstoff"
    | "Immunglobulinenormalhuman"
    | "AntiDrhImmunglobulin"
    | "TetanusImmunglobulin"
    | "VaricellaZosterImmunglobulin"
    | "HepatitisBImmunglobulin"
    | "TollwutImmunglobulin"
    | "CytomegalievirusImmunglobulin"
    | "Palivizumab"
    | "Bezlotoxumab"
    | "Brucelloseimpfstoff"
    | "HerpesZosterLebendimpfstoff"
    | "SonstigerImpfstoffhiernichtgelistet";

const VaccinationVaccineGerman: t.Type<VaccinationVaccineGerman> = t.union([
    t.literal("Covid19Impfstoff"),
    t.literal(
        "PertussisgereinigtesAntigenKombinationenmitToxoidenPertussisTetanusDiphtherieImpfstoff"
    ),
    t.literal("TyphusexanthematicusImpfstoff"),
    t.literal("VarizellenImpfstoff"),
    t.literal("RoetelnMumpsImpfstoff"),
    t.literal(
        "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBMeningokokkenACImpfstoff"
    ),
    t.literal("DiphtheriePertussisPoliomyelitisTetanusHepatitisBImpfstoff"),
    t.literal("DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBImpfstoff"),
    t.literal("TyphusHepatitisAImpfstoff"),
    t.literal(
        "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusHepatitisBImpfstoff"
    ),
    t.literal("HaemophilusinfluenzaeBHepatitisBImpfstoff"),
    t.literal("DiphtherieHepatitisBTetanusImpfstoff"),
    t.literal("DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusImpfstoff"),
    t.literal("DiphtherieHepatitisBPertussisTetanusImpfstoff"),
    t.literal("HaemophilusinfluenzaeBPoliomyelitisImpfstoff"),
    t.literal("DiphtherieRoetelnTetanusImpfstoff"),
    t.literal("DiphtheriePertussisPoliomyelitisTetanusImpfstoff"),
    t.literal("DiphtheriePoliomyelitisTetanusImpfstoff"),
    t.literal("MasernMumpsRoetelnVaricellaImpfstoff"),
    t.literal("MasernRoetelnImpfstoff"),
    t.literal("MasernMumpsRoetelnMMRImpfstoff"),
    t.literal("MasernMumpsImpfstoff"),
    t.literal("HepatitisAundBImpfstoff"),
    t.literal("TetanusDiphtherieImpfstoff"),
    t.literal("PneumokokkenHaemophilusinfluenzaeBImpfstoff"),
    t.literal("HaemophilusinfluenzaeBMeningokokkenCImpfstoff"),
    t.literal("HaemophilusinfluenzaeBPertussisImpfstoff"),
    t.literal("CholeraTyphusImpfstoff"),
    t.literal("JapanischeEnzephalitisImpfstoff"),
    t.literal("FSMEImpfstoff"),
    t.literal("MumpsImpfstoff"),
    t.literal("PolioImpfstoff"),
    t.literal("RotaImpfstoff"),
    t.literal("TollwutImpfstoff"),
    t.literal("HerpesZosterTotimpfstoff"),
    t.literal("Pockenimpfstoff"),
    t.literal("HPVImpfstoff"),
    t.literal("Gelbfieberimpfstoff"),
    t.literal("Roetelnimpfstoff"),
    t.literal("Masernimpfstoff"),
    t.literal("HepatitisAImpfstoff"),
    t.literal("HepatitisBImpfstoff"),
    t.literal("Influenzaimpfstoff"),
    t.literal("Typhusimpfstoff"),
    t.literal("Tuberkuloseimpfstoff"),
    t.literal("Tetanusimpfstoff"),
    t.literal("Pneumokokkenimpfstoff"),
    t.literal("Pestimpfstoff"),
    t.literal("Pertussisimpfstoff"),
    t.literal("Meningokokkenimpfstoff"),
    t.literal("HaemophilusinfluenzaeBImpfstoff"),
    t.literal("Diphtherieimpfstoff"),
    t.literal("Choleraimpfstoff"),
    t.literal("Milzbrandimpfstoff"),
    t.literal("Immunglobulinenormalhuman"),
    t.literal("AntiDrhImmunglobulin"),
    t.literal("TetanusImmunglobulin"),
    t.literal("VaricellaZosterImmunglobulin"),
    t.literal("HepatitisBImmunglobulin"),
    t.literal("TollwutImmunglobulin"),
    t.literal("CytomegalievirusImmunglobulin"),
    t.literal("Palivizumab"),
    t.literal("Bezlotoxumab"),
    t.literal("Brucelloseimpfstoff"),
    t.literal("HerpesZosterLebendimpfstoff"),
    t.literal("SonstigerImpfstoffhiernichtgelistet")
]);

export const VaccinationVaccineGermanArray: string[] = [
    "Covid19Impfstoff",
    "PertussisgereinigtesAntigenKombinationenmitToxoidenPertussisTetanusDiphtherieImpfstoff",
    "TyphusexanthematicusImpfstoff",
    "VarizellenImpfstoff",
    "RoetelnMumpsImpfstoff",
    "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBMeningokokkenACImpfstoff",
    "DiphtheriePertussisPoliomyelitisTetanusHepatitisBImpfstoff",
    "DiphtherieHaemophilusinfluenzaeBPertussisTetanusHepatitisBImpfstoff",
    "TyphusHepatitisAImpfstoff",
    "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusHepatitisBImpfstoff",
    "HaemophilusinfluenzaeBHepatitisBImpfstoff",
    "DiphtherieHepatitisBTetanusImpfstoff",
    "DiphtherieHaemophilusinfluenzaeBPertussisPoliomyelitisTetanusImpfstoff",
    "DiphtherieHepatitisBPertussisTetanusImpfstoff",
    "HaemophilusinfluenzaeBPoliomyelitisImpfstoff",
    "DiphtherieRoetelnTetanusImpfstoff",
    "DiphtheriePertussisPoliomyelitisTetanusImpfstoff",
    "DiphtheriePoliomyelitisTetanusImpfstoff",
    "MasernMumpsRoetelnVaricellaImpfstoff",
    "MasernRoetelnImpfstoff",
    "MasernMumpsRoetelnMMRImpfstoff",
    "MasernMumpsImpfstoff",
    "HepatitisAundBImpfstoff",
    "TetanusDiphtherieImpfstoff",
    "PneumokokkenHaemophilusinfluenzaeBImpfstoff",
    "HaemophilusinfluenzaeBMeningokokkenCImpfstoff",
    "HaemophilusinfluenzaeBPertussisImpfstoff",
    "CholeraTyphusImpfstoff",
    "JapanischeEnzephalitisImpfstoff",
    "FSMEImpfstoff",
    "MumpsImpfstoff",
    "PolioImpfstoff",
    "RotaImpfstoff",
    "TollwutImpfstoff",
    "HerpesZosterTotimpfstoff",
    "Pockenimpfstoff",
    "HPVImpfstoff",
    "Gelbfieberimpfstoff",
    "Roetelnimpfstoff",
    "Masernimpfstoff",
    "HepatitisAImpfstoff",
    "HepatitisBImpfstoff",
    "Influenzaimpfstoff",
    "Typhusimpfstoff",
    "Tuberkuloseimpfstoff",
    "Tetanusimpfstoff",
    "Pneumokokkenimpfstoff",
    "Pestimpfstoff",
    "Pertussisimpfstoff",
    "Meningokokkenimpfstoff",
    "HaemophilusinfluenzaeBImpfstoff",
    "Diphtherieimpfstoff",
    "Choleraimpfstoff",
    "Milzbrandimpfstoff",
    "Immunglobulinenormalhuman",
    "AntiDrhImmunglobulin",
    "TetanusImmunglobulin",
    "VaricellaZosterImmunglobulin",
    "HepatitisBImmunglobulin",
    "TollwutImmunglobulin",
    "CytomegalievirusImmunglobulin",
    "Palivizumab",
    "Bezlotoxumab",
    "Brucelloseimpfstoff",
    "HerpesZosterLebendimpfstoff",
    "SonstigerImpfstoffhiernichtgelistet"
];

export default VaccinationVaccineGerman;
