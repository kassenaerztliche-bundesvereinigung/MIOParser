import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Consultation_German
type CMRU8ConsultationGerman =
    | "Unfallverhuetung"
    | "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    | "Ernaehrung"
    | "Bewegung"
    | "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung";

const CMRU8ConsultationGerman: t.Type<CMRU8ConsultationGerman> = t.union([
    t.literal("Unfallverhuetung"),
    t.literal(
        "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal("Ernaehrung"),
    t.literal("Bewegung"),
    t.literal("MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal(
        "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
    )
]);

export const CMRU8ConsultationGermanArray: string[] = [
    "Unfallverhuetung",
    "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
    "Ernaehrung",
    "Bewegung",
    "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
    "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
];

export default CMRU8ConsultationGerman;
