import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Consultation_German
type CMRU2ConsultationGerman =
    | "StillenErnaehrung"
    | "ploetzlicherKindstod"
    | "InformationzuRachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"
    | "VitaminKProphylaxepruefenundwennnoetigdurchfuehren"
    | "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen";

const CMRU2ConsultationGerman: t.Type<CMRU2ConsultationGerman> = t.union([
    t.literal("StillenErnaehrung"),
    t.literal("ploetzlicherKindstod"),
    t.literal(
        "InformationzuRachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid"
    ),
    t.literal("VitaminKProphylaxepruefenundwennnoetigdurchfuehren"),
    t.literal(
        "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
    )
]);

export const CMRU2ConsultationGermanArray: string[] = [
    "StillenErnaehrung",
    "ploetzlicherKindstod",
    "InformationzuRachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid",
    "VitaminKProphylaxepruefenundwennnoetigdurchfuehren",
    "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen"
];

export default CMRU2ConsultationGerman;
