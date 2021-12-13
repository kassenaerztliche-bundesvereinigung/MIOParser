import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_Consultation_German
type CMRU7ConsultationGerman =
    | "HinweiszurZahnpflegeFluorid"
    | "Unfallverhuetung"
    | "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    | "Bewegung"
    | "Ernaehrung"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung";

const CMRU7ConsultationGerman: t.Type<CMRU7ConsultationGerman> = t.union([
    t.literal("HinweiszurZahnpflegeFluorid"),
    t.literal("Unfallverhuetung"),
    t.literal(
        "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal("Bewegung"),
    t.literal("Ernaehrung"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal(
        "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
    )
]);

export const CMRU7ConsultationGermanArray: string[] = [
    "HinweiszurZahnpflegeFluorid",
    "Unfallverhuetung",
    "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
    "Bewegung",
    "Ernaehrung",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
    "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
];

export default CMRU7ConsultationGerman;
