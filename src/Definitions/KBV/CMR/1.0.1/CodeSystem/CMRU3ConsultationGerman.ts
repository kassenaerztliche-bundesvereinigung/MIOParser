import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Consultation_German
type CMRU3ConsultationGerman =
    | "StillenErnaehrungMundhygiene"
    | "ploetzlicherKindstod"
    | "VitaminKProphylaxepruefenundwennnoetigdurchfuehren"
    | "RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"
    | "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    | "Unfallverhuetung"
    | "AufklaerungueberImpfungenVorschlageinesImpftermins"
    | "UmgangmitSchreibaby";

const CMRU3ConsultationGerman: t.Type<CMRU3ConsultationGerman> = t.union([
    t.literal("StillenErnaehrungMundhygiene"),
    t.literal("ploetzlicherKindstod"),
    t.literal("VitaminKProphylaxepruefenundwennnoetigdurchfuehren"),
    t.literal("RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"),
    t.literal(
        "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    ),
    t.literal("Unfallverhuetung"),
    t.literal("AufklaerungueberImpfungenVorschlageinesImpftermins"),
    t.literal("UmgangmitSchreibaby")
]);

export const CMRU3ConsultationGermanArray: string[] = [
    "StillenErnaehrungMundhygiene",
    "ploetzlicherKindstod",
    "VitaminKProphylaxepruefenundwennnoetigdurchfuehren",
    "RachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid",
    "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen",
    "Unfallverhuetung",
    "AufklaerungueberImpfungenVorschlageinesImpftermins",
    "UmgangmitSchreibaby"
];

export default CMRU3ConsultationGerman;
