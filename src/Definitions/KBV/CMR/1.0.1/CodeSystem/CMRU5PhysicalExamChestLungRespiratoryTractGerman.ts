import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Physical_Exam_Chest_Lung_Respiratory_Tract_German
type CMRU5PhysicalExamChestLungRespiratoryTractGerman =
    | "Auskultation"
    | "Atemgeraeusch"
    | "Atemfrequenz"
    | "Einziehungen"
    | "Thoraxkonfiguration";

const CMRU5PhysicalExamChestLungRespiratoryTractGerman: t.Type<CMRU5PhysicalExamChestLungRespiratoryTractGerman> =
    t.union([
        t.literal("Auskultation"),
        t.literal("Atemgeraeusch"),
        t.literal("Atemfrequenz"),
        t.literal("Einziehungen"),
        t.literal("Thoraxkonfiguration")
    ]);

export const CMRU5PhysicalExamChestLungRespiratoryTractGermanArray: string[] = [
    "Auskultation",
    "Atemgeraeusch",
    "Atemfrequenz",
    "Einziehungen",
    "Thoraxkonfiguration"
];

export default CMRU5PhysicalExamChestLungRespiratoryTractGerman;
