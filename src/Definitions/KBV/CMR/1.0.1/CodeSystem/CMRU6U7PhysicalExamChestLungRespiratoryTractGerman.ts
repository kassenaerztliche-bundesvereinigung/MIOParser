import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract_German
type CMRU6U7PhysicalExamChestLungRespiratoryTractGerman =
    | "Auskultation"
    | "Atemgeraeusch"
    | "Atemfrequenz"
    | "Einziehungen"
    | "Thoraxkonfiguration"
    | "Mamillenabstand";

const CMRU6U7PhysicalExamChestLungRespiratoryTractGerman: t.Type<CMRU6U7PhysicalExamChestLungRespiratoryTractGerman> =
    t.union([
        t.literal("Auskultation"),
        t.literal("Atemgeraeusch"),
        t.literal("Atemfrequenz"),
        t.literal("Einziehungen"),
        t.literal("Thoraxkonfiguration"),
        t.literal("Mamillenabstand")
    ]);

export const CMRU6U7PhysicalExamChestLungRespiratoryTractGermanArray: string[] = [
    "Auskultation",
    "Atemgeraeusch",
    "Atemfrequenz",
    "Einziehungen",
    "Thoraxkonfiguration",
    "Mamillenabstand"
];

export default CMRU6U7PhysicalExamChestLungRespiratoryTractGerman;
