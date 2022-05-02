import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Snomed_German
type MRExaminationSnomedGerman =
    | "Laboruntersuchungunspezifisch"
    | "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis"
    | "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter"
    | "RoetelnVirusAntikoerperimSerumNachweis"
    | "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen"
    | "RoetelnVirusAntikoerperimSerumTiter"
    | "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis"
    | "HBsAntigenimSerumNachweis"
    | "HaemoglobinimBlutMasseproVolumen"
    | "ErythrozytenimBlutAnzahlproVolumen";

const MRExaminationSnomedGerman: t.Type<MRExaminationSnomedGerman> = t.union([
    t.literal("Laboruntersuchungunspezifisch"),
    t.literal("BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis"),
    t.literal("BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter"),
    t.literal("RoetelnVirusAntikoerperimSerumNachweis"),
    t.literal("RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen"),
    t.literal("RoetelnVirusAntikoerperimSerumTiter"),
    t.literal(
        "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis"
    ),
    t.literal("HBsAntigenimSerumNachweis"),
    t.literal("HaemoglobinimBlutMasseproVolumen"),
    t.literal("ErythrozytenimBlutAnzahlproVolumen")
]);

export const MRExaminationSnomedGermanArray: string[] = [
    "Laboruntersuchungunspezifisch",
    "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis",
    "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
    "RoetelnVirusAntikoerperimSerumNachweis",
    "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen",
    "RoetelnVirusAntikoerperimSerumTiter",
    "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis",
    "HBsAntigenimSerumNachweis",
    "HaemoglobinimBlutMasseproVolumen",
    "ErythrozytenimBlutAnzahlproVolumen"
];

export default MRExaminationSnomedGerman;
