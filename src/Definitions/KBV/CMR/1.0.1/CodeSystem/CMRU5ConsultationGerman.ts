import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Consultation_German
type CMRU5ConsultationGerman =
    | "StillenErnaehrung"
    | "ploetzlicherKindstod"
    | "RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"
    | "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    | "Unfallverhuetung"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendderSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "HinweisezuMundhygieneundzahnschonenderErnaehrung"
    | "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    | "VerweiszumZahnarztzurZahnaerztinzurAbklaerungvonAuffaelligkeitenanZaehnenundSchleimhaut"
    | "Sucht"
    | "UVSchutz";

const CMRU5ConsultationGerman: t.Type<CMRU5ConsultationGerman> = t.union([
    t.literal("StillenErnaehrung"),
    t.literal("ploetzlicherKindstod"),
    t.literal("RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"),
    t.literal(
        "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    ),
    t.literal("Unfallverhuetung"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendderSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal("HinweisezuMundhygieneundzahnschonenderErnaehrung"),
    t.literal(
        "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal(
        "VerweiszumZahnarztzurZahnaerztinzurAbklaerungvonAuffaelligkeitenanZaehnenundSchleimhaut"
    ),
    t.literal("Sucht"),
    t.literal("UVSchutz")
]);

export const CMRU5ConsultationGermanArray: string[] = [
    "StillenErnaehrung",
    "ploetzlicherKindstod",
    "RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid",
    "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen",
    "Unfallverhuetung",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendderSchutzimpfungsRichtliniedesGBAueberpruefen",
    "HinweisezuMundhygieneundzahnschonenderErnaehrung",
    "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
    "VerweiszumZahnarztzurZahnaerztinzurAbklaerungvonAuffaelligkeitenanZaehnenundSchleimhaut",
    "Sucht",
    "UVSchutz"
];

export default CMRU5ConsultationGerman;
