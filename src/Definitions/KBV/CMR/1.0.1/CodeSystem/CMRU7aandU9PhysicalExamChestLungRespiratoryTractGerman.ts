import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_and_U9_Physical_Exam_Chest_Lung_Respiratory_Tract_German
type CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman =
    | "Auskultation"
    | "Atemgeraeusch"
    | "Atemfrequenz"
    | "Thoraxkonfiguration"
    | "Mamillenabstand";

const CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman: t.Type<CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman> =
    t.union([
        t.literal("Auskultation"),
        t.literal("Atemgeraeusch"),
        t.literal("Atemfrequenz"),
        t.literal("Thoraxkonfiguration"),
        t.literal("Mamillenabstand")
    ]);

export const CMRU7aandU9PhysicalExamChestLungRespiratoryTractGermanArray: string[] = [
    "Auskultation",
    "Atemgeraeusch",
    "Atemfrequenz",
    "Thoraxkonfiguration",
    "Mamillenabstand"
];

export default CMRU7aandU9PhysicalExamChestLungRespiratoryTractGerman;
