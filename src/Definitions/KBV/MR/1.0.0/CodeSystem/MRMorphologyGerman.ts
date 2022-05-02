import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Morphology_German
type MRMorphologyGerman =
    | "RumpfKonturunterbrechungandervorderenBauchwand"
    | "RumpfDarstellbarkeitdesMagensimlinkenOberbauch"
    | "RumpfDarstellbarkeitderHarnblase"
    | "ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose"
    | "ThoraxLinksseitigeHerzposition"
    | "ThoraxPersistierendeArrythmieimUntersuchungszeitraum"
    | "ThoraxDarstellbarkeitdesVierKammerBlicks"
    | "HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur"
    | "KopfVentrikelauffaelligkeiten"
    | "KopfAuffaelligkeitenderKopfform"
    | "KopfDarstellbarkeitdesKleinhirns";

const MRMorphologyGerman: t.Type<MRMorphologyGerman> = t.union([
    t.literal("RumpfKonturunterbrechungandervorderenBauchwand"),
    t.literal("RumpfDarstellbarkeitdesMagensimlinkenOberbauch"),
    t.literal("RumpfDarstellbarkeitderHarnblase"),
    t.literal("ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose"),
    t.literal("ThoraxLinksseitigeHerzposition"),
    t.literal("ThoraxPersistierendeArrythmieimUntersuchungszeitraum"),
    t.literal("ThoraxDarstellbarkeitdesVierKammerBlicks"),
    t.literal("HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur"),
    t.literal("KopfVentrikelauffaelligkeiten"),
    t.literal("KopfAuffaelligkeitenderKopfform"),
    t.literal("KopfDarstellbarkeitdesKleinhirns")
]);

export const MRMorphologyGermanArray: string[] = [
    "RumpfKonturunterbrechungandervorderenBauchwand",
    "RumpfDarstellbarkeitdesMagensimlinkenOberbauch",
    "RumpfDarstellbarkeitderHarnblase",
    "ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose",
    "ThoraxLinksseitigeHerzposition",
    "ThoraxPersistierendeArrythmieimUntersuchungszeitraum",
    "ThoraxDarstellbarkeitdesVierKammerBlicks",
    "HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur",
    "KopfVentrikelauffaelligkeiten",
    "KopfAuffaelligkeitenderKopfform",
    "KopfDarstellbarkeitdesKleinhirns"
];

export default MRMorphologyGerman;
