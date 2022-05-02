import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Physical_Exam_Chest_Lung_Respiratory_Tract_German
type CMRU8PhysicalExamChestLungRespiratoryTractGerman =
    | "Auskultation"
    | "Atemgeraeusch"
    | "Atemfrequenz"
    | "Thoraxkonfiguration"
    | "Mamillenabstand"
    | "HinweisaufRachitis";

const CMRU8PhysicalExamChestLungRespiratoryTractGerman: t.Type<CMRU8PhysicalExamChestLungRespiratoryTractGerman> =
    t.union([
        t.literal("Auskultation"),
        t.literal("Atemgeraeusch"),
        t.literal("Atemfrequenz"),
        t.literal("Thoraxkonfiguration"),
        t.literal("Mamillenabstand"),
        t.literal("HinweisaufRachitis")
    ]);

export const CMRU8PhysicalExamChestLungRespiratoryTractGermanArray: string[] = [
    "Auskultation",
    "Atemgeraeusch",
    "Atemfrequenz",
    "Thoraxkonfiguration",
    "Mamillenabstand",
    "HinweisaufRachitis"
];

export default CMRU8PhysicalExamChestLungRespiratoryTractGerman;
