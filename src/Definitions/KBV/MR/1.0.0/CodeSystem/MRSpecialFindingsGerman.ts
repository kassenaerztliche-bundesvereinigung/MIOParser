import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Special_Findings_German
type MRSpecialFindingsGerman =
    | "BehandlungsbeduerftigeAllgemeinerkrankungen"
    | "Dauermedikation"
    | "Abusus"
    | "BesonderepsychischeBelastung"
    | "BesonderesozialeBelastung"
    | "BlutungenvorderSSW"
    | "BlutungennachderSSW"
    | "Placentapraevia"
    | "Mehrlingsschwangerschaft"
    | "Hydramnion"
    | "Oligohydramnie"
    | "Terminunklarheit"
    | "PlacentaInsuffizienz"
    | "IsthmozervikaleInsuffizienz"
    | "VorzeitigeWehentaetigkeit"
    | "Anaemie"
    | "Harnwegsinfekt"
    | "IndirekterCoombstestpositiv"
    | "RisikoausanderenserologischenBefunden"
    | "HypertonieBlutdruckueber"
    | "pathologischeEiweissausscheidung"
    | "MittelgradigeschwereOedeme"
    | "Hypotonie"
    | "Gestationsdiabetes"
    | "Einstellungsanomalie"
    | "AndereBesonderheiten";

const MRSpecialFindingsGerman: t.Type<MRSpecialFindingsGerman> = t.union([
    t.literal("BehandlungsbeduerftigeAllgemeinerkrankungen"),
    t.literal("Dauermedikation"),
    t.literal("Abusus"),
    t.literal("BesonderepsychischeBelastung"),
    t.literal("BesonderesozialeBelastung"),
    t.literal("BlutungenvorderSSW"),
    t.literal("BlutungennachderSSW"),
    t.literal("Placentapraevia"),
    t.literal("Mehrlingsschwangerschaft"),
    t.literal("Hydramnion"),
    t.literal("Oligohydramnie"),
    t.literal("Terminunklarheit"),
    t.literal("PlacentaInsuffizienz"),
    t.literal("IsthmozervikaleInsuffizienz"),
    t.literal("VorzeitigeWehentaetigkeit"),
    t.literal("Anaemie"),
    t.literal("Harnwegsinfekt"),
    t.literal("IndirekterCoombstestpositiv"),
    t.literal("RisikoausanderenserologischenBefunden"),
    t.literal("HypertonieBlutdruckueber"),
    t.literal("pathologischeEiweissausscheidung"),
    t.literal("MittelgradigeschwereOedeme"),
    t.literal("Hypotonie"),
    t.literal("Gestationsdiabetes"),
    t.literal("Einstellungsanomalie"),
    t.literal("AndereBesonderheiten")
]);

export const MRSpecialFindingsGermanArray: string[] = [
    "BehandlungsbeduerftigeAllgemeinerkrankungen",
    "Dauermedikation",
    "Abusus",
    "BesonderepsychischeBelastung",
    "BesonderesozialeBelastung",
    "BlutungenvorderSSW",
    "BlutungennachderSSW",
    "Placentapraevia",
    "Mehrlingsschwangerschaft",
    "Hydramnion",
    "Oligohydramnie",
    "Terminunklarheit",
    "PlacentaInsuffizienz",
    "IsthmozervikaleInsuffizienz",
    "VorzeitigeWehentaetigkeit",
    "Anaemie",
    "Harnwegsinfekt",
    "IndirekterCoombstestpositiv",
    "RisikoausanderenserologischenBefunden",
    "HypertonieBlutdruckueber",
    "pathologischeEiweissausscheidung",
    "MittelgradigeschwereOedeme",
    "Hypotonie",
    "Gestationsdiabetes",
    "Einstellungsanomalie",
    "AndereBesonderheiten"
];

export default MRSpecialFindingsGerman;
