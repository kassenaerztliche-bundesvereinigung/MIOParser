import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Consultation_German
type CMRU6ConsultationGerman =
    | "Ernaehrung"
    | "RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"
    | "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    | "Unfallverhuetung"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "HinweisezuMundhygieneZahnpflegeundzahnschonenderErnaehrung"
    | "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    | "VerweiszumZahnarztzurZahnaerztinzurAbklaerungvonAuffaelligkeitenanZaehnenundSchleimhaut"
    | "Sucht";

const CMRU6ConsultationGerman: t.Type<CMRU6ConsultationGerman> = t.union([
    t.literal("Ernaehrung"),
    t.literal("RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"),
    t.literal(
        "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    ),
    t.literal("Unfallverhuetung"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal("HinweisezuMundhygieneZahnpflegeundzahnschonenderErnaehrung"),
    t.literal(
        "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal(
        "VerweiszumZahnarztzurZahnaerztinzurAbklaerungvonAuffaelligkeitenanZaehnenundSchleimhaut"
    ),
    t.literal("Sucht")
]);

export const CMRU6ConsultationGermanArray: string[] = [
    "Ernaehrung",
    "RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid",
    "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen",
    "Unfallverhuetung",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
    "HinweisezuMundhygieneZahnpflegeundzahnschonenderErnaehrung",
    "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
    "VerweiszumZahnarztzurZahnaerztinzurAbklaerungvonAuffaelligkeitenanZaehnenundSchleimhaut",
    "Sucht"
];

export default CMRU6ConsultationGerman;
