import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U9_Consultation_German
type CMRU9ConsultationGerman =
    | "KariesprophylaxemittelsFluoridpruefen"
    | "Unfallverhuetung"
    | "SprachberatungFoerderungvondeutscherSpracheundMutterspracheeinschliesslichderLautundGebaerdensprache"
    | "BewegungundAdipositaspraevention"
    | "Ernaehrung"
    | "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"
    | "Sucht"
    | "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    | "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung";

const CMRU9ConsultationGerman: t.Type<CMRU9ConsultationGerman> = t.union([
    t.literal("KariesprophylaxemittelsFluoridpruefen"),
    t.literal("Unfallverhuetung"),
    t.literal(
        "SprachberatungFoerderungvondeutscherSpracheundMutterspracheeinschliesslichderLautundGebaerdensprache"
    ),
    t.literal("BewegungundAdipositaspraevention"),
    t.literal("Ernaehrung"),
    t.literal("MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung"),
    t.literal("Sucht"),
    t.literal(
        "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen"
    ),
    t.literal(
        "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
    )
]);

export const CMRU9ConsultationGermanArray: string[] = [
    "KariesprophylaxemittelsFluoridpruefen",
    "Unfallverhuetung",
    "SprachberatungFoerderungvondeutscherSpracheundMutterspracheeinschliesslichderLautundGebaerdensprache",
    "BewegungundAdipositaspraevention",
    "Ernaehrung",
    "MedienzBMedienkonsumTVSpielekonsolenDauerbeschallung",
    "Sucht",
    "AufklaerungueberImpfungenVorschlageinesImpfterminsImpfstatusentsprechendSchutzimpfungsRichtliniedesGBAueberpruefen",
    "VerweiszurZahnaerztinoderzumZahnarztzurzahnaerztlichenFrueherkennungsuntersuchung"
];

export default CMRU9ConsultationGerman;
