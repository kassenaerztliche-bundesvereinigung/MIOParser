import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract_German
type CMRU2U4PhysicalExamChestLungRespiratoryTractGerman =
    | "Auskultation"
    | "Atemgeraeusch"
    | "Atemfrequenz"
    | "Einziehungen"
    | "Thoraxkonfiguration"
    | "Schluesselbeine";

const CMRU2U4PhysicalExamChestLungRespiratoryTractGerman: t.Type<CMRU2U4PhysicalExamChestLungRespiratoryTractGerman> =
    t.union([
        t.literal("Auskultation"),
        t.literal("Atemgeraeusch"),
        t.literal("Atemfrequenz"),
        t.literal("Einziehungen"),
        t.literal("Thoraxkonfiguration"),
        t.literal("Schluesselbeine")
    ]);

export const CMRU2U4PhysicalExamChestLungRespiratoryTractGermanArray: string[] = [
    "Auskultation",
    "Atemgeraeusch",
    "Atemfrequenz",
    "Einziehungen",
    "Thoraxkonfiguration",
    "Schluesselbeine"
];

export default CMRU2U4PhysicalExamChestLungRespiratoryTractGerman;
