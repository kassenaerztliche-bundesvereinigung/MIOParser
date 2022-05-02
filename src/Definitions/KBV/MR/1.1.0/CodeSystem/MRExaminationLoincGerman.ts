import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Loinc_German
type MRExaminationLoincGerman =
    | "Laboruntersuchungunspezifisch"
    | "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis"
    | "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter"
    | "RoetelnVirusAntikoerperimSerumNachweis"
    | "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen"
    | "RoetelnVirusAntikoerperimSerumTiter"
    | "HBsAntigenimSerumNachweis"
    | "HaemoglobinimBlutMasseproVolumen"
    | "ErythrozytenimBlutAnzahlproVolumen"
    | "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis";

const MRExaminationLoincGerman: t.Type<MRExaminationLoincGerman> = t.union([
    t.literal("Laboruntersuchungunspezifisch"),
    t.literal("BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis"),
    t.literal("BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter"),
    t.literal("RoetelnVirusAntikoerperimSerumNachweis"),
    t.literal("RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen"),
    t.literal("RoetelnVirusAntikoerperimSerumTiter"),
    t.literal("HBsAntigenimSerumNachweis"),
    t.literal("HaemoglobinimBlutMasseproVolumen"),
    t.literal("ErythrozytenimBlutAnzahlproVolumen"),
    t.literal(
        "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis"
    )
]);

export const MRExaminationLoincGermanArray: string[] = [
    "Laboruntersuchungunspezifisch",
    "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis",
    "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
    "RoetelnVirusAntikoerperimSerumNachweis",
    "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen",
    "RoetelnVirusAntikoerperimSerumTiter",
    "HBsAntigenimSerumNachweis",
    "HaemoglobinimBlutMasseproVolumen",
    "ErythrozytenimBlutAnzahlproVolumen",
    "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis"
];

export default MRExaminationLoincGerman;
