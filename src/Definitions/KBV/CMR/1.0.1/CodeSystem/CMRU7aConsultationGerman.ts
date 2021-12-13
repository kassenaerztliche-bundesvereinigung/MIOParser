import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Consultation_German
type CMRU7aConsultationGerman =
    | "Unfallverhuetung"
    | "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    | "Ernaehrung"
    | "Bewegung"
    | "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"
    | "InformationueberzahnaerztlicheVorsorgeab30Monaten"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung";

const CMRU7aConsultationGerman: t.Type<CMRU7aConsultationGerman> = t.union([
    t.literal("Unfallverhuetung"),
    t.literal(
        "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal("Ernaehrung"),
    t.literal("Bewegung"),
    t.literal("MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"),
    t.literal("InformationueberzahnaerztlicheVorsorgeab30Monaten"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal(
        "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
    )
]);

export const CMRU7aConsultationGermanArray: string[] = [
    "Unfallverhuetung",
    "SprachberatungFoerderungvonMutterspracheunddeutscherSpracheeinschliesslichderLautundGebaerdensprache",
    "Ernaehrung",
    "Bewegung",
    "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung",
    "InformationueberzahnaerztlicheVorsorgeab30Monaten",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
    "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
];

export default CMRU7aConsultationGerman;
